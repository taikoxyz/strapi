/**
 * event service
 */

import { factories } from "@strapi/strapi";
import { eventApi } from "../../../common/api";

export default factories.createCoreService(
    "api::event.event",
    eventApi.service
);
