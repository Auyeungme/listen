(function(t){function e(e){for(var i,l,r=e[0],o=e[1],u=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&h.push(s[l][0]),s[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"154a":function(t,e,a){},1744:function(t,e,a){},2772:function(t,e,a){"use strict";a("385b")},"2bb56":function(t,e,a){"use strict";a("9740")},"385b":function(t,e,a){},"3ddc":function(t,e,a){"use strict";a("422b")},"422b":function(t,e,a){},"4ecd":function(t,e,a){"use strict";a("fd05")},"51c3":function(t,e,a){"use strict";a("b868")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("NavMenu"),a("router-view",{staticClass:"main"}),a("Player")],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-aside",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],attrs:{width:"auto"}},[a("transition",{attrs:{"enter-class":"animate__animated animate__fadeIn animate__delay-11s","leave-active-class":"animate__animated animate__zoomOutLeft"}},[a("el-menu",{attrs:{router:"","active-text-color":"#ffb199","default-active":this.$route.path,collapse:this.$store.state.isCollapse}},[a("p",[a("i",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}],staticClass:"el-icon-user-solid user"})]),t._l(t.items,(function(e){return a("el-menu-item",{key:e.icon,attrs:{index:e.path}},[a("i",{class:e.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}))],2)],1)],1)},r=[],o={name:"navMeau",props:["isCollapse","isMobile"],computed:{items(){return[{path:this.$store.state.routeAbout.path,title:"发现音乐",icon:"el-icon-discover"},{path:"/fm",title:"私人FM",icon:"el-icon-headset"},{path:"/mv",title:"MV",icon:"el-icon-video-camera"}]}}},u=o,c=(a("2772"),a("2877")),d=Object(c["a"])(u,l,r,!1,null,null,null),h=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{directives:[{name:"show",rawName:"v-show",value:this.playList.length,expression:"this.playList.length"}],staticClass:"player",attrs:{type:"flex",justify:"space-around",align:"middle",gutter:20}},[a("audio",{ref:"audio",attrs:{autoplay:""}},[a("source",{attrs:{src:t.url,type:"audio/mp3"}})]),a("el-slider",{staticClass:"time animate__animated animate__slideInLeft",attrs:{"stroke-width":26,"show-tooltip":!1},on:{change:t.changeProgress},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}}),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"cover"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:t.picUrl}})]),a("span",[t._v(" "+t._s(t.playList[t.playingIndex].title))]),a("span",{staticClass:"small"},[t._v(" "+t._s(t.playList[t.playingIndex].singer)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isCollapse,expression:" this.$store.state.isCollapse"}],staticClass:"contorl simplify "},[a("i",{class:t.playBtn,on:{click:function(e){t.isPlaying=!t.isPlaying}}})])])]),a("el-col",{attrs:{span:14}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"! this.$store.state.isCollapse"}],staticClass:"contorl"},[a("div",{staticClass:"animate__animated animate__flipInX"},[a("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover",content:"列表为空",title:"正在播放"}},[a("el-table",{directives:[{name:"show",rawName:"v-show",value:t.playList[0],expression:"playList[0]"}],staticStyle:{width:"100%"},attrs:{data:t.playList,height:"350px","show-header":!1},on:{"row-click":t.rowDblclick}},[a("el-table-column",{attrs:{width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-right":"-90px"},attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}})]}}])})],1),a("i",{staticClass:"el-icon-s-unfold mid",attrs:{slot:"reference"},slot:"reference"})],1),a("i",{staticClass:"mid el-icon-d-arrow-left",attrs:{title:"后退两秒"},on:{click:function(e){t.setCurrentTime=t.currentTime-2}}}),a("span",{staticClass:"small duration"},[t._v(t._s(t.currentTimeForm))]),a("i",{staticClass:"el-icon-caret-left",attrs:{title:"上一首"},on:{click:function(e){return t.changePlayingIndex(t.playingIndex-1)}}}),a("i",{class:t.playBtn,on:{click:function(e){t.isPlaying=!t.isPlaying}}}),a("i",{staticClass:"el-icon-caret-right",attrs:{title:"下一首"},on:{click:function(e){return t.changePlayingIndex(t.playingIndex+1)}}}),a("span",{staticClass:"small duration"},[t._v(t._s(t.durationTimeForm))]),a("i",{staticClass:"mid el-icon-d-arrow-right",attrs:{title:"快进两秒"},on:{click:function(e){t.setCurrentTime=t.currentTime+2}}}),a("i",{staticClass:"mid el-icon-star-off"})],1)])]),a("el-col",{attrs:{span:4}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"! this.$store.state.isCollapse"}],staticClass:"setting"},[a("el-slider",{attrs:{"stroke-width":26},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)])],1)},m=[],g=a("2f62"),f={name:"player",data(){return{playBtn:"",url:"",picUrl:"",audio:null,volume:20,progress:0,currentTime:0,duration:0,setCurrentTime:0,currentTimeForm:"0:00",durationTimeForm:"0:00"}},watch:{currentTime(t){this.progress=t/this.duration*100,this.currentTimeForm=this.timeFormt(t)},setCurrentTime(t){t&&(this.audio.currentTime=t)},volume(t){this.audio.volume=t/100},isPlaying:{handler(t){this.$nextTick(()=>{t?(this.playBtn="el-icon-video-pause",this.audio.play()):(this.playBtn="el-icon-video-play",this.audio.pause())})},immediate:!0},playingIndex:{handler(t){t===this.playList.length?this.changePlayingIndex(0):t<0&&this.changePlayingIndex(this.playList.length-1),this.playList.length&&(this.url=this.playList[t].url,this.picUrl=this.playList[t].picUrl),this.$nextTick(()=>{this.isPlaying=!0,this.audio.load(),this.audio.play()})},immediate:!0}},computed:{...Object(g["d"])("playerAbout",["playList","playingIndex"]),isPlaying:{get(){return this.$store.state.playerAbout.isPlaying},set(t){this.$store.state.playerAbout.isPlaying=t}}},methods:{...Object(g["c"])("playerAbout",["changePlayingIndex"]),timeFormt(t){t=Math.ceil(1*t);let e=parseInt(t/60),a=t%60;return a<10&&(a="0"+a),e+":"+a},changeProgress(t){this.setCurrentTime=t/100*this.duration},handleDelete(t){this.playList.splice(t,1),this.playingIndex>t&&this.changePlayingIndex(this.playingIndex-1),t===this.playList.length&&this.changePlayingIndex(0)},rowDblclick(t){let e=this.playList.findIndex(e=>e.id===t.id);this.changePlayingIndex(e)},makerAudio(){this.audio=this.$refs.audio,this.audio.addEventListener("canplay",()=>{this.duration=this.audio.duration,this.durationTimeForm=this.timeFormt(this.duration)}),this.audio.addEventListener("timeupdate",()=>{this.currentTime=this.audio.currentTime}),this.audio.addEventListener("ended",()=>{this.changePlayingIndex(this.playingIndex+1)})}},mounted(){this.makerAudio()}},y=f,b=(a("3ddc"),Object(c["a"])(y,p,m,!1,null,"de708810",null)),v=b.exports,_={name:"App",components:{NavMenu:h,Player:v},data(){return{screenWidth:document.body.clientWidth}},watch:{screenWidth:{handler(t){this.$store.state.isCollapse=!(t>1200),this.$store.state.isMobile=!(t>540)},immediate:!0}},mounted(){window.onresize=()=>{this.screenWidth=document.body.clientWidth}}},w=_,x=(a("034f"),Object(c["a"])(w,s,n,!1,null,null,null)),C=x.exports,$=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}]},[a("TopBar")],1),a("el-main",[a("transition",{attrs:{"enter-active-class":"animate__animated  animate__fadeIn "}},[a("router-view")],1)],1)],1)},P=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],attrs:{type:"flex",justify:"end"}},[a("el-col",{attrs:{span:19}},[a("Tages")],1),a("el-col",{attrs:{span:5}},[a("Search",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}]})],1)],1)},k=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{attrs:{router:"","active-text-color":"#7a7374","default-active":this.$route.path,mode:"horizontal"}},t._l(t.tags,(function(e){return a("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.title))])})),1)},O=[],T={name:"tages",data(){return{tags:[{path:"/",title:"个性推荐"},{path:"/list",title:"歌单"},{path:"/rank",title:"排行榜"},{path:"/singer",title:"歌手"},{path:"/newest",title:"最新音乐"}]}},watch:{"$route.path":{handler(t){this.changePath(t)},immediate:!0}},methods:{...Object(g["c"])("routeAbout",["changePath"])}},S=T,A=(a("7244"),Object(c["a"])(S,j,O,!1,null,null,null)),M=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-autocomplete",{attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})},F=[],U=a("bc3a"),q=a.n(U);const N=q.a.create({baseURL:"https://music-api-khaki.vercel.app/",headers:{"X-Requested-With":"XMLHttpRequest"},maxRedirects:5,proxy:{protocol:"https",host:"127.0.0.1",port:8e3}});function z(t,e={}){return new Promise(a=>{N.get(t,{params:e}).then(t=>{a(t)})})}const R=t=>z("search",t),B=()=>z("banner"),D=()=>z("/playlist/highquality/tags"),W=t=>z("/top/playlist/highquality",t),H=t=>z("/top/playlist",t),X=t=>z("/playlist/detail",t),J=()=>z("/top/song?type=7");var K={name:"search",data(){return{typeSuggest:[],state:"",timeout:0}},watch:{state:{handler(t){t&&R({keywords:t}).then(t=>{let e=t.data.result.songs;this.typeSuggest=e.map(t=>Object.assign({id:t.id,title:t.name,singer:t.artists[0].name,duration:this.timeFormt(t.duration),value:t.name+`（歌手: ${t.artists[0].name}）`}))})}}},methods:{timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),a=t%60;return e+":"+a},...Object(g["b"])("playerAbout",["pushSong"]),...Object(g["c"])("playerAbout",["changePlayingIndex"]),querySearchAsync(t,e){clearTimeout(this.timeout),t?this.timeout=1e4*Math.random():this.typeSuggest=[],this.timeout=setTimeout(()=>{var t=this.typeSuggest;e(t)},this.timeout)},handleSelect(t){let e=Object.assign({},{id:t.id,title:t.title,singer:t.singer,duration:t.duration,url:"https://music.163.com/song/media/outer/url?id="+t.id});this.pushSong(e),this.$store.state.playerAbout.playList.includes(e)?this.$message.success({message:"添加列表成功，下一首播放",showClose:!1}):this.$message.error({message:"歌曲已存在",showClose:!1}),this.$store.state.playerAbout.isPlaying||this.changePlayingIndex(this.$store.state.playerAbout.playingIndex+1)}}},G=K,V=(a("51c3"),Object(c["a"])(G,E,F,!1,null,null,null)),Q=V.exports,Y={name:"topBar",components:{Tages:M,Search:Q}},Z=Y,tt=(a("be89"),Object(c["a"])(Z,I,k,!1,null,null,null)),et=tt.exports,at={name:"home",components:{TopBar:et}},it=at,st=(a("4ecd"),Object(c["a"])(it,L,P,!1,null,"69e66c4d",null)),nt=st.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Carousel"),a("SongList"),a("h3",[t._v("新歌速递")]),a("PlayList",{style:{minHeight:"550px"},attrs:{limit:10}})],1)},rt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-carousel",{attrs:{"indicator-position":"none",interval:5e3,height:t.imgHeight}},t._l(t.imageUrl,(function(t){return a("el-carousel-item",{key:t,staticClass:"animate__animated  animate__fadeIn",style:{backgroundImage:"url("+t+")"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{src:t,alt:""}})])})),1)},ut=[],ct={name:"carousel",data(){return{imageUrl:[],imgHeight:""}},beforeMount(){this.getPic()},mounted(){this.imgLoad(),window.addEventListener("resize",this.imgLoad,!1)},destroyed(){window.addEventListener("resize",this.imgLoad,!1)},methods:{imgLoad(){this.$nextTick(()=>{var t=window.innerWidth,e=300;e=t>920?300:.27*t,this.imgHeight=e+"px"})},getPic(){B().then(t=>{var e=t.data.banners;this.imageUrl=e.map(t=>t.imageUrl)})}}},dt=ct,ht=(a("58b3"),Object(c["a"])(dt,ot,ut,!1,null,null,null)),pt=ht.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isFull?a("el-row",{staticClass:"ad animate__animated animate__bounceInDown animate__delay-.7s",style:{backgroundImage:"url("+t.highquality.coverImgUrl+")"}},[a("el-col",{attrs:{span:4}},[a("img",{attrs:{src:t.highquality.coverImgUrl,lazy:"",alt:"精品歌单封面图片"}})]),a("el-col",{staticClass:"dis",attrs:{span:20}},[a("span",{staticClass:"top",on:{click:function(e){return t.goPlay(t.highquality.id)}}},[a("i",{staticClass:"el-icon-medal-1",staticStyle:{paddingRight:"10px"}}),t._v("精品歌单 ")]),a("h1",[t._v(t._s(t.highquality.name))]),a("span",[t._v(t._s(t.highquality.copywriter))])]),a("div",{staticClass:"tag animate__animated  animate__fadeIn animate__delay-1s"},t._l(t.tags,(function(e,i){return a("span",{key:i},[a("span",{staticClass:"item ",class:{active:i===t.tags.isActive},on:{click:function(a){return t.handel(i,e.name)}}},[t._v(" "+t._s(e.name)+" ")])])})),0)],1):t._e(),a("h3",{staticClass:"animate__animated  animate__fadeIn animate__delay-1s"},[t._v(" "+t._s(t.songList.title)+" ")]),a("el-row",{attrs:{gutter:15}},t._l(t.songList.list,(function(e){return a("el-col",{key:e.id,attrs:{span:4}},[a("el-card",{staticClass:"duck animate__animated animate__flipInX",attrs:{shadow:"hover","body-style":{padding:"0px"},title:e.name}},[a("img",{attrs:{src:e.picUrl,lazy:"",alt:"歌单封面"},on:{click:function(a){return t.goPlay(e.id)}}})])],1)})),1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFull,expression:"isFull"}],staticClass:"block animate__animated  animate__fadeIn animate__delay-2s"},[a("el-pagination",{attrs:{"page-sizes":[18,30,42,60],"page-size":18,"current-page":t.songList.pagination,layout:"total, sizes, prev, pager, next, jumper",total:1200},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},gt=[],ft={name:"songList",data(){return{tags:{isActive:-1},highquality:{coverImgUrl:"",name:"",copywriter:"",id:""},songList:{limit:18,pagination:1,title:"推荐歌单",list:[]}}},props:["isFull"],computed:{offset(){return(this.songList.pagination-1)*this.songList.limit},cat(){return"推荐歌单"===this.songList.title?"全部":this.songList.title},stateChange(){const{limit:t,pagination:e,title:a}=this.songList;return{limit:t,pagination:e,title:a}}},watch:{"songList.title":{handler(){this.loadALl()},immediate:!0},stateChange:{handler(){this.listChange()}},immediate:!0},methods:{handel(t,e){this.tags.isActive=t,this.songList.title=e,this.songList.pagination=1},handleSizeChange(t){this.songList.limit=t},handleCurrentChange(t){this.songList.pagination=t},loadALl(){W({limit:1,cat:this.cat}).then(t=>{let e=t.data.playlists[0];Object.keys(this.highquality).forEach(t=>{this.highquality[t]=e[t]})})},listChange(){H({limit:this.isFull?this.songList.limit:6,offset:this.offset,cat:this.cat}).then(t=>{let e=t.data.playlists;this.songList.list=e.map(t=>Object.assign({id:t.id,picUrl:t.coverImgUrl,name:t.name}))})},goPlay(t){X({id:t}).then(e=>{this.$store.state.trackIds=e.data.playlist.trackIds,this.$router.push({path:"/newest",query:{q:"list",id:t}})})}},beforeMount(){this.$nextTick(()=>{this.listChange()}),D().then(t=>{this.tags=t.data.tags.slice(0,9)})}},yt=ft,bt=(a("2bb56"),Object(c["a"])(yt,mt,gt,!1,null,"4543812f",null)),vt=bt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{attrs:{append:"",stripe:"",height:"100%","highlight-current-row":"","row-class-name":t.tableRowClassName,data:t.tbData,plain:""},on:{"row-dblclick":t.handleRow}},t._l(t.disTitle,(function(t){return a("el-table-column",{key:t.name,attrs:{prop:t.name,label:t.label,width:t.width}})})),1)},wt=[],xt={name:"playList",props:["limit"],data(){return{tbData:[],title:[{name:"serial",label:"",width:80},{name:"title",label:"音乐标题",width:350},{name:"pop",label:"热度",width:100},{name:"singer",label:"歌手",width:280},{name:"album",label:"专辑",width:300},{name:"formTime",label:"时长",width:80}],disTitle:[]}},watch:{isMobile:{handler(t){this.disTitle=t?this.title.slice(0,2):this.title},immediate:!0}},computed:{...Object(g["d"])("playerAbout",["isPlaying","playingIndex"]),isMobile(){return this.$store.state.isMobile}},methods:{...Object(g["b"])("playerAbout",["pushSong"]),...Object(g["c"])("playerAbout",["changePlayingIndex"]),timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),a=t%60;return a<10&&(a="0"+a),e+":"+a},tableRowClassName(){return"hot animate__animated animate__flipInX animate__delay-.5s"},loadAll(){J().then(t=>{let e=t.data.data;this.limit&&(e=e.slice(0,10)),this.tbData=e.map((t,e)=>Object.assign({serial:e<9?"0"+(e+1):e+1,title:t.alias.length?t.name+"（"+t.alias+"）":t.name,pop:t.popularity,singer:t.artists[0].name,album:t.album.name,duration:t.duration,formTime:this.timeFormt(t.duration),id:t.id,picUrl:t.album.picUrl}))})},handleRow(t){let e=Object.assign({},{id:t.id,title:t.title,singer:t.singer,duration:t.duration,picUrl:t.picUrl,url:"https://music.163.com/song/media/outer/url?id="+t.id});this.pushSong(e),this.isPlaying?this.$store.state.playerAbout.playList.includes(e)?this.$message.warning({message:"添加列表成功，下一首播放",showClose:!1}):this.$message.error({message:"歌曲已存在",showClose:!1}):(this.$message.success({message:"正在加载，即将播放",showClose:!1}),this.changePlayingIndex(this.playingIndex+1))}},mounted(){this.loadAll()}},Ct=xt,$t=Object(c["a"])(Ct,_t,wt,!1,null,null,null),Lt=$t.exports,Pt={name:"discovery",components:{Carousel:pt,SongList:vt,PlayList:Lt}},It=Pt,kt=Object(c["a"])(It,lt,rt,!1,null,null,null),jt=kt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SongList",{attrs:{isFull:!0}})},Tt=[],St={name:"list",components:{SongList:vt}},At=St,Mt=Object(c["a"])(At,Ot,Tt,!1,null,null,null),Et=Mt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("singer")])},Ut=[],qt={},Nt=qt,zt=Object(c["a"])(Nt,Ft,Ut,!1,null,null,null),Rt=zt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("singer")])},Dt=[],Wt={},Ht=Wt,Xt=Object(c["a"])(Ht,Bt,Dt,!1,null,null,null),Jt=Xt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PlayList")},Gt=[],Vt={name:"newest",components:{PlayList:Lt}},Qt=Vt,Yt=Object(c["a"])(Qt,Kt,Gt,!1,null,null,null),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("fm")])},ee=[],ae={},ie=ae,se=Object(c["a"])(ie,te,ee,!1,null,null,null),ne=se.exports,le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("mv")])},re=[],oe={},ue=oe,ce=Object(c["a"])(ue,le,re,!1,null,null,null),de=ce.exports,he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-empty",{attrs:{description:"这里什么也没有"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.replace("/")}}},[t._v("返回首页")])],1)],1)],1)},pe=[],me={name:"notFound"},ge=me,fe=Object(c["a"])(ge,he,pe,!1,null,null,null),ye=fe.exports;i["default"].use($["a"]);var be=new $["a"]({routes:[{path:"",component:nt,children:[{path:"/",component:jt},{path:"/list",component:Et},{path:"/Rank",component:Rt},{path:"/Singer",component:Jt},{path:"/newest",component:Zt}]},{path:"/fm",component:ne},{path:"/mv",component:de},{path:"/*",component:ye}]});i["default"].use(g["a"]);const ve={namespaced:!0,state:()=>({path:"/"}),mutations:{changePath(t,e){t.path=e}}},_e={namespaced:!0,state:()=>({playingIndex:0,isPlaying:!1,playList:[{id:1409382131,title:"摩天动物园",singer:"G.E.M.邓紫棋",duration:270676,picUrl:"https://p1.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=224y224",url:"https://music.163.com/song/media/outer/url?id=1409382131"}]}),mutations:{pushSong(t,e){t.playList.splice(t.playingIndex+1,0,e)},changePlayingIndex(t,e){t.playingIndex=e}},actions:{pushSong({commit:t,state:e},a){const i=e.playList.some(t=>{if(t.id===a.id)return!0});i||t("pushSong",a)}}};var we=new g["a"].Store({modules:{routeAbout:ve,playerAbout:_e},state:{isCollapse:!1,isMobile:!1}}),xe=a("77ed"),Ce=a.n(xe),$e=(a("154a"),a("0fb7"),a("450d"),a("f529")),Le=a.n($e),Pe=(a("46a1"),a("e5f2")),Ie=a.n(Pe),ke=(a("06f1"),a("6ac9")),je=a.n(ke),Oe=(a("acb6"),a("c673")),Te=a.n(Oe),Se=(a("bdc7"),a("aa2f")),Ae=a.n(Se),Me=(a("de31"),a("c69e")),Ee=a.n(Me),Fe=(a("a769"),a("5cc3")),Ue=a.n(Fe),qe=(a("a673"),a("7b31")),Ne=a.n(qe),ze=(a("adec"),a("3d2d")),Re=a.n(ze),Be=(a("b0ee"),a("d180")),De=a.n(Be),We=(a("a335"),a("c0bb")),He=a.n(We),Xe=(a("186a"),a("301f")),Je=a.n(Xe),Ke=(a("96dc"),a("9cea")),Ge=a.n(Ke),Ve=(a("b8e0"),a("a4c4")),Qe=a.n(Ve),Ye=(a("6b30"),a("c284")),Ze=a.n(Ye),ta=(a("f225"),a("89a9")),ea=a.n(ta),aa=(a("f4f9"),a("c2cc")),ia=a.n(aa),sa=(a("7a0f"),a("0f6c")),na=a.n(sa),la=(a("aaa5"),a("a578")),ra=a.n(la),oa=(a("b5c2"),a("20cf")),ua=a.n(oa),ca=(a("cbb5"),a("8bbc")),da=a.n(ca),ha=(a("e612"),a("dd87")),pa=a.n(ha),ma=(a("075a"),a("72aa")),ga=a.n(ma),fa=(a("0c67"),a("299c")),ya=a.n(fa),ba=(a("5466"),a("ecdf")),va=a.n(ba),_a=(a("38a0"),a("ad41")),wa=a.n(_a),xa=(a("1951"),a("eedf")),Ca=a.n(xa),$a=(a("1f1a"),a("4e4b")),La=a.n($a),Pa=(a("34db"),a("3803")),Ia=a.n(Pa),ka=(a("8bd8"),a("4cb2")),ja=a.n(ka),Oa=(a("ce18"),a("f58e")),Ta=a.n(Oa),Sa=(a("4ca3"),a("443e")),Aa=a.n(Sa),Ma=(a("3db2"),a("58b8")),Ea=a.n(Ma),Fa=(a("672e"),a("101e")),Ua=a.n(Fa);i["default"].use(Ua.a),i["default"].use(Ea.a),i["default"].use(Aa.a),i["default"].use(Ta.a),i["default"].use(ja.a),i["default"].use(Ia.a),i["default"].use(La.a),i["default"].use(Ca.a),i["default"].use(wa.a),i["default"].use(va.a),i["default"].use(ya.a),i["default"].use(ga.a),i["default"].use(pa.a),i["default"].use(da.a),i["default"].use(ua.a),i["default"].use(ra.a),i["default"].use(na.a),i["default"].use(ia.a),i["default"].use(ea.a),i["default"].use(Ze.a),i["default"].use(Qe.a),i["default"].use(Ge.a),i["default"].use(Je.a),i["default"].use(He.a),i["default"].use(De.a),i["default"].use(Re.a),i["default"].use(Ne.a),i["default"].use(Ue.a),i["default"].use(Ee.a),i["default"].use(Ae.a),i["default"].use(Te.a),i["default"].use(je.a),i["default"].prototype.$notify=Ie.a,i["default"].prototype.$message=Le.a,i["default"].config.productionTip=!1,i["default"].use(Ce.a),new i["default"]({render:t=>t(C),router:be,store:we}).$mount("#app")},"58b3":function(t,e,a){"use strict";a("e3b9")},"6aae":function(t,e,a){},7244:function(t,e,a){"use strict";a("1744")},"85ec":function(t,e,a){},9740:function(t,e,a){},b868:function(t,e,a){},be89:function(t,e,a){"use strict";a("6aae")},e3b9:function(t,e,a){},fd05:function(t,e,a){}});
//# sourceMappingURL=app.78cda4f1.js.map