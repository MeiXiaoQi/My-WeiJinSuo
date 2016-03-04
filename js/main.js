/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   David
 * @Last Modified time: 2015-12-13 15:19:27
 */

'use strict';

$(function() {
    //当文档加载完成才会执行
    function resize() {
        //获取屏幕的宽度
        var windowWidth = $(window).width();
        //判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        console.log(111);
        //根据大小为界面上的每一张轮播图设置背景
        // $('#main_ad>.carousel-inner>.item')
        $('#main_ad>.carousel-inner>.item').each(function(i, item) {
            console.log(111);
            var $itme = $(item);
            // $element.data('xxx')这是jQuery里的方式
            // 是一个函数专门去元素上的自定义属性(data-xxx)
            // 函数的参数是我们要取的属性的名称
            // element.dataset['xxx']这是原生js的方法
            // $element.attr('data-xxx')用attr可以取
            // element.setAttribute('data-xxx')获取值
            // element.getAttribute('data-xxx','')设置值
            $itme.css('backgroundImage', 'url("' + $itme.data(isSmallScreen ? 'image-xs' : 'image-lg') + '")');
            //因为我们需要小图的时候尺寸等比例变化所以用图片显示,
            if (isSmallScreen) {
                $itme.html('<img src="' + $itme.data('image-xs') + '" alt="" />')
            } else {
                $itme.empty();
            }
        });
    }
    $(window).on('resize', resize).trigger('resize');
})
