var express = require('express');
var router = express.Router();


// datastore
var dataEngine = require('../models/data-legal-advisers');

// Date fixer (add leading zero)
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

// routes
router.use(function(req, res, next) {

  // base
  baseurl = '/legal-adviser/';
  apptitle = 'Criminal Justice Services online';

  // general
  id = req.params.id;
  sHasSaved = req.query.saved;
  sActiveTab = req.session.activeTab;
  sBack = req.header('Referer') || '/';

  // offence
  sMakeDecision = req.session.makeDecision;
  sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP;
  sPaymentMethod = req.session.paymentMethod;
  sFineBandApplied = req.session.fineBandApplied;
  sCollectionOrderConfirmed = req.session.collectionOrderConfirmed;
  sFineA = req.session.fineA;
  sFineB = req.session.fineB;
  sFineC = req.session.fineC;
  sCompensationA = req.session.compensationA;
  sCompensationB = req.session.compensationB;
  sCompensationC = req.session.compensationC;
  sReasonForNoCompensationA = req.session.reasonForNoCompensationA;
  sReasonForNoCompensationB = req.session.reasonForNoCompensationB;
  sReasonForNoCompensationC = req.session.reasonForNoCompensationC;
  sCost = req.session.cost;
  sSurcharge = req.session.surcharge;
  sTotalToPay = req.session.totalToPay;

  // personal details
  sTitle = req.session.title;
  sFirstname = req.session.firstname;
  sLastname = req.session.lastname;
  sDob = req.session.dob;
  sEmail = req.session.email;
  sPhone = req.session.phone;
  sMobile = req.session.mobile;
  sAddress1 = req.session.address1;
  sAddress2 = req.session.address2;
  sTown = req.session.town;
  sPostcode = req.session.postcode;

  // discharge
  sTypeOfDischarge = req.session.typeOfDischarge;
  sCompensation = req.session.compensation;
  sDurationAmount = req.session.durationAmount;
  sDurationTimeSpan = req.session.durationTimeSpan;

  // pay directly to court
  sReasonForNotDeductFromBenefitsOrAttachToEarnings = req.session.reasonForNotDeductFromBenefitsOrAttachToEarnings;
  sDefendantPay = req.session.defendantPay;

  // deduct from benefits
  sNationalInsuranceNumber = req.session.nationalInsuranceNumber;
  sReasonForDeductingFromBenefits = req.session.reasonForDeductingFromBenefits;
  sReserveTerms = req.session.reserveTerms;

  sLumpSumAmount = req.session.lumpSumAmount;
  sLumpSumAmountPaidWithin = req.session.lumpSumAmountPaidWithin;
  sLumpSumInstalmentAmount = req.session.lumpSumInstalmentAmount;
  sLumpSumInstalmentMade = req.session.lumpSumInstalmentMade;
  sLumpSumInstalmentStartDateDay = req.session.lumpSumInstalmentStartDateDay;
  sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth;
  sLumpSumInstalmentStartDateYear = req.session.lumpSumInstalmentStartDateYear;
  sLumpSumInstalmentStartDate = req.session.lumpSumInstalmentStartDate;

  sInstalmentOnlyAmount = req.session.instalmentOnlyAmount;
  sInstalmentOnlyMade = req.session.instalmentOnlyMade;
  sInstalmentOnlyStartDateDay = req.session.instalmentOnlyStartDateDay;
  sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth;
  sInstalmentOnlyStartDateYear = req.session.instalmentOnlyStartDateYear;
  sInstalmentOnlyStartDate = req.session.instalmentOnlyStartDate;

  // attach to earnings
  sEmployeeNumber = req.session.employeeNumber;
  sEmployerName = req.session.employerName;
  sReasonForAttachingToEarnings = req.session.reasonForAttachingToEarnings;
  sEmployerName = req.session.employerName;
  sEmployerAddress1 = req.session.employerAddress1;
  sEmployerAddress2 = req.session.employerAddress2;
  sEmployerAddress3 = req.session.employerAddress3;
  sEmployerTown = req.session.employerTown;
  sEmployerPostcode = req.session.employerPostcode;

  // refer for court hearing
  sCourtLocation = req.session.courtLocation;
  sCourtRoom = req.session.courtRoom;
  sReasonForReferring = req.session.reasonForReferring;

  sDateOfHearingDay = req.session.dateOfHearingDay;
  sDateOfHearingMonth = req.session.dateOfHearingMonth;
  sDateOfHearingYear = req.session.dateOfHearingYear;
  sDateOfHearing = req.session.dateOfHearing;

  sStartTimeOfHearingHour = req.session.startTimeOfHearingHour;
  sStartTimeOfHearingMinute = req.session.startTimeOfHearingMinute;

  sEquivocalPlea = req.session.equivocalPlea;
  sCaseManagementHearing = req.session.caseManagementHearing;

  next();

});


// remove session data and redirect user to sign-in page
router.get('/legal-adviser/end-session', function(req, res, next) {
  req.session.destroy();
  res.redirect('/legal-adviser/home');
});


router.route('/legal-adviser/')
  .get(function(req, res, next) {
    res.render('legal-adviser/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      issigned: false,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      breadcrumb: false,
      sBack: sBack
    });
  }).post(function(req, res, next) {
    res.redirect('/legal-adviser/home/');
});


router.route('/legal-adviser/home/')
  .get(function(req, res, next) {
    res.render('legal-adviser/home', {
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
      globalHeaderBar: false,
      sBack: sBack
    });
  }).post(function(req, res, next) {
    res.redirect('/legal-adviser/search-for-a-case/');
});


router.route('/legal-adviser/search-for-a-case/')
  .all(function(req, res, next) {
    res.render('legal-adviser/search-for-a-case', {
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


router.route('/legal-adviser/start-a-new-sjp-session/')
  .get(function(req, res, next) {
    res.render('legal-adviser/start-a-new-sjp-session', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Start a new SJP session',
      pagetitle: 'Start a new <abbr title="Single Justice Procedure">SJP</abbr> session',
      section: 'home',
      section_name: 'Home',
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
      ispublic: false,
      doctitle: 'Case details',
      pagetitle: 'Case details',
      section: 'home',
      section_name: 'Home',
      search: entry,
      breadcrumb: true,
      casedetails: true,
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
      sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,
      sActiveTab: sActiveTab,
      sBack: sBack
    });
  }).post(function(req, res, next) {

    sMakeDecision = req.session.makeDecision = req.body.makeDecision;
    sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP = req.body.makeDecisionProvedSJP;


    if (sMakeDecision === "Proved SJP") {

      if (sMakeDecisionProvedSJP === "Financial penalty") {

        res.redirect('/legal-adviser/financial-penalty/' + req.params.id);

      } else if (sMakeDecisionProvedSJP === "Discharge") {

        res.redirect('/legal-adviser/discharge/' + req.params.id);

      }

    } else if (sMakeDecision === "Discharge") {

      sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP = null;
      res.redirect('/legal-adviser/discharge/' + req.params.id);

    } else if (sMakeDecision === "Financial penalty") {

      sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP = null;
      res.redirect('/legal-adviser/financial-penalty/' + req.params.id);

    } else if (sMakeDecision === "Refer for court hearing") {

      sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP = null;
      res.redirect('/legal-adviser/refer-for-court-hearing/' + req.params.id);

    } else if (sMakeDecision === "Withdraw") {

      sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP = null;
      res.redirect('/legal-adviser/withdraw/' + req.params.id);

    } else if (sMakeDecision === "Dismiss") {

      sMakeDecisionProvedSJP = req.session.makeDecisionProvedSJP = null;
      res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);

    }

});


router.route('/legal-adviser/case-details-idea/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/case-details-idea', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Case details',
      pagetitle: 'Case details',
      section: 'home',
      section_name: 'Home',
      search: entry,
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
      sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,
      sActiveTab: sActiveTab,
      sBack: sBack
    });
  }).post(function(req, res, next) {

    sMakeDecision = req.session.makeDecision = req.body.makeDecision;

    if (sMakeDecision === "Financial penalty") {

      res.redirect('/legal-adviser/financial-penalty/' + req.params.id);

    } else if (sMakeDecision === "Refer for court hearing") {

      res.redirect('/legal-adviser/refer-for-court-hearing/' + req.params.id);

    } else if (sMakeDecision === "Discharge") {

      res.redirect('/legal-adviser/discharge/' + req.params.id);

    } else if (sMakeDecision === "Withdraw") {

      res.redirect('/legal-adviser/withdraw/' + req.params.id);

    } else if (sMakeDecision === "Dismiss") {

      res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);

    }

});


router.route('/legal-adviser/refer-for-court-hearing/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/refer-for-court-hearing', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
      section: 'home',
      section_name: 'Home',
      sMakeDecision: sMakeDecision,
      sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,

      sCourtLocation: sCourtLocation,
      sCourtRoom: sCourtRoom,
      sReasonForReferring: sReasonForReferring,
      sDateOfHearingDay: sDateOfHearingDay,
      sDateOfHearingMonth: sDateOfHearingMonth,
      sDateOfHearingYear: sDateOfHearingYear,
      sDateOfHearing: sDateOfHearing,
      sStartTimeOfHearingHour: sStartTimeOfHearingHour,
      sStartTimeOfHearingMinute: sStartTimeOfHearingMinute,
      sEquivocalPlea: sEquivocalPlea,
      sCaseManagementHearing: sCaseManagementHearing,
      search: entry,
      breadcrumb: true,
    });
  }).post(function(req, res, next) {

    sCourtLocation = req.session.courtLocation = req.body.courtLocation;
    sCourtRoom = req.session.courtRoom = req.body.courtRoom;
    sReasonForReferring = req.session.reasonForReferring = req.body.reasonForReferring;

    sDateOfHearingDay = req.session.dateOfHearingDay = req.body.dateOfHearingDay;
    sDateOfHearingMonth = req.session.dateOfHearingMonth = req.body.dateOfHearingMonth;
    sDateOfHearingYear = req.session.dateOfHearingYear = req.body.dateOfHearingYear;
    sDateOfHearing = req.session.dateOfHearing = new Date(parseInt(req.body.dateOfHearingYear) + '-' + parseInt(req.body.dateOfHearingMonth) + '-' + parseInt(req.body.dateOfHearingDay));

    sStartTimeOfHearingHour = req.session.startTimeOfHearingHour = req.body.startTimeOfHearingHour;
    sStartTimeOfHearingMinute = req.session.startTimeOfHearingMinute = req.body.startTimeOfHearingMinute;

    sEquivocalPlea = req.session.equivocalPlea = req.body.equivocalPlea;
    sCaseManagementHearing = req.session.caseManagementHearing = req.body.caseManagementHearing;

    res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);

});


router.route('/legal-adviser/discharge/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/discharge', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
      section: 'home',
      section_name: 'Home',
      sMakeDecision: sMakeDecision,
      sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,
      sTypeOfDischarge: sTypeOfDischarge,
      sCompensation: sCompensation,
      sDurationAmount: sDurationAmount,
      sDurationTimeSpan: sDurationTimeSpan,
      sCost: sCost,
      sSurcharge: sSurcharge,
      sCollectionOrderConfirmed: sCollectionOrderConfirmed,
      search: entry,
      breadcrumb: true,
    });
  })
  .post(function(req, res, next) {

    sTypeOfDischarge = req.session.typeOfDischarge = req.body.typeOfDischarge;
    sCompensation = req.session.compensation = req.body.compensation;
    sDurationAmount = req.session.durationAmount = req.body.durationAmount;
    sDurationTimeSpan = req.session.durationTimeSpan = req.body.durationTimeSpan;
    sCost = req.session.cost = req.body.cost;
    sSurcharge = req.session.surcharge = req.body.surcharge;
    sCollectionOrderConfirmed = req.session.collectionOrderConfirmed = req.body.collectionOrderConfirmed ? "true" : "false";
    sTotalToPay = req.session.totalToPay = (Number(sCompensation) + Number(sCost) + Number(sSurcharge)).toFixed(2);

    res.redirect('/legal-adviser/payment-method/' + req.params.id);

});


router.route('/legal-adviser/withdraw/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/withdraw', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
      section: 'home',
      section_name: 'Home',
      sMakeDecision: sMakeDecision,
      sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,
      search: entry,
      breadcrumb: true,
    });
  }).post(function(req, res, next) {
    res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);
});


router.route('/legal-adviser/financial-penalty/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/financial-penalty', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Confirm outcome',
      pagetitle: 'Confirm outcome',
      section: 'home',
      section_name: 'Home',
      //section2: 'case-details/' + req.params.id,
      //section2_name: 'Case details',
      sMakeDecision: sMakeDecision,
      sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,
      search: entry,
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
  }).post(function(req, res, next) {
    sFineBandApplied = req.session.fineBandApplied = req.body.fineBandApplied;
    sCost = req.session.cost = req.body.cost;
    sSurcharge = req.session.surcharge = req.body.surcharge;
    sCollectionOrderConfirmed = req.session.collectionOrderConfirmed = req.body.collectionOrderConfirmed ? "true" : "false";

    if (sFineBandApplied === "Band A") {

      sFineA = req.session.fineA = req.body.fineA;
      sCompensationA = req.session.compensationA = req.body.compensationA;
      sReasonForNoCompensationA = req.session.reasonForNoCompensationA = req.body.reasonForNoCompensationA;
      sTotalToPay = req.session.totalToPay = (Number(sFineA) + Number(sCompensationA) + Number(sCost) + Number(sSurcharge)).toFixed(2);

      sFineB = req.session.fineB = null;
      sFineC = req.session.fineC = null;
      sCompensationB = req.session.compensationB = null;
      sCompensationC = req.session.compensationC = null;
      sReasonForNoCompensationB = req.session.reasonForNoCompensationB = null;
      sReasonForNoCompensationC = req.session.reasonForNoCompensationC = null;

    } else if (sFineBandApplied === "Band B") {

      sFineB = req.session.fineB = req.body.fineB;
      sCompensationB = req.session.compensationB = req.body.compensationB;
      sReasonForNoCompensationB = req.session.reasonForNoCompensationB = req.body.reasonForNoCompensationB;
      sTotalToPay = req.session.totalToPay = (Number(sFineB) + Number(sCompensationB) + Number(sCost) + Number(sSurcharge)).toFixed(2);

      sFineA = req.session.fineA = null;
      sFineC = req.session.fineC = null;
      sCompensationA = req.session.compensationA = null;
      sCompensationC = req.session.compensationC = null;
      sReasonForNoCompensationA = req.session.reasonForNoCompensationA = null;
      sReasonForNoCompensationC = req.session.reasonForNoCompensationC = null;

    } else {

      sFineC = req.session.fineC = req.body.fineC;
      sCompensationC = req.session.compensationC = req.body.compensationC;
      sReasonForNoCompensationC = req.session.reasonForNoCompensationC = req.body.reasonForNoCompensationC;
      sTotalToPay = req.session.totalToPay = (Number(sFineC) + Number(sCompensationC) + Number(sCost) + Number(sSurcharge)).toFixed(2);

      sFineA = req.session.fineA = null;
      sFineB = req.session.fineB = null;
      sCompensationA = req.session.compensationA = null;
      sCompensationB = req.session.compensationB = null;
      sReasonForNoCompensationA = req.session.reasonForNoCompensationA = null;
      sReasonForNoCompensationB = req.session.reasonForNoCompensationB = null;

    }

    // has the user come from check your answers
    if (!req.query.change) {
      res.redirect('/legal-adviser/payment-method/' + req.params.id);
    }
    else {
      res.redirect('/legal-adviser/check-your-decisions/' + req.params.id + '#fine-and-compensation');
    }

});


router.route('/legal-adviser/payment-method/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/payment-method', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Payment method',
      pagetitle: 'Payment method',
      section: 'home',
      section_name: 'Home',
      //section2: 'case-details/' + req.params.id,
      //section2_name: 'Case details',
      search: entry,
      breadcrumb: true,
      sPaymentMethod: sPaymentMethod,
      sTotalToPay: sTotalToPay,
      sBack: sBack
    });
  }).post(function(req, res, next) {

    sPaymentMethod = req.session.paymentMethod = req.body.paymentMethod;

    if (sPaymentMethod === "Pay directly to court") {

      res.redirect('/legal-adviser/pay-directly-to-court/' + req.params.id);

    } else if (sPaymentMethod === "Deduct from benefits") {

      res.redirect('/legal-adviser/deduct-from-benefits/' + req.params.id);

    } else {

      res.redirect('/legal-adviser/attach-to-earnings/' + req.params.id);

    }

});


router.route('/legal-adviser/pay-directly-to-court/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/pay-directly-to-court', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Pay directly to court',
      pagetitle: 'Pay directly to court',
      section: 'home',
      section_name: 'Home',
      search: entry,
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
  }).post(function(req, res, next) {
    sDefendantPay = req.session.defendantPay = req.body.defendantPay;
    sReasonForNotDeductFromBenefitsOrAttachToEarnings = req.session.reasonForNotDeductFromBenefitsOrAttachToEarnings = req.body.reasonForNotDeductFromBenefitsOrAttachToEarnings;

    if (sDefendantPay === "Lump sum plus instalments") {

      sLumpSumAmount = req.session.lumpSumAmount = req.body.lumpSumAmount;
      sLumpSumAmountPaidWithin = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
      sLumpSumInstalmentAmount = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
      sLumpSumInstalmentMade = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
      sLumpSumInstalmentStartDateDay = req.session.lumpSumInstalmentStartDateDay = parseInt(req.body.lumpSumInstalmentStartDateDay);
      sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = parseInt(req.body.lumpSumInstalmentStartDateMonth);
      sLumpSumInstalmentStartDateYear = req.session.lumpSumInstalmentStartDateYear = parseInt(req.body.lumpSumInstalmentStartDateYear);
      sLumpSumInstalmentStartDate = req.session.lumpSumInstalmentStartDate = new Date(parseInt(req.body.lumpSumInstalmentStartDateYear) + '-' + parseInt(req.body.lumpSumInstalmentStartDateMonth) + '-' + parseInt(req.body.lumpSumInstalmentStartDateDay));

    } else if (sDefendantPay === "Instalments only") {

      sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyAmount = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
      sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyStartDateDay = req.session.instalmentOnlyStartDateDay = parseInt(req.body.instalmentOnlyStartDateDay);
      sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = parseInt(req.body.instalmentOnlyStartDateMonth);
      sInstalmentOnlyStartDateYear = req.session.instalmentOnlyStartDateYear = parseInt(req.body.instalmentOnlyStartDateYear);
      sInstalmentOnlyStartDate = req.session.instalmentOnlyStartDate = new Date(parseInt(req.body.instalmentOnlyStartDateYear) + '-' + parseInt(req.body.instalmentOnlyStartDateMonth) + '-' + parseInt(req.body.instalmentOnlyStartDateDay));

    }

    res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);

});


router.route('/legal-adviser/attach-to-earnings/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/attach-to-earnings', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Attach to earnings',
      pagetitle: 'Attach to earnings',
      section: 'home',
      section_name: 'Home',
      //section2: 'case-details/' + req.params.id,
      //section2_name: 'Case details',
      search: entry,
      breadcrumb: true,
      sBack: sBack,
      sEmployeeNumber: sEmployeeNumber,
      sEmployerName: sEmployerName,
      sEmployerAddress1: sEmployerAddress1,
      sEmployerAddress2: sEmployerAddress2,
      sEmployerAddress3: sEmployerAddress3,
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
  }).post(function(req, res, next) {
    sEmployeeNumber = req.session.employeeNumber = req.body.employeeNumber;
    sEmployerName = req.session.employerName = req.body.employerName;
    sEmployerAddress1 = req.session.employerAddress1 = req.body.employerAddress1;
    sEmployerAddress2 = req.session.employerAddress2 = req.body.employerAddress2;
    sEmployerAddress3 = req.session.employerAddress3 = req.body.employerAddress3;
    sEmployerTown = req.session.employerTown = req.body.employerTown;
    sEmployerPostcode = req.session.employerPostcode = req.body.employerPostcode;
    sReasonForAttachingToEarnings = req.session.reasonForAttachingToEarnings = req.body.reasonForAttachingToEarnings;
    sRerserveTerms = req.session.reserveTerms = req.body.reserveTerms;

    if (sReserveTerms === "Lump sum plus instalments") {

      sLumpSumAmount = req.session.lumpSumAmount = req.body.lumpSumAmount;
      sLumpSumAmountPaidWithin = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
      sLumpSumInstalmentAmount = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
      sLumpSumInstalmentMade = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
      sLumpSumInstalmentStartDateDay = req.session.lumpSumInstalmentStartDateDay = parseInt(req.body.lumpSumInstalmentStartDateDay);
      sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = parseInt(req.body.lumpSumInstalmentStartDateMonth);
      sLumpSumInstalmentStartDateYear = req.session.lumpSumInstalmentStartDateYear = parseInt(req.body.lumpSumInstalmentStartDateYear);
      sLumpSumInstalmentStartDate = new Date(req.session.lumpSumInstalmentStartDate = parseInt(req.body.lumpSumInstalmentStartDateYear) + '-' + parseInt(req.body.lumpSumInstalmentStartDateMonth) + '-' + parseInt(req.body.lumpSumInstalmentStartDateDay));

    } else if (sReserveTerms === "Instalments only") {

      sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyAmount = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
      sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyStartDateDay = req.session.instalmentOnlyStartDateDay = parseInt(req.body.instalmentOnlyStartDateDay);
      sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = parseInt(req.body.instalmentOnlyStartDateMonth);
      sInstalmentOnlyStartDateYear = req.session.instalmentOnlyStartDateYear = parseInt(req.body.instalmentOnlyStartDateYear);
      sInstalmentOnlyStartDate = new Date(req.session.instalmentOnlyStartDate = parseInt(req.body.instalmentOnlyStartDateYear) + '-' + parseInt(req.body.instalmentOnlyStartDateMonth) + '-' + parseInt(req.body.instalmentOnlyStartDateDay));

    }

    res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);

});


router.route('/legal-adviser/deduct-from-benefits/:id')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/deduct-from-benefits', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Deduct from benefits',
      pagetitle: 'Deduct from benefits',
      section: 'home',
      section_name: 'Home',
      //section2: 'case-details/' + req.params.id,
      //section2_name: 'Case details',
      search: entry,
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
  }).post(function(req, res, next) {
    sNationalInsuranceNumber = req.session.nationalInsuranceNumber = req.body.nationalInsuranceNumber;
    sReasonForDeductingFromBenefits = req.session.reasonForDeductingFromBenefits = req.body.reasonForDeductingFromBenefits;
    sReserveTerms = req.session.reserveTerms = req.body.reserveTerms;

    if (sReserveTerms === "Lump sum plus instalments") {

      sLumpSumAmount = req.session.lumpSumAmount = req.body.lumpSumAmount;
      sLumpSumAmountPaidWithin = req.session.lumpSumPaidWithin = req.body.lumpSumPaidWithin;
      sLumpSumInstalmentAmount = req.session.lumpSumInstalmentAmount = req.body.lumpSumInstalmentAmount;
      sLumpSumInstalmentMade = req.session.lumpSumInstalmentMade = req.body.lumpSumInstalmentMade;
      sLumpSumInstalmentStartDateDay = req.session.lumpSumInstalmentStartDateDay = parseInt(req.body.lumpSumInstalmentStartDateDay);
      sLumpSumInstalmentStartDateMonth = req.session.lumpSumInstalmentStartDateMonth = parseInt(req.body.lumpSumInstalmentStartDateMonth);
      sLumpSumInstalmentStartDateYear = req.session.lumpSumInstalmentStartDateYear = parseInt(req.body.lumpSumInstalmentStartDateYear);
      sLumpSumInstalmentStartDate = new Date(req.session.lumpSumInstalmentStartDate = parseInt(req.body.lumpSumInstalmentStartDateYear) + '-' + parseInt(req.body.lumpSumInstalmentStartDateMonth) + '-' + parseInt(req.body.lumpSumInstalmentStartDateDay));

    } else if (sReserveTerms === "Instalments only") {

      sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyAmount = req.session.instalmentOnlyAmount = req.body.instalmentOnlyAmount;
      sInstalmentOnlyMade = req.session.instalmentOnlyMade = req.body.instalmentOnlyMade;
      sInstalmentOnlyStartDateDay = req.session.instalmentOnlyStartDateDay = parseInt(req.body.instalmentOnlyStartDateDay);
      sInstalmentOnlyStartDateMonth = req.session.instalmentOnlyStartDateMonth = parseInt(req.body.instalmentOnlyStartDateMonth);
      sInstalmentOnlyStartDateYear = req.session.instalmentOnlyStartDateYear = parseInt(req.body.instalmentOnlyStartDateYear);
      sInstalmentOnlyStartDate = new Date(req.session.instalmentOnlyStartDate = parseInt(req.body.instalmentOnlyStartDateYear) + '-' + parseInt(req.body.instalmentOnlyStartDateMonth) + '-' + parseInt(req.body.instalmentOnlyStartDateDay));

    }

    res.redirect('/legal-adviser/check-your-decisions/' + req.params.id);

});


router.route('/legal-adviser/check-your-decisions/:id')
  .get(function(req, res, next) {

    entry = dataEngine.getSearchEntry(req.params.id);
    sMakeDecision = req.session.makeDecision;

    // prevent access unless a decision has been made
    if (sMakeDecision === undefined) {

      res.redirect('/legal-adviser/case-details/' + req.params.id);

    } else {

      res.render('legal-adviser/check-your-decisions', {
        baseurl: baseurl,
        apptitle: apptitle,
        ispublic: false,
        doctitle: 'Check your decisions',
        pagetitle: 'Check your decisions',
        section: 'home',
        section_name: 'Home',
        search: entry,
        breadcrumb: true,
        sNationalInsuranceNumber: sNationalInsuranceNumber,
        sMakeDecision: sMakeDecision,
        sMakeDecisionProvedSJP: sMakeDecisionProvedSJP,
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
        sEmployerAddress3: sEmployerAddress3,
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

        sCourtLocation: sCourtLocation,
        sCourtRoom: sCourtRoom,
        sReasonForReferring: sReasonForReferring,

        sDateOfHearingDay: sDateOfHearingDay,
        sDateOfHearingMonth: sDateOfHearingMonth,
        sDateOfHearingYear: sDateOfHearingYear,
        sDateOfHearing: sDateOfHearing,

        sStartTimeOfHearingHour: sStartTimeOfHearingHour,
        sStartTimeOfHearingMinute: sStartTimeOfHearingMinute,

        sTypeOfDischarge: sTypeOfDischarge,
        sCompensation: sCompensation,
        sDurationAmount: sDurationAmount,
        sDurationTimeSpan: sDurationTimeSpan,
        sTotalToPay: sTotalToPay,

        sCaseManagementHearing: sCaseManagementHearing,
        sEquivocalPlea: sEquivocalPlea,

        sBack: sBack
      });

    }

  }).post(function(req, res, next) {
    res.redirect('/legal-adviser/confirmation/' + req.params.id);
});


router.route('/legal-adviser/confirmation/:id/')
  .get(function(req, res, next) {

    req.session.destroy();

    entry = dataEngine.getSearchEntry(req.params.id);

    url = "case-details";
    id  = Number(req.params.id) + 1;

    if (id > 10) {
      id  = null;
      url = "session-complete";
    }

    res.render('legal-adviser/confirmation', {
      id: id,
      url: url,
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Decision submitted',
      pagetitle: 'Decision submitted',
      search: entry,
      breadcrumb: false
    });

});


router.route('/legal-adviser/session-complete/')
  .get(function(req, res, next) {
    res.render('legal-adviser/session-complete', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Session complete',
      pagetitle: 'Session complete',
      breadcrumb: false
  });
});


router.route('/legal-adviser/no-cases-to-review/')
  .get(function(req, res, next) {
    res.render('legal-adviser/no-cases-to-review', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'No cases to review',
      pagetitle: 'No cases to review',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
});


router.route('/legal-adviser/personal-details/:id/')
  .get(function(req, res, next) {
    entry = dataEngine.getSearchEntry(req.params.id);
    res.render('legal-adviser/personal-details', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Personal details',
      pagetitle: 'Personal details',
      section: 'home',
      section_name: 'Home',
      //section2: 'case-details/' + req.params.id,
      //section2_name: 'Case details',
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
      sTown: sTown,
      sPostcode: sPostcode,
      sActiveTab: sActiveTab
    });
  }).post(function(req, res, next) {
      sTitle = req.session.title = req.body.title;
      sFirstname = req.session.firstname = req.body.firstname;
      sLastname = req.session.lastname = req.body.lastname;
      sDob = req.session.dob = req.body.dobYear + '-' + zeroFill(req.body.dobMonth) + '-' + zeroFill(req.body.dobDay);
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
    ispublic: false,
    doctitle: 'Page not found',
    pagetitle: 'Page not found',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true,
    sBack: sBack
  });
});


module.exports = router
