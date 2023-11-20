$(document).ready(function () {
  $('.showcase__items').slick({
    dots: true,
    adaptiveHeight: true,
  })

  $('.projects__items').slick({
    dots: true,
    adaptiveHeight: true,
  })

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    })
  }
  let options = { threshold: [0.5] }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.element-animation')
  for (let elm of elements) {
    observer.observe(elm)
  }

  $(function () {
    $('#phone').mask('+7(999)999-99-99')
  })

  $(".header__nav li").find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      500
    );

    return false;
  });

  $(".work__items").find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      500
    );

    return false;
  });

  /*      const length = document.getElementById('path6').getTotalLength();
  console.log(length);
  document.getElementById('length').innerHTML = length;   */
})
