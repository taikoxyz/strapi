/**
 * project-category controller
 */

import { factories } from "@strapi/strapi";
import { projectCategoryApi } from "../../../common/api";

export default factories.createCoreController(
    "api::project-category.project-category",
    projectCategoryApi.controller
);
