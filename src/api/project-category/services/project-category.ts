/**
 * project-category service
 */

import { factories } from "@strapi/strapi";
import { projectCategoryApi } from "../../../common/api";

export default factories.createCoreService(
    "api::project-category.project-category",
    projectCategoryApi.service
);
