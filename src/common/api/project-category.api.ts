import { createApi } from "../utils/createApi";

export const projectCategoryApi = createApi(
    "api::project-category.project-category",
    {
        projects: {
            count: true,
        },
    }
);
