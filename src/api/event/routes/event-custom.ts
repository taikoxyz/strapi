export default {
    routes: [
        {
            method: "GET",
            path: "/events/locations",
            handler: "event-custom.locations",
            config: {
                auth: false,
                policies: [],
                middlewares: []
            }
        }
    ]
}