var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-legal-advisers');

// baseurl and apptitle
var baseurl  = '/legal-adviser/';
var apptitle = 'Legal adviser';

// routes
router.all('/legal-adviser', function(req, res) {
  res.render('legal-adviser/index', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Sign in',
    pagetitle: 'Sign in',
    signedIn: false,
    breadcrumb: false
  });
});

router.all('/legal-adviser/case-tasks', function(req, res) {
  res.render('legal-adviser/case-tasks', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Single Justice Procedure',
    pagetitle: 'Single Justice Procedure',
    section: 'case-tasks',
    section_name: 'Case tasks',
    signedIn: true,
    breadcrumb: false
  });
});

router.all('/legal-adviser/search-for-a-case', function(req, res) {
  res.render('legal-adviser/search-for-a-case', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Search for a case',
    pagetitle: 'Search for a case',
    section: 'case-tasks',
    section_name: 'Case tasks',
    searches:dataEngine.getSearchEntries(),
    signedIn: true,
    breadcrumb: true
  });
});

router.all('/legal-adviser/case-details/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('legal-adviser/case-details', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Case details',
    pagetitle: 'Case details',
    section: 'case-tasks',
    section_name: 'Case tasks',
    section2: 'search-for-a-case',
    section2_name: 'Search for a case',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
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
