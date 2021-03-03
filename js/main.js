$(document).ready(function() {
  var bsDefaultsLeft = {
      offset: false,
      overlay: true,
      width: '400px'
    },
    bsDefaultsRight = {
      offset: false,
      overlay: true,
      width: '200px'
    },
    bsMain = $('.bs-offset-main'),
    bsOverlay = $('.bs-canvas-overlay');

  $('[data-toggle="canvas-left"][aria-expanded="false"]').on('click', function() {
    var canvasLeft = $(this).data('target'),
      opts = $.extend({}, bsDefaultsLeft, $(canvasLeft).data()),
      prop = $(canvasLeft).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';

    if (opts.width === '100%')
      opts.offset = false;

    $(canvasLeft).css('width', opts.width);
    if (opts.offset && bsMain.length)
      bsMain.css(prop, opts.width);

    $(canvasLeft + ' .bs-canvas-close').attr('aria-expanded', "true");
    $('[data-toggle="canvas-left"][data-target="' + canvasLeft + '"]').attr('aria-expanded', "true");
    if (opts.overlay && bsOverlay.length)
      bsOverlay.addClass('show');
    return false;
  });

  $('.bs-canvas-close, .bs-canvas-overlay').on('click', function() {
    var canvasLeft, aria;
    if ($(this).hasClass('bs-canvas-close')) {
      canvasLeft = $(this).closest('.bs-canvas');
      aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvasLeft.attr('id') + '"]'));
      if (bsMain.length)
        bsMain.css(($(canvasLeft).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
    } else {
      canvasLeft = $('.bs-canvas');
      aria = $('.bs-canvas-close, [data-toggle="canvas"]');
      if (bsMain.length)
        bsMain.css({
          'margin-left': '',
          'margin-right': ''
        });
    }
    canvasLeft.css('width', '');
    aria.attr('aria-expanded', "false");
    if (bsOverlay.length)
      bsOverlay.removeClass('show');
    return false;
  });

  // RIGHT-OFF-CANVAS =========================================

  $('[data-toggle="canvas-right"][aria-expanded="false"]').on('click', function() {
    var canvasRight = $(this).data('target'),
      opts = $.extend({}, bsDefaultsRight, $(canvasRight).data()),
      prop = $(canvasRight).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';

    if (opts.width === '100%')
      opts.offset = false;

    $(canvasRight).css('width', opts.width);
    if (opts.offset && bsMain.length)
      bsMain.css(prop, opts.width);

    $(canvasRight + ' .bs-canvas-close').attr('aria-expanded', "true");
    $('[data-toggle="canvas-left"][data-target="' + canvasRight + '"]').attr('aria-expanded', "true");
    if (opts.overlay && bsOverlay.length)
      bsOverlay.addClass('show');
    return false;
  });

  $('.bs-canvas-close, .bs-canvas-overlay').on('click', function() {
    var canvasRight, aria;
    if ($(this).hasClass('bs-canvas-close')) {
      canvasRight = $(this).closest('.bs-canvas');
      aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvasLeft.attr('id') + '"]'));
      if (bsMain.length)
        bsMain.css(($(canvasRight).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
    } else {
      canvasRight = $('.bs-canvas');
      aria = $('.bs-canvas-close, [data-toggle="canvas"]');
      if (bsMain.length)
        bsMain.css({
          'margin-left': '',
          'margin-right': ''
        });
    }
    canvasLeft.css('width', '');
    aria.attr('aria-expanded', "false");
    if (bsOverlay.length)
      bsOverlay.removeClass('show');
    return false;
  });


});
