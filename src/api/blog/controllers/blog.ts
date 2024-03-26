/**
 * blog controller
 */

import { factories } from "@strapi/strapi";
import { blogApi } from "../../../common/api/blog.api";

export default factories.createCoreController(
    "api::blog.blog",
    blogApi.controller
);
