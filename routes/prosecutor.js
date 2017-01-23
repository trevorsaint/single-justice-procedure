var express = require('express');
var router = express.Router();

// datastore
var dataEngine = require('../models/data-prosecutor');

// baseurl and apptitle
var baseurl  = '/prosecutor/';
var apptitle = 'Single Justice Procedure';

// routes
router.route('/prosecutor')
  .get(function(req, res) {
    res.render('prosecutor/index', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      issigned: false,
      doctitle: 'Sign in',
      pagetitle: 'Sign in',
      breadcrumb: false
    });
  })
  .post(function(req, res) {
    res.redirect('/prosecutor/home');
  });

router.all('/prosecutor/home', function(req, res) {
  res.render('prosecutor/home', {
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
});

router.all('/prosecutor/search-for-a-case', function(req, res) {
  res.render('prosecutor/search-for-a-case', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Search for a case',
    pagetitle: 'Search for a case',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});

router.all('/prosecutor/case-details/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/case-details', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Case details',
    pagetitle: 'Case details',
    section: 'home',
    section_name: 'Home',
    //section2: 'search-for-a-case',
    //section2_name: 'Search for a case',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/send-data-files', function(req, res) {

  var doctitle  = 'Upload CSVs';
  var pagetitle = 'Upload CSVs';

  var send = req.body.send;
  var header = req.body.header;
  var offences = req.body.offences;
  var sendtocourt = req.body.sendtocourt;
  var error = false;

  if (send) {
    if (!header || !offences) {
      error = true;
    } else {
      error = false;
    }
  }

  res.render('prosecutor/send-data-files', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Upload CSVs',
    pagetitle: 'Upload CSVs',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true,
    send: send,
    header: header,
    offences: offences,
    error: error
  });
});

router.all('/prosecutor/data-files-confirmation', function(req, res) {
  res.render('prosecutor/data-files-confirmation', {
    baseurl: baseurl,
    apptitle: 'Confirmation',
    ispublic: false,
    doctitle: 'Confirmation',
    pagetitle: 'Confirmation',
    section: 'home',
    section_name: 'Home',
    //section2: 'send-data-files',
    //section2_name: 'Send data files to court',
    breadcrumb: true
  });
});

router.route('/prosecutor/send-other-documents')

  .get(function(req, res, next) {
    res.render('prosecutor/send-other-documents', {
      baseurl: baseurl,
      apptitle: apptitle,
      ispublic: false,
      doctitle: 'Upload SJP notices and other documents',
      pagetitle: 'Upload SJP notices and other documents',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  }).post(function(req, res, next) {

    // validate
    req.checkBody(
      'documents', 'Select file'
    ).notEmpty();

    // check the validation object for errors
    var errors = req.validationErrors();
    if (errors) {
      res.render('prosecutor/send-other-documents', {
        baseurl: baseurl,
        apptitle: apptitle,
        ispublic: false,
        doctitle: 'Upload SJP notices and other documents',
        pagetitle: 'Upload SJP notices and other documents',
        section: 'home',
        section_name: 'Home',
        breadcrumb: true,
        errors: errors
      });
      return;
    } else {
      res.redirect('/prosecutor/documents-confirmation');
    }

  });

router.all('/prosecutor/check-document-uploads', function(req, res) {
  res.render('prosecutor/check-uploads/document/uploads', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Check document uploads',
    pagetitle: 'Check document uploads',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});

router.all('/prosecutor/check-document-uploads/report/success/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/document/report/success', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    //section2: 'check-document-uploads',
    //section2_name: 'Check document uploads',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/check-document-uploads/report/errors/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/document/report/errors', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    //section2: 'check-document-uploads',
    //section2_name: 'Check document uploads',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/check-csv-uploads', function(req, res) {
  res.render('prosecutor/check-uploads/csv/uploads', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Check CSV uploads',
    pagetitle: 'Check CSV uploads',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});

router.all('/prosecutor/check-csv-uploads/report/success/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/csv/report/success', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    //section2: 'check-csv-uploads',
    //section2_name: 'Check CSV uploads',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/check-csv-uploads/report/errors/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/csv/report/errors', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    //section2: 'check-csv-uploads',
    //section2_name: 'Check CSV uploads',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/export-case-results-by-date', function(req, res) {
  res.render('prosecutor/export-case-results-by-date', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Export case results by date',
    pagetitle: 'Export case results by date',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
});

router.all('/prosecutor/cases-missing-sjp-notices', function(req, res) {
  res.render('prosecutor/cases-missing-sjp-notices', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Send missing SJP notices to court',
    pagetitle: 'Send missing SJP notices to court',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});

router.all('/prosecutor/withdraw-an-offence', function(req, res) {
  res.render('prosecutor/withdraw-an-offence', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Withdraw an offence',
    pagetitle: 'Withdraw an offence',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});

router.all('/prosecutor/withdraw-offence/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/withdraw-offence', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Withdraw offence',
    pagetitle: 'Withdraw offence',
    section: 'home',
    section_name: 'Home',
    //section2: 'case-details/' + req.params.id,
    //section2_name: 'Case details',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/withdraw-offence-confirmation/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/withdraw-offence-confirmation', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Withdraw offence confirmation',
    pagetitle: 'Withdraw offence confirmation',
    section: 'home',
    section_name: 'Home',
    //section2: 'case-details/' + req.params.id,
    //section2_name: 'Case details',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/documents-confirmation', function(req, res) {
  res.render('prosecutor/documents-confirmation', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Confirmation',
    pagetitle: 'Confirmation',
    section: 'home',
    section_name: 'Home',
    //section2: 'send-other-documents',
    //section2_name: 'Send documents to court',
    breadcrumb: true
  });
});

router.all('/prosecutor/case-details-cancel-withdraw/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/case-details-cancel-withdraw', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Cancel withdrawal',
    pagetitle: 'Cancel withdrawal',
    section: 'home',
    section_name: 'Home',
    //section2: 'search-for-a-case',
    //section2_name: 'Search for a case',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/withdraw-all-offences/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/withdraw-all-offences', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Withdraw all offences',
    pagetitle: 'Withdraw all offences',
    section: 'home',
    section_name: 'Home',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/cancel-withdrawal-offence-confirmation/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/cancel-withdrawal-offence-confirmation', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Cancel offence withdrawal',
    pagetitle: 'Cancel offence withdrawal',
    section: 'home',
    section_name: 'Home',
    //section2: 'case-details/' + req.params.id,
    //section2_name: 'Case details',
    search: entry,
    breadcrumb: true
  });
});

router.all('/prosecutor/cancel-request-to-withdraw-offence/:id', function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/cancel-request-to-withdraw-offence', {
    baseurl: baseurl,
    apptitle: apptitle,
    ispublic: false,
    doctitle: 'Cancel withdrawal of offence',
    pagetitle: 'Cancel withdrawal of offence',
    section: 'home',
    section_name: 'Home',
    //section2: 'case-details/' + req.params.id,
    //section2_name: 'Case details',
    search: entry,
    breadcrumb: true
  });
});

router.get('/prosecutor/*', function(req, res, next) {
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
