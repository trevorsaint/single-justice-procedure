// dependencies
const express = require('express');
const router = express.Router();


// datastore
const dataEngine = require('../models/data-prosecutor');


// baseurl and apptitle
const baseurl  = 'prosecutor';
const apptitle = 'Criminal Justice Services online';


// routes
router.use(function(req, res, next) {

  sWithdrawOffence = req.session.withdrawOffence;
  sCancelWithdrawOffence = req.session.cancelWithdrawOffence;

  next();

});


router.route('/' + baseurl + '/home')
  .get(function(req, res, next) {
    res.render(baseurl + '/home', {
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
  })
  .post(function(req, res, next) {
    res.redirect('/' + baseurl + '/search-for-a-case');
  });


router.route('/' + baseurl + '/search-for-a-case')
  .get(function(req, res, next) {
    res.render(baseurl + '/search-for-a-case', {
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


router.route('/' + baseurl + '/case-details/:id?')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/case-details', {
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


router.route('/' + baseurl + '/send-data-files')
  .get(function(req, res, next) {

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

    res.render(baseurl + '/send-data-files', {
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
  })
  .post(function(req, res, next) {
    res.redirect('/' + baseurl + '/data-files-confirmation')
  })


router.route('/' + baseurl + '/data-files-confirmation')
  .get(function(req, res, next) {
    res.render(baseurl + '/data-files-confirmation', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Confirmation',
      pagetitle: 'Confirmation',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  });


router.route('/' + baseurl + '/send-other-documents')
  .get(function(req, res, next) {
    res.render(baseurl + '/send-other-documents', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Upload SJP notices and other documents',
      pagetitle: 'Upload SJP notices and other documents',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/' + baseurl + '/documents-confirmation');
  });


router.route('/' + baseurl + '/check-document-uploads')
  .get(function(req, res, next) {
    res.render(baseurl + '/check-uploads/document/uploads', {
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


router.route('/' + baseurl + '/check-document-uploads/report/success/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/check-uploads/document/report/success', {
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


router.route('/' + baseurl + '/check-document-uploads/report/errors/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/check-uploads/document/report/errors', {
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


router.route('/' + baseurl + '/check-csv-uploads')
  .get(function(req, res, next) {
    res.render(baseurl + '/check-uploads/csv/uploads', {
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


router.route('/' + baseurl + '/check-csv-uploads/report/success/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/check-uploads/csv/report/success', {
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


router.route('/' + baseurl + '/check-csv-uploads/report/errors/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/check-uploads/csv/report/errors', {
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


router.route('/' + baseurl + '/export-case-results-by-date')
  .get(function(req, res, next) {
    res.render(baseurl + '/export-case-results-by-date', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Export case results by date',
      pagetitle: 'Export case results by date',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/' + baseurl + '/export-case-results-by-date');
  });


router.route('/' + baseurl + '/cases-missing-sjp-notices')
  .get(function(req, res, next) {
    res.render(baseurl + '/cases-missing-sjp-notices', {
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


router.route('/' + baseurl + '/withdraw-an-offence')
  .get(function(req, res, next) {
    res.render(baseurl + '/withdraw-an-offence', {
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


router.route('/' + baseurl + '/withdraw-offence/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/withdraw-offence', {
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
  })
  .post(function(req, res, next) {
    sWithdrawOffence = req.session.withdrawOffence = true;
    sCancelWithdrawOffence = req.session.cancelWithdrawOffence = null;
    res.redirect('/' + baseurl + '/case-details/' + req.params.id + '?q=withdraw');
  });


router.route('/' + baseurl + '/cancel-withdrawal-request/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/cancel-withdrawal-request', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Cancel withdrawal request',
      pagetitle: 'Cancel withdrawal request',
      section: 'home',
      section_name: 'Home',
      search: entry,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    sWithdrawOffence = req.session.withdrawOffence = null;
    sCancelWithdrawOffence = req.session.cancelWithdrawOffence = true;
    res.redirect('/' + baseurl + '/case-details/' + req.params.id + '?q=cancel');
  });


router.route('/' + baseurl + '/you-cant-cancel-this-request/:id')
  .get(function(req, res, next) {
    var entry = dataEngine.getSearchEntry(req.params.id);
    res.render(baseurl + '/you-cant-cancel-this-request', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'You can’t cancel this withdrawal request',
      pagetitle: 'You can’t cancel this withdrawal request',
      section: 'home',
      section_name: 'Home',
      section2: 'case-details/' + req.params.id,
      section2_name: 'Case details',
      search: entry,
      breadcrumb: true
    });
  })
  .post(function(req, res, next) {
    res.redirect('/' + baseurl + '/case-details/' + req.params.id);
  });


router.route('/' + baseurl + '/documents-confirmation')
  .get(function(req, res, next) {
    res.render(baseurl + '/documents-confirmation', {
      baseurl: baseurl,
      apptitle: apptitle,
      doctitle: 'Confirmation',
      pagetitle: 'Confirmation',
      section: 'home',
      section_name: 'Home',
      breadcrumb: true
    });
  });


router.route('/' + baseurl + '/*')
  .get(function(req, res, next) {
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
