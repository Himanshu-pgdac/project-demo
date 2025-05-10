const Cookie = require('../models/Cookie');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// Get all cookies => /api/v1/cookies
exports.getCookies = catchAsyncErrors(async (req, res, next) => {
  const cookies = await Cookie.find();

  res.status(200).json({
    success: true,
    count: cookies.length,
    cookies
  });
});

// Get single cookie details => /api/v1/cookie/:id
exports.getSingleCookie = catchAsyncErrors(async (req, res, next) => {
  const cookie = await Cookie.findById(req.params.id);

  if (!cookie) {
    return next(new ErrorHandler('Cookie not found', 404));
  }

  res.status(200).json({
    success: true,
    cookie
  });
});

// Create new cookie => /api/v1/admin/cookie/new
exports.newCookie = catchAsyncErrors(async (req, res, next) => {
  const cookie = await Cookie.create(req.body);

  res.status(201).json({
    success: true,
    cookie
  });
});

// Update cookie => /api/v1/admin/cookie/:id
exports.updateCookie = catchAsyncErrors(async (req, res, next) => {
  let cookie = await Cookie.findById(req.params.id);

  if (!cookie) {
    return next(new ErrorHandler('Cookie not found', 404));
  }

  cookie = await Cookie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    cookie
  });
});

// Delete cookie => /api/v1/admin/cookie/:id
exports.deleteCookie = catchAsyncErrors(async (req, res, next) => {
  const cookie = await Cookie.findById(req.params.id);

  if (!cookie) {
    return next(new ErrorHandler('Cookie not found', 404));
  }

  await cookie.remove();

  res.status(200).json({
    success: true,
    message: 'Cookie is deleted'
  });
});