/* eslint-env node, jQuery */
var $ = jQuery.noConflict() // eslint-disable-line

$(document).ready(function () {
  $('#tab-triggers a').click(function (e) {
    e.preventDefault()
  })

  $('#tab-content').bxSlider({
    controls: false,
    pagerCustom: '#tab-triggers',
    mode: 'fade',
    adaptiveHeight: true
  })

  $('#carousel').bxSlider({
    // auto: true,
    nextText: '<i class="far fa-angle-right"></i>',
    prevText: '<i class="far fa-angle-left"></i>'
  })

  $('#accordion a').click(function (e) {
    e.preventDefault()
    if ($(this).next('div').hasClass('open')) {
      $('div.open').slideUp().removeClass('open')
      $(this).removeClass('active')
    } else {
      $('#accordion div.open').slideUp().removeClass('open')
      $('#accordion a.active').removeClass('active')
      $(this).next('div').addClass('open').slideDown()
      $(this).addClass('active')
    }
  })
})
