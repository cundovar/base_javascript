function displayMessage(textMsg,msgType){
    var html = document.querySelector("html");

    var panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    html.appendChild(panel);
    
    var msg = document.createElement("p");
    msg.textContent = textMsg;
    panel.appendChild(msg);
    
    var closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);
    
    closeBtn.onclick = function () {
      panel.parentNode.removeChild(panel);
    };

    if(msgType==="warning"){
        msg.style.backgroundImage = "url(images/icon/warning.png)";
  panel.style.backgroundColor = "red";
    }else if(msgType==="chat") {
        msg.style.backgroundImage = "url(images/icon/chat.png)";
        panel.style.backgroundColor = "aqua";
    }else{
        msg.style.paddingLeft='20px'
    }
}



const open=document.querySelector(".b")

open.onclick=function(){
    displayMessage("Your inbox is almost full — delete some mails", "warning");

}
