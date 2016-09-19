
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

  // tabs
  if ($('.tabs').length > 0) {

    $('.tabs').each(function() {

      var $container = $(this);

      // the setup
      $container.find('.tabs-header > ul').attr('role', 'tablist');
      $container.find('.tabs-header > ul li').attr('role', 'presentation');

      $container.find('[role="tablist"] a').attr({
        'role' : 'tab',
        'tabindex' : '-1'
      });

      // make each aria-controls correspond id of targeted section (re href)
      $container.find('[role="tablist"] a').each(function() {

        $(this).attr(
          'aria-controls', $(this).attr('href').substring(1)
        );

      });

      // make first tab selected by default and allow it focus
      $container.find('[role="tablist"] li:first-child a').attr({
        'aria-selected' : true,
        'tabindex' : 0
      });

      // make each section focusable and give it the tabpanel role
      $container.find('section').attr({
        'role' : 'tabpanel'
      });


      // make first child of each panel focusable programmatically
      $container.find('section > *:first-child').attr({
        'tabindex' : 0
      });

      // make all but the first section hidden (ARIA state and display CSS)
      $container.find('[role="tabpanel"]:not(:first-of-type)').attr({
        'aria-hidden' : true
      });

      // change focus between tabs with arrow keys
      $container.find('[role="tab"]').on('keydown', function(e) {

        // define current, previous and next (possible) tabs
        var $original = $(this);
        var $prev = $(this).parents('li').prev().children('[role="tab"]');
        var $next = $(this).parents('li').next().children('[role="tab"]');
        var $target;

        // find the direction (prev or next)
        switch (e.keyCode) {
          case 37:
            $target = $prev;
            break;
          case 39:
            $target = $next;
            break;
          default:
            $target = false;
            break;
        }

        if ($target.length) {

          $original.attr({
            'tabindex' : -1,
            'aria-selected' : null
          });

          $target.attr({
            'tabindex' : 0,
            'aria-selected' : true
          }).focus();

        }

        // hide panels
        $container.find('[role="tabpanel"]').attr('aria-hidden', true);

        // show panel which corresponds to target
        $('#' + $(document.activeElement).attr('href').substring(1)).attr('aria-hidden', null);

      });

      $container.find('[role="tab"]').on('click', function(e) {

        e.preventDefault();

        // remove focusability and aria-selected
        $container.find('[role="tab"]').attr({
          'tabindex' : -1,
          'aria-selected' : null
        });

        // replace above on clicked tab
        $(this).attr({
          'aria-selected' : true,
          'tabindex' : 0
        });

        // hide panels
        $container.find('[role="tabpanel"]').attr('aria-hidden', true);

        // show corresponding panel
        $('#' + $(this).attr('href').substring(1)).attr('aria-hidden', null);

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
