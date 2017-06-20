var express = require('express');
var router = express.Router();

// baseurl and apptitle
var baseurl  = '/';
var apptitle = 'Criminal Justice Services online';

// routes
router.all('/', function(req, res) {
  req.session.destroy(); // kill all sessions to begin with
  res.render('index', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Main menu',
    pagetitle: 'Main menu'
  });
});

router.all('/select-user-type', function(req, res) {
  req.session.destroy(); // kill all sessions to begin with
  res.render('select-user-type', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Select user type',
    pagetitle: 'Select user type'
  });
});

router.all('/terms-and-conditions', function(req, res) {
  res.render('terms-and-conditions', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Terms and conditions',
    pagetitle: 'Terms and conditions'
  });
});

router.all('/cookies', function(req, res) {
  res.render('cookies', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Cookies',
    pagetitle: 'Cookies',
    breadcrumb: false,
  });
});

router.all('/your-account', function(req, res) {
  res.render('your-account', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Your account',
    pagetitle: 'Your account'
  });
});

router.all('/technical-problems', function(req, res) {
  res.render('technical-problems', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'We’re having technical problems',
    pagetitle: 'We&rsquo;re having technical problems'
  });
});

router.all('/comments', function(req, res) {
  res.render('comments', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Comments',
    pagetitle: 'Comments'
  });
});

router.all('/forgotten-your-password', function(req, res) {
  res.render('forgotten-your-password', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Forgotten your password',
    pagetitle: 'Forgotten your password'
  });
});

router.get('/test', function(req, res) {
  res.render('test', {
    baseurl:   baseurl,
    apptitle:  apptitle,
    doctitle:  'Test',
    pagetitle: 'Test'
  });
});


module.exports = router
