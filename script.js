function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return (
    elemBottom >= docViewTop &&
    elemTop <= docViewBottom &&
    elemBottom <= docViewBottom &&
    elemTop >= docViewTop
  );
}

$(window).scroll(function () {
  if (isScrolledIntoView($('#portfolio'))) {
    let content = $('.portfolio-contnet').children();
    if (content != undefined && content.length > 0) {
      for (let index = 0; index < content.length; index++) {
        const element = content[index];
        // let c = content[index].children();
        // c.addClass('New');
        // let child = element.children();
      }
    }
  }
});
