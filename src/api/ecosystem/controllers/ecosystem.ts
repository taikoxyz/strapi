import { ecosystemApi } from "./../../../common/api/ecosystem.api";
/**
 * ecosystem controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::ecosystem.ecosystem",
    ecosystemApi.controller
);
