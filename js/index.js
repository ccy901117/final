// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
 
  $(function () {

    var $win = $(window);

    var $backToTop = $('.js-back-to-top');

    // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕

    $win.scroll(function () {

      if ($win.scrollTop() > 100) {

        $backToTop.show();

      } else {

        $backToTop.hide();

      }

    });

    // 當用戶點擊按鈕時，通過動畫效果返回頭部

    $backToTop.click(function () {

      $('html, body').animate({
        scrollTop: 0
      }, 200);
    });
  });


  