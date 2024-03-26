export default {
    async near(ctx) {
        return strapi.service('api::blog.blog-custom' as any).near(+ctx.params.id);
    },
}