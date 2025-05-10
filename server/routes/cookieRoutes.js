const express = require('express');
const router = express.Router();
const {
  getCookies,
  newCookie,
  getSingleCookie,
  updateCookie,
  deleteCookie
} = require('../controllers/cookieController');
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/cookies').get(getCookies);
router.route('/cookie/:id').get(getSingleCookie);

router.route('/admin/cookie/new').post(isAuthenticatedUser, newCookie);
router.route('/admin/cookie/:id')
  .put(isAuthenticatedUser, updateCookie)
  .delete(isAuthenticatedUser, deleteCookie);

module.exports = router;