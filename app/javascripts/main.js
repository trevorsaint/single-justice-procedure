// text shorten
$.fn.shorten = function(settings) {

  var config = {
    showChars: 150,
    ellipsesText: "&hellip;",
    moreText: "More",
    lessText: "Less"
  };

  if (settings) {
    $.extend(config, settings);
  }

  $(document).off("click", ".js-text-link-more");

  $(document).on({
    click: function() {

      var $this = $(this);

      if ($this.hasClass("js-text-link-less")) {

        $this.removeClass("js-text-link-less");
        $this.html(config.moreText);

      } else {

        $this.addClass("js-text-link-less");
        $this.html(config.lessText);

      }

      $this.parent().prev().toggle();
      $this.prev().toggleClass("visually-hidden");
      return false;
    }
  }, ".js-text-link-more");

  return this.each(function() {

    var $this = $(this);

    if ($this.hasClass("js-text-shortened")) return;

    $this.addClass("js-text-shortened");

    var content = $this.html();

    if (content.length > config.showChars) {
      var c = content.substr(0, config.showChars);
      var h = content.substr(config.showChars, content.length - config.showChars);
      var html = c + '<span class="js-text-ellipses" aria-hidden="true">' + config.ellipsesText + ' </span><span class="js-text-content"><span>' + h + '</span> <a href="#" class="js-text-link-more" aria-hidden="true">' + config.moreText + '</a></span>';
      $this.html(html);
      $(".js-text-content span").addClass("visually-hidden");
    }

  });

};


// change fine
$.fn.changeFine = function() {

  var $fineLevel = 1000.00;

  this.each(function() {

    $(this).on("change", function() {

      var $fineValue = $(this).val();
      var $fineNote = $("#" + $(this).attr("id") + "-check");

      if (parseFloat($fineValue) > parseFloat($fineLevel)) {
        $fineNote.removeClass("js-hidden").attr("role", "alert");
      } else {
        $fineNote.addClass("js-hidden").removeAttr("role", "alert");
      }

    });

  });

};


// change compensation
$.fn.changeCompensation = function() {

  this.each(function() {

    $(this).on("change", function() {

      var $compensationValue = $(this).val();
      var $compensationReason = $("#" + $(this).attr("id") + "-reason");
      var $compensationFirst = $(this).parent().next().find(".block-label").first();

      if ($compensationValue === "0" || $compensationValue === "") {
        $compensationReason.removeClass("js-hidden").attr("aria-hidden", false);
        $compensationFirst.focus();
      } else {
        $compensationReason.addClass("js-hidden").attr("aria-hidden", true);
      }

    });

  });

};


// collection order
function collectionOrder() {

  "use strict";

  var $input = $('input[name="collectionOrderConfirmed"]');
  var $answer = $('input[name="collectionOrderAnswer"]');
  var $panel = $input.parent().next(".panel");

  $($input).on("change", function() {

    if ($input.prop("checked") === false) {
      $panel.removeClass("js-hidden").attr("aria-hidden", false);
    } else {
      $answer.prop("checked", false).parent().removeClass("selected"); // reset answer radio group
      $panel.addClass("js-hidden").attr("aria-hidden", true);
    }

  });


  $($answer).on("change", function() {

    var $answerValue = $(this).val();

    if ($answerValue === "No") {
      $answer.prop("checked", false).parent().removeClass("selected"); // reset answer radio group
      $input.prop("checked", true).parent().addClass("selected");
      $panel.addClass("js-hidden").attr("aria-hidden", true);
    } else {
      $input.prop("checked", false);
    }

  });

}


// change costs
function changeCosts() {

  "use strict";

  var $input = $('#cost');
  var $reason = $("#costs-reason");
  var $reasonInput = $("#reason-for-no-costs");

  $reason.attr("aria-hidden", true); // add aria attributes init

  // on change
  $($input).on('change', function() {

    var $inputValue = $input.val();

    if ($inputValue === "" || $inputValue === "0") {
      $reason.removeClass("js-hidden").attr("aria-hidden", false);
      $reasonInput.attr("tabindex", "0").focus();
    } else {
      $reason.addClass("js-hidden").attr("aria-hidden", true);
      $reasonInput.attr("tabindex", "-1").blur();
    }

  });

}


// change surcharge
function changeSurcharge() {

  "use strict";

  var $input = $('#surcharge');
  var $reason = $("#surcharge-reason");
  var $reasonInput = $("#reason-for-reducing-surcharge");
  var $initialValue;

  $initialValue = $input.val(); // get initial value
  $reason.attr("aria-hidden", true); // add aria attributes init

  // on change
  $($input).on('change', function() {

    var $inputValue = $input.val();

    if (parseFloat($inputValue) < parseFloat($initialValue) || $inputValue === "") {
      $reason.removeClass("js-hidden").attr("aria-hidden", false);
      $reasonInput.attr("tabindex", "0").focus();
    } else {
      $reason.addClass("js-hidden").attr("aria-hidden", true);
      $reasonInput.attr("tabindex", "-1").blur();
    }

  });

}


// tabs
if ($(".tabs").length > 0) {

  $(".tabs").each(function() {

    var $container = $(this);

    // the setup
    $container.find('.tabs-header > ul').attr('role', 'tablist');
    $container.find('.tabs-header > ul li').attr('role', 'presentation');

    $container.find('[role="tablist"] a').attr({
      'role': 'tab',
      'tabindex': '-1'
    });

    // make each aria-controls correspond id of targeted section (re href)
    $container.find('[role="tablist"] a').each(function() {

      $(this).attr(
        'aria-controls', $(this).attr('href').substring(1)
      );

    });

    // make first tab selected by default and allow it focus
    $container.find('[role="tablist"] li:first-child a').attr({
      'aria-selected': true,
      'tabindex': 0
    });

    // make each section focusable and give it the tabpanel role
    $container.find('section').attr({
      'role': 'tabpanel'
    });


    // make first child of each panel focusable programmatically
    $container.find('section > *:first-child').attr({
      'tabindex': 0
    });

    // make all but the first section hidden (ARIA state and display CSS)
    $container.find('[role="tabpanel"]:not(:first-of-type)').attr({
      'aria-hidden': true
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
          'tabindex': -1,
          'aria-selected': null
        });

        $target.attr({
          'tabindex': 0,
          'aria-selected': true
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
        'tabindex': -1,
        'aria-selected': null
      });

      // replace above on clicked tab
      $(this).attr({
        'aria-selected': true,
        'tabindex': 0
      });

      // hide panels
      $container.find('[role="tabpanel"]').attr('aria-hidden', true);

      // show corresponding panel
      $('#' + $(this).attr('href').substring(1)).attr('aria-hidden', null);

    });

    // open if is-active class
    $container.find('[role="presentation"].is-active [role="tab"]').trigger('click');

  });


}


// filters
if ($('.filters').length > 0) {

  $('.filters').each(function() {

    var $container = $(this);

    // click handler
    $container.find('.filters-link').on('click', function() {

      //var $button = $(this);
      var $dataToSort = $(this).attr('data-sort');

      // reset
      $container.find('.filters-content').attr('aria-hidden', null).removeClass('js-hidden');

      // filter results
      //if ($button.attr('data-sort') != 'all') {
      $container.find('.filters-content').not('.filters-content[data-filter="' + $dataToSort + '"]').attr('aria-hidden', true).addClass('js-hidden');
      //}

      // add and remove attributes
      $(this).siblings().attr('aria-pressed', false).removeClass('is-selected');
      $(this).attr('aria-pressed', true).addClass('is-selected').focus();


    });

    // keydown handler
    $container.find('.filters-link').on('keydown', function(e) {

      // define current, previous and next (possible) tabs
      var $newButton;
      var $prevButton = $(this).prev();
      var $nextButton = $(this).next();
      //var $dataToSort = $(this).attr('data-sort');

      // find the direction (prev or next)
      switch (e.keyCode) {
        case 37:
          $newButton = $prevButton;
          break;
        case 39:
          $newButton = $nextButton;
          break;
        default:
          $newButton = false;
          break;
      }

      if ($newButton.length) {
        $newButton.focus();
      }

    });

  });

}


// other documents
function otherDocuments() {

  "use strict";

  $("#other-documents").on("change", function() {

    var file = $(this);
    var filename = $(this).val();
    var panel = $(this).attr('aria-controls');

    if (filename) {

      file.attr('aria-expanded', true);
      $('#' + panel).attr('aria-hidden', false).removeClass('js-hidden');

    }

  });

}


// print
$("[data-action='print']").on("click", function() {
  window.print();
});


// Focus on form field (Hash)
$(window).load(function() {

  var input = location.hash;
  var label = $(input).closest('.form-group');

  $('html, body').animate({
    scrollTop: parseInt(label.offset().top)
  }, 400, function() {
    $(input).focus();
  });

});


// make decision
function makeDecision() {

  if ($('#form-make-decision').length > 0) {

    // variables
    var form = $('#form-make-decision');
    var button = form.find('.button');
    var checkbox = form.find('input:checkbox[name=makeDecisionConfirm]');

    // check state on load
    (function() {

      if (checkbox.prop('checked')) {
        button.removeAttr('disabled').removeAttr('aria-disabled');
      } else {
        button.attr('disabled', 'disabled').attr('aria-disabled', true);
      }

    })();

    // check state on change
    checkbox.change(function() {

      if (checkbox.prop('checked')) {
        button.removeAttr('disabled').removeAttr('aria-disabled');
      } else {
        button.attr('disabled', 'disabled').attr('aria-disabled', true);
      }

    });

  }

}


// document ready
(function($) {

  otherDocuments();

  changeCosts();
  changeSurcharge();
  collectionOrder();
  makeDecision();

  $("#fine-a, #fine-b, #fine-c").changeFine();
  $("#compensation-a, #compensation-b, #compensation-c").changeCompensation();

  $(".js-text").shorten();

})(jQuery);
