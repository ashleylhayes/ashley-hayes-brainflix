(this["webpackJsonpashley-hayes-brainflix"]=this["webpackJsonpashley-hayes-brainflix"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(29),s=c.n(i),o=(c(36),c(31)),r=c(12),d=c(2),l=c(8),m=c(9),j=c(11),u=c(10),h=(c(37),c(38),c.p+"static/media/Logo-brainflix.0153380c.svg"),v=c.p+"static/media/Icon-search.6b9e4c56.svg",b=c.p+"static/media/Icon-upload.f7a2b889.svg",p=c(0);var _=function(){return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{children:Object(p.jsx)(r.b,{to:"/",className:"header__logo-link",children:Object(p.jsx)("img",{className:"header__logo",src:h,alt:"logo with blue square with a white arrow inside, representing a play button. The word BrainFlix is written in black to the right of that."})})}),Object(p.jsx)("input",{type:"search",src:v,name:"search",placeholder:"Search",className:"header__searchbar"}),Object(p.jsx)("button",{className:"header__upload-button",children:Object(p.jsx)(r.b,{to:"/videoupload",className:"header__upload-button-link",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"header__upload-icon",src:b,alt:"plus sign icon"}),Object(p.jsx)("p",{className:"header__upload-text",children:"UPLOAD"})]})})}),Object(p.jsx)("div",{className:"header__avatar-container"})]})},O=(c(45),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"current-video__comment-form-container",children:[Object(p.jsx)("div",{className:"current-video__avatar-container",children:Object(p.jsx)("div",{className:"current-video__avatar-image"})}),Object(p.jsxs)("form",{name:"commentsForm",className:"current-video__comment-form",children:[Object(p.jsx)("label",{className:"current-video__comment-form-title",children:"JOIN THE CONVERSATION"}),Object(p.jsx)("textarea",{className:"current-video__comment-form-input",name:"comment",placeholder:"Write comment here",required:!0}),Object(p.jsx)("button",{className:"current-video__comment-form-button",children:"COMMENT"})]})]})}}]),c}(a.a.Component)),x=(c(46),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){var e=this.props,t=e.name,c=e.date,n=e.comment;return Object(p.jsxs)("div",{className:"current-video__comment",children:[Object(p.jsx)("div",{className:"current-video__comment-avatar-container",children:Object(p.jsx)("div",{className:"current-video__comment-avatar-image"})}),Object(p.jsxs)("div",{className:"current-video__comment-info-container",children:[Object(p.jsx)("p",{className:"current-video__comment-name",children:t}),Object(p.jsx)("p",{className:"current-video__comment-date",children:c}),Object(p.jsx)("p",{className:"current-video__comment-comment",children:n})]})]})}}]),c}(a.a.Component)),f=(c(47),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){var e=this.props,t=e.image,c=e.title,n=e.channel;return Object(p.jsxs)("div",{className:"next-video__side-video",children:[Object(p.jsx)("div",{className:"next-video__side-video-image-container",children:Object(p.jsx)("img",{className:"next-video__side-video-image",src:t,alt:""})}),Object(p.jsxs)("div",{className:"next-video__side-video-info-container",children:[Object(p.jsx)("p",{className:"next-video__side-video-title",children:c}),Object(p.jsx)("p",{className:"next-video__side-video-account",children:n})]})]})}}]),c}(a.a.Component)),N=c.p+"static/media/Icon-play.1a5961d4.svg",g=c.p+"static/media/Icon-fullscreen.1d9f48e9.svg",y=c.p+"static/media/Icon-volume.dffff5ec.svg",w=c.p+"static/media/Icon-views.84be3383.svg",C=c.p+"static/media/Icon-likes.e870740b.svg",I=c(14),k=c.n(I),V="https://fast-plains-50193.herokuapp.com/videos/",D=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={currentVideoContent:[],commentsContent:[],sideVideoContent:[]},e}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;k.a.get(V+"1af0jruup5gu").then((function(t){var c=t.data;e.setState({currentVideoContent:c,commentsContent:c.comments})})).catch((function(e){return console.log(e)})),k.a.get(V).then((function(t){var c=t.data;e.setState({sideVideoContent:c})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e,t){var c=this;window.scrollTo(0,0);var n=this.props.match,a=n.params.id?n.params.id:"1af0jruup5gu";n.params.id!==this.state.currentVideoContent.id&&k.a.get(V+a).then((function(e){var t=e.data;c.setState({currentVideoContent:t,commentsContent:t.comments})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{}),Object(p.jsxs)("section",{className:"current-video",children:[Object(p.jsx)("video",{className:"current-video__video",poster:this.state.currentVideoContent.image}),Object(p.jsxs)("div",{className:"current-video__controls-container",children:[Object(p.jsx)("div",{className:"current-video__play",children:Object(p.jsx)("img",{className:"current-video__play-icon",src:N,alt:"play arrow icon"})}),Object(p.jsxs)("div",{className:"current-video__scrubber",children:[Object(p.jsx)("div",{className:"current-video__scrubber-line"}),Object(p.jsxs)("p",{className:"current-video__scrubber-time",children:["0:00 / ",this.state.currentVideoContent.duration]})]}),Object(p.jsxs)("div",{className:"current-video__expand-volume",children:[Object(p.jsx)("img",{className:"current-video__expand",src:g,alt:"expand video icon"}),Object(p.jsx)("img",{className:"current-video__volume",src:y,alt:"volume icon"})]})]}),Object(p.jsxs)("main",{className:"current-video__all",children:[Object(p.jsxs)("div",{className:"current-video__all-info",children:[Object(p.jsxs)("div",{className:"current-video__details",children:[Object(p.jsx)("h1",{className:"current-video__title",children:this.state.currentVideoContent.title}),Object(p.jsxs)("p",{className:"current-video__uploader",children:["By ",this.state.currentVideoContent.channel]}),Object(p.jsx)("p",{className:"current-video__date",children:new Date(this.state.currentVideoContent.timestamp).toLocaleDateString("en-US")}),Object(p.jsxs)("div",{className:"current-video__tally-container",children:[Object(p.jsx)("img",{className:"current-video__tally-icon",src:w,alt:"eye icon for views"}),Object(p.jsx)("p",{className:"current-video__tally-text",children:this.state.currentVideoContent.views})]}),Object(p.jsxs)("div",{className:"current-video__tally-container",children:[Object(p.jsx)("img",{className:"current-video__tally-icon",src:C,alt:"heart icon for likes"}),Object(p.jsx)("p",{className:"current-video__tally-text",children:this.state.currentVideoContent.likes})]})]}),Object(p.jsx)("div",{className:"current-video__description-container",children:Object(p.jsx)("p",{className:"current-video__description",children:this.state.currentVideoContent.description})}),Object(p.jsxs)("div",{className:"current-video__comments-container",children:[Object(p.jsxs)("p",{className:"current-video__comments-number",children:[this.state.commentsContent.length," Comments"]}),Object(p.jsx)(O,{}),this.state.commentsContent.map((function(e){return Object(p.jsx)(x,{name:e.name,date:new Date(e.timestamp).toLocaleDateString("en-US"),comment:e.comment},e.id)}))]})]}),Object(p.jsx)("div",{children:Object(p.jsxs)("section",{className:"next-video__container",children:[Object(p.jsx)("p",{className:"next-video__title",children:"NEXT VIDEO"}),Object(p.jsx)("div",{children:this.state.sideVideoContent.filter((function(t){return t.id!==e.state.currentVideoContent.id})).map((function(e){return Object(p.jsx)(r.b,{className:"next-video__link",to:"/".concat(e.id),children:Object(p.jsx)(f,{image:e.image,title:e.title,channel:e.channel},e.id)},e.id)}))})]})})]})]})]})}}]),c}(a.a.Component),E=(c(66),c.p+"static/media/Upload-video-preview.313a407c.jpg"),T=c(69),S="https://fast-plains-50193.herokuapp.com/videos/",A=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).addVideo=function(t){t.preventDefault();var c={id:Object(T.a)(),title:t.target.title.value,channel:"Mohan Muruge",image:E,description:t.target.description.value,views:"1,377",likes:"99",duration:"3:33",video:"https://project-2-api.herokuapp.com/stream",timestamp:Date.now(),comments:[{name:"Micheal Lyons",comment:"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",id:"1ab6d9f6-da38-456e-9b09-ab0acd9ce818",likes:0,timestamp:1545162149e3},{name:"Gary Wong",comment:"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He\u2019s so talented! I wish I can ride like him one day so I can really enjoy myself!",id:"cc6f173d-9e9d-4501-918d-bc11f15a8e14",likes:0,timestamp:1544595784046},{name:"Theodore Duncan",comment:"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He\u2019s definitely my favorite ever!",id:"993f950f-df99-48e7-bd1e-d95003cc98f1",likes:0,timestamp:1542262984046}]};console.log(c),k.a.post(S,c).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),setTimeout((function(){e.props.history.push("/")}),1300)},e}return Object(m.a)(c,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(_,{})}),Object(p.jsx)("div",{className:"upload-video__divider"}),Object(p.jsxs)("div",{className:"upload-video",children:[Object(p.jsx)("h1",{className:"upload-video__title",children:"Upload Video"}),Object(p.jsxs)("form",{onSubmit:this.addVideo,className:"upload-video__form",children:[Object(p.jsxs)("div",{className:"upload-video__upload-container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"upload-video__thumbnail-title",children:"VIDEO THUMBNAIL"}),Object(p.jsx)("div",{className:"upload-video__thumbnail-container",children:Object(p.jsx)("img",{className:"upload-video__thumbnail",src:E,alt:"add your upload"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"upload-video__video-title-label",children:"TITLE YOUR VIDEO"}),Object(p.jsx)("input",{type:"text",name:"title",className:"upload-video__video-title-input",placeholder:"Add a title to your video"}),Object(p.jsx)("p",{className:"upload-video__video-description-label",children:"ADD A VIDEO DESCRIPTION"}),Object(p.jsx)("textarea",{type:"text",name:"description",className:"upload-video__video-description",placeholder:"Add a description of your video"})]})]}),Object(p.jsxs)("div",{className:"upload-video__button-container",children:[Object(p.jsx)("button",{className:"upload-video__publish-button",children:"PUBLISH"}),Object(p.jsx)("button",{className:"upload-video__cancel-button",children:"CANCEL"})]})]})]})]})}}]),c}(a.a.Component);var L=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",exact:!0,component:D}),Object(p.jsx)(d.a,{path:"/videoupload",component:A}),Object(p.jsx)(d.a,{path:"/:id",render:function(e){return Object(p.jsx)(D,Object(o.a)({},e))}})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.ec6a3778.chunk.js.map