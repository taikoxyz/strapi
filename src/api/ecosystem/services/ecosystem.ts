import { ecosystemApi } from "./../../../common/api/ecosystem.api";
/**
 * ecosystem service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
    "api::ecosystem.ecosystem",
    ecosystemApi.service
);
