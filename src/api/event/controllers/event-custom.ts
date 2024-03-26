export default {
    locations() {
        return strapi.service("api::event.event-custom").locations();
    },
};
