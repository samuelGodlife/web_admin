"use strict";(globalThis["webpackChunkweb_admin"]=globalThis["webpackChunkweb_admin"]||[]).push([[742],{7742:(a,e,t)=>{t.r(e),t.d(e,{default:()=>$});var l=t(9835),s=t(1957),o=t(6970);const i=a=>((0,l.dD)("data-v-229463cb"),a=a(),(0,l.Cn)(),a),r={class:"col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md"},n={class:"row q-mt-lg"},d={class:"row col-12 q-mt-md"},c=i((()=>(0,l._)("div",{class:"col-md-4 col-lg-4 col-xs-12"},[(0,l._)("div",{class:"q-table__title"},"Master Data Kategori"),(0,l._)("p",{class:"text-caption"},"Data Kategori yang di lakukan di dalam")],-1))),m=i((()=>(0,l._)("span",{class:"rowNumber"},null,-1)));function u(a,e,t,i,u,p){const g=(0,l.up)("q-breadcrumbs-el"),w=(0,l.up)("q-breadcrumbs"),b=(0,l.up)("q-card"),h=(0,l.up)("q-space"),f=(0,l.up)("q-btn"),_=(0,l.up)("q-input"),q=(0,l.up)("q-slide-transition"),k=(0,l.up)("q-td"),v=(0,l.up)("q-tr"),W=(0,l.up)("q-table"),y=(0,l.up)("q-card-section"),C=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(C,{class:"q-pr-md q-pl-md q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(b,{class:"my-card q-pa-md",flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{separator:"---",class:"text-blue-10","active-color":"secondary"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{label:"Main Menu",icon:"widgets"}),(0,l.Wm)(g,{label:"kategori",icon:"extension"}),(0,l.Wm)(g,{label:"Data Kategori",icon:"person"})])),_:1})])),_:1}),(0,l._)("div",n,[(0,l._)("div",d,[(0,l.Wm)(b,{class:"my-card col",flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"col-12 q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{"table-style":"counter-reset: cssRowCounter "+(u.pagination.page-1)*u.pagination.rowsPerPage+";",title:"Master Data Customers","aria-label":"Text",class:"text-h5",rows:u.rows,flat:"",columns:u.columns,"row-key":"name",filter:u.filter,pagination:u.pagination},{top:(0,l.w5)((()=>[c,(0,l.Wm)(h),(0,l.Wm)(f,{flat:"",round:"",color:"primary",icon:"search",onClick:e[0]||(e[0]=a=>u.visibles=!u.visibles),size:"md",class:"q-mr-sm"}),(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("div",null,[(0,l.Wm)(_,{outlined:"",debounce:"300",placeholder:"Placeholder",style:{width:"300px"},color:"primary",modelValue:u.filter,"onUpdate:modelValue":e[1]||(e[1]=a=>u.filter=a),dense:""},null,8,["modelValue"])],512),[[s.F8,u.visibles]])])),_:1}),(0,l.Wm)(f,{dense:"",icon:"add",class:"q-ml-md q-pr-md",color:"blue-13",label:"Tambah Kategori",to:{name:"add_kategori"},size:"md",outline:""})])),body:(0,l.w5)((a=>[(0,l.Wm)(v,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{class:"text-center"},{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)(k,{key:"namaKategori",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.namaKategori),1)])),_:2},1032,["props"]),(0,l.Wm)(k,{key:"aksi",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{round:"",outline:"",color:"red",size:"sm",icon:"delete",onClick:e=>this.delete(a.row._id),"no-caps":"",class:"q-ml-sm"},null,8,["onClick"]),(0,l.Wm)(f,{round:"",outline:"",color:"green",size:"sm",icon:"edit",to:{name:"edit_kategori",params:{id:a.row._id}},class:"q-ml-sm","no-caps":""},null,8,["to"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["table-style","rows","columns","filter","pagination"])])),_:1})])),_:1})])),_:1})])])])])),_:1})}var p=t(499);const g={name:"PageIndex",data(){return{card:(0,p.iH)(!1),pagination:{rowsPerPage:10},options:[],namaCustomer:[],fotoDiri:null,visibles:!1,filter:null,totalHutang:0,totalLunas:0,columns:[{name:"no",label:"No",field:"no",align:"center"},{name:"namaKategori",required:!0,label:"namaKategori",align:"left",field:"namaKategori",sortable:!0},{name:"aksi",label:"Actions",field:"aksi",align:"center"}],rows:[]}},created(){this.getCustomer()},methods:{getCustomer(){try{this.$api.get("kategori/getAllKategori").then((a=>{if(!0!==a.data.status)this.$showNotif(a.data.message,"negative");else{const e=a.data.data;this.rows=e,console.log(this.rows)}}))}catch(a){this.$showNotif("Terjadi kesalahan !","negative")}},tampil(a){this.$refs.dialog.show(this.fotoDiri=a)},delete(a){this.$q.dialog({title:"Peringatan",message:"Apakah Anda Yakin ?",cancel:!0,persistent:!0}).onOk((()=>{try{this.$api.delete("/kategori/deleteKategori/"+a).then((a=>{!0!==a.data.status?this.$showNotif(a.data.message,"negative"):(this.getCustomer(),this.$showNotif(a.data.message,"positive"))}))}catch(e){console.log(e),this.$showNotif("Terjadi kesalahan !","negative")}}))}}};var w=t(1639),b=t(9885),h=t(4458),f=t(2605),_=t(8052),q=t(3190),k=t(7580),v=t(136),W=t(8879),y=t(9003),C=t(3119),Z=t(1233),Q=t(7220),K=t(9984),x=t.n(K);const T=(0,w.Z)(g,[["render",u],["__scopeId","data-v-229463cb"]]),$=T;x()(g,"components",{QPage:b.Z,QCard:h.Z,QBreadcrumbs:f.Z,QBreadcrumbsEl:_.Z,QCardSection:q.Z,QTable:k.Z,QSpace:v.Z,QBtn:W.Z,QSlideTransition:y.Z,QInput:C.Z,QTr:Z.Z,QTd:Q.Z})}}]);