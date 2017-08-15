// dependencies
const express = require('express');
const router = express.Router();


// baseurl and apptitle
const baseurl  = '/';
const apptitle = 'Criminal Justice Services online';


// routes
router.all(baseurl, function(req, res, next) {
  req.session.destroy();
  res.render('index', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Main menu',
    pagetitle: 'Main menu'
  });
});


router.all(baseurl + 'select-user-type', function(req, res, next) {
  req.session.destroy();
  res.render('select-user-type', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Select user type',
    pagetitle: 'Select user type'
  });
});


router.all(baseurl + 'terms-and-conditions', function(req, res, next) {
  res.render('terms-and-conditions', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Terms and conditions',
    pagetitle: 'Terms and conditions'
  });
});


router.all(baseurl + 'cookies', function(req, res, next) {
  res.render('cookies', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Cookies',
    pagetitle: 'Cookies',
    breadcrumb: false,
  });
});


router.all('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Privacy policy',
    pagetitle: 'Privacy policy',
    breadcrumb: false,
  });
});


router.all('/your-account', function(req, res, next) {
  res.render('your-account', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: true,
    doctitle: 'Your account',
    pagetitle: 'Your account'
  });
});


router.all('/technical-problems', function(req, res, next) {
  res.render('technical-problems', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'We’re having technical problems',
    pagetitle: 'We&rsquo;re having technical problems'
  });
});


router.all('/comments', function(req, res, next) {
  res.render('comments', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Comments',
    pagetitle: 'Comments'
  });
});


router.all(baseurl + 'forgotten-your-password', function(req, res, next) {
  res.render('forgotten-your-password', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Forgotten your password',
    pagetitle: 'Forgotten your password'
  });
});


module.exports = router
