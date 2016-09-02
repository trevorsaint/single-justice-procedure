
function fileUpload() {

  'strict'

  if ($('.form-control-file').length > 0) {

    // form file controls
    $('.form-control-file').each(function(index) {

      var $this   = $(this);
      var $label  = $(this).next();

      // add html for panel
      $('<div class="panel panel-border-narrow js-hidden">' +
          '<p class="font-xsmall">' +
            '<span class="bold-xsmall">File selected</span><br>' +
            '<span class="text-secondary filename"></span><br>' +
            '<a class="remove" href="#">Remove</a>' +
          '</p>' +
        '</div>').insertAfter($label);

      var $parent = $this.closest('.form-group');
      var $panel  = $parent.find ('.panel');
      var $file   = $parent.find('.filename');
      var $remove = $parent.find('.remove');


      // add file
      $this.on('change', function(e) {

        var fileVal = $this.val();

        if (fileVal != '') {
          $panel.removeClass('js-hidden');
          $file.text(fileVal);
        }

      });

      // remove file
      $remove.on('click', function(e) {

        e.preventDefault();

        $this.val('');
        $file.text('');
        $panel.addClass('js-hidden');

      });

    });

  }

}


function fileUploadFocus() {

  'strict'

  $('.form-control-file').on('focus', function() {
    $(this).addClass('focused');
  }).on('blur', function() {
    $(this).removeClass('focused');
  })

}


// document ready
(function() {
  fileUpload();
  fileUploadFocus();
})(jQuery);
