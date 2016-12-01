var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-court-administrator');

// baseurl and apptitle
var baseurl  = '/court-administrator/';
var apptitle = 'Court administrator';
var entry;

// routes
router.use(function(req, res, next) {

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
router.route('/court-administrator')
  .get(function(req, res, next) {
    res.render('court-administrator/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      signedIn: false,
      breadcrumb: false
    });
  })
  .post(function(req, res, next) {
    res.redirect('/court-administrator/home');
  });

router.route('/court-administrator/styles')
  .get(function(req, res, next) {
    res.render('court-administrator/styles', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Styles',
      pagetitle: 'Styles',
      section: 'home',
      section_name: 'Home',
      signedIn: false,
      breadcrumb: true
    });
  });

router.route('/court-administrator/home/')
  .get(function(req, res, next) {
    res.render('court-administrator/home', {
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
    res.redirect('/court-administrator/search-for-a-case/');
  });

router.route('/court-administrator/search-for-a-case/')
  .all(function(req, res, next) {
    res.render('court-administrator/search-for-a-case', {
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

router.route('/court-administrator/court-list/')
  .all(function(req, res, next) {
    res.render('court-administrator/court-list', {
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

router.route('/court-administrator/case-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/case-details', {
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
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/personal-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/personal-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Personal details',
      pagetitle: 'Personal details',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      search: entry,
      signedIn: true,
      breadcrumb: true,
      sTitle: sTitle,
      sFirstname: sFirstname,
      sLastname: sLastname,
      sDob: sDob,
      sEmail: sEmail,
      sPhone: sPhone,
      sMobile: sMobile,
      sAddress1: sAddress1,
      sAddress2: sAddress2,
      sTown: sTown,
      sPostcode: sPostcode
    });
  })
  .post(function(req, res, next) {
    sTitle = req.session.title = req.body.title;
    sFirstname = req.session.firstname = req.body.firstname;
    sLastname = req.session.lastname = req.body.lastname;
    sDob = req.session.dob = req.body.dobYear + '-' + req.body.dobMonth + '-' + req.body.dobDay;
    sEmail = req.session.email = req.body.email;
    sPhone = req.session.phone = req.body.phone;
    sMobile = req.session.mobile = req.body.mobile;
    sAddress1 = req.session.address1 = req.body.address1;
    sAddress2 = req.session.address2 = req.body.address2;
    sTown = req.session.town = req.body.town;
    sPostcode = req.session.postcode = req.body.postcode;
    sCaseActiveTab = req.session.caseActiveTab = 'Personal details';
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/employment-and-income/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/employment-and-income', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Add employment and income',
      pagetitle: 'Add employment and income',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry,
      sNationalInsurance: sNationalInsurance,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sEmployment: sEmployment,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sEmployerTelephone: sEmployerTelephone,
      sReceivingBenefits: sReceivingBenefits
    });
  })
  .post(function(req, res, next) {
    sNationalInsurance = req.session.nationalInsurance = req.body.nationalInsurance;
    sPayFrequency = req.session.payFrequency = req.body.payFrequency;
    sPayAmount = req.session.payAmount = req.body.payAmount;
    sEmployment = req.session.employment = req.body.employment;
    sReceivingBenefits = req.session.receivingBenefits = req.body.receivingBenefits;
    sEmployerName = req.session.employerName = req.body.employerName;
    sEmployerAddress1 = req.session.employerAddress1 = req.body.employerAddress1;
    sEmployerAddress2 = req.session.employerAddress2 = req.body.employerAddress2;
    sEmployerTown = req.session.employerTown = req.body.employerTown;
    sEmployerPostcode = req.session.employerPostcode = req.body.employerPostcode;
    sEmployerTelephone = req.session.employerTelephone = req.body.employerTelephone;
    sCaseActiveTab = req.session.caseActiveTab = 'Employment and income';
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/upload-documents/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/upload-documents', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Upload documents',
      pagetitle: 'Upload documents',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry,
      sDocumentNotice: sDocumentNotice,
      sPleaDocument: sPleaDocument,
      sStatementIncome: sStatementIncome,
      sOtherDocument: sOtherDocument
    });
  })
  .post(function(req, res, next) {
    sDocumentNotice  = req.body.documentNotice;
    sPleaDocument    = req.body.pleaDocument;
    sStatementIncome = req.body.statementIncome;
    sOtherDocument   = req.body.otherDocument;

    if (sDocumentNotice != '') {
      sDocumentNotice = req.session.documentNotice = true;
    }

    if (sPleaDocument != '') {
      sPleaDocument = req.session.pleaDocument = true;
    }

    if (sStatementIncome != '') {
      sStatementIncome = req.session.statementIncome = true;
    }

    if (sOtherDocument != '') {
      sOtherDocument = req.session.otherDocument = true;
    }

    res.redirect('/court-administrator/upload-documents/' + req.params.id + '/?saved=true');
  });

// step process routes
router.route('/court-administrator/postal/add-plea/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/add-plea', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Add plea',
      pagetitle: 'Add plea',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry,
      sMakeDecision: sMakeDecision,
      sNeedInterpreter: sNeedInterpreter,
      sInterpreterLanguage: sInterpreterLanguage
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

    // has the user come from check your answers
    if (!req.query.change) {
      sOffenceActiveTab = req.session.offenceActiveTab = 'Add or change plea';
      res.redirect('/court-administrator/postal/personal-details/' + req.params.id);
    }
    else {
      res.redirect('/court-administrator/postal/check-your-answers/' + req.params.id);
    }

  });

router.route('/court-administrator/postal/personal-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/personal-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Personal details',
      pagetitle: 'Personal details',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry,
      sTitle: sTitle,
      sFirstname: sFirstname,
      sLastname: sLastname,
      sDob: sDob,
      sEmail: sEmail,
      sPhone: sPhone,
      sMobile: sMobile,
      sAddress1: sAddress1,
      sAddress2: sAddress2,
      sTown: sTown,
      sPostcode: sPostcode
    });
  })
  .post(function(req, res, next) {
    sTitle = req.session.title = req.body.title;
    sFirstname = req.session.firstname = req.body.firstname;
    sLastname = req.session.lastname = req.body.lastname;
    sDob = req.session.dob = req.body.dobYear + '-' + req.body.dobMonth + '-' + req.body.dobDay;
    sEmail = req.session.email = req.body.email;
    sPhone = req.session.phone = req.body.phone;
    sMobile = req.session.mobile = req.body.mobile;
    sAddress1 = req.session.address1 = req.body.address1;
    sAddress2 = req.session.address2 = req.body.address2;
    sTown = req.session.town = req.body.town;
    sPostcode = req.session.postcode = req.body.postcode;

    // has the user come from check your answers
    if (!req.query.change) {
      res.redirect('/court-administrator/postal/employment-and-income/' + req.params.id);
    }
    else {
      res.redirect('/court-administrator/postal/check-your-answers/' + req.params.id);
    }

  });

router.route('/court-administrator/postal/employment-and-income/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/employment-and-income', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Add employment and income',
      pagetitle: 'Add employment and income',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry,
      sNationalInsurance: sNationalInsurance,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sEmployment: sEmployment,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sEmployerTelephone: sEmployerTelephone,
      sReceivingBenefits: sReceivingBenefits
    });
  })
  .post(function(req, res, next) {
    sNationalInsurance = req.session.nationalInsurance = req.body.nationalInsurance;
    sFrequencyIncome = req.session.frequencyIncome = req.body.frequencyIncome;
    sNetPay = req.session.netPay = req.body.netPay;
    sEmployment = req.session.employment = req.body.employment;
    sReceivingBenefits = req.session.receivingBenefits = req.body.receivingBenefits;
    sEmployerName = req.session.employerName = req.body.employerName;
    sEmployerAddress1 = req.session.employerAddress1 = req.body.employerAddress1;
    sEmployerAddress2 = req.session.employerAddress2 = req.body.employerAddress2;
    sEmployerTown = req.session.employerTown = req.body.employerTown;
    sEmployerPostcode = req.session.employerPostcode = req.body.employerPostcode;
    sEmployerTelephone = req.session.employerTelephone = req.body.employerTelephone;
    sPayFrequency = req.session.payFrequency = req.body.payFrequency;
    sPayAmount = req.session.payAmount = req.body.payAmount;

    // has the user come from check your answers
    if (!req.query.change) {
      res.redirect('/court-administrator/postal/upload-documents/' + req.params.id);
    }
    else {
      res.redirect('/court-administrator/postal/check-your-answers/' + req.params.id);
    }

  });

router.route('/court-administrator/postal/upload-documents/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/upload-documents', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Upload documents',
      pagetitle: 'Upload documents',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry
    });
  })
  .post(function(req, res, next) {
    sPleaDocument = req.session.pleaDocument = req.body.pleaDocument;
    sStatementIncome = req.session.statementIncome = req.body.statementIncome;
    sOtherDocument = req.session.otherDocument = req.body.otherDocument;
    res.redirect('/court-administrator/postal/check-your-answers/' + req.params.id);
  });

router.route('/court-administrator/postal/check-your-answers/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/check-your-answers', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Check your answers',
      pagetitle: 'Check your answers',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search: entry,
      sMakeDecision: sMakeDecision,
      sNeedInterpreter: sNeedInterpreter,
      sInterpreterLanguage: sInterpreterLanguage,
      sTitle: sTitle,
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
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sEmployment: sEmployment,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sEmployerTelephone: sEmployerTelephone,
      sReceivingBenefits: sReceivingBenefits
    });
  })
  .post(function(req, res, next) {
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

  router.route('/court-administrator/register-view/:id/')
    .get(function(req, res, next) {
      entry = dataEngine.getSearchEntry(req.params.id);
      res.render('court-administrator/register-view', {
        baseurl: baseurl,
        apptitle: apptitle,
        doctitle: 'Register view',
        pagetitle: 'Register view',
        section: 'home',
        section_name: 'Home',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        signedIn: true,
        breadcrumb: true,
        search: entry,
        sMakeDecision: sMakeDecision,
        sTitle: sTitle,
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
        sPayFrequency: sPayFrequency,
        sPayAmount: sPayAmount,
        sEmployment: sEmployment,
        sEmployerName: sEmployerName,
        sEmployerAddress1: sEmployerAddress1,
        sEmployerAddress2: sEmployerAddress2,
        sEmployerTown: sEmployerTown,
        sEmployerPostcode: sEmployerPostcode,
        sEmployerTelephone: sEmployerTelephone,
        sReceivingBenefits: sReceivingBenefits
      });
    })
    .post(function(req, res, next) {
      //res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
    });

    router.route('/court-administrator/print-register-view-of-cases/')
      .get(function(req, res, next) {
        res.render('court-administrator/print-register-view-of-cases', {
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
        //res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
      });

router.route('/court-administrator/reopen-case/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/reopen-case', {
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
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

// page not found
router.get('/court-administrator/*', function(req, res, next) {
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
