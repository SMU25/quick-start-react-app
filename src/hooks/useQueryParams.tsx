import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_QUERY_PARAM_KEY = "page";
const LIMIT_QUERY_PARAM_KEY = "limit";
const OFFSET_QUERY_PARAM_KEY = "offset";

interface InitialValues {
  pageInitialValue?: number;
  limitInitialValue?: number;
  offsetInitialValue?: number;
}

export const useQueryParams = (initialValues?: InitialValues) => {
  const {
    pageInitialValue = 1,
    limitInitialValue = 10,
    offsetInitialValue,
  } = initialValues || {};

  const [queryParams, setQueryParams] = useSearchParams();

  const [page, setPage] = useState<number>(pageInitialValue);
  const [limit, setLimit] = useState<number>(limitInitialValue);
  const [offset, setOffset] = useState<number>(offsetInitialValue);

  const getQueryParam = (paramKey: string | number) =>
    queryParams.get(String(paramKey));

  const setQueryParam = (
    paramKey: string | number,
    paramValue: string | number
  ) => setQueryParams(`${paramKey}=${paramValue}`);

  const setQueryParamPage = (page: number) =>
    setQueryParams(`${PAGE_QUERY_PARAM_KEY}=${page}`);

  const setQueryParamLimit = (limit: number) =>
    setQueryParams(`${LIMIT_QUERY_PARAM_KEY}=${limit}`);

  const setQueryParamOffset = (offset: number) =>
    setQueryParams(`${OFFSET_QUERY_PARAM_KEY}=${offset}`);

  useEffect(() => {
    const page = Number(queryParams.get(PAGE_QUERY_PARAM_KEY));
    const limit = Number(queryParams.get(LIMIT_QUERY_PARAM_KEY));
    const offset = Number(queryParams.get(OFFSET_QUERY_PARAM_KEY));

    if (page) setPage(page);

    if (limit) setLimit(limit);

    if (offset) setOffset(offset);
  }, [queryParams]);

  return {
    pageInitialValue,
    limitInitialValue,
    offsetInitialValue,
    page,
    limit,
    offset,
    getQueryParam,
    setQueryParam,
    setQueryParamPage,
    setQueryParamLimit,
    setQueryParamOffset,
  };
};
