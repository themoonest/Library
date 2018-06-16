jQuery(function($){
  
    /*top btn*/
  $(window).on('scroll',function(){
    $(this).scrollTop()>66? $('.top_btn').fadeIn() : $('.top_btn').fadeOut();
  }); 
  $('.top_btn').on('click',function(){
    $('html, body').animate({scrollTop : 0}, 400);
    document.getElementById('logo_focus').focus();
  });
  
    /*메인페이지 skip navigation*/
  for(i=1; i<=$('.skip').length; i++){
    $('.skip_'+i).on({
      focus:function(){
        $(this).addClass('fc');
      },
      blur:function(){
        $(this).removeClass('fc');
      }
    });
  }
  
    /*메인페이지 notice banner*/
  $('.fl_notice .cls_btn').on({
    click:function(){
      $(this).parent().slideUp();
    },
    blur:function(){
      $(this).parent().slideUp();
    }
  });
  
    /*메인페이지 main navigator*/
  $('.gnb .list').on({
    mouseenter:function(){
      $('.fl_gnb').addClass('on');
      $('.gnb').addClass('on');
      $(this).addClass('hv');
    },
    mouseleave:function(){
      $('.fl_gnb').removeClass('on');
      $('.gnb').removeClass('on');
      $(this).removeClass('hv');
    }
  });
  $('.gnb>li>a').on('focus',function(){
    $(this).parent().trigger('mouseenter');
  });
  $('.gnb>li>ul>.last>a').on('blur',function(){
    $(this).parents('.list ul').trigger('mouseleave');
  })
  $('.gnb>li>ul>.nav_last>a').on('blur',function(){
    $(this).parent().trigger('mouseleave');
  })

    /* 메인페이지 소장자료*/
  $('html').on('click',function(e) { 
    if(!$(e.target).hasClass('srch_ck')){
      $('.book_srch').css({
        'filter':'progid:DXImageTransform.Microsoft.gradient(startColorStr=#809ba641,endColorStr=#809ba641)',
        backgroundColor: 'rgba(155, 166, 65, 0.6)'
      });
      $('#srch').attr({
        placeholder:'찾고 싶은 책을 입력해 주세요'
      });
    } else {
      $('.book_srch').css({
        'filter':'progid:DXImageTransform.Microsoft.gradient(startColorStr=#cc9ba641,endColorStr=#cc9ba641)',
        backgroundColor: 'rgba(155, 166, 65, 0.8)'
      });
      $('#srch').attr({
        placeholder:''
      });
    }
  }); 
    /* 메인페이지 tab */
  /* board tab */
  $('.board_tab_wrap .tab_nav h3').on('click',function(){
    n=$('.board_tab_wrap .tab_nav h3').index($(this));
    $(this).addClass('on').siblings().removeClass('on');
    $('.board_tab_wrap .tab_cnt').eq(n).addClass('on').siblings().removeClass('on');
  });
  $('.board_tab_wrap .tab_nav li a').on('focus',function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
  });
  $('.board_tab_wrap .tab_nav li.last a').on('blur',function(){
    $(this).parent().removeClass('on');
  });
  /* map tab */
  $('.map_tab_wrap .tab_nav .main_tit').on('click',function(){
    n=$('.map_tab_wrap .tab_nav .main_tit').index($(this));
    $(this).addClass('on').siblings().removeClass('on');
    $('.map_tab_wrap .tab_cnt').eq(n).addClass('on').siblings().removeClass('on');
  });
  $('.map_tab_wrap .tab_nav li a').on('focus',function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
  });
  $('.map_tab_wrap .tab_nav li.last a').on('blur',function(){
    $(this).parent().removeClass('on');
  });
    /* 메인페이지 map api */
  function mapInit(){
    var myMap=new naver.maps.Map(document.getElementById('myMap'),{
      center: new naver.maps.LatLng(37.430279,127.140096),
      zoom:12
    });
    new naver.maps.Marker({
      position:new naver.maps.LatLng(37.430279,127.140096),
      map:myMap,
      icon:{
        url:'http://themoonest.com/library/imgs/api_marker.png'
      }
    });
  }
  $(window).on('load',function(){
    mapInit();
  });
    /* 메인페이지 bxslider*/
  /*new book*/
  $('.new').bxSlider({
    mode:'fade'
  });
  $new_n =$('.new_book .bx-controls-direction .bx-prev');
  $new_p =$('.new_book .bx-controls-direction .bx-next');
  $('a.new_prev_btn').on('click',function(){
    $new_n.trigger('click');
  });    
  $('a.new_next_btn').on('click',function(){
    $new_p.trigger('click');
  });
  /*holiday*/
  $('.holiday_date').bxSlider({
    mode:'vertical',
    auto:true,
    pause:3000,
//    autoHover:true,
    autoControls:true,
    autoControlsCombine:true
  });
  $holiday_n =$('.holiday .bx-controls-direction .bx-prev');
  $holiday_p =$('.holiday .bx-controls-direction .bx-next');
  $('a.holiday_prev_btn').on('click',function(){
    $holiday_n.trigger('click');
  });    
  $('a.holiday_next_btn').on('click',function(){
    $holiday_p.trigger('click');
  });
  /*sitebanner*/
  $('.site_banner_wrap').bxSlider({
    mode:'fade'
  });  
  $site_n =$('.in_site .bx-controls-direction .bx-prev');
  $site_p =$('.in_site .bx-controls-direction .bx-next');
  $('a.site_prev_btn').on('click',function(){
    $site_n.trigger('click');
  });    
  $('a.site_next_btn').on('click',function(){
    $site_p.trigger('click');
  });
});






















