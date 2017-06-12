// text shorten
$.fn.shorten = function (settings) {

	var config = {
		showChars:    150,
		ellipsesText: "&hellip;",
		moreText:     "More",
		lessText:     "Less"
	};

	if (settings) {
		$.extend(config, settings);
	}

	$(document).off("click", ".js-text-link-more");

	$(document).on({click: function () {

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

	return this.each(function () {

		var $this = $(this);

		if($this.hasClass("js-text-shortened")) return;

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

    $(this).on("change", function(e) {

      var $fineValue = $(this).val();
      var $fineNote  = $("#" + $(this).attr("id") + "-check");

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

    $(this).on("change", function(e) {

      var $compensationValue  = $(this).val();
      var $compensationReason = $("#" + $(this).attr("id") + "-reason");
      var $compensationFirst  = $(this).parent().next().find(".block-label").first();

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

  var $input  = $('input[name="collectionOrderConfirmed"]');
  var $answer = $('input[name="collectionOrderAnswer"]');
  var $panel  = $input.parent().next(".panel");

  $($input).on("change", function(e) {

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

  var $input       = $('#cost');
  var $reason      = $("#costs-reason");
  var $reasonInput = $("#reason-for-no-costs");

  $reason.attr("aria-hidden", true); // add aria attributes init

  // on change
  $($input).on('change', function(e) {

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

  var $input       = $('#surcharge');
  var $reason      = $("#surcharge-reason");
  var $reasonInput = $("#reason-for-reducing-surcharge");
	var $initialValue;

  $initialValue = $input.val(); // get initial value
  $reason.attr("aria-hidden", true); // add aria attributes init

  // on change
  $($input).on('change', function(e) {

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



// calculate size of file
function formatBytes(bytes, decimals, binaryUnits) {

  "use strict";

  if(bytes === 0) {
      return "0 Bytes";
  }

  var unitMultiple = (binaryUnits) ? 1024 : 1000;
  var unitNames = (unitMultiple === 1024) ? // 1000 bytes in 1 Kilobyte (KB) or 1024 bytes for the binary version (KiB)
      ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]:
      ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  var unitChanges = Math.floor(Math.log(bytes) / Math.log(unitMultiple));

  return parseFloat((bytes / Math.pow(unitMultiple, unitChanges)).toFixed(decimals || 0)) + ' ' + unitNames[unitChanges];

}



// get file extension
function getFileExtension(filename) {

  "use strict";

  var ext = /^.+\.([^.]+)$/.exec(filename);
  return ext === null ? "" : ext[1];

}



// multiple file upload
function file() {

  "use strict";

  var $input     = $("#other-documents"); // file input
  var $label     = $input.next(); // file label
  var $panel     = $input.parent().find(".panel"); // panel

  // on change
  $(document).on("change", $input, function(e) {

    $panel.remove();

    $("<div class=\"panel panel-border-narrow\"></div>").insertAfter($label);

    var $files    = $input.get(0).files;
    var $filesQty = $input.get(0).files.length;

    for (var x = 0; x < $filesQty; x++) {

      $('<p class="font-xsmall" id="file-upload-' + x + '">' +
          '<span class="bold-xsmall">File selected</span><br>' +
          '<span class="text-secondary filename">' + $files[x].name + ' - ' + formatBytes($files[x].size, 0) + ' - ' + getFileExtension($files[x].name).toUpperCase() + '</span><br>' +
          '<a class="remove" href="#">Remove</a>' +
        '</p>').appendTo($input.parent().find('.panel'));

    }

  });

}



// file uplaod
function fileUpload() {


  "use strict";


  if ($(".form-control-file").length > 0) {

    // form file controls
    $(".form-control-file").each(function(index) {

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

      var $parent = $this.closest(".form-group");
      var $panel  = $parent.find (".panel");
      var $file   = $parent.find(".filename");
      var $remove = $parent.find(".remove");


      // add file
      $this.on("change", function(e) {

        var fileVal = $this.val();

        if (fileVal !== "") {
          $panel.removeClass("js-hidden");
          $file.text(fileVal);
        }

      });


      // remove file
      $remove.on("click", function(e) {

        e.preventDefault();

        $this.val("");
        $file.text("");
        $panel.addClass("js-hidden");

      });


    });


   }


 }



 // tabs
 if ($(".tabs").length > 0) {

 	$(".tabs").each(function() {

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

 		// open if is-active class
 		$container.find('[role="presentation"].is-active [role="tab"]').trigger('click');

 	});


 }



// filters
if ($('.filters').length > 0) {

 	$('.filters').each(function() {

 		var $container = $(this);

 		// click handler
 		$container.find('.filters-link').on('click', function(e) {

 			var $button     = $(this);
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
 			var $dataToSort = $(this).attr('data-sort');

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



 // file uplaod focus
 function fileUploadFocus() {

   "use strict";

   $(".form-control-file").on("focus", function() {
     $(this).addClass("focused");
   }).on("blur", function() {
     $(this).removeClass("focused");
   });

 }




 // other documents
 function otherDocuments() {

   "use strict";

   $("#other-documents").on("change", function() {

 		var file     = $(this);
 		var filename = $(this).val();
 		var panel    = $(this).attr('aria-controls');

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



 // document ready
 (function($) {

   //fileUpload();
   //fileUploadFocus();

 	 otherDocuments();

   changeCosts();
   changeSurcharge();
   collectionOrder();

   $("#fine-a, #fine-b, #fine-c").changeFine();
   $("#compensation-a, #compensation-b, #compensation-c").changeCompensation();

   $(".js-text").shorten();

 })(jQuery);
