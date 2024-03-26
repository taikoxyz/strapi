import { careerApi } from './../../../common/api/career.api';
/**
 * career controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::career.career', careerApi.controller);
