
var myContactAdd = function (player,online)
{
	if (online==null) online=0;
	
	if (contacts[player.toLowerCase()])
		return;
	else
		contacts[player.toLowerCase()] = { "kaitag" : player, "myNode" : 0, "online" : online };
	
	var tmp1= new Array();
	for (var name in contacts)
		if (contacts[name].online==1) tmp1[tmp1.length]=name;
	tmp1=tmp1.sort();

	var tmp2= new Array();
	for (var name in contacts)
		if (contacts[name].online==0) tmp2[tmp2.length]=name;
	tmp2=tmp2.sort();

	var curPlayers=new Array();
	for (var x=0; x<tmp1.length; x++) curPlayers[curPlayers.length]=tmp1[x];
	for (var x=0; x<tmp2.length; x++) curPlayers[curPlayers.length]=tmp2[x];	

	// find the position of this new guy and reassign all node numbers at the same time
	var insertPos=0;
	
	for (var x=0; x < curPlayers.length; x++)
	{
		if (curPlayers[x]==player.toLowerCase()) insertPos=x;
		
		contacts[curPlayers[x].toLowerCase()].myNode=x;
	}
	
	// now add this guy at the position found
	var divNew=document.createElement('div');
	divNew.className='contactContainer';
	divNew.innerHTML ="<div class=\"contactAvatar\"><img src=\"http://www.teamxlink.co.uk/media/avatars/blank_avatar.gif\"></div>"+
		"<div class=\"contactPlayer\" onclick=\"chatPM(this.innerHTML,'',''); \">"+player+"</div>"+
		"<div style=\"text-align: left; width: 50px; float: left;\">"+
		"&nbsp;<a href=\"#\" onclick=\"deleteContact('"+player+"');\">"+
		"<img src=\"/img/01-small.png\" border=\"0\" title=\""+ui_strings['removeContact']+"\"></a>&nbsp;&nbsp;&nbsp;&nbsp;"+
		"<a href=\"#\" onclick=\"inviteContact('"+player+"');\"><img src=\"/img/03.png\" border=\"0\" title=\""+ui_strings['invite']+"\"></a>"+
		"</div>"+
		"<div class=\"contactPing\">"+(contacts[name].online==1 ? pingMetric(0) : ui_strings['offline'])+"</div>"+
		"<div class=\"contactArena\"></div>";
		
	//divNew.innerHTML+="<div class=\"contactDetail\">&nbsp;</div>";

	// grey out background (default for offline players)
	divNew.style.opacity='0.3';
	divNew.style.MozOpacity='0.3';
	divNew.style.KhtmlOpacity='0.3';
	divNew.style.filter='alpha(opacity=30)';

	if ($('contacts').childNodes[insertPos]==null)
		$('contacts').appendChild(divNew);
	else
		$('contacts').insertBefore(divNew, $('contacts').childNodes[insertPos]);
	
	// get avatar
	//sendToEngine("KAI_CLIENT_AVATAR\t"+player);
	
}



Sounds.push('pd_ring1;/skin/sounds/pd_ring1.mp3'); // play sound like this: soundPlay('pd_ring1');

function skinInit()
{
	//$('topNav').innerHTML+="<input class=\"blackBtn\" type=\"button\" value=\"Chat Only\" onclick=\"chatToggle();\">";
	contactAdd = myContactAdd;// demonstrates how to overwrite a method.
	
	soundPlay('pd_ring1');
	
};
