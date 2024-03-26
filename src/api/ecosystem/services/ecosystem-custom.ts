export default {
    last() {
        return strapi.db.query('api::ecosystem.ecosystem').findOne({
            where: { publishedAt: { $ne: null } },
            orderBy: { updatedAt: 'DESC' }
        });
    }
}