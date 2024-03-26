import { dataRequest } from "./data-request";

export const findAndPopulate = (
    uid: string,
    populate: string[],
    options = {
        slug: false,
    }
) => ({
    service: {
        findOne(slugOrId) {
            const $or: any = [{ id: slugOrId }];

            if (options.slug) {
                $or.push({ slug: slugOrId });
            }

            return strapi.db.query(uid).findOne({
                where: { $or },
                populate,
            });
        },
        find(ctx): any {
            return dataRequest(uid, {
                query: ctx.query,
                _condition: {
                    populate,
                },
            });
        },
    },
    controller: {
        findOne({ params }) {
            return strapi.service(uid as any).findOne(params.id);
        },
        find(...ctx) {
            return strapi.service(uid as any).find(...ctx);
        },
    },
});
