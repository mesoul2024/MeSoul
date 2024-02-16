import{E as C,r as h,o as H,t as l,v as o,x as e,F as s,B,y as i,G as S,H as z,z as L,I as b,J as y,K as D,L as j,M as q}from"./entry.TfcisNIS.js";const F="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%20clip-rule='evenodd'%20baseProfile='basic'%3e%3cpolygon%20fill='%23616161'%20points='41,6%209.929,42%206.215,42%2037.287,6'/%3e%3cpolygon%20fill='%23fff'%20fill-rule='evenodd'%20points='31.143,41%207.82,7%2016.777,7%2040.1,41'%20clip-rule='evenodd'/%3e%3cpath%20fill='%23616161'%20d='M15.724,9l20.578,30h-4.106L11.618,9H15.724%20M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z'/%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%23039be5'%20d='M24%205A19%2019%200%201%200%2024%2043A19%2019%200%201%200%2024%205Z'/%3e%3cpath%20fill='%23fff'%20d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'/%3e%3c/svg%3e",O={class:"flex border border-[#D8D8D8] md:h-[50px] h-[40px] items-center md:rounded-2xl rounded-lg w-full md:max-w-[1260px] bg-white md:mt-[30px] mt-[10px] mb-[10px] z-20"},E={class:"lg:text-md xl:text-xl text-[0.82rem] md:ml-3 ml-0 w-full text-[#707070] md:font-normal"},J=["value"],R=["href"],U=S('<div class="border-x border-[#D8D8D8] h-full relative flex flex-col items-center group md:px-4 px-2 cursor-pointer hover:bg-theme3"><div class="absolute bottom-10 flex-col items-center hidden mb-6 group-hover:flex"><span class="relative z-10 p-2 text-xs leading-none text-white whitespace-pre bg-theme3 shadow-lg">Twitter</span><div class="w-3 h-3 -mt-2 rotate-45 bg-theme3"></div></div><img src="'+F+'" width="32" height="32" class="my-auto"></div>',1),Z=[U],G=["href"],K=S('<div class="border-r border-[#D8D8D8] h-full relative flex flex-col items-center group md:px-4 px-2 hover:bg-theme3 cursor-pointer"><div class="absolute bottom-10 flex-col items-center hidden mb-6 group-hover:flex"><span class="relative z-10 p-2 text-xs leading-none text-white whitespace-pre bg-theme3 shadow-lg">Facebook</span><div class="w-3 h-3 -mt-2 rotate-45 bg-theme3"></div></div><img src="'+N+'" width="48" height="48" class="my-auto"></div>',1),P=[K],I={class:"absolute bottom-10 flex-col items-center hidden mb-6 group-hover:flex"},Q={class:"relative z-10 p-2 text-xs leading-none text-white whitespace-pre bg-theme3 shadow-lg"},W=e("div",{class:"w-3 h-3 -mt-2 rotate-45 bg-theme3"},null,-1),X=e("svg",{class:"my-auto group-hover:fill-white fill-[#454545] w-[18px] h-[18px]",alt:"copy",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},[e("path",{id:"copy-solid",d:"M9.563,0h4.363a1.688,1.688,0,0,1,1.192.5L17.5,2.883A1.688,1.688,0,0,1,18,4.075v7.738A1.688,1.688,0,0,1,16.313,13.5H9.563a1.688,1.688,0,0,1-1.688-1.687V1.688A1.688,1.688,0,0,1,9.563,0ZM1.688,4.5H6.75V6.75H2.25v9H9V14.625h2.25v1.687A1.688,1.688,0,0,1,9.563,18H1.688A1.688,1.688,0,0,1,0,16.313V6.188A1.688,1.688,0,0,1,1.688,4.5Z"})],-1),Y={__name:"shareUrl",setup(M,{expose:_}){const a=C();let c=h(""),d=h(""),r=h(null);const f=async()=>{let p=document.querySelector("#url");p.setAttribute("type","text"),p.select();try{const u=document.execCommand("copy");r.value=u,setTimeout(()=>{r.value=null},2e3)}catch{alert("Oops, unable to copy")}p.setAttribute("type","hidden")},g=()=>{c.value=`https://mesoul.org/${a.params.name}`};return _({getUrl:g}),H(()=>{g(),d.value=`大家快來測！！%20${c.value}`}),(p,u)=>(l(),o("div",O,[e("div",E,[e("input",{type:"hidden",value:s(c),id:"url",readonly:"readonly"},null,8,J),B(" "+i(s(c)),1)]),e("a",{class:"twitter-share-button h-full",target:"_blank",href:`https://twitter.com/intent/tweet?text=${s(d)}`},Z,8,R),e("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${s(c)}`,target:"_blank",class:"h-full"},P,8,G),e("div",{class:"h-full relative flex flex-col items-center group md:px-4 px-2 cursor-pointer hover:bg-theme3 hover:md:rounded-r-2xl hover:rounded-r-lg",onClick:u[0]||(u[0]=k=>f())},[e("div",I,[e("span",Q,i(s(r)?"複製成功":"複製網頁連結"),1),W]),X])]))}},ee=Y,te=()=>z("data",()=>{}),se={key:0},le={class:"w-full pb-2"},oe={key:0,class:"my-2"},re={class:"bg-theme3 text-center text-white text-2xl font-bold py-2 rounded-t-lg"},ne={class:"bg-[#F2F2F2] text-black p-2 rounded-b-lg flex flex-col"},ie={class:"text-xl py-2 flex w-full"},ae={class:"flex pt-10"},ce={key:1,class:"my-2"},de={class:"text-2xl text-center py-2"},he={class:"flex flex-col w-full"},ue=["onClick"],xe={key:0,class:"flex w-full flex-col"},pe={key:2},ve={class:"bg-theme3 text-center w-full p-4 text-white my-2 rounded-lg"},me={class:"text-2xl"},fe={class:"flex flex-wrap pt-4"},ge={class:"px-4 bg-white mr-2 text-theme3 rounded-full py-1 my-2"},_e={class:"flex justify-center"},we={key:3,class:"flex justify-center text-lg font-bold"},ke={__name:"[name]",setup(M){const _=[1.5,2,2.5,3];let a=h(JSON.parse(te().value)),c=h(!1),d=h([]),r=h({}),f=h(!1);const g=()=>{c.value=!0},p=n=>{let t=k(n);d.value.push(t),r.value[t]?r.value[t]+=1:r.value[t]=1},u=()=>{let n=d.value.pop();r.value[n]-=1},k=n=>Object.keys(a.value.results)[n],v=()=>{let n="",t=0;return Object.keys(r.value).forEach(x=>{t<r.value[x]&&(t=r.value[x],n=x)}),a.value.results[n]},T=()=>{const n=Math.random()*100;{const t=document.querySelector('head meta[property="og:title"]'),x=document.querySelector('head meta[property="og:title"]');t.setAttribute("content",`我的測驗結果是: ${v().title}。 快來一起測驗看看吧！`),x.setAttribute("content",`我的測驗結果是: ${v().title}。 快來一起測驗看看吧！`),document.title=`我的測驗結果是: ${v().title}。 快來一起測驗看看吧！`}setTimeout(()=>{f.value=!0},_[Math.floor(n)%4]*1e3)},V=()=>{c.value=!1,d.value=[],r.value={}};return(n,t)=>{const x=ee;return s(a)?(l(),o("div",se,[e("div",le,[L(x)]),s(c)?s(d).length<s(a).questions.length?(l(),o("div",ce,[(l(!0),o(b,null,y(s(a).questions,(m,w)=>j((l(),o("div",{key:w},[e("div",de,i(m.question),1),e("div",he,[(l(!0),o(b,null,y(m.options,($,A)=>(l(),o("button",{key:A,class:"border border-[#454545] text-[#454545] hover:bg-[#454545] hover:text-white dark:border-white dark:text-white hover:dark:text-[#454545] hover:dark:bg-white my-3 py-3 rounded-[10px] md:w-[60%] w-full flex justify-center self-center text-xl",onClick:be=>p(A)},i($),9,ue))),128))]),s(d).length>0?(l(),o("div",xe,[e("button",{onClick:t[1]||(t[1]=$=>u()),class:"bg-blue-400 hover:bg-blue-500 text-white bg-theme3 dark:border-white dark:text-white hover:dark:text-[#454545] my-3 py-3 rounded-[10px] md:w-[60%] w-full flex justify-center self-center text-xl"}," 回到上一題 ")])):D("",!0)])),[[q,s(d).length==w]])),128))])):s(f)?(l(),o("div",pe,[e("div",ve,[e("div",me,i(v().title),1),e("div",null,i(v().description),1)]),e("div",fe,[(l(!0),o(b,null,y(v().characteristics,(m,w)=>(l(),o("div",ge,i(m),1))),256))]),e("div",_e,[e("button",{onClick:t[2]||(t[2]=m=>V()),class:"py-2 my-8 rounded-full bg-theme3 w-[140px] text-white text-lg"}," 再測一次 ")])])):(l(),o("div",we," 結果產生中... "+i(T()),1)):(l(),o("div",oe,[e("div",re,i(s(a).title),1),e("div",ne,[e("div",ie,i(s(a).description),1),e("div",ae,[e("button",{class:"bg-theme3 w-[140px] py-3 text-lg font-bold rounded-md mx-auto text-white",onClick:t[0]||(t[0]=m=>g())}," 開始測驗 ")])])]))])):D("",!0)}}};export{ke as default};
