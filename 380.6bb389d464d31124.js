"use strict";(self.webpackChunkwebsite_frontend=self.webpackChunkwebsite_frontend||[]).push([[380],{380:(Sn,w,c)=>{c.r(w),c.d(w,{PageModule:()=>Bn});var d=c(4996),b=c(385),n=c(7587),C=c(193);let y=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=c(6271),h=c(520),D=c(2340),N=c(9330),T=c(165);let x=(()=>{class e{constructor(t,i){this.localStorageService=t,this.http=i,this.constants=P._}isLoggedIn(){return!function U(e){var t,i,a,r=[void 0,null,!1,0,"","0"];for(i=0,a=r.length;i<a;i++)if(e===r[i])return!0;if("object"==typeof e){for(t in e)return!1;return!0}return!1}(this.localStorageService.get(this.constants.LS_TOKEN))}login(t,i,a){if(this.isLoggedIn())return;const r=(new h.WM).set(N.S,"");r.set("Content-Type","application/x-www-form-urlencoded"),r.set("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");let l=new FormData;return l.append("username",t),l.append("password",i),l.append("remember",a?"1":"0"),this.http.post(D.N.backend+"/api/login",l,{headers:r})}setAuthToken(t){this.localStorageService.set(P._.LS_TOKEN,t)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(T.n2),n.LFG(h.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),R=(()=>{class e{constructor(t){this.renderer=t,this.mask=this.renderer.createElement("div"),this.renderer.addClass(this.mask,"loading-mask")}ngOnInit(){}showLoading(t=""){t||(t="body");let i=this.renderer.selectRootElement(t,!0);this.renderer.appendChild(i,this.mask)}hideLoading(t=""){t||(t="body");let i=this.renderer.selectRootElement(t,!0);this.renderer.removeChild(i,this.mask)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.Qsj))},e.\u0275cmp=n.Xpm({type:e,selectors:[["loading-mask-component"]],decls:9,vars:0,consts:[[1,"loading-mask"],["mask",""],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","200px","height","200px","viewBox","0 0 100 100","preserveAspectRatio","xMidYMid",2,"margin","auto","background","rgba(255, 255, 255, 0)","display","block"],["cx","50","cy","50","r","0","fill","none","stroke","#e90c59","stroke-width","2"],["attributeName","r","repeatCount","indefinite","dur","1s","values","0;40","keyTimes","0;1","keySplines","0 0.2 0.8 1","calcMode","spline","begin","0s"],["attributeName","opacity","repeatCount","indefinite","dur","1s","values","1;0","keyTimes","0;1","keySplines","0.2 0 0.8 1","calcMode","spline","begin","0s"],["cx","50","cy","50","r","0","fill","none","stroke","#46dff0","stroke-width","2"],["attributeName","r","repeatCount","indefinite","dur","1s","values","0;40","keyTimes","0;1","keySplines","0 0.2 0.8 1","calcMode","spline","begin","-0.5s"],["attributeName","opacity","repeatCount","indefinite","dur","1s","values","1;0","keyTimes","0;1","keySplines","0.2 0 0.8 1","calcMode","spline","begin","-0.5s"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0,1),n.O4$(),n.TgZ(2,"svg",2)(3,"circle",3),n._UZ(4,"animate",4)(5,"animate",5),n.qZA(),n.TgZ(6,"circle",6),n._UZ(7,"animate",7)(8,"animate",8),n.qZA()()())},styles:[""]}),e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var H=c(1460),m=c(2382),u=c(9808);function j(e,o){1&e&&(n.TgZ(0,"div",17),n._uU(1," Vui l\xf2ng nh\u1eadp t\xe0i kho\u1ea3n! "),n.qZA())}function Y(e,o){1&e&&(n.TgZ(0,"div",18),n._uU(1," Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u! "),n.qZA())}function q(e,o){if(1&e&&(n.TgZ(0,"div",19)(1,"div",2),n._uU(2,"\u0110\u0102NG K\xdd T\xc0I KHO\u1ea2N"),n.qZA(),n.TgZ(3,"form")(4,"div",3)(5,"label",20),n._uU(6,"T\xe0i kho\u1ea3n:"),n.qZA(),n._UZ(7,"input",21),n.qZA(),n.TgZ(8,"div",3)(9,"label",22),n._uU(10,"M\u1eadt kh\u1ea9u:"),n.qZA(),n._UZ(11,"input",23),n.qZA(),n.TgZ(12,"div",3)(13,"label",24),n._uU(14,"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u:"),n.qZA(),n._UZ(15,"input",25),n.qZA(),n.TgZ(16,"div",3)(17,"label",26),n._uU(18,"Email:"),n.qZA(),n._UZ(19,"input",27),n.TgZ(20,"div",28),n._uU(21,"D\xf9ng \u0111\u1ec3 k\xedch ho\u1ea1t x\xe1c th\u1ef1c 2 l\u1edbp v\xe0 kh\xf4i ph\u1ee5c m\u1eadt kh\u1ea9u qua email."),n.qZA()(),n.TgZ(22,"button",29),n._uU(23,"\u0110\u0103ng k\xfd"),n.qZA()()()),2&e){const t=n.oxw();n.xp6(7),n.Q6J("autofocus",t.showRegister)}}function J(e,o){1&e&&(n.TgZ(0,"div",19)(1,"div",2),n._uU(2,"KH\xd4I PH\u1ee4C M\u1eacT KH\u1ea8U"),n.qZA(),n.TgZ(3,"form")(4,"div",3)(5,"label",30),n._uU(6,"Email:"),n.qZA(),n._UZ(7,"input",31),n.TgZ(8,"div",32),n._uU(9,"\u0110\u1ecba ch\u1ec9 email \u0111\xe3 li\xean k\u1ebft v\u1edbi t\xe0i kho\u1ea3n"),n.qZA()(),n.TgZ(10,"button",29),n._uU(11,"G\u1eedi m\xe3 kh\xf4i ph\u1ee5c"),n.qZA()()())}const I=function(e){return{"is-invalid":e}};let z=(()=>{class e{constructor(t,i,a,r,l,g,f){this.activeModal=t,this.modalService=i,this.element=a,this.authService=r,this.loadingMask=l,this.toastCompoent=g,this.modal=f,this.showRegister=!1,this.showForgotPassword=!1,this.lusername="",this.lusernameInvalid=!1,this.lpassword="",this.lpasswordInvalid=!1,this.rusername="",this.rpassword="",this.rrepasssword="",this.remail="",this.lremember=!1}ngOnInit(){}openRegister(){this.showForgotPassword=!1,this.showRegister=!0,this.modalService.modalRef._windowCmptRef.instance.size="xl",setTimeout(()=>{let t=document.querySelector("#rusername");t instanceof HTMLElement&&t.focus()},500)}openForgotPassword(){this.showForgotPassword=!0,this.showRegister=!1,this.modalService.modalRef._windowCmptRef.instance.size="xl",setTimeout(()=>{let t=document.querySelector("#fusername");t instanceof HTMLElement&&t.focus()},500)}login(){var t;if(this.lusername.length<1||this.lpassword.length<1)return this.lusernameInvalid=this.lusername.length<1,void(this.lpasswordInvalid=this.lpassword.length<1);this.lusernameInvalid=this.lusername.length<1,this.lpasswordInvalid=this.lpassword.length<1,this.loadingMask.showLoading(),null===(t=this.authService.login(this.lusername,this.lpassword,this.lremember))||void 0===t||t.subscribe(i=>{let a=i;if(a.success){this.authService.setAuthToken(a.data.token),this.reloadTimer=setTimeout(()=>{location.reload()},3e3);const g=this.modal.open(b.z);g.componentInstance.modal_img="./assets/images/icon-success.png",g.componentInstance.modal_title="Th\xf4ng b\xe1o",g.componentInstance.modal_description=a.message,g.componentInstance.modal_buttonCloseText="\u0110\xf3ng",g.result.then(f=>{this.reloadTimer&&clearTimeout(this.reloadTimer),location.reload()})}else{const r=this.modal.open(b.z);r.componentInstance.modal_img="./assets/images/icon-warning.png",r.componentInstance.modal_title="Th\xf4ng b\xe1o",r.componentInstance.modal_description=a.message,r.componentInstance.modal_buttonCloseText="\u0110\xf3ng"}},i=>{const a=this.modal.open(b.z);a.componentInstance.modal_img="./assets/images/icon-error.png",a.componentInstance.modal_title="C\u1ea3nh b\xe1o",a.componentInstance.modal_description=i,a.componentInstance.modal_buttonCloseText="\u0110\xf3ng"},()=>{this.loadingMask.hideLoading()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(C.Kz),n.Y36(y),n.Y36(n.SBq),n.Y36(x),n.Y36(R),n.Y36(H.q),n.Y36(C.FF))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:28,vars:14,consts:[[1,"modalContent"],[1,"loginForm"],[1,"title"],[1,"mb-3"],["for","lusername",1,"form-label"],["type","text","id","lusername","name","lusername","required","","aria-describedby","lusernameInvalid",1,"form-control",3,"autofocus","ngModel","ngClass","ngModelChange"],["id","lusernameInvalid","class","invalid-feedback",4,"ngIf"],["for","lpassword",1,"form-label"],["type","password","id","lpassword","name","lpassword","required","","aria-describedby","lpasswordInvalid",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["id","lpasswordInvalid","class","invalid-feedback",4,"ngIf"],[1,"mb-3","form-check"],["type","checkbox","id","lremember",1,"form-check-input",3,"checked","change"],["for","lremember",1,"form-check-label"],["type","button",1,"btn","btn-warning",3,"click"],[1,"form-footer"],[3,"click"],["class","registerForm",4,"ngIf"],["id","lusernameInvalid",1,"invalid-feedback"],["id","lpasswordInvalid",1,"invalid-feedback"],[1,"registerForm"],["for","rusername",1,"form-label"],["type","text","id","rusername",1,"form-control",3,"autofocus"],["for","rpassword",1,"form-label"],["type","password","id","rpassword",1,"form-control"],["for","rrepassword",1,"form-label"],["type","password","id","rrepassword",1,"form-control"],["for","remail",1,"form-label"],["type","email","id","remail","aria-describedby","emailHelp",1,"form-control"],["id","emailHelp",1,"form-text"],["type","submit",1,"btn","btn-warning"],["for","femail",1,"form-label"],["type","email","id","femail","aria-describedby","femailHelp",1,"form-control"],["id","femailHelp",1,"form-text"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._uU(3,"\u0110\u0102NG NH\u1eacP"),n.qZA(),n.TgZ(4,"form")(5,"div",3)(6,"label",4),n._uU(7,"T\xe0i kho\u1ea3n:"),n.qZA(),n.TgZ(8,"input",5),n.NdJ("ngModelChange",function(r){return i.lusername=r}),n.qZA(),n.YNc(9,j,2,0,"div",6),n.qZA(),n.TgZ(10,"div",3)(11,"label",7),n._uU(12,"M\u1eadt kh\u1ea9u:"),n.qZA(),n.TgZ(13,"input",8),n.NdJ("ngModelChange",function(r){return i.lpassword=r}),n.qZA(),n.YNc(14,Y,2,0,"div",9),n.qZA(),n.TgZ(15,"div",10)(16,"input",11),n.NdJ("change",function(){return i.lremember=!i.lremember}),n.qZA(),n.TgZ(17,"label",12),n._uU(18,"Nh\u1edb \u0111\u0103ng nh\u1eadp"),n.qZA()(),n.TgZ(19,"button",13),n.NdJ("click",function(){return i.login()}),n._uU(20,"\u0110\u0103ng nh\u1eadp"),n.qZA()(),n.TgZ(21,"div",14)(22,"span"),n._uU(23,"Qu\xean m\u1eadt kh\u1ea9u?"),n.qZA(),n.TgZ(24,"span",15),n.NdJ("click",function(){return i.openRegister()}),n._uU(25,"Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng k\xfd >>>"),n.qZA()()(),n.YNc(26,q,24,1,"div",16),n.YNc(27,J,12,0,"div",16),n.qZA()),2&t&&(n.xp6(8),n.Q6J("autofocus",!0)("ngModel",i.lusername)("ngClass",n.VKq(10,I,i.lusernameInvalid)),n.xp6(1),n.Q6J("ngIf",i.lusernameInvalid),n.xp6(4),n.Q6J("ngModel",i.lpassword)("ngClass",n.VKq(12,I,i.lpasswordInvalid)),n.xp6(1),n.Q6J("ngIf",i.lpasswordInvalid),n.xp6(2),n.Q6J("checked",i.lremember),n.xp6(10),n.Q6J("ngIf",i.showRegister),n.xp6(1),n.Q6J("ngIf",i.showForgotPassword))},directives:[m._Y,m.JL,m.F,m.Fj,m.Q7,m.JJ,m.On,u.mk,u.O5],styles:[".modalContent[_ngcontent-%COMP%]{width:100%;height:100%;display:flex}.loginForm[_ngcontent-%COMP%], .registerForm[_ngcontent-%COMP%]{background-color:#12294d;padding:10px 20px;flex:1}.loginForm[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .registerForm[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#ffd21b;font-size:31px;font-weight:700;text-align:center}.loginForm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .registerForm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.loginForm[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%], .registerForm[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:space-between}.loginForm[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .registerForm[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;text-decoration:underline;cursor:pointer}"]}),e})();function Q(e,o){1&e&&n._UZ(0,"div",21)}function $(e,o){1&e&&n._UZ(0,"div",22)}function G(e,o){1&e&&n._UZ(0,"div",23)}function X(e,o){1&e&&n._UZ(0,"div",24)}function K(e,o){1&e&&n._UZ(0,"div",25)}function V(e,o){1&e&&n._UZ(0,"div",26)}function W(e,o){1&e&&n._UZ(0,"div",27)}function nn(e,o){1&e&&n._UZ(0,"div",28)}function tn(e,o){1&e&&n._UZ(0,"div",29)}const en=function(e){return{blinked:e}};function on(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",30),n.NdJ("mouseover",function(){return n.CHM(t),n.oxw().onHold=!0})("mouseout",function(){return n.CHM(t),n.oxw().onHold=!1})("click",function(){return n.CHM(t),n.oxw().playnowClick()}),n.qZA()}if(2&e){const t=n.oxw();n.Q6J("ngClass",n.VKq(1,en,t.playnowBlinked))}}function an(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",31),n.NdJ("click",function(){return n.CHM(t),n.oxw().download()}),n.qZA()}}function rn(e,o){1&e&&(n.TgZ(0,"h1",32),n._uU(1,"M\xc1Y CH\u1ee6 KHAI M\u1ede: 19H - TH\u1ee8 5 - 21/07/2022"),n.qZA())}function sn(e,o){if(1&e&&(n.TgZ(0,"div",33)(1,"div",34),n._uU(2),n.qZA(),n.TgZ(3,"div",35),n._uU(4),n.qZA(),n.TgZ(5,"div",36),n._uU(6),n.qZA(),n.TgZ(7,"div",37),n._uU(8),n.qZA()()),2&e){const t=n.oxw();n.xp6(2),n.Oqu(t.dayLeft.toString().padStart(2,"0")),n.xp6(2),n.Oqu(t.hourLeft.toString().padStart(2,"0")),n.xp6(2),n.Oqu(t.minuteLeft.toString().padStart(2,"0")),n.xp6(2),n.Oqu(t.secondLeft.toString().padStart(2,"0"))}}const cn=function(e){return{"flex-column":e}};let ln=(()=>{class e{constructor(t,i,a,r){this.authService=t,this.router=i,this.modal=a,this.modalService=r,this.playnowBlinked=!1,this.onHold=!1,this.backgroundIndex=1,this.dayLeft=0,this.hourLeft=0,this.minuteLeft=0,this.secondLeft=0,this.openTime="2022-07-21 18:55:20",this.countdownInterval=null,this.isOpen=!1}ngOnInit(){let t=Math.floor(10*Math.random()%8);this.backgroundIndex=parseInt(t.toString()),setInterval(()=>{this.onHold||(this.playnowBlinked=!this.playnowBlinked)},150),this.countdown();let i=this;this.countdownInterval=setInterval(function(){i.countdown()},1e3)}playnowClick(){this.authService.isLoggedIn()?this.router.navigateByUrl("/index.html/play"):this.modalService.modalRef=this.modal.open(z)}download(){location.href="https://drive.google.com/file/d/1EFocjANmg7d95hjJd0G5BMvFUEs-ys0N/view?usp=sharing"}countdown(){let t=new Date,i=new Date(this.openTime);if(i.getTime()-t.getTime()<=0)return clearInterval(this.countdownInterval),void(this.isOpen=!0);this.dayLeft=M.inDays(t,i),this.hourLeft=M.inHours(t,i)-24*this.dayLeft,this.minuteLeft=M.inMinutes(t,i)-(24*this.dayLeft*60+60*this.hourLeft),this.secondLeft=M.inSeconds(t,i)-(24*this.dayLeft*60*60+60*this.hourLeft*60+60*this.minuteLeft)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(x),n.Y36(d.F0),n.Y36(C.FF),n.Y36(y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home"]],decls:22,vars:16,consts:[[1,"backgrounds"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper01.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper02.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper03.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper04.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper06.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper07.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper09.jpg)",4,"ngIf"],["class","background","style","background-image: url(/assets/backgrounds/130130_gunny2wallpaper10.jpg)",4,"ngIf"],["class","background","style","background-image: url('/assets/backgrounds/\u2014Pngtree\u2014abstract background abstract light line_919531.jpg')",4,"ngIf"],["id","overlay",1,"overlay"],["id","main"],[1,"mainContent"],[1,"logo"],["src","/assets/images/logo2_cropped_lens.png"],[1,"slogan"],[1,"contentFooter","flex-column",3,"ngClass"],["class","playnow",3,"ngClass","mouseover","mouseout","click",4,"ngIf"],["class","launcherDownload",3,"click",4,"ngIf"],["class","hgradient golden-shadow",4,"ngIf"],["class","countdown-wrapper",4,"ngIf"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper01.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper02.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper03.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper04.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper06.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper07.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper09.jpg)"],[1,"background",2,"background-image","url(/assets/backgrounds/130130_gunny2wallpaper10.jpg)"],[1,"background",2,"background-image","url('/assets/backgrounds/\u2014Pngtree\u2014abstract background abstract light line_919531.jpg')"],[1,"playnow",3,"ngClass","mouseover","mouseout","click"],[1,"launcherDownload",3,"click"],[1,"hgradient","golden-shadow"],[1,"countdown-wrapper"],[1,"days","hgradient","golden-shadow"],[1,"hours","hgradient","golden-shadow"],[1,"minutes","hgradient","golden-shadow"],[1,"seconds","hgradient","golden-shadow"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n.YNc(1,Q,1,0,"div",1),n.YNc(2,$,1,0,"div",2),n.YNc(3,G,1,0,"div",3),n.YNc(4,X,1,0,"div",4),n.YNc(5,K,1,0,"div",5),n.YNc(6,V,1,0,"div",6),n.YNc(7,W,1,0,"div",7),n.YNc(8,nn,1,0,"div",8),n.YNc(9,tn,1,0,"div",9),n.qZA(),n._UZ(10,"div",10),n.TgZ(11,"div",11)(12,"div",12)(13,"div",13),n._UZ(14,"img",14),n.qZA(),n.TgZ(15,"div",15),n._uU(16," Game l\xe0 d\u1ec5, ch\u01a1i l\xe0 m\xea! "),n.qZA(),n.TgZ(17,"div",16),n.YNc(18,on,1,3,"div",17),n.YNc(19,an,1,0,"div",18),n.YNc(20,rn,2,0,"h1",19),n.YNc(21,sn,9,4,"div",20),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("ngIf",0==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",1==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",2==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",3==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",4==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",5==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",6==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",7==i.backgroundIndex),n.xp6(1),n.Q6J("ngIf",10==i.backgroundIndex),n.xp6(8),n.Q6J("ngClass",n.VKq(14,cn,!i.isOpen)),n.xp6(1),n.Q6J("ngIf",i.isOpen),n.xp6(1),n.Q6J("ngIf",i.isOpen),n.xp6(1),n.Q6J("ngIf",!i.isOpen),n.xp6(1),n.Q6J("ngIf",!i.isOpen))},directives:[u.O5,u.mk],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;width:100%;height:100%}#bgVideo[_ngcontent-%COMP%], .backgrounds[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;min-width:100%;min-height:100%;z-index:1;filter:blur(5px)}.backgrounds[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{width:100vw;height:100vh;background-size:cover;background-position:center center}.overlay[_ngcontent-%COMP%]{position:fixed;z-index:2;top:0;left:0;min-width:100%;min-height:100%;background-image:url(/assets/backgrounds/StarfieldSimulation.gif);background-size:cover;opacity:.4;background-position:center center;filter:blur(2px)}#main[_ngcontent-%COMP%]{position:relative;top:0;left:0;width:100%;height:100vh;z-index:3;display:flex;flex-direction:column}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:100px}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:600px}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%]{font-size:40px;margin-top:22px;color:#fff}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]{display:flex;margin-top:30px;justify-content:center;align-items:center}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .playnow[_ngcontent-%COMP%]{background-image:url(/assets/images/play-now.png);background-position-x:0;background-size:cover;height:125px;width:346px;cursor:pointer}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .playnow.blinked[_ngcontent-%COMP%]{background-position-x:100%}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .launcherDownload[_ngcontent-%COMP%]{background-image:url(/assets/images/download-now.png);background-position-x:0;background-size:cover;height:125px;width:372px;cursor:pointer}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .hgradient[_ngcontent-%COMP%]{font-weight:700;background:#FFA902;background:linear-gradient(to top,#FFA902 0%,#FACC22 50%,#FFA902 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-size:50px;margin-left:25px;margin-right:25px;position:relative}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{position:absolute;bottom:-16px;left:2px;background:#FFA902;background:linear-gradient(to top,#FFA902 0%,#FACC22 50%,#FFA902 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:25px}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]:after{content:"ng\\e0y"}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   .hours[_ngcontent-%COMP%]:after{content:"gi\\1edd";left:7px}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   .minutes[_ngcontent-%COMP%]:after{content:"ph\\fat"}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .contentFooter[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   .seconds[_ngcontent-%COMP%]:after{content:"gi\\e2y";left:5px}#main[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%]   .golden-shadow[_ngcontent-%COMP%]{filter:drop-shadow(0px 0px 3px #9f6b07)}']}),e})();var M={inSeconds:(e,o)=>{var t=o.getTime(),i=e.getTime();return Math.floor((t-i)/1e3)},inMinutes:(e,o)=>{var t=o.getTime(),i=e.getTime();return Math.floor((t-i)/6e4)},inHours:(e,o)=>{var t=o.getTime(),i=e.getTime();return Math.floor((t-i)/36e5)},inDays:(e,o)=>{var t=o.getTime(),i=e.getTime();return Math.floor((t-i)/864e5)},inWeeks:function(e,o){var t=o.getTime(),i=e.getTime();return parseInt(((t-i)/6048e5).toString())},inMonths:function(e,o){var t=e.getFullYear(),i=o.getFullYear(),a=e.getMonth();return o.getMonth()+12*i-(a+12*t)},inYears:function(e,o){return o.getFullYear()-e.getFullYear()}};let dn=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-play"]],decls:0,vars:0,template:function(t,i){},styles:[""]}),e})();var s=c(1777);const p=(e,o,t={optional:!0})=>(0,s.IO)(e,o,t),k=[p(":enter, :leave",(0,s.oB)({position:"fixed",width:"100%",height:"100%"})),p(":enter",(0,s.oB)({transform:"translateX(100%)"})),(0,s.ru)([p(":leave",[(0,s.oB)({transform:"translateX(0%)"}),(0,s.jt)("1.0s ease",(0,s.oB)({transform:"translateX(-100%)"}))]),p(":enter",[(0,s.jt)("1.0s ease",(0,s.oB)({transform:"translateX(0%)"})),(0,s.pV)()])])],Z=[p(":enter, :leave",(0,s.oB)({position:"fixed",width:"100%",height:"100%"})),p(":enter",(0,s.oB)({transform:"translateX(-100%)"})),(0,s.ru)([p(":leave",[(0,s.oB)({transform:"translateX(0%)"}),(0,s.jt)("1.0s ease",(0,s.oB)({transform:"translateX(100%)"}))]),p(":enter",[(0,s.jt)("1.0s ease",(0,s.oB)({transform:"translateX(0%)"})),(0,s.pV)()])])],gn=(0,s.X$)("routeTransition",[(0,s.eR)(":increment",k),(0,s.eR)(":decrement",Z)]),un=(0,s.X$)("routeAnimation",[(0,s.eR)(":increment",k),(0,s.eR)(":decrement",Z)]),pn=(0,s.X$)("appearTransition",[(0,s.eR)("* => *",k)]);function mn(e,o){1&e&&(n.TgZ(0,"span"),n._uU(1,"T\xe0i kho\u1ea3n"),n.qZA())}(0,s.X$)("pageAnimation",[(0,s.eR)(":enter",[p("h1",[(0,s.oB)({transform:"scale(0)"}),(0,s.jt)("1s",(0,s.oB)("*"))],{optional:!0})])]);const fn=[{path:"",component:(()=>{class e{constructor(t,i,a){this.route=t,this.local=i,this.authService=a}ngOnInit(){}getStateTransition(t){return t&&t.activatedRouteData&&t.activatedRouteData.routeIdx}getStateAnimation(t){return t&&t.activatedRouteData&&t.activatedRouteData.routeIdx}getStateAppear(t){return t&&t.activatedRouteData&&t.activatedRouteData.state}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.gz),n.Y36(T.n2),n.Y36(x))},e.\u0275cmp=n.Xpm({type:e,selectors:[["pages-component"]],decls:36,vars:3,consts:[[1,"links"],[1,"item"],["href","#"],[1,"fa-solid","fa-house","fa-lg"],["href","https://www.facebook.com/easygunny"],[1,"fa-brands","fa-facebook","fa-lg"],["href","https://www.facebook.com/groups/easygunny"],["href","https://discord.gg/FR7P4DZBVK"],[1,"fa-brands","fa-discord","fa-lg"],["href","https://zalo.me/g/krydyc014"],["height","26","src","assets/images/zalo.png"],[1,"sign"],[4,"ngIf"],[1,"body"],["o","outlet"],[1,"copyright"]],template:function(t,i){if(1&t&&(n.TgZ(0,"header")(1,"div",0)(2,"div",1)(3,"a",2),n._UZ(4,"i",3),n.TgZ(5,"span"),n._uU(6,"Trang ch\u1ee7"),n.qZA()()(),n.TgZ(7,"div",1)(8,"a",4),n._UZ(9,"i",5),n.TgZ(10,"span"),n._uU(11,"Fanpage"),n.qZA()()(),n.TgZ(12,"div",1)(13,"a",6),n._UZ(14,"i",5),n.TgZ(15,"span"),n._uU(16,"Group"),n.qZA()()(),n.TgZ(17,"div",1)(18,"a",7),n._UZ(19,"i",8),n.TgZ(20,"span"),n._uU(21,"Discord"),n.qZA()()(),n.TgZ(22,"div",1)(23,"a",9),n._UZ(24,"img",10),n._uU(25," \xa0\xa0"),n.TgZ(26,"span"),n._uU(27,"Zalo"),n.qZA()()()(),n.TgZ(28,"div",11),n.YNc(29,mn,2,0,"span",12),n.qZA()(),n.TgZ(30,"div",13),n._UZ(31,"router-outlet",null,14),n.qZA(),n.TgZ(33,"footer")(34,"div",15),n._uU(35," EZTeam \xa9 2022 - ezgunteam@gmail.com "),n.qZA()()),2&t){const a=n.MAs(32);n.xp6(29),n.Q6J("ngIf",i.authService.isLoggedIn()),n.xp6(1),n.Q6J("@routeTransition",i.getStateTransition(a))("@routeAnimation",i.getStateAnimation(a))}},directives:[u.O5,d.lC],styles:["[_nghost-%COMP%]{display:block;width:100vw;height:100vh}header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:50px;padding:5px 10px;z-index:999}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{float:left;padding:5px 0;display:flex}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{color:#fff}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:0 10px;border-right:1px solid white}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child{padding:0 10px 0 0}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child{border-right:none}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;display:flex;text-decoration:none;align-items:center}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{color:#fff}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{text-decoration:underline}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:8px}header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px}header[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%]{float:right;color:#fff;display:flex;align-items:center}header[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px}.body[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}footer[_ngcontent-%COMP%]{padding:10px;display:flex;justify-content:space-between;align-items:center;position:fixed;bottom:0;left:0;width:100vw;height:50px;z-index:999}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#fff}"],data:{animation:[gn,pn,un]}}),e})(),children:[{path:"",data:{state:"lazy1",routeIdx:2},component:ln,children:[]},{path:"play",data:{state:"lazy1",routeIdx:3},component:dn,children:[]}]}];let hn=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[d.Bz.forChild(fn)],d.Bz]}),e})(),_n=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.ez,m.u5]]}),e})();var O=c(7579),A=c(9646),F=c(5963),vn=c(9841),Cn=c(8306),_=c(4004),Mn=c(5698),L=c(8505),E=c(8675),B=c(3900),bn=c(6063);class xn extends O.x{constructor(o=1/0,t=1/0,i=bn.l){super(),this._bufferSize=o,this._windowTime=t,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,t)}next(o){const{isStopped:t,_buffer:i,_infiniteTimeWindow:a,_timestampProvider:r,_windowTime:l}=this;t||(i.push(o),!a&&i.push(r.now()+l)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(o),{_infiniteTimeWindow:i,_buffer:a}=this,r=a.slice();for(let l=0;l<r.length&&!o.closed;l+=i?1:2)o.next(r[l]);return this._checkFinalizedStatuses(o),t}_trimBuffer(){const{_bufferSize:o,_timestampProvider:t,_buffer:i,_infiniteTimeWindow:a}=this,r=(a?1:2)*o;if(o<1/0&&r<i.length&&i.splice(0,i.length-r),!a){const l=t.now();let g=0;for(let f=1;f<i.length&&i[f]<=l;f+=2)g=f;g&&i.splice(0,g+1)}}}var kn=c(3099);class Pn{constructor(o={}){this.config=o,this.state={action:null,value:0,initialValue:0},this.requests=null,this.disabled=!1,this.stream$=new O.x,this._value$=null,this.timer$=t=>{let i=(0,A.of)(t);switch(t.action){case"start":case"increment":case"set":"start"===t.action&&0===this.config.latencyThreshold&&0===t.value&&(t.value=t.initialValue),this.requests>0&&(i=(0,F.H)(this.config.latencyThreshold,250).pipe((0,_.U)(a=>Object.assign(Object.assign({},t),{value:0===a?this.state.value||t.initialValue:this._increment()}))));break;case"complete":case"stop":i=0===t.value?(0,A.of)(Object.assign({},t)):(0,F.H)(0,500).pipe((0,Mn.q)(2),(0,_.U)(a=>({value:0===a?100:0})))}return i.pipe((0,_.U)(a=>Object.assign(Object.assign({},a),{action:"set"})),(0,L.b)(a=>this.next(a,!1)))},this.config=Object.assign({latencyThreshold:0},o)}get value$(){return this._value$?this._value$:this._value$=this.stream$.pipe((0,E.O)(this.state),(0,B.w)(o=>this.timer$(o)),function On(e,o,t){let i,a=!1;return e&&"object"==typeof e?({bufferSize:i=1/0,windowTime:o=1/0,refCount:a=!1,scheduler:t}=e):i=null!=e?e:1/0,(0,kn.B)({connector:()=>new xn(i,o,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}(),(0,_.U)(o=>o.value))}start(o=2){this.disabled||this.next({action:"start",initialValue:o})}stop(){this.next({action:"stop"})}complete(){this.next({action:"complete"})}disable(){this.disabled=!0}set(o){this.next({action:"set",value:o})}increment(o=0){this.next({action:"increment",value:o})}next(o,t=!0){switch(o.action){case"start":this.requests=(this.requests||0)+1;break;case"complete":if(this.requests=(this.requests||1)-1,this.requests>0)return;break;case"stop":this.requests=0;break;case"increment":o.value=this._increment(o.value)}this.state=Object.assign(Object.assign(Object.assign({},this.state),{action:null}),o),t&&this.stream$.next(this.state)}_increment(o=0){const t=this.state.value;return t>=99&&(o=0),0===o&&(o=t>=0&&t<25?3*Math.random()+3:t>=25&&t<65?3*Math.random():t>=65&&t<90?2*Math.random():t>=90&&t<99?.5:0),o+t}}const Tn=new n.OlP("LOADING_BAR_CONFIG");let S=(()=>{class e{constructor(t,i={},a){this.platformId=t,this.config=i,this.zone=a,this.refs={},this.streams$=new O.x,this.value$=this.streams$.pipe((0,E.O)(null),(0,B.w)(()=>(0,vn.a)(Object.keys(this.refs).map(r=>this.refs[r].value$))),function In(e){return e?o=>new Cn.y(t=>o.subscribe(i=>e.run(()=>t.next(i)),i=>e.run(()=>t.error(i)),()=>e.run(()=>t.complete()))):o=>o}(this.zone),(0,_.U)(r=>Math.max(0,...r)))}get progress$(){return this.value$}start(t=2){this.useRef().start(t)}set(t){this.useRef().set(t)}increment(t){this.useRef().increment(t)}complete(){this.useRef().complete()}stop(){this.useRef().stop()}useRef(t="default"){return this.refs[t]||(this.refs[t]=new Pn(this.config),this.streams$.next(),(0,u.NF)(this.platformId)||this.refs[t].disable()),this.refs[t]}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(n.Lbi),n.LFG(Tn,8),n.LFG(n.R0b,8))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.ez]]}),e})();var Zn=c(8746);const An=new h.Xk(()=>!1);let Fn=(()=>{class e{constructor(t){this.loader=t}intercept(t,i){if(t.headers.has("ignoreLoadingBar"))return i.handle(t.clone({headers:t.headers.delete("ignoreLoadingBar")}));if(!0===t.context.get(An))return i.handle(t);let a=!1;const r=this.loader.useRef("http");return i.handle(t).pipe((0,L.b)(()=>{a||(r.start(),a=!0)}),(0,Zn.x)(()=>a&&r.complete()))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(S))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),Ln=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[{provide:h.TP,useClass:Fn,multi:!0}],imports:[[h.JF,v],h.JF,v]}),e})(),En=(()=>{class e{constructor(t,i){const a=i.useRef("router");t.events.subscribe(r=>{const l=this.getCurrentNavigationState(t);l&&l.ignoreLoadingBar||(r instanceof d.OD&&a.start(),(r instanceof d.Q3||r instanceof d.m2||r instanceof d.gk)&&a.complete())})}getCurrentNavigationState(t){const i=t.getCurrentNavigation&&t.getCurrentNavigation();return i&&i.extras?i.extras.state:{}}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(d.F0),n.LFG(S))},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[d.Bz,v],d.Bz,v]}),e})(),Bn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[],imports:[[hn,_n,Ln,En,v,u.ez,C.HK]]}),e})()}}]);