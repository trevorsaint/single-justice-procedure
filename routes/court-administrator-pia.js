var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-court-administrator-pia');
var entry;

// routes
router.use(function(req, res, next) {

  // base
  baseurl            = '/proof-in-absence/court-administrator/';
  apptitle           = 'Court administrator';

  // general
  sHasSaved          = req.query.saved;
  sReopenedCase      = req.session.reopenedCase;

  // personal details
  sTitle             = req.session.title;
  sFirstname         = req.session.firstname;
  sLastname          = req.session.lastname;
  sDob               = req.session.dob;
  sEmail             = req.session.email;
  sPhone             = req.session.phone;
  sMobile            = req.session.mobile;
  sAddress1          = req.session.address1;
  sAddress2          = req.session.address2;
  sTown              = req.session.town;
  sPostcode          = req.session.postcode;

  // employment details
  sNationalInsurance = req.session.nationalInsurance;
  sFrequencyIncome   = req.session.frequencyIncome;
  sEmployment        = req.session.employment;
  sEmployerName      = req.session.employerName;
  sEmployerAddress1  = req.session.employerAddress1;
  sEmployerAddress2  = req.session.employerAddress2;
  sEmployerTown      = req.session.employerTown;
  sEmployerPostcode  = req.session.employerPostcode;
  sEmployerTelephone = req.session.employerTelephone;

  // pay
  sPayFrequency         = req.session.payFrequency;
  sPayAmount            = req.session.payAmount;

  // benefits
  sReceivingBenefits = req.session.receivingBenefits;

  // plea
  sMakeDecision        = req.session.makeDecision;
  sNeedInterpreter     = req.session.needInterpreter;
  sInterpreterLanguage = req.session.interpreterLanguage;

  // other
  sCaseActiveTab    = req.session.caseActiveTab;
  sOffenceActiveTab = req.session.offenceActiveTab;

  // documents
  sDocumentNotice  = req.session.documentNotice;
  sPleaDocument    = req.session.pleaDocument;
  sStatementIncome = req.session.statementIncome;
  sOtherDocument   = req.session.otherDocument;

  // reopen case
  sLibraAccountNumber = req.session.libraAccountNumber;

  next();

});

// general routes
router.route('/proof-in-absence/court-administrator')
  .get(function(req, res, next) {
    res.render('proof-in-absence/court-administrator/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      signedIn: false,
      breadcrumb: false
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/court-administrator/home');
  });

router.route('/proof-in-absence/court-administrator/home/')
  .get(function(req, res, next) {
    res.render('proof-in-absence/court-administrator/home', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Single Justice Procedure',
      pagetitle: 'Single Justice Procedure',
      section: 'home',
      section_name: 'Home',
      signedIn: true,
      breadcrumb: false
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/court-administrator/search-for-a-case/');
  });

router.route('/proof-in-absence/court-administrator/search-for-a-case/')
  .all(function(req, res, next) {
    res.render('proof-in-absence/court-administrator/search-for-a-case', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Search for a case',
      pagetitle: 'Search for a case',
      section: 'home',
      section_name: 'Home',
      signedIn: true,
      breadcrumb: true,
      searches: dataEngine.getSearchEntries()
    });
  });

router.route('/proof-in-absence/court-administrator/court-list/')
  .all(function(req, res, next) {
    res.render('proof-in-absence/court-administrator/court-list', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Cases awaiting decision under Single Justice Procedure',
      pagetitle: 'Cases awaiting decision under Single Justice Procedure',
      section: 'home',
      section_name: 'Home',
      searches: dataEngine.getSearchEntries(),
      signedIn: true,
      breadcrumb: true
    });
  });

router.route('/proof-in-absence/court-administrator/case-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/court-administrator/case-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Case details',
      pagetitle: 'Case details',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      search:entry,
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
      sFrequencyIncome: sFrequencyIncome,
      sEmployment: sEmployment,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sEmployerTelephone: sEmployerTelephone,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sReceivingBenefits: sReceivingBenefits,
      sMakeDecision: sMakeDecision,
      sNeedInterpreter: sNeedInterpreter,
      sInterpreterLanguage: sInterpreterLanguage,
      sCaseActiveTab: sCaseActiveTab,
      sOffenceActiveTab: sOffenceActiveTab,
      sDocumentNotice: sDocumentNotice,
      sPleaDocument: sPleaDocument,
      sStatementIncome: sStatementIncome,
      sOtherDocument: sOtherDocument,
      sHasSaved: sHasSaved,
      sLibraAccountNumber: sLibraAccountNumber,
      sReopenedCase: sReopenedCase
    });
  })
  .post(function(req, res, next) {
    sMakeDecision = req.session.makeDecision = req.body.makeDecision;

    if (sMakeDecision === 'Pleaded guilty SJP') {

      sNeedInterpreter = req.session.needInterpreter = req.body.guiltyInterpreter;
      sInterpreterLanguage = req.session.interpreterLanguage = req.body.guiltyInterpreterLanguage;

    } else if (sMakeDecision === 'Pleaded not guilty') {

      sNeedInterpreter = req.session.needInterpreter = req.body.notGuiltyInterpreter;
      sInterpreterLanguage = req.session.interpreterLanguage = req.body.notGuiltyInterpreterLanguage;

    } else {

      // reset session
      sNeedInterpreter = req.session.needInterpreter = null;
      sInterpreterLanguage = req.session.interpreterLanguage = null;

    }

    sCaseActiveTab = req.session.caseActiveTab = null;
    sOffenceActiveTab = req.session.offenceActiveTab = 'Add or change plea';
    res.redirect('/proof-in-absence/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/proof-in-absence/court-administrator/print-register-view-of-cases/')
  .get(function(req, res, next) {
    res.render('proof-in-absence/court-administrator/print-register-view-of-cases', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Download register for the press',
      pagetitle: 'Create register for the press',
      section: 'home',
      section_name: 'Home',
      signedIn: true,
      breadcrumb: true,
      searches: dataEngine.getSearchEntries()
    });
  })
  .post(function(req, res, next) {
    //res.redirect('/proof-in-absence/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

  router.route('/proof-in-absence/court-administrator/reopen-case/:id/')
    .get(function(req, res, next) {
      entry = dataEngine.getSearchEntry(req.params.id);
      res.render('proof-in-absence/court-administrator/reopen-case', {
        baseurl: baseurl,
        apptitle: apptitle,
        doctitle: 'Log case as reopened on Libra',
        pagetitle: 'Log case as reopened on Libra',
        section: 'home',
        section_name: 'Home',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        signedIn: true,
        breadcrumb: true,
        search: entry,
        sLibraAccountNumber: sLibraAccountNumber
      });
    })
    .post(function(req, res, next) {
      sReopenedCase = req.session.reopenedCase = 'Yes';
      sLibraAccountNumber = req.session.libraAccountNumber = req.body.libraAccountNumber;
      res.redirect('/proof-in-absence/court-administrator/case-details/' + req.params.id + '/?saved=true');
    });

router.get('/proof-in-absence/court-administrator/*', function(req, res, next) {
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
