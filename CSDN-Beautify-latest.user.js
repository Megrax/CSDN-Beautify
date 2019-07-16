// ==UserScript==
// @name                CSDN优雅美化脚本-免登陆+旧版两栏+屏宽自动适配+自动展开+去广告
// @name:zh-CN          CSDN优雅美化脚本-免登陆+旧版两栏+屏宽自动适配+自动展开+去广告
// @description         还你一个经典版的CSDN：作者信息和顶部导航栏保留，去掉右边评论区；内容自动展开；去广告；屏宽自动适配；净化剪贴板。
// @description:zh-TW   還你一個經典版的CSDN：作者信息和頂部導航欄保留，去掉右側評論區；內容自動展開；去廣告；屏寬自動適配；淨化剪貼板。
// @description:zh-HK   還你一個經典版的CSDN：作者信息和頂部導航欄保留，去掉右側評論區；內容自動展開；去廣告；屏寬自動適配；淨化剪貼板。
// @description:zh-CN   还你一个经典版的CSDN：作者信息和顶部导航栏保留，去掉右边评论区；内容自动展开；去广告；屏宽自动适配；净化剪贴板。

// @namespace    https://github.com/z1064244797/CSDN-Beautify
// @version      2.7.2
// @author       Nyaasu
// @match        *://blog.csdn.net/*/article/details/*
// @run-at       document-end
// @grant        none
// @license      CC-BY-NC-3.0
// @supportURL   https://github.com/z1064244797/CSDN-Beautify/issues
// @date         05/11/2018
// @modified     04/01/2019
// ==/UserScript==

(function () {
    'use strict';
    //阅读全文
    $('.hide-article-box').remove();
    $('#article_content').css({'height':'initial'});
    //vip免广告 按钮
    $('.meau-gotop-box').remove();
    //未登录提示
    $('.unlogin-box').remove();
    //去除剪切板劫持
    csdn.copyright.init("", "", "");
    //移除左侧最新评论
    $('#asideNewComments').remove();
    //移除左侧CSDN联系方式
    $('.persion_article').remove();
    //移除右侧工具栏
    $('.tool-box').remove()
    //下部推荐
    $('.recommend-box').remove();
    //取消注册登录弹出
    $('#passportbox').remove();
    $('.login-mark').remove();
    //两栏处理
    $('.nodata .container').css({'width':'1318px !important'})
    $('.nodata .tool-box .meau-list .btn-like-box p').css({'display': 'block'})
    $('.recommend-right').css({'display':'none'})
    $('.container').css({'width':'1318px'})
    $('.container main').css({'width': '1010px'})
    $('.container main .recommend-box .type_blog .content .desc').css({'width': '81%'})
    $('.container main .recommend-box .type_blog .content .blog_title_box').css({'width': '18%'})
    $("#mainBox > main").css("float","left");  //感谢 ID:potoo 的反馈
    $("aside").css("float","right");
    $('body').css({'min-width':'0'});
    $('.csdn-toolbar').css({'min-width':'0'});
    //去广告
    $('.pulllog-box').remove();
    $('.fourth_column').remove();
    $('.mb8').remove();
    $('newsfeed').remove();
    $('#asideFooter').remove();
    $("li:contains('赚零钱')").remove();
    $('.light-box').remove();
    $("a[data-type='vip']").remove();
    $(".csdn-side-toolbar").remove();
    $(".vip-caise").remove();
    $(".container").remove();

    //屏宽适配
    function resize(){
        var result1 = window.matchMedia('(min-width:1360px)');
        var result2 = window.matchMedia('(min-width:1120px)');
        if (result1.matches) {
            console.log("大屏宽，恢复原样式");
            $("aside").css({'display':'block'});
            $("#mainBox > main").css("width","1010px");
            $('.container').css({'width':'1318px'})
        } else if (result2.matches) {
            console.log("中屏宽，减小mainBox宽度");
            $("aside").css({'display':'block'});
            $('.container').css({'width':'1178px'})
            $("#mainBox > main").css("width","870px");
        } else {
            console.log("小屏宽，隐藏右侧信息栏，mainBox居中");
            $("aside").css({'display':'none'});
            $('.container').css({'width':'910px'});
            $("#mainBox > main").css("width","870px");
            $(".btns").css("float","right");
            $(".csdn-toolbar > div").css("width","870px");
        }
    }
    window.onresize=function() {resize()}
    resize();
    //显示评论区
    $('.comment-list-box').css({'display':'block'});
    $('.comment-list-box').css({'max-height':'870px'});
})();
