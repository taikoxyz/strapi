/**
 * blog-category controller
 */

import { factories } from "@strapi/strapi";
import { blogCategoryApi } from "../../../common/api/blog-category.api";

export default factories.createCoreController(
    "api::blog-category.blog-category",
    blogCategoryApi.controller
);
