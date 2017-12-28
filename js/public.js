/**
 * Created by Administrator on 2017/2/25.
 */
$(function () {
   var main = {
       init: function () {
           this.tab_images();
           this.ewm();
           this.prolist();
           this.solulist();
           this.sevelist();
           this.ad_right();
           this.ad_left();
           this.page();
           this.gotop();
           this.message();
           this.placeholder();
           this.send();
           this.share();
           this.partner();
           this.preseve();
           this.exchange();
           this.slide();
           this.market();
           this.character();
       },
       tab_images: function () {
          var btns = $('.bg .btn1 li');
          var bg_list = $('.bg .bg_list li');
           var index = 0;
           function core(num){
               btns.eq(num).addClass('active').siblings().removeClass('active');
               bg_list.eq(num).stop().fadeIn().siblings().stop().fadeOut();
           }
           btns.on('click', function () {
               index = $(this).index();
               core(index);
           });
           function play(){
               index++;
               if(index>btns.length){
                   index = 0;
               }
               core(index);
           }
           var set = setInterval(play,1500);
           $('.bg').hover(function () {
               clearInterval(set);
           }, function () {
               set = setInterval(play,1500);
           })
       },

       /*二维码的显示隐藏*/
       ewm: function () {

           $('.reg p a:last').hover(function () {
               $('.ewm').show();
           }, function () {
               $('.ewm').hide();
           });

           $('.ewm').hover(function () {
               $('.ewm').show();
           },function () {
               $('.ewm').hide();
           })

       },
       /*产品轮播图*/
       prolist: function () {
           var index= 0;
           var prolist = $('.prolist ul');
           function core(index){
               var left = index*-270;
                prolist.stop().animate({'marginLeft':left});
           }

           function play(){
               index++;
               if(index>8){
                   prolist.css('marginLeft',0);
                   index = 1;
               }
               core(index);
           }
           $("#goR1").click(play);
           $("#goL1").click(function () {
               index--;
               if(index<0){
                   prolist.css('marginLeft',-2160);
                   index = 7;
               }
               core(index);
           });
           var set = setInterval(play,1000);
           $(".prolist_bg").hover(function () {
               clearInterval(set);
           }, function () {
               set = setInterval(play,1000);
           })


       },

       /*无点击轮播图*/
       solulist: function () {
           var index= 0;
           var solulist = $('.solulist ul');
           for(var i= 0;i<4;i++){
               var clone = $(".solulist ul li").eq(i).clone();
               solulist.append(clone);
           }

           function core(index){
               var left = index*-240;
               solulist.stop().animate({'marginLeft':left});
           }

           function play(){
               index++;

               if(index>6){
                   solulist.css('marginLeft',0);
                   index = 1;
               }
               core(index);
           }

           var set = setInterval(play,1000);
           $(".solulist_bg").hover(function () {
               clearInterval(set);
           }, function () {
               set = setInterval(play,1000);
           })


       },
       /*星联服务*/
       sevelist: function () {
            var lilist =  $('.sevelist_bg li');
           lilist.hover(function () {
               $(this).children('div').stop().show();
           }, function () {
               $(this).children('div').stop().hide();
           })

       },
       /*对联广告右*/
       ad_right: function () {
            $(".bai_close").toggle(function (){
                $('.online').hide();
                $(this).toggleClass('bai_close advice');
            },function (){

                $(this).toggleClass('bai_close advice');
                $('.online').show();
            })

       },

       /*对联广告右*/
       ad_left: function () {
           $(window).scroll(function () {
               var top = $(window).scrollTop();
               $('.ad_left').stop().animate({'marginTop':top});
           });

       },

       /*点击翻页*/
       page: function () {
           var pagebtn = $('.btn');
           pagebtn.click(function () {
               var curtop = $(this).offset().top;
               $('body,html').stop().animate({scrollTop:curtop+100});

           })
       },
       /*回到顶部*/
       gotop: function () {
           var gotop = $('.gotop');
           $(window).scroll(function () {
               var top = $(window).scrollTop();
               if(top>$(window).height()/2){

                   gotop.show();
               }else{
                   gotop.hide();
               }
           });
           gotop.click(function () {

               $('body,html').stop().animate({scrollTop:0});

           })


       },
       message: function () {
           var advise = $(".online a:last");
           var message = $(".message h3 a");
           var messagebtm = $(".messagebtm");
            advise.click(function () {
                $(".message").stop().show();
            });
           message.click(function () {
               message.parent().parent().stop().hide();
               messagebtm.stop().show();
           });
           messagebtm.click(function () {
               $(this).stop().hide();
               message.parent().parent().stop().show();
           })


       },
       /*input获取光标事件*/
       placeholder: function () {
           /*telsearch事件*/
           var search = $(".tel input");
           search.focus(function () {
               search.next().stop().hide();
           });
           search.blur(function () {
               search.next().stop().show();
           });

       },
       /*message表单事件*/
       send: function () {
           var textarea = $(".text textarea");
           var uname = $(".text input").eq(0);
           var tel = $(".text input").eq(1);

           $(".text .send").click(function () {

               if(textarea.val()==''){
                   textarea.css('border','1px solid red');
                   alert('留言不能为空！！')
               }else{
                   textarea.css('border','1px solid green');
               }
               if(uname.val()==''||uname.val().length>100){
                   uname.css('border','1px solid red');
                   alert('姓名不能为空！！')
               }else{
                   uname.css('border','1px solid green');
               }
               if(!/^(13|14|15|17|18)[0-9]{9}$/.test(tel.val())){
                   tel.css('border','1px solid red');
                   alert('请输入正确的手机号！！')
               }else{
                   tel.css('border','1px solid green');
               }
               if(textarea.css('border')=='1px solid rgb(0, 128, 0)'&&uname .css('border')=='1px solid rgb(0, 128, 0)'&&tel.css('border')=='1px solid rgb(0, 128, 0)'){
                   alert('发送成功！！');
                   $(".message h3 a").parent().parent().stop().hide();
                   $(".messagebtm").stop().show();
               }
               

           });

       },
       /*一键分享*/
       share: function () {
           var mare = $('.add_right a:first');
           var share = $('.address .share');
           mare.hover(function () {
                share.stop().show()
           }, function () {
               share.stop().hide()
           });
           share.hover(function () {
               share.stop().show()
           }, function () {
               share.stop().hide()
           })
       },
       /*合作伙伴*/
       partner: function () {

           var part_img = $(".part_banner>div") ;
           part_img.hover(function () {
               $(this).children('.blue_bg').stop().show();
               $(this).children('a').stop().show();


           }, function () {
               $(this).children('.blue_bg').stop().hide();
               $(this).children('a').stop().hide();


           })


       },
       /*星联服务动画*/
       preseve: function () {

            var pro_banner = $('.pro_banner .three1');
           $(window).scroll(function () {

               var top = $(window).scrollTop();
               if(top>0){
                   $(".seve_banner .seve_topL").css('animation','bounceInRight 1s .2s ease both');
                   $(".seve_banner .seve_topR").css('animation','bounceInRight 1s .2s ease both');
               }
               if(top>$(window).height()/2){
                   $(".seve_banner .seve_bottom").css('animation','bounceInRight 1s .2s ease both');
               }

              /* console.log($('.pro_banner .three1'))*/

               if(pro_banner.length==1){
                   if(top>pro_banner.offset().top/2){

                       $(".pro_banner .three1 div").css('animation','bounceInLeft 1s .2s ease both');
                       $(".pro_banner .four1 div").css('animation','rotateIn 1s .2s ease both');
                   }
               }else{
                   return
               }

           })


       },
       exchange: function () {
           $('.exchange a').click(function () {
               $('.exch').stop().show();
           });
           $('.exch>span').click(function () {
               $('.exch').stop().hide();
           })
       },
       /*//plolist滑动*/
       slide: function () {
           var box = $('.t_4 .box');
           var three_div4 = $('.t_4');
           var left = $('.t_4 .i_left');
           var right = $('.t_4 .i_right');
           var index = 0;
           function core(num){
              box.stop().animate({'marginLeft':-num*348})

           };
           function play(){
               index++;
               if(index>1){
                  index=0;
               }
               core(index)
           }
           left.click(play);
           right.click(play);
           var set = setInterval(play,1500);
           three_div4.hover(function () {
               clearInterval(set);
           }, function () {
               set = setInterval(play,1500);
           })
       },
       /*//market滑动*/
       market: function () {
           var market = $('.market');
           var activity = $('.market .activity');
           var left = $('.market .left');
           var right = $('.market .right');
           var index = 0;
           function core(num){
               activity.stop().animate({'marginLeft':-num*365})

           };
           function play(){
               index++;
               if(index>1){
                   activity.css('marginLeft',0)
                   index=1;
               }
               core(index)
           }
           left.click(function (){
               index--;
               if(index<0){
                   activity.css('marginLeft',-365)
                   index=0;
               }
               core(index)
           });
           right.click(play);
           var set = setInterval(play,1500);
           market.hover(function () {
               clearInterval(set);
           }, function () {
               set = setInterval(play,1500);
           })
       },
       /*character轮播图*/
       character: function () {
           var index= 0;
           var character = $('.character');
           var chara_box = $('.about4');
           var left = $('.about4 .left');
           var right = $('.about4 .right');

           for(var i= 0;i<3;i++){
               var clone = $(".character li").eq(i).clone();
               character.append(clone);
           }

           function core(index){
               var left = index*-290;
               character.stop().animate({'marginLeft':left});
           }

           function play(){
               index++;

               if(index>5){
                   character.css('marginLeft',0);
                   index = 1;
               }
               core(index);
           }
           right.click(play);
           left.click(function () {
               index--;
               if(index<0){
                   character.css('marginLeft',-1450);
                   index = 4;
               }
               core(index);
           });
           var set = setInterval(play,1000);
           chara_box.hover(function () {
               clearInterval(set);
           }, function () {
               set = setInterval(play,1000);
           })


       }







   };

    main.init()

});