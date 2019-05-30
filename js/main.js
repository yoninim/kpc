let header = $('.header');
let item = $('.menu-item');
let text = $('.menu-item-text');
let sub = $('.sub-menu');
let tab = $('.tab');
let panel = $('.notice , .pds');

item.attr('tabindex', '0');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

header.on('mouseout focusout', function(){
  item.removeClass('menu-act')
});

tab.on('click keyup', function(e){
  if(e.type === 'click' || keycode === 13){
    panel.removeClass('board-act');
    $(this).parent().addClass('board-act');
}
});