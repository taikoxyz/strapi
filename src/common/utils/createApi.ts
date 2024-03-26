import { metaPagination, pageLimit } from "./pagination";

type Params = {
    where?: any;
    filters?: any;
    select?: any;
    populate?: Record<string, boolean> | string[];
    orderBy?: any;
    _q?: string;
    data?: any;
    page?: number;
    pageSize?: number;
    limit?: number;
    offset?: number;
    count?: boolean;
};

type Options = {
    slug?: boolean;
    published?: boolean;
    builder?: (query: any) => Params;
};

export const createApi = (
    key: string,
    populate: string[] | Record<string, any>,
    options: Options = {
        slug: false,
        published: false,
        builder: (query: any) => ({} as Params),
    }
) => {
    options = Object.assign(
        {
            slug: false,
            builder: (query: any) => ({} as Params),
        },
        options
    );

    return {
        service: {
            findOne: async (slugOrId) => {
                const context = strapi.requestContext.get();

                const params = options.builder(context.query);

                const $or: any = Array.isArray(params.where?.$or)
                    ? [...params.where?.$or, { id: slugOrId }]
                    : [{ id: slugOrId }];

                if (options.slug) {
                    $or.push({ slug: slugOrId });
                }

                return strapi.db.query(key).findOne({
                    ...params,
                    where: {
                        ...(params.where || {}),
                        ...(options.published ? { publishedAt: { $ne: null } } : {}),
                        $or,
                    },
                    populate
                }) as any;
            },

            find: async (ctx) => {
                const { page = 1, _limit, populate: _ } = ctx.query;

                const { limit: conditionLimit, page: conditionPage } =
                    pageLimit({ page: page || 1, _limit: _limit }, 10);

                const conditionParams = options.builder(ctx.query);

                const params = {
                    ...conditionParams,
                    where: {
                        ...(conditionParams.where || {}),
                        ...(options.published ? { publishedAt: { $ne: null } } : {}),
                    },
                    limit: conditionLimit,
                    offset: (conditionPage - 1) * conditionLimit,
                    populate
                };

                const results = await strapi.db.query(key).findMany(params);
                const count = await strapi.db.query(key).count(params);

                return {
                    results,
                    meta: metaPagination(count, conditionLimit, +page),
                } as any;
            },
        },

        controller: {
            findOne({ params }) {
                return strapi.service(key as any).findOne(params.id);
            },
            find(...ctx) {
                return strapi.service(key as any).find(...ctx);
            },
        },
    };
};
