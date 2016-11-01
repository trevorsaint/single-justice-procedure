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
  sHasSaved                 = req.query.saved;
  sActiveTab                = req.session.activeTab;
  sBack                     = req.header('Referer') || '/';

  // offence
  sMakeDecision             = req.session.makeDecision;
  sPaymentMethod            = req.session.paymentMethod;
  sFineBandApplied          = req.session.fineBandApplied;
  sCollectionOrderConfirmed = req.session.collectionOrderConfirmed;
  sFineA                    = req.session.fineA;
  sFineB                    = req.session.fineB;
  sFineC                    = req.session.fineC;
  sCompensationA            = req.session.compensationA;
  sCompensationB            = req.session.compensationB;
  sCompensationC            = req.session.compensationC;
  sCost                     = req.session.cost;
  sSurcharge                = req.session.surcharge;

  // personal details
  sTitle                    = req.session.title;
  sFirstname                = req.session.firstname;
  sLastname                 = req.session.lastname;
  sDob                      = req.session.dob;
  sEmail                    = req.session.email;
  sPhone                    = req.session.phone;
  sMobile                   = req.session.mobile;
  sAddress1                 = req.session.address1;
  sAddress2                 = req.session.address2;
  sTown                     = req.session.town;
  sPostcode                 = req.session.postcode;

  // pay direct to court
  sReasonForNotDeductFromBenefitsOrAttachToEarnings = req.session.reasonForNotDeductFromBenefitsOrAttachToEarnings;
  sDefendantPay                                     = req.session.defendantPay;

  // deduct from benefits
  sNationalInsuranceNumber          = req.session.nationalInsuranceNumber;
  sReasonForDeductingFromBenefits   = req.session.reasonForDeductingFromBenefits;
  sReserveTerms                     = req.session.reserveTerms;

  sLumpSumAmount                    = req.session.lumpSumAmount;
  sLumpSumPaidWithin                = req.session.lumpSumPaidWithin;
  sLumpSumInstalmentAmount          = req.session.lumpSumInstalmentAmount;
  sLumpSumInstalmentMade            = req.session.lumpSumInstalmentMade;
  sLumpSumInstalmentStartDateDay    = req.session.lumpSumInstalmentStartDateDay;
  sLumpSumInstalmentStartDateMonth  = req.session.lumpSumInstalmentStartDateMonth;
  sLumpSumInstalmentStartDateYear   = req.session.lumpSumInstalmentStartDateYear;

  sInstalmentOnlyAmount          = req.session.instalmentOnlyAmount;
  sInstalmentOnlyMade            = req.session.instalmentOnlyMade;
  sInstalmentOnlyStartDateDay    = req.session.instalmentOnlyStartDateDay;
  sInstalmentOnlyStartDateMonth  = req.session.instalmentOnlyStartDateMonth;
  sInstalmentOnlyStartDateYear   = req.session.instalmentOnlyStartDateYear;

  // attach to earnings
  sEmployeeNumber                 = req.session.employeeNumber;
  sEmployerName                   = req.session.employerName;
  sReasonForAttachingToEarnings   = req.session.reasonForAttachingToEarnings;
  sEmployerName                   = req.session.employerName;
  sEmployerAddress1               = req.session.employerAddress1;
  sEmployerAddress2               = req.session.employerAddress2;
  sEmployerTown                   = req.session.employerTown;
  sEmployerPostcode               = req.session.employerPostcode;

  next();

});

// remove session data and redirect user to sign-in page
router.get('/legal-adviser/end-session', function(req, res, next) {
  req.session.destroy();
  res.redirect('/legal-adviser/');
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
      breadcrumb: false,
      sBack: sBack
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
      breadcrumb: true,
      sBack: sBack
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
      sNationalInsuranceNumber: sNationalInsuranceNumber,
      sHasSaved: sHasSaved,
      sMakeDecision: sMakeDecision,
      sBack: sBack,
      sActiveTab: sActiveTab
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
      breadcrumb: true,
      sBack: sBack,
      sFineBandApplied: sFineBandApplied,
      sFineA: sFineA,
      sFineB: sFineB,
      sFineC: sFineC,
      sCompensationA: sCompensationA,
      sCompensationB: sCompensationB,
      sCompensationC: sCompensationC,
      sCollectionOrderConfirmed: sCollectionOrderConfirmed,
      sCost: sCost,
      sSurcharge: sSurcharge
    });
  })
  .post(function(req, res, next) {

    sFineBandApplied = req.session.fineBandApplied = req.body.fineBandApplied;
    sCost = req.session.cost = req.body.cost;
    sSurcharge = req.session.surcharge = req.body.surcharge;
    sCollectionOrderConfirmed = req.session.collectionOrderConfirmed = req.body.collectionOrderConfirmed ? "true" : "false";

    if (sFineBandApplied === "Band A") {
      sFineA = req.session.fineA = req.body.fineA;
      sCompensationA = req.session.compensationA = req.body.compensationA;
      sFineB = req.session.fineB = null;
      sFineC = req.session.fineC = null;
      sCompensationB = req.session.compensationB = null;
      sCompensationC = req.session.compensationC = null;
    } else if (sFineBandApplied === "Band B") {
      sFineB = req.session.fineB = req.body.fineB;
      sCompensationB = req.session.compensationB = req.body.compensationB;
      sFineA = req.session.fineA = null;
      sFineC = req.session.fineC = null;
      sCompensationA = req.session.compensationA = null;
      sCompensationC = req.session.compensationC = null;
    } else {
      sFineC = req.session.fineC = req.body.fineC;
      sCompensationC = req.session.compensationC = req.body.compensationC;
      sFineB = req.session.fineB = null;
      sFineA = req.session.fineA = null;
      sCompensationB = req.session.compensationB = null;
      sCompensationA = req.session.compensationA = null;
    }

    // has the user come from check your answers
    if (!req.query.change) {
      res.redirect('/legal-adviser/collection-payment/' + req.params.id);
    }
    else {
      res.redirect('/legal-adviser/check-your-answers/' + req.params.id + '#fine-and-compensation');
    }

  });

router.route('/legal-adviser/collection-payment/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/collection-payment', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Collection payment',
      pagetitle: 'Collection payment',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      search: entry,
      signedIn: true,
      breadcrumb: true,
      sPaymentMethod: sPaymentMethod,
      sBack: sBack
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
        sPaymentMethod: sPaymentMethod,
        sDefendantPay: sDefendantPay,
        sBack: sBack
      });
    })
    .post(function(req, res, next) {
      sDefendantPay = req.session.defendantPay = req.body.defendantPay;
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
      breadcrumb: true,
      sBack: sBack,
      sEmployeeNumber: sEmployeeNumber,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sReasonForAttachingToEarnings: sReasonForAttachingToEarnings
    });
  })
  .post(function(req, res, next) {
    sEmployeeNumber = req.session.employeeNumber = req.body.employeeNumber;
    sEmployerName = req.session.employerName = req.body.employerName;
    sEmployerAddress1 = req.session.employerAddress1 = req.body.employerAddress1;
    sEmployerAddress2 = req.session.employerAddress2 = req.body.employerAddress2;
    sEmployerTown = req.session.employerTown = req.body.employerTown;
    sEmployerPostcode = req.session.employerPostcode = req.body.employerPostcode;
    sReasonForAttachingToEarnings = req.session.reasonForAttachingToEarnings = req.body.reasonForAttachingToEarnings;
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
        breadcrumb: true,
        sReasonForDeductingFromBenefits: sReasonForDeductingFromBenefits,
        sReserveTerms: sReserveTerms,
        sNationalInsuranceNumber: sNationalInsuranceNumber,
        sBack: sBack,
        sReasonForDeductingFromBenefits: sReasonForDeductingFromBenefits,
        sLumpSumAmount: sLumpSumAmount,
        sLumpSumPaidWithin: sLumpSumPaidWithin,
        sLumpSumInstalmentAmount: sLumpSumInstalmentAmount,
        sLumpSumInstalmentMade: sLumpSumInstalmentMade,
        sLumpSumInstalmentStartDateDay: sLumpSumInstalmentStartDateDay,
        sLumpSumInstalmentStartDateMonth: sLumpSumInstalmentStartDateMonth,
        sLumpSumInstalmentStartDateYear: sLumpSumInstalmentStartDateYear,
        sInstalmentOnlyAmount: sInstalmentOnlyAmount,
        sInstalmentOnlyMade: sInstalmentOnlyMade,
        sInstalmentOnlyStartDateDay: sInstalmentOnlyStartDateDay,
        sInstalmentOnlyStartDateMonth: sInstalmentOnlyStartDateMonth,
        sInstalmentOnlyStartDateYear: sInstalmentOnlyStartDateYear
      });
    })
    .post(function(req, res, next) {
      sNationalInsuranceNumber = req.session.nationalInsuranceNumber = req.body.nationalInsuranceNumber;
      sReasonForDeductingFromBenefits = req.session.reasonForDeductingFromBenefits = req.body.reasonForDeductingFromBenefits;
      sReserveTerms = req.session.reserveTerms = req.body.reserveTerms;

      if (sReserveTerms === "Lump sum plus instalments") {
        sLumpSumAmount = req.session.lumpSumAmount = req.body.lumpSumAmount;
        sLumpSumPaidWithin = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
        sLumpSumInstalmentAmount = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
        sLumpSumInstalmentMade = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
        sLumpSumInstalmentStartDateDay = req.session.lumpSumInstalmentStartDateDay = req.body.lumpSumInstalmentStartDateDay;
        sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = req.body.lumpSumInstalmentStartDateMonth;
        sLumpSumInstalmentStartDateYear = req.session.lumpSumInstalmentStartDateYear = req.body.lumpSumInstalmentStartDateYear;
      } else if (sReserveTerms === "Instalments only") {
        sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
        sInstalmentOnlyAmount = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
        sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
        sInstalmentOnlyStartDateDay = req.session.instalmentOnlyStartDateDay = req.body.instalmentOnlyStartDateDay;
        sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = req.body.instalmentOnlyStartDateMonth;
        sInstalmentOnlyStartDateYear = req.session.instalmentOnlyStartDateYear = req.body.instalmentOnlyStartDateYear;
      }

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
      sNationalInsuranceNumber: sNationalInsuranceNumber,
      sMakeDecision: sMakeDecision,
      sPaymentMethod: sPaymentMethod,
      sFineBandApplied: sFineBandApplied,
      sFineA: sFineA,
      sFineB: sFineB,
      sFineC: sFineC,
      sCompensationA: sCompensationA,
      sCompensationB: sCompensationB,
      sCompensationC: sCompensationC,
      sCollectionOrderConfirmed: sCollectionOrderConfirmed,
      sReasonForDeductingFromBenefits: sReasonForDeductingFromBenefits,
      sReasonForAttachingToEarnings: sReasonForAttachingToEarnings,
      sReserveTerms: sReserveTerms,
      sCost: sCost,
      sPaymentMethod: sPaymentMethod,
      sDefendantPay: sDefendantPay,
      sSurcharge: sSurcharge,
      sEmployeeNumber: sEmployeeNumber,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerTown: sEmployerTown,
      sEmployerPostcode: sEmployerPostcode,
      sInstalmentOnlyAmount: sInstalmentOnlyAmount,
      sInstalmentOnlyMade: sInstalmentOnlyMade,
      sInstalmentOnlyStartDateDay: sInstalmentOnlyStartDateDay,
      sInstalmentOnlyStartDateMonth: sInstalmentOnlyStartDateMonth,
      sInstalmentOnlyStartDateYear: sInstalmentOnlyStartDateYear,
      sLumpSumAmount: sLumpSumAmount,
      sLumpSumPaidWithin: sLumpSumPaidWithin,
      sLumpSumInstalmentAmount: sLumpSumInstalmentAmount,
      sLumpSumInstalmentMade: sLumpSumInstalmentMade,
      sLumpSumInstalmentStartDateDay: sLumpSumInstalmentStartDateDay,
      sLumpSumInstalmentStartDateMonth: sLumpSumInstalmentStartDateMonth,
      sLumpSumInstalmentStartDateYear: sLumpSumInstalmentStartDateYear,
      sBack: sBack
    });
  })
  .post(function(req, res, next) {
    res.redirect('/legal-adviser/');
  });

  router.route('/legal-adviser/personal-details/:id/')
    .get(function(req, res, next) {
      entry = dataEngine.getSearchEntry(req.params.id);
      res.render('legal-adviser/personal-details', {
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
        sPostcode: sPostcode,
        sActiveTab: sActiveTab
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
      sActiveTab = req.session.activeTab = 'Personal details';
      res.redirect('/legal-adviser/case-details/' + req.params.id + '/?saved=true');
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
    breadcrumb: true,
    sBack: sBack
  });
});

module.exports = router
