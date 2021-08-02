// menu button start
$('.menu_button').on('click', function(){
  $(this).toggleClass('menu_close');
  $('.menu').toggleClass('open');


  // 背景固定
  if($('div').hasClass('open')){
  $('html').css('overflow','hidden');
  } else {
  $('html').css('overflow','scroll');
  }

});
// menu button end


// button start
$('#mens_socks').on('click', function(){
  $('.button.mens_socks_button').toggleClass('close');
  $('.clicked.mens_clicked').toggleClass('active');
})


$('#ladys_socks').on('click', function(){
  $('.button.ladys_socks_button').toggleClass('close');
  $('.clicked.ladys_clicked').toggleClass('active');
})


$('#stockings').on('click', function(){
  $('.button.stockings_button').toggleClass('close');
  $('.clicked.stockings_clicked').toggleClass('active');
})
// button end
