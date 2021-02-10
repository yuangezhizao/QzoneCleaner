// ==UserScript==
// @name         QzoneCleaner
// @namespace    https://github.com/SwetyCore/QzoneCleaner
// @version      0.1
// @description  QQ空间净化
// @author       SwetyCore
// @match        http*://user.qzone.qq.com/*
// @grant        none
// ==/UserScript==
function rmClass(clsName) {
    try {
        document.getElementsByClassName(clsName)[0].style.display = 'none';
    }
    catch (e) {
        console.log(e.name + ':' + e.message)

    }
}
function rmID(idName) {
    try {
        document.getElementById(idName).style.display = 'none';
    }
    catch (e) {
        console.log(e.name + ':' + e.message)

    }
}
function getClass(clsName) {
    return document.getElementsByClassName(clsName)[0];
}
(function () {
    'use strict';

    var style_tag = document.createElement('style');
    var style =".action-bar{display:none!important;}.top-fix-bar .top-nav .nav-list-inner a:hover,.top-fix-bar .top-nav .nav-list-inner a.nav-hover,.top-fix-bar .user-info .user-home:hover,.top-fix-bar .user-info .logout:hover,.top-fix-bar .user-info .logout-new:hover,.top-fix-bar .back-to-icenter:hover,.top-fix-bar .music-container .music-panel .music-dynamic,.top-fix-bar .music-container .music-panel .music-play{background-color:#00000000!important;}.top-fix-inner::before{content:'';position:absolute;top:0;right:0;left:0;bottom:0;backdrop-filter:blur(20px);}.top-fix-bar .top-fix-inner{background-color:#dfdfdf5d!important;}.background-container{background:none!important;}body{background-position:center;background-attachment:fixed;background-size:cover;background-repeat:no-repeat!important;background-image:url('https://i0.hdslb.com/bfs/article/d2916e9b56711b13cf1d20b657623fd0d9169b70.jpg@1320w_990h.webp')!important;}.head-nav .head-nav-menu li a{color:#079db8!important;font-weight:bold;}.head-nav{border-radius:10px;background-color:#ffffffb7!important;}.feed-v9 .f-single{background-color:#ffffffb7;border-radius:10px;}.mod-side-nav{margin-bottom:12px;border-radius:10px;background-color:#ffffffb7;}.mod-side-nav,.mod-side-nav a{color:#0f464c;}.mod-side-nav .current .qz-grid,.mod-side-nav li:hover .qz-grid,.top-toggle:hover{background-color:#ffffffb7;border-radius:10px;}.fn-feed-control-v2{background-color:#ffffffb7;border-radius:10px;}.fn-feed-control-v2 .feed-control-tab .item-on-slt{background:none;}.fn-feed-control-v2 .feed-control-tab .item-on{border-style:none;}.fn-feed-control-v2 .control-inner{border-color:#ffffff00;}.layout-head .user-vip-info{display:none;}.layout-head .head-detail-info .detail-info-con{display:none;}.layout-head .head-detail-info .detail-info-level{display:none;}.fn-checkin-btn .checkin-btn,.fn-checkin-btn{border-radius:10px;}.icenter-right-mod{background-color:#ffffffb7;border-radius:10px;}*{border-radius:10px;}";

    style_tag.innerHTML = style;
    document.head.appendChild(style_tag);

    rmClass("qz-grid");
    rmClass("ke_gray");
    rmClass("qz-grid");
    rmClass("vip-setting");
    rmClass("mod-side-nav mod-side-nav-recently-used");
    rmID("tb_app_li");
    //flash检查
    //QZFL.media.getFlashVersion().major = 32;


})();
