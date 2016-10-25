var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-legal-advisers');

// baseurl and apptitle
var baseurl  = '/legal-adviser/';
var apptitle = 'Legal adviser';


// routes
router.use(function(req, res, next) {

  // general
  sHasSaved      = req.session.saved;

  // offence
  sMakeDecision  = req.session.makeDecision;
  sPaymentMethod = req.session.paymentMethod;

  sFineBand      = req.session.fineBand;

  next();

});


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
      sHasSaved: sHasSaved,
      sMakeDecision: sMakeDecision
    });
  })
  .post(function(req, res, next) {
    sMakeDecision = req.session.makeDecision = req.body.makeDecision;
    res.redirect('/legal-adviser/your-decisions/' + req.params.id);
  });

router.route('/legal-adviser/your-decisions/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/your-decisions', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Your decisions',
      pagetitle: 'Your decisions',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      sMakeDecision: sMakeDecision,
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/collection-payment-method/' + req.params.id);
  });

router.route('/legal-adviser/collection-payment-method/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/collection-payment-method', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Collection payment method',
      pagetitle: 'Collection payment method',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
      sPaymentMethod = req.session.paymentMethod = req.body.paymentMethod;

      if (sPaymentMethod === "Pay direct to court") {
        res.redirect('/legal-adviser/pay-direct-to-court/' + req.params.id);
      } else if (sPaymentMethod === "Deduct from benefits") {
        res.redirect('/legal-adviser/deduct-from-benefits/' + req.params.id);
      } else {
        res.redirect('/legal-adviser/attach-to-earnings/' + req.params.id);
      }

  });

  router.route('/legal-adviser/pay-direct-to-court/:id')
    .get(function(req, res, next) {
      entry = dataEngine.getSearchEntry(req.params.id);
      res.render('legal-adviser/pay-direct-to-court', {
        baseurl: baseurl,
        apptitle: apptitle,
        doctitle: 'Pay direct to court',
        pagetitle: 'Pay direct to court',
        section: 'home',
        section_name: 'Home',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        search: entry,
        signedIn: true,
        breadcrumb: true,
        sPaymentMethod: sPaymentMethod
      });
    })
    .post(function(req, res, next) {
      res.redirect('/legal-adviser/check-your-answers/' + req.params.id);
    });

router.route('/legal-adviser/attach-to-earnings/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/attach-to-earnings', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Attachment to earnings',
      pagetitle: 'Attachment to earnings',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      search: entry,
      signedIn: true,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/check-your-answers/' + req.params.id);
  });

  router.route('/legal-adviser/deduct-from-benefits/:id')
    .get(function(req, res, next) {
      entry = dataEngine.getSearchEntry(req.params.id);
      res.render('legal-adviser/deduct-from-benefits', {
        baseurl: baseurl,
        apptitle: apptitle,
        doctitle: 'Deduct from benefits',
        pagetitle: 'Deduct from benefits',
        section: 'home',
        section_name: 'Home',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        search: entry,
        signedIn: true,
        breadcrumb: true
      });
    })
    .post(function(req, res, next) {
      res.redirect('/legal-adviser/check-your-answers/' + req.params.id);
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
      breadcrumb: true,
      sMakeDecision: sMakeDecision,
      sPaymentMethod: sPaymentMethod
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
