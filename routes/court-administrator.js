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

  // personal details
  sTitle = req.session.title;
  sFirstname = req.session.firstname;
  sLastname = req.session.lastname;
  sNationalInsurance = req.session.nationalinsurance;
  sEmail = req.session.email;
  sPhone = req.session.phone;
  sMobile = req.session.mobile;
  sAddress1 = req.session.address1;
  sAddress2 = req.session.address2;
  sTown     = req.session.town;
  sPostcode = req.session.postcode;

  // employment details
  sEmployment = req.session.employment;
  sEmployerName = req.session.employerName;
  sEmployerAddress1 = req.session.employerAddress1;
  sEmployerAddress2 = req.session.employerAddress2;
  sEmployerTown = req.session.employerTown;
  sEmployerPostcode = req.session.employerPostcode;
  sEmployerTelephone = req.session.employerTelephone;

  // pay
  sPayFrequency = req.session.payFrequency;
  sPayWeeklyAmount = req.session.payWeeklyAmount;
  sPayFortnightlyAmount = req.session.payFortnightlyAmount;
  sPayMonthlyAmount = req.session.payMonthlyAmount;

  // benefits
  sReceivingBenefits = req.session.receivingBenefits;

  // plea
  sMakeDecision = req.session.makeDecision;

  // other
  sCaseActiveTab = req.session.caseActiveTab;
  sOffenceActiveTab = req.session.offenceActiveTab;

  next();
});

router.route('/court-administrator')
  .get(function(req, res) {
    res.render('court-administrator/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      signedIn: false,
      breadcrumb: false
    });
  })
  .post(function(req, res) {
    res.redirect('/court-administrator/home');
  });

router.route('/court-administrator/home')
  .get(function(req, res) {
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
  .post(function(req, res) {
    res.redirect('/court-administrator/search-for-a-case');
  });

router.route('/court-administrator/search-for-a-case')
  .all(function(req, res) {
    res.render('court-administrator/search-for-a-case', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Search for a case',
      pagetitle: 'Search for a case',
      section: 'home',
      section_name: 'Home',
      signedIn: true,
      breadcrumb: true,
      searches:dataEngine.getSearchEntries()
    });
  });

router.route('/court-administrator/case-details/:id')
  .get(function(req, res) {
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
      sNationalInsurance: sNationalInsurance,
      sEmail: sEmail,
      sPhone: sPhone,
      sMobile: sMobile,
      sAddress1: sAddress1,
      sAddress2: sAddress2,
      sTown: sTown,
      sPostcode: sPostcode,
      sEmployment: sEmployment,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sEmployerTelephone: sEmployerTelephone,
      sPayFrequency: sPayFrequency,
      sPayWeeklyAmount: sPayWeeklyAmount,
      sPayFortnightlyAmount: sPayFortnightlyAmount,
      sPayMonthlyAmount: sPayMonthlyAmount,
      sReceivingBenefits: sReceivingBenefits,
      sMakeDecision: sMakeDecision,
      sCaseActiveTab: sCaseActiveTab,
      sOffenceActiveTab: sOffenceActiveTab
    });
  })
  .post(function(req, res) {
    sMakeDecision = req.session.makeDecision = req.body.makeDecision;
    sCaseActiveTab = req.session.caseActiveTab = null;
    sOffenceActiveTab = req.session.offenceActiveTab = 'Add or change plea';
    res.redirect('/court-administrator/case-details/' + req.params.id);
  });

router.route('/court-administrator/personal-details/:id')
  .get(function(req, res) {
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
      search:entry,
      signedIn: true,
      breadcrumb: true,
      sTitle: sTitle,
      sFirstname: sFirstname,
      sLastname: sLastname,
      sNationalInsurance: sNationalInsurance,
      sEmail: sEmail,
      sPhone: sPhone,
      sMobile: sMobile,
      sAddress1: sAddress1,
      sAddress2: sAddress2,
      sTown: sTown,
      sPostcode: sPostcode
    });
  })
  .post(function(req, res) {
    sTitle = req.session.title = req.body.title;
    sFirstname = req.session.firstname = req.body.firstname;
    sLastname = req.session.lastname = req.body.lastname;
    sNationalInsurance = req.session.nationalinsurance = req.body.nationalinsurance;
    sEmail = req.session.email = req.body.email;
    sPhone = req.session.phone = req.body.phone;
    sMobile = req.session.mobile = req.body.mobile;
    sAddress1 = req.session.address1 = req.body.address1;
    sAddress2 = req.session.address2 = req.body.address2;
    sTown     = req.session.town = req.body.town;
    sPostcode = req.session.postcode = req.body.postcode;
    sCaseActiveTab: req.session.caseActiveTab = 'Personal details';
    res.redirect('/court-administrator/case-details/' + req.params.id);
  });

router.route('/court-administrator/employment-and-income/:id')
  .get(function(req, res) {
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
      search:entry,
      sEmployment: sEmployment,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sEmployerTelephone: sEmployerTelephone,
      sPayFrequency: sPayFrequency,
      sReceivingBenefits: sReceivingBenefits
    });
  })
  .post(function(req, res) {
    sEmployment = req.session.employment = req.body.employment;
    sReceivingBenefits = req.session.receivingBenefits = req.body.receivingBenefits;
    sEmployerName = req.session.employerName = req.body.employerName;
    sEmployerAddress1 = req.session.employerAddress1 = req.body.employerAddress1;
    sEmployerAddress2 = req.session.employerAddress2 = req.body.employerAddress2;
    sEmployerTown = req.session.employerTown = req.body.employerTown;
    sEmployerPostcode = req.session.employerPostcode = req.body.employerPostcode;
    sEmployerTelephone = req.session.employerTelephone = req.body.employerTelephone;
    sPayFrequency = req.session.payFrequency = req.body.payFrequency;
    sPayWeeklyAmount = req.session.payWeeklyAmount = req.body.payWeeklyAmount;
    sPayFortnightlyAmount = req.session.payFortnightlyAmount = req.body.payFortnightlyAmount;
    sPayMonthlyAmount = req.session.payMonthlyAmount = req.body.payMonthlyAmount;
    sCaseActiveTab: req.session.caseActiveTab = 'Employment and income';
    res.redirect('/court-administrator/case-details/' + req.params.id);
  });

router.route('/court-administrator/manage-documents/:id')
  .get(function(req, res) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('court-administrator/manage-documents', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Manage documents',
      pagetitle: 'Manage documents',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      signedIn: true,
      breadcrumb: true,
      search:entry
    });
  })
  .post(function(req, res) {
    res.redirect('/court-administrator/case-details/' + req.params.id);
  });

// step process
router.all('/court-administrator/postal/add-plea/:id', function(req, res) {
  entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/add-plea', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Add plea',
    pagetitle: 'Add plea',
    section: 'home',
    section_name: 'Home',
    signedIn: true,
    breadcrumb: true,
    search:entry
  });
});
router.all('/court-administrator/postal/personal-details/:id', function(req, res) {
  entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/personal-details', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Personal details',
    pagetitle: 'Personal details',
    section: 'home',
    section_name: 'Home',
    signedIn: true,
    breadcrumb: true,
    search:entry
  });
});
router.all('/court-administrator/postal/employment-and-income/:id', function(req, res) {
  entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/employment-and-income', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Add employment and income',
    pagetitle: 'Add employment and income',
    section: 'home',
    section_name: 'Home',
    signedIn: true,
    breadcrumb: true,
    search:entry
  });
});
router.all('/court-administrator/postal/manage-documents/:id', function(req, res) {
  entry = dataEngine.getSearchEntry(req.params.id);
  res.render('court-administrator/postal/manage-documents', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Upload documents',
    pagetitle: 'Upload documents',
    section: 'home',
    section_name: 'Home',
    signedIn: true,
    breadcrumb: true,
    search:entry
  });
});

module.exports = router
