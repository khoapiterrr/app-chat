import * as _ from 'lodash';
import { NextFunction, Response } from 'express';
import { Filters } from '../interfaces/app';
import { RequestWithUser } from '../interfaces/auth.interface';

export const paginationMiddleware = ({ maxSize = 500, defaultSize = 20, filterKeys = null, sortKeys = null }) => (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const size = Math.min(Math.max(-1, _.get(req, 'query.pageSize', defaultSize)), maxSize);

  const page = Math.max(1, _.get(req, 'query.pageIndex', 1));

  const offset = size * (page - 1);

  // condition and sort
  const _filters = req.query.filters || {};
  const _sorts = req.query.sorts || {};

  const filters = filterKeys ? _.pick(_filters, filterKeys) : _filters;
  const sorts = sortKeys ? _.pickBy(_sorts, (v, k) => sortKeys.includes(k) && !isNaN(+v)) : _.pickBy(_sorts, v => !isNaN(+v));
  // normalize sorts
  req.pagination = {
    page,
    offset,
    size,
    filters: filters as Filters,
    sorts: _.mapValues(sorts, v => (v ? Number(v) : -1)),
    keyword: req.query.keyword ? req.query.keyword.toString() : '',
  };
  next();
};
