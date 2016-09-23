var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-court-administrator');

// baseurl and apptitle
var baseurl  = '/court-administrator/';
var apptitle = 'Court administrator';

// routes
router.all('/court-administrator', function(req, res) {
  res.render('court-administrator/index', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Sign in',
    pagetitle: 'Sign in',
    signedIn: false,
    breadcrumb: false
  });
});

router.all('/court-administrator/case-tasks', function(req, res) {
  res.render('court-administrator/case-tasks', {
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

router.all('/court-administrator/search-for-a-case', function(req, res) {
  res.render('court-administrator/search-for-a-case', {
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

router.all('/court-administrator/case-details/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/case-details', {
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

router.all('/court-administrator/personal-details/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/personal-details', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Personal details',
    pagetitle: 'Personal details',
    section: 'case-tasks',
    section_name: 'Case tasks',
    section2: 'case-details/' + req.params.id,
    section2_name: 'Case details',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});

router.all('/court-administrator/employment-and-income/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/employment-and-income', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Add employment and income',
    pagetitle: 'Add employment and income',
    section: 'case-tasks',
    section_name: 'Case tasks',
    section2: 'case-details/' + req.params.id,
    section2_name: 'Case details',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});

router.all('/court-administrator/manage-documents/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/manage-documents', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Manage documents',
    pagetitle: 'Manage documents',
    section: 'case-tasks',
    section_name: 'Case tasks',
    section2: 'case-details/' + req.params.id,
    section2_name: 'Case details',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});

// step process
router.all('/court-administrator/postal/add-plea/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/add-plea', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Add plea',
    pagetitle: 'Add plea',
    section: 'case-tasks',
    section_name: 'Case tasks',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});
router.all('/court-administrator/postal/personal-details/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/personal-details', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Personal details',
    pagetitle: 'Personal details',
    section: 'case-tasks',
    section_name: 'Case tasks',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});
router.all('/court-administrator/postal/employment-and-income/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/employment-and-income', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Add employment and income',
    pagetitle: 'Add employment and income',
    section: 'case-tasks',
    section_name: 'Case tasks',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});
router.all('/court-administrator/postal/manage-documents/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/manage-documents', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Manage documents',
    pagetitle: 'Manage documents',
    section: 'case-tasks',
    section_name: 'Case tasks',
    search:entry,
    signedIn: true,
    breadcrumb: true
  });
});

module.exports = router
