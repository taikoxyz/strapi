export default {
    async locations() {
        const events = await strapi.db.query('api::event.event').findMany();

        return Array.from(new Set(events.map((item) => item.location)))
            .map((location) => ({ name: location }));
    }
}