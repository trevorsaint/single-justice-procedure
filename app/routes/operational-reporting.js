// dependencies
const express = require('express');
const router  = express.Router();


// baseurl and apptitle
const baseurl  = 'operational-reporting';
const apptitle = 'Criminal Justice Services online';
const ispublic = false


// routes
router.route('/' + baseurl + '/home')
  .get(function(req, res, next) {
    res.render(baseurl + '/home', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: ispublic,
      ishome: true,
      doctitle: 'Single Justice Procedure',
      pagetitle: 'Single Justice Procedure',
      section: 'home',
      section_name: 'Home',
      breadcrumb: false,
      phaseBanner: false,
      phaseBannerHome: true,
      globalHeaderBar: false
    });
  });


router.route('/' + baseurl + '/find-sjp-online-performance-data')
  .get(function(req, res, next) {
    res.render(baseurl + '/find-sjp-online-performance-data', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: ispublic,
      doctitle: 'Find SJP online performance data',
      pagetitle: 'Find <abbr title="Single Justice Procedure">SJP</abbr> online performance data',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/' + baseurl + '/sjp-online-performance-data');
  });


router.route('/' + baseurl + '/sjp-online-performance-data')
  .get(function(req, res, next) {
    res.render(baseurl + '/sjp-online-performance-data', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: ispublic,
      doctitle: 'SJP online performance data',
      pagetitle: '<abbr title="Single Justice Procedure">SJP</abbr> online performance data',
      section: 'home',
      section_name: 'Home',
      section2: 'find-sjp-online-performance-data',
      section2_name: 'Find SJP online performance data',
      breadcrumb: true
    });
  });


router.route('/' + baseurl + '/number-of-cases-pending-decision')
  .get(function(req, res, next) {
    res.render(baseurl + '/number-of-cases-pending-decision', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: ispublic,
      doctitle: 'Number of cases pending decision',
      pagetitle: 'Number of cases pending decision',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  });


router.route('/' + baseurl + '/cases-older-than-21-days-without-an-sjp-notice')
  .get(function(req, res, next) {
    res.render(baseurl + '/cases-older-than-21-days-without-an-sjp-notice', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: ispublic,
      doctitle: 'Cases older than 21 days without an SJP notice',
      pagetitle: 'Cases older than 21 days without an <abbr title="Single Justice Procedure">SJP</abbr> notice',
      section: 'home',
      section_name: 'Home',
      section2: 'number-of-cases-pending-decision',
      section2_name: 'Number of cases pending decision',
      breadcrumb: true
    });
  });


router.route('/operational-reporting/*')
  .get(function(req, res, next) {
    res.render('404', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: ispublic,
      doctitle: 'Page not found',
      pagetitle: 'Page not found',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true,
      sBack: sBack
    });
  });


module.exports = router
