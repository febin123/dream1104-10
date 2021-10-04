/*start of menubar*/
$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});




/*end of menubar */

/*start of signup*/
var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}
/*end of signup */

/*start of faq */
$(document).ready(function () {
  $(".accordion-title").click(function (e) {
      var accordionitem = $(this).attr("data-tab");
      $("#" + accordionitem)
          .slideToggle()
          .parent()
          .siblings()
          .find(".accordion-content")
          .slideUp();

      $(this).toggleClass("active-title");
      $("#" + accordionitem)
          .parent()
          .siblings()
          .find(".accordion-title")
          .removeClass("active-title");

      $("i.fa-chevron-down", this).toggleClass("chevron-top");
      $("#" + accordionitem)
          .parent()
          .siblings()
          .find(".accordion-title i.fa-chevron-down")
          .removeClass("chevron-top")
  });
});

/*end of faq */