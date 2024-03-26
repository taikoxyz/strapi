/**
 * blog service
 */

import { factories } from "@strapi/strapi";
import { blogApi } from "../../../common/api/blog.api";

export default factories.createCoreService("api::blog.blog", blogApi.service);
