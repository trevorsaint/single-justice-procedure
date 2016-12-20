var express = require('express');
var router  = express.Router();


// datastore
var dataEngine = require('../models/data-legal-advisers-pia');


// routes
router.use(function(req, res, next) {

  // base
  baseurl                   = '/proof-in-absence/legal-adviser/';
  apptitle                  = 'Single Justice Procedure';

  // general
  id                        = req.params.id;
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
  sReasonForNoCompensationA = req.session.reasonForNoCompensationA;
  sReasonForNoCompensationB = req.session.reasonForNoCompensationB;
  sReasonForNoCompensationC = req.session.reasonForNoCompensationC;
  sCost                     = req.session.cost;
  sSurcharge                = req.session.surcharge;
  sTotalToPay               = req.session.totalToPay;

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

  // discharge
  sTypeOfDischarge  = req.session.typeOfDischarge;
  sCompensation     = req.session.compensation;
  sDurationAmount   = req.session.durationAmount;
  sDurationTimeSpan = req.session.durationTimeSpan;

  // pay direct to court
  sReasonForNotDeductFromBenefitsOrAttachToEarnings = req.session.reasonForNotDeductFromBenefitsOrAttachToEarnings;
  sDefendantPay                                     = req.session.defendantPay;

  // deduct from benefits
  sNationalInsuranceNumber          = req.session.nationalInsuranceNumber;
  sReasonForDeductingFromBenefits   = req.session.reasonForDeductingFromBenefits;
  sReserveTerms                     = req.session.reserveTerms;

  sLumpSumAmount                    = req.session.lumpSumAmount;
  sLumpSumAmountPaidWithin          = req.session.lumpSumAmountPaidWithin;
  sLumpSumInstalmentAmount          = req.session.lumpSumInstalmentAmount;
  sLumpSumInstalmentMade            = req.session.lumpSumInstalmentMade;
  sLumpSumInstalmentStartDateDay    = req.session.lumpSumInstalmentStartDateDay;
  sLumpSumInstalmentStartDateMonth  = req.session.lumpSumInstalmentStartDateMonth;
  sLumpSumInstalmentStartDateYear   = req.session.lumpSumInstalmentStartDateYear;
  sLumpSumInstalmentStartDate       = req.session.lumpSumInstalmentStartDate;

  sInstalmentOnlyAmount          = req.session.instalmentOnlyAmount;
  sInstalmentOnlyMade            = req.session.instalmentOnlyMade;
  sInstalmentOnlyStartDateDay    = req.session.instalmentOnlyStartDateDay;
  sInstalmentOnlyStartDateMonth  = req.session.instalmentOnlyStartDateMonth;
  sInstalmentOnlyStartDateYear   = req.session.instalmentOnlyStartDateYear;
  sInstalmentOnlyStartDate       = req.session.instalmentOnlyStartDate;

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
router.get('/proof-in-absence/legal-adviser/end-session', function(req, res, next) {
  req.session.destroy();
  res.redirect('/proof-in-absence/legal-adviser/home');
});


router.route('/proof-in-absence/legal-adviser/')
  .get(function(req, res, next) {
    res.render('proof-in-absence/legal-adviser/index', {
      baseurl:    baseurl,
      apptitle:   apptitle,
      doctitle:   'Sign in',
      pagetitle:  'Sign in',
      signedIn:   false,
      breadcrumb: false,
      sBack:      sBack
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/legal-adviser/home/');
  });


  router.route('/proof-in-absence/legal-adviser/home/')
    .get(function(req, res, next) {
      res.render('proof-in-absence/legal-adviser/home', {
        baseurl:      baseurl,
        apptitle:     apptitle,
        doctitle:     'Single Justice Procedure',
        pagetitle:    'Single Justice Procedure',
        section:      'home',
        section_name: 'Home',
        signedIn:     true,
        breadcrumb:   false,
        phaseBanner:     false,
        phaseBannerHome: true,
        globalHeaderBar: false,
        sBack:        sBack
      });
      }).post(function(req, res, next) {
      res.redirect('/proof-in-absence/legal-adviser/search-for-a-case/');
    });


  router.route('/proof-in-absence/legal-adviser/search-for-a-case/')
    .all(function(req, res, next) {
      res.render('proof-in-absence/legal-adviser/search-for-a-case', {
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


router.route('/proof-in-absence/legal-adviser/start-a-new-sjp-session/')
  .get(function(req, res, next) {
    res.render('proof-in-absence/legal-adviser/start-a-new-sjp-session', {
      baseurl:      baseurl,
      apptitle:     apptitle,
      doctitle:     'Start a new SJP session',
      pagetitle:    'Start a new SJP session',
      section:      'home',
      section_name: 'Home',
      signedIn:     true,
      breadcrumb:   true,
      sBack:        sBack
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/legal-adviser/case-details/1/');
  });


router.route('/proof-in-absence/legal-adviser/case-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/case-details', {
      baseurl:                  baseurl,
      apptitle:                 apptitle,
      doctitle:                 'Case details',
      pagetitle:                'Case details',
      section:                  'home',
      section_name:             'Home',
      search:                   entry,
      signedIn:                 true,
      breadcrumb:               true,
      sFirstname:               sFirstname,
      sLastname:                sLastname,
      sDob:                     sDob,
      sEmail:                   sEmail,
      sPhone:                   sPhone,
      sMobile:                  sMobile,
      sAddress1:                sAddress1,
      sAddress2:                sAddress2,
      sTown:                    sTown,
      sPostcode:                sPostcode,
      sNationalInsuranceNumber: sNationalInsuranceNumber,
      sHasSaved:                sHasSaved,
      sMakeDecision:            sMakeDecision,
      sActiveTab:               sActiveTab,
      sBack:                    sBack
    });
  })
  .post(function(req, res, next) {

    sMakeDecision = req.session.makeDecision = req.body.makeDecision;

    if (sMakeDecision === "Financial penalty") {

      res.redirect('/proof-in-absence/legal-adviser/financial-penalty/' + req.params.id);

    } else if (sMakeDecision === "Refer for court hearing") {

      res.redirect('/proof-in-absence/legal-adviser/refer-for-court-hearing/' + req.params.id);

    } else if (sMakeDecision === "Discharge") {

      res.redirect('/proof-in-absence/legal-adviser/discharge/' + req.params.id);

    } else if (sMakeDecision === "Withdraw offence") {

      res.redirect('/proof-in-absence/legal-adviser/withdraw/' + req.params.id);

    } else if (sMakeDecision === "Dismiss") {

      res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);

    } else if (sMakeDecision === "Refer for future SJP session") {

      res.redirect('/proof-in-absence/legal-adviser/refer-for-future-sjp-session/' + req.params.id);

    }

  });


router.route('/proof-in-absence/legal-adviser/refer-for-court-hearing/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/refer-for-court-hearing', {
      baseurl:       baseurl,
      apptitle:      apptitle,
      doctitle:      'Confirm outcome',
      pagetitle:     'Confirm outcome',
      section:       'home',
      section_name:  'Home',
      section2:      'case-details/' + req.params.id,
      section2_name: 'Case details',
      sMakeDecision: sMakeDecision,
      search:        entry,
      signedIn:      true,
      breadcrumb:    true,
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);
  });


router.route('/proof-in-absence/legal-adviser/discharge/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/discharge', {
      baseurl:                   baseurl,
      apptitle:                  apptitle,
      doctitle:                  'Confirm outcome',
      pagetitle:                 'Confirm outcome',
      section:                   'home',
      section_name:              'Home',
      section2:                  'case-details/' + req.params.id,
      section2_name:             'Case details',
      sMakeDecision:             sMakeDecision,
      sTypeOfDischarge:          sTypeOfDischarge,
      sCompensation:             sCompensation,
      sDurationAmount:           sDurationAmount,
      sDurationTimeSpan:         sDurationTimeSpan,
      sCost:                     sCost,
      sSurcharge:                sSurcharge,
      sCollectionOrderConfirmed: sCollectionOrderConfirmed,
      search:                    entry,
      signedIn:                  true,
      breadcrumb:                true,
    });
  })
  .post(function(req, res, next) {

    sTypeOfDischarge          = req.session.typeOfDischarge          = req.body.typeOfDischarge;
    sCompensation             = req.session.compensation             = req.body.compensation;
    sDurationAmount           = req.session.durationAmount           = req.body.durationAmount;
    sDurationTimeSpan         = req.session.durationTimeSpan         = req.body.durationTimeSpan;
    sCost                     = req.session.cost                     = req.body.cost;
    sSurcharge                = req.session.surcharge                = req.body.surcharge;
    sCollectionOrderConfirmed = req.session.collectionOrderConfirmed = req.body.collectionOrderConfirmed ? "true" : "false";
    sTotalToPay               = req.session.totalToPay               = (Number(sCompensation) + Number(sCost) + Number(sSurcharge)).toFixed(2);

    res.redirect('/proof-in-absence/legal-adviser/payment-method/' + req.params.id);

  });


router.route('/proof-in-absence/legal-adviser/withdraw/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/withdraw', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      sMakeDecision: sMakeDecision,
      search: entry,
      signedIn: true,
      breadcrumb: true,
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);
  });


router.route('/proof-in-absence/legal-adviser/refer-for-future-sjp-session/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/refer-for-future-sjp-session', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      sMakeDecision: sMakeDecision,
      search: entry,
      signedIn: true,
      breadcrumb: true,
    });
  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);
  });


router.route('/proof-in-absence/legal-adviser/financial-penalty/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/financial-penalty', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
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
      sReasonForNoCompensationA: sReasonForNoCompensationA,
      sReasonForNoCompensationB: sReasonForNoCompensationB,
      sReasonForNoCompensationC: sReasonForNoCompensationC,
      sCollectionOrderConfirmed: sCollectionOrderConfirmed,
      sCost: sCost,
      sSurcharge: sSurcharge,
      sTotalToPay: sTotalToPay
    });
  })
  .post(function(req, res, next) {
    sFineBandApplied            = req.session.fineBandApplied = req.body.fineBandApplied;
    sCost                       = req.session.cost = req.body.cost;
    sSurcharge                  = req.session.surcharge = req.body.surcharge;
    sCollectionOrderConfirmed   = req.session.collectionOrderConfirmed = req.body.collectionOrderConfirmed ? "true" : "false";

    if (sFineBandApplied === "Band A") {

      sFineA                    = req.session.fineA = req.body.fineA;
      sCompensationA            = req.session.compensationA = req.body.compensationA;
      sReasonForNoCompensationA = req.session.reasonForNoCompensationA = req.body.reasonForNoCompensationA;
      sTotalToPay               = req.session.totalToPay = (Number(sFineA) + Number(sCompensationA) + Number(sCost) + Number(sSurcharge)).toFixed(2);

      sFineB                    = req.session.fineB = null;
      sFineC                    = req.session.fineC = null;
      sCompensationB            = req.session.compensationB = null;
      sCompensationC            = req.session.compensationC = null;
      sReasonForNoCompensationB = req.session.reasonForNoCompensationB = null;
      sReasonForNoCompensationC = req.session.reasonForNoCompensationC = null;

    } else if (sFineBandApplied === "Band B") {

      sFineB                    = req.session.fineB = req.body.fineB;
      sCompensationB            = req.session.compensationB = req.body.compensationB;
      sReasonForNoCompensationB = req.session.reasonForNoCompensationB = req.body.reasonForNoCompensationB;
      sTotalToPay               = req.session.totalToPay = (Number(sFineB) + Number(sCompensationB) + Number(sCost) + Number(sSurcharge)).toFixed(2);

      sFineA                    = req.session.fineA = null;
      sFineC                    = req.session.fineC = null;
      sCompensationA            = req.session.compensationA = null;
      sCompensationC            = req.session.compensationC = null;
      sReasonForNoCompensationA = req.session.reasonForNoCompensationA = null;
      sReasonForNoCompensationC = req.session.reasonForNoCompensationC = null;

    } else {

      sFineC                    = req.session.fineC = req.body.fineC;
      sCompensationC            = req.session.compensationC = req.body.compensationC;
      sReasonForNoCompensationC = req.session.reasonForNoCompensationC = req.body.reasonForNoCompensationC;
      sTotalToPay               = req.session.totalToPay = (Number(sFineC) + Number(sCompensationC) + Number(sCost) + Number(sSurcharge)).toFixed(2);

      sFineA                    = req.session.fineA = null;
      sFineB                    = req.session.fineB = null;
      sCompensationA            = req.session.compensationA = null;
      sCompensationB            = req.session.compensationB = null;
      sReasonForNoCompensationA = req.session.reasonForNoCompensationA = null;
      sReasonForNoCompensationB = req.session.reasonForNoCompensationB = null;

    }

    // has the user come from check your answers
    if (!req.query.change) {
      res.redirect('/proof-in-absence/legal-adviser/payment-method/' + req.params.id);
    }
    else {
      res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id + '#fine-and-compensation');
    }

  });


router.route('/proof-in-absence/legal-adviser/payment-method/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/payment-method', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Payment method',
      pagetitle: 'Payment method',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      search: entry,
      signedIn: true,
      breadcrumb: true,
      sPaymentMethod: sPaymentMethod,
      sTotalToPay: sTotalToPay,
      sBack: sBack
    });
  })
  .post(function(req, res, next) {
    sPaymentMethod = req.session.paymentMethod = req.body.paymentMethod;

    if (sPaymentMethod === "Pay direct to court") {
      res.redirect('/proof-in-absence/legal-adviser/pay-direct-to-court/' + req.params.id);
    } else if (sPaymentMethod === "Deduct from benefits") {
      res.redirect('/proof-in-absence/legal-adviser/deduct-from-benefits/' + req.params.id);
    } else {
      res.redirect('/proof-in-absence/legal-adviser/attach-to-earnings/' + req.params.id);
    }

  });


router.route('/proof-in-absence/legal-adviser/pay-direct-to-court/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/pay-direct-to-court', {
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
      sBack: sBack,
      sLumpSumAmount: sLumpSumAmount,
      sLumpSumAmountPaidWithin: sLumpSumAmountPaidWithin,
      sLumpSumInstalmentAmount: sLumpSumInstalmentAmount,
      sLumpSumInstalmentMade: sLumpSumInstalmentMade,
      sReasonForNotDeductFromBenefitsOrAttachToEarnings: sReasonForNotDeductFromBenefitsOrAttachToEarnings,
      sLumpSumInstalmentStartDateDay: sLumpSumInstalmentStartDateDay,
      sLumpSumInstalmentStartDateMonth: sLumpSumInstalmentStartDateMonth,
      sLumpSumInstalmentStartDateYear: sLumpSumInstalmentStartDateYear,
      sInstalmentOnlyAmount: sInstalmentOnlyAmount,
      sInstalmentOnlyMade: sInstalmentOnlyMade,
      sInstalmentOnlyStartDateDay: sInstalmentOnlyStartDateDay,
      sInstalmentOnlyStartDateMonth: sInstalmentOnlyStartDateMonth,
      sInstalmentOnlyStartDateYear: sInstalmentOnlyStartDateYear,
      sTotalToPay: sTotalToPay
    });
  })
  .post(function(req, res, next) {
    sDefendantPay = req.session.defendantPay = req.body.defendantPay;
    sReasonForNotDeductFromBenefitsOrAttachToEarnings = req.session.reasonForNotDeductFromBenefitsOrAttachToEarnings = req.body.reasonForNotDeductFromBenefitsOrAttachToEarnings;

    if (sDefendantPay === "Lump sum plus instalments") {

      sLumpSumAmount                   = req.session.lumpSumAmount = req.body.lumpSumAmount;
      sLumpSumAmountPaidWithin         = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
      sLumpSumInstalmentAmount         = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
      sLumpSumInstalmentMade           = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
      sLumpSumInstalmentStartDateDay   = req.session.lumpSumInstalmentStartDateDay = parseInt(req.body.lumpSumInstalmentStartDateDay);
      sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = parseInt(req.body.lumpSumInstalmentStartDateMonth);
      sLumpSumInstalmentStartDateYear  = req.session.lumpSumInstalmentStartDateYear = parseInt(req.body.lumpSumInstalmentStartDateYear);
      sLumpSumInstalmentStartDate      = req.session.lumpSumInstalmentStartDate = new Date(parseInt(req.body.lumpSumInstalmentStartDateYear) + '-' + parseInt(req.body.lumpSumInstalmentStartDateMonth) + '-' + parseInt(req.body.lumpSumInstalmentStartDateDay));

    } else if (sDefendantPay === "Instalments only") {

      sInstalmentOnlyMade           = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyAmount         = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
      sInstalmentOnlyMade           = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyStartDateDay   = req.session.instalmentOnlyStartDateDay = parseInt(req.body.instalmentOnlyStartDateDay);
      sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = parseInt(req.body.instalmentOnlyStartDateMonth);
      sInstalmentOnlyStartDateYear  = req.session.instalmentOnlyStartDateYear = parseInt(req.body.instalmentOnlyStartDateYear);
      sInstalmentOnlyStartDate      = req.session.instalmentOnlyStartDate = new Date(parseInt(req.body.instalmentOnlyStartDateYear) + '-' + parseInt(req.body.instalmentOnlyStartDateMonth) + '-' + parseInt(req.body.instalmentOnlyStartDateDay));

    }
    res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);

  });


router.route('/proof-in-absence/legal-adviser/attach-to-earnings/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/attach-to-earnings', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Attach to earnings',
      pagetitle: 'Attach to earnings',
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
      sReasonForAttachingToEarnings: sReasonForAttachingToEarnings,
      sReserveTerms: sReserveTerms,
      sLumpSumAmount: sLumpSumAmount,
      sLumpSumAmountPaidWithin: sLumpSumAmountPaidWithin,
      sLumpSumInstalmentAmount: sLumpSumInstalmentAmount,
      sLumpSumInstalmentMade: sLumpSumInstalmentMade,
      sLumpSumInstalmentStartDateDay: sLumpSumInstalmentStartDateDay,
      sLumpSumInstalmentStartDateMonth: sLumpSumInstalmentStartDateMonth,
      sLumpSumInstalmentStartDateYear: sLumpSumInstalmentStartDateYear,
      sLumpSumInstalmentStartDate: sLumpSumInstalmentStartDate,
      sInstalmentOnlyAmount: sInstalmentOnlyAmount,
      sInstalmentOnlyMade: sInstalmentOnlyMade,
      sInstalmentOnlyStartDateDay: sInstalmentOnlyStartDateDay,
      sInstalmentOnlyStartDateMonth: sInstalmentOnlyStartDateMonth,
      sInstalmentOnlyStartDateYear: sInstalmentOnlyStartDateYear,
      sInstalmentOnlyStartDate: sInstalmentOnlyStartDate,
      sTotalToPay: sTotalToPay
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
    sRerserveTerms = req.session.reserveTerms = req.body.reserveTerms;

    if (sReserveTerms === "Lump sum plus instalments") {

      sLumpSumAmount                   = req.session.lumpSumAmount = req.body.lumpSumAmount;
      sLumpSumAmountPaidWithin         = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
      sLumpSumInstalmentAmount         = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
      sLumpSumInstalmentMade           = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
      sLumpSumInstalmentStartDateDay   = req.session.lumpSumInstalmentStartDateDay = parseInt(req.body.lumpSumInstalmentStartDateDay);
      sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = parseInt(req.body.lumpSumInstalmentStartDateMonth);
      sLumpSumInstalmentStartDateYear  = req.session.lumpSumInstalmentStartDateYear = parseInt(req.body.lumpSumInstalmentStartDateYear);
      sLumpSumInstalmentStartDate      = new Date(req.session.lumpSumInstalmentStartDate = parseInt(req.body.lumpSumInstalmentStartDateYear) + '-' + parseInt(req.body.lumpSumInstalmentStartDateMonth) + '-' + parseInt(req.body.lumpSumInstalmentStartDateDay));

    } else if (sReserveTerms === "Instalments only") {

      sInstalmentOnlyMade           = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyAmount         = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
      sInstalmentOnlyMade           = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyStartDateDay   = req.session.instalmentOnlyStartDateDay = parseInt(req.body.instalmentOnlyStartDateDay);
      sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = parseInt(req.body.instalmentOnlyStartDateMonth);
      sInstalmentOnlyStartDateYear  = req.session.instalmentOnlyStartDateYear = parseInt(req.body.instalmentOnlyStartDateYear);
      sInstalmentOnlyStartDate      = new Date(req.session.instalmentOnlyStartDate = parseInt(req.body.instalmentOnlyStartDateYear) + '-' + parseInt(req.body.instalmentOnlyStartDateMonth) + '-' + parseInt(req.body.instalmentOnlyStartDateDay));

    }

    res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);
  });


router.route('/proof-in-absence/legal-adviser/deduct-from-benefits/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/deduct-from-benefits', {
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
      sLumpSumAmountPaidWithin: sLumpSumAmountPaidWithin,
      sLumpSumInstalmentAmount: sLumpSumInstalmentAmount,
      sLumpSumInstalmentMade: sLumpSumInstalmentMade,
      sLumpSumInstalmentStartDateDay: sLumpSumInstalmentStartDateDay,
      sLumpSumInstalmentStartDateMonth: sLumpSumInstalmentStartDateMonth,
      sLumpSumInstalmentStartDateYear: sLumpSumInstalmentStartDateYear,
      sLumpSumInstalmentStartDate: sLumpSumInstalmentStartDate,
      sInstalmentOnlyAmount: sInstalmentOnlyAmount,
      sInstalmentOnlyMade: sInstalmentOnlyMade,
      sInstalmentOnlyStartDateDay: sInstalmentOnlyStartDateDay,
      sInstalmentOnlyStartDateMonth: sInstalmentOnlyStartDateMonth,
      sInstalmentOnlyStartDateYear: sInstalmentOnlyStartDateYear,
      sInstalmentOnlyStartDate: sInstalmentOnlyStartDate,
      sTotalToPay: sTotalToPay
    });
  })
  .post(function(req, res, next) {
    sNationalInsuranceNumber = req.session.nationalInsuranceNumber = req.body.nationalInsuranceNumber;
    sReasonForDeductingFromBenefits = req.session.reasonForDeductingFromBenefits = req.body.reasonForDeductingFromBenefits;
    sReserveTerms = req.session.reserveTerms = req.body.reserveTerms;

    if (sReserveTerms === "Lump sum plus instalments") {

      sLumpSumAmount                   = req.session.lumpSumAmount = req.body.lumpSumAmount;
      sLumpSumAmountPaidWithin         = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
      sLumpSumInstalmentAmount         = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
      sLumpSumInstalmentMade           = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
      sLumpSumInstalmentStartDateDay   = req.session.lumpSumInstalmentStartDateDay = parseInt(req.body.lumpSumInstalmentStartDateDay);
      sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = parseInt(req.body.lumpSumInstalmentStartDateMonth);
      sLumpSumInstalmentStartDateYear  = req.session.lumpSumInstalmentStartDateYear = parseInt(req.body.lumpSumInstalmentStartDateYear);
      sLumpSumInstalmentStartDate      = new Date(req.session.lumpSumInstalmentStartDate = parseInt(req.body.lumpSumInstalmentStartDateYear) + '-' + parseInt(req.body.lumpSumInstalmentStartDateMonth) + '-' + parseInt(req.body.lumpSumInstalmentStartDateDay));

    } else if (sReserveTerms === "Instalments only") {

      sInstalmentOnlyMade           = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyAmount         = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
      sInstalmentOnlyMade           = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyStartDateDay   = req.session.instalmentOnlyStartDateDay = parseInt(req.body.instalmentOnlyStartDateDay);
      sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = parseInt(req.body.instalmentOnlyStartDateMonth);
      sInstalmentOnlyStartDateYear  = req.session.instalmentOnlyStartDateYear = parseInt(req.body.instalmentOnlyStartDateYear);
      sInstalmentOnlyStartDate      = new Date(req.session.instalmentOnlyStartDate = parseInt(req.body.instalmentOnlyStartDateYear) + '-' + parseInt(req.body.instalmentOnlyStartDateMonth) + '-' + parseInt(req.body.instalmentOnlyStartDateDay));

    }

    res.redirect('/proof-in-absence/legal-adviser/check-your-decisions/' + req.params.id);

  });


router.route('/proof-in-absence/legal-adviser/check-your-decisions/:id')
  .get(function(req, res, next) {

    entry = dataEngine.getSearchEntry(req.params.id);
    sMakeDecision = req.session.makeDecision;

    // prevent access unless a decision has been made
    if (sMakeDecision === undefined) {

      res.redirect('/proof-in-absence/legal-adviser/case-details/' + req.params.id);

    } else {

      res.render('proof-in-absence/legal-adviser/check-your-decisions', {
        baseurl: baseurl,
        apptitle: apptitle,
        doctitle: 'Check your decisions',
        pagetitle: 'Check your decisions',
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

        sReasonForNoCompensationA: sReasonForNoCompensationA,
        sReasonForNoCompensationB: sReasonForNoCompensationB,
        sReasonForNoCompensationC: sReasonForNoCompensationC,

        sCollectionOrderConfirmed: sCollectionOrderConfirmed,
        sReasonForDeductingFromBenefits: sReasonForDeductingFromBenefits,
        sReasonForAttachingToEarnings: sReasonForAttachingToEarnings,
        sReasonForNotDeductFromBenefitsOrAttachToEarnings: sReasonForNotDeductFromBenefitsOrAttachToEarnings,
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
        sInstalmentOnlyStartDate: sInstalmentOnlyStartDate,
        sLumpSumAmount: sLumpSumAmount,
        sLumpSumAmountPaidWithin: sLumpSumAmountPaidWithin,
        sLumpSumInstalmentAmount: sLumpSumInstalmentAmount,
        sLumpSumInstalmentMade: sLumpSumInstalmentMade,
        sLumpSumInstalmentStartDateDay: sLumpSumInstalmentStartDateDay,
        sLumpSumInstalmentStartDateMonth: sLumpSumInstalmentStartDateMonth,
        sLumpSumInstalmentStartDateYear: sLumpSumInstalmentStartDateYear,
        sLumpSumInstalmentStartDate: sLumpSumInstalmentStartDate,

        sTypeOfDischarge: sTypeOfDischarge,
        sCompensation: sCompensation,
        sDurationAmount: sDurationAmount,
        sDurationTimeSpan: sDurationTimeSpan,

        sTotalToPay: sTotalToPay,

        sBack: sBack
      });

    }

  })
  .post(function(req, res, next) {
    res.redirect('/proof-in-absence/legal-adviser/confirmation/' + req.params.id);
  });


router.route('/proof-in-absence/legal-adviser/confirmation/:id/')
  .get(function(req, res, next) {

    req.session.destroy();

    entry = dataEngine.getSearchEntry(req.params.id);

    url = "case-details";
    id  = Number(req.params.id) + 1;

    if (id > 10) {
      id  = null;
      url = "session-complete";
    }

    res.render('proof-in-absence/legal-adviser/confirmation', {
      id: id,
      url: url,
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Decision submitted',
      pagetitle: 'Decision submitted',
      search: entry,
      signedIn: true,
      breadcrumb: false
    });

  });


router.route('/proof-in-absence/legal-adviser/session-complete/')
  .get(function(req, res, next) {
    res.render('proof-in-absence/legal-adviser/session-complete', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Session complete',
      pagetitle: 'Session complete',
      signedIn: true,
      breadcrumb: false
    });
  });


router.route('/proof-in-absence/legal-adviser/no-cases-to-review/')
  .get(function(req, res, next) {
    res.render('proof-in-absence/legal-adviser/no-cases-to-review', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'No cases to review',
      pagetitle: 'No cases to review',
      section: 'home',
      section_name: 'Home',
      signedIn: true,
      breadcrumb: true
    });
  });


router.route('/proof-in-absence/legal-adviser/personal-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('proof-in-absence/legal-adviser/personal-details', {
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
    res.redirect('/proof-in-absence/legal-adviser/case-details/' + req.params.id + '/?saved=true');
  });


router.get('/proof-in-absence/legal-adviser/*', function(req, res, next) {
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
