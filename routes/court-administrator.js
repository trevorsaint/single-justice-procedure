var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-court-administrator');
var entry;

// date fixer (add leading zero)
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

// routes
router.use(function(req, res, next) {

  baseurl  = '/court-administrator/';
  apptitle = 'Criminal Justice Services online';

  sHasSaved     = req.query.saved;
  sReopenedCase = req.session.reopenedCase;

  sTitle     = req.session.title;
  sFirstname = req.session.firstname;
  sLastname  = req.session.lastname;
  sDob       = req.session.dob;
  sEmail     = req.session.email;
  sPhone     = req.session.phone;
  sMobile    = req.session.mobile;
  sAddress1  = req.session.address1;
  sAddress2  = req.session.address2;
  sAddress3  = req.session.address3;
  sTown      = req.session.town;
  sPostcode  = req.session.postcode;

  sNationalInsurance = req.session.nationalInsurance;
  sFrequencyIncome   = req.session.frequencyIncome;

  sPayFrequency = req.session.payFrequency;
  sPayAmount    = req.session.payAmount;
  sPayAmountConverted = req.session.payAmountConverted;

  sReceivingBenefits = req.session.receivingBenefits;

  sMakeDecision        = req.session.makeDecision;
  sNeedInterpreter     = req.session.needInterpreter;
  sInterpreterLanguage = req.session.interpreterLanguage;

  sCaseActiveTab    = req.session.caseActiveTab;
  sOffenceActiveTab = req.session.offenceActiveTab;

  sDocumentNotice  = req.session.documentNotice;
  sPleaDocument    = req.session.pleaDocument;
  sStatementIncome = req.session.statementIncome;
  sOtherDocument   = req.session.otherDocument;

  sCaseNumber         = req.session.caseNumber;
  sReasonForReopening = req.session.reasonForReopening;
  sRevertCase         = req.session.revertCase = req.body.revertCase;

  sError = req.session.error;

  next();

});

router.route('/court-administrator')
  .get(function(req, res, next) {
    res.render('court-administrator/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      issigned: false,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      breadcrumb: false
    });
  })
  .post(function(req, res, next) {
    res.redirect('/court-administrator/home');
  });

router.route('/court-administrator/home/')
  .get(function(req, res, next) {
    res.render('court-administrator/home', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
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
  })
  .post(function(req, res, next) {
    res.redirect('/court-administrator/search-for-a-case/');
  });

router.route('/court-administrator/search-for-a-case/')
  .get(function(req, res, next) {
    res.render('court-administrator/search-for-a-case', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Search for a case',
      pagetitle: 'Search for a case',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true,
      searches: dataEngine.getSearchEntries()
    });
  });

router.route('/court-administrator/print-list-of-cases-awaiting-decision/')
  .get(function(req, res, next) {
    res.render('court-administrator/print-list-of-cases-awaiting-decision', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Print list of cases awaiting decision',
      pagetitle: 'Print list of cases awaiting decision',
      section: 'home',
      section_name: 'Home',
      searches: dataEngine.getSearchEntries(),
      breadcrumb: true
    });
  });

router.route('/court-administrator/case-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/case-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Case details',
      pagetitle: 'Case details',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      search:entry,
      breadcrumb: true,
      sFirstname: sFirstname,
      sLastname: sLastname,
      sDob: sDob,
      sEmail: sEmail,
      sPhone: sPhone,
      sMobile: sMobile,
      sAddress1: sAddress1,
      sAddress2: sAddress2,
      sAddress3: sAddress3,
      sTown: sTown,
      sPostcode: sPostcode,
      sNationalInsurance: sNationalInsurance,
      sFrequencyIncome: sFrequencyIncome,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sPayAmountConverted: sPayAmountConverted,
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
      sCaseNumber: sCaseNumber,
      sReasonForReopening: sReasonForReopening,
      sReopenedCase: sReopenedCase
    });
  })
  .post(function(req, res, next) {
    sMakeDecision = req.session.makeDecision = req.body.makeDecision;

    if (sMakeDecision === 'Pleaded guilty court hearing requested') {

      sNeedInterpreter = req.session.needInterpreter = req.body.guiltyInterpreter;
      sInterpreterLanguage = req.session.interpreterLanguage = req.body.guiltyInterpreterLanguage;

    } else if (sMakeDecision === 'Pleaded not guilty') {

      sNeedInterpreter = req.session.needInterpreter = req.body.notGuiltyInterpreter;
      sInterpreterLanguage = req.session.interpreterLanguage = req.body.notGuiltyInterpreterLanguage;

    } else {

      // reset session
      req.session.needInterpreter = null;
      req.session.interpreterLanguage = null;

    }

    req.session.caseActiveTab = null;
    sOffenceActiveTab = req.session.offenceActiveTab = 'Add or change plea';
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/personal-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/personal-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Personal details',
      pagetitle: 'Personal details',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      search: entry,
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
      sAddress3: sAddress3,
      sTown: sTown,
      sPostcode: sPostcode
    });
  })
  .post(function(req, res, next) {
    sTitle = req.session.title = req.body.title;
    sFirstname = req.session.firstname = req.body.firstname;
    sLastname = req.session.lastname = req.body.lastname;
    sDob = req.session.dob = req.body.dobYear + '-' + zeroFill(req.body.dobMonth) + '-' + zeroFill(req.body.dobDay);
    sEmail = req.session.email = req.body.email;
    sPhone = req.session.phone = req.body.phone;
    sMobile = req.session.mobile = req.body.mobile;
    sAddress1 = req.session.address1 = req.body.address1;
    sAddress2 = req.session.address2 = req.body.address2;
    sAddress3 = req.session.address3 = req.body.address3;
    sTown = req.session.town = req.body.town;
    sPostcode = req.session.postcode = req.body.postcode;
    sCaseActiveTab = req.session.caseActiveTab = 'Personal details';
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/income/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/income', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Add or change income',
      pagetitle: 'Add or change income',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry,
      sNationalInsurance: sNationalInsurance,
      sReceivingBenefits: sReceivingBenefits,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount
    });
  })
  .post(function(req, res, next) {
    sNationalInsurance = req.session.nationalInsurance = req.body.nationalInsurance;
    sPayFrequency = req.session.payFrequency = req.body.payFrequency;

    sPayAmount = req.session.payAmount = req.body.payAmount;
    sPayAmountConverted = req.session.payAmountConverted;

    if (sPayFrequency === 'Fortnightly') {
      sPayAmountConverted = req.session.payAmountConverted = (req.body.payAmount / 2);
    } else if (sPayFrequency === 'Monthly') {
      sPayAmountConverted = req.session.payAmountConverted = (req.body.payAmount / 4);
    } else {
      sPayAmountConverted = req.session.payAmountConverted = req.body.payAmount;
    }

    sReceivingBenefits = req.session.receivingBenefits = req.body.receivingBenefits;
    sCaseActiveTab = req.session.caseActiveTab = 'Income';
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/upload-documents/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/upload-documents', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Upload documents',
      pagetitle: 'Upload documents',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry,
      sPleaDocument: sPleaDocument,
      sError: sError
    });
  })
  .post(function(req, res, next) {

    sPleaDocument = req.session.pleaDocument = req.body.pleaDocument;
    sStatementIncome = req.session.statementIncome = req.body.statementIncome;
    sOtherDocuments = req.session.otherDocuments = req.body.otherDocuments;

    if (sPleaDocument === '' && sStatementIncome === '' && sOtherDocuments === '') {

      sError = req.session.error = true;

    } else {

      sError = req.session.error = null;

    }

    //res.redirect('/court-administrator/upload-documents/' + req.params.id + '/?saved=true');
    res.redirect('/court-administrator/upload-documents/' + req.params.id);

  });

router.route('/court-administrator/postal/add-plea/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/add-plea', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Add or change plea',
      pagetitle: 'Add or change plea',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry,
      sMakeDecision: sMakeDecision,
      sNeedInterpreter: sNeedInterpreter,
      sInterpreterLanguage: sInterpreterLanguage
    });
  })
  .post(function(req, res, next) {

    sMakeDecision = req.session.makeDecision = req.body.makeDecision;

    if (sMakeDecision === 'Pleaded guilty court hearing requested') {

      sNeedInterpreter = req.session.needInterpreter = req.body.guiltyInterpreter;
      sInterpreterLanguage = req.session.interpreterLanguage = req.body.guiltyInterpreterLanguage;

    } else if (sMakeDecision === 'Pleaded not guilty') {

      sNeedInterpreter = req.session.needInterpreter = req.body.notGuiltyInterpreter;
      sInterpreterLanguage = req.session.interpreterLanguage = req.body.notGuiltyInterpreterLanguage;

    } else {

      // reset session
      req.session.needInterpreter = null;
      req.session.interpreterLanguage = null;

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
      ispublic: false,
      doctitle: 'Personal details',
      pagetitle: 'Personal details',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
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
      sAddress3: sAddress3,
      sTown: sTown,
      sPostcode: sPostcode
    });
  })
  .post(function(req, res, next) {
    sTitle = req.session.title = req.body.title;
    sFirstname = req.session.firstname = req.body.firstname;
    sLastname = req.session.lastname = req.body.lastname;
    sDob = req.session.dob = req.body.dobYear + '-' + zeroFill(req.body.dobMonth) + '-' + zeroFill(req.body.dobDay);
    sEmail = req.session.email = req.body.email;
    sPhone = req.session.phone = req.body.phone;
    sMobile = req.session.mobile = req.body.mobile;
    sAddress1 = req.session.address1 = req.body.address1;
    sAddress2 = req.session.address2 = req.body.address2;
    sAddress3 = req.session.address3 = req.body.address3;
    sTown = req.session.town = req.body.town;
    sPostcode = req.session.postcode = req.body.postcode;

    // has the user come from check your answers
    if (!req.query.change) {
      res.redirect('/court-administrator/postal/income/' + req.params.id);
    }
    else {
      res.redirect('/court-administrator/postal/check-your-answers/' + req.params.id);
    }

  });

router.route('/court-administrator/postal/income/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/income', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Add or change income',
      pagetitle: 'Add or change income',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry,
      sNationalInsurance: sNationalInsurance,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount
    });
  })
  .post(function(req, res, next) {
    sNationalInsurance = req.session.nationalInsurance = req.body.nationalInsurance;
    sPayFrequency = req.session.payFrequency = req.body.payFrequency;

    sPayAmount = req.session.payAmount = req.body.payAmount;
    sPayAmountConverted = req.session.payAmountConverted;

    if (sPayFrequency === 'Fortnightly') {
      sPayAmountConverted = req.session.payAmountConverted = (req.body.payAmount / 2);
    } else if (sPayFrequency === 'Monthly') {
      sPayAmountConverted = req.session.payAmountConverted = (req.body.payAmount / 4);
    } else {
      sPayAmountConverted = req.session.payAmountConverted = req.body.payAmount;
    }

    sReceivingBenefits = req.session.receivingBenefits = req.body.receivingBenefits;

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
      ispublic: false,
      doctitle: 'Upload documents',
      pagetitle: 'Upload documents',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry
    });
  })
  .post(function(req, res, next) {
    //res.redirect('/court-administrator/postal/check-your-answers/' + req.params.id);
  });

router.route('/court-administrator/postal/check-your-answers/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/postal/check-your-answers', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Check your answers',
      pagetitle: 'Check your answers',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
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
      sAddress3: sAddress3,
      sTown: sTown,
      sPostcode: sPostcode,
      sNationalInsurance: sNationalInsurance,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sReceivingBenefits: sReceivingBenefits
    });
  })
  .post(function(req, res, next) {
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/extract-of-court-record/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/extract-of-court-record', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Extract of court record',
      pagetitle: 'Extract of court record',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
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
      sAddress3: sAddress3,
      sTown: sTown,
      sPostcode: sPostcode,
      sNationalInsurance: sNationalInsurance,
      sPayFrequency: sPayFrequency,
      sPayAmount: sPayAmount,
      sReceivingBenefits: sReceivingBenefits
    });
  })
  .post(function(req, res, next) {
    //res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/create-register-for-the-media/')
  .get(function(req, res, next) {
    res.render('court-administrator/create-register-for-the-media', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Create register for the media',
      pagetitle: 'Create register for the media',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true,
      searches: dataEngine.getSearchEntries()
    });
  })
  .post(function(req, res, next) {
    //res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/mark-case-as-reopened/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/mark-case-as-reopened', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Mark case as reopened',
      pagetitle: 'Mark case as reopened',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry,
      sCaseNumber: sCaseNumber,
      sReasonForReopening: sReasonForReopening
    });
  })
  .post(function(req, res, next) {
    sReopenedCase = req.session.reopenedCase = 'Yes';
    sCaseNumber = req.session.caseNumber = req.body.caseNumber;
    sReasonForReopening = req.session.reasonForReopening = req.body.reasonForReopening;
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/change-reopened-case-status/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/change-reopened-case-status', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Change reopened case details',
      pagetitle: 'Change reopened case details',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      search: entry,
      sCaseNumber: sCaseNumber,
      sReasonForReopening: sReasonForReopening
    });
  })
  .post(function(req, res, next) {
    sReopenedCase = req.session.reopenedCase = 'Yes';
    sCaseNumber   = req.session.caseNumber = req.body.caseNumber;
    sReasonForReopening = req.session.reasonForReopening = req.body.reasonForReopening;
    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');
  });

router.route('/court-administrator/undo-case-reopening/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/undo-case-reopening', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Undo case reopening',
      pagetitle: 'Undo case reopening',
      section: 'home',
      section_name: 'Home',
      section2: 'search-for-a-case',
      section2_name: 'Search for a case',
      section3: 'case-details/' + req.params.id,
      section3_name: 'Case details',
      breadcrumb: true,
      sRevertCase: sRevertCase,
      search: entry
    });
  })
  .post(function(req, res, next) {

    sRevertCase = req.session.revertCase = req.body.revertCase;

    if (sRevertCase === 'Yes') {
      req.session.reopenedCase = null;
      req.session.caseNumber = null;
      req.session.reasonForReopening = null;
    } else {
      sReopenedCase = req.session.reopenedCase = 'Yes';
      sCaseNumber = req.session.caseNumber;
      sReasonForReopening = req.session.reasonForReopening;
    }

    res.redirect('/court-administrator/case-details/' + req.params.id + '/?saved=true');

  });

router.get('/court-administrator/*', function(req, res, next) {
  res.render('404', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Page not found',
    pagetitle: 'Page not found',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
});

module.exports = router
