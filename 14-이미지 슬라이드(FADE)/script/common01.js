  $(document).ready(function () {

      var num = 0;
//      var result;
      
      function func(){
          setInterval(function(){
              if(num == 3){
                  num=0;
              }
              $('.slider p').hide();
              $('.slider p').eq(-num).stop().fadeOut();
              $('.slider p').eq(num).stop().fadeIn();
              console.log(num);
              num++;
          },3000)
      }
      func();
  });
