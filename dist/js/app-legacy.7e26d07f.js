(function(t){function e(e){for(var a,l,r=e[0],o=e[1],c=e[2],h=0,d=[];h<r.length;h++)l=r[h],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},s={app:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0195":function(t,e,i){},"034f":function(t,e,i){"use strict";i("85ec")},"0de1":function(t,e,i){"use strict";i("0195")},"154a":function(t,e,i){},1744:function(t,e,i){},"2e51":function(t,e,i){"use strict";i("365a")},"365a":function(t,e,i){},"45c6":function(t,e,i){},"4ecd":function(t,e,i){"use strict";i("fd05")},"51c3":function(t,e,i){"use strict";i("b868")},"56d7":function(t,e,i){"use strict";i.r(e);var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("NavMenu"),i("router-view",{staticClass:"main"}),i("Player")],1)},n=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-aside",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],attrs:{width:"auto"}},[i("transition",{attrs:{"enter-class":"animate__animated animate__fadeIn animate__delay-11s","leave-active-class":"animate__animated animate__zoomOutLeft animate__delay-11s"}},[i("el-menu",{attrs:{router:"","default-active":this.$route.path,collapse:this.$store.state.isCollapse}},[i("li",{staticClass:"el-menu-item user",attrs:{role:"menubar"},on:{click:t.login}},[i("i",[i("img",{staticClass:"demo-avatar demo-basic",attrs:{src:t.userInfo.avatarUrl,alt:"用户头像"}})]),i("span",[t._v(t._s(t.userInfo.nickname))]),i("el-popover",{directives:[{name:"show",rawName:"v-show",value:t.login_status,expression:"login_status"}],staticClass:"user_info",attrs:{width:"215",placement:"bottom-end",trigger:"hover"}},[i("span",{on:{click:t.logout}},[i("i",{staticClass:"el-icon-switch-button"}),i("span",{staticStyle:{paddingLeft:"10px"}},[t._v("退出登陆")])]),i("i",{staticClass:"el-icon-caret-bottom",attrs:{slot:"reference"},slot:"reference"})])],1),t._l(t.items,(function(e){return i("el-menu-item",{key:e.icon,attrs:{index:e.path,title:""}},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}))],2)],1),i("el-dialog",{attrs:{title:"扫码登陆",visible:t.dialogVisible,width:"300px","before-close":t.handleClose}},[i("div",{staticClass:"qr"},[i("el-skeleton",{attrs:{loading:t.loading,animated:""}},[i("template",{slot:"template"},[i("div",[i("el-skeleton-item",{staticStyle:{width:"180px",height:"180px"},attrs:{variant:"caption"}})],1)]),[i("img",{attrs:{width:"180px",height:"180px",src:t.qrCode,alt:""}})]],2),i("span",[t._v("使用 "),i("a",{attrs:{target:"view_window",href:" https://music.163.com/#/download"}},[t._v("网易云音乐APP")]),t._v("扫码登陆")])],1)])],1)},r=[],o=i("bc3a"),c=i.n(o);const u=c.a.create({baseURL:"https://music-api-khaki.vercel.app/",withCredentials:!0});function h(t,e={}){return new Promise(i=>{u.get(t,{params:e}).then(t=>{i(t)}).catch((function(t){t.response?(console.log("data",t.response.data),console.log("status",t.response.status),console.log("headers",t.response.headers)):t.request?console.log("未响应",t.request):console.log("#",t.message)}))})}const d=t=>h("search",t),m=()=>h("banner"),p=()=>h("/playlist/highquality/tags"),g=t=>h("/top/playlist/highquality",t),y=t=>h("/top/playlist",t),v=t=>h("/playlist/detail",t),f=t=>h("/song/detail",t),b=()=>h("/top/song?type=7"),_=(t,e)=>h("/login"+t,{...e,timestamp:(new Date).getTime()}),w=()=>h("/logout"),x=()=>h("/personal_fm",{timestamp:(new Date).getTime()}),C=()=>h("/top/mv"),k=t=>h("/simi/mv",t),P=t=>h("/mv/url",t);var $={name:"navMeau",props:["isCollapse","isMobile"],computed:{login_status:{get(){return this.$store.state.login_status},set(t){this.$store.state.login_status=t}},items(){return[{path:this.$store.state.routeAbout.path,title:"发现音乐",icon:"el-icon-discover"},{path:"/fm",title:"私人FM",icon:"el-icon-headset"},{path:"/mv",title:"MV",icon:"el-icon-video-camera"}]}},data(){return{userInfo:{userId:0,nickname:"未登錄",avatarUrl:"http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",backgroundUrl:""},dialogVisible:!1,loading:!0,key:0,code:800,timer:null,qrCode:""}},watch:{dialogVisible(t){t||(console.log(this.timer),clearTimeout(this.timer))},code:{handler(t){console.log(t),800===t?(clearTimeout(this.timer),this.qrCode="",this.loading=!0,this.qrLogin()):801===t?this.loading=!1:803===t&&(this.loginStatus(),this.$message.success({message:"授权登录成功"}),this.dialogVisible=!1)},immediate:!0}},methods:{logout(){w().then(()=>{this.userInfo={userId:0,nickname:"未登錄",avatarUrl:"http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",backgroundUrl:""}}),this.login_status=!1},loginStatus(){_("/status").then(t=>{if(t.data.data.account){this.login_status=!0;let e=t.data.data.profile;Object.keys(this.userInfo).forEach(t=>{this.userInfo[t]=e[t]})}else this.login_status=!1})},qrLogin(){let t;this.code=800,_("/qr/key").then(t=>{this.key=t.data.data.unikey}).then(()=>{_("/qr/create",{key:t,qrimg:"true"}).then(t=>{this.qrCode=t.data.data.qrimg}).then(()=>{this.dialogVisible&&(this.timer=setInterval(()=>{this.check()},1e3))})})},check(){_("/qr/check",{key:this.key}).then(t=>{this.loading=!1,this.code=t.data.code})},login(){this.login_status||(this.qrLogin(),this.dialogVisible=!0)},handleClose(){this.dialogVisible=!1}},beforeCreate(){_("/status").then(t=>{if(t.data.data.account){this.login_status=!0;let e=t.data.data.profile;Object.keys(this.userInfo).forEach(t=>{this.userInfo[t]=e[t]})}else this.login_status=!1})}},I=$,L=(i("7353"),i("2877")),j=Object(L["a"])(I,l,r,!1,null,"a2f4f7b6",null),O=j.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{directives:[{name:"show",rawName:"v-show",value:"/mv"!==this.$route.path&&t.isPlaying,expression:"this.$route.path!=='/mv' && isPlaying"}],staticClass:"player",attrs:{type:"flex",justify:"space-around",align:"middle",gutter:20}},[i("audio",{ref:"audio",attrs:{autoplay:""}},[i("source",{attrs:{src:t.url,type:"audio/mp3"}})]),i("el-slider",{staticClass:"time animate__animated animate__slideInLeft",attrs:{"stroke-width":26,"show-tooltip":!1},on:{change:t.changeProgress},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}}),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.picUrl}})]),i("span",[t._v(" "+t._s(t.playList[t.playingIndex].title))]),i("span",{staticClass:"small"},[t._v(" "+t._s(t.playList[t.playingIndex].singer)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isMobile,expression:"this.$store.state.isMobile"}],staticClass:"contorl simplify "},[i("i",{class:t.playBtn,on:{click:function(e){t.isPlaying=!t.isPlaying}}})])])]),i("el-col",{attrs:{span:14}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],staticClass:"contorl"},[i("div",{staticClass:"animate__animated animate__flipInX"},[i("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover",content:"列表为空",title:"正在播放"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playList.slice(1),height:"350px","show-header":!1,"aria-hidden":"true"},on:{"row-click":t.rowDblclick}},[i("el-table-column",{attrs:{width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),i("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.title))])]}}])}),i("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticStyle:{"margin-right":"-90px"},attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}})]}}])})],1),i("i",{staticClass:"el-icon-s-unfold mid",attrs:{slot:"reference"},slot:"reference"})],1),i("i",{staticClass:"mid el-icon-d-arrow-left",attrs:{title:"后退两秒"},on:{click:function(e){t.setCurrentTime=t.currentTime-2}}}),i("span",{staticClass:"small duration"},[t._v(t._s(t.currentTimeForm))]),i("i",{staticClass:"el-icon-caret-left",attrs:{title:"上一首"},on:{click:function(e){return t.goBack(-1)}}}),i("i",{class:t.playBtn,on:{click:t.playState}}),i("i",{staticClass:"el-icon-caret-right",attrs:{title:"下一首"},on:{click:function(e){return t.goBack(1)}}}),i("span",{staticClass:"small duration"},[t._v(t._s(t.durationTimeForm))]),i("i",{staticClass:"mid el-icon-d-arrow-right",attrs:{title:"快进两秒"},on:{click:function(e){t.setCurrentTime=t.currentTime+2}}}),i("i",{staticClass:"mid el-icon-star-off"})],1)])]),i("el-col",{attrs:{span:4}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}],staticClass:"setting"},[i("el-slider",{attrs:{"stroke-width":26},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)])],1)},S=[],T=i("2f62"),U={name:"player",data(){return{playBtn:"el-icon-video-play",url:"http://#",picUrl:"#",audio:null,volume:20,progress:0,currentTime:0,duration:0,setCurrentTime:0,currentTimeForm:"0:00",durationTimeForm:"0:00"}},watch:{currentTime(t){this.progress=t/this.duration*100,this.currentTimeForm=this.timeFormt(t)},setCurrentTime(t){t&&(this.audio.currentTime=t)},volume(t){this.audio.volume=t/100},playingIndex:{handler(t){t!==this.playList.length?t<1?this.changePlayingIndex(this.playList.length-1):(this.url=this.playList[t].url,this.picUrl=this.playList[t].picUrl,this.$nextTick(()=>{this.audio.load(),this.isPlaying=!0})):this.changePlayingIndex(1)}},isPlaying:{handler(t){this.$nextTick(()=>{t?(this.playBtn="el-icon-video-pause",this.audio.play()):(this.playBtn="el-icon-video-play",this.audio.pause())})},immediate:!0}},computed:{...Object(T["d"])("playerAbout",["playList","playingIndex"]),isPlaying:{get(){return this.$store.state.playerAbout.isPlaying},set(t){this.$store.state.playerAbout.isPlaying=t}}},methods:{...Object(T["c"])("playerAbout",["changePlayingIndex"]),timeFormt(t){t=Math.ceil(1*t);let e=parseInt(t/60),i=t%60;return i<10&&(i="0"+i),e+":"+i},changeProgress(t){this.setCurrentTime=t/100*this.duration},playState(){0!==this.duration&&this.playList.length>1&&(this.isPlaying=!this.isPlaying)},goBack(t){1!==this.playList.length&&this.changePlayingIndex(this.playingIndex+t)},handleDelete(t){this.playList.splice(t,1),this.playingIndex>t&&this.changePlayingIndex(this.playingIndex-1),t===this.playList.length&&this.changePlayingIndex(0)},rowDblclick(t){let e=this.playList.findIndex(e=>e.id===t.id);this.changePlayingIndex(e)},makerAudio(){this.audio=this.$refs.audio,this.audio.addEventListener("canplay",()=>{this.duration=this.audio.duration,this.durationTimeForm=this.timeFormt(this.duration)}),this.audio.addEventListener("timeupdate",()=>{this.currentTime=this.audio.currentTime}),this.audio.addEventListener("ended",()=>{this.changePlayingIndex(this.playingIndex+1)})}},mounted(){this.makerAudio()}},q=U,M=(i("2e51"),Object(L["a"])(q,A,S,!1,null,"13343e60",null)),E=M.exports,F={name:"App",components:{NavMenu:O,Player:E},data(){return{screenWidth:document.body.clientWidth}},watch:{screenWidth:{handler(t){this.$store.state.isCollapse=!(t>1200),this.$store.state.isMobile=!(t>540)},immediate:!0}},mounted(){window.onresize=()=>{this.screenWidth=document.body.clientWidth}}},N=F,D=(i("034f"),Object(L["a"])(N,s,n,!1,null,null,null)),z=D.exports,B=i("8c4f"),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}]},[i("TopBar")],1),i("el-main",[i("transition",{attrs:{"enter-active-class":"animate__animated  animate__fadeIn "}},[i("router-view")],1)],1)],1)},R=[],W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],attrs:{type:"flex",justify:"end"}},[i("el-col",{attrs:{span:19}},[i("Tages")],1),i("el-col",{attrs:{span:5}},[i("Search",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}]})],1)],1)},H=[],X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-menu",{attrs:{router:"","active-text-color":"#7a7374","default-active":this.$route.path,mode:"horizontal"}},t._l(t.tags,(function(e){return i("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.title))])})),1)},J=[],G={name:"tages",data(){return{tags:[{path:"/",title:"个性推荐"},{path:"/list",title:"歌单"},{path:"/newest",title:"最新音乐"}]}},watch:{"$route.path":{handler(t){this.changePath(t)},immediate:!0}},methods:{...Object(T["c"])("routeAbout",["changePath"])}},K=G,Q=(i("7244"),Object(L["a"])(K,X,J,!1,null,null,null)),Y=Q.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-autocomplete",{attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})},tt=[],et={name:"search",data(){return{typeSuggest:[],state:"",timeout:0}},watch:{state:{handler(t){t&&d({keywords:t}).then(t=>{let e=t.data.result.songs;this.typeSuggest=e.map(t=>Object.assign({id:t.id,title:t.name,singer:t.artists[0].name,duration:this.timeFormt(t.duration),value:t.name+`（歌手: ${t.artists[0].name}）`}))})}}},methods:{timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),i=t%60;return e+":"+i},...Object(T["b"])("playerAbout",["pushSong"]),...Object(T["c"])("playerAbout",["changePlayingIndex"]),querySearchAsync(t,e){clearTimeout(this.timeout),t?this.timeout=1e4*Math.random():this.typeSuggest=[],this.timeout=setTimeout(()=>{var t=this.typeSuggest;e(t)},this.timeout)},handleSelect(t){let e=Object.assign({},{id:t.id,title:t.title,singer:t.singer,duration:t.duration,url:"https://music.163.com/song/media/outer/url?id="+t.id});this.pushSong(e),this.$store.state.playerAbout.playList.includes(e)?this.$message.success({message:"添加列表成功，下一首播放",showClose:!1}):this.$message.error({message:"歌曲已存在",showClose:!1}),this.$store.state.playerAbout.isPlaying||this.changePlayingIndex(this.$store.state.playerAbout.playingIndex+1)}}},it=et,at=(i("51c3"),Object(L["a"])(it,Z,tt,!1,null,null,null)),st=at.exports,nt={name:"topBar",components:{Tages:Y,Search:st}},lt=nt,rt=(i("be89"),Object(L["a"])(lt,W,H,!1,null,null,null)),ot=rt.exports,ct={name:"home",components:{TopBar:ot}},ut=ct,ht=(i("4ecd"),Object(L["a"])(ut,V,R,!1,null,"69e66c4d",null)),dt=ht.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Carousel"),i("SongList",{style:{minHeight:"75px"}}),i("h3",[t._v("新歌速递")]),i("Newest",{style:{minHeight:"550px"},attrs:{limit:10}})],1)},pt=[],gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-carousel",{attrs:{"indicator-position":"none",interval:5e3,height:t.imgHeight}},t._l(t.imageUrl,(function(t){return i("el-carousel-item",{key:t,staticClass:"animate__animated  animate__fadeIn",style:{backgroundImage:"url("+t+")"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{src:t,alt:""}})])})),1)},yt=[],vt={name:"carousel",data(){return{imageUrl:[],imgHeight:""}},beforeMount(){this.getPic()},mounted(){this.imgLoad(),window.addEventListener("resize",this.imgLoad,!1)},destroyed(){window.addEventListener("resize",this.imgLoad,!1)},methods:{imgLoad(){this.$nextTick(()=>{var t=window.innerWidth,e=300;e=t>920?300:.27*t,this.imgHeight=e+"px"})},getPic(){m().then(t=>{var e=t.data.banners;this.imageUrl=e.map(t=>t.imageUrl)})}}},ft=vt,bt=(i("58b3"),Object(L["a"])(ft,gt,yt,!1,null,null,null)),_t=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isFull?i("div",{staticClass:"ad animate__animated animate__bounceInDown ",style:{backgroundImage:"url("+t.highquality.coverImgUrl+")"}},[i("el-skeleton",{attrs:{rows:6,loading:t.loading,animated:""}},[i("template",{attrs:{rows:6},slot:"template"},[i("el-skeleton-item",{staticStyle:{width:"calc(100vw * 0.122)",height:"calc(100vw * 0.122)"},attrs:{rows:6,variant:"image"}})],1),[i("img",{staticClass:"dis",attrs:{src:t.highquality.coverImgUrl,lazy:"",alt:"精品歌单封面图片"}})]],2),i("span",{staticClass:"di"},[i("span",{staticClass:"top",on:{click:function(e){return t.goPlay(t.highquality.id)}}},[i("i",{staticClass:"el-icon-medal-1",staticStyle:{paddingRight:"10px"}}),t._v("精品歌单 ")]),i("h2",[t._v(t._s(t.highquality.name))]),i("span",[t._v(t._s(t.highquality.copywriter))])]),i("div",{staticClass:"tag animate__animated  animate__fadeIn "},t._l(t.tags,(function(e,a){return i("span",{key:a},[i("span",{staticClass:"item ",class:{active:a===t.tags.isActive},on:{click:function(i){return t.handel(a,e.name)}}},[t._v(" "+t._s(e.name)+" ")])])})),0)],1):t._e(),i("h3",{staticClass:"animate__animated  animate__fadeIn"},[t._v(" "+t._s(t.songList.title)+" ")]),i("el-row",{attrs:{gutter:15}},t._l(t.songList.list,(function(e){return i("el-col",{key:e.id,attrs:{span:4}},[i("el-card",{staticClass:"duck animate__animated animate__flipInX",attrs:{shadow:"hover","body-style":{padding:"0px"},title:e.name}},[i("img",{attrs:{src:e.picUrl,lazy:"",alt:"歌单封面"},on:{click:function(i){return t.goPlay(e.id)}}})])],1)})),1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFull,expression:"isFull"}],staticClass:"block animate__animated  animate__fadeIn animate__delay-2s"},[i("el-pagination",{attrs:{"page-sizes":[18,30,42,60],"page-size":18,"current-page":t.songList.pagination,layout:"total, sizes, prev, pager, next, jumper",total:1200},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},xt=[],Ct={name:"songList",data(){return{tags:{isActive:-1},highquality:{coverImgUrl:"",name:"",copywriter:"",id:""},songList:{limit:18,pagination:1,title:"推荐歌单",list:[]},loading:!0}},props:["isFull"],computed:{offset(){return(this.songList.pagination-1)*this.songList.limit},cat(){return"推荐歌单"===this.songList.title?"全部":this.songList.title},stateChange(){const{limit:t,pagination:e,title:i}=this.songList;return{limit:t,pagination:e,title:i}}},watch:{stateChange:{handler(){this.listChange()}},immediate:!0},methods:{handel(t,e){this.tags.isActive=t,this.songList.title=e,this.songList.pagination=1},handleSizeChange(t){this.songList.limit=t},handleCurrentChange(t){this.songList.pagination=t},listChange(){g({limit:1,cat:this.cat}).then(t=>{let e=t.data.playlists[0];Object.keys(this.highquality).forEach(t=>{this.highquality[t]=e[t]}),this.loading=!1}),y({limit:this.isFull?this.songList.limit:6,offset:this.offset,cat:this.cat}).then(t=>{let e=t.data.playlists,i={};e=e.reduce((function(t,e){return!i[e.id]&&(i[e.id]=t.push(e)),t}),[]),this.songList.list=e.map(t=>Object.assign({id:t.id,picUrl:t.coverImgUrl,name:t.name}))})},goPlay(t){this.$router.push({path:"/list/detail",query:{id:t}})}},beforeMount(){this.listChange(),p().then(t=>{this.tags=t.data.tags.slice(0,9)})}},kt=Ct,Pt=(i("6c02"),Object(L["a"])(kt,wt,xt,!1,null,"6e019ab8",null)),$t=Pt.exports,It=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PlayList",{attrs:{tbData:t.tbData}})},Lt=[],jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-table",{attrs:{append:"",stripe:"",height:"100%","highlight-current-row":"","row-class-name":t.tableRowClassName,data:t.tbData,plain:""},on:{"row-dblclick":t.handleRow}},[i("el-table-column",{attrs:{fixed:"",prop:"serial",label:"",width:"80"}}),i("el-table-column",{attrs:{fixed:"",prop:"title",label:"音乐标题",width:"350"}}),i("el-table-column",{attrs:{prop:"pop",label:"热度",width:"100"}}),i("el-table-column",{attrs:{prop:"singer",label:"歌手",width:"280"}}),i("el-table-column",{attrs:{prop:"album",label:"专辑",width:"300"}}),i("el-table-column",{attrs:{prop:"formTime",label:"时长",width:"80"}})],1)},Ot=[],At={name:"playList",props:["tbData"],computed:{...Object(T["d"])("playerAbout",["isPlaying","playingIndex"])},methods:{...Object(T["b"])("playerAbout",["pushSong"]),...Object(T["c"])("playerAbout",["changePlayingIndex"]),tableRowClassName(){return"hot animate__animated animate__flipInX animate__delay-.5s"},handleRow(t){let e=Object.assign({id:t.id,title:t.title,singer:t.singer,duration:t.duration,picUrl:t.picUrl,url:"https://music.163.com/song/media/outer/url?id="+t.id});this.pushSong(e),this.isPlaying?this.$store.state.playerAbout.playList.includes(e)?this.$message.warning({message:"添加列表成功，下一首播放"}):this.$message.error({message:"歌曲已存在"}):(this.$message.success({message:"正在加载，即将播放"}),this.changePlayingIndex(this.playingIndex+1))}}},St=At,Tt=Object(L["a"])(St,jt,Ot,!1,null,null,null),Ut=Tt.exports,qt={name:"newest",components:{PlayList:Ut},props:["limit"],data(){return{tbData:[]}},methods:{timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),i=t%60;return i<10&&(i="0"+i),e+":"+i},loadAll(){b().then(t=>{let e=t.data.data;this.limit&&(e=e.splice(0,this.limit)),this.tbData=e.map((t,e)=>Object.assign({serial:e<9?"0"+(e+1):e+1,title:t.alias.length?t.name+"（"+t.alias+"）":t.name,pop:t.popularity,singer:t.artists[0].name,album:t.album.name,duration:t.duration,formTime:this.timeFormt(t.duration),id:t.id,picUrl:t.album.picUrl}))})}},mounted(){this.loadAll()}},Mt=qt,Et=Object(L["a"])(Mt,It,Lt,!1,null,null,null),Ft=Et.exports,Nt={name:"discovery",components:{Carousel:_t,SongList:$t,Newest:Ft}},Dt=Nt,zt=Object(L["a"])(Dt,mt,pt,!1,null,null,null),Bt=zt.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},Rt=[],Wt={name:"list"},Ht=Wt,Xt=Object(L["a"])(Ht,Vt,Rt,!1,null,null,null),Jt=Xt.exports,Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("el-skeleton",{attrs:{loading:t.loading,animated:""}},[[i("div",{staticStyle:{width:"100%"}})],[i("div",{staticClass:"ad animate__animated  animate__fadeIn"},[i("img",{staticClass:"image",attrs:{src:t.detail.coverImgUrl,lazy:"",alt:"歌单封面"}}),i("span",{staticClass:"dis"},[i("h2",[t._v(t._s(t.detail.name))]),i("el-button",{attrs:{icon:"el-icon-video-play",type:"warning",round:""},on:{click:t.playAll}},[t._v("播放全部")]),i("br"),i("span",[i("strong",[t._v("标签：")]),t._v(t._s(t.detail.tags))]),i("br"),i("span",[i("strong",[t._v("歌曲：")]),t._v(t._s(t.detail.trackCount))]),t._v("｜"),i("span",[i("strong",[t._v("播放：")]),t._v(t._s(t.detail.playCount))]),i("br"),i("span",{staticClass:"di"},[i("strong",[t._v("简介：")]),t._v(t._s(t.detail.description))])],1)])]],2),i("PlayList",{attrs:{tbData:t.tbData}})],1)},Kt=[],Qt={data(){return{detail:{name:"",coverImgUrl:"",tags:[],trackCount:0,playCount:0,description:""},tbData:[],loading:!0}},components:{PlayList:Ut},props:["id"],methods:{...Object(T["c"])("playerAbout",["changePlayingIndex","pushAll"]),timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),i=t%60;return i<10&&(i="0"+i),e+":"+i},playAll(){this.$confirm("","该操作会清空当前播放列表，是否继续？",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,roundButton:!0,showClose:!1}).then(t=>{"confirm"===t&&this.pushAll(this.tbData)}).catch(()=>{this.$message({type:"info",message:"已取消播放全部"})})},load(){v({id:this.id}).then(t=>{let e=t.data.playlist;Object.keys(this.detail).forEach(t=>{this.detail[t]=e[t]}),this.loading=!1;let i=[];e.trackIds.forEach((t,e)=>{i[e]=t.id}),f({ids:i.toString()}).then(t=>{let e=t.data.songs;this.tbData=e.map((t,e)=>Object.assign({serial:e<9?"0"+(e+1):e+1,title:t.name,pop:t.pop,singer:t.ar[0].name,album:t.al.name,duration:t.dt,formTime:this.timeFormt(t.dt),id:t.id,picUrl:t.al.picUrl,url:"https://music.163.com/song/media/outer/url?id="+t.id}))})})}},beforeMount(){this.load()}},Yt=Qt,Zt=(i("0de1"),Object(L["a"])(Yt,Gt,Kt,!1,null,"098d3e86",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("div",{staticStyle:{width:"100%"}},[t._v("222")]),t.blank?i("div",{staticClass:"blank"},[t._v("私人FM需要登陆，并且打开个性化服务")]):t._e()])},ie=[],ae={data(){return{blank:!0,song:[{id:0,title:" ",singer:"",duration:0,picUrl:"",url:""}]}},watch:{login_status:{handler(t){t?(this.blank=!1,this.get_fm(),setTimeout(()=>{console.log(this.song),this.pushAll(this.song)},2e3)):(this.blank=!0,this.song=[])},immediate:!0},playingIndex:{handler(t,e){t===this.song.length?this.get_fm():e%this.playList.length===0&&this.pushAll(this.song)}}},computed:{...Object(T["d"])("playerAbout",["playList","playingIndex"]),login_status(){return this.$store.state.login_status},isPlaying:{get(){return this.$store.state.playerAbout.isPlaying},set(t){this.$store.state.playerAbout.isPlaying=t}}},methods:{...Object(T["c"])("playerAbout",["pushAll"]),get_fm(){x().then(t=>{let e=t.data.data;this.song=e.map(t=>(this.timeout+=t.duration,Object.assign({id:t.id,title:t.name,singer:t.artists[0].name,duration:t.duration,picUrl:t.album.picUrl,url:"https://music.163.com/song/media/outer/url?id="+t.id})))})}}},se=ae,ne=(i("8327"),Object(L["a"])(se,ee,ie,!1,null,"8b9a8fe0",null)),le=ne.exports,re=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("video",{ref:"video",staticStyle:{width:"100%",height:"100%","object-fit":"fill"},attrs:{poster:t.mv.cover,src:t.mv.url}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.video_isPlaying,expression:"!video_isPlaying"}],staticClass:"mvs"},[i("el-row",t._l(t.mvs,(function(e){return i("el-col",{key:e.id,attrs:{span:8}},[i("el-card",{staticClass:"mv",attrs:{shadow:"hover","body-style":{padding:"0px"}}},[i("img",{attrs:{src:e.cover,fit:"cover",lazy:""}}),i("div",{staticClass:"info",on:{click:function(i){return t.goPlay(e)}}},[i("h4",[t._v(t._s(e.name))]),i("span",[t._v(" "+t._s(e.artistName))])])])],1)})),1)],1)])},oe=[],ce={data(){return{mv:{id:0,name:"2",cover:"#.png",url:"#"},mvs:[],video_isPlaying:!1,music_isPlaying:!1,video:null}},computed:{...Object(T["d"])("playerAbout",["playList","playingIndex"]),isPlaying:{get(){return this.$store.state.playerAbout.isPlaying},set(t){this.$store.state.playerAbout.isPlaying=t}}},watch:{$route:{handler(t){t.query.url?(this.video_isPlaying=!0,this.mv.url=t.query.url,this.$nextTick(()=>{this.video.controls=!0,this.video.play()})):(this.video_isPlaying=!1,this.mv.url="")},immediate:!0}},methods:{goPlay(t){this.mv=t,this.video_isPlaying=!0,this.$nextTick(()=>{this.video.controls=!0,this.video.play()}),this.$router.push({path:"/mv",query:{url:this.mv.url}})},getUrl(){this.mvs.forEach(t=>{P({id:t.id}).then(e=>{t.url=e.data.data.url})})},loadAll(){C().then(t=>{this.mvs=t.data.data}).then(()=>{this.getUrl()})},video_monitor(){this.video=this.$refs.video,this.video.addEventListener("ended",()=>{this.video.controls=!1,k({mvid:this.mv.id}).then(t=>{this.mvs=t.data.mvs}).then(()=>{this.getUrl(),this.video_isPlaying=!1})})}},mounted(){this.music_isPlaying=this.isPlaying,this.isPlaying=!1,this.loadAll(),this.video_monitor()},destroyed(){this.isPlaying=this.music_isPlaying}},ue=ce,he=(i("c145"),Object(L["a"])(ue,re,oe,!1,null,"199cfd98",null)),de=he.exports,me=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("el-empty",{attrs:{description:"这里什么也没有"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.replace("/")}}},[t._v("返回首页")])],1)],1)],1)},pe=[],ge={name:"notFound"},ye=ge,ve=Object(L["a"])(ye,me,pe,!1,null,null,null),fe=ve.exports;a["default"].use(B["a"]);var be=new B["a"]({routes:[{path:"",component:dt,children:[{path:"/",component:Bt},{path:"/list",component:Jt,children:[{path:"",component:$t,props:{isFull:!0}},{path:"detail",component:te,props:t=>({id:t.query.id})}]},{path:"/newest",component:Ft}]},{path:"/fm",component:le},{path:"/mv",component:de},{path:"/*",component:fe}]}),_e=i("e1bd");a["default"].use(T["a"]);const we={namespaced:!0,state:()=>({path:"/"}),mutations:{changePath(t,e){t.path=e}}},xe={namespaced:!0,state:()=>({playingIndex:0,isPlaying:!1,playList:[{}]}),mutations:{pushSong(t,e){t.playList.splice(t.playingIndex+1,0,e)},pushAll(t,e){t.playList.splice(1,t.playList.length-1,...e),t.playingIndex=1},changePlayingIndex(t,e){t.playingIndex=e}},actions:{pushSong({commit:t,state:e},i){const a=e.playList.some(t=>{if(t.id===i.id)return!0});a||t("pushSong",i)}}};var Ce=new T["a"].Store({modules:{routeAbout:we,playerAbout:xe},state:{isCollapse:!1,isMobile:!1,nanoid:Object(_e["a"])(),login_status:!1}}),ke=i("77ed"),Pe=i.n(ke),$e=(i("154a"),i("0fae"),i("9e2f")),Ie=i.n($e);a["default"].use(Ie.a),a["default"].config.productionTip=!1,a["default"].use(Pe.a),new a["default"]({render:t=>t(z),router:be,store:Ce}).$mount("#app")},"58b3":function(t,e,i){"use strict";i("e3b9")},"6aae":function(t,e,i){},"6ac2":function(t,e,i){},"6c02":function(t,e,i){"use strict";i("6ac2")},7244:function(t,e,i){"use strict";i("1744")},7300:function(t,e,i){},7353:function(t,e,i){"use strict";i("45c6")},8327:function(t,e,i){"use strict";i("7300")},"85ec":function(t,e,i){},"9d8d":function(t,e,i){},b868:function(t,e,i){},be89:function(t,e,i){"use strict";i("6aae")},c145:function(t,e,i){"use strict";i("9d8d")},e3b9:function(t,e,i){},fd05:function(t,e,i){}});
//# sourceMappingURL=app-legacy.7e26d07f.js.map