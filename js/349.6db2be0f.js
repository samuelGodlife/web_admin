"use strict";(globalThis["webpackChunkweb_admin"]=globalThis["webpackChunkweb_admin"]||[]).push([[349],{9349:(a,e,l)=>{l.r(e),l.d(e,{default:()=>K});var t=l(9835),s=l(1957),r=l(6970);const o=a=>((0,t.dD)("data-v-75c4f527"),a=a(),(0,t.Cn)(),a),i={class:"col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md"},n={class:"row q-mt-lg"},u={class:"row col-12 q-mt-md"},d=o((()=>(0,t._)("div",{class:"col-md-4 col-lg-4 col-xs-12"},[(0,t._)("div",{class:"q-table__title"},"Master Data Pesanan"),(0,t._)("p",{class:"text-caption"}," Data Pesanan yang di lakukan di dalam sistem ")],-1))),m=o((()=>(0,t._)("span",{class:"rowNumber"},null,-1))),c={key:0,style:{color:"grey"}},p={key:1},g={key:0},w={key:1},b={key:0,style:{color:"grey"}},f={key:1},k=o((()=>(0,t._)("div",{class:"text-h6"},"#Data Pembelian",-1))),h=o((()=>(0,t._)("span",{class:"rowNumber"},null,-1)));function _(a,e,l,o,_,W){const y=(0,t.up)("q-breadcrumbs-el"),q=(0,t.up)("q-breadcrumbs"),v=(0,t.up)("q-card"),$=(0,t.up)("q-space"),D=(0,t.up)("q-btn"),T=(0,t.up)("q-input"),C=(0,t.up)("q-slide-transition"),Z=(0,t.up)("q-td"),Q=(0,t.up)("q-select"),P=(0,t.up)("q-img"),U=(0,t.up)("q-avatar"),x=(0,t.up)("q-dialog"),z=(0,t.up)("q-item-section"),S=(0,t.up)("q-item"),B=(0,t.up)("q-tr"),N=(0,t.up)("q-table"),V=(0,t.up)("q-card-section"),j=(0,t.up)("q-separator"),A=(0,t.up)("q-card-actions"),R=(0,t.up)("q-page"),I=(0,t.Q2)("ripple"),O=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(R,{class:"q-pr-md q-pl-md q-pa-md"},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.Wm)(v,{class:"my-card q-pa-md",flat:"",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{separator:"---",class:"text-blue-10","active-color":"secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{label:"Main Menu",icon:"widgets"}),(0,t.Wm)(y,{label:"Pesanan",icon:"extension"}),(0,t.Wm)(y,{label:"Data Pesanan",icon:"person"})])),_:1})])),_:1}),(0,t._)("div",n,[(0,t._)("div",u,[(0,t.Wm)(v,{class:"my-card col",flat:"",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{horizontal:""},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"col-12 q-pa-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{"table-style":"counter-reset: cssRowCounter "+(_.pagination.page-1)*_.pagination.rowsPerPage+";",title:"Master Data Customers","aria-label":"Text",class:"text-h5",rows:_.rows,flat:"",columns:_.columns,"row-key":"name",filter:_.filter,pagination:_.pagination},{top:(0,t.w5)((()=>[d,(0,t.Wm)($),(0,t.Wm)(D,{flat:"",round:"",color:"primary",icon:"search",onClick:e[0]||(e[0]=a=>_.visibles=!_.visibles),size:"md",class:"q-mr-sm"}),(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("div",null,[(0,t.Wm)(T,{outlined:"",debounce:"300",placeholder:"Placeholder",style:{width:"300px"},color:"primary",modelValue:_.filter,"onUpdate:modelValue":e[1]||(e[1]=a=>_.filter=a),dense:""},null,8,["modelValue"])],512),[[s.F8,_.visibles]])])),_:1})])),body:(0,t.w5)((e=>[(0,t.Wm)(B,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{class:"text-center"},{default:(0,t.w5)((()=>[m])),_:1}),(0,t.Wm)(Z,{key:"userName",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.user.userName),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"date",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.date),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"status",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{modelValue:e.row.status,"onUpdate:modelValue":[a=>e.row.status=a,l=>a.updateStatus(e.row._id,e.row.status)],options:_.statusOptions,dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"detail",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{onClick:a=>W.showDetail(e.row.detailTransaksi),outline:"",color:"primary",label:"detail",size:"sm",class:"q-ml-sm"},null,8,["onClick"])])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"grandTotal",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(this.$formatPrice(e.row.grandTotal)),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"catatan",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.catatan),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"bukti",props:e},{default:(0,t.w5)((()=>[null==e.row.bukti?((0,t.wg)(),(0,t.iD)("div",c," Belum Upload Bukti Transaksi ")):(0,t.kq)("",!0),null!=e.row.bukti?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(S,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:"",size:"100px"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{src:`${a.$imgUrl}/gambar-barang/${e.row.bukti}`,onClick:a=>W.tampil(e.row.bukti)},null,8,["src","onClick"])])),_:2},1024),(0,t.Wm)(x,{ref:"dialog"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{src:`${a.$imgUrl}/gambar-barang/${_.fotoDiri}`,style:{width:"100%",height:"100%"}},null,8,["src"])])),_:1})])),_:1},512)])),_:2},1024)])),_:2},1024)),[[I]])])):(0,t.kq)("",!0)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"alasan",props:e},{default:(0,t.w5)((()=>[null==e.row.alasan?((0,t.wg)(),(0,t.iD)("div",g," Tidak Ada Retur ")):((0,t.wg)(),(0,t.iD)("div",w,(0,r.zw)(e.row.alasan),1))])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"fotoretur",props:e},{default:(0,t.w5)((()=>[null==e.row.fotoretur?((0,t.wg)(),(0,t.iD)("div",b," Belum Upload fotoretur Transaksi ")):(0,t.kq)("",!0),null!=e.row.fotoretur?((0,t.wg)(),(0,t.iD)("div",f,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(S,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:"",size:"100px"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{src:`${a.$imgUrl}/gambar-barang/${e.row.fotoretur}`,onClick:a=>W.tampil(e.row.fotoretur)},null,8,["src","onClick"])])),_:2},1024),(0,t.Wm)(x,{ref:"dialog"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{src:`${a.$imgUrl}/gambar-barang/${_.fotoDiri}`,style:{width:"100%",height:"100%"}},null,8,["src"])])),_:1})])),_:1},512)])),_:2},1024)])),_:2},1024)),[[I]])])):(0,t.kq)("",!0)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"aksi",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{round:"",outline:"",color:"green",size:"sm",icon:"check",onClick:a=>this.accept(e.row._id,e.row.status),class:"q-ml-sm","no-caps":""},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["table-style","rows","columns","filter","pagination"])])),_:1})])),_:1})])),_:1})]),(0,t.Wm)(x,{modelValue:_.detail.visible,"onUpdate:modelValue":e[2]||(e[2]=a=>_.detail.visible=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,null,{default:(0,t.w5)((()=>[k])),_:1}),(0,t.Wm)(j),(0,t.Wm)(V,{style:{"max-height":"50vh"},class:"scroll"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{rows:_.detail.rows,"row-key":"name",flat:"",columns:_.detail.columns,"hide-pagination":!0},{body:(0,t.w5)((e=>[(0,t.Wm)(B,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{class:"text-center"},{default:(0,t.w5)((()=>[h])),_:1}),(0,t.Wm)(Z,{key:"namaBarang",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.barang.namaBarang),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"harga",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.barang.harga),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"kategori",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.barang.kategori),1)])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"gambar",props:e},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(S,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:"",size:"100px"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{src:`${a.$imgUrl}/gambar-barang/${e.row.barang.gambar}`,onClick:a=>W.tampil(e.row.barang.gambar)},null,8,["src","onClick"])])),_:2},1024),(0,t.Wm)(x,{ref:"dialog"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{src:`${a.$imgUrl}/gambar-barang/${_.fotoDiri}`,style:{width:"100%",height:"100%"}},null,8,["src"])])),_:1})])),_:1},512)])),_:2},1024)])),_:2},1024)),[[I]])])),_:2},1032,["props"]),(0,t.Wm)(Z,{key:"subTotal",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.row.subTotal),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1}),(0,t.Wm)(j),(0,t.Wm)(A,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(D,{flat:"",label:"Ok",color:"primary"},null,512),[[O]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})}var W=l(499);const y={name:"PageIndex",data(){return{visibles:!1,card:(0,W.iH)(!1),pagination:{rowsPerPage:10},options:[],namaCustomer:[],fotoDiri:null,visibles:!1,filter:null,totalHutang:0,totalLunas:0,columns:[{name:"no",label:"No",field:"no"},{name:"userName",required:!0,label:"Username",align:"left",field:"username",sortable:!0},{name:"date",required:!0,label:"Tanggal Pesanan",align:"left",field:"date",sortable:!0},{name:"status",required:!0,label:"Status Pesanan",align:"left",field:"status",sortable:!0},{name:"detail",required:!0,label:"Detail Barang",align:"left",field:"detail",sortable:!0},{name:"grandTotal",required:!0,label:"Total",align:"left",field:"grandTotal",sortable:!0},{name:"catatan",required:!0,label:"Catatan",align:"left",field:"catatan",sortable:!0},{name:"bukti",required:!0,label:"Bukti Transaksi",align:"left",field:"bukti",sortable:!0},{name:"alasan",required:!0,label:"Alasan Retur",align:"left",field:"alasan",sortable:!0},{name:"fotoretur",required:!0,label:"Foto Retur",align:"left",field:"fotoretur",sortable:!0},{name:"aksi",label:"Actions",field:"aksi",align:"center"}],rows:[],detail:{visible:!1,pelanggan:null,grandTotal:null,columns:[{name:"no",label:"No",field:"no"},{name:"namaBarang",required:!0,label:"Nama Produk",align:"left",field:"namaBarang",sortable:!0},{name:"harga",required:!0,label:"Harga",align:"left",field:"harga",sortable:!0},{name:"kategori",required:!0,label:"Kategori",align:"left",field:"kategori",sortable:!0},{name:"gambar",required:!0,label:"Gambar",align:"left",field:"gambar",sortable:!0},{name:"subTotal",required:!0,label:"subTotal",align:"left",field:"subTotal",sortable:!0}],rows:[]},statusOptions:[{label:"Selesai",value:"Selesai"},{label:"Diterima",value:"Diterima"},{label:"Ditolak",value:"Ditolak"},{label:"Dalam Proses",value:"Dalam Proses"},{label:"Retur",value:"Retur"}]}},created(){this.getCustomer()},methods:{getCustomer(){try{this.$api.get("transaksi/get-all-transaksi").then((a=>{if(!0!==a.data.status)this.$showNotif(a.data.message,"negative");else{const e=a.data.data;this.rows=e,console.log(this.rows),console.log(e[0])}}))}catch(a){this.$showNotif("Terjadi kesalahan !","negative")}},tampil(a){this.$refs.dialog.show(this.fotoDiri=a)},accept(a,e){this.$q.dialog({title:"Peringatan",message:"Apakah Anda yakin?",color:"green",cancel:!0,persistent:!0}).onOk((()=>{try{this.$api.put("/transaksi/updateWeb/"+a,{status:e}).then((a=>{console.log({res:a}),!0!==a.data.status?this.$q.notify({message:"Status Gagal",color:"red"}):(this.$q.notify({message:"Status Berhasil",color:"green"}),this.getCustomer())}))}catch(l){console.log(l),this.$showNotif("Terjadi kesalahan!","negative")}}))},reject(a){this.$q.dialog({title:"Peringatan",message:"Apakah Anda Setuju untuk menolak transaksi?",color:"red",cancel:!0,persistent:!0}).onOk((()=>{try{this.$api.put("/transaksi/updateWeb/"+a,{status:"Ditolak"}).then((a=>{!0!==a.data.status?this.$q.notify({message:"Status Gagal",color:"red"}):(this.$q.notify({message:"Status Berhasil ",color:"green"}),this.getCustomer())}))}catch(e){console.log(e),this.$showNotif("Terjadi kesalahan !","negative")}}))},showDetail(a){const e=a.map((a=>({barang:a.barang,subTotal:a.subtotal})));this.detail.visible=!0,this.detail.rows=e,console.log(e)}}};var q=l(1639),v=l(9885),$=l(4458),D=l(2605),T=l(8052),C=l(3190),Z=l(7580),Q=l(136),P=l(8879),U=l(9003),x=l(3119),z=l(1233),S=l(7220),B=l(1066),N=l(490),V=l(6749),j=l(1357),A=l(335),R=l(2074),I=l(926),O=l(1821),M=l(1136),G=l(2146),H=l(9984),F=l.n(H);const E=(0,q.Z)(y,[["render",_],["__scopeId","data-v-75c4f527"]]),K=E;F()(y,"components",{QPage:v.Z,QCard:$.Z,QBreadcrumbs:D.Z,QBreadcrumbsEl:T.Z,QCardSection:C.Z,QTable:Z.Z,QSpace:Q.Z,QBtn:P.Z,QSlideTransition:U.Z,QInput:x.Z,QTr:z.Z,QTd:S.Z,QSelect:B.Z,QItem:N.Z,QItemSection:V.Z,QAvatar:j.Z,QImg:A.Z,QDialog:R.Z,QSeparator:I.Z,QCardActions:O.Z}),F()(y,"directives",{Ripple:M.Z,ClosePopup:G.Z})}}]);