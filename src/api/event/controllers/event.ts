/**
 * event controller
 */

import { factories } from "@strapi/strapi";
import { eventApi } from "../../../common/api";

export default factories.createCoreController(
    "api::event.event",
    eventApi.controller
);
