
function fileUpload() {

  'strict'

  if ($('.form-control-file').length > 0) {

    // form file controls
    $('.form-control-file').each(function(index) {

      var $this   = $(this);
      var $parent = $this.closest('.form-group');
      var $panel  = $parent.find ('.panel');
      var $file   = $parent.find('.filename');
      var $remove = $parent.find('.remove');

      // add file
      $this.change(function(e) {

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

// document ready
(function() {
  fileUpload();
})(jQuery);
