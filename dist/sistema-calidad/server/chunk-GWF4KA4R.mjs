import './polyfills.server.mjs';
import{$ as ge,A,B as P,C as D,D as n,E as i,F as k,G as x,H as r,I as f,J as m,L as pe,M as K,P as de,R as Z,T as me,V as z,W as N,X as $,Y as ue,Z as fe,_ as he,a as X,b as ee,c as F,ca as Ee,d as te,e as E,f as ne,g as W,ga as be,h as G,i as H,j as S,ja as ve,k as w,ka as q,l as b,la as Se,m as ie,n as re,o as R,p as oe,q as T,r as ae,s as M,t as d,u as se,v as ce,w as le,x as B,y as C,z as p}from"./chunk-ONBLNN7T.mjs";import{a as Q}from"./chunk-5XUXGTUW.mjs";var Ce=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["app-buttons"]],standalone:!0,features:[m],decls:9,vars:0,consts:[[1,"container_buttons",2,"margin","10px 10px 10px 10px"],["routerLink","/instrucciones","id","boton1",1,"btn","btn-info",2,"color","white","margin-right","10px"],["routerLink","/registros","id","boton2",1,"btn","btn-info",2,"color","white","margin-right","10px"],["routerLink","/manuales","id","boton3",1,"btn","btn-info",2,"color","white","margin-right","10px"],["routerLink","/registros-it","id","boton4",1,"btn","btn-info",2,"color","white"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"a",1),r(2,"Instrucciones"),i(),n(3,"a",2),r(4,"Registros"),i(),n(5,"a",3),r(6,"Manuales IT"),i(),n(7,"a",4),r(8,"Registros IT"),i()())},dependencies:[ve],styles:[".container_buttons[_ngcontent-%COMP%]{text-align:center;width:100%}#boton1[_ngcontent-%COMP%]:focus{background-color:#da0a72}#boton2[_ngcontent-%COMP%]:focus{background-color:#da0a72}#boton3[_ngcontent-%COMP%]:focus{background-color:#da0a72}#boton4[_ngcontent-%COMP%]:focus{background-color:#da0a72}"]});let t=e;return t})();var L=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["app-instrucciones"]],standalone:!0,features:[m],decls:48,vars:0,consts:[[1,"container_instrucciones"],[1,"table","table-striped"],["scope","col"],["scope","row"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),r(5,"Identificacion"),i(),n(6,"th",2),r(7,"Nombre Instruccion"),i(),n(8,"th",2),r(9,"Alias"),i(),n(10,"th",2),r(11,"Fecha Actualizacion"),i(),n(12,"th",2),r(13,"Link"),i()()(),n(14,"tbody")(15,"tr")(16,"th",3),r(17,"2RC"),i(),n(18,"td"),r(19,"HR.2 RC Limpieza Cocina CCV"),i(),n(20,"td"),r(21,"Limpieza de Cocinas Centrales"),i(),n(22,"td"),r(23,"24/12/2024"),i(),n(24,"td"),r(25,'"https://xxxxx.com'),i()(),n(26,"tr")(27,"th",3),r(28,"7.7RC"),i(),n(29,"td"),r(30,"7.7RC ensalada rev CCV"),i(),n(31,"td"),r(32,"Confeccion de ensaladas"),i(),n(33,"td"),r(34,"24/12/2024"),i(),n(35,"td"),r(36,'"https://oooo.com'),i()(),n(37,"tr")(38,"th",3),r(39,"RPHT-10.1"),i(),n(40,"td"),r(41,"RPHT-10.1 Registro control temperaturas camaras"),i(),n(42,"td"),r(43,"Registro control Temperatura Puzol"),i(),n(44,"td"),r(45,"24/12/2024"),i(),n(46,"td"),r(47,'"https://ppp.com'),i()()()()())},styles:[".container_instrucciones[_ngcontent-%COMP%]{width:80%;margin:40px auto auto}"]});let t=e;return t})();var j=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["app-registros"]],standalone:!0,features:[m],decls:2,vars:0,template:function(a,c){a&1&&(n(0,"p"),r(1,"registros works!"),i())}});let t=e;return t})();var xe=(()=>{let e=class e{constructor(){this.title="sistemaCalidad"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:5,vars:0,consts:[[1,"header_main"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"h2"),r(2,"SISTEMA DE CALIDAD"),i()(),k(3,"app-buttons")(4,"router-outlet"))},dependencies:[be,Se,Ce],styles:[".header_main[_ngcontent-%COMP%]{color:gray;text-align:center;margin-bottom:20px}"]});let t=e;return t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["app-home"]],standalone:!0,features:[m],decls:2,vars:0,template:function(a,c){a&1&&k(0,"app-instrucciones")(1,"app-registros")},dependencies:[j,L]});let t=e;return t})();var V={documentos:[{nombre:"manuales",items:[{id:"IT-ODOO-01",nombre:"Manual Modulo Cocina",seccion:"Odoo V12",alias:"Manual Modulo Cocina",fechaActualizacion:"24/12/2023",url:"../assets/manuales/Manual_Modulo_Cocina.pdf",nombreFichero:"Manual_Modulo_Cocina.pdf"},{id:"IT-OFFICE-01",nombre:"Manual Poner Firma correo",seccion:"Office",alias:"Manual Poner Firma correo",fechaActualizacion:"24/12/2023",url:"../assets/manuales/Manual_Poner_Firma_correos.pdf",nombreFichero:"Manual_Poner_Firma_correos.pdf"},{id:"IT-PORTAL-01",nombre:"Manual Portal del Empleado",seccion:"Portal del Empleado",alias:"Manual Portal del Empleado",fechaActualizacion:"22/05/2024",url:"../assets/manuales/Portal_del_Empleado.pdf",nombreFichero:"Portal_del_Empleado.pdf"},{id:"IT-APP-01",nombre:"Guia R\xE1pida acceso Appetece",seccion:"Appetece",alias:"Acceso a Appetece",fechaActualizacion:"22/05/2024",url:"../assets/manuales/Guia_acceso_appetece.pdf",nombreFichero:"Guia_acceso_appetece.pdf"},{id:"IT-APP-02",nombre:"Video aprendizaje APPetece Padres",seccion:"Appetece",alias:"Video Appetece para padres",fechaActualizacion:"10/07/2024",url:"https://youtu.be/FIxRWfizqWw",nombreFichero:"Video Appetece Padres"}]},{nombre:"registros_it",items:[{id:"IT-REG-01",nombre:"Registro Autorizaciones",seccion:"Registros IT",alias:"Registro Autorizaciones recursos IT",fechaActualizacion:"22/05/2024",url:"../assets/registros/IT/Registro_de_Autorizaciones.pdf",nombreFichero:"Registro_de_Autorizaciones.pdf"},{id:"IT-REG-02",nombre:"Registro de E/S soportes IT",seccion:"Registros IT",alias:"Registro E/S, USB, DISCOS, ETC",fechaActualizacion:"22/05/2024",url:"../assets/registros/IT/Registro_de_Entrada_Salidas_Soportes.pdf",nombreFichero:"Registro_de_Entrada_Salidas_Soportes.pdf"},{id:"IT-REG-03",nombre:"Registro Ejercicio Derechos Otorgados por la normativa GRPD",seccion:"Registros IT",alias:"Derechos Otorgados a empleados",fechaActualizacion:"22/05/2024",url:"../assets/registros/IT/Registro_Ejercicio_Derechos_Otorgados_Datos.pdf",nombreFichero:"Registro_Ejercicio_Derechos_Otorgados_Datos.pdf"},{id:"IT-REG-04",nombre:"Registro Encargados DE tratamiento",seccion:"Registros IT",alias:"Registro tratamiento DATOS PROVEEDORES",fechaActualizacion:"22/05/2024",url:"../assets/registros/IT/Registro_Encargados_Tratamiento.pdf",nombreFichero:"Registro_Encargados_Tratamiento.pdf"},{id:"IT-REG-05",nombre:"Registro de Violacion de Seguridad",seccion:"Registros IT",alias:"Registro Violacion de seguridad de datos",fechaActualizacion:"22/05/2024",url:"../assets/registros/IT/Registro_Violacion_de_Seguridad.pdf",nombreFichero:"Registro_Violacion_de_Seguridad.pdf"}]}]};var U=(()=>{let e=class e{constructor(o){this.http=o}getFilesManuales(){return this.rutaFicheros="../../assets/documentos.json",this.http.get(this.rutaFicheros)}};e.\u0275fac=function(a){return new(a||e)(M(ue))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Pe(t,e){if(t&1&&(n(0,"tr")(1,"th",4),r(2),i(),n(3,"td"),r(4),i(),n(5,"td"),r(6),i(),n(7,"td")(8,"a",5),r(9),i()(),n(10,"td")(11,"a",6),r(12,"Descarga"),i()()()),t&2){let s=e.$implicit;p(2),f(s.id),p(2),f(s.nombre),p(2),f(s.fechaActualizacion),p(2),x("href",s.url,C),p(),f(s.nombreFichero),p(2),x("href",s.url,C)}}var we=(()=>{let e=class e{constructor(o){this.http=o,this.manuales=V.documentos[0].items}ngOnInit(){console.log(this.manuales)}};e.\u0275fac=function(a){return new(a||e)(A(U))},e.\u0275cmp=d({type:e,selectors:[["app-manuales"]],standalone:!0,features:[m],decls:16,vars:1,consts:[[1,"container_manuales"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["translate","no","scope","row"],[3,"href"],["download","",3,"href"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),r(5,"Identificacion"),i(),n(6,"th",2),r(7,"Nombre Manual"),i(),n(8,"th",2),r(9,"Fecha Actualizacion"),i(),n(10,"th",2),r(11,"Link"),i(),n(12,"th",2),r(13,"Descarga"),i()()(),n(14,"tbody"),P(15,Pe,13,6,"tr",3),i()()()),a&2&&(p(15),D("ngForOf",c.manuales))},dependencies:[N,z],styles:[".container_manuales[_ngcontent-%COMP%]{width:80%;margin:40px auto auto}"]});let t=e;return t})();function De(t,e){if(t&1&&(n(0,"tr")(1,"th",4),r(2),i(),n(3,"td"),r(4),i(),n(5,"td"),r(6),i(),n(7,"td"),r(8),i(),n(9,"td")(10,"a",5),r(11),i()(),n(12,"td")(13,"a",6),r(14,"Descargar"),i()()()),t&2){let s=e.$implicit;p(2),f(s.id),p(2),f(s.nombre),p(2),f(s.fechaActualizacion),p(2),f(s.alias),p(2),x("href",s.url,C),p(),f(s.nombreFichero),p(2),x("href",s.url,C)}}var Re=(()=>{let e=class e{constructor(o){this.http=o,this.manuales=V.documentos[1].items}ngOnInit(){console.log(this.manuales)}};e.\u0275fac=function(a){return new(a||e)(A(U))},e.\u0275cmp=d({type:e,selectors:[["app-registros-it"]],standalone:!0,features:[m],decls:18,vars:1,consts:[[1,"container_manuales"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["translate","no","scope","row"],[3,"href"],["download","",3,"href"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),r(5,"Identificacion"),i(),n(6,"th",2),r(7,"Nombre Manual"),i(),n(8,"th",2),r(9,"Fecha Actualizacion"),i(),n(10,"th",2),r(11,"Alias"),i(),n(12,"th",2),r(13,"Link"),i(),n(14,"th",2),r(15,"Descarga"),i()()(),n(16,"tbody"),P(17,De,15,7,"tr",3),i()()()),a&2&&(p(17),D("ngForOf",c.manuales))},dependencies:[N,z],styles:[".container_manuales[_ngcontent-%COMP%]{width:80%;margin:40px auto auto}"]});let t=e;return t})();var Y=[{path:"",component:Ie},{path:"registros",component:j},{path:"instrucciones",component:L},{path:"manuales",component:we},{path:"registros-it",component:Re}];var _="Service workers are disabled or not supported by this browser";function ke(t){return W(()=>te(new Error(t)))}var I=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=ke(_);else{let o=G(e,"controllerchange").pipe(E(()=>e.controller)),a=W(()=>F(e.controller)),c=ne(a,o);this.worker=c.pipe(w(v=>!!v)),this.registration=this.worker.pipe(R(()=>e.getRegistration()));let y=G(e,"message").pipe(E(v=>v.data)).pipe(w(v=>v&&v.type)).pipe(re());y.connect(),this.events=y}}postMessage(e,s){return this.worker.pipe(b(1),oe(o=>{o.postMessage(Q({action:e},s))})).toPromise().then(()=>{})}postMessageWithOperation(e,s,o){let a=this.waitForOperationCompleted(o),c=this.postMessage(e,s);return Promise.all([c,a]).then(([,u])=>u)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let s;return typeof e=="string"?s=o=>o.type===e:s=o=>e.includes(o.type),this.events.pipe(w(s))}nextEventOfType(e){return this.eventsOfType(e).pipe(b(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(w(s=>s.nonce===e),b(1),E(s=>{if(s.result!==void 0)return s.result;throw new Error(s.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},ze=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(o){if(this.sw=o,this.pushManager=null,this.subscriptionChanges=new X,!o.isEnabled){this.messages=S,this.notificationClicks=S,this.subscription=S;return}this.messages=this.sw.eventsOfType("PUSH").pipe(E(c=>c.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(E(c=>c.data)),this.pushManager=this.sw.registration.pipe(E(c=>c.pushManager));let a=this.pushManager.pipe(R(c=>c.getSubscription()));this.subscription=H(a,this.subscriptionChanges)}requestSubscription(o){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(_));let a={userVisibleOnly:!0},c=this.decodeBase64(o.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),u=new Uint8Array(new ArrayBuffer(c.length));for(let l=0;l<c.length;l++)u[l]=c.charCodeAt(l);return a.applicationServerKey=u,this.pushManager.pipe(R(l=>l.subscribe(a)),b(1)).toPromise().then(l=>(this.subscriptionChanges.next(l),l))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(_));let o=a=>{if(a===null)throw new Error("Not subscribed to push notifications.");return a.unsubscribe().then(c=>{if(!c)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(b(1),R(o)).toPromise()}decodeBase64(o){return atob(o)}};e.\u0275fac=function(a){return new(a||e)(M(I))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})(),Ne=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(o){if(this.sw=o,!o.isEnabled){this.versionUpdates=S,this.unrecoverable=S;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(_));let o=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:o},o)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(_));let o=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:o},o)}};e.\u0275fac=function(a){return new(a||e)(M(I))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})();var Te=new ae("");function Le(t,e,s,o){return()=>{if(!($(o)&&"serviceWorker"in navigator&&s.enabled!==!1))return;let a=t.get(le),c=t.get(K);a.runOutsideAngular(()=>{let l=navigator.serviceWorker,g=()=>l.controller?.postMessage({action:"INITIALIZE"});l.addEventListener("controllerchange",g),c.onDestroy(()=>{l.removeEventListener("controllerchange",g)})});let u;if(typeof s.registrationStrategy=="function")u=s.registrationStrategy();else{let[l,...g]=(s.registrationStrategy||"registerWhenStable:30000").split(":");switch(l){case"registerImmediately":u=F(null);break;case"registerWithDelay":u=Me(+g[0]||0);break;case"registerWhenStable":let y=ee(t.get(K).whenStable());u=g[0]?H(y,Me(+g[0])):y;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${s.registrationStrategy}`)}}a.runOutsideAngular(()=>u.pipe(b(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:s.scope}).catch(l=>console.error("Service worker registration failed with:",l))))}}function Me(t){return F(null).pipe(ie(t))}function je(t,e){return new I($(e)&&t.enabled!==!1?navigator.serviceWorker:void 0)}var O=class{};function J(t,e={}){return se([ze,Ne,{provide:Te,useValue:t},{provide:O,useValue:e},{provide:I,useFactory:je,deps:[O,B]},{provide:pe,useFactory:Le,deps:[ce,Te,O,B],multi:!0}])}var Oe={providers:[de({eventCoalescing:!0}),q(Y),ge(),q(Y),fe(),J("ngsw-worker.js",{enabled:!Z(),registrationStrategy:"registerWhenStable:30000"}),J("ngsw-worker.js",{enabled:!Z(),registrationStrategy:"registerWhenStable:30000"})]};var Ve={providers:[Ee()]},_e=me(Oe,Ve);var Ue=()=>he(xe,_e),Wt=Ue;export{Wt as a};
