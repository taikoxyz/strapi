import { careerApi } from './../../../common/api/career.api';
/**
 * career service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::career.career', careerApi.service);
