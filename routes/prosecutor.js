const express = require('express');
const router = express.Router();


// datastore
const dataEngine = require('../models/data-prosecutor');


// baseurl and apptitle
const baseurl  = '/prosecutor/';
const apptitle = 'Criminal Justice Services online';


// use
router.use(function(req, res, next) {

  sWithdrawOffence       = req.session.withdrawOffence;
  sCancelWithdrawOffence = req.session.cancelWithdrawOffence;

  next();

});


// routes
router.route('/prosecutor/home')
.get(function(req, res) {
  res.render('prosecutor/home', {
    baseurl: baseurl,
    apptitle: apptitle,
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
}).post(function(req, res) {
  res.redirect('/prosecutor/search-for-a-case');
});


router.route('/prosecutor/search-for-a-case')
.get(function(req, res) {
  res.render('prosecutor/search-for-a-case', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Search for a case',
    pagetitle: 'Search for a case',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});


router.route('/prosecutor/case-details/:id?')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/case-details', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Case details',
    pagetitle: 'Case details',
    section: 'home',
    section_name: 'Home',
    section2: 'search-for-a-case',
    section2_name: 'Search for a case',
    search: entry,
    sWithdrawOffence: sWithdrawOffence,
    sCancelWithdrawOffence: sCancelWithdrawOffence,
    breadcrumb: true,
    query: req.query.q
  });
});


router.route('/prosecutor/send-data-files')
.get(function(req, res) {

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
}).post(function(req, res) {
  res.redirect('/prosecutor/data-files-confirmation')
})


router.route('/prosecutor/data-files-confirmation')
.get(function(req, res) {
  res.render('prosecutor/data-files-confirmation', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Confirmation',
    pagetitle: 'Confirmation',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
});


router.route('/prosecutor/send-other-documents')
.get(function(req, res) {
  res.render('prosecutor/send-other-documents', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Upload SJP notices and other documents',
    pagetitle: 'Upload SJP notices and other documents',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
}).post(function(req, res) {
  res.redirect('/prosecutor/documents-confirmation');
});


router.route('/prosecutor/check-document-uploads')
.get(function(req, res) {
  res.render('prosecutor/check-uploads/document/uploads', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Check document uploads',
    pagetitle: 'Check document uploads',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});


router.route('/prosecutor/check-document-uploads/report/success/:id')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/document/report/success', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    search: entry,
    breadcrumb: true
  });
});


router.route('/prosecutor/check-document-uploads/report/errors/:id')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/document/report/errors', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    search: entry,
    breadcrumb: true
  });
});


router.route('/prosecutor/check-csv-uploads')
.get(function(req, res) {
  res.render('prosecutor/check-uploads/csv/uploads', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Check CSV uploads',
    pagetitle: 'Check CSV uploads',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});


router.route('/prosecutor/check-csv-uploads/report/success/:id')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/csv/report/success', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    search: entry,
    breadcrumb: true
  });
});


router.route('/prosecutor/check-csv-uploads/report/errors/:id')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/check-uploads/csv/report/errors', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'View upload report',
    pagetitle: 'View upload report',
    section: 'home',
    section_name: 'Home',
    search: entry,
    breadcrumb: true
  });
});


router.route('/prosecutor/export-case-results-by-date')
.get(function(req, res) {
  res.render('prosecutor/export-case-results-by-date', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Export case results by date',
    pagetitle: 'Export case results by date',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
}).post(function(req, res) {
  res.redirect('/prosecutor/export-case-results-by-date');
});


router.route('/prosecutor/cases-missing-sjp-notices')
.get(function(req, res) {
  res.render('prosecutor/cases-missing-sjp-notices', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Send missing SJP notices to court',
    pagetitle: 'Send missing SJP notices to court',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});


router.route('/prosecutor/withdraw-an-offence')
.get(function(req, res) {
  res.render('prosecutor/withdraw-an-offence', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Withdraw an offence',
    pagetitle: 'Withdraw an offence',
    section: 'home',
    section_name: 'Home',
    searches: dataEngine.getSearchEntries(),
    breadcrumb: true
  });
});


router.route('/prosecutor/withdraw-offence/:id')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/withdraw-offence', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Withdraw offence',
    pagetitle: 'Withdraw offence',
    section: 'home',
    section_name: 'Home',
    section2: 'case-details/' + req.params.id,
    section2_name: 'Case details',
    search: entry,
    breadcrumb: true
  });
}).post(function(req, res) {
  sWithdrawOffence = req.session.withdrawOffence = true;
  sCancelWithdrawOffence = req.session.cancelWithdrawOffence = null;
  res.redirect('/prosecutor/case-details/' + req.params.id + '?q=withdraw');
});


router.route('/prosecutor/cancel-withdrawal-request/:id')
.get(function(req, res) {
  var entry = dataEngine.getSearchEntry(req.params.id);
  res.render('prosecutor/cancel-withdrawal-request', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Cancel withdrawal request',
    pagetitle: 'Cancel withdrawal request',
    section: 'home',
    section_name: 'Home',
    search: entry,
    breadcrumb: true
  });
}).post(function(req, res) {
  sWithdrawOffence = req.session.withdrawOffence = null;
  sCancelWithdrawOffence = req.session.cancelWithdrawOffence = true;
  res.redirect('/prosecutor/case-details/' + req.params.id + '?q=cancel');
});


router.route('/prosecutor/documents-confirmation')
.get(function(req, res) {
  res.render('prosecutor/documents-confirmation', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Confirmation',
    pagetitle: 'Confirmation',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
});


router.route('/prosecutor/*')
.get(function(req, res) {
  res.render('404', {
    baseurl: baseurl,
    apptitle: apptitle,
    doctitle: 'Page not found',
    pagetitle: 'Page not found',
    section: 'home',
    section_name: 'Home',
    breadcrumb: true
  });
});


module.exports = router
