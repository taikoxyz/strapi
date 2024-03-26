import { metaPagination, pageLimit } from ".";
import { ConditionType } from "../typescript";

interface DataRequestProps {
    query?: Record<string, any>;
    _condition?: ConditionType;
    _limit?: number;
}

export const dataRequest = async (
    uid: string,
    { 
        query = {}, 
        _condition = {}, 
        _limit = 10 
    }: DataRequestProps
) => {
    const { page, limit } = pageLimit(query, _limit);

    const condition: ConditionType = {
        limit: limit,
        offset: (page - 1) * limit,
        ..._condition,
    };

    const results = await strapi.db.query(uid).findMany(condition);
    const count = await strapi.db.query(uid).count(condition);

    return {
        results,
        meta: metaPagination(count, limit, page),
    };
};
