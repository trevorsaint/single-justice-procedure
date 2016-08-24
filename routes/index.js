module.exports = {


bind: function(app) {
  
    
    // Locals
    app.locals = {
      apptitle: 'Transport for London',
      baseurl: '/'
    }
  
  
    // Datastore
    var dataEngine = require('../models/data');
    
    
    // Routing
    app.all('/', function (req, res) {
      
      data = {
        doctitle: 'Sign in',
        pagetitle: 'Sign in',
        isSignedIn: true
      }
      
      res.render('index', data);
      
    });
    
    
    app.all('/case-tasks', function (req, res) {
      
      data = {
        doctitle: 'Case tasks',
        pagetitle: 'Case tasks'
      }
      
      res.render('case-tasks', data);
      
    });
    
    
    app.all('/send-data-files', function (req, res) {
      
      var doctitle = 'Send data files to court';
      var pagetitle = 'Send data files to court';
      
      var send            = req.body.send;
      var select_header   = req.body.select_header;
      var select_offences = req.body.select_offences;
      var send_to_court   = req.body.send_to_court;
      var error           = false;
      
      if (send) {
        
        if (!select_header || !select_offences) {
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
        select_header: select_header,
        select_offences: select_offences,
        error: error
      });
      
    });
    
    
    app.all('/send-other-documents', function (req, res) {
      
      data = {
        doctitle: 'Send documents to court',
        pagetitle: 'Send documents to court',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks'
      }
      
      res.render('send-other-documents', data);
      
    });
    
    
    app.all('/check-uploads', function (req, res) {
      res.render('check-uploads', {
        doctitle: 'Check uploads',
        pagetitle: 'Check uploads',
        breadcrumb: true,
        section: 'case-tasks',
        section_name: 'Case tasks',
        searches:dataEngine.getSearchEntries()
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
    
    
    app.all('/documents-confirmation', function (req, res) {
      res.render('documents-confirmation');
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
    

  }


};