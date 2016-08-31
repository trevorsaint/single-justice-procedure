// header file upload
function headerFileUpload() {

 'strict'

 if ($('#header').length > 0) {

   var header         = $('#header');
   var headerRemove   = $('#header-remove');
   var headerFilename = $('#header-filename');
   var headerParent   = header.parent().closest('.form-group');
   var headerPanel    = header.parent().next('.panel');

   // on change
   $(header).change(function(e) {

     var headerValue = $(this).val();

     // add file name
     if(headerValue != '')  {
       headerPanel.removeClass('js-hidden');
       headerFilename.text(headerValue);
     }

   });

   // on click
   $(headerRemove).on('click', function(e) {

     e.preventDefault();

     header.val(''); // reset file control
     headerFilename.text(''); // remove text
     headerPanel.addClass('js-hidden'); // hide panel

   });

 }

}


// offences file upload
function offencesFileUpload() {

 'strict'

 if ($('#offences').length > 0) {

   var offences         = $('#offences');
   var offencesRemove   = $('#offences-remove');
   var offencesFilename = $('#offences-filename');
   var offencesParent   = offences.parent().closest('.form-group');
   var offencesPanel    = offences.parent().next('.panel');

   // on change
   $(offences).change(function(e) {

     var offencesValue = $(this).val();

     // add file name
     if(offencesValue != '')  {
       offencesPanel.removeClass('js-hidden');
       offencesFilename.text(offencesValue);
     }

   });

   // on click
   $(offencesRemove).on('click', function(e) {

     e.preventDefault();

     offences.val(''); // reset file control
     offencesFilename.text(''); // remove text
     offencesPanel.addClass('js-hidden'); // hide panel

   });

 }

}


// documents file upload
function documentsFileUpload() {

 'strict'

 if ($('#documents').length > 0) {

   var documents         = $('#documents');
   var documentsRemove   = $('#documents-remove');
   var documentsFilename = $('#documents-filename');
   var documentsParent   = documents.parent().closest('.form-group');
   var documentsPanel    = documents.parent().next('.panel');

   // on change
   $(documents).change(function(e) {

     var documentsValue = $(this).val();

     // add file name
     if(documentsValue != '')  {
       documentsPanel.removeClass('js-hidden');
       documentsFilename.text(documentsValue);
     }

   });

   // on click
   $(documentsRemove).on('click', function(e) {

     e.preventDefault();

     documents.val(''); // reset file control
     documentsFilename.text(''); // remove text
     documentsPanel.addClass('js-hidden'); // hide panel

   });

 }

}


// document ready
(function() {
  headerFileUpload();
  offencesFileUpload();
  documentsFileUpload();
})(jQuery);
