export default {
    routes: [
        {
            method: "GET",
            path: "/blogs/:id/near",
            handler: "blog-custom.near",
            config: {
                auth: false,
                policies: [],
                middlewares: []
            }
        }
    ]
}