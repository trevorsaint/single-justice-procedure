var express = require('express');
var router = express.Router();

// baseurl and apptitle
var baseurl  = '/';
var apptitle = 'Transport for London';

// routes
router.all('/', function(req, res) {
  res.render('index', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Transport for London',
    pagetitle: 'Transport for London',
    breadcrumb: false,
    signedIn: false,
  });
});

router.all('/technical-problems', function(req, res) {
  res.render('technical-problems', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'We’re having technical problems',
    pagetitle: 'We&rsquo;re having technical problems',
    breadcrumb: false,
    signedIn: false,
  });
});

module.exports = router
