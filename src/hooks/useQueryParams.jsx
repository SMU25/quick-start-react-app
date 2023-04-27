import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_QUERY_PARAM_KEY = "page";
const LIMIT_QUERY_PARAM_KEY = "limit";
const OFFSET_QUERY_PARAM_KEY = "offset";

export const useQueryParams = (initialValues) => {
  const {
    pageInitialValue = 1,
    limitInitialValue = 10,
    offsetInitialValue,
  } = initialValues || {};

  const [queryParams, setQueryParams] = useSearchParams();

  const [page, setPage] = useState(pageInitialValue);
  const [limit, setLimit] = useState(limitInitialValue);
  const [offset, setOffset] = useState(offsetInitialValue);

  const getQueryParam = (paramKey) => queryParams.get(paramKey);

  const setQueryParam = (paramKey, paramValue) =>
    setQueryParams(`${paramKey}=${paramValue}`);

  const setQueryParamPage = (page) =>
    setQueryParams(`${PAGE_QUERY_PARAM_KEY}=${page}`);

  const setQueryParamLimit = (limit) =>
    setQueryParams(`${LIMIT_QUERY_PARAM_KEY}=${limit}`);

  const setQueryParamOffset = (offset) =>
    setQueryParams(`${OFFSET_QUERY_PARAM_KEY}=${offset}`);

  useEffect(() => {
    const page = queryParams.get(PAGE_QUERY_PARAM_KEY);
    const limit = queryParams.get(LIMIT_QUERY_PARAM_KEY);
    const offset = queryParams.get(OFFSET_QUERY_PARAM_KEY);

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
