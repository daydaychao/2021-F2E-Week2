import{d as N,o as c,b as u,e,j as i,k as r,g,l as A,m as b,n as Z,w as W,f as B,p as q,v as J,F as K,q as O,t as S,s as $,x as Q,y as X}from"./vendor.c9c0133b.js";import{u as R,g as M,S as T,a as tt}from"./enum.7d5fc5f6.js";import{M as V}from"./map.e1fc07b9.js";import{_ as et}from"./plugin-vue_export-helper.5a098b48.js";var it="https://divinechao.github.io/2021-F2E-Week2/assets/home_hurry.3f21d96a.png";const ot={class:"GPS"},at={key:0},st=g("\u6309\u4E0BGPS\u8B93\u6211\u5011\u76F4\u63A5"),nt=e("br",null,null,-1),ct=g("\u5E6B\u60A8\u5B9A\u4F4D\u4F4D\u7F6E"),ut=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},[e("path",{d:"M0 972.138V556.629c2.192-43.973 37.788-75.724 76.898-76.252h186.106c53.196-40.854 90.897-97.554 142.165-138.611c18.094-14.432 32.095-30.479 42.003-48.142c32.214-63.281 12.695-136.954 58.481-187.399c92.008-39.482 202.231 15.751 233.279 102.423c24.405 70.78 8.052 141.366-22.294 203.877c109.856-.182 219.71.708 329.563 1.292c89.434 6.678 153.202 66.892 153.797 152.504c-.244 86.275-74.623 149.017-153.797 150.565h-129.24c-4.308 25.417-12.709 48.465-25.202 69.144c7.239 53.145-9.327 105.247-41.356 142.812c-17.576 306.75-419.443 124.761-569.952 120.193H76.898C32.617 1046.939.528 1011.445 0 972.138zm277.221 0c120.425 2.591 531.909 184.658 492.407-76.252c43.546-23.471 60.301-86.286 33.603-126.01c40.566-40.005 52.118-90.265 12.925-129.887c38.771 0 77.113-.216 115.023-.646c37.911-.431 76.253-.646 115.024-.646c44.371-.933 75.122-33.487 75.606-72.374c-1.014-45.976-35.914-75.137-75.606-75.606c-150.385-.008-298.632-1.276-438.126-1.292c12.555-100.763 132.769-237.585 10.017-316.963c-19.652-9.652-35.367-13.749-55.896-10.017c-3.446 1.723-5.385 3.447-5.816 5.17c-.431 1.723-1.076 4.523-1.938 8.4c-13.044 79.87-25.221 159.73-87.237 212.601c-68.263 52.343-108.514 134.749-186.752 168.014h-3.231l-.003 415.508z",fill:"currentColor"})],-1),lt=[st,nt,ct,ut],rt=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z",fill:"white"})],-1),dt=g("GPS "),_t=[rt,dt],ht=N({emits:["GpsEvent"],setup(a,{emit:t}){const p=R();async function f(){console.log("getGPS"),navigator.geolocation||alert("\u6293\u4E0D\u5230\u60A8\u7684GPS\u8CC7\u6599"),await navigator.geolocation.getCurrentPosition(function(s){console.log("\u4F60\u7684gps",s.coords.latitude,s.coords.longitude),p.setLocation(s.coords.latitude,s.coords.longitude),t("GpsEvent")})}return(s,w)=>(c(),u("section",ot,[e("article",null,[!i(p).userLocation[0]&&!i(p).userLocation[1]?(c(),u("span",at,lt)):r("",!0)]),e("article",{class:"GPS_circle",onClick:w[0]||(w[0]=x=>f())},_t)]))}});const l=a=>(Q("data-v-1da8decf"),a=a(),X(),a),vt={class:"content"},gt={key:0,style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"}},pt=g(".. "),mt={key:1,style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"}},St={class:"car-nav"},wt={class:"Homeselect"},yt=["value"],bt={key:0},kt=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},[e("path",{d:"M227.863 1200h415.508c43.973-2.192 75.725-37.788 76.253-76.898V936.995c40.854-53.196 97.553-90.897 138.61-142.165c14.432-18.094 30.479-32.095 48.142-42.003c63.281-32.214 136.955-12.695 187.399-58.481c39.482-92.008-15.751-202.231-102.423-233.279c-70.78-24.404-141.366-8.051-203.878 22.294c.182-109.856-.708-219.71-1.292-329.564C779.505 64.363 719.291.594 633.679 0c-86.275.244-149.017 74.623-150.565 153.796v129.241c-25.417 4.308-48.465 12.708-69.144 25.202c-53.145-7.24-105.247 9.327-142.811 41.356c-306.751 17.576-124.761 419.443-120.194 569.951v203.555c2.096 44.282 37.59 76.37 76.898 76.899zm0-277.222c-2.591-120.425-184.658-531.908 76.252-492.406c23.47-43.546 86.285-60.301 126.009-33.603c40.005-40.566 90.265-52.118 129.887-12.925c0-38.771.216-77.113.646-115.024s.646-76.252.646-115.024c.933-44.37 33.487-75.122 72.375-75.605c45.975 1.014 75.136 35.914 75.605 75.605c.008 150.385 1.276 298.632 1.292 438.126c100.763-12.555 237.585-132.769 316.963-10.017c9.652 19.652 13.749 35.367 10.017 55.896c-1.724 3.446-3.446 5.385-5.17 5.816c-1.723.431-4.523 1.076-8.4 1.938c-79.87 13.044-159.73 25.221-212.601 87.237c-52.343 68.263-134.749 108.514-168.013 186.752v3.231H227.863z",fill:"currentColor"})],-1)),ft=g(" \u9078\u64C7\u60F3\u67E5\u8A62\u7684\u7E23\u5E02 "),Ct=[kt,ft],At={class:"Homecar"},Bt={class:"car-btns"},xt={key:0},Et=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},[e("path",{d:"M227.863 1200h415.508c43.973-2.192 75.725-37.788 76.253-76.898V936.995c40.854-53.196 97.553-90.897 138.61-142.165c14.432-18.094 30.479-32.095 48.142-42.003c63.281-32.214 136.955-12.695 187.399-58.481c39.482-92.008-15.751-202.231-102.423-233.279c-70.78-24.404-141.366-8.051-203.878 22.294c.182-109.856-.708-219.71-1.292-329.564C779.505 64.363 719.291.594 633.679 0c-86.275.244-149.017 74.623-150.565 153.796v129.241c-25.417 4.308-48.465 12.708-69.144 25.202c-53.145-7.24-105.247 9.327-142.811 41.356c-306.751 17.576-124.761 419.443-120.194 569.951v203.555c2.096 44.282 37.59 76.37 76.898 76.899zm0-277.222c-2.591-120.425-184.658-531.908 76.252-492.406c23.47-43.546 86.285-60.301 126.009-33.603c40.005-40.566 90.265-52.118 129.887-12.925c0-38.771.216-77.113.646-115.024s.646-76.252.646-115.024c.933-44.37 33.487-75.122 72.375-75.605c45.975 1.014 75.136 35.914 75.605 75.605c.008 150.385 1.276 298.632 1.292 438.126c100.763-12.555 237.585-132.769 316.963-10.017c9.652 19.652 13.749 35.367 10.017 55.896c-1.724 3.446-3.446 5.385-5.17 5.816c-1.723.431-4.523 1.076-8.4 1.938c-79.87 13.044-159.73 25.221-212.601 87.237c-52.343 68.263-134.749 108.514-168.013 186.752v3.231H227.863z",fill:"currentColor"})],-1)),Ft=g(" \u85C9\u7531\u501F / \u9084\u8ECA\u7684\u6309\u9215\u4F86\u770B\u6240\u5269\u7684\u6578\u91CF\u5594 "),Dt=[Et,Ft],Lt={class:"map_content"},Nt={key:0,class:"Homeimg"},$t=l(()=>e("img",{src:it},null,-1)),Rt=l(()=>e("h1",null,"\u8D95\u5FEB\u958B\u59CB\u9A0E\u4E0AUBike\u56DB\u8655\u65C5\u904A\u5427 !",-1)),Mt=l(()=>e("p",null,"\u908A\u9A0E\u8173\u8E0F\u8ECA\u908A\u7528\u624B\u6A5F\u662F\u5F88\u5371\u96AA\u7684\u5594 (\xB4\uFF65\u03C9\uFF65`)",-1)),Vt=[$t,Rt,Mt],Ht={key:2,class:"HomeCurrentStation"},Pt={class:"StationName"},zt={class:"StationNum"},It=l(()=>e("h5",null,"\u53EF\u501F",-1)),Ut={class:"number"},Gt=l(()=>e("span",{class:"line"},"|",-1)),jt=l(()=>e("h5",null,"\u53EF\u9084",-1)),Yt={class:"number"};var k;(function(a){a[a.city=0]="city",a[a.gps=1]="gps",a[a.undefined=2]="undefined"})(k||(k={}));const Zt=N({setup(a){const t=R(),p=M(T),f=M(tt),s=A();b(()=>t.userLocation);let w=b(()=>t.userLocation[0]),x=b(()=>t.userLocation[0]),H=b(()=>t.getHasLocation),m=A(2),P=t.nearAvailability,y=Z({rent:0,return:0,name:"",address:""});function C(_){console.log("updateCurrentByUID");let o=P.find(h=>h.StationUID===_);y.rent=o==null?void 0:o.AvailableRentBikes,y.rent=o==null?void 0:o.AvailableReturnBikes;let n=t.bikeStations.find(h=>h.StationUID===_);y.name=n==null?void 0:n.StationName.Zh_tw,y.address=n==null?void 0:n.StationAddress.Zh_tw}function z(){s.value&&t.getStationData(s.value,w.value,x.value)}function I(){s.value&&t.getAvailabilityData(s.value)}function U(){t.userLocation&&t.getNearByStationData(t.userLocation[0],t.userLocation[1])}function G(){t.userLocation&&t.getNearByAvailabilityData(t.userLocation[0],t.userLocation[1])}async function j(){console.log("handleSelect"),await z(),await I(),m.value=0}async function Y(){console.log("handleGPS"),await G(),await U(),m.value=1}W(()=>t.nearAvailability,(_,o)=>{var n;console.log("\u8CC7\u6599\u8B8A\u66F4\u5C31update"),!!((n=t.nearAvailability[0])==null?void 0:n.StationUID)&&C(t.nearAvailability[0].StationUID)},{immediate:!0,deep:!0});let d=A(!0);function E(_){switch(_){case"rent":d.value=!0,t.setIsRent(!0),C(t.getSelectedBikeStation.StationUID);break;case"return":d.value=!1,t.setIsRent(!1),C(t.getSelectedBikeStation.StationUID)}}return(_,o)=>{var n,h,F,D;return c(),u("main",vt,[i(t).bikeStations.length>0&&i(m)===0?(c(),u("article",gt,[pt,B(V,{location:[i(t).bikeStations[0].StationPosition.PositionLat,i(t).bikeStations[0].StationPosition.PositionLon],stations:i(t).bikeStations,availability:i(t).bikeAvailability,isRent:i(t).getIsRent},null,8,["location","stations","availability","isRent"])])):r("",!0),i(H)&&i(m)===1?(c(),u("article",mt,[B(V,{location:[i(t).userLocation[0],i(t).userLocation[1]],stations:i(t).getNearByStations,availability:i(t).getNearByAvailability,isRent:i(t).getIsRent},null,8,["location","stations","availability","isRent"])])):r("",!0),e("article",St,[e("div",wt,[q(e("select",{class:"form-control",value:"\u8F38\u5165\u60F3\u67E5\u8A62\u7684\u5730\u9EDE","onUpdate:modelValue":o[0]||(o[0]=v=>s.value=v),onChange:j},[(c(!0),u(K,null,O(i(p),(v,L)=>(c(),u("option",{key:L,value:v},S(i(f)[L]),9,yt))),128))],544),[[J,s.value]]),k?r("",!0):(c(),u("span",bt,Ct))]),e("div",At,[e("div",Bt,[e("button",{type:"button",class:$(["btn-rent se_btn",{"bg-orange":i(d),"text-white":i(d)}]),onClick:o[1]||(o[1]=v=>E("rent"))},"\u501F\u8ECA",2),e("button",{type:"button",class:$(["btn-return se_btn",{"bg-green":!i(d),"text-white":!i(d)}]),onClick:o[2]||(o[2]=v=>E("return"))},"\u9084\u8ECA",2)]),k?r("",!0):(c(),u("span",xt,Dt))])]),e("article",Lt,[i(m)==2?(c(),u("article",Nt,Vt)):r("",!0),B(ht,{onGpsEvent:o[3]||(o[3]=v=>Y())})]),i(t).getSelectedBikeStation.name!=null?(c(),u("article",Ht,[e("div",Pt,[e("h2",null,S(((n=i(t).getSelectedBikeStation)==null?void 0:n.name)||"\u8ACB\u9EDE\u64CA\u81EA\u884C\u8ECA\u7AD9\u9EDE"),1),e("h4",null,S((h=i(t).getSelectedBikeStation)==null?void 0:h.address),1)]),e("div",zt,[e("div",null,[It,e("span",Ut,S(((F=i(t).getSelectedBikeStation)==null?void 0:F.availableRent)||0),1)]),Gt,e("div",null,[jt,e("span",Yt,S(((D=i(t).getSelectedBikeStation)==null?void 0:D.availableReturn)||0),1)])])])):r("",!0)])}}});var Ot=et(Zt,[["__scopeId","data-v-1da8decf"]]);export{Ot as default};