/* 
 * This code was taken from the "fixdc_trial" skin.
 */
var keepAlive=function(){var e="/orb fixcontacts";var b=180000;var d=null;var c=0;var a=20;return{request:function(){if(c>a){return}sendChat(e);d=setTimeout("keepAlive.request()",b);c++},reset:function(){if(d!==null){clearTimeout(d);d=null}d=setTimeout("keepAlive.request()",b);c=0}}}();var kaiUI_org={poll:null,checkDisconnect:null};kaiUI_org.poll=poll;function poll_long(){if(SID){var a=new AjaxObject101();a.funcDone=function(b){poll_process(b)};a.sndReq("post","/connector/poll?sessionid="+SID,"",maxNoPollTimeout*2-5000)}else{setTimeout("poll();",1000)}}poll=function(){if(engineVersion>=459798){poll_long()}else{kaiUI_org.poll()}};kaiUI_org.checkDisconnect=checkDisconnect;function checkDisconnect_long(){var a=new Date();if(a.getTime()-lastPollResponse>maxNoPollTimeout*2){$("blackScreen").style.display="block";$("errorBox").style.display="block"}}checkDisconnect=function(){if(engineVersion>=459798){checkDisconnect_long()}else{kaiUI_org.checkDisconnect()}};function getTimestamp(){var a=new Date();return("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)+":"+("0"+a.getSeconds()).slice(-2)}ChatDisplay.divCreate=function(){this.divNew=document.createElement("div");if(mods.indexOf("/"+this.kaitag.toLowerCase()+"/")!==-1||mods.indexOf("/"+this.lastChatter.toLowerCase()+"/")!==-1){this.divNew.className="chatMod"}if(admins.indexOf("/"+this.kaitag.toLowerCase()+"/")!==-1||admins.indexOf("/"+this.lastChatter.toLowerCase()+"/")!==-1){this.divNew.className="chatAdmin"}var a="<td class='chatTime'>"+getTimestamp()+"</td>";if(this.kaitag!="Kai Orbital Mesh"&&this.lastChatter!="Kai Orbital Mesh"){this.divNew.innerHTML="<table><tr>"+a+"<td class='chatUsername' onclick=\"$('msg').value+=' "+this.kaitag+"'; $('msg').focus();\">"+this.kaitag+"</td><td class='chatText'>"+this.txt+"</td></tr></table>"}else{this.divNew.innerHTML="<table><tr>"+a+"<td class='chatText'>"+this.txt+"</td></tr></table>"}if(this.kaitag==whoAmI||this.kaitag=="Kai Orbital Mesh"){keepAlive.reset()}};function skinInit(){$("topNav").innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>fixdc trial skin</i>";keepAlive.reset()};