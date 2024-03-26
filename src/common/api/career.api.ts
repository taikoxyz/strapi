import { findAndPopulate } from "../utils/findAndPopulate";

export const careerApi = findAndPopulate("api::career.career", [], {
    slug: true,
});
