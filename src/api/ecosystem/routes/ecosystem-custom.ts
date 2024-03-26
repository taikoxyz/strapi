export default {
    routes: [
        {
            method: "GET",
            path: "/ecosystems/last",
            handler: "ecosystem-custom.last",
            config: {
                auth: false,
                policies: [],
                middlewares: []
            }
        }
    ]
}