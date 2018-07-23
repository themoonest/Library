jQuery(function($){
var list=$('.list');
var listA=$('.list>a');
var listC=$('.list_cnt');
var listH=[];
for(i=0;i<$(listC).length;i++){
listH[i]=$(listC).eq(i).height();
}
$(listC).height(0);
console.log(listH);
var btnH=$('#btnHamburger');
var bd=$('body');
var wrp=$('.wrap');
var md=$('.modal');
$(btnH).on('click',function(){
if($(bd).hasClass('on')){
$(bd).removeClass('on');
$(list).find(listC).height(0);
$(list).removeClass('on');
}else{
$(bd).addClass('on');
}
});
$(md).on('click',function(){
$(btnH).trigger('click');
});
$(listA).on('click',function(){
if($(this).parent(list).hasClass('on')){
$(list).find(listC).height(0);
$(list).removeClass('on');
}else{
var idx=$(this).parent(list).index();
$(this).parent(list).addClass('on');
$(this).parent(list).find(listC).height(listH[idx]);
$(this).parent(list).siblings(list).removeClass('on');
$(this).parent(list).siblings(list).find(listC).height(0);
}
});
$('html').on('click',function(e) { 
if(!$(e.target).hasClass('srch_ck')){
$('.book_srch').css({
backgroundColor: 'rgba(155, 166, 65, 0.6)'
});
$('#srch').attr({
placeholder:'찾고 싶은 책을 입력해 주세요'
});
} else {
$('.book_srch').css({
backgroundColor: 'rgba(155, 166, 65, 0.8)'
});
$('#srch').attr({
placeholder:''
});
}
}); 
$('.holiday_date').bxSlider({
mode:'vertical',
auto:true,
pause:3000,
controls:false,
pager:false,
touchEnabled:false
});
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
$('.new').bxSlider({
mode:'fade',
pager:false,
touchEnabled:false
});
$new_n =$('.new_book .bx-controls-direction .bx-prev');
$new_p =$('.new_book .bx-controls-direction .bx-next');
$('a.new_prev_btn').on('click',function(){
$new_n.trigger('click');
});    
$('a.new_next_btn').on('click',function(){
$new_p.trigger('click');
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
function mapInit(){
var myMap=new naver.maps.Map(document.getElementById('myMap'),{
center: new naver.maps.LatLng(37.430279,127.140096),
zoom:12
});
new naver.maps.Marker({
position:new naver.maps.LatLng(37.430279,127.140096),
map:myMap,
icon:{
url:'http://themoonest.com/pf/library/imgs/api_marker.png'
}
});
}
$(window).on('load',function(){
mapInit();
});
})