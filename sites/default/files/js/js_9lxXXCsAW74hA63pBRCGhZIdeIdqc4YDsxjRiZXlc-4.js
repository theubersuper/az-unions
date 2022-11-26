/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.azBarrioButtonNoConflict = {
    attach: function attach() {
      if ($.fn.button && $.fn.button.noConflict !== undefined) {
        var bootstrapButton = $.fn.button.noConflict();
        $.fn.bootstrapBtn = bootstrapButton;
      }
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, window, document) {
  function calculateScrollbarWidth() {
    document.documentElement.style.setProperty('--scrollbar-width', "".concat(window.innerWidth - document.documentElement.clientWidth, "px"));
  }

  function pushSidebarsDown() {
    var contentRegion = document.querySelector('main.main-content');

    if (contentRegion !== null) {
      var allFullWidthElements = contentRegion.querySelectorAll('.paragraph.full-width-background');

      if (allFullWidthElements.length === 0) {
        return;
      }

      var lastFullWidthElement = allFullWidthElements[allFullWidthElements.length - 1];
      var contentRegionPosition = contentRegion.getBoundingClientRect();
      var style = allFullWidthElements[0].currentStyle || window.getComputedStyle(lastFullWidthElement, '');
      var bottomMargin = parseFloat(style.marginBottom);
      var contentRegionTop = contentRegionPosition.top;
      var lastFullWidthElementPosition = lastFullWidthElement.getBoundingClientRect();
      var lastFullWidthElementBottom = lastFullWidthElementPosition.bottom;
      var sidebarTopMargin = lastFullWidthElementBottom - contentRegionTop + bottomMargin;

      if (sidebarTopMargin) {
        document.documentElement.style.setProperty('--sidebar-top-margin', "".concat(sidebarTopMargin, "px"));
      }
    }
  }

  function calculateFullWidthNegativeMargins() {
    var contentRegion = document.querySelectorAll('.block-system-main-block');

    if (contentRegion !== null) {
      var contentRegionPosition = contentRegion[0].getBoundingClientRect();
      var distanceFromLeft = contentRegionPosition.left;
      var distanceFromRight = contentRegionPosition.right;
      var negativeLeftMargin = 0 - distanceFromLeft;
      var negativeRightMargin = 0 - distanceFromRight;
      document.documentElement.style.setProperty('--full-width-left-distance', "".concat(negativeLeftMargin, "px"));
      document.documentElement.style.setProperty('--full-width-right-distance', "".concat(negativeRightMargin, "px"));
    }
  }

  Drupal.behaviors.azParagraphsFullWidthElements = {
    attach: function attach() {
      calculateScrollbarWidth();
      calculateFullWidthNegativeMargins();
      pushSidebarsDown();
    }
  };
  window.addEventListener('resize', function () {
    calculateScrollbarWidth();
    calculateFullWidthNegativeMargins();
    pushSidebarsDown();
  });
  window.addEventListener('azVideoPlay', function () {
    calculateScrollbarWidth();
    calculateFullWidthNegativeMargins();
    pushSidebarsDown();
  });
})(Drupal, this, this.document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.azBarrioOffCanvasNav = {
    attach: function attach() {
      $('.navbar-offcanvas').on('opened.az.offcanvasmenu', function (e) {
        if ($(e.target.ownerDocument.activeElement).attr('id') === 'jsAzSearch') {
          $('#block-az-barrio-offcanvas-searchform input').trigger('focus');
        }
      });
    }
  };
})(jQuery, Drupal);;