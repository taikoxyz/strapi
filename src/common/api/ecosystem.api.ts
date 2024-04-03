import { createApi } from '../utils/createApi';

export const ecosystemApi = createApi(
    "api::ecosystem.ecosystem", 
    ["icon", "project_categories"],
    {
        published: true,
        builder: (query) => {
            const where: any = { $or: [] };
            
            if(query.search) {
                where.$or.push(
                    { name: { $containsi: query.search } },
                    { description: { $containsi: query.search } }
                );
            }

            if(query.type) {
                where.type = { $eq: query.type };
            }

            if(query.category) {
                where.project_categories = { 
                    name: { $eq: query.category } 
                };
            }

            const orderBy = { name: 'ASC' };

            return { where, orderBy };
        }
    }
)