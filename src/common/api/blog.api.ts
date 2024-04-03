import { createApi } from './../utils/createApi';

export const blogApi = createApi('api::blog.blog', ['image', 'category'], {
    slug: true,
    published: true,
    builder: (query) => {
        const where: any = {};

        const $and: any[] = [];

        if(query.date?.from) {
            $and.push({
                date: { $gte: query.date.from }
            })
        }

        if(query.date?.to) {
            $and.push({
                date: { $lte: query.date.to }
            })
        }

        if($and.length > 0) {
            where.$and = $and;
        }

        if(query.categoryId) {
            where.category = { id: query.categoryId };
        }

        if(query.skipIds) {
            const ids = query.skipIds.split(',').map((item) => +item);

            where.id = { $notIn: ids }
        }

        return { where, orderBy: { date: 'desc' } };
    }
})