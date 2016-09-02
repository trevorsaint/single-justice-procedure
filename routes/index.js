module.exports = {

bind: function(app) {

    // locals
    app.locals = {
      apptitle: 'Criminal Justice Service',
      baseurl: '/'
    }

    // datastore
    var dataEngine = require('../models/data');

    // routing
    app.all('/', function (req, res) {
      data = {
        doctitle: 'Sign in',
        pagetitle: 'Sign in',
        isSignedIn: true
      }
      res.render('index', data);
    });

    // case tasks
    app.all('/case-tasks', function (req, res) {
      data = {
        doctitle: 'Case tasks',
        pagetitle: 'Case tasks',
        section: 'case-tasks',
        section_name: 'Case tasks',
      }
      res.render('case-tasks', data);
    });

    // errors for demo
    app.all('/errors', function (req, res) {
      res.render('errors/errors', {
        doctitle: 'Errors',
        pagetitle: 'Errors',
        section: 'case-tasks',
        section_name: 'Case tasks',
        breadcrumb: true
      });
    });

    // data file errors
    app.all('/errors/data-files/you-need-to-upload-a-file', function (req, res) {
      res.render('errors/data-files/you-need-to-upload-a-file',  {
        doctitle: 'Send data files to court',
        pagetitle: 'Send data files to court',
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'errors',
        section2_name: 'Errors',
        breadcrumb: true
      });
    });
    app.all('/errors/data-files/wrong-file-type', function (req, res) {
      res.render('errors/data-files/wrong-file-type',  {
        doctitle: 'Send data files to court',
        pagetitle: 'Send data files to court',
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'errors',
        section2_name: 'Errors',
        breadcrumb: true
      });
    });
    app.all('/errors/data-files/file-names-not-a-matching-pair', function (req, res) {
      res.render('errors/data-files/file-names-not-a-matching-pair',  {
        doctitle: 'Send data files to court',
        pagetitle: 'Send data files to court',
        section: 'errors',
        section_name: 'Errors',
        breadcrumb: true
      });
    });
    app.all('/errors/data-files/technical-problems', function (req, res) {
      res.render('errors/data-files/technical-problems',  {
        doctitle: 'Send data files to court',
        pagetitle: 'Send data files to court',
        section: 'errors',
        section_name: 'Errors',
        breadcrumb: true
      });
    });
    // document errors
    app.all('/errors/documents/you-need-to-upload-a-file', function (req, res) {
      res.render('errors/documents/you-need-to-upload-a-file',  {
        doctitle: 'Send documents to court',
        pagetitle: 'Send documents to court',
        section: 'errors',
        section_name: 'Errors',
        breadcrumb: true
      });
    });
    app.all('/errors/documents/wrong-file-type', function (req, res) {
      res.render('errors/documents/wrong-file-type',  {
        doctitle: 'Send documents to court',
        pagetitle: 'Send documents to court',
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'errors',
        section2_name: 'Errors',
        breadcrumb: true
      });
    });
    app.all('/errors/documents/wrong-file-extension', function (req, res) {
      res.render('errors/documents/wrong-file-extension',  {
        doctitle: 'Send documents to court',
        pagetitle: 'Send documents to court',
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'errors',
        section2_name: 'Errors',
        breadcrumb: true
      });
    });
    app.all('/errors/documents/technical-problems', function (req, res) {
      res.render('errors/documents/technical-problems',  {
        doctitle: 'Send documents to court',
        pagetitle: 'Send documents to court',
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'errors',
        section2_name: 'Errors',
        breadcrumb: true
      });
    });

    // send data files
    app.all('/send-data-files', function (req, res) {

      var doctitle = 'Send data files to court';
      var pagetitle = 'Send data files to court';

      var send         = req.body.send;
      var header       = req.body.header;
      var offences     = req.body.offences;
      var sendtocourt  = req.body.sendtocourt;
      var error        = false;

      if (send) {

        if (!header || !offences) {
          error = true;
        } else {
          error = false;
        }

      }

      res.render('send-data-files',  {
        doctitle: 'Send data files to court',
        pagetitle: 'Send data files to court',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        send: send,
        header: header,
        offences: offences,
        error: error
      });

    });

    app.all('/send-other-documents', function (req, res) {

      var doctitle = 'Send documents to court';
      var pagetitle = 'Send documents to court';

      var send         = req.body.send;
      var documents    = req.body.documents;
      var sendtocourt  = req.body.sendtocourt;
      var error        = false;

      if (send) {

        if (!documents) {
          error = true;
        } else {
          error = false;
        }

      }

      res.render('send-other-documents', {
        doctitle: 'Send documents to court',
        pagetitle: 'Send documents to court',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        send: send,
        documents: documents,
        error: error
      });

    });


    // Document uploads and reporting

    app.all('/check-document-uploads', function (req, res) {
      res.render('check-uploads/document/uploads', {
        doctitle: 'Check document uploads',
        pagetitle: 'Check document uploads',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        searches:dataEngine.getSearchEntries()
      });
    });
    app.all('/check-document-uploads/report/success/:id', function (req, res) {
      var entry = dataEngine.getSearchEntry(req.params.id);
      res.render('check-uploads/document/report/success', {
        doctitle: 'View upload report',
        pagetitle: 'View upload report',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'check-document-uploads',
        section2_name: 'Check document uploads',
        search:entry
      });
    });
    app.all('/check-document-uploads/report/errors/:id', function (req, res) {
      var entry = dataEngine.getSearchEntry(req.params.id);
      res.render('check-uploads/document/report/errors', {
        doctitle: 'View upload report',
        pagetitle: 'View upload report',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'check-document-uploads',
        section2_name: 'Check document uploads',
        search:entry
      });
    });

    // CSV uploads and reporting

    app.all('/check-csv-uploads', function (req, res) {
      res.render('check-uploads/csv/uploads', {
        doctitle: 'Check CSV uploads',
        pagetitle: 'Check CSV uploads',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        searches:dataEngine.getSearchEntries()
      });
    });
    app.all('/check-csv-uploads/report/success/:id', function (req, res) {
      var entry = dataEngine.getSearchEntry(req.params.id);
      res.render('check-uploads/csv/report/success', {
        doctitle: 'View upload report',
        pagetitle: 'View upload report',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'check-csv-uploads',
        section2_name: 'Check CSV uploads',
        search:entry
      });
    });
    app.all('/check-csv-uploads/report/errors/:id', function (req, res) {
      var entry = dataEngine.getSearchEntry(req.params.id);
      res.render('check-uploads/csv/report/errors', {
        doctitle: 'View upload report',
        pagetitle: 'View upload report',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'check-csv-uploads',
        section2_name: 'Check CSV uploads',
        search:entry
      });
    });

    app.all('/view-upload-report-success/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('view-upload-report-success', {
        doctitle: 'View upload report',
        pagetitle: 'View upload report',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'check-uploads',
        section2_name: 'Check uploads',
        search:entry
      });
    });

    app.all('/view-upload-report-errors/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('view-upload-report-errors', {
        doctitle: 'View upload report',
        pagetitle: 'View upload report',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'check-uploads',
        section2_name: 'Check uploads',
        search:entry
      });
    });


    app.all('/export-case-results-by-date', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('export-case-results-by-date', {
        doctitle: 'Export case results by date',
        pagetitle: 'Export case results by date',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        searches:dataEngine.getSearchEntries()
      });

    });

    app.all('/search-for-a-case', function (req, res) {

      res.render('search-for-a-case', {
        doctitle: 'Search for a case',
        pagetitle: 'Search for a case',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        searches:dataEngine.getSearchEntries()
      });

    });

    app.all('/case-details-cancel-withdraw/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('case-details-cancel-withdraw', {
        doctitle: 'Search for a case',
        pagetitle: 'Case details',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'search-for-a-case',
        section2_name: 'Search for a case',
        search:entry
      });

    });

    app.all('/case-details/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('case-details', {
        doctitle: 'Search for a case',
        pagetitle: 'Case details',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'search-for-a-case',
        section2_name: 'Search for a case',
        search:entry
      });

    });

    app.all('/withdraw-all-offences/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('withdraw-all-offences', {
        doctitle: 'Withdraw all offences',
        pagetitle: 'Withdraw all offences',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        search:entry
      });

    });

    app.all('/withdraw-offence/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('withdraw-offence', {
        doctitle: 'Withdraw offence',
        pagetitle: 'Withdraw offence',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        search:entry
      });

    });

    app.all('/cancel-request-to-withdraw-offence/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('cancel-request-to-withdraw-offence', {
        search:entry
      });

    });

    app.all('/withdraw-offence-confirmation/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('withdraw-offence-confirmation', {
        doctitle: 'Withdraw offence confirmation',
        pagetitle: 'Withdraw offence confirmation',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        search:entry
      });

    });

    app.all('/cases-missing-sjp-notices', function (req, res) {
      res.render('cases-missing-sjp-notices', {
        doctitle: 'Send missing SJP notices to court',
        pagetitle: 'Send missing SJP notices to court',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        searches:dataEngine.getSearchEntries()
      });
    });

    app.all('/data-files-confirmation', function (req, res) {

      res.render('data-files-confirmation', {
        doctitle: 'Confirmation',
        pagetitle: 'Confirmation',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'send-data-files',
        section2_name: 'Send data files to court'
      });

    });

    app.all('/documents-confirmation', function (req, res) {

      res.render('documents-confirmation', {
        doctitle: 'Confirmation',
        pagetitle: 'Confirmation',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'send-other-documents',
        section2_name: 'Send documents to court'
      });

    });

    app.all('/cancel-withdrawal-offence-confirmation/:id', function (req, res) {

      var entry = dataEngine.getSearchEntry(req.params.id);

      res.render('cancel-withdrawal-offence-confirmation', {
        doctitle: 'Cancel offence withdrawal',
        pagetitle: 'Cancel offence withdrawal',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        section2: 'case-details/' + req.params.id,
        section2_name: 'Case details',
        search:entry
      });

    });

    app.all('/experiments', function (req, res) {

      res.render('experiments', {
        doctitle: 'Experiments playground',
        pagetitle: 'Experiments playground',
        section: 'case-tasks',
        section_name: 'Case tasks',
        breadcrumb: true
      });

    });


  }


};
