  $(document).ready(function () {

      var num = 0;
      var result;

      function fun() {
          setInterval(function () {
              result = num * -300; //1200
              num++;
              console.log(result);
              if (num == 3) {
                  num = 0;
              }
              $(".slider").stop().animate({
                  top: result + 'px'    //left
              });
          }, 3000);
      }
      fun();
  });
