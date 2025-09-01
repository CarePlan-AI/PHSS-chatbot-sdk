!function(){var e=function(){let e=document.getElementById("__phssSdk__"),t=e.getAttribute("widgetUrl")||e.getAttribute("data-widget-url");return t||"https://widget.webwhiz.ai/"}();let t=`
.webwhiz-widget {
  position: fixed;
  z-index: 9999999;
  max-height: calc(100% - 30px);
  right: 20px;
  bottom: 20px;
  min-width: 80px;
  height: 80px;
  width: 80px;
  max-width: calc(100% - 40px);
}
.webwhiz-widget.wb-align-left {
  left: 0;
  right: auto;
}
.webwhiz-widget.wb-expand {
  width: 416px;
  height: 610px;
  min-width: 370px;
}
.webwhiz-widget.wb-maximize {
  width: 50%;
  height: calc(100% - 30px)
}
@media only screen and (device-width: 768px),
       only screen and (max-width: 768px){
  .webwhiz-widget.wb-maximize {
    width: 100%;
    height: 100%;
  }
  .webwhiz-widget {
    right: 0;
    bottom: 0;
  }
  .webwhiz-widget.wb-expand {
    width: 100%;
    height: 100%;
    min-width: 0;
    left: 0;
    right: 10px;
    bottom: 10px;
    top: 0;
    max-width: 100%;
    max-height: 100%;
  }
}
.webwhiz__msg-popup {
  position: fixed;
  bottom: 106px;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  opacity: 0;
  align-items: end;
  transition: all 0.3s ease-in-out;
  transform: translate3d(0px, 10px, 0px);
}
.webwhiz__msg-popup.webwhiz__msg-popup-left {
  left: 20px;
}
.webwhiz__msg-popup.webwhiz__msg-popup-right {
  right: 20px;
}
.webwhiz__msg-popup.webwhiz__msg-popup--show {
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
}

.webwhiz__msg-popup-item {
  cursor: pointer;
  padding: 20px;
  background-color: #FFF;
  display: inline-flex;
  width: auto;
  margin: 5px 0;
  font-size: 14px;
  border-radius: 6px;
  line-height: 1.5;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
.webwhiz__msg-popup-close-btn {
  cursor: pointer;
  border-radius: 12px;
  background-color: #fff;
  font-size: 12px;
  color: rgba(0,0,0,0.65);
  border: 1px solid rgba(0,0,0,0.18);
  opacity: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: opacity 0.3s ease-in-out;
}

.webwhiz__msg-popup-close-btn svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.webwhiz__msg-popup:hover .webwhiz__msg-popup-close-btn {
  opacity: 0.8;
}
.webwhiz__msg-popup .webwhiz__msg-popup-close-btn:hover {
  opacity: 1;
}
`;function i(){let e=document.getElementById("webwhiz__msg-popup");e&&(e.classList.remove("webwhiz__msg-popup--show"),localStorage.setItem("webwhiz__popupRemoved",!0),setTimeout(()=>{e.remove()},350))}!function(e){if("loading"!==document.readyState){e();return}document.addEventListener("DOMContentLoaded",e)}(()=>{setTimeout(()=>{(function(){var i=document.createElement("iframe");let s=function(){let e=document.getElementById("__phssSdk__"),t=e.getAttribute("chatbotId")||e.getAttribute("data-chatbot-id");return t}();i.setAttribute("class","webwhiz-widget"),i.setAttribute("id","webwhiz-widget"),i.setAttribute("data-powered-by","https://www.webwhiz.ai/"),i.setAttribute("frameborder","0");let a=document.getElementById("__phssSdk__"),o=a.getAttribute("container")||a.getAttribute("data-container");if(o){let e=document.querySelector(o);e&&e.appendChild(i)}else{var w=document.createElement("style");w.innerText=t,document.head.appendChild(w),document.body.appendChild(i)}let n=function(){let e=document.getElementById("__phssSdk__"),t=e.getAttribute("baseUrl")||e.getAttribute("data-base-url");return t||"https://api.webwhiz.ai"}();i.setAttribute("src",e+"?kbId="+s+"&baseUrl="+n)})(),window.onmessage=function(e){let t=document.getElementById("webwhiz-widget"),s=document.getElementById("__phssSdk__"),a=s.getAttribute("container")||s.getAttribute("data-container");return function(e){if("webwhiz:widget_expand"===e.data)t.classList.add("wb-expand"),i();else if("webwhiz:widget_collapse"===e.data)setTimeout(()=>{t.classList.remove("wb-expand","wb-maximize")},350);else if("webwhiz:widget_maximize"===e.data)t.classList.add("wb-maximize");else if("webwhiz:widget_minimize"===e.data)t.classList.remove("wb-maximize");else if(e.data&&"webwhiz:widget_config"===e.data.messageType){let s=e.data.config||{};"left"===s.position&&t.classList.add("wb-align-left");let o=JSON.parse(localStorage.getItem("webwhiz__popupRemoved"));!o&&s.showAsPopup&&s.welcomeMessages&&s.welcomeMessages.length>0&&!a&&function(e){let t=e.welcomeMessages.map(e=>`<div class="webwhiz__msg-popup-item">${e}</div>`).join(""),s=`<button class="webwhiz__msg-popup-close-btn" id="webwhiz__msg-popup-close-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
  </button>`,a="";a="left"===e.position?"webwhiz__msg-popup-left":"webwhiz__msg-popup-right",document.body.insertAdjacentHTML("beforeend",`<div id="webwhiz__msg-popup" class="webwhiz__msg-popup ${a}">${s}${t}</div>`),document.getElementById("webwhiz__msg-popup-close-btn").onclick=()=>{i()};let o=document.getElementsByClassName("webwhiz__msg-popup-item");for(let e of o)e.onclick=()=>{(function(){let e=document.getElementById("webwhiz-widget");e.contentWindow.postMessage({messageType:"webwhiz:expandWidget"},"*")})()};setTimeout(()=>{let e=document.getElementById("webwhiz__msg-popup");e&&e.classList.add("webwhiz__msg-popup--show")},e.popupDelay||3e3)}(s)}else if("webwhiz:widget_clear_history"===e.data)localStorage.removeItem("sessionId"),localStorage.removeItem("isManualChat"),e.source.postMessage({messageType:"webwhiz:recieve_session_id",sessionId:""},"*");else if("webwhiz:request_meta_data"===e.data){let t=document.getElementById("__phssSdk__"),i=t.getAttribute("container")||t.getAttribute("data-container");e.source.postMessage({messageType:"webwhiz:recieve_meta_data",url:window.location.href,container:i},"*")}else if("webwhiz:request_session_id"===e.data){let t=localStorage.getItem("sessionId");e.source.postMessage({messageType:"webwhiz:recieve_session_id",sessionId:t},"*")}else e.data&&"webwhiz:recieve_new_session_id"===e.data.messageType?localStorage.setItem("sessionId",e.data.sessionId):"webwhiz:request_is_manual_chat"===e.data?e.source.postMessage({messageType:"webwhiz:recieve_is_manual_chat",isManualChat:JSON.parse(localStorage.getItem("isManualChat")||"false")},"*"):e.data&&"webwhiz:update_is_manual_chat"===e.data.messageType&&localStorage.setItem("isManualChat",e.data.isManualChat)}}(0)},1e3)})}();
//# sourceMappingURL=webwhiz-sdk.js.map
