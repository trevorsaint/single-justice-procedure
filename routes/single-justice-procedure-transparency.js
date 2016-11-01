var express = require('express');
var router = express.Router();

// baseurl and apptitle
var baseurl  = '/single-justice-procedure-transparency/';
var apptitle = 'Single Justice Procedure Transparency';

// routes
router.route('/single-justice-procedure-transparency/home')
  .get(function(req, res, next) {
    res.render('single-justice-procedure-transparency/home', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      signedIn: false,
      breadcrumb: false
    });
  })
  .post(function(req, res) {
    res.redirect('/single-justice-procedure-transparency/search-for-case');
  });

router.route('/single-justice-procedure-transparency/search-for-case')
  .get(function(req, res, next) {
    res.render('single-justice-procedure-transparency/search-for-case', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Search for a case',
      pagetitle: 'Search for a case',
      section: 'home',
      section_name: 'Home',
      signedIn: false,
      breadcrumb: true
    });
  })
  .post(function(req, res) {
    res.redirect('/single-justice-procedure-transparency/results');
  });

  router.route('/single-justice-procedure-transparency/results')
    .get(function(req, res, next) {
      res.render('single-justice-procedure-transparency/results', {
        baseurl: baseurl,
        apptitle: apptitle,
        doctitle: 'Cases prosecuted under SJP',
        pagetitle: 'Cases prosecuted under SJP',
        section: 'home',
        section_name: 'Home',
        section2: 'search-for-case',
        section2_name: 'Search for case',
        signedIn: false,
        breadcrumb: true
      });
    });

router.get('/single-justice-procedure-transparency/*', function(req, res, next) {
  res.render('404', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Page not found',
    pagetitle: 'Page not found',
    section: 'home',
    section_name: 'Home',
    signedIn: true,
    breadcrumb: true,
    sBack: sBack
  });
});

module.exports = router
