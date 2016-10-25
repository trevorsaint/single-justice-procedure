var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-legal-advisers');

// baseurl and apptitle
var baseurl  = '/legal-adviser/';
var apptitle = 'Legal adviser';

// routes
router.route('/legal-adviser/')
  .get(function(req, res, next) {
    res.render('legal-adviser/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      signedIn: false,
      breadcrumb: false
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/home/');
  });

router.route('/legal-adviser/home/')
  .get(function(req, res, next) {
    res.render('legal-adviser/home', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Start a new SJP session',
      pagetitle: 'Start a new SJP session',
      section: 'home',
      section_name: 'Home',
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/case-details/1/');
  });

router.route('/legal-adviser/case-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/case-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Case details',
      pagetitle: 'Case details',
      section: 'home',
      section_name: 'Home',
      search: entry,
      signedIn: true,
      breadcrumb: true,
      sFirstname: sFirstname,
      sLastname: sLastname,
      sDob: sDob,
      sEmail: sEmail,
      sPhone: sPhone,
      sMobile: sMobile,
      sAddress1: sAddress1,
      sAddress2: sAddress2,
      sTown: sTown,
      sPostcode: sPostcode,
      sNationalInsurance: sNationalInsurance,
      sHasSaved: sHasSaved
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/case-details/' + req.params.id);
  });

router.route('/legal-adviser/check-case-decisions/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/check-case-decisions', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Your decisions',
      pagetitle: 'Your decisions',
      section: 'home',
      section_name: 'Home',
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/');
  });

router.route('/legal-adviser/collection-and-payment-terms/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/collection-and-payment-terms', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Collection and payment terms',
      pagetitle: 'Collection and payment terms',
      section: 'home',
      section_name: 'Home',
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/');
  });

router.route('/legal-adviser/terms-for-attachment-to-earnings/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/terms-for-attachment-to-earnings', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Terms for attachment to earnings',
      pagetitle: 'Terms for attachment to earnings',
      section: 'home',
      section_name: 'Home',
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/');
  });

router.route('/legal-adviser/check-your-answers/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/check-your-answers', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Check your answers',
      pagetitle: 'Check your answers',
      section: 'home',
      section_name: 'Home',
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/');
  });

router.get('/legal-adviser/*', function(req, res, next) {
  res.render('404', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Page not found',
    pagetitle: 'Page not found',
    section: 'home',
    section_name: 'Home',
    signedIn: true,
    breadcrumb: true
  });
});

module.exports = router
