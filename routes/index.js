var express = require('express');
var router = express.Router();

// baseurl and apptitle
var baseurl  = '/';
var apptitle = 'Single Justice Procedure';

// routes
router.all('/', function(req, res) {
  req.session.destroy(); // kill all sessions to begin with
  res.render('index', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Main menu',
    pagetitle: 'Main menu',
    breadcrumb: false,
  });
});

router.all('/terms-and-conditions', function(req, res) {
  res.render('terms-and-conditions', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'Terms and conditions',
    pagetitle: 'Terms and conditions',
    breadcrumb: false,
  });
});

router.all('/cookies', function(req, res) {
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

router.all('/your-account', function(req, res) {
  res.render('your-account', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: true,
    doctitle: 'Your account',
    pagetitle: 'Your account',
    breadcrumb: false,
  });
});

router.all('/technical-problems', function(req, res) {
  res.render('technical-problems', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    issigned: false,
    doctitle: 'We’re having technical problems',
    pagetitle: 'We&rsquo;re having technical problems',
    breadcrumb: false,
  });
});

module.exports = router
