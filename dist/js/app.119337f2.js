(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-426ae330":"f62c0c16","chunk-c7733b68":"b0aee05d","chunk-f38e4fca":"1d04f479","chunk-62f4a1be":"e60ba0f9","chunk-7f12dd92":"9dc787b5","chunk-d72954e4":"a7294a93"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-426ae330":1,"chunk-c7733b68":1,"chunk-f38e4fca":1,"chunk-62f4a1be":1,"chunk-7f12dd92":1,"chunk-d72954e4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-426ae330":"b1eb0a20","chunk-c7733b68":"b7be9165","chunk-f38e4fca":"8aceec78","chunk-62f4a1be":"9fef1911","chunk-7f12dd92":"4ce29493","chunk-d72954e4":"b92f58e9"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],f=u.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(e);var l=new Error;u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3dfd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0",visibility:"hidden"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-arrow",viewBox:"0 0 8 16"}},[n("path",{attrs:{d:"M.146 7.646a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7v.708l7-7a.5.5 0 0 0-.708-.708l-7 7z"}})]),n("symbol",{attrs:{id:"icon-search",viewBox:"0 0 17 18"}},[n("path",{attrs:{d:"M12.775 14.482l3.371 3.372a.5.5 0 0 0 .708-.708l-3.372-3.37-1.817-1.818a.5.5 0 1 0-.707.707l1.817 1.817zM1 7.14a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm13 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"}})]),n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9765"}},[n("path",{attrs:{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z","p-id":"9766"}})]),n("symbol",{attrs:{id:"icon-author",viewBox:"0 0 10 12"}},[n("path",{attrs:{d:"M6.375 6.683C7.053 5.873 7.5 4.649 7.5 3.6 7.5 2.023 6.462 1 5 1S2.5 2.023 2.5 3.6c0 1.05.447 2.274 1.125 3.083a1 1 0 0 1-.463 1.595C1.79 8.715 1 9.537 1 10.5c0-.106-.036-.165-.012-.147.136.1.39.21.743.308C2.52 10.88 3.675 11 5 11c1.325 0 2.48-.12 3.27-.339.352-.097.606-.208.742-.308.024-.018-.012.04-.012.147 0-.963-.789-1.785-2.162-2.222a1 1 0 0 1-.463-1.595zm1.18.071a5.23 5.23 0 0 1-.414.571c.226.072.444.155.653.25l.306.15C9.222 8.32 10 9.268 10 10.5c0 1-2.239 1.5-5 1.5s-5-.5-5-1.5c0-1.232.778-2.179 1.9-2.775l.306-.15c-.306.15.427-.178.653-.25a5.23 5.23 0 0 1-.414-.57l-.17-.287C1.79 5.59 1.5 4.55 1.5 3.6 1.5 1.39 3.067 0 5 0s3.5 1.39 3.5 3.6c0 .951-.29 1.991-.775 2.868l-.17.286z"}})]),n("symbol",{attrs:{id:"icon-arrow-r",viewBox:"0 0 7 12"}},[n("path",{attrs:{d:"M6.146 6.354v-.708l-5.5 5.5a.5.5 0 0 0 .708.708l5.5-5.5a.5.5 0 0 0 0-.708l-5.5-5.5a.5.5 0 1 0-.708.708l5.5 5.5z"}})]),n("symbol",{attrs:{id:"icon-book",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2904"}},[n("path",{attrs:{d:"M648.84736 775.49568c-40.73472 0-107.74528 11.63264-116.46976 37.84704h-37.84704c-11.65312-26.19392-75.71456-37.84704-116.49024-37.84704H162.6112v-564.8384h232.91904c49.50016 0 93.16352 26.19392 116.46976 64.04096 23.30624-37.84704 66.99008-64.04096 116.46976-64.04096H861.3888v564.85888H648.84736z m-154.3168-448.38912c0-46.57152-49.50016-78.60224-96.07168-78.60224H203.38688v486.23616h174.67392c37.86752 0 99.00032 0 116.49024 29.12256V327.10656z m329.0112-78.60224h-195.072c-49.47968 0-96.07168 32.01024-96.07168 78.60224v433.82784c17.48992-29.12256 78.60224-29.12256 116.46976-29.12256h174.6944V248.50432z m0 0",fill:"","p-id":"2905"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-remove",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5161"}},[n("path",{attrs:{d:"M512 106.666667a405.333333 405.333333 0 1 0 405.333333 405.333333A405.333333 405.333333 0 0 0 512 106.666667z m120.533333 489.6a25.621333 25.621333 0 0 1 0 36.266666 25.749333 25.749333 0 0 1-36.266666 0L512 548.266667l-84.266667 84.266666a25.749333 25.749333 0 0 1-36.266666 0 25.621333 25.621333 0 0 1 0-36.266666L475.733333 512l-84.266666-84.266667a25.642667 25.642667 0 0 1 36.266666-36.266666L512 475.733333l84.266667-84.266666a25.642667 25.642667 0 0 1 36.266666 36.266666L548.266667 512z",fill:"#d81e06","p-id":"5162"}})])])]),n("router-view")],1)},o=[],a=n("5530"),i=n("2f62"),c={name:"App",methods:Object(a["a"])({},Object(i["b"])(["initReadingHistory","initSetting"])),created:function(){this.initReadingHistory(),this.initSetting()},mounted:function(){this.$nextTick((function(){window.scroll(0,1)}))}},s=c,u=(n("5c0b"),n("2877")),f=Object(u["a"])(s,r,o,!1,null,null,null);t["default"]=f.exports},"51be":function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),r="https://openacg.ml",o="http://cdn.openacg.ml"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("5530"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=n("3dfd"),i=(n("d3b7"),n("8c4f"));o["a"].use(i["a"]);var c=[{path:"/",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))},children:[{path:"",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-f38e4fca"),n.e("chunk-7f12dd92")]).then(n.bind(null,"3c68"))}},{path:"/book/:bookid",name:"book",component:function(){return Promise.all([n.e("chunk-f38e4fca"),n.e("chunk-d72954e4")]).then(n.bind(null,"88ea"))}},{path:"/bookshelf",name:"bookshelf",component:function(){return n.e("chunk-c7733b68").then(n.bind(null,"c67e"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-426ae330").then(n.bind(null,"855b"))}},{path:"/reader/:bookid",name:"reader",component:function(){return Promise.all([n.e("chunk-f38e4fca"),n.e("chunk-62f4a1be")]).then(n.bind(null,"2ba5"))}}]}],s=new i["a"]({mode:"history",routes:c}),u=s,f=n("2f62"),l={state:{latestBookList:[],menuToggled:!1,homePagePosY:0},mutations:{SAVE_MENU_TOGGLED:function(e,t){e.menuToggled=t},SAVE_LATEST_BOOK_LIST:function(e,t){e.latestBookList=t},SAVE_HOME_SCROLLING_POSY:function(e,t){e.homePagePosY=t},SAVE_HOTLIST:function(e,t){e.hotList=t}},getters:{homePagePosY:function(e){return e.homePagePosY},latestBookList:function(e){return e.latestBookList},isMenuToggled:function(e){return e.menuToggled}},actions:{saveMenuToggled:function(e,t){var n=e.commit;n("SAVE_MENU_TOGGLED",t)},saveHomeScrollingPosY:function(e,t){var n=e.commit;n("SAVE_HOME_SCROLLING_POSY",t)},saveLatestBookList:function(e,t){var n=e.commit;n("SAVE_LATEST_BOOK_LIST",t)},removeLatestBookList:function(e){var t=e.commit;t("SAVE_LATEST_BOOK_LIST",null)}}},d=l,h=(n("c740"),n("96cf"),n("1da1")),p=n("2909"),m=n("cf45"),v=n("f8c8"),b={state:{book:{},chapterList:[],currentVolumeChapters:null,recentReadingChapterList:[]},mutations:{SAVE_BOOK:function(e,t){e.book=t},SAVE_CURRENT_VOLUME_CHAPTERS:function(e,t){e.currentVolumeChapters=t},SAVE_CHAPTER_LIST:function(e,t){e.chapterList=t},SAVE_RECENT_READING_CHAPTER_LIST:function(e,t){e.recentReadingChapterList=t,Object(m["c"])("recentReadingChapterList",e.recentReadingChapterList)}},getters:{book:function(e){return e.book},recentReadingChapterList:function(e){var t=e.recentReadingChapterList;return t instanceof Promise?[]:t},chapterList:function(e){return e.chapterList},currentVolumeChapters:function(e){return e.currentVolumeChapters}},actions:{saveBook:function(e,t){var n=e.commit;n("SAVE_BOOK",t)},saveRecentReadingChapterList:function(e,t){var n=e.commit,r=e.state,o=Object(p["a"])(r.recentReadingChapterList),a=o.findIndex((function(e){return e.bookid===t.bookid}));-1===a?o.push(t):o[a]=t,n("SAVE_RECENT_READING_CHAPTER_LIST",o)},saveCurrentVolumeChapters:function(e,t){var n=e.commit;n("SAVE_CURRENT_VOLUME_CHAPTERS",t)},initReadingHistory:function(e){var t=e.commit;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["a"])("recentReadingChapterList");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:n=e.t0,t("SAVE_RECENT_READING_CHAPTER_LIST",n);case 7:case"end":return e.stop()}}),e)})))()},initChapterList:function(e,t){var n=e.commit;return Object(h["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.next=3,Object(v["b"])(t.id);case 3:o=e.sent,o.response&&(r=Object(p["a"])(o.response)),n("SAVE_CHAPTER_LIST",r);case 6:case"end":return e.stop()}}),e)})))()},updateReadingHistory:function(e,t,n,r){var o=e.commit,a=e.state,i=Object(p["a"])(a.recentReadingChapterList),c={book:Object.assign({},t),chapterid:n,posY:r},s=i.findIndex((function(e){return e.book.id===t.id}));-1===s?i.push(c):i[s]=c,o("SAVE_RECENT_READING_CHAPTER_LIST",c)}}},g=b,S=(n("4de4"),n("45fc"),{state:{bookshelfList:[]},mutations:{SAVE_BOOKSHELF_LIST:function(e,t){e.bookshelfList=t,Object(m["c"])("bookshelf",t)}},actions:{loadBookshelfList:function(e){var t=e.commit;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["a"])("bookshelf");case 2:n=e.sent,t("SAVE_BOOKSHELF_LIST",n);case 4:case"end":return e.stop()}}),e)})))()},removeBook:function(e,t){var n=e.commit,r=e.state,o=r.bookshelfList.filter((function(e){return e.id!==t.id}));n("SAVE_BOOKSHELF_LIST",o)},updateBookshelf:function(e,t){var n=e.commit;e.state;n("SAVE_BOOKSHELF_LIST",t)},saveBookToBookshelf:function(e,t){var n=e.commit,r=e.state,o=null;o=Object(m["b"])(r.bookshelfList)?[]:Object(p["a"])(r.bookshelfList);var a=o.some((function(e){return e.id===t.id}));a||o.push(Object.assign({},t)),n("SAVE_BOOKSHELF_LIST",o)}},getters:{bookshelfList:function(e){return e.bookshelfList}}}),E=S,k={state:{hotList:[],searchHistoryList:[]},mutations:{SAVE_HOTLIST:function(e,t){e.hotList=t},SAVE_SEARCH_HISTORY_LIST:function(e,t){e.searchHistoryList=t,Object(m["c"])("searchHistory",t)}},actions:{initSearchHistory:function(e){var t=e.commit;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["a"])("searchHistory");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:n=e.t0,t("SAVE_SEARCH_HISTORY_LIST",n);case 7:case"end":return e.stop()}}),e)})))()},saveHotList:function(e,t){var n=e.commit;n("SAVE_HOTLIST",t)},saveSearchHistory:function(e,t){var n=e.commit,r=e.state,o=r.searchHistoryList.some((function(e){return e.title===t.title}));if(!o){var a=Object(p["a"])(r.searchHistoryList);a.push(t),n("SAVE_SEARCH_HISTORY_LIST",a)}},cleanSearchHistory:function(e){var t=e.commit;t("SAVE_SEARCH_HISTORY_LIST",[])}},getters:{hotList:function(e){return e.hotList},searchHistory:function(e){return e.searchHistoryList}}},w=k,L={state:{setting:{}},mutations:{SAVE_SETTING:function(e,t){e.setting=t,Object(m["c"])("setting",t)}},actions:{saveSetting:function(e,t){var n=e.commit;n("SAVE_SETTING",t)},initSetting:function(e){var t=e.commit;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["a"])("setting");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={fontSize:"0.8rem",darkTheme:!1};case 5:n=e.t0,t("SAVE_SETTING",n);case 7:case"end":return e.stop()}}),e)})))()}},getters:{setting:function(e){return e.setting}}},O=L;o["a"].use(f["a"]);var T=new f["a"].Store({state:{},mutations:{},getters:{},modules:{home:d,book:g,bookshelf:E,search:w,read:O}}),_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y={headBar:{myBookshelf:"我的書櫃"},homePage:{novel:"小說",anime:"動畫",comic:"漫畫",music:"音樂"},bookPage:{startReading:"開始閱讀",continueReading:"繼續閱讀",addToBookshelf:"加入書櫃",addedToBookshelf:"",syncKindle:"",totalVolumes:"",aescending:"",descending:""},readPage:{lastChapter:"上一章",nextChapter:"下一章",menu:"目錄",lightMode:"日光模式",darkMode:"夜間模式",lastChapterMessage:"這是最後一章",firstChapterMessage:"這是第一章"}},A=(n("a034"),n("cc20"),n("7869")),R=n.n(A);o["a"].use(R.a,{type:"center",duration:3e3,wordWrap:!0,width:"6rem"}),o["a"].config.productionTip=!1,o["a"].prototype.$lang=Object(r["a"])({},y),new o["a"]({router:u,store:T,render:function(e){return e(a["default"])}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},a034:function(e,t){(function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",o=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/320*20+"px")};e.addEventListener&&(t.addEventListener(r,o,!1),e.addEventListener("DOMContentLoaded",o,!1))})(document,window)},cf45:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s}));n("96cf");var r=n("1da1"),o=n("a002"),a=n.n(o),i=function(e){if(e instanceof Array){if(0===e.length)return!0}else{if(!(e instanceof Object))return null===e||""===e||void 0===e;if("{}"===JSON.stringify(e))return!0}return!1},c=function(e,t){e&&a.a.setItem(e,t)},s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.getItem(t);case 3:if(n=e.sent,!i(n)){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e["catch"](0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},f8c8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return h}));n("4160"),n("baa5"),n("b64b"),n("d3b7"),n("159b");var r=n("53ca"),o=(n("96cf"),n("1da1")),a=n("51be"),i=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,o,i,c,s,u,f,l,d=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=d.length>0&&void 0!==d[0]?d[0]:"GET",n=d.length>1&&void 0!==d[1]?d[1]:"",o=d.length>2&&void 0!==d[2]?d[2]:{},t=t.toUpperCase(),n=a["a"]+n,"GET"===t&&(i="",Object.keys(o).forEach((function(e){i+=e+"="+o[e]+"&"})),""!==i&&(i=i.substr(0,i.lastIndexOf("&")),n=n+"?"+i)),!window.fetch){e.next=24;break}return c={credentials:"include",method:t,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"},"POST"===t&&Object.defineProperty(c,"body",{value:JSON.stringify(o)}),e.prev=9,e.next=12,fetch(n,c);case 12:return s=e.sent,e.next=15,s.json();case 15:u=e.sent,e.next=21;break;case 18:throw e.prev=18,e.t0=e["catch"](9),new Error(e.t0);case 21:return e.abrupt("return",u);case 24:f=(window.XMLHttpRequest,new XMLHttpRequest),l="","POST"===t&&(l=JSON.stringify(o)),f.open(t,n,!0),f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),f.send(l),f.onreadystatechange=function(){if(4===f.readyState){if(200===f.status){var e=f.response;return"object"!==Object(r["a"])(e)&&(e=JSON.parse(e)),e}throw new Error(f)}};case 31:case"end":return e.stop()}}),e,null,[[9,18]])})));return function(){return e.apply(this,arguments)}}(),c=function(e){return i("GET","/api/v1/novel/getBook",{id:e})},s=function(e,t){return i("GET","/api/v1/novel/latest",{offset:e,limit:t})},u=function(e){return i("GET","/api/v1/novel/search/hot",{limit:e})},f=function(e,t,n){return i("GET","/api/v1/novel/search",{offset:e,limit:t,keywords:n})},l=function(e){return i("GET","/api/v1/novel/chapterList",{bid:e})},d=function(e){return i("GET","/api/v1/novel/getChapter",{chapterid:e})},h=function(e){return i("POST","/api/v1/novel/updateBookshelf",e)}}});