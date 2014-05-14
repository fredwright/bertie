function optimizeYouTubeEmbeds1(){$("iframe").each(function(e,t){if($(t).attr("src")&&$(t).attr("src").match(/http(s)?:\/\/www\.youtube\.com/)){var n=$(t).attr("src"),i=$(t).width(),a=$(t).height(),r=Math.ceil(i/2-38.5),s=Math.ceil(a/2+38.5),o=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,u=n.match(o)?RegExp.$1:!1;if(0==u)return!0;var c='<div style="width:'+i+"px; height:"+a+'px; margin:0 auto"><a href="#"  onclick="LoadYoutubeVidOnPreviewClick1(\''+u+"',"+i+","+a+');return false;" id="skipser-youtubevid-'+u+'"><img src="http://i.ytimg.com/vi/'+u+'/hqdefault.jpg" style="width:'+i+"px; height:"+a+"px;\" /><div style=\"background: url('data:image/png;base64,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') no-repeat scroll 0 0 transparent;height: 77px;width: 77px; position:relative; margin-left:"+r+"px; margin-top:-"+s+'px;"></div></a></div>';$(t).after(c),$(t).remove()}})}function LoadYoutubeVidOnPreviewClick1(e,t,n){var i='<iframe src="https://www.youtube.com/embed/'+e+'/?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1" width="'+t+'" height="'+n+'" frameborder=0 allowfullscreen style="border:1px solid #ccc;" ></iframe>';$("#skipser-youtubevid-"+e).after(i),$("#skipser-youtubevid-"+e).remove()}function initForm(){initializeFocus();var e=document.getElementsByTagName("form")[0];addEvent(e,"submit",disableSubmitButton),ifInstructs(),showRangeCounters()}function disableSubmitButton(){document.getElementById("saveForm").disabled=!0}function initializeFocus(){var e=getElementsByClassName(document,"*","field");for(i=0;i<e.length;i++)"radio"==e[i].type||"checkbox"==e[i].type?(e[i].onclick=function(){highlight(this,4)},e[i].onfocus=function(){highlight(this,4)}):e[i].onfocus=e[i].className.match("addr")||e[i].className.match("other")?function(){highlight(this,3)}:function(){highlight(this,2)}}function highlight(e,t){if(2==t)var n=e.parentNode.parentNode;if(3==t)var n=e.parentNode.parentNode.parentNode;if(4==t)var n=e.parentNode.parentNode.parentNode.parentNode;addClassName(n,"focused",!0);var a=getElementsByClassName(document,"*","focused");for(i=0;i<a.length;i++)a[i]!=n&&removeClassName(a[i],"focused")}function ifInstructs(){var e=document.getElementById("public");if(e){removeClassName(e,"noI");var t=getElementsByClassName(document,"*","instruct");""==t&&addClassName(e,"noI",!0),e.offsetWidth<=450&&addClassName(e,"altInstruct",!0)}}function showRangeCounters(){for(counters=getElementsByClassName(document,"em","currently"),i=0;i<counters.length;i++)counters[i].style.display="inline"}function validateRange(e,t){if(document.getElementById("rangeUsedMsg"+e)){var n=document.getElementById("Field"+e),a=document.getElementById("rangeUsedMsg"+e);switch(t){case"character":a.innerHTML=n.value.length;break;case"word":var r=n.value;r=r.replace(/\n/g," ");var s=r.split(" "),o=0;for(i=0;i<s.length;i++)""!=s[i].replace(/\s+$/,"")&&o++;a.innerHTML=o;break;case"digit":a.innerHTML=n.value.length}}}function getElementsByClassName(e,t,n){var i="*"==t&&e.all?e.all:e.getElementsByTagName(t),a=new Array;n=n.replace(/\-/g,"\\-");for(var r,s=new RegExp("(^|\\s)"+n+"(\\s|$)"),o=0;o<i.length;o++)r=i[o],s.test(r.className)&&a.push(r);return a}function addClassName(e,t,n){if(e.className){var i=e.className.split(" ");if(n)for(var a=t.toUpperCase(),r=0;r<i.length;r++)i[r].toUpperCase()==a&&(i.splice(r,1),r--);i[i.length]=t,e.className=i.join(" ")}else e.className=t}function removeClassName(e,t){if(e.className){for(var n=e.className.split(" "),i=t.toUpperCase(),a=0;a<n.length;a++)n[a].toUpperCase()==i&&(n.splice(a,1),a--);e.className=n.join(" ")}}function addEvent(e,t,n){e.attachEvent?(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event)},e.attachEvent("on"+t,e[t+n])):e.addEventListener(t,n,!1)}!function(e,t){function n(e,t,n,i,a,r,s){var o;if(s="number"==typeof s?s:0,e.css(n,i+r),o=e.width(),o>=t){if(e.css(n,""),o==t)return{match:"exact",size:parseFloat((parseFloat(i)-.1).toFixed(3))};var u=t-s,c=o-t;return{match:"estimate",size:parseFloat((parseFloat(i)-("word-spacing"===n&&s&&u>c?0:a)).toFixed(3))}}return o}function i(e,i,a,r,s){var o=e.clone(!0).addClass("bigtext-cloned").css({fontFamily:e.css("font-family"),textTransform:e.css("text-transform"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),position:"absolute",left:u.DEBUG_MODE?0:-9999,top:u.DEBUG_MODE?0:-9999}).appendTo(document.body),c=[],l=[],d=[],p=[];return i.css("float","left").each(function(){var e,i=t(this),o=u.test.noFractionalFontSize?[8,4,1]:[8,4,1,.1];if(i.hasClass(u.EXEMPT_CLASS))return c.push(null),p.push(null),void d.push(!1);var l=32,h=parseFloat(i.css("font-size")),f=(i.width()/h).toFixed(6);newFontSize=parseInt(a/f,10)-l;e:for(var g=0,m=o.length;m>g;g++)t:for(var v=1,w=10;w>=v;v++){if(newFontSize+v*o[g]>r){newFontSize=r;break e}if(e=n(i,a,"font-size",newFontSize+v*o[g],o[g],"px",e),"number"!=typeof e){if(newFontSize=e.size,"exact"==e.match)break e;break t}}p.push(a/newFontSize),newFontSize>r?(c.push(r),d.push(!1)):s&&s>newFontSize?(c.push(s),d.push(!0)):(c.push(newFontSize),d.push(!1))}).each(function(e){var i,r=t(this),s=0,o=1;if(r.hasClass(u.EXEMPT_CLASS))return void l.push(null);r.css("font-size",c[e]+"px");for(var d=1,p=3;p>d;d+=o)if(i=n(r,a,"word-spacing",d,o,"px",i),"number"!=typeof i){s=i.size;break}r.css("font-size",""),l.push(s)}).removeAttr("style"),u.DEBUG_MODE?o.css({"background-color":"rgba(255,255,255,.4)"}):o.remove(),{fontSizes:c,wordSpacings:l,ratios:p,minFontSizes:d}}var a=0,r=t("head"),s=e.BigText,o=t.fn.bigtext,u={DEBUG_MODE:!1,DEFAULT_MIN_FONT_SIZE_PX:null,DEFAULT_MAX_FONT_SIZE_PX:528,GLOBAL_STYLE_ID:"bigtext-style",STYLE_ID:"bigtext-id",LINE_CLASS_PREFIX:"bigtext-line",EXEMPT_CLASS:"bigtext-exempt",noConflict:function(n){return n&&(t.fn.bigtext=o,e.BigText=s),u},test:{noFractionalFontSize:function(){if(!("getComputedStyle"in e&&"body"in document))return!0;var n=t("<div/>").css({position:"absolute","font-size":"14.1px"}).appendTo(document.body).get(0),i=e.getComputedStyle(n,null);return i?"14px"===i.getPropertyValue("font-size"):!0}()},init:function(){t("#"+u.GLOBAL_STYLE_ID).length||r.append(u.generateStyleTag(u.GLOBAL_STYLE_ID,[".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }",".bigtext ."+u.EXEMPT_CLASS+", .bigtext ."+u.EXEMPT_CLASS+" * { white-space: normal; }"]))},bindResize:function(n,i){t.throttle?t(e).unbind(n).bind(n,t.throttle(100,i)):(t.fn.smartresize&&(n="smartresize."+n),t(e).unbind(n).bind(n,i))},getStyleId:function(e){return u.STYLE_ID+"-"+e},generateStyleTag:function(e,n){return t("<style>"+n.join("\n")+"</style>").attr("id",e)},clearCss:function(e){var n=u.getStyleId(e);t("#"+n).remove()},generateCss:function(e,t,n,i){var a=[];u.clearCss(e);for(var r=0,s=t.length;s>r;r++)a.push("#"+e+" ."+u.LINE_CLASS_PREFIX+r+" {"+(i[r]?" white-space: normal;":"")+(t[r]?" font-size: "+t[r]+"px;":"")+(n[r]?" word-spacing: "+n[r]+"px;":"")+"}");return u.generateStyleTag(u.getStyleId(e),a)},jQueryMethod:function(e){return u.init(),e=t.extend({minfontsize:u.DEFAULT_MIN_FONT_SIZE_PX,maxfontsize:u.DEFAULT_MAX_FONT_SIZE_PX,childSelector:"",resize:!0},e||{}),this.each(function(){var n=t(this).addClass("bigtext"),s=n.width(),o=n.attr("id"),c=e.childSelector?n.find(e.childSelector):n.children();o||(o="bigtext-id"+a++,n.attr("id",o)),e.resize&&u.bindResize("resize.bigtext-event-"+o,function(){u.jQueryMethod.call(t("#"+o),e)}),u.clearCss(o),c.addClass(function(e,t){return[t.replace(new RegExp("\\b"+u.LINE_CLASS_PREFIX+"\\d+\\b"),""),u.LINE_CLASS_PREFIX+e].join(" ")});var l=i(n,c,s,e.maxfontsize,e.minfontsize);r.append(u.generateCss(o,l.fontSizes,l.wordSpacings,l.minFontSizes))})}};t.fn.bigtext=u.jQueryMethod,e.BigText=u}(this,jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,i,a){return jQuery.easing[jQuery.easing.def](e,t,n,i,a)},easeInQuad:function(e,t,n,i,a){return i*(t/=a)*t+n},easeOutQuad:function(e,t,n,i,a){return-i*(t/=a)*(t-2)+n},easeInOutQuad:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,i,a){return i*(t/=a)*t*t+n},easeOutCubic:function(e,t,n,i,a){return i*((t=t/a-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,i,a){return i*(t/=a)*t*t*t+n},easeOutQuart:function(e,t,n,i,a){return-i*((t=t/a-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,i,a){return i*(t/=a)*t*t*t*t+n},easeOutQuint:function(e,t,n,i,a){return i*((t=t/a-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,i,a){return-i*Math.cos(t/a*(Math.PI/2))+i+n},easeOutSine:function(e,t,n,i,a){return i*Math.sin(t/a*(Math.PI/2))+n},easeInOutSine:function(e,t,n,i,a){return-i/2*(Math.cos(Math.PI*t/a)-1)+n},easeInExpo:function(e,t,n,i,a){return 0==t?n:i*Math.pow(2,10*(t/a-1))+n},easeOutExpo:function(e,t,n,i,a){return t==a?n+i:i*(-Math.pow(2,-10*t/a)+1)+n},easeInOutExpo:function(e,t,n,i,a){return 0==t?n:t==a?n+i:(t/=a/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,i,a){return-i*(Math.sqrt(1-(t/=a)*t)-1)+n},easeOutCirc:function(e,t,n,i,a){return i*Math.sqrt(1-(t=t/a-1)*t)+n},easeInOutCirc:function(e,t,n,i,a){return(t/=a/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,i,a){var r=1.70158,s=0,o=i;if(0==t)return n;if(1==(t/=a))return n+i;if(s||(s=.3*a),o<Math.abs(i)){o=i;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(i/o);return-(o*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/s))+n},easeOutElastic:function(e,t,n,i,a){var r=1.70158,s=0,o=i;if(0==t)return n;if(1==(t/=a))return n+i;if(s||(s=.3*a),o<Math.abs(i)){o=i;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(i/o);return o*Math.pow(2,-10*t)*Math.sin(2*(t*a-r)*Math.PI/s)+i+n},easeInOutElastic:function(e,t,n,i,a){var r=1.70158,s=0,o=i;if(0==t)return n;if(2==(t/=a/2))return n+i;if(s||(s=.3*a*1.5),o<Math.abs(i)){o=i;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(i/o);return 1>t?-.5*o*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/s)+n:o*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/s)*.5+i+n},easeInBack:function(e,t,n,i,a,r){return void 0==r&&(r=1.70158),i*(t/=a)*t*((r+1)*t-r)+n},easeOutBack:function(e,t,n,i,a,r){return void 0==r&&(r=1.70158),i*((t=t/a-1)*t*((r+1)*t+r)+1)+n},easeInOutBack:function(e,t,n,i,a,r){return void 0==r&&(r=1.70158),(t/=a/2)<1?i/2*t*t*(((r*=1.525)+1)*t-r)+n:i/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+n},easeInBounce:function(e,t,n,i,a){return i-jQuery.easing.easeOutBounce(e,a-t,0,i,a)+n},easeOutBounce:function(e,t,n,i,a){return(t/=a)<1/2.75?7.5625*i*t*t+n:2/2.75>t?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,i,a){return a/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,i,a)+n:.5*jQuery.easing.easeOutBounce(e,2*t-a,0,i,a)+.5*i+n}}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var i=document.createElement("div"),a=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],r="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";i.className="fit-vids-style",i.id="fit-vids-style",i.style.display="none",i.innerHTML=r,a.parentNode.insertBefore(i,a)}return t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&t.push(n.customSelector);var i=e(this).find(t.join(","));i=i.not("object object"),i.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),a=n/i;if(!t.attr("id")){var r="fitvid"+Math.floor(999999*Math.random());t.attr("id",r)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper"},n=e(window),i=e(document),a=[],r=n.height(),s=function(){for(var t=n.scrollTop(),s=i.height(),o=s-r,u=t>o?o-t:0,c=0;c<a.length;c++){var l=a[c],d=l.stickyWrapper.offset().top,p=d-l.topSpacing-u;if(p>=t)null!==l.currentTop&&(l.stickyElement.css("position","").css("top","").removeClass(l.className),l.stickyElement.parent().removeClass(l.className),l.currentTop=null,e(".bg1").removeClass("hide"),e(".bg2").addClass("hide"));else{var h=s-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-t-u;0>h?h+=l.topSpacing:h=l.topSpacing,l.currentTop!=h&&(l.stickyElement.css("position","fixed").css("top",h).addClass(l.className),l.stickyElement.parent().addClass(l.className),l.currentTop=h,e(".bg1").addClass("hide"),e(".bg2").removeClass("hide"))}}},o=function(){r=n.height()},u={init:function(n){var i=e.extend(t,n);return this.each(function(){var t=e(this);stickyId=t.attr("id"),wrapper=e("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(i.wrapperClassName),t.wrapAll(wrapper);var n=t.parent();n.css("height",t.outerHeight()),a.push({topSpacing:i.topSpacing,bottomSpacing:i.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:n,className:i.className})})},update:s};window.addEventListener?(window.addEventListener("scroll",s,!1),window.addEventListener("resize",o,!1)):window.attachEvent&&(window.attachEvent("onscroll",s),window.attachEvent("onresize",o)),e.fn.sticky=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.sticky"):u.init.apply(this,arguments)},e(function(){setTimeout(s,0)})}(jQuery),addEvent(window,"load",initForm);var highlight_array=new Array;