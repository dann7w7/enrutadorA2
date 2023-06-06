import httpStatus from 'http-status';

export const get404 = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND)
  .render('404')
} 