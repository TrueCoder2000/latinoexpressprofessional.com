let btnWhatsapp 		= document.querySelector(".btnWhatsapp");
let chatBot 			= document.querySelector(".div-chatbot");
let divNetwork 			= document.querySelector(".block-network");
let boxTextChatbot 		= document.querySelector(".box-text-chatbot");
let btnSendChatbot 		= document.querySelector(".btn-send-chatbot");

btnWhatsapp.onclick=function(){
	chatBot.classList.toggle("hide-chatbot");

	if (chatBot.style="display:none") {
		divNetwork.style="z-index:5";
		chatBot.style="z-index:0";
	}
}


btnSendChatbot.onclick=function(){
	if (boxTextChatbot.value.length==0) {
		alert("Type your text here.");
		window.location.href = "https://www.w3schools.com";
	}else {
		boxTextChatbot.innerHTML="";
	}
}