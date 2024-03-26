/**
 * blog-category service
 */

import { factories } from "@strapi/strapi";
import { blogCategoryApi } from "../../../common/api/blog-category.api";

export default factories.createCoreService(
    "api::blog-category.blog-category",
    blogCategoryApi.service
);
