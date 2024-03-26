export default {
    last() {
        return strapi.service("api::ecosystem.ecosystem-custom").last();
    },
};
