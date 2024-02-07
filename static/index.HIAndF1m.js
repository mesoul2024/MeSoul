import{t as s,v as o,x as t,y as k,H as b,r as f,L as D,V as C,F as l,W as B,X as $,K as d,I as v,J as x,Y as M,z as S,Z as m}from"./entry.-S7cXBBB.js";const V={class:"cursor-pointer"},N=["href"],z={class:"w-full md:h-[150px] h-[100px] border-none"},I=["src","alt"],K={class:"text-lg"},T={__name:"Card",props:{title:"",jsonData:""},setup(h){const a=h;return(n,i)=>(s(),o("div",V,[t("a",{href:`/${h.jsonData}`},[t("div",z,[t("img",{src:`/jsonImages/${h.jsonData}.webp`,class:"w-full h-full rounded-lg object-cover",alt:h.jsonData,width:"100"},null,8,I)]),t("span",K,k(a.title),1)],8,N)]))}},A=T,F=()=>b("datas",()=>{}),J={class:"my-3"},L=t("div",null,null,-1),R=t("div",{class:"flex justify-center text-[36px] font-bold mb-5"}," MeSoul心靈味增湯 - 屬於你專屬的心理測驗 ",-1),W=t("div",{class:"flex justify-center mb-5 text-lg text-[#686868]"}," 我們致力於開發創意獨特的心理測驗產品，帶給您原汁原味的驚喜和啟發。這些測驗涵蓋心理性格、智力、知識、人際關係和影視文學作品角色等多個領域，每個題目都經過精心設計，旨在挑戰您的思維和啟發您的創造力。透過這些獨特的題目，您將體驗到前所未有的心理測驗體驗，讓您感到快樂、驚喜，並更深入地了解自己的潛力和能力。 ",-1),Z={class:"flex mb-5"},E={class:"w-full flex relative items-center z-1"},H=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"},null,-1),O=[H],U=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 my-auto mx-2 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})],-1),X=[U],Y=t("div",{class:"flex justify-center font-bold text-xl py-2"},"分類",-1),q={class:"grid grid-cols-4 gap-2 justify-items-center"},G=["onClick"],P={key:0},Q={key:0},ee=t("div",{class:"flex justify-center font-bold text-xl pt-10 pb-2"}," 最新心理測驗 ",-1),te={key:0,class:"grid xl:grid-cols-3 grid-cols-2 gap-4"},se={key:1},le=t("div",{class:"flex justify-center font-bold text-xl pt-10 pb-2"}," 熱門心理測驗 ",-1),oe={key:0,class:"grid xl:grid-cols-3 grid-cols-2 gap-4"},ne={key:2},ae=t("div",{class:"flex justify-center font-bold text-xl pt-10 pb-2"}," 所有心理測驗 ",-1),re={key:0,class:"grid xl:grid-cols-3 grid-cols-2 gap-4"},ie={key:1,class:"grid xl:grid-cols-3 grid-cols-2 gap-4 pt-10"},ue={__name:"index",setup(h){let a=f(""),n=f(JSON.parse(F().value)),i=f([]),r=f("所有");const j=["所有","戀愛","MBTI","性格","動漫","創意","影視"],p=_=>{r.value=_,r.value==="所有"?i.value=[]:i.value=n.value.all.filter(c=>c.category.includes(r.value))},y=()=>{a.value!==""?i.value=n.value.all.filter(_=>_.title.includes(a.value)&&(r.value==="所有"||_.category.includes(r.value))):r.value==="所有"?i.value=[]:p(r.value)},w=()=>{a.value="",i.value=[],r.value==="所有"?i.value=[]:p(r.value)};return(_,c)=>{const g=A;return s(),o("div",J,[L,R,W,t("div",Z,[t("div",E,[D(t("input",{type:"text",class:"w-full h-[40px] outline-none pl-2 rounded-l-lg px-4 text-themeBlack","onUpdate:modelValue":c[0]||(c[0]=e=>B(a)?a.value=e:a=e),onKeyup:$(y,["enter"])},null,544),[[C,l(a)]]),l(a)!==""?(s(),o("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer absolute right-0 text-themeBlack mx-2",onClick:c[1]||(c[1]=e=>w())},O)):d("",!0)]),t("button",{class:"bg-theme3 rounded-r-lg h-[40px]",onClick:c[2]||(c[2]=e=>y())},X)]),Y,t("div",q,[(s(),o(v,null,x(j,(e,u)=>t("div",{class:M(["flex justify-center items-center w-[100%] border rounded-full md:h-[40px] h-[30px] md:text-sm text-xs border-theme3 text-themeBlack dark:text-themeWhite font-bold hover:bg-theme3 cursor-pointer hover:text-white delay-100 transition",l(r)===e?"bg-theme3 text-white":""]),onClick:ce=>p(e)},k(e),11,G)),64))]),t("div",null,[l(i).length==0&&l(a)===""&&l(r)==="所有"?(s(),o("div",P,[l(n).all?(s(),o("div",Q,[ee,l(n).all.length>0?(s(),o("div",te,[(s(),o(v,null,x(6,e=>S(g,{class:"hover:text-theme3",key:e,title:l(n).all[e-1].title,jsonData:l(n).all[e-1].jsonData},null,8,["title","jsonData"])),64))])):d("",!0)])):d("",!0),l(n).hot?(s(),o("div",se,[le,l(n).hot.length>0?(s(),o("div",oe,[(s(!0),o(v,null,x(l(n).hot,(e,u)=>(s(),m(g,{class:"hover:text-theme3",key:u,title:e.title,jsonData:e.jsonData},null,8,["title","jsonData"]))),128))])):d("",!0)])):d("",!0),l(n).all?(s(),o("div",ne,[ae,l(n).all.length>0?(s(),o("div",re,[(s(!0),o(v,null,x(l(n).all,(e,u)=>(s(),m(g,{class:"hover:text-theme3",key:u,title:e.title,jsonData:e.jsonData},null,8,["title","jsonData"]))),128))])):d("",!0)])):d("",!0)])):(s(),o("div",ie,[(s(!0),o(v,null,x(l(i),(e,u)=>(s(),m(g,{class:"hover:text-theme3",key:u,title:e.title,jsonData:e.jsonData},null,8,["title","jsonData"]))),128))]))])])}}};export{ue as default};
