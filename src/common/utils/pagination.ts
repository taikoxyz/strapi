export const pageLimit = (params: Record<string, string>, _limit = 12) => {
  const page = Math.abs(parseInt(params.page)) || 1;
  const limit = Math.abs(parseInt(params._limit)) || _limit;

  return { page, limit };
};

export const metaPagination = (count: number, limit: number, page: number) => {
  return {
    page,
    total: count,
    pageSize: limit,
    pageCount: Math.ceil(count / limit),
  };
};
