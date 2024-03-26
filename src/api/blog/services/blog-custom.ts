export default {
    async near(id) { 
        const next = await strapi.db.query('api::blog.blog').findOne({
            where: {
                id: {
                    $gt: id
                }
            }
        });

        const prev = await strapi.db.query('api::blog.blog').findOne({
            where: {
                id: {  $lt: id }
            },
            orderBy: {
                id: "desc"
            },
        })

        return {
            prev,
            next
        }
    }
}