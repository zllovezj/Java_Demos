(function(){var af=window,F=document,s=navigator,V=s.userAgent,al=af.screen,i=af.location.href;var aA="https:"==af.location.protocol?"https://s":"http://",av="beacon.sina.com.cn";var N=aA+av+"/a.gif?",z=aA+av+"/g.gif?",Q=aA+av+"/f.gif?",ae=aA+av+"/e.gif?",ay=aA+"beacon.sinauda.com/i.gif?";var ax=F.referrer.toLowerCase();var Z="SINAGLOBAL",X="FSINAGLOBAL",H="Apache",P="ULV",k="SUP",aB="UOR",E="_s_acc",W="_s_tentry",n=false,aw=false,B=(document.domain=="sina.com.cn")?true:false;var o=0;var aC=false,A=false;var aj="";var l=16777215,Y=0,C,K=0;var r="",b="",a="";var M=[],R=[],I=[];var u=0;var v=0;var p="";var ak=false;var w=false;function O(){var e=document.createElement("iframe");e.src=aA+av+"/data.html?"+new Date().getTime();e.id="sudaDataFrame";e.style.height="0px";e.style.width="1px";e.style.overflow="hidden";e.frameborder="0";e.scrolling="no";document.getElementsByTagName("head")[0].appendChild(e)}function j(){var e=document.createElement("iframe");e.src=aA+av+"/ckctl.html";e.id="ckctlFrame";e.style.height="0px";e.style.width="1px";e.style.overflow="hidden";e.frameborder="0";e.scrolling="no";document.getElementsByTagName("head")[0].appendChild(e)}function q(){var e=document.createElement("script");e.src=aA+av+"/h.js";document.getElementsByTagName("head")[0].appendChild(e)}function h(aE,D){var aD=F.getElementsByName(aE);var e=(D>0)?D:0;return(aD.length>e)?aD[e].content:""}function m(){var aF=F.getElementsByName("sudameta");var aG=[];for(var e=0;e<aF.length;e++){var aE=aF[e].content;if(aE){if(aE.indexOf(";")!=-1){var aH=aE.split(";");for(var aD=0;aD<aH.length;aD++){var D=at(aH[aD]);if(!D){continue}aG.push(D)}}else{aG.push(aE)}}}return aG}function U(aH,aD,aF,aE){if(aH==""){return""}aE=(aE=="")?"=":aE;aD+=aE;var aG=aH.indexOf(aD);if(aG<0){return""}aG+=aD.length;var D=aH.indexOf(aF,aG);if(D<aG){D=aH.length}return aH.substring(aG,D)}function t(e){if(undefined==e||""==e){return""}return U(F.cookie,e,";","")}function ap(aF,e,D,aE){if(e!=null){if((undefined==aE)||(null==aE)){aE="sina.com.cn"}if((undefined==D)||(null==D)||(""==D)){F.cookie=aF+"="+e+";domain="+aE+";path=/"}else{var aD=new Date();var aG=aD.getTime();aG=aG+86400000*D;aD.setTime(aG);aG=aD.getTime();F.cookie=aF+"="+e+";domain="+aE+";expires="+aD.toUTCString()+";path=/"}}}function f(aD){try{var D=document.getElementById("sudaDataFrame").contentWindow.storage;return D.get(aD)}catch(aE){return false}}function ao(aD,aE){try{var D=document.getElementById("sudaDataFrame").contentWindow.storage;D.set(aD,aE);return true}catch(aF){return false}}function L(){var aG=15;var aD=window.SUDA.etag;if(!B){return"-"}if(u==0){O();q()}if(aD&&aD!=undefined){w=true}ls_gid=f(Z);if(ls_gid===false||w==false){return false}else{ak=true}if(ls_gid&&ls_gid.length>aG){ap(Z,ls_gid,3650);n=true;return ls_gid}else{if(aD&&aD.length>aG){ap(Z,aD,3650);aw=true}var D=0,aF=500;var aE=setInterval((function(){var e=t(Z);if(w){e=aD}D+=1;if(D>3){clearInterval(aE)}if(e.length>aG){clearInterval(aE);ao(Z,e)}}),aF);return w?aD:t(Z)}}function T(e,aE,aD){var D=e;if(D==null){return false}aE=aE||"click";if((typeof aD).toLowerCase()!="function"){return}if(D.attachEvent){D.attachEvent("on"+aE,aD)}else{if(D.addEventListener){D.addEventListener(aE,aD,false)}else{D["on"+aE]=aD}}return true}function ad(){if(window.event!=null){return window.event}else{if(window.event){return window.event}var aD=arguments.callee.caller;var D;var aE=0;while(aD!=null&&aE<40){D=aD.arguments[0];if(D&&(D.constructor==Event||D.constructor==MouseEvent||D.constructor==KeyboardEvent)){return D}aE++;aD=aD.caller}return D}}function g(D){D=D||ad();if(!D.target){D.target=D.srcElement;D.pageX=D.x;D.pageY=D.y}if(typeof D.layerX=="undefined"){D.layerX=D.offsetX}if(typeof D.layerY=="undefined"){D.layerY=D.offsetY}return D}function at(aE){if(typeof aE!=="string"){throw"trim need a string as parameter"}var e=aE.length;var aD=0;var D=/(\u3000|\s|\t|\u00A0)/;while(aD<e){if(!D.test(aE.charAt(aD))){break}aD+=1}while(e>aD){if(!D.test(aE.charAt(e-1))){break}e-=1}return aE.slice(aD,e)}function c(e){return Object.prototype.toString.call(e)==="[object Array]"}function J(aD,aH){var aJ=at(aD).split("&");var aI={};var D=function(aL){if(aH){try{return decodeURIComponent(aL)}catch(aM){return aL}}else{return aL}};for(var aF=0,aG=aJ.length;aF<aG;aF++){if(aJ[aF]){var aE=aJ[aF].split("=");var e=aE[0];var aK=aE[1];if(aE.length<2){aK=e;e="$nullName"}if(!aI[e]){aI[e]=D(aK)}else{if(c(aI[e])!=true){aI[e]=[aI[e]]}aI[e].push(D(aK))}}}return aI}function ab(D,aE){for(var aD=0,e=D.length;aD<e;aD++){aE(D[aD],aD)}}function ai(D){var e=new RegExp("^http(?:s)?://([^/]+)","im");if(D.match(e)){return D.match(e)[1].toString()}else{return""}}function ah(aK){try{var aH="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";var aM=function(e){var aN="",aO=0;for(;aO<e.length;aO++){aN+="%"+aD(e[aO])}return decodeURIComponent(aN)};var aD=function(e){var aN="0"+e.toString(16);return aN.length<=2?aN:aN.substr(1)};var aL=function(aU,aR,aN){if(typeof(aU)=="string"){aU=aU.split("")}var aT=function(a3,a5){for(var a4=0;a4<a3.length;a4++){if(a3[a4]==a5){return a4}}return -1};var aO=[];var a2,a0,aX="";var a1,aZ,aW,aV="";if(aU.length%4!=0){}var e=/[^A-Za-z0-9\+\/\=]/g;var aY=aH.split("");if(aR=="urlsafe"){e=/[^A-Za-z0-9\-_\=]/g;aY=D.split("")}var aQ=0;if(aR=="binnary"){aY=[];for(aQ=0;aQ<=64;aQ++){aY[aQ]=aQ+128}}if(aR!="binnary"&&e.exec(aU.join(""))){return aN=="array"?[]:""}aQ=0;do{a1=aT(aY,aU[aQ++]);aZ=aT(aY,aU[aQ++]);aW=aT(aY,aU[aQ++]);aV=aT(aY,aU[aQ++]);a2=(a1<<2)|(aZ>>4);a0=((aZ&15)<<4)|(aW>>2);aX=((aW&3)<<6)|aV;aO.push(a2);if(aW!=64&&aW!=-1){aO.push(a0)}if(aV!=64&&aV!=-1){aO.push(aX)}a2=a0=aX="";a1=aZ=aW=aV=""}while(aQ<aU.length);if(aN=="array"){return aO}var aS="",aP=0;for(;aP<aO.lenth;aP++){aS+=String.fromCharCode(aO[aP])}return aS};var aE=[];var aJ=aK.substr(0,3);var aG=aK.substr(3);switch(aJ){case"v01":for(var aF=0;aF<aG.length;aF+=2){aE.push(parseInt(aG.substr(aF,2),16))}return decodeURIComponent(aM(aL(aE,"binnary","array")));break;case"v02":aE=aL(aG,"urlsafe","array");return aM(aL(aE,"binnary","array"));break;default:return decodeURIComponent(aK)}}catch(aI){return""}}var am={screenSize:function(){return(l&8388608==8388608)?al.width+"x"+al.height:""},colorDepth:function(){return(l&4194304==4194304)?al.colorDepth:""},appCode:function(){return(l&2097152==2097152)?s.appCodeName:""},appName:function(){return(l&1048576==1048576)?((s.appName.indexOf("Microsoft Internet Explorer")>-1)?"MSIE":s.appName):""},cpu:function(){return(l&524288==524288)?(s.cpuClass||s.oscpu):""},platform:function(){return(l&262144==262144)?(s.platform):""},jsVer:function(){if(l&131072!=131072){return""}var aF,e,aH,aD=1,aE=0,D=(s.appName.indexOf("Microsoft Internet Explorer")>-1)?"MSIE":s.appName,aG=s.appVersion;if("MSIE"==D){e="MSIE";aF=aG.indexOf(e);if(aF>=0){aH=window.parseInt(aG.substring(aF+5));if(3<=aH){aD=1.1;if(4<=aH){aD=1.3}}}}else{if(("Netscape"==D)||("Opera"==D)||("Mozilla"==D)){aD=1.3;e="Netscape6";aF=aG.indexOf(e);if(aF>=0){aD=1.5}}}return aD},network:function(){if(l&65536!=65536){return""}var D="";D=(s.connection&&s.connection.type)?s.connection.type:D;try{F.body.addBehavior("#default#clientCaps");D=F.body.connectionType}catch(aD){D="unkown"}return D},language:function(){return(l&32768==32768)?(s.systemLanguage||s.language):""},timezone:function(){return(l&16384==16384)?(new Date().getTimezoneOffset()/60):""},flashVer:function(){if(l&8192!=8192){return""}var aG=s.plugins,aD,aH,aJ;if(aG&&aG.length){for(var aF in aG){aH=aG[aF];if(aH.description==null){continue}if(aD!=null){break}aJ=aH.description.toLowerCase();if(aJ.indexOf("flash")!=-1){aD=aH.version?parseInt(aH.version):aJ.match(/\d+/);continue}}}else{if(window.ActiveXObject){for(var aE=10;aE>=2;aE--){try{var D=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+aE);if(D){aD=aE;break}}catch(aI){}}}else{if(V.indexOf("webtv/2.5")!=-1){aD=3}else{if(V.indexOf("webtv")!=-1){aD=2}}}}return aD},javaEnabled:function(){if(l&4096!=4096){return""}var aD=s.plugins,D=s.javaEnabled(),aE,aF;if(D==true){return 1}if(aD&&aD.length){for(var e in aD){aE=aD[e];if(aE.description==null){continue}if(D!=null){break}aF=aE.description.toLowerCase();if(aF.indexOf("java plug-in")!=-1){D=parseInt(aE.version);continue}}}else{if(window.ActiveXObject){D=(new ActiveXObject("JavaWebStart.IsInstalled")!=null)}}return D?1:0}};var ac={pageId:function(D){var aD=D||r,aH="-9999-0-0-1";if((undefined==aD)||(""==aD)){try{var aE=h("publishid");if(""!=aE){var aG=aE.split(",");if(aG.length>0){if(aG.length>=3){aH="-9999-0-"+aG[1]+"-"+aG[2]}aD=aG[0]}}else{aD="0"}}catch(aF){aD="0"}aD=aD+aH}return aD},sessionCount:function(){var e=t("_s_upa");if(e==""){e=0}return e},excuteCount:function(){return SUDA.sudaCount},referrer:function(){if(l&2048!=2048){return""}var e=/^[^\?&#]*.swf([\?#])?/;if((ax=="")||(ax.match(e))){var D=U(i,"ref","&","");if(D!=""){return escape(D)}}return escape(ax)},isHomepage:function(){if(l&1024!=1024){return""}var aD="";try{F.body.addBehavior("#default#homePage");aD=F.body.isHomePage(i)?"Y":"N"}catch(D){aD="unkown"}return aD},PGLS:function(){return(l&512==512)?h("stencil"):""},ZT:function(){if(l&256!=256){return""}var e=h("subjectid");e.replace(",",".");e.replace(";",",");return escape(e)},mediaType:function(){return(l&128==128)?h("mediaid"):""},domCount:function(){return(l&64==64)?F.getElementsByTagName("*").length:""},iframeCount:function(){return(l&32==32)?F.getElementsByTagName("iframe").length:""}};var ar={visitorId:function(){var D=15;var e=t(Z);if(e.length>D&&u==0){return e}else{return}},fvisitorId:function(e){if(!e){var e=t(X);return e}else{ap(X,e,3650)}},sessionId:function(){var e=t(H);if(""==e){var D=new Date();e=Math.random()*10000000000000+"."+D.getTime()}return e},flashCookie:function(e){if(e){}else{return p}},lastVisit:function(){var aD=t(H);var aF=t(P);var aE=aF.split(":");var aG="",D;if(aE.length>=6){if(aD!=aE[4]){D=new Date();var e=new Date(window.parseInt(aE[0]));aE[1]=window.parseInt(aE[1])+1;if(D.getMonth()!=e.getMonth()){aE[2]=1}else{aE[2]=window.parseInt(aE[2])+1}if(((D.getTime()-e.getTime())/86400000)>=7){aE[3]=1}else{if(D.getDay()<e.getDay()){aE[3]=1}else{aE[3]=window.parseInt(aE[3])+1}}aG=aE[0]+":"+aE[1]+":"+aE[2]+":"+aE[3];aE[5]=aE[0];aE[0]=D.getTime();ap(P,aE[0]+":"+aE[1]+":"+aE[2]+":"+aE[3]+":"+aD+":"+aE[5],360)}else{aG=aE[5]+":"+aE[1]+":"+aE[2]+":"+aE[3]}}else{D=new Date();aG=":1:1:1";ap(P,D.getTime()+aG+":"+aD+":",360)}return aG},userNick:function(){if(aj!=""){return aj}var aD=unescape(t(k));if(aD!=""){var D=U(aD,"ag","&","");var e=U(aD,"user","&","");var aE=U(aD,"uid","&","");var aG=U(aD,"sex","&","");var aF=U(aD,"dob","&","");aj=D+":"+e+":"+aE+":"+aG+":"+aF;return aj}else{return""}},userOrigin:function(){if(l&4!=4){return""}var e=t(aB);var D=e.split(":");if(D.length>=2){return D[0]}else{return""}},advCount:function(){return(l&2==2)?t(E):""},setUOR:function(){var aI=t(aB),aM="",D="",aL="",aF="",aJ=i.toLowerCase(),aD=F.referrer.toLowerCase();var aN=/[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;var aH=new Date();if(aJ.match(aN)){aL=aJ.match(aN)[0]}else{if(aD.match(aN)){aL=aD.match(aN)[0]}}if(aL!=""){aL=aL.substr(3)+":"+aH.getTime()}if(aI==""){if(t(P)==""){aM=ai(aD);D=ai(aJ)}ap(aB,aM+","+D+","+aL,365)}else{var aG=0,aK=aI.split(",");if(aK.length>=1){aM=aK[0]}if(aK.length>=2){D=aK[1]}if(aK.length>=3){aF=aK[2]}if(aL!=""){aG=1}else{var aE=aF.split(":");if(aE.length>=2){var e=new Date(window.parseInt(aE[1]));if(e.getTime()<(aH.getTime()-86400000*30)){aG=1}}}if(aG){ap(aB,aM+","+D+","+aL,365)}}},setAEC:function(e){if(""==e){return}var D=t(E);if(D.indexOf(e+",")<0){D=D+e+","}ap(E,D,7)},ssoInfo:function(){var aD=unescape(ah(t("sso_info")));if(aD!=""){if(aD.indexOf("uid=")!=-1){var D=U(aD,"uid","&","");return escape("uid:"+D)}else{var e=U(aD,"u","&","");return escape("u:"+unescape(e))}}else{return""}}};var ag={CI:function(){var e=["sz:"+am.screenSize(),"dp:"+am.colorDepth(),"ac:"+am.appCode(),"an:"+am.appName(),"cpu:"+am.cpu(),"pf:"+am.platform(),"jv:"+am.jsVer(),"ct:"+am.network(),"lg:"+am.language(),"tz:"+am.timezone(),"fv:"+am.flashVer(),"ja:"+am.javaEnabled()];return"CI="+e.join("|")},PI:function(e){var D=["pid:"+ac.pageId(e),"st:"+ac.sessionCount(),"et:"+ac.excuteCount(),"ref:"+ac.referrer(),"hp:"+ac.isHomepage(),"PGLS:"+ac.PGLS(),"ZT:"+ac.ZT(),"MT:"+ac.mediaType(),"keys:","dom:"+ac.domCount(),"ifr:"+ac.iframeCount()];return"PI="+D.join("|")},UI:function(){var e=["vid:"+ar.visitorId(),"sid:"+ar.sessionId(),"lv:"+ar.lastVisit(),"un:"+ar.userNick(),"uo:"+ar.userOrigin(),"ae:"+ar.advCount(),"lu:"+ar.fvisitorId(),"si:"+ar.ssoInfo(),"rs:"+(n?1:0),"dm:"+(B?1:0)];return"UI="+e.join("|")},EX:function(D,e){if(l&1!=1){return""}D=(null!=D)?D||"":b;e=(null!=e)?e||"":a;return"EX=ex1:"+D+"|ex2:"+e},MT:function(){return"MT="+m().join("|")},V:function(){return"V=2.1.9"},R:function(){return"gUid_"+new Date().getTime()}};function au(){var aH="-",aE=F.referrer.toLowerCase(),aD=i.toLowerCase();if(""==t(W)){if(""!=aE){aH=ai(aE)}ap(W,aH,"","weibo.com")}var aF=/weibo.com\/reg.php/;if(aD.match(aF)){var aG=U(unescape(aD),"sharehost","&","");var D=U(unescape(aD),"appkey","&","");if(""!=aG){ap(W,aG,"","weibo.com")}ap("appkey",D,"","weibo.com")}}function d(e,D){G(e,D)}function G(D,aD){aD=aD||{};var e=new Image(),aE;if(aD&&aD.callback&&typeof aD.callback=="function"){e.onload=function(){clearTimeout(aE);aE=null;aD.callback(true)}}SUDA.img=e;e.src=D;aE=setTimeout(function(){if(aD&&aD.callback&&typeof aD.callback=="function"){aD.callback(false);e.onload=null}},aD.timeout||2000)}function x(e,aE,aD){SUDA.sudaCount++;if(!ar.visitorId()&&!L()){if(u<3){u++;setTimeout(x,500);return}}var D=N+[ag.V(),ag.CI(),ag.PI(e),ag.UI(),ag.MT(),ag.EX(aE,aD),ag.R()].join("&");G(D);var aF=ay+ag.R();G(aF);if(window.location.host.search("auto.sina.com.cn")>=0){wrating_url="http://m.wrating.com/m.gif?a=&c=860010-2370010112&mcookie="+ar.visitorId()+"&"+ag.R()+"=";G(wrating_url)}}function y(e,aD,D){if(aC||A){return}if(SUDA.sudaCount!=0){return}x(e,aD,D)}function aa(e,aE){if((""==e)||(undefined==e)){return}ar.setAEC(e);if(0==aE){return}var aD="AcTrack||"+t(Z)+"||"+t(H)+"||"+ar.userNick()+"||"+e+"||";var D=ae+aD+"&gUid_"+new Date().getTime();d(D)}function an(aF,e,D,aG){aG=aG||{};if(!D){D=""}else{D=escape(D)}var aE="UATrack||"+t(Z)+"||"+t(H)+"||"+ar.userNick()+"||"+aF+"||"+e+"||"+ac.referrer()+"||"+D+"||";var aD=ae+aE+"&gUid_"+new Date().getTime();d(aD,aG)}function az(aH){var D=g(aH);var aF=D.target;var aE="",aI="",aD="";var aG;if(aF!=null&&aF.getAttribute&&(!aF.getAttribute("suda-uatrack")&&!aF.getAttribute("suda-actrack")&&!aF.getAttribute("suda-data"))){while(aF!=null&&aF.getAttribute&&(!!aF.getAttribute("suda-uatrack")||!!aF.getAttribute("suda-actrack")||!!aF.getAttribute("suda-data"))==false){if(aF==F.body){return}aF=aF.parentNode}}if(aF==null||aF.getAttribute==null){return}aE=aF.getAttribute("suda-actrack")||"";aI=aF.getAttribute("suda-uatrack")||aF.getAttribute("suda-data")||"";sudaUrls=aF.getAttribute("suda-urls")||"";if(aI){aG=J(aI);if(aF.tagName.toLowerCase()=="a"){aD=aF.href}aG.key&&SUDA.uaTrack&&SUDA.uaTrack(aG.key,aG.value||aG.key,aD)}if(aE){aG=J(aE);aG.key&&SUDA.acTrack&&SUDA.acTrack(aG.key,aG.value||aG.key)}}aC=(function(aD,D){if(af.top==af){return false}else{try{if(F.body.clientHeight==0){return false}return((F.body.clientHeight>=aD)&&(F.body.clientWidth>=D))?false:true}catch(aE){return true}}})(320,240);A=(function(){return false})();ar.setUOR();var aq=ar.sessionId();window.SUDA=window.SUDA||[];SUDA.sudaCount=SUDA.sudaCount||0;SUDA.log=function(){x.apply(null,arguments)};SUDA.acTrack=function(){aa.apply(null,arguments)};SUDA.uaTrack=function(){an.apply(null,arguments)};T(F.body,"click",az);window.GB_SUDA=SUDA;GB_SUDA._S_pSt=function(){};GB_SUDA._S_acTrack=function(){aa.apply(null,arguments)};GB_SUDA._S_uaTrack=function(){an.apply(null,arguments)};window._S_pSt=function(){};window._S_acTrack=function(){aa.apply(null,arguments)};window._S_uaTrack=function(){an.apply(null,arguments)};window._S_PID_="";y();try{j()}catch(S){}})();