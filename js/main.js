let header = $('.header');
let item = $('.menu-item');
let text = $('.menu-item-text');
let sub = $('.sub-menu');

item.attr('tabindex', '0');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

header.on('mouseout focusout', function(){
  item.removeClass('menu-act')
});