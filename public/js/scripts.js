(function($) {
  'use strict';
  var mobileDevice = false;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('mobile');
    mobileDevice = true;
  } else {
    $('html').addClass('no-mobile');
    mobileDevice = false;
  }
  var navbar = $('.js-navbar:not(.navbar-fixed)');
  $( document ).ready(function() {
    $('#pagepiling').pagepiling({
       menu: '#menu',
       anchors: ['banner', 'facilities', 'faq', 'contact'],
       navigation: {
          'position': 'right',
          'tooltips': ['Apply', 'Facilities', 'FAQ', 'Contact']
       },
    });
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1000,
      outDuration: 700,
      loading: true,
      loadingParentElement: 'body',
      loadingClass: 'spinner',
      loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>',
      timeout: true,
      timeoutCountdown: 2500,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'body',
      transition: function(url) {
        window.location.href = url;
      }
    });
    navbar.affix({
      offset: {
        top: 50
      }
    });
    navbar.on('affix.bs.affix', function() {
      if (!navbar.hasClass('affix')) {
        navbar.addClass('animated slideInDown');
      }
    });
    navbar.on('affixed-top.bs.affix', function() {
      navbar.removeClass('animated slideInDown');
    });
    $('.nav-mobile-list li a[href="#"]').on('click', function() {
      $(this).closest('li').toggleClass('current');
      $(this).closest('li').children('ul').slideToggle(200);
      return false;
    });
    $('.navbar-toggle').on('click', function() {
      $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
      $('.close-menu, .click-capture').on('click', function() {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
      });
    });
    if ($('.pagepiling').length > 0) {
      $('.pagepiling').pagepiling({
        scrollingSpeed: 280,
        loopBottom: true,
        afterLoad: function(anchorLink, index) {
          if (!(index % 5)) {
            document.getElementById('toolbar').style.display = 'block';
            document.getElementById('menu-icon').style.color = 'black';
          }
          else if (!(index % 2)) {
            $('.navbar').removeClass('navbar-white');
            $('#pp-nav').removeClass('white');
            document.getElementById('toolbar').style.display = 'none';
            document.getElementById('menu-icon').style.color = 'black';
          } else {
            $('.navbar').addClass('navbar-white');
            $('#pp-nav').addClass('white');
            document.getElementById('toolbar').style.display = 'block';
            document.getElementById('menu-icon').style.color = 'white';
          }
        }
      });
      $('.pp-scrollable').on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $('.navbar-2').removeClass('navbar-white');
        } else {
          $('.navbar-2').addClass('navbar-white');
        }
      });
      $('#pp-nav').remove().appendTo('.animsition').prepend('<div class="pp-nav-up icon-chevron-up"></div>').append('<div class="pp-nav-down icon-chevron-down"></div>').addClass('white right-boxed hidden-xs');
      $('.pp-nav-up').on('click', function() {
        $.fn.pagepiling.moveSectionUp();
      });
      $('.pp-nav-down').on('click', function() {
        $.fn.pagepiling.moveSectionDown();
      });
    }
    /*
      This is a supposed to disable the mouse wheel scrolling, but for some
      reason, it fixes the scroll sensivity speed or something like that...
      fuck js :)
    */
    $.fn.pagepiling.setMouseWheelScrolling(false);
    $('.js-target-scroll').on('click', function() {
      var target = $(this.hash);
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - navbar.outerHeight())
        }, 1000);
        return false;
      }
    });
    $('.project-box').on('mouseover', function() {
      var index = $('.project-box').index(this);
      $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
      return (alert('Konami code!'));
    });
  });
  // DropdownItem
  $('.faq li .question').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
  });
  // Lazyload
  $('.lazyload').lazyloadanything({
    'onLoad': function(e, LLobj) {
        var $img = LLobj.$element;
        var src = $img.attr('data-src');
        $img.css('background-image', 'url("' + src + '")');
    }
  });
  function columnGrid() {
    $('.js-grid-items').each(function() {
      var colWrap = $(this).width();
      var colItem = Math.floor(colWrap / 390);
      var colFixedItem = Math.floor(colWrap / colItem);
      $(this).find('.js-grid-item').css({
        'width': colWrap
      });
      $(this).find('.js-grid-item').css({
        'width': colFixedItem
      });
    });
  }
  columnGrid();
  $(window).resize(function() {
    columnGrid();
  });
})(jQuery);
