import { createApi } from "../utils/createApi";

export const eventApi = createApi("api::event.event", ["image"], {
    slug: true,
    builder(query) {
        const where: any = {};

        console.log(query)

        if(query.month) {
            where.date = {
                $gte: query.month.from,
                $lte: query.month.to
            }
        }

        if(query.location) {
            where.location = query.location;
        }

        return { where };
    }
});
