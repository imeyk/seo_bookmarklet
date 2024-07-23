       if (typeof dtModalHTML === 'undefined')
       var dtModalHTML = `
    <div class="dt-modal" id="dt-modal">
        <div class="dt-modal-content" id="dt-modal-content">
            <span class="dt-close-button" id="dt-close-button">&times;</span>

            <div class="dt-area">
                <div class="dt-area-tabs">
                    <div class="dt-tab dt-icon-audit active" data-target="dt-content-audit">
                        <span>
                            <svg width="10" height="10" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <g transform="matrix(1,0,0,1,-983.123,-248.127)">
                                    <g id="ic_check_circle_24px" transform="matrix(0.5,0,0,0.5,982.123,247.127)">
                                        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM10,17L5,12L6.41,10.59L10,14.17L17.59,6.58L19,8L10,17Z" style="fill:rgb(13,52,102);fill-rule:nonzero;" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>Audit</span>
                    </div>
        <div class="dt-tab dt-icon-meta" data-target="dt-content-meta" data-func="tabMeta">
<span>
<svg width="10" height="9" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-1069.39,-249.127)">
        <g id="ic_code_24px" transform="matrix(0.5,0,0,0.5,1068.39,246.127)">
            <path d="M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6ZM14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6Z" 
style="fill:rgb(13,52,102);fill-rule:nonzero;"/>
        </g>
    </g>
</svg>

</span>

<span>Meta</span>
</div>
                    <div class="dt-tab dt-icon-headlines" data-target="dt-content-headlines" data-func="tabHeadlines">
                        <span>
                            <svg width="10" height="10" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <g transform="matrix(1,0,0,1,-1143.36,-247.127)">
                                    <g id="ic_font_download_24px" transform="matrix(0.5,0,0,0.5,1142.36,246.127)">
                                        <path d="M9.93,13.5L14.07,13.5L12,7.98L9.93,13.5ZM20,2L4,2C2.9,2 2,2.9 2,4L2,20C2,21.1 2.9,22 4,22L20,22C21.1,22 22,21.1 22,20L22,4C22,2.9 21.1,2 
20,2ZM15.95,18.5L14.81,15.5L9.17,15.5L8.05,18.5L5.96,18.5L11.07,5.5L12.93,5.5L18.04,18.5L15.95,18.5Z" style="fill:rgb(13,52,102);fill-rule:nonzero;" />
                                    </g>
                                </g>
                            </svg>

                        </span>
                        <span>Headings</span>
                    </div>

                    
        <div class="dt-tab dt-icon-links" data-target="dt-content-links" data-func="tabLinks">
<span>
<svg width="10" height="10" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-1232.25,-249.627)">
        <g id="ic_link_24px" transform="matrix(0.5,0,0,0.5,1231.25,246.127)">
            <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9L11,8.9L11,7L7,7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17L11,17L11,15.1L7,15.1C5.29,15.1 3.9,13.71 
3.9,12ZM8,13L16,13L16,11L8,11L8,13ZM17,7L13,7L13,8.9L17,8.9C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1L13,15.1L13,17L17,17C19.76,17 22,14.76 22,12C22,9.24 
19.76,7 17,7Z" style="fill:rgb(13,52,102);fill-rule:nonzero;"/>
        </g>
    </g>
</svg>
 </span>
<span>Links</span>
</div>


                </div>
                <div class="dt-area-content">
                    <div class="dt-content active" id="dt-content-audit">
                        <div class="dt-content-cols">

                            <ul>
                                <li>
                                    <b>Показать</b>
                                    <ul>
                                        <li><a href="javascript:void(0);" data-func="vwHeads">Заголовки</a></li>
                                        <li><a href="javascript:void(0);" data-func="vwLinks">Ссылки</a></li>
                                        <li><a href="javascript:void(0);" data-func="vwKeys">Ключевые фразы</a></li>
                                        <li class="dt-blank">&nbsp;</li>
                                        <li><a href="javascript:void(0);" data-func="vwAlts">Image alts</a></li>
                                        <li><a href="javascript:void(0);" data-func="vwFrames">iFrames</a></li>
                                        <li><a href="javascript:void(0);" data-func="vwHidden">Скрытый контент</a></li>
                                        <li class="dt-blank">&nbsp;</li>
                                        <li><a href="javascript:void(0);" data-func="viewHTML">Посмотреть HTML код</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <b>Remove</b>
                                    <ul class="dt-red">
                                        <li><a href="javascript:void(0);" data-func="rmImages">Images</a></li>
                                        <li><a href="javascript:void(0);" data-func="rmForms">Forms</a></li>
                                        <li><a href="javascript:void(0);" data-func="rmFrames">iFrames</a></li>
                                        <li class="dt-blank">&nbsp;</li>
                                        <li><a href="javascript:void(0);" data-func="rmStyles">Styles</a></li>
                                        <li><a href="javascript:void(0);" data-func="rmScripts">Scripts</a></li>
                                        <li><a href="javascript:void(0);" data-func="rmCookies">Cookies</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <ul>
                                <li>
                                    <b>External</b>
                                    <ul>
                                        <li><a href="https://search.google.com/search-console" target="_blank">Search Console</a></li>
                                        <li><a href="https://pagespeed.web.dev/" target="_blank" data-func="exPagespeed">PageSpeed</a></li>
                                        <li><a href="http://webcache.googleusercontent.com/search" target="_blank" data-func="exCache">Cache</a> (<a href="http://webcache.googleusercontent.com/search" target="_blank" data-func="exTCache">Text</a>)</li>
<li class="dt-blank">&nbsp;</li>
                                        <li><a href="https://validator.w3.org/" target="_blank" data-func="exW3c">HTML Validator</a></li>
                                        <li><a href="https://search.google.com/test/rich-results" target="_blank" data-func="exSchema">Schema Validator</a></li>
                                        <li><a href="https://web.archive.org/" target="_blank" data-func="exArchive">Web Archive</a></li>
<li class="dt-blank">&nbsp;</li>
                                        <li><a href="https://www.similarweb.com/" target="_blank" data-func="exSmlrweb">SimilarWeb</a></li>
                                        <li><a href="https://builtwith.com/" target="_blank" data-func="exBuilt">BuiltWith</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                            <div class="dt-mess dt-hide" id="dt-sel-txt"></div>
                            <div class="dt-mess dt-hide" id="dt-info-txt"></div>
                    </div>
                    <div class="dt-content" id="dt-content-meta">
                        <div class="dt-content-title">Page metas</div>
                        <div class="dt-content-text" id="dt-content-meta-text">
                            &nbsp;
                        </div>
                    </div>
                    <div class="dt-content" id="dt-content-headlines">
                        <div class="dt-content-title">Page headlines</div>
                        <div class="dt-content-text" id="dt-content-headlines-text">
                            &nbsp;
                        </div>
                    </div>
                    <div class="dt-content" id="dt-content-links">
                        <div class="dt-content-text" id="dt-content-links-text">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>

            <div class="dt-b-foot">
                <p class="dt-b-powered"><a href="https://imeyk.ru/" target="_blank">@imeyk</a></p>
            </div>

        </div>
    </div>
`;

       if (typeof dtmodalStyle === 'undefined')
       var dtmodalStyle = `
.dt-modal{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:fixed;top:10px;right:10px;width:480px;max-width:100%;background-color:rgba(255,255,255,0.9);border-radius:5px;box-shadow:0 4px 6px rgba(0,0,0,0.1);z-index:2147483644;overflow:auto;height:480px;max-height:100%;display:block;font:normal 13px/1.5 'Roboto','Arial','Verdana' !important;text-decoration:none;color:#333;text-align:left;letter-spacing:normal;}
.dt-modal *{margin:0;padding:0;line-height:1.5;box-sizing:border-box;color:inherit;font-size:inherit}

.dt-modal * {scrollbar-width: thin;scrollbar-color: #226AB4 #e8e7e4 !important;}
.dt-modal *::-webkit-scrollbar {width: 12px !important;}
.dt-modal *::-webkit-scrollbar-thumb {background-color: #226AB4 !important;border-radius: 20px !important;border: 3px solid #e8e7e4 !important;}
.dt-modal *::-webkit-scrollbar-track {background: #e8e7e4 !important;}
.dt-modal *::-webkit-scrollbar-corner {background: transparent !important;}
.dt-modal *::-webkit-scrollbar-track-piece {background: transparent !important;}

.dt-modal-content{padding:10px 16px 5px;position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;align-content:stretch;height:480px;max-height:100%}
.dt-modal-content>div{flex-grow:1}
.dt-modal-content>div.dt-b-head{max-height:55px;display:flex;align-items:center;justify-content:left;flex-direction:row;flex-wrap:wrap}
.dt-b-head{position:relative}
.dt-b-group{padding-left:10px}
.dt-b-title{font-weight:bold}
.dt-b-desc{font-size:.9em}
.dt-modal-content>div.dt-b-sponsor{max-height:50px;display:flex;align-items:left;justify-content:center;flex-direction:column;border-radius:4px;color:#fff;padding:0;margin-bottom:10px}
.dt-modal-content>div.dt-b-sponsor img{border-radius:3px;width:100%;height:auto}
.dt-modal-content>div.dt-b-foot{max-height:20px;display:flex;align-items:center;justify-content:right;font-size:.85em;color:#333}
.dt-modal-content>div.dt-b-sponsor a,.dt-modal-content>div.dt-b-foot a{color:inherit;text-decoration:underline}
.dt-modal-content>div.dt-b-sponsor a:hover,.dt-modal-content>div.dt-b-foot a:hover{text-decoration:none}
.dt-area{display:flex;flex-direction:column}
.dt-area-tabs{display:flex}
.dt-tab{height:24px;background-color:#EDF4FE;display:flex;justify-content:center;align-items:center;padding:.1em 1em;margin-left:1px;cursor:pointer;color:#073366}
.dt-tab,.dt-b-head,.dt-b-sponsor,.dt-b-foot,#dt-content-audit,.dt-close-button{user-select:none;-webkit-user-select:none}
.dt-tab>span:first-child{padding-right:5px}
.dt-tab:hover,.dt-tab.active:hover{background-color:#D2E0ED}
.dt-tab.active{background-color:#D9EAFD}
.dt-tab:first-child{border-top-left-radius:4px;margin-left:0}
.dt-tab:last-child{border-top-right-radius:4px}
.dt-area-content{background-color:#D9EAFD;border-radius:4px;border-top-left-radius:0;padding:5px;flex-grow:1;height:100px}
.dt-content{display:none;height:100%;background-color:white;overflow:auto;box-sizing:border-box;padding:12px 16px}
.dt-content.active{display:block}
.dt-content-title{font-weight:bold;padding:.1em 0 .75em}
.dt-close-button{position:absolute;top:5px;right:10px;cursor:pointer;font-size:20px;text-decoration:none}
.dt-modal.dt-hidden{display:none}
.dt-hx-1{padding-left:0;font-size:1em;background-color:#D2E0ED;border-radius:4px;padding:0 .5em}
.dt-hx-2{padding-left:25px;font-size:.95em}
.dt-hx-3{padding-left:50px;font-size:.9em;color:#404040}
.dt-hx-4{padding-left:60px;font-size:.85em;background-color:#F2F2F2}
.dt-hx-5{padding-left:70px;font-size:.8em;background-color:#F2F2F2}
.dt-hx-6{padding-left:100px;font-size:.75em;background-color:#F2F2F2}
.dt-content-cols{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}
.dt-content ul{list-style-type:none;list-style-image:none;padding-inline-start:0;padding-right:10px;padding-bottom:10px}
.dt-content ul li{list-style:none;text-align:left;margin:0 !important;}
.dt-content ul li:before{display:inline-block;position:relative;top:0;left:0;width:auto;height:auto;background:none;content:"";}
.dt-content-cols>ul>li{padding-bottom:1em}
.dt-content-cols>ul>li:last-child{padding-bottom:0}
.dt-content ul b{font-size:1em}
.dt-content ul ul{padding-inline-start:0}
.dt-content ul .dt-blank{font-size:.75em}
.dt-content a{color:#073366;text-decoration:underline;font-weight:inherit}
.dt-content a:hover{text-decoration:none}
.dt-content ul ul li:not(.dt-blank)::before{content:"\\25FB";font-size:1em;color:#073366;padding-right:2px}
.dt-content ul ul li:not(.dt-blank).active::before{content:"\\25FC";font-size:1em;color:#80E5C7;padding-right:2px}
.dt-content ul ul.dt-red li:not(.dt-blank).active::before{color:#BF4040}
.dt-highlight{box-shadow:inset 0 0 0 2px #ff0;background-color:rgba(254,242,218,1);position:relative;display:inline-flex;align-items:center}
div.dt-highlight{box-shadow:inset 0 0 0 2px #D9EAFD;background-color:#EDF4FE}
div.dt-highlight-faq{box-shadow:inset 0 0 0 2px #D9EAFD;background-color:rgba(217,234,253,0.2);padding:0 5px}
.dt-hidden:before,a.dt-highlight.dt-nofollow:before,a.dt-highlight.dt-sponsored:before,a.dt-highlight.dt-external:before{display:inline-block;font-family:monospace;font-size:.8em;padding:0 .25em;bottom:100%;left:0;white-space:nowrap}
.dt-hidden:before{position:absolute}
a.dt-highlight{box-shadow:inset 0 0 0 2px lightgreen !important;background-color:lightgreen !important;color:darkgreen !important;}
a.dt-highlight.dt-nofollow,a.dt-highlight.dt-sponsored{box-shadow:inset 0 0 0 2px lightblue !important;background-color:lightblue !important;color:darkblue !important;}
a.dt-highlight.dt-external{box-shadow:inset 0 0 0 2px purple !important;background-color:purple !important;color:white !important;}
a.dt-highlight.dt-nofollow:before{content:attr(data-before);background-color:white;}
a.dt-highlight.dt-external:before{content:attr(data-before);background-color:white;color:purple;margin:0 3px}
h1.dt-highlight,h2.dt-highlight,h3.dt-highlight,h4.dt-highlight,h5.dt-highlight,h6.dt-highlight{box-shadow:inset 5px 0 0 0 rgba(249,199,71,1);padding-left:10px;color:#262626;display:block;}
h1.dt-highlight:before,h2.dt-highlight:before,h3.dt-highlight:before,h4.dt-highlight:before,h5.dt-highlight:before,h6.dt-highlight:before{background:none;clip-path:none;white-space:nowrap;width:auto;height:auto;padding-right:.3em}
h1.dt-highlight::before{content:"H1 - "!important;color:#F7B40A}
h2.dt-highlight::before{content:"H2 - "!important;color:#F7B40A}
h3.dt-highlight::before{content:"H3 - "!important;color:#F7B40A}
h4.dt-highlight::before{content:"H4 - "!important;color:#F7B40A}
h5.dt-highlight::before{content:"H5 - "!important;color:#F7B40A}
h6.dt-highlight::before{content:"H6 - "!important;color:#F7B40A}
iframe.dt-highlight{padding:4px}
.dt-iframe-info{padding:3px;color:black;font-family:monospace;font-size:11px;background-color:yellow;z-index:2147483647}
.dt-alt-info{display:inline-block;position:absolute;padding:1px;color:black;z-index:2147483647;background-color:rgba(255,255,0,.5);font-family:monospace;font-size:11px;margin-top:-.85em;padding:.15em}
.dt-hidden:before{content:"Hidden";background-color:rgba(249,199,71,.5)}
.dt-hidden.dt-highlight{box-shadow:inset 0 0 0 1px #F9C747;background-color:rgba(249,199,71,.2)}
.dt-hidden.dt-highlight p{padding:.5em .75em;margin:0}
.dt-hide.dt-hide{display:none!important}
.dt-show.dt-show{display:inline-block!important;visibility:visible!important;height:auto!important;max-height:max-content!important;overflow:auto!important;opacity:1!important}
.dt-mess{background-color:#F2F2F2;border-radius:3px;padding:2px 7px;margin-top:1em}
.dt-meta div{word-break:break-all;font-size:.95em}
.dt-flex{display:flex;flex-wrap:wrap}
.dt-flex span{flex-basis:75%}
.dt-flex span:first-child{flex-basis:25%}
.dt-flinks{margin-bottom:.5em;display:list-item;list-style-type:decimal;margin-left:20px;line-height:1}
.dt-flinks span{display:block;line-height:1;word-break:break-all}
.dt-flinks:nth-child(odd){background-color:#f0fff0}
.dt-modal code{border:1px solid #cacaca;background-color:#e6e6e6;font-size:1em;font-family:Consolas,"Liberation Mono",Courier,monospace;font-weight:400;color:#0a0a0a;display:inline;max-width:100%;word-wrap:break-word;white-space:normal}
.dt-pointer {cursor: pointer;}
.dt-pointer:hover {background-color: #f0f0ff;}
.dt-icon {display: inline-block;background-image: none;width: 12px;height: 12px;background-size: contain;background-repeat: no-repeat;margin-left: 5px;position: relative;cursor: pointer;font-style:italic;font-weight:normal;}
.dt-icon.dt-copy {background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%209%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20style%3D%22fill%3Adarkgray%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%22%3E%3Cpath%20d%3D%22M16%201H4c-1.1%200-2%20.9-2%202v14h2V3h12zm3%204H8c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h11c1.1%200%202-.9%202-2V7c0-1.1-.9-2-2-2m0%2016H8V7h11z%22%20style%3D%22fill-rule%3Anonzero%22%20transform%3D%22translate(-.909%20-.455)scale(.45454)%22%2F%3E%3C%2Fsvg%3E');}
.dt-icon.dt-copy:hover::after {content: 'Copy';position: absolute;left: 14px;top: 50%;transform: translateY(-50%);font-size: 12px;color: darkgray;white-space: nowrap;}
.dt-icon.dt-copied {background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2010%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20style%3D%22fill%3Adarkgray%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20style%3D%22fill-rule%3Anonzero%22%20transform%3D%22translate(-1.932%20-3.181)scale(.56818)%22%2F%3E%3C%2Fsvg%3E');}
.dt-icon.dt-download {background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%209%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20style%3D%22fill%3Adarkgray%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%22%3E%3Cpath%20d%3D%22M19%209h-4V3H9v6H5l7%207zM5%2018v2h14v-2z%22%20style%3D%22fill-rule%3Anonzero%22%20transform%3D%22translate(-2.941%20-1.765)scale(.58823)%22%2F%3E%3C%2Fsvg%3E');}

    `;

        var dtStyles = {
            link: [],
            style: []
        };

        var myBookmarklet = {};
        var modalLinks = {};
       
       myBookmarklet._kwCount = null;
       myBookmarklet._lnCount = null;
       myBookmarklet._hdCount = null;
       myBookmarklet._ifCount = null;
       myBookmarklet._hnCount = null;
       myBookmarklet._ckCount = null;
       myBookmarklet._fmCount = null;
       myBookmarklet._imCount = null;
       myBookmarklet._imWoAlts = null;
              
       myBookmarklet.getLocation = function() {
            const { protocol, hostname, port, pathname, search } = window.location;
            const portPart = port ? `:${port}` : '';
            return decodeURIComponent(`${protocol}//${hostname}${portPart}${pathname}${search}`);
       };
       
       myBookmarklet.getDomain = function() {
            const { protocol, hostname, port, pathname, search } = window.location;
            return hostname;
       };
       
       myBookmarklet.remove = function(elName, selector = false) {
            let el = selector ? document.querySelector(elName) : document.getElementById(elName);
            if (el) el.remove();
       };
       
       myBookmarklet.scroll = function(el = null) {
            if (!el) el = document.body.firstElementChild;
           
            window.scrollTo({
                top: el.getBoundingClientRect().top + window.pageYOffset - 100,
                behavior: 'smooth'
            });
       };
              
       myBookmarklet.removeCookies = function() {
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            }
       };
       
       myBookmarklet.goTo = function(path) {
           let link = modalLinks._currentElement;
           if (link) link.href= path;
       };
       
        myBookmarklet.isExternal = function(link) {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            return anchor.hostname && anchor.hostname !== window.location.hostname;
        };
       
       myBookmarklet.searchWithinNode = function(node, keywords) {
            var pos, skip, spannode, middlebit, endbit, middleclone, first;
           var colors = ["yellow", "red", "orange", "lightcoral", "lightgreen"];
            skip = 0;
            first = null;
            if (node.closest && node.closest('#dt-modal')) {
                return skip;
            }

            if (node.nodeType == 3) { // Text node

                var nodeText = node.data.toUpperCase();
                for (var i = 0; i < keywords.length; i++) {
                    pos = nodeText.indexOf(keywords[i]);
                    if (pos >= 0) {
                        spannode = document.createElement("SPAN");
                        spannode.className = "dt-span-hl";
                        spannode.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                        middlebit = node.splitText(pos);
                        endbit = middlebit.splitText(keywords[i].length);
                        middleclone = middlebit.cloneNode(true);
                        spannode.appendChild(middleclone);
                        middlebit.parentNode.replaceChild(spannode, middlebit);
                        first = spannode;
                        ++myBookmarklet._kwCount;
                        skip = 1;
                        nodeText = endbit.data.toUpperCase();
                        node = endbit;
                    }
                }

            } else if (node.nodeType == 1 && node.childNodes && node.tagName.toUpperCase() != "SCRIPT" && node.tagName.toUpperCase() != "STYLE") {
                for (var child = 0; child < node.childNodes.length; ++child) {
                    child = child + myBookmarklet.searchWithinNode(node.childNodes[child], keywords);
                }
            }

            if (first && !document.querySelector('.scrolled-to')) {
                first.classList.add('scrolled-to'); 
                myBookmarklet.scroll(first);
            }

            return skip;
        };
       
       myBookmarklet.showInfo = function(text) {
            var mess = document.getElementById('dt-info-txt');
            if (mess) {
                    mess.innerHTML = text;
                    mess.classList.remove('dt-hide');
            }  
       };
       
       myBookmarklet.hideInfo = function() {
            var mess = document.getElementById('dt-info-txt');
            if (mess) {
                mess.innerHTML = '';mess.classList.add('dt-hide');
            }
       };
       
       myBookmarklet.updateInfo = function() {
           var txt = [];
           
           if (myBookmarklet._hdCount !== null)
               txt.push('Headings: <b>'+myBookmarklet._hdCount+'</b>');
           if (myBookmarklet._lnCount !== null) 
               txt.push('Links: <b>'+myBookmarklet._lnCount+'</b>');
           if (myBookmarklet._imCount !== null) 
               txt.push('Images: <b>'+myBookmarklet._imCount+'</b> (<b>' + myBookmarklet._imWoAlts +'</b> w/o alts)');
           if (myBookmarklet._ifCount !== null) 
               txt.push('iFrames: <b>'+myBookmarklet._ifCount+'</b>');
           if (myBookmarklet._hnCount !== null) 
               txt.push('Hidden: <b>'+myBookmarklet._hnCount+'</b> DOM elements (click on them to hide)');
           if (myBookmarklet._kwCount !== null) 
               txt.push('Keywords: <b>'+myBookmarklet._kwCount+'</b> occurrences of <code>"' +myBookmarklet._kwText+ '"</code> found');

            var mess = document.getElementById('dt-info-txt');
            if (mess) {
                if (txt.length) {
                    mess.innerHTML = txt.join(', ');
                    mess.classList.remove('dt-hide');
                } else {
                    mess.innerHTML = '';
                    mess.classList.add('dt-hide');
                }
            }
       };
       
       myBookmarklet.removeEventListener = function(el) {
           if (el === document.body) return;
           
           const clone = el.cloneNode(true);
           el.parentNode.replaceChild(clone, el);
       };
       
       myBookmarklet.removeAllListeners = function(el) {
            if (el.nodeType === Node.ELEMENT_NODE) {
                if (el.id === 'dt-modal' || el.closest('#dt-modal')) {
                    console.log(el.tagName + '#' + el.id);
                    return;
                }
                
                myBookmarklet.removeEventListener(el);
            }
           
           el.childNodes.forEach(child => myBookmarklet.removeAllListeners(child));
       };

        myBookmarklet.activateTab = function(tabElement) {
            const tabs = document.querySelectorAll('.dt-tab');
            const contents = document.querySelectorAll('.dt-content');
            const targetId = tabElement.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            tabs.forEach(t => {t.classList.remove('active');});
            tabElement.classList.add('active');

            contents.forEach(content => {content.classList.remove('active');});
            targetContent.classList.add('active');
        };

       myBookmarklet.copy = function(arr) {
        const text = arr.join('\n');
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.width = '1px';
        textarea.style.height = '1px';
        textarea.style.padding = '0';
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';
        textarea.style.background = 'transparent';
        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(0, 99999); 

        try {
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('Text copied to clipboard');
        } else {
            console.error('Failed to copy text');
        }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }

        document.body.removeChild(textarea);
    };

       
       modalLinks._currentElement = null;

       modalLinks.hide = function(selector) {
           var link = modalLinks._currentElement.closest("li");
            var elements = document.querySelectorAll(selector);
           
            if (link.classList.contains('active')) {
                elements.forEach(el => {el.classList.remove('dt-hide');});
                link.classList.remove('active');
            } else {
                elements.forEach(el => {el.classList.add('dt-hide');});
                link.classList.add('active');
            }
       };

       modalLinks.exPagespeed   = function() {myBookmarklet.goTo('https://pagespeed.web.dev/analysis?url='+myBookmarklet.getLocation());};
       modalLinks.exCache       = function() {myBookmarklet.goTo('https://www.google.com/search?q=cache%3A'+myBookmarklet.getLocation());};
       modalLinks.exTCache      = function() {myBookmarklet.goTo('https://www.google.com/search?q=cache%3A'+myBookmarklet.getLocation()+'&strip=1');};
       modalLinks.exW3c         = function() {myBookmarklet.goTo('https://validator.w3.org/nu/?doc='+myBookmarklet.getLocation());};
       modalLinks.exSchema      = function() {myBookmarklet.goTo('https://search.google.com/test/rich-results?url='+myBookmarklet.getLocation());};
       modalLinks.exSmlrweb     = function() {myBookmarklet.goTo('https://www.similarweb.com/website/'+myBookmarklet.getDomain());};
       modalLinks.exArchive     = function() {myBookmarklet.goTo('https://web.archive.org/web/*/'+myBookmarklet.getLocation());};
       modalLinks.exBuilt       = function() {myBookmarklet.goTo('https://builtwith.com/'+myBookmarklet.getDomain());};

       modalLinks.rmImages      = function() {modalLinks.hide('img:not(#dt-modal *), picture, svg:not(#dt-modal *)');};
       modalLinks.rmForms       = function() {modalLinks.hide('input, select, textarea, button');};
       modalLinks.rmFrames      = function() {modalLinks.hide('iframe');};
       modalLinks.rmCookies     = function() {myBookmarklet.removeCookies(); modalLinks._currentElement.closest("li").classList.add('active');};
       modalLinks.rmStyles      = function() {
           var link = modalLinks._currentElement.closest("li");

            if (link.classList.contains('active')) {
                dtStyles.link.forEach(function(link) {document.head.appendChild(link);});
                dtStyles.style.forEach(function(style) {document.head.appendChild(style);});

                var styleElements = document.querySelectorAll('[data-dtstyle]');
                Array.from(styleElements).forEach(function(element) {
                    element.setAttribute("style", element.getAttribute('data-dtstyle'));
                    element.removeAttribute('data-dtstyle');
                });

                link.classList.remove('active');
            } else {
                var linkElements = document.querySelectorAll('link[rel="stylesheet"]:not([media="print"])');
                dtStyles.link = linkElements;
                linkElements.forEach(function(link) {link.parentNode.removeChild(link);});

                var styleElements = document.querySelectorAll('style:not(#dt-modal-style)');
                dtStyles.style = styleElements;
                styleElements.forEach(function(style) {style.parentNode.removeChild(style);});

                var styleElements = document.querySelectorAll('[style]:not(#dt-modal *)');
                Array.from(styleElements).forEach(function(element) {
                    element.setAttribute("data-dtstyle", element.getAttribute('style'));
                    element.removeAttribute('style');
                });

                link.classList.add('active');
            }
       };
       
       modalLinks.rmScripts     = function() {
           var link = modalLinks._currentElement.closest("li");
           
           var scriptSrc = 'https://devakatalk.com/bookmarklet.js';
           document.querySelectorAll('script:not([src="' + scriptSrc + '"])').forEach(script => script.remove());
           link.classList.add('active');
           
           myBookmarklet.removeAllListeners(document.body);
           
           var elements = document.querySelectorAll('[onclick]:not(#dt-modal *)');
           elements.forEach(element => element.removeAttribute('onclick'));
       };
       
        modalLinks.viewHTML = function() {
            var scriptSrc = 'https://devakatalk.com/bookmarklet.js';

            myBookmarklet.remove('dt-modal');
            myBookmarklet.remove('dt-modal-style');
            myBookmarklet.remove(null, 'script[src="' + scriptSrc + '"]');

            const content = document.documentElement.outerHTML;
            var text = document.createTextNode(content);
            var div = document.createElement('div');
            div.appendChild(text);


            document.documentElement.innerHTML = `<html><head></head><body>
                <pre><code>${div.innerHTML}</code></pre>
                </body></html>`;

            myBookmarklet.scroll();
        };
        
        modalLinks.vwHeads = function() {
            var link = modalLinks._currentElement.closest("li");
            var heads = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
            
            if (link.classList.contains("active")) {
                myBookmarklet._hdCount = null;
            } else {
                myBookmarklet._hdCount = heads.length;
            }
            
            Array.from(heads).forEach(link => {link.classList.toggle('dt-highlight');});
            link.classList.toggle('active');
            myBookmarklet.updateInfo();
        };
        
        modalLinks.vwLinks = function() {
            var link = modalLinks._currentElement.closest("li");
            
            if (link.classList.contains("active")) {
                document.querySelectorAll('a:not(#dt-modal a)').forEach(link => {
                    link.classList.remove('dt-highlight', 'dt-nofollow', 'dt-external');
                });
                myBookmarklet._lnCount = null;
                myBookmarklet.updateInfo();
                link.classList.remove("active");
            } else {
                var links =  document.querySelectorAll('a:not(#dt-modal a)');
                Array.from(links).forEach(link => {
                    let cont = [];
                    if (link.rel.split(' ').includes('nofollow')) {
                        link.classList.add('dt-nofollow');
                        cont.push('NF');
                    }
                    if (link.rel.split(' ').includes('sponsored')) {
                        link.classList.add('dt-nofollow');
                        cont.push('SP');
                    }
                    if (myBookmarklet.isExternal(link)) {
                        link.classList.add('dt-external');
                        cont.push('EXT');
                    }
                    link.setAttribute('data-before', cont.join(', '));
                    link.classList.add('dt-highlight');
                });
                
                myBookmarklet._lnCount = links.length;
                myBookmarklet.updateInfo();
                link.classList.add("active");
            }
        };
       
       modalLinks.vwKeys = function() {
            var link = modalLinks._currentElement.closest("li");

            if (link.classList.contains('active')) {
                document.querySelectorAll('.dt-span-hl').forEach(span => {
                    var parent = span.parentNode;
                    var text = document.createTextNode(span.textContent);
                    parent.replaceChild(text, span);
                    parent.normalize(); 
                });
                
                myBookmarklet._kwCount = null;
                myBookmarklet._kwText = null;
                myBookmarklet.updateInfo();

                link.classList.toggle('active');
                return;
            }

            var text, dv;
           
            text = prompt("Search phrases (comma-separated):", "");
            if (text == null || text.length == 0) return;

            myBookmarklet._kwCount = 0
           myBookmarklet._kwText = text;

            var keywords = text.split(',').map(function(keyword) {
                return keyword.trim().toUpperCase();
            });

            dv = document.defaultView;

            myBookmarklet.searchWithinNode(document.body, keywords);
            myBookmarklet.updateInfo();
           
            link.classList.toggle('active');
       };

       modalLinks.vwAlts = function() {
           var link = modalLinks._currentElement.closest("li");
            var existingSpans = document.querySelectorAll('.dt-alt-info');
            existingSpans.forEach(function(span) {span.remove();});

            var images = document.querySelectorAll('img:not(#dt-modal *)');

            if (link.classList.contains("active")) {
                images.forEach(function(image) {image.classList.remove('dt-alt-info');});
                myBookmarklet._imCount = null;
                myBookmarklet._imWoAlts = null;
                myBookmarklet.updateInfo();
                link.classList.toggle('active');
                return;
            }

           myBookmarklet._imWoAlts = 0;
            images.forEach(function(img) {
                var altText = img.getAttribute('alt');
                if (!altText) { altText = 'x'; myBookmarklet._imWoAlts++; }
                if (altText) {
                    var infoSpan = document.createElement('span');
                    infoSpan.className = 'dt-alt-info';
                    infoSpan.textContent = altText;
                    img.parentNode.insertBefore(infoSpan, img);
                }
            });
           
           myBookmarklet._imCount = images.length;
           myBookmarklet.updateInfo();

            link.classList.toggle('active');
       };
       
       modalLinks.vwFrames = function() {
           var link = modalLinks._currentElement.closest("li");

            var existingSpans = document.querySelectorAll('.dt-iframe-info');
            existingSpans.forEach(function(span) {span.remove();});

            var iframes = document.querySelectorAll('iframe:not([aria-hidden="true"])');

            if (link.classList.contains("active")) {
                iframes.forEach(function(iframe) {iframe.classList.remove('dt-highlight');});
                myBookmarklet._ifCount = null;
                myBookmarklet.updateInfo();
                link.classList.toggle('active');
                return;
            }

            iframes.forEach(function(iframe) {
                iframe.classList.add('dt-highlight')
                if (!iframe.title) {
                    var infoSpan = document.createElement('span');
                    infoSpan.className = 'dt-iframe-info dt-no-title';
                    if (iframe.name) {
                        infoSpan.textContent = '<iframe❌NO TITLE name="' + iframe.name + '" src="' + iframe.src + '">';
                    } else {
                        infoSpan.textContent = '<iframe❌NO TITLE src="' + iframe.src + '">';
                    }
                    iframe.parentNode.insertBefore(infoSpan, iframe);
                } else {
                    var infoSpan = document.createElement('span');
                    infoSpan.className = 'dt-iframe-info dt-has-title';
                    if (iframe.name) {
                        infoSpan.textContent = '<iframe👍title="' + iframe.title + '" name="' + iframe.name + '" src="' + iframe.src + '">';
                    } else {
                        infoSpan.textContent = '<iframe👍title="' + iframe.title + '" src="' + iframe.src + '">';
                    }
                    iframe.parentNode.insertBefore(infoSpan, iframe);
                }
            });
           
            if (iframes.length > 0) {myBookmarklet.scroll(iframes[0]);}
           
           myBookmarklet._ifCount = iframes.length;
           myBookmarklet.updateInfo();
           
            link.classList.toggle('active');
       };
       
       modalLinks.vwHidden = function() {
            var link = modalLinks._currentElement.closest("li");

            if (link.classList.contains('active')) {
                let hiddenElements = Array.from(document.getElementsByClassName('dt-hidden'));
                hiddenElements.forEach(el => {
                    el.classList.remove("dt-highlight", "dt-hidden", "dt-show");
                });
                
                myBookmarklet._hnCount = null;
                myBookmarklet.updateInfo();

            } else {
                let hiddenByDisplay = Array.from(document.querySelectorAll('div, section, span, ul, op, p, nav, button, iframe, input, textarea, select')).filter(el => getComputedStyle(el).display === 'none' && !el.closest('#dt-modal'));
                let hiddenByVisibility = Array.from(document.querySelectorAll('div, section, span, ul, ol, p, nav, button, iframe')).filter(el => getComputedStyle(el).visibility === 'hidden' && !el.closest('#dt-modal'));
                let hiddenByOverflow = Array.from(document.querySelectorAll('div, section, span, p')).filter(el => getComputedStyle(el).overflow === 'hidden' && !el.closest('#dt-modal'));
                let hiddenElements = hiddenByDisplay.concat(hiddenByVisibility).concat(hiddenByOverflow);

                myBookmarklet._hnCount = 0;
                hiddenElements.forEach(el => {
                    if (getComputedStyle(el).display === 'none') {
                        el.classList.add('dt-highlight', 'dt-hidden', 'dt-show');
                        myBookmarklet._hnCount++;
                    }
                    if (getComputedStyle(el).visibility === 'hidden') {
                        el.classList.add('dt-highlight', 'dt-hidden', 'dt-show');
                        myBookmarklet._hnCount++;
                    }
                    if (getComputedStyle(el).overflow === 'hidden' && el.scrollHeight > el.clientHeight) {
                        el.classList.add('dt-highlight', 'dt-hidden', 'dt-show');                        
                        myBookmarklet._hnCount++;
                    }
                    if (!el.dataset.hasClickListener) {
                        el.addEventListener('click', () => el.classList.remove("dt-highlight", "dt-hidden", "dt-show"));
                        el.dataset.hasClickListener = 'true';
                    }
                });
                
                myBookmarklet.updateInfo();

                if (hiddenElements.length) {
                    myBookmarklet.scroll(hiddenElements[0]);
                }
            }

            link.classList.toggle('active');  
       };
       
        modalLinks.tabHeadlines = function() {
            if (document.querySelector('.dt-headers')) {
                return;
            }

            const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const container = document.createElement('div');
	    const copyText = [];
            container.className = "dt-headers";

            headers.forEach(header => {
                const level = parseInt(header.tagName.substring(1));
		const spaces = '\t'.repeat(level-1);
                const headerDiv = document.createElement('div');
                headerDiv.className = `dt-hx-${level}`;
                headerDiv.innerHTML = `<strong>&lt;${header.tagName}&gt;</strong> - ${header.textContent}`;
		copyText.push(`${spaces}<${header.tagName}> - ${header.textContent.trim()}`);
                container.appendChild(headerDiv);
            });

            document.getElementById('dt-content-headlines-text').innerHTML = "";
            document.getElementById('dt-content-headlines-text').appendChild(container);

            var cIcon = document.createElement('i');
            cIcon.className = 'dt-icon dt-copy';
            cIcon.addEventListener('click', function(){
                this.classList.remove('dt-copy');
                this.classList.add('dt-copied');
                
                myBookmarklet.copy(copyText);
                
                setTimeout(() => {
                    this.classList.remove('dt-copied');
                    this.classList.add('dt-copy');
                }, 1000);
            });
            var sTitle = document.querySelector('#dt-content-headlines div.dt-content-title');
            sTitle.appendChild(cIcon);

            return container;
        };

        modalLinks.tabLinks = function() {
            if (document.querySelector('.dt-links')) {return;}

            const container = document.createElement('div');
            container.className = "dt-links";

            var links = document.querySelectorAll('a:not(#dt-modal *)');
            var items = {external: [], internal: [], other: [], link: document.querySelectorAll('link:not(#dt-modal-style,[rel="stylesheet"])')};

            Array.from(links).forEach(link => {
                const anchor = document.createElement('a');
                anchor.href = link.href;

		if (!anchor.href.trim().toLowerCase().startsWith('javascript:')) {
                if (anchor.hostname && anchor.hostname !== window.location.hostname) {
                    items.external.push(link);
                } else if (anchor.hostname) {
                    items.internal.push(link);
                } else {
                    items.other.push(link);
                }
		}
            });

            if (items.external.length) {
                var div = document.createElement('div');
                div.style.paddingBottom = '.75em';
                div.style.paddingTop = '.75em';
                div.innerHTML = '<code>EXTERNAL</code>';
                container.appendChild(div);
		const copyText = [];

                Array.from(items.external).forEach(link => {
                    const div = document.createElement('div');
                    let output = '';
                    div.className = "dt-flinks";

                    output = '<span>'+link.innerText+'</a>';
                    if (link.getAttribute('rel')) {
                        output += ' <code>['+ link.rel.trim() +']</code>';
                    }
                    output += '</span>';
                    output += '<span><a href="'+link.href+'" target="_blank">' + decodeURIComponent(link.href) + '</a></span>';
                    copyText.push(decodeURIComponent(link.href));
                    div.innerHTML = output;
                    container.appendChild(div);
                });

                var cIcon = document.createElement('i');
                cIcon.className = 'dt-icon dt-copy';
                cIcon.addEventListener('click', function(){
                    this.classList.remove('dt-copy');
                    this.classList.add('dt-copied');
                    myBookmarklet.copy(copyText);

                    setTimeout(() => {
                        this.classList.remove('dt-copied');
                        this.classList.add('dt-copy');
                    }, 1000);
                });
                div.appendChild(cIcon);

            }

            if (items.internal.length) {
                var div = document.createElement('div');
                div.style.paddingBottom = '.75em';
                div.style.paddingTop = '.75em';
                div.innerHTML = '<code>INTERNAL</code>';
                container.appendChild(div);
		const copyText = [];

                Array.from(items.internal).forEach(link => {
                    const div = document.createElement('div');
                    let output = '';
                    div.className = "dt-flinks";

                    output = '<span>'+link.innerText+'</a>';
                    if (link.getAttribute('rel')) {
                        output += ' <code>['+ link.rel.trim() +']</code>';
                    }
                    output += '</span>';
                    output += '<span><a href="'+link.href+'" target="_blank">' + decodeURIComponent(link.href) + '</a></span>';

                    const linkText = decodeURIComponent(link.href).trim();
                    if (linkText) {
                        copyText.push(linkText);
                    }

                    div.innerHTML = output;
                    container.appendChild(div);
                });

                var cIcon = document.createElement('i');
                cIcon.className = 'dt-icon dt-copy';
                cIcon.addEventListener('click', function(){
                    this.classList.remove('dt-copy');
                    this.classList.add('dt-copied');

                    myBookmarklet.copy(copyText);

                    setTimeout(() => {
                        this.classList.remove('dt-copied');
                        this.classList.add('dt-copy');
                    }, 1000);
                });
                div.appendChild(cIcon);

            }

            if (items.other.length) {
                var div = document.createElement('div');
                div.style.paddingBottom = '.75em';
                div.style.paddingTop = '.75em';
                div.innerHTML = '<code>TECHNICAL</code>';
                container.appendChild(div);
		const copyText = [];

                Array.from(items.other).forEach(link => {
                    const div = document.createElement('div');
                    let output = '';
                    div.className = "dt-flinks";

                    output = '<span>'+link.innerText+'</a>';
                    if (link.getAttribute('rel')) {
                        output += ' <code>['+ link.rel.trim() +']</code>';
                    }
                    output += '</span>';
                    output += '<span><a href="'+link.href+'" target="_blank">' + decodeURIComponent(link.href) + '</a></span>';
                    copyText.push(decodeURIComponent(link.href));

                    div.innerHTML = output;
                    container.appendChild(div);
                });

                var cIcon = document.createElement('i');
                cIcon.className = 'dt-icon dt-copy';
                cIcon.addEventListener('click', function(){
                    this.classList.remove('dt-copy');
                    this.classList.add('dt-copied');

                    myBookmarklet.copy(copyText);

                    setTimeout(() => {
                        this.classList.remove('dt-copied');
                        this.classList.add('dt-copy');
                    }, 1000);
                });
                div.appendChild(cIcon);

            }

            if (items.link.length) {
                var div = document.createElement('div');
                div.style.paddingBottom = '.75em';
                div.style.paddingTop = '.75em';
                div.innerHTML = '<code>OTHER [&lt;LINK&gt; TAG]</code>';
                container.appendChild(div);
		const copyText = [];

                Array.from(items.link).forEach(link => {
                    const div = document.createElement('div');
                    let output = '';
                    div.className = "dt-flinks";

                    output = '<span>'+link.innerText+'</a>';
                    if (link.getAttribute('rel')) {
                        output += ' <code>['+ link.rel.trim() +']</code>';
                    }
                    output += '</span>';
                    output += '<span><a href="'+link.href+'" target="_blank">' + decodeURIComponent(link.href) + '</a></span>';
		    copyText.push(link.rel.trim() + ', '+ decodeURIComponent(link.href));

                    div.innerHTML = output;
                    container.appendChild(div);
                });

                var cIcon = document.createElement('i');
                cIcon.className = 'dt-icon dt-copy';
                cIcon.addEventListener('click', function(){
                    this.classList.remove('dt-copy');
                    this.classList.add('dt-copied');

                    myBookmarklet.copy(copyText);

                    setTimeout(() => {
                        this.classList.remove('dt-copied');
                        this.classList.add('dt-copy');
                    }, 1000);
                });
                div.appendChild(cIcon);

            }

            document.getElementById('dt-content-links-text').innerHTML = "";
            document.getElementById('dt-content-links-text').appendChild(container);            
        };
       
       modalLinks.tabMeta = function() {
                if (document.querySelector('.dt-meta')) {return;}
                
                var url = decodeURIComponent(document.location);
                var domain = window.location.hostname;
                
                var title = document.querySelectorAll('head title');
                var meta = document.querySelectorAll('meta:not([name="description"])');
                var descr = document.querySelectorAll('meta[name="description"]');
                var hreflang = document.querySelectorAll('link[hreflang]');
                var canonical = document.querySelectorAll('link[rel="canonical"]');
                var robots = document.querySelector('meta[name="robots"]');
                
                var output = '';

                const container = document.createElement('div');
                container.className = "dt-meta";

                Array.from(title).forEach(item => {
                    const div = document.createElement('div');
                    div.className = "dt-flex";
                    
		    const escapedTextContent = JSON.stringify(item.textContent);
                    output = `<span class='dt-pointer' title='Click to copy title to the clipboard' onclick='myBookmarklet.copy([${escapedTextContent}])'>TITLE (${item.textContent.length}):</span> <span><code>${item.textContent}</code></span>`;
                    
                    div.innerHTML = output;
                    container.appendChild(div);
                });

                Array.from(descr).forEach(item => {
                    const div = document.createElement('div');
                    div.className = "dt-flex";
                    var style = (item.content.length > 40) ? 'style="flex-basis: 100%;"' : '';
		    const escapedTextContent = JSON.stringify(item.content);
                    output = `<span class='dt-pointer' title='Click to copy description to the clipboard' onclick='myBookmarklet.copy([${escapedTextContent}])'>DESCR (${item.content.length}):</span> <span ${style}><code>${item.content}</code></span>`;
                    
                    div.innerHTML = output;
                    container.appendChild(div);
                });

                container.appendChild((() => { const div = document.createElement('div'); div.innerHTML = '<p>&nbsp;</p>'; return div; })());

                const div = document.createElement('div');
                div.className = 'dt-flex';
                div.innerHTML = '<span>Original URL:</span> <span><code>'+ url + '</code></span>';
                container.appendChild(div);

                
                Array.from(canonical).forEach(item => {
                    const div = document.createElement('div');
                    div.className = "dt-flex";
			var style = decodeURIComponent(item.href) == url ? '' : 'palegreen';

		    const escapedTextContent = JSON.stringify(decodeURIComponent(item.href));
                    output = `<span  class='dt-pointer' title='Click to copy canonical link to the clipboard' onclick='myBookmarklet.copy([${escapedTextContent}])'>Canonical:</span> <span><code style="background-color:${style};">${decodeURIComponent(item.href)}</code></span>`;
                    
                    div.innerHTML = output;
                    container.appendChild(div);
                });
                
                if (robots) {
                    const div = document.createElement('div');
                    div.className = 'dt-flex';
                    var style = robots.content.includes('noindex') ? 'red' : 'lightblue';
                    div.innerHTML = '<span>Robots:</span> <span><code style="background-color:'+style+';">'+ robots.content + '</code></span>';
                    container.appendChild(div);
                }
                
                
                container.appendChild((() => { const div = document.createElement('div'); div.innerHTML = '<p>&nbsp;</p>'; return div; })());


                Array.from(hreflang).forEach(item => {
                    const div = document.createElement('div');
                    
                    const attrs = [];  
                    for (let j = 0; j < item.attributes.length; j++) {
                        const attr = item.attributes[j];
                        if (attr.name == 'hreflang') {
                            attrs.push(`${attr.name}="<code>${attr.value}</code>"`);
                        } else {
                            attrs.push(`${attr.name}="<b>${decodeURIComponent(attr.value)}</b>"`);
                        }
                    }
                    output = `&lt;${item.tagName.toLowerCase()} ${attrs.join(' ')}&gt;`;
                    
                    div.innerHTML = output;
                    container.appendChild(div);
                });

                container.appendChild((() => { const div = document.createElement('div'); div.innerHTML = '<p>&nbsp;</p>'; return div; })());


                Array.from(meta).forEach(item => {
                    const div = document.createElement('div');
                    
                    const attrs = [];  
                    for (let j = 0; j < item.attributes.length; j++) {
                        const attr = item.attributes[j];
                        if (attr.name == 'name') {
                            attrs.push(`${attr.name}="<code>${attr.value}</code>"`);
                        } else if (attr.value.includes('http')) {
                            attrs.push(`${attr.name}="<b>${decodeURIComponent(attr.value)}</b>"`);
                        } else {
                            attrs.push(`${attr.name}="<b>${attr.value}</b>"`);
                        }
                    }
                    output = `&lt;${item.tagName.toLowerCase()} ${attrs.join(' ')}&gt;`;
                    
                    div.innerHTML = output;
                    container.appendChild(div);
                });

                document.getElementById('dt-content-meta-text').innerHTML = "";
                document.getElementById('dt-content-meta-text').appendChild(container);
       };
        
    if (!document.getElementById('dt-modal')) {
            
        const existingStyleEl = document.getElementById('dt-modal-style');
        if (!existingStyleEl) {
            const styleEl = document.createElement('style');
            styleEl.id = 'dt-modal-style';
            document.head.appendChild(styleEl);
            styleEl.textContent = dtmodalStyle;
        }
        
        document.body.insertAdjacentHTML('beforeend', dtModalHTML);

        document.getElementById('dt-close-button').addEventListener('click', function() {
           document.getElementById('dt-modal').classList.toggle('dt-hidden');
        });

        document.addEventListener('keydown', function(event){
            if (event.key === 'Escape' || event.keyCode === 27) {
                document.getElementById('dt-modal').classList.add('dt-hidden');
            }
        });

        document.addEventListener('selectionchange', () => {
            const selection = document.getSelection();
            var mess = document.getElementById('dt-sel-txt');
            if (!mess) return;
            
            if (selection.rangeCount > 0) {
                const selectedText = selection.toString();
                if (selectedText) {
                    const numSymbols = selectedText.length;
                    const numWords = selectedText.trim().split(/\s+/).length;
                    mess.innerHTML = 'Selected text: ' + parseInt(numWords) + ' words, ' + parseInt(numSymbols) + ' symbols';
                    mess.classList.remove('dt-hide');
                } else {
                    mess.innerHTML = '';
                    mess.classList.add('dt-hide');
                }
            } else {
                    mess.innerHTML = '';
                    mess.classList.add('dt-hide');
            }
        });

        document.querySelectorAll('.dt-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                myBookmarklet.activateTab(this);
            });
        });

        if (typeof jQuery !== 'undefined') {
            jQuery(function ($) {
                var events = $._data(document.body, 'events');
                if (events && events.mousedown) {
                    $(document.body).off('mousedown');
                    console.log('Removed mousedown event listener from document.body');
                } else {
                    console.log('No mousedown event listener found on document.body');
                }
                
                if (events && events.copy) {
                    $(document).off('copy');
                    console.log('Removed copy event listener from document');
                } else {
                    console.log('No copy event listener found on document');
                }

            });
        }
        
        if (typeof disableFullPageScroll === 'function') {
            disableFullPageScroll();
        }
        
        document.oncopy = null;
        document.ondragstart = null;
        document.onselectstart = null;
        document.oncontextmenu = null;

        
        ['unselectable', 'oncontextmenu', 'onselectstart', 'oncopy'].forEach(function(attr) {
            var elements = document.querySelectorAll(`[${attr}]`);
            elements.forEach(function(element) {
                element.removeAttribute(attr);
            });
        });

        document.querySelectorAll('[data-func]').forEach(function(element) {
            element.addEventListener('click', function(event) {
                var functionName = element.getAttribute('data-func');
                if (typeof modalLinks[functionName] === 'function') {
                    modalLinks._currentElement = element;
                    modalLinks[functionName]();
                } else {
                    console.error('Function "' + functionName + '" is not defined');
                }
            });
        });


    } else {
	   document.getElementById('dt-modal').classList.toggle('dt-hidden');
    }
