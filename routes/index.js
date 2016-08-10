module.exports = {


bind: function(app) {

    
    var dataEngine = require('../models/data');
    
    
    app.get('/', function (req, res) {
      
      res.render('index', {
        isSignedIn: true
      });
      
    });
    
    
    app.all('/case-tasks', function (req, res) {
      res.render('case-tasks');
    });
    
    
    app.get('/send-data-files', function (req, res) {
      res.render('send-data-files');
    });
    
    
    app.get('/send-other-documents', function (req, res) {
      res.render('send-other-documents');
    });
    
    
    app.get('/check-data-file-uploads', function (req, res) {
      res.render('check-data-file-uploads', {
        searches:dataEngine.getSearchEntries()
      });
    });
    
    
    app.get('/view-court-results', function (req, res) {
      
      var entry = dataEngine.getSearchEntry(req.params.id);
      
      res.render('view-court-results', {
        searches:dataEngine.getSearchEntries()
      });
      
    });
    
    
    app.get('/search-for-a-case', function (req, res) {
      res.render('search-for-a-case', {
        searches:dataEngine.getSearchEntries()
      });
    });
    
    
    app.get('/case-details/:id', function (req, res) {
      
      var entry = dataEngine.getSearchEntry(req.params.id);
      
      res.render('case-details', {
        search:entry
      });
      
    });


    app.get('/withdraw-all-offences/:id', function (req, res) {
      
      var entry = dataEngine.getSearchEntry(req.params.id);
      
      res.render('withdraw-all-offences', {
        search:entry
      });
      
    });
    
    
    app.get('/withdraw-offence/:id', function (req, res) { 
      
      var entry = dataEngine.getSearchEntry(req.params.id);
      
      res.render('withdraw-offence', {
        search:entry
      });
      
    });
    
    
    app.get('/create-new-case', function (req, res) { 
      res.render('create-new-case');
    });
    
    
    app.get('/confirmation/:id', function (req, res) {
      
      var entry = dataEngine.getSearchEntry(req.params.id);
      
      res.render('confirmation', {
        search:entry
      });
      
    });   
    
    
    app.get('/patterns', function (req, res) {
      res.render('patterns');
    });   
    

  }


};