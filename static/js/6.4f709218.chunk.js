"use strict";(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[6],{4006:function(e,n,i){i.r(n),i.d(n,{default:function(){return b}});var t=i(4165),a=i(5861),s=i(9439),r=i(3694),o=i(9448),c=i.n(o),l=i(2791),d=i(1087),u=i(8922),h=i(7580),m=i(1854),_=i(5547),p=i(5929),v=i(3180),x=i(184),f=c().bind({wrapper:"HorizontalVideo_wrapper__t2Izn",actions:"HorizontalVideo_actions__tLRTO","thumbnail-wp":"HorizontalVideo_thumbnail-wp__W6XDE",action:"HorizontalVideo_action__muI2M",thumbnail:"HorizontalVideo_thumbnail__y3MhW",duration:"HorizontalVideo_duration__fev+f",info:"HorizontalVideo_info__USIj+",title:"HorizontalVideo_title__BhGK6",config:"HorizontalVideo_config__QyXqJ","config-value":"HorizontalVideo_config-value__Y-m+4","config-separate":"HorizontalVideo_config-separate__8G4Cf",channel:"HorizontalVideo_channel__kGVO0","channel-thumbnail":"HorizontalVideo_channel-thumbnail__RQVbe","channel-name":"HorizontalVideo_channel-name__Na9gK","channel-tick":"HorizontalVideo_channel-tick__2JmYL",options:"HorizontalVideo_options__osGjd",description:"HorizontalVideo_description__Zdu3n",live:"HorizontalVideo_live__x55iW","live-icon":"HorizontalVideo_live-icon__Evg58","live-text":"HorizontalVideo_live-text__WJcMu"}),b=function(e){var n=e.data,i=(0,l.useState)(),o=(0,s.Z)(i,2),c=o[0],b=o[1],j=(0,l.useState)(),g=(0,s.Z)(j,2),w=g[0],V=g[1],N=[{icon:(0,x.jsx)(_.kr,{width:"2.4rem"}),label:"Add to queue"}];return(0,l.useEffect)((function(){(0,a.Z)((0,t.Z)().mark((function e(){var i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.U(n.channelId);case 2:i=e.sent,b(i);case 4:case"end":return e.stop()}}),e)})))()}),[n.channelId]),(0,l.useEffect)((function(){(0,a.Z)((0,t.Z)().mark((function e(){var i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.U(n.videoId);case 2:i=e.sent,V(i);case 4:case"end":return e.stop()}}),e)})))()}),[n.videoId]),(0,x.jsx)(x.Fragment,{children:n&&c&&w&&(0,x.jsxs)("div",{className:f("wrapper"),children:[(0,x.jsxs)(d.rU,{to:"/watch/".concat(n.videoId),className:f("thumbnail-wp"),children:[(0,x.jsxs)("div",{className:f("actions"),children:[(0,x.jsx)("div",{className:f("action"),children:(0,x.jsx)(_.aY,{width:"2.4rem",height:"2.4rem"})}),(0,x.jsx)("div",{className:f("action"),children:(0,x.jsx)(_.kr,{width:"2.4rem",height:"2.4rem"})})]}),(0,x.jsx)("img",{className:f("thumbnail"),src:n.thumbnail,alt:n.title}),"0:00"!==w.convertDuration&&(0,x.jsx)("span",{className:f("duration"),children:w.convertDuration})]}),(0,x.jsxs)(d.rU,{to:"/watch/".concat(n.videoId),className:f("info"),children:[(0,x.jsx)("h3",{className:f("title"),children:n.title}),(0,x.jsxs)("div",{className:f("config"),children:[(0,x.jsxs)("div",{className:f("config-value"),children:[w.views," l\u01b0\u1ee3t xem"]}),(0,x.jsx)("div",{className:f("config-separate")}),(0,x.jsx)("div",{className:f("config-value"),children:n.publishSince})]}),(0,x.jsxs)(d.rU,{to:"/channel/".concat(n.channelId),className:f("channel"),children:[(0,x.jsx)("img",{className:f("channel-thumbnail"),src:c.thumbnail,alt:c.title}),(0,x.jsx)("span",{className:f("channel-name"),children:c.title}),c.tick&&(0,x.jsx)("span",{className:f("channel-tick"),children:(0,x.jsx)(_.Ye,{width:"1.4rem",height:"1.4rem"})})]}),(0,x.jsx)("div",{className:f("description"),children:n.description}),"0:00"===w.convertDuration&&(0,x.jsxs)("span",{className:f("live"),children:[(0,x.jsx)("span",{className:f("live-icon"),children:(0,x.jsx)(_.xP,{width:"1.8rem",height:"1.8rem"})}),(0,x.jsx)("span",{className:f("live-text"),children:"LIVE"})]})]}),(0,x.jsx)(r.ZP,{interactive:!0,placement:"bottom-end",trigger:"click",render:function(){return(0,x.jsx)(v.Z,{children:(0,x.jsx)(p.Z,{data:N,small:!0})})},children:(0,x.jsx)("span",{className:f("options"),children:(0,x.jsx)(m.Z,{icon:(0,x.jsx)(_.Ty,{width:"2.4rem",height:"2.4rem"})})})})]})})}},7580:function(e,n,i){i.d(n,{U:function(){return r}});var t=i(4165),a=i(5861),s=i(2388),r=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var i,a,r,o,c,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)({method:"GET",url:"https://www.googleapis.com/youtube/v3/channels",params:{part:"snippet,statistics,brandingSettings",maxResults:1,id:n,key:"AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og"}});case 2:return i=e.sent,a=i.data.items[0],r=a.snippet,o=a.statistics,c=a.brandingSettings,(l={}).thumbnail=r.thumbnails.default.url,l.title=r.title,l.customUrl=r.customUrl,l.hiddenSubscriberCount=o.hiddenSubscriberCount,l.subscriberCount=o.subscriberCount,l.videoCount=o.videoCount,l.viewCount=o.viewCount,l.tick=o.subscriberCount>1e5,l.coverImage=c.image.bannerExternalUrl,e.abrupt("return",l);case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.4f709218.chunk.js.map