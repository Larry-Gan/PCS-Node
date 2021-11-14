import { useState } from 'react';

type PaginationFn = (() => void) | null;

type PaginationResult<T> = [T[], PaginationFn, PaginationFn, number];

export const usePagination = <T,>(
  limit: number,
  values: T[]
): PaginationResult<T> => {
  if (limit <= 0 || values.length == 0) return [[], null, null, 1];

  const [page, setPage] = useState(0);
  const numPages = Math.ceil(values.length / limit);

  const next = page + 1 < numPages ? () => setPage(page + 1) : null;
  const prev = page > 0 ? () => setPage(page - 1) : null;

  const pageValues = values.slice(page * limit, (page + 1) * limit);
  return [pageValues, next, prev, page + 1];
};
