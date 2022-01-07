var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'飄雪的藍夜星空兩戴式流蘇耳環',
            imgUrl:"photo2/飄雪的藍夜星空兩戴式流蘇耳環.jpg",
            price:'490',
            count:'2'
          },
          {
            id:'2',
            itemName:'金色系浪漫星球兩戴式流蘇耳環',
            imgUrl:"photo2/金色系浪漫星球兩戴式流蘇耳環.jpg",
            price:'490',
            count:'3'
          },
          {
            id:'3',
            itemName:'圓缺月牙白水晶垂墜耳環',
            imgUrl:"photo2/圓缺月牙白水晶垂墜耳環.jpg",
            price:'490',
            count:'1'
          },
          {
            id:'4',
            itemName:'嬉皮流星流蘇白星光款垂墜耳環',
            imgUrl:"photo2/嬉皮流星流蘇白星光款垂墜耳環.jpg",
            price:'490',
            count:'1'
          },
          {
            id:'5',
            itemName:'嬉皮流星彩色光芒棉紗線流蘇耳環',
            imgUrl:"photo2/嬉皮流星彩色光芒棉紗線流蘇耳環.jpg",
            price:'490',
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})
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