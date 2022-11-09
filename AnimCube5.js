"use strict";function AnimCube5(e){var t,r,n,o,a,l,f,i,u,c,s,h,v,d,g,m,b,M,p,k,L,y,w,R,F,T,D,S,A,B,x,E,U,I,P,C,X,W,Y,z,q,O,Q,Z,N,H,G,K,j=[],J=[],V=[],$=[],_=[],ee=[],te=[[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]],re=[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1],[-1,1,-1],[1,1,-1],[1,1,1],[-1,1,1]],ne=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[2,6,7,3],[0,3,7,4],[1,5,6,2]],oe=[[0,3,2,1],[0,3,2,1],[3,2,1,0],[3,2,1,0],[0,3,2,1],[0,3,2,1]],ae=[[2,5,3,4],[4,3,5,2],[4,1,5,0],[5,1,4,0],[0,3,1,2],[2,1,3,0]],le=[1,1,-1,-1,-1,-1],fe=[0,0,-1],ie=[1,0,0],ue=[],ce=[],se=[],he=[],ve=!0,de=[],ge=[],me=[],be=[],Me=[],pe=!0,ke=-1,Le=6,ye=12,we=!0,Re=!1,Fe=!1,Te=!1,De=0,Se=0,Ae=0,Be=0,xe=[3,2,0,5,1,4],Ee=[[20,15,10,5,0,21,16,11,6,1,22,17,12,7,2,23,18,13,8,3,24,19,14,9,4],[4,9,14,19,24,3,8,13,18,23,2,7,12,17,22,1,6,11,16,21,0,5,10,15,20],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],[20,15,10,5,0,21,16,11,6,1,22,17,12,7,2,23,18,13,8,3,24,19,14,9,4],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]];function Ue(){var e=Pe("config");null!=e?function(e){var t=new XMLHttpRequest;function r(){4==t.readyState&&(200==t.status?function(e){for(var t=e.split("\n"),r=0;r<t.length;r++){var n=t[r].split("=");void 0!==n[1]&&(j[n[0]]=n[1].trim())}}(t.responseText):console.log("Error loading config file: "+e),Ie())}t.onreadystatechange=r,t.open("GET",e,!0),t.send()}(e):Ie()}function Ie(){J[0]=Qr(255,128,64),J[1]=Qr(255,0,0),J[2]=Qr(0,255,0),J[3]=Qr(0,0,255),J[4]=Qr(153,153,153),J[5]=Qr(170,170,68),J[6]=Qr(187,119,68),J[7]=Qr(153,68,68),J[8]=Qr(68,119,68),J[9]=Qr(0,68,119),J[10]=Qr(255,255,255),J[11]=Qr(255,255,0),J[12]=Qr(255,96,32),J[13]=Qr(208,0,0),J[14]=Qr(0,144,0),J[15]=Qr(32,64,208),J[16]=Qr(176,176,176),J[17]=Qr(80,80,80),J[18]=Qr(255,0,255),J[19]=Qr(0,255,255),J[20]=Qr(255,160,192),J[21]=Qr(32,255,16),J[22]=Qr(0,0,0),J[23]=Qr(128,128,128);var e=Pe("bgcolor");if(t=null!=e&&6==e.length&&Nr(e)?"#"+e:"gray",e=Pe("butbgcolor"),o=null!=e&&6==e.length&&Nr(e)?"#"+e:t,null!=(e=Pe("colors")))for(var u=0;u<10&&u<e.length/6;u++)Nr(e.substring(6*u,6*u+6))&&(J[u]="#"+e.substring(6*u,6*u+6));for(u=0;u<6;u++)for(var c=0;c<25;c++)V[u][c]=u+10;if(null!=(e=Pe("supercube"))&&"1"==e){Fe=!0,Ce(.06);for(u=0;u<25;u++)V[0][u]=22;null!=(e=Pe("scw"))&&("1"==e?Ae=1:"2"==e&&(Ae=2)),1==Ae&&(J[10]="#000000")}if(null!=(e=Pe("gabbacolors"))&&"1"==e&&(1==Fe?(J[11]="#fdcf00",J[12]="#fd4e0a",J[13]="#93000d",J[14]="#00702d",J[15]="#00347a"):(Ce(.06),J[11]="#ffd90a",J[12]="#ff4f0b",J[13]="#9e0b19",J[14]="#0b7d39",J[15]="#0b4186")),null!=(e=Pe("borderwidth"))){for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(Be=10*Be+parseInt(e[u]));Be>=0&&Be<=20&&Ce(Be/100)}if(Fe)for(u=0;u<6;u++)for(c=0;c<25;c++)$[u][c]=0;var s="lluu";if(null!=(e=Pe("colorscheme"))&&6==e.length)for(u=0;u<6;u++){var h=23;for(c=0;c<23;c++)if(e[u].toLowerCase()=="0123456789wyorgbldmcpnk".charAt(c)){h=c;break}for(c=0;c<25;c++)V[u][c]=h}if("1"==(e=Pe("scramble"))?De=1:"2"==e&&(De=2),0==De){if(null!=(e=Pe("pos"))&&150==e.length){s="uuuuff","gray"==t&&(t="white");for(u=0;u<6;u++){var g=xe[u];for(c=0;c<25;c++){var m=Ee[u][c];V[g][m]=23;for(var b=0;b<14;b++)if(e.charAt(25*u+c)=="DFECABdfecabgh".charAt(b)){V[g][m]=b+4;break}}}}if(null!=(e=Pe("facelets"))&&150==e.length)for(u=0;u<6;u++)for(c=0;c<25;c++){V[u][c]=23;for(b=0;b<23;b++)if(e[25*u+c].toLowerCase()=="0123456789wyorgbldmcpnk".charAt(b)){V[u][c]=b;break}}if(null!=(e=Pe("superfacelets"))&&150==e.length)for(u=0;u<6;u++)for(c=0;c<25;c++)for(b=0;b<4;b++)if(e[25*u+c].toLowerCase()=="0123".charAt(b)){$[u][c]=b;break}}if(N=0,K=!1,G=!1,null!=(e=Pe("sign"))&&"1"==e&&(G=!0,N=5,K=!0),null!=(e=Pe("yz"))&&("0"==e?K=!1:"1"==e&&(K=!0)),null!=(e=Pe("randmoves"))){var L=0;for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(L=10*L+parseInt(e[u]));L>0&&(Se=L)}("random"==(e=Pe("move"))||De>0)&&(e=In(5,Se)),de=null==e||0==e.length?[]:Ye(e,!0),C=0,q=-1,0==De&&(null!=(e=Pe("initmove"))&&("random"==e&&(e=In(5,Se)),me="#"==e?de:Ye(e,!1)),null!=(e=Pe("initrevmove"))&&("random"==e&&(e=In(5,Se)),be="#"==e?de:Ye(e,!1)),null!=(e=Pe("demo"))&&("random"==e&&(e=In(5,Se)),(ge="#"==e?de:Ye(e,!0)).length>0&&ge[0].length>0&&(F=!0))),e=Pe("position"),Ir(Yr(ue,fe,ie)),null==e&&(e=s);var y=Math.PI/12;for(u=0;u<e.length;u++){var w=y;switch(e[u].toLowerCase()){case"d":w=-w;case"u":qr(fe,w),qr(ie,w);break;case"f":w=-w;case"b":Or(fe,w),Or(ie,w);break;case"l":w=-w;case"r":zr(fe,w),zr(ie,w)}}if(Ir(Yr(ue,fe,ie)),v=0,d=0,null!=(e=Pe("speed")))for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(v=10*v+parseInt(e[u]));if(null!=(e=Pe("doublespeed")))for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(d=10*d+parseInt(e[u]));if(0==v&&(v=10),0==d&&(d=3*v/2),T=0,null==(e=Pe("perspective")))T=2;else for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(T=10*T+parseInt(e[u]));var R,P=0;if(null!=(e=Pe("scale")))for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(P=10*P+parseInt(e[u]));if(D=1/(1+P/10),A=!1,null!=(e=Pe("hint"))){A=!0,B=0;for(u=0;u<e.length;u++)e.charAt(u)>="0"&&e.charAt(u)<="9"&&(B=10*B+parseInt(e[u]));B<1?A=!1:B/=10}(x=3.7,null!=(e=Pe("hinthoriz")))&&((R=parseFloat(e))>0&&(x=R));(E=3.7,null!=(e=Pe("hintvert")))&&((R=parseFloat(e))>0&&(E=R));(U=0,null!=(e=Pe("hintborder"))&&"1"==e&&(U=1),Q=13,null!=(e=Pe("buttonheight")))&&((R=parseInt(e))>=9&R<=25&&(Q=R));(Le=0==de.length?0:6,O=1,"0"==(e=Pe("buttonbar"))?(O=0,Q=0,Le=0):"1"==e?O=1:"2"!=e&&0!=de.length||(O=2,Le=0),e=Pe("edit"),M="0"!=e,e=Pe("repeat"),p="0"!=e,e=Pe("clickprogress"),k="0"!=e,"1"==(e=Pe("movetext"))?N=1:"5"==e&&(N=5),H=1,"0"==(e=Pe("movetextspace"))&&(H=0),null!=(e=Pe("textsize")))&&((R=parseInt(e))>=5&R<=40&&(ye=R));(e=Pe("fonttype"),we=null==e||"1"==e,z=0,null!=(e=Pe("metric"))&&("1"==e?z=1:"2"==e?z=2:"3"==e&&(z=3)),S=1,null!=(e=Pe("align")))&&((R=parseInt(e))>=0&R<=3&&(S=R),R>=3&R<=99&&(S=R/100));null!=(e=Pe("snap"))&&"1"==e&&(Re=!0);for(u=0;u<6;u++)for(c=0;c<25;c++)_[u][c]=V[u][c],ee[u][c]=$[u][c];me.length>0&&_e(V,me[0],0,me[0].length,!1),be.length>0&&_e(V,be[0],0,be[0].length,!0),2==De&&_e(V,de[0],0,de[0].length,!0);for(u=0;u<3;u++)ce[u]=fe[u],se[u]=ie[u],he[u]=ue[u];an(t)<128?(n="white",r=function(e){"#"!=e.substring(0,1)&&(e=on(e));var t=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16);return t=Math.floor(1.3*t),r=Math.floor(1.3*r),n=Math.floor(1.3*n),Qr(t>255?255:t,r>255?255:r,n>255?255:n)}(t)):(n="black",r=ln(t)),f=an(o)<128?"white":"black",a=n,null!=(e=Pe("slidercolor"))&&6==e.length&&Nr(e)&&(a="#"+e),l=ln(t),null!=(e=Pe("sliderbgcolor"))&&6==e.length&&Nr(e)&&(l="#"+e),null!=(e=Pe("troughcolor"))&&6==e.length&&Nr(e)&&(l="#"+e),i="black",null!=(e=Pe("cubecolor"))&&6==e.length&&Nr(e)&&(i="#"+e),I=1,"0"==(e=Pe("counter"))&&(I=0),q=de.length>0&&de[0][0]>=1e3?0:-1,pn=Mn.getContext("2d"),wn=Q,Rn=Le,Fn=ye,Un(),Tn.appendChild(Mn),mr(),F&&rt(-1)}function Pe(e){var t=Pn[e];return void 0===t?j[e]:t}function Ce(e){Rr[0][0]=Rr[0][1]=Rr[1][1]=Rr[3][0]=e,Rr[1][0]=Rr[2][0]=Rr[2][1]=Rr[3][1]=1-e}var Xe=[0,0,0,0,0,0,6,6,6,3,3,3,3,3,3,2,2,2,2,2,2],We=[0,1,2,3,4,5,1,2,4,5,2,0,5,2,0,0,1,2,3,4,5];function Ye(e,t){if(t){for(var r=e.indexOf("{");-1!=r;)r=e.indexOf("{",r+1);if(null==Me)q=0,Me=[];else{for(var n=[],o=0;o<Me.length;o++)n[o]=Me[o];q=Me.length,Me=n}}var a=1;for(r=e.indexOf(";");-1!=r;)a++,r=e.indexOf(";",r+1);var l=[],f=0;for(r=e.indexOf(";"),a=0;-1!=r;)l[a]=qe(e.substring(f,r),t,a++),f=r+1,r=e.indexOf(";",f);return l[a]=qe(e.substring(f),t,a),l}var ze=["n","t","c","s","a","m"];function qe(e,t,r){if(G&&(e=function(e){return e=function(e,t,r){for(var n=0;n<6;n++){var o=new RegExp(t+Oe[n],"g");e=e.replace(o,Oe[n]+r)}return e}(e,2,"n"),e}(e)),"#"==e.trim()&&void 0!==de[r])return de[r];var n=0,o=[],a="UDFBLRESMXYZxyzudfblr";1==K&&(a="UDFBLRESMXZYxzyudfblr");for(var l=0;l<e.length;l++)if("."==e.charAt(l))o[n]=-1,n++;else if("{"==e.charAt(l)){l++;for(var f="";l<e.length&&"}"!=e.charAt(l);)t&&(f+=e.charAt(l)),l++;t&&(Me[q]=f,o[n]=1e3+q,q++,n++)}else for(var i=0;i<21;i++)if(e.charAt(l)==a.charAt(i)){l++;var u=Xe[i];if(o[n]=28*We[i],l<e.length&&0==Xe[i])for(var c=0;c<ze.length;c++)if(e.charAt(l)==ze[c]){u=c+1,l++;break}o[n]+=4*u,l<e.length&&("1"==e.charAt(l)?l++:"'"==e.charAt(l)||"3"==e.charAt(l)?(o[n]+=2,l++):"2"==e.charAt(l)&&(++l<e.length&&"'"==e.charAt(l)?(o[n]+=3,l++):o[n]+=1)),n++,l--;break}return o}var Oe=["U","D","F","B","L","R"];function Qe(e,t,r){if(t>=e.length)return"";for(var n="",o=t;o<r;o++){var a=He(e,o);""!=a&&(n+=a+(H?" ":""))}return n}var Ze=[[["U","D","F","B","L","R"],["Un","Dn","Fn","Bn","Ln","Rn"],["Ut","Dt","Ft","Bt","Lt","Rt"],["Uc","Dc","Fc","Bc","Lc","Rc"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"],["Um","Dm","Fm","Bm","Lm","Rm"]],[["U","D","F","B","L","R"],["Un","Dn","Fn","Bn","Ln","Rn"],["u","d","f","b","l","r"],["Z","~Z","Y","~Y","~X","X"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"],["~E","E","S","~S","M","~M"]],[["U","D","F","B","L","R"],["Un","Dn","Fn","Bn","Ln","Rn"],["u","d","f","b","l","r"],["Y","~Y","Z","~Z","~X","X"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"],["~E","E","S","~S","M","~M"]],[["U","D","F","B","L","R"],["Un","Dn","Fn","Bn","Ln","Rn"],["Uu","Dd","Ff","Bb","Ll","Rr"],["QU","QD","QF","QB","QL","QR"],["UD'","DU'","FB'","BF'","LR'","RL'"],["UD","DU","FB","BF","LR","RL"],["u","d","f","b","l","r"]],[["U","D","F","B","L","R"],["2U","2D","2F","2B","2L","2R"],["u","d","f","b","l","r"],["y","~y","z","~z","~x","x"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"],["~E","E","S","~S","M","~M"]]],Ne=["","2","'","2'"];function He(e,t){if(t>=e.length)return"";if(e[t]>=1e3)return"";if(-1==e[t])return".";var r=Ze[N-1][Math.floor(e[t]/4)%7][Math.floor(e[t]/28)];return"~"==r.charAt(0)?r.substring(1)+Ne[(e[t]+2)%4]:r+Ne[e[t]%4]}var Ge=["","q","h","s"];function Ke(e){for(var t=0,r=0;r<e.length;r++)e[r]<1e3&&t++;return t}function je(e,t){for(var r=0,n=0;;){for(;r<e.length&&e[r]>=1e3;)r++;if(n==t)break;r<e.length&&(n++,r++)}return r}function Je(e,t){for(var r=0,n=0;n<e.length&&(n<t||t<0);n++)r+=Ve(e[n]);return r}function Ve(e){if(e<0||e>=1e3)return 0;var t=e%4,r=Math.floor(e/4)%7,n=1;switch(z){case 1:1!=t&&3!=t||(n*=2);case 2:(1==r||r>3)&&(n*=2);case 3:3==r&&(n=0),3!=z||4!=r&&5!=r||(n*=2)}return n}function $e(e){q=e.length>0&&e[0]>=1e3?e[0]-1e3:-1}function _e(e,t,r,n,o){for(var a=o?r+n:r;;){if(o){if(a<=r)break;a--}if(t[a]>=1e3)q=o?-1:t[a]-1e3;else if(t[a]>=0){var l=t[a]%4+1,f=Math.floor(t[a]/4)%7;4==l&&(l=2),o&&(l=4-l),pt(e,Math.floor(t[a]/28),l,f)}if(!o&&++a>=r+n)break}}var et=0,tt=0;function rt(e){if(nt(),(F||0!=de.length&&0!=de[P].length)&&(!F||0!=ge.length&&0!=ge[0].length)){switch(X=1,W=!1,Y=!0,e){case 0:break;case 1:X=-1;break;case 2:W=!0;break;case 3:X=-1,W=!0;break;case 4:Y=!1}fn(et++,X)}}function nt(){1==w&&(m=!0)}function ot(){C=0,ve=!0,b=!1;for(var e=0;e<6;e++)for(var t=0;t<25;t++)V[e][t]=_[e][t],$[e][t]=ee[e][t];me.length>0&&void 0!==me[P]&&_e(V,me[P],0,me[P].length,!1),be.length>0&&void 0!==be[P]&&_e(V,be[P],0,be[P].length,!0),de.length>0&&$e(de[P]),De>0&&(de=Ye(In(5,Se),!1)),2==De&&_e(V,de[0],0,de[0].length,!0);for(e=0;e<3;e++)fe[e]=ce[e],ie[e]=se[e],ue[e]=he[e];setTimeout(mr,0)}var at=[[[0,5],[0,5]],[[0,5],[0,5]],[[0,5],[0,5]],[[0,5],[0,5]],[[0,5],[0,5]],[[0,5],[0,5]]],lt=[],ft=[],it=[],ut=[],ct=[],st=[[[0,0],[0,0]],[[0,5],[0,5]],[[0,5],[0,1]],[[0,1],[0,5]],[[0,5],[4,5]],[[4,5],[0,5]],[[0,5],[0,2]],[[0,2],[0,5]],[[0,5],[3,5]],[[3,5],[0,5]]],ht=[[1,0,3,3,2,3],[0,1,5,5,4,5],[2,3,1,0,3,2],[4,5,0,1,5,4],[3,2,2,4,1,0],[5,4,4,2,0,1]],vt=[[0,1,5,5,4,5],[1,0,3,3,2,3],[4,5,0,1,5,4],[2,3,1,0,3,2],[5,4,4,2,0,1],[3,2,2,4,1,0]],dt=[[[0,0],[0,0]],[[0,4],[1,3]],[[1,3],[0,4]],[[0,5],[3,4]],[[0,5],[1,2]],[[3,4],[0,5]],[[1,2],[0,5]],[[2,3],[0,5]],[[0,5],[2,3]]],gt=[[0,0,6,6,4,6],[0,0,5,5,3,5],[4,6,0,0,6,4],[3,5,0,0,5,3],[6,4,4,3,0,0],[5,3,3,4,0,0]],mt=[[0,0,7,7,8,7],[0,0,7,7,8,7],[8,7,0,0,7,8],[8,7,0,0,7,8],[7,8,8,8,0,0],[7,8,8,8,0,0]],bt=[[0,0,5,5,3,5],[0,0,6,6,4,6],[3,5,0,0,5,3],[4,6,0,0,6,4],[5,3,3,4,0,0],[6,4,4,3,0,0]];function Mt(e){for(var t=0;t<6;t++)lt[t]=st[ht[e][t]],ct[t]=st[vt[e][t]],ft[t]=dt[gt[e][t]],it[t]=dt[mt[e][t]],ut[t]=dt[bt[e][t]];ve=!1}function pt(e,t,r,n){switch(n){case 2:Dt(e,t,4-r,0),Dt(e,t,4-r,1);break;case 3:Dt(e,t,4-r,0),Dt(e,t,4-r,1),Dt(e,t,4-r,6),Dt(e,1^t,r,1),Dt(e,1^t,r,0);break;case 4:Dt(e,t,4-r,0),Dt(e,1^t,r,0);break;case 5:Dt(e,1^t,4-r,0),Dt(e,t,4-r,0);break;default:Dt(e,t,4-r,n)}}var kt=[0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5],Lt=[6,7,8,13,18,17,16,11],yt=[1,5,-1,-5,1,5,-1,-5],wt=[0,4,24,20,5,3,19,21,10,2,14,22],Rt=[[3,3,3,0],[2,1,1,1],[3,3,0,0],[2,1,1,2],[3,2,0,0],[2,2,0,1]],Ft=[[7,7,7,4],[6,5,5,5],[7,7,4,4],[6,5,5,6],[7,6,4,4],[6,6,4,5]],Tt=[];function Dt(e,t,r,n){St(e,t,r,n),1==Fe&&r>0&&r<4&&(St($,t,r,n),function(e,t,r){if(6==r)return 4==e&&(Xt(10,1,3),1==t?Xt(10,1,1):2==t?Xt(10,1,2):3==t&&Xt(2,5,0)),5==e&&(Xt(10,1,3),1==t?Xt(2,5,0):2==t?Xt(10,1,2):3==t&&Xt(10,1,1)),2==e&&Wt(4,4-t),void(3==e&&Wt(4,t));var n=1==r;if(0==n)for(var o=0;o<25;o++)$[e][o]=($[e][o]+4-t)%4;4==e&&(0==n&&(Xt(20,1,3),1==t?Xt(0,1,1):2==t?Xt(0,1,2):3==t&&Xt(0,5,0)),1==n&&(Xt(15,1,3),1==t?Xt(5,1,1):2==t?Xt(5,1,2):3==t&&Xt(1,5,0)));5==e&&(0==n&&(Xt(0,1,3),1==t?Xt(4,5,0):2==t?Xt(20,1,2):3==t&&Xt(20,1,1)),1==n&&(Xt(5,1,3),1==t?Xt(3,5,0):2==t?Xt(15,1,2):3==t&&Xt(15,1,1)));0==n&&(2==e&&Wt(0,4-t),3==e&&Wt(1,t));1==n&&(2==e&&Wt(2,4-t),3==e&&Wt(3,t))}(t,r,n))}function St(e,t,r,n){if(!n){for(var o=0;o<16;o++)Tt[(o+4*r)%16]=e[t][kt[o]];for(o=0;o<16;o++)e[t][kt[o]]=Tt[o];for(o=0;o<8;o++)Tt[(o+2*r)%8]=e[t][Lt[o]];for(o=0;o<8;o++)e[t][Lt[o]]=Tt[o]}var a=5*r;for(o=0;o<4;o++)for(var l=ae[t][o],f=n?Ft[t][o]:Rt[t][o],i=yt[f],u=n>1?wt[f+4]:wt[f],c=0;c<5;c++,a++)Tt[a%20]=e[l][c*i+u];for(o=0,a=0;o<4;o++)for(l=ae[t][o],f=n?Ft[t][o]:Rt[t][o],i=yt[f],u=n>1?wt[f+4]:wt[f],c=0;c<5;c++,a++)e[l][c*i+u]=Tt[a]}var At,Bt,xt,Et,Ut,It,Pt,Ct=[[[0,1,0],[0,5,1],[0,5,4],[0,1,5]],[[20,1,0],[4,5,1],[4,5,4],[20,1,5]],[[5,1,0],[1,5,1],[1,5,4],[5,1,5]],[[15,1,0],[3,5,1],[3,5,4],[15,1,5]],[[10,1,0],[2,5,1],[2,5,4],[10,1,5]]];function Xt(e,t,r){for(var n=e,o=0;o<5;n+=t,o++)$[r][n]=($[r][n]+2)%4}function Wt(e,t){for(var r=0;r<4;r++)for(var n=Ct[e][r],o=n[0],a=0;a<5;o+=n[1],a++)$[n[2]][o]=($[n[2]][o]+t)%4}var Yt,zt,qt=[],Ot=[],Qt=[],Zt=[],Nt=[[[0,0],[5,0],[5,1],[0,1]],[[5,0],[5,5],[4,5],[4,0]],[[5,5],[0,5],[0,4],[5,4]],[[0,5],[0,0],[1,0],[1,5]],[[0,1],[5,1],[5,2],[0,2]],[[4,0],[4,5],[3,5],[3,0]],[[0,3],[5,3],[5,4],[0,4]],[[2,0],[2,5],[1,5],[1,0]],[[0,2],[5,2],[5,3],[0,3]],[[3,0],[3,5],[2,5],[2,0]]],Ht=[[1,0],[0,1],[-1,0],[0,-1],[1,0],[0,1],[-1,0],[0,-1],[1,0],[0,1]],Gt=[[1,1,1,1,1,1,1,1,1,-1],[1,1,1,1,1,1,1,1,1,-1],[1,-1,1,-1,1,-1,1,-1,1,1],[1,-1,1,-1,1,-1,1,-1,-1,1],[-1,1,-1,1,-1,1,-1,1,-1,-1],[1,-1,1,-1,1,-1,1,-1,1,1]],Kt=[],jt=[],Jt=[[[1,0,0],[0,0,0],[0,0,1]],[[1,0,0],[0,1,0],[0,0,0]],[[0,0,0],[0,1,0],[0,0,1]]],Vt=[[[0,0,1],[0,0,0],[-1,0,0]],[[0,1,0],[-1,0,0],[0,0,0]],[[0,0,0],[0,0,1],[0,-1,0]]],$t=[[[0,0,0],[0,1,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,1]],[[1,0,0],[0,0,0],[0,0,0]]],_t=[1,-1,1,-1,1,-1],er=[],tr=[],rr=[],nr=[],or=[],ar=[],lr=[],fr=[],ir=[],ur=[],cr=[],sr=[],hr=[[1,0,0,0,0],[0,1,0,0,0],[1,1,0,0,0],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,2],[0,0,1,0,0]],vr=[],dr=[[0,2,2,2,2],[2,1,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[0,2,2,2,0],[0,2,2,2,0],[2,2,6,2,2]],gr=[[0,1,2,3,4],[4,3,2,1,0],[0,4,3,1,2]];function mr(){if(pn.save(),pn.fillStyle=t,1!=O||0!=Le&&!F?(Hr(pn,0,0,At,Bt),pn.fillRect(0,0,At,Bt)):(Hr(pn,0,0,At,Bt-kn),pn.fillRect(0,0,At,Bt-kn)),Pt=0,ve)Dr(fe,ie,ue,at,3,9);else{for(var e=Math.cos(h+s),n=Math.sin(h+s)*_t[u],i=0;i<3;i++){er[i]=0,tr[i]=0;for(var v=0;v<3;v++){var d=Math.floor(u/2);er[i]+=fe[v]*($t[d][i][v]+Jt[d][i][v]*e+Vt[d][i][v]*n),tr[i]+=ie[v]*($t[d][i][v]+Jt[d][i][v]*e+Vt[d][i][v]*n)}}Yr(rr,er,tr);var g=Math.cos(h-s),m=Math.sin(h-s)*_t[u];for(i=0;i<3;i++){nr[i]=0,or[i]=0;for(v=0;v<3;v++){d=Math.floor(u/2);nr[i]+=fe[v]*($t[d][i][v]+Jt[d][i][v]*g+Vt[d][i][v]*m),or[i]+=ie[v]*($t[d][i][v]+Jt[d][i][v]*g+Vt[d][i][v]*m)}}Yr(ar,nr,or),ur[0]=fe,cr[0]=ie,sr[0]=ue,ur[1]=er,cr[1]=tr,sr[1]=rr,ur[2]=nr,cr[2]=or,sr[2]=ar,vr[0]=lt,vr[1]=ft,vr[2]=it,vr[3]=ut,vr[4]=ct,Wr(Pr(Ur(lr,fe),5+T),Pr(Ur(ir,te[u]),.4)),Wr(Pr(Ur(fr,fe),5+T),Pr(Ur(ir,te[1^u]),1/6));var b,M=Cr(lr,te[u]),p=Cr(fr,te[1^u]);b=M<0&&p>0?0:M>0&&p<0?1:2;for(i=0;i<5;i++){v=gr[b][i];var k=hr[c][v];Dr(ur[k],cr[k],sr[k],vr[v],dr[c][v],i)}}if(Z||w||(ke=-1),!(De>0&&2==O)){if(!F&&de.length>0){if(de[P].length>0){if(Le>0){pn.lineWidth=yn,pn.strokeStyle=f;var L=(At-2)*function(e,t){for(var r=0,n=0;n<t;n++)e[n]<1e3&&r++;return r}(de[P],C)/Ke(de[P]);pn.fillStyle=l,pn.fillRect(Ln,Bt-Le-Ln,At-kn,Le),pn.fillStyle=a,pn.fillRect(Ln,Bt-Le-Ln,L,Le),pn.beginPath(),pn.rect(Ln,Bt-Le-Ln,At-kn,Le),pn.stroke()}var y=Je(de[P],C)+"/"+Je(de[P],-1)+Ge[z];pn.font="bold "+ye+"px helvetica";var R=pn.measureText(y).width,D=At-R-2,S=Bt-Le-Math.floor(4*kn);N>0?(I&&xr(pn,y,we?D-kn:D,S-ye),function(e,t){var n=0==C?je(de[P],C):C,o=Qe(de[P],0,n),a=He(de[P],n),l=Qe(de[P],n+1,de[P].length);H&&(""==a&&(o=o.substr(0,o.length-1)),""!=l&&(l=" "+l.substr(0,l.length-1)));var f=e.measureText(o).width,i=e.measureText(a).width,u=e.measureText(l).width,c=1;c+f+i+u>At&&(c=Math.min(1,At/2-f-i/2),c=Math.max(c,At-f-i-u-2));i>0&&(e.fillStyle=r,e.lineWidth=2,e.strokeStyle="black",e.beginPath(),Fn<=14?e.fillRect(c+f-1,Bt-Le-ye-Math.floor(4*kn),i+2,ye+Math.floor(3*kn)):e.fillRect(c+f-1,Bt-Le-ye-Math.floor(2*kn),i+2,ye+Math.floor(kn)));f>0&&xr(e,o,c,t);i>0&&xr(e,a,c+f,t);u>0&&xr(e,l,c+f+i,t)}(pn,S)):I&&xr(pn,y,we?D-kn:D,S)}if(de.length>1){y=P+1+"/"+de.length,R=pn.measureText(y).width,D=At-R-2*Q-Math.floor(5*kn);xr(pn,y,D,br()),Kr(pn,7,At-2*Q,0),Kr(pn,8,At-Q,0)}}q>=0&&(pn.font="bold "+ye+"px helvetica",xr(pn,Me[q],we?kn:0,br()))}pn.restore(),pe&&0!=O&&function(e){var t=Q%2==0?1:0;if(t+=Math.floor(kn+.5)-1,2==O)return e.fillStyle=0==ke||De>0&&6==ke?ln(o):o,e.fillRect(Ln,Bt-Q,Q,Q),e.lineWidth=yn,e.strokeStyle=f,e.beginPath(),e.rect(Ln,Bt-Q-Ln,Q,Q),e.stroke(),void Kr(e,0,Q/2,Bt-(Q+1)/2-t);if(1==O){for(var r=0,n=0;n<7;n++){var a=Math.floor((At-r)/(7-n));e.fillStyle=ke==n?ln(o):o,e.fillRect(r,Bt,a,Q),e.lineWidth=yn,e.strokeStyle=f,e.beginPath(),0==n?e.rect(r+Ln,Bt-Ln,a-kn,Q):e.rect(r-Ln,Bt-Ln,a,Q),e.stroke(),e.strokeStyle="black",Kr(e,n,r+a/2,Bt+Q/2-t),r+=a}pe=!1}}(pn)}function br(){return Fn<10?Math.floor(10*kn):Fn<12?Math.floor(12*kn):Fn<14?Math.floor(14*kn):ye}var Mr=[],pr=[],kr=[],Lr=[],yr=[[],[],[],[],[],[]],wr=[[],[],[],[],[],[]],Rr=[[.1,.1],[.9,.1],[.9,.9],[.1,.9]],Fr=[[0,0],[0,1],[1,1],[1,0]],Tr=[];function Dr(e,t,r,n,o,a){for(var l=0;l<8;l++){var f=(v=At<Bt?At:Bt-Le)/3.7*Cr(re[l],t)*D,s=v/3.7*Cr(re[l],r)*D;f/=1-(d=v/(5+T)*Cr(re[l],e)*D)/v,s/=1-d/v,kr[l]=At/2+f,Lr[l]=0==S?(Bt-Le)/2*D-s:1==S?(Bt-Le)/2-s:2==S?Bt-Le-(Bt-Le)/2*D-s:(Bt-Le)*(S*(1-D)+D/2)-s}for(l=0;l<6;l++)for(var h=0;h<4;h++)yr[l][h]=kr[ne[l][h]],wr[l][h]=Lr[ne[l][h]];if(A)for(l=0;l<6;l++)if(Wr(Pr(Ur(lr,e),5+T),te[l]),Cr(lr,te[l])<0){Pr(Ur(Tr,te[l]),B);var v,d;f=(v=At<Bt?At:Bt-Le)/x*Cr(Tr,t),s=v/E*Cr(Tr,r);f/=1-(d=v/(5+T)*Cr(Tr,e))/v,s/=1-d/v;var g=n[l][0][1]-n[l][0][0],m=n[l][1][1]-n[l][1][0];if(g>0&&m>0)for(var p=0,k=n[l][1][0];p<m;p++,k++)for(var L=0,y=n[l][0][0];L<g;L++,y++){for(h=0;h<4;h++)Sr(l,h,Mr,pr,y+Rr[h][0],k+Rr[h][1],b),Mr[h]=Math.floor(Mr[h]+(b?-f:f)),pr[h]=Math.floor(pr[h]-s);1==Fe?(_r(pn,Mr,pr,"#fdfdfd"),$r(pn,Mr,pr,U?ln("#fdfdfd"):"#fdfdfd"),nn(pn,Mr,pr,l,$[l][5*k+y],J[V[l][5*k+y]])):(_r(pn,Mr,pr,J[V[l][5*k+y]]),$r(pn,Mr,pr,U?ln(J[V[l][5*k+y]]):J[V[l][5*k+y]]))}}var R=0;R=u>3?n[0][0][0]:u<2?n[2][0][0]:n[1][0][0];for(l=0;l<6;l++){g=n[l][0][1]-n[l][0][0],m=n[l][1][1]-n[l][1][0];if(g<=0||m<=0){var F=0;if(0!=R&&4!=R||0!=o?1!=R&&3!=R||1!=o?2==R&&6==o?F=.4:4!=c&&5!=c||2==o&&(1==R&&l%2==0||3==R&&l%2==1)&&(F=.2):F=l%2==u%2?.2:.6:F=.8,0!=F){for(h=0;h<4;h++){var I=oe[l][h];Mr[h]=Math.floor(yr[l][h]+(yr[1^l][I]-yr[l][h])*F),pr[h]=Math.floor(wr[l][h]+(wr[1^l][I]-wr[l][h])*F),b&&(Mr[h]=At-Mr[h])}_r(pn,Mr,pr,i)}}else{for(h=0;h<4;h++)Sr(l,h,Mr,pr,n[l][0][Fr[h][0]],n[l][1][Fr[h][1]],b);a<4?_r(pn,Mr,pr,i):(Wr(Pr(Ur(lr,e),5+T),te[l]),Cr(lr,te[l])>0&&_r(pn,Mr,pr,i))}}for(l=0;l<6;l++)if(Wr(Pr(Ur(lr,e),5+T),te[l]),Cr(lr,te[l])>0){g=n[l][0][1]-n[l][0][0],m=n[l][1][1]-n[l][1][0];if(g>0&&m>0)for(p=0,k=n[l][1][0];p<m;p++,k++)for(L=0,y=n[l][0][0];L<g;L++,y++){for(h=0;h<4;h++)Sr(l,h,Mr,pr,y+Rr[h][0],k+Rr[h][1],b);1==Fe?($r(pn,Mr,pr,"#fdfdfd"),_r(pn,Mr,pr,"#fdfdfd"),nn(pn,Mr,pr,l,$[l][5*k+y],J[V[l][5*k+y]])):($r(pn,Mr,pr,J[V[l][5*k+y]]),_r(pn,Mr,pr,J[V[l][5*k+y]]))}if(!M||w)continue;var P=(yr[l][1]-yr[l][0]+yr[l][2]-yr[l][3])/6,C=(yr[l][3]-yr[l][0]+yr[l][2]-yr[l][1])/6,X=(wr[l][1]-wr[l][0]+wr[l][2]-wr[l][3])/6,W=(wr[l][3]-wr[l][0]+wr[l][2]-wr[l][1])/6;if(3==o)for(h=0;h<10;h++){for(I=0;I<4;I++)Sr(l,I,qt[Pt],Ot[Pt],Nt[h][I][0],Nt[h][I][1],!1);if(Qt[Pt]=(P*Ht[h][0]+X*Ht[h][1])*Gt[l][h],Zt[Pt]=(C*Ht[h][0]+W*Ht[h][1])*Gt[l][h],Kt[Pt]=ae[l][h%4],h>=8&&(Kt[Pt]&=-2),jt[Pt]=h>3?1:0,8!=Pt&&18!=Pt&&28!=Pt&&9!=Pt&&19!=Pt&&29!=Pt||(jt[Pt]=6),30==++Pt)break}else if(0==o){if(l!=u&&g>0&&m>0){for(h=5==g?0==n[l][1][0]?0:2:0==n[l][0][0]?3:1,I=0;I<4;I++)Sr(l,I,qt[Pt],Ot[Pt],Nt[h][I][0],Nt[h][I][1],!1);Qt[Pt]=(P*Ht[h][0]+X*Ht[h][1])*Gt[l][h],Zt[Pt]=(C*Ht[h][0]+W*Ht[h][1])*Gt[l][h],Kt[Pt]=u,jt[Pt]=0,Pt++}}else if(1==o){if(l!=u&&g>0&&m>0){h=5==g?1==n[l][1][0]?0:2:1==n[l][0][0]?3:1;h+=4;for(I=0;I<4;I++)Sr(l,I,qt[Pt],Ot[Pt],Nt[h][I][0],Nt[h][I][1],!1);Qt[Pt]=(P*Ht[h][0]+X*Ht[h][1])*Gt[l][h],Zt[Pt]=(C*Ht[h][0]+W*Ht[h][1])*Gt[l][h],Kt[Pt]=u,jt[Pt]=1,Pt++}}else if(6==o&&l!=u&&g>0&&m>0){for(h=5==g?8:9,I=0;I<4;I++)Sr(l,I,qt[Pt],Ot[Pt],Nt[h][I][0],Nt[h][I][1],!1);Qt[Pt]=(P*Ht[h][0]+X*Ht[h][1])*Gt[l][h],Zt[Pt]=(C*Ht[h][0]+W*Ht[h][1])*Gt[l][h],Kt[Pt]=u,jt[Pt]=6,Pt++}}}function Sr(e,t,r,n,o,a,l){o/=5,a/=5;var f=yr[e][0]+(yr[e][1]-yr[e][0])*o,i=wr[e][0]+(wr[e][1]-wr[e][0])*o,u=yr[e][3]+(yr[e][2]-yr[e][3])*o,c=wr[e][3]+(wr[e][2]-wr[e][3])*o;r[t]=Math.floor(.5+f+(u-f)*a),n[t]=Math.floor(.5+i+(c-i)*a),l&&(r[t]=At-r[t])}var Ar=[1,1,-1,-1,-1,1,1,-1,-1,0,1,0,0,1,0,-1],Br=[];function xr(e,t,r,o){if(we){e.fillStyle="black";for(var a=0;a<Br.length;a+=2)e.fillText(t,r+Br[a],o+Br[a+1]);e.fillStyle="white"}else e.fillStyle=n;e.fillText(t,r,o)}var Er=[-1,3,1,-1,0,2,4,-1];function Ur(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Ir(e){var t=Math.sqrt(Cr(e,e));return e[0]/=t,e[1]/=t,e[2]/=t,e}function Pr(e,t){return e[0]*=t,e[1]*=t,e[2]*=t,e}function Cr(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Xr(e,t){return e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],e}function Wr(e,t){return e[0]-=t[0],e[1]-=t[1],e[2]-=t[2],e}function Yr(e,t,r){return e[0]=t[1]*r[2]-t[2]*r[1],e[1]=t[2]*r[0]-t[0]*r[2],e[2]=t[0]*r[1]-t[1]*r[0],e}function zr(e,t){var r=Math.sin(t),n=Math.cos(t),o=e[1]*n-e[2]*r,a=e[1]*r+e[2]*n;return e[1]=o,e[2]=a,e}function qr(e,t){var r=Math.sin(t),n=Math.cos(t),o=e[0]*n-e[2]*r,a=e[0]*r+e[2]*n;return e[0]=o,e[2]=a,e}function Or(e,t){var r=Math.sin(t),n=Math.cos(t),o=e[0]*n-e[1]*r,a=e[0]*r+e[1]*n;return e[0]=o,e[1]=a,e}function Qr(e,t,r){return"#"+Zr(e.toString(16))+Zr(t.toString(16))+Zr(r.toString(16))}function Zr(e){return("00"+e).substring(e.length)}function Nr(e){for(var t=0,r=0;r<6;r++)for(var n=0;n<16;n++)if(e[r].toLowerCase()=="0123456789abcdef".charAt(n)){t++;break}return 6==t}function Hr(e,t,r,n,o){e.beginPath(),e.moveTo(t,r),e.lineTo(t+n,r),e.lineTo(t+n,r+o),e.lineTo(t,r+o),e.lineTo(t,r),e.closePath(),e.clip()}var Gr=[];function Kr(e,t,r,n){switch(r=Math.floor(r),n=Math.floor(n),t){case 0:Jr(e,r-Gr[4],n-Gr[3],Gr[3],Gr[6]+1),jr(e,r+Gr[4],n,-1);break;case 1:Jr(e,r+Gr[1],n-Gr[3],Gr[3],Gr[6]+1),jr(e,r-Gr[1],n,-1);break;case 2:jr(e,r+Gr[1],n,-1);break;case 3:w?Jr(e,r-Gr[4],n-Gr[3],Gr[7],Gr[7]):(Jr(e,r-Gr[4],n-Gr[2],Gr[7],Gr[5]),Jr(e,r-Gr[2],n-Gr[4],Gr[3],Gr[9]));break;case 4:jr(e,r-Gr[2],n,1);break;case 5:Jr(e,r-Gr[4],n-Gr[3],Gr[3],Gr[6]+1),jr(e,r,n,1);break;case 6:Jr(e,r+Gr[1],n-Gr[3],Gr[3],Gr[6]+1),jr(e,r-Gr[4],n,1);break;case 7:var a=7==ke?ln(o):o;Vr(e,r-2*kn,n+kn,Q,n+Q,a),jr(e,r+2*kn+Q/2-3*kn,n+Q/2+Ln,-1);break;case 8:a=8==ke?ln(o):o;Vr(e,r-2*kn,n+kn,Q,n+Q,a),jr(e,r-kn+Q/2-3*kn,n+Q/2+Ln,1)}}function jr(e,t,r,n){var o=3*kn,a=[],l=[];a[0]=t,a[1]=t+n,a[2]=t+4*kn*n,a[3]=t+n,a[4]=t,l[0]=r-o,l[1]=r-o,l[2]=r,l[3]=r+o,l[4]=r+o,function(e,t,r){e.beginPath(),e.moveTo(t[0]+Ln,r[0]+Ln);for(var n=1;n<5;n++)e.lineTo(t[n]+Ln,r[n]+Ln);e.closePath(),e.fillStyle="white",e.strokeStyle="black",e.fill(),e.lineWidth=yn,e.stroke()}(e,a,l)}function Jr(e,t,r,n,o){e.lineWidth=yn,e.beginPath(),e.rect(t+Ln,r+Ln,n-1,o-1),e.fillStyle="white",e.fill(),e.strokeStyle="black",e.stroke()}function Vr(e,t,r,n,o,a){e.lineWidth=yn,e.beginPath(),e.rect(t+Ln,r+Ln,n-1,o-1),e.fillStyle=a,e.fill(),e.strokeStyle="black",e.stroke()}function $r(e,t,r,n){e.beginPath(),e.moveTo(t[0],r[0]),e.lineTo(t[1],r[1]),e.lineTo(t[2],r[2]),e.lineTo(t[3],r[3]),e.closePath(),e.strokeStyle=n,e.lineWidth=.7*kn,e.stroke()}function _r(e,t,r,n){e.beginPath(),e.moveTo(t[0],r[0]),e.lineTo(t[1],r[1]),e.lineTo(t[2],r[2]),e.lineTo(t[3],r[3]),e.closePath(),e.fillStyle=n,e.fill()}var en,tn,rn=[[0,1,2,3],[3,0,1,2],[2,3,0,1],[1,2,3,0]];function nn(e,t,r,n,o,a){var l=[],f=[];if(2!=Ae||"#ffffff"!=a){for(var i=0;i<4;i++)l[i]=Math.floor(t[i]+.05*(t[rn[2][i]]-t[i])),f[i]=Math.floor(r[i]+.05*(r[rn[2][i]]-r[i]));0==n&&(o=(o+1)%4),4==n&&(o=(o+3)%4);var u=rn[o][0],c=rn[o][1],s=rn[o][2],h=rn[o][3],v=.26*(l[s]-l[c]),d=.26*(f[s]-f[c]),g=(l[u]-l[c])/2,m=f[c]+(f[u]-f[c])/2,b=f[s]+(f[h]-f[s])/2,M=(l[h]-l[s])/2,p=1^o;e.fillStyle=a,e.beginPath(),e.moveTo(l[u]+(l[h]-l[u])/2,f[u]+(f[h]-f[u])/2),e.lineTo(l[p]+g,m),e.lineTo(l[p]+v+g,m+d),e.lineTo(l[p]+v,f[p]+d),p=(p+1)%4,e.lineTo(l[p]-v,f[p]-d),e.lineTo(l[p]-v+M,b-d),e.lineTo(l[p]+M,b),e.closePath(),e.fill(),e.lineWidth=.6*kn,e.strokeStyle="black",e.stroke()}}function on(e){return"white"==e?"#FFFFFF":"black"==e?"#000000":"#808080"}function an(e){return"#"!=e.substring(0,1)&&(e=on(e)),(299*parseInt(e.substring(1,3),16)+587*parseInt(e.substring(3,5),16)+114*parseInt(e.substring(5,7),16))/1e3}function ln(e){"#"!=e.substring(0,1)&&(e=on(e));var t=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16);return Qr(t=Math.floor(.7*t),r=Math.floor(.7*r),n=Math.floor(.7*n))}function fn(e,t){if(e>tt)setTimeout(fn,0,e,t);else{if(!Y){for(var r=de[P];C<r.length;){if(r[C]>=1e3)q=r[C]-1e3;else if(-1!=r[C]){var n=r[C]%4+1,o=Math.floor(r[C]/4)%7,a=Math.floor(r[C]/28);pt(V,a,4==n?2:n,o)}C++}return w=!1,pe=!0,mr(),void tt++}var l,f,i,g,b,M,k=t;!1,requestAnimationFrame((function e(){if(T){if(T=!1,M=!1,p)k>0?C>=r.length&&(C=0,$e(r)):(q=-1,0==C&&(C=r.length));else if(k>0&&C>=r.length||k<0&&0==C)return m=!1,w=!1,tt++,pe=!0,void mr();w=!0,pe=!0}if(D&&(D=!1,k<0&&(B=!1,0==C?(B=!0,A=!0):C--),!B)){if(R=!1,-1==r[C]){if(mr(),!W)for(l=Date.now();Date.now()-l<1e3;);}else r[C]>=1e3?q=k>0?r[C]-1e3:-1:R=!0;if(R){n=r[C]%4+1,o=Math.floor(r[C]/4)%7;var t=n<3;if(4==n&&(n=2),k<0&&(t=!t,n=4-n),a=Math.floor(r[C]/28),L=!1,ve=!0,y=!0,h=0,le[a]>0&&(t=!t),Y){b=Math.PI/2,g=t?1:-1;var x=67*v;2==n&&(b=Math.PI,x=67*d),L=!0,u=a,c=o,Mt(a),l=Date.now(),f=l,i=g*b/x,s=0}}else S=!0}B||(R&&(Y&&s*g<b?(mr(),m&&(S=!0),f=Date.now(),s=i*(f-l)):S=!0),S&&(S=!1,D=!0,R&&(s=0,L=!1,ve=!0,pt(V,a,n,o),y=!1,Y&&mr(),W&&(M=!0)),k>0?(++C<r.length&&r[C]>=1e3&&(q=r[C]-1e3,C++),C==r.length&&(F?function(e){C=0;for(var t=0;t<6;t++)for(var r=0;r<25;r++)V[t][r]=_[t][r],$[t][r]=ee[t][r];me.length>0&&void 0!==me[P]&&_e(V,me[P],0,me[P].length,!1);be.length>0&&void 0!==be[P]&&_e(V,be[P],0,be[P].length,!0);$e(e)}(r):A=!0)):q=-1,(m||M)&&(A=!0)));if(A)return A=!1,T=!0,et<=tt+1&&(w=!1),pe=!0,0==ke&&ot(),mr(),F&&(ot(),F=!1),m=!1,tt++,void(1==C&&r[0]>=1e3&&C--);requestAnimationFrame(e)}));var R=!1,T=!0,D=!0,S=!1,A=!1,B=!1;r=F?ge[0]:de[P]}}document.addEventListener("touchstart",gn),document.addEventListener("touchmove",Sn),document.addEventListener("touchend",dn),document.addEventListener("mousedown",gn),document.addEventListener("mousemove",Sn),document.addEventListener("mouseup",dn),document.addEventListener("contextmenu",xn);var un=!1,cn=!0,sn=document.getElementsByTagName("div"),hn=sn.length>0&&"wrap"==sn[0].className;function vn(e){hn?sn[0].style.overflow=e:document.body.style.overflow=e}function dn(e){if(un&&void 0!==e.touches&&(e.preventDefault(),vn("auto")),un?setTimeout((function(){cn=!0}),100):cn=!0,un=!1,R=!1,Z)Z=!1,pe=!0,mr();else if(L&&!y){L=!1,h+=s,s=0;for(var t=h;t<0;)t+=32*Math.PI;var r=Math.floor(8*t/Math.PI)%16;(Re||r%4==0||r%4==3)&&(r=Math.floor((r+2)/4),le[u]>0&&(r=(4-r)%4),h=0,ve=!0,pt(V,u,r,c)),mr()}}function gn(e){var t=Mn.getBoundingClientRect(),r=Math.floor(t.left),n=Math.floor(t.top);if(void 0===e.touches)var o=e.clientX,a=e.clientY;else o=e.touches[0].clientX,a=e.touches[0].clientY;o<r||o>r+At/kn||a<n||a>n+(Bt+Q)/kn||(e.preventDefault(),un=!0,cn=!1,void 0!==e.touches&&(e.preventDefault(),vn("hidden")),en=r,tn=n,Ut=xt=An(e),It=Et=Bn(e),g=!1,ke=function(e,t){if(0==O)return-1;if(de.length>1&&e>=At-2*Q&&e<At-Q&&t>=0&&t<Q)return 7;if(de.length>1&&e>=At-Q&&e<At&&t>=0&&t<Q)return 8;if(2==O)return e>=0&&e<Q&&t>=Bt-Q&&t<Bt?0:-1;if(t<Bt)return-1;for(var r=0,n=0;n<7;n++){var o=(At-r)/(7-n);if(e>=r&&e<r+o&&t>=Bt&&t<Bt+Q)return n;r+=o}return-1}(xt,Et),ke>=0?(Z=!0,3==ke?w?nt():b=!b:0==ke?De>0&&2==O?1==Te?(Te=!1,nt(),ot()):(Te=!0,rt(Er[ke=6])):(nt(),ot()):7==ke||8==ke?(nt(),setTimeout(ot,20),P=7==ke?P>0?P-1:de.length-1:P<de.length-1?P+1:0):rt(Er[ke]),pe=!0,mr()):Le>0&&de.length>0&&de[P].length>0&&Et>Bt-Le&&Et<=Bt?k&&(nt(),mn(et++)):(b&&(Ut=xt=At-xt),void 0===e.touches?!M||w||0!=e.button||e.shiftKey||(g=!0):M&&!w&&(g=!0)))}function mn(e){if(e>tt)setTimeout(mn,0,e);else{var t=Ke(de[P]),r=Math.floor(((xt-1)*t*2/(At-2)+1)/2);(r=Math.max(0,Math.min(t,r)))>0&&(r=je(de[P],r)),r>C&&_e(V,de[P],C,r-C,!1),r<C&&_e(V,de[P],r,C-r,!0),C=r,R=!0,mr(),w=!1,tt++}}var bn,Mn,pn,kn,Ln,yn,wn,Rn,Fn,Tn,Dn=[];function Sn(e){if(un&&!Z){if(R){nt();var t=Ke(de[P]),r=Math.floor(((An(e)-1)*t*2/(At-2)+1)/2);return(r=Math.max(0,Math.min(t,r)))>0&&(r=je(de[P],r)),r>C&&_e(V,de[P],C,r-C,!1),r<C&&_e(V,de[P],r,C-r,!0),C=r,void mr()}var n=b?At-An(e):An(e),o=Bn(e),a=n-xt,l=o-Et;if(M&&g&&!L&&!w){Ut=n,It=o;for(var f=0;f<Pt;f++){var i=qt[f][0],h=qt[f][1]-i,v=qt[f][3]-i,d=Ot[f][0],m=Ot[f][1]-d,p=Ot[f][3]-d,k=(p*(xt-i)-v*(Et-d))/(h*p-v*m),y=(-m*(xt-i)+h*(Et-d))/(h*p-v*m);if(k>0&&k<1&&y>0&&y<1){if(a*a+l*l<144)return;if(Yt=Qt[f],zt=Zt[f],Math.abs(Yt*a+zt*l)/Math.sqrt((Yt*Yt+zt*zt)*(a*a+l*l))>.75){L=!0,u=Kt[f],c=jt[f];break}}}g=!1,xt=Ut,Et=It}a=(n-xt)/kn,l=(o-Et)/kn,!L||w?(Ir(Xr(fe,Pr(Ur(Dn,ie),-.016*a))),Ir(Yr(ie,ue,fe)),Ir(Xr(fe,Pr(Ur(Dn,ue),.016*l))),Ir(Yr(ue,fe,ie)),xt=n,Et=o):(ve&&Mt(u),s=.03*(Yt*a+zt*l)/Math.sqrt(Yt*Yt+zt*zt)),mr()}}function An(e){return void 0===e.touches?(e.clientX-en)*kn:(e.touches[0].clientX-en)*kn}function Bn(e){return void 0===e.touches?(e.clientY-tn)*kn:(e.touches[0].clientY-tn)*kn}function xn(e){cn||e.preventDefault()}function En(){clearTimeout(bn),bn=setTimeout((function(){Un(),pe=!0,mr()}),20)}function Un(){Bt=Tn.clientHeight-1,At=Tn.clientWidth-1,Mn.style.width=At+"px",Mn.style.height=Bt+"px",kn=devicePixelRatio,Ln=kn/2,Bt=Math.floor(Bt*kn),At=Math.floor(At*kn),Mn.width=At,Mn.height=Bt,yn=kn,Q=Math.floor(wn*kn),Le=Math.floor(Rn*kn),ye=Math.floor(Fn*kn);for(var e=1;e<10;e++)Gr[e]=e*kn;for(e=0;e<Ar.length;e++)Br[e]=Ar[e]*kn;1==O&&(Bt-=Q)}function In(e,t){var r,n,o=["R","L","F","B","U","D"],a=["","m","n"],l=["","2","'"],f=-1,i=-1,u=-1,c="";0==t&&(t=10*e);for(var s=0;s<t;s++){for(;f==i||Math.floor(f/2)==Math.floor(i/2)&&f==u;)f=Math.floor(6*Math.random());u=i,i=f,r=Math.floor(3*Math.random()),e<=3?c+=""+o[f]+l[r]+" ":(n=Math.floor(Math.random()*(e>4?3:2)),5==e&&1==n&&(n=0),c+=""+o[f]+a[n]+l[r]+" ")}return c}window.addEventListener("resize",En);var Pn=[];function Cn(){nt(),document.removeEventListener("mousedown",gn),document.removeEventListener("touchstart",gn),document.removeEventListener("touchmove",Sn),document.removeEventListener("touchend",dn),document.removeEventListener("mousedown",gn),document.removeEventListener("mousemove",Sn),document.removeEventListener("mouseup",dn),document.removeEventListener("contextmenu",xn),window.removeEventListener("resize",En)}!function(){Mn=document.createElement("canvas"),void 0!==e&&function(){for(var t=e.split("&"),r=0;r<t.length;r++){var n=t[r].split("=");void 0!==n[1]&&(Pn[n[0]]=decodeURIComponent(n[1].trim()))}}();var t=Pe("id");if(null!=t)(Tn=document.getElementById(t)).innerHTML="";else if(null!=document.currentScript)Tn=document.currentScript.parentNode;else{var r=document.getElementsByTagName("script"),n=r[r.length-1];Tn=n.parentNode}null!=Tn.id&&"undefined"!=typeof removeListeners&&(removeListeners[Tn.id]=Cn);for(var o=0;o<6;o++)V[o]=[],$[o]=[],_[o]=[],ee[o]=[];for(o=0;o<30;o++)qt[o]=[],Ot[o]=[];P=0,h=0,Ue()}()}