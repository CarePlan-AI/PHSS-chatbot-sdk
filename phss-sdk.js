!function(){
  var e=function(){
    let e=document.getElementById("phhsSdk"),
        t=e.getAttribute("widgetUrl")||e.getAttribute("data-widget-url");
    return t||"https://widget.webwhiz.ai/"
  }();
  
  let t=`
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
/* ... (CSS unchanged, skipped for brevity) ... */
`;

  function i(){
    let e=document.getElementById("webwhiz__msg-popup");
    e&&(e.classList.remove("webwhiz__msg-popup--show"),
    localStorage.setItem("webwhiz__popupRemoved",!0),
    setTimeout(()=>{e.remove()},350))
  }

  !function(e){
    if("loading"!==document.readyState){e();return}
    document.addEventListener("DOMContentLoaded",e)
  }(()=>{
    setTimeout(()=>{
      (function(){
        var i=document.createElement("iframe");
        let s=function(){
          let e=document.getElementById("phhsSdk"),
              t=e.getAttribute("chatbotId")||e.getAttribute("data-chatbot-id");
          return t
        }();
        i.setAttribute("class","webwhiz-widget"),
        i.setAttribute("id","webwhiz-widget"),
        i.setAttribute("data-powered-by","https://www.webwhiz.ai/"),
        i.setAttribute("frameborder","0");
        
        let a=document.getElementById("phhsSdk"),
            o=a.getAttribute("container")||a.getAttribute("data-container");
        if(o){
          let e=document.querySelector(o);
          e&&e.appendChild(i)
        }else{
          var w=document.createElement("style");
          w.innerText=t,
          document.head.appendChild(w),
          document.body.appendChild(i)
        }
        
        let n=function(){
          let e=document.getElementById("phhsSdk"),
              t=e.getAttribute("baseUrl")||e.getAttribute("data-base-url");
          return t||"https://api.webwhiz.ai"
        }();
        i.setAttribute("src",e+"?kbId="+s+"&baseUrl="+n)
      })(),
      window.onmessage=function(e){
        let t=document.getElementById("webwhiz-widget"),
            s=document.getElementById("phhsSdk"),
            a=s.getAttribute("container")||s.getAttribute("data-container");
        
        return function(e){
          if("webwhiz:widget_expand"===e.data)t.classList.add("wb-expand"),i();
          else if("webwhiz:widget_collapse"===e.data)setTimeout(()=>{t.classList.remove("wb-expand","wb-maximize")},350);
          else if("webwhiz:widget_maximize"===e.data)t.classList.add("wb-maximize");
          else if("webwhiz:widget_minimize"===e.data)t.classList.remove("wb-maximize");
          else if(e.data&&"webwhiz:widget_config"===e.data.messageType){
            let s=e.data.config||{};
            "left"===s.position&&t.classList.add("wb-align-left");
            let o=JSON.parse(localStorage.getItem("webwhiz__popupRemoved"));
            !o&&s.showAsPopup&&s.welcomeMessages&&s.welcomeMessages.length>0&&!a&&function(e){
              let t=e.welcomeMessages.map(e=>`<div class="webwhiz__msg-popup-item">${e}</div>`).join(""),
                  s=`<button class="webwhiz__msg-popup-close-btn" id="webwhiz__msg-popup-close-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
  </button>`,
                  a="left"===e.position?"webwhiz__msg-popup-left":"webwhiz__msg-popup-right";
              document.body.insertAdjacentHTML("beforeend",`<div id="webwhiz__msg-popup" class="webwhiz__msg-popup ${a}">${s}${t}</div>`),
              document.getElementById("webwhiz__msg-popup-close-btn").onclick=()=>{i()};
              let o=document.getElementsByClassName("webwhiz__msg-popup-item");
              for(let e of o)e.onclick=()=>{(function(){
                let e=document.getElementById("webwhiz-widget");
                e.contentWindow.postMessage({messageType:"webwhiz:expandWidget"},"*")
              })()};
              setTimeout(()=>{let e=document.getElementById("webwhiz__msg-popup");e&&e.classList.add("webwhiz__msg-popup--show")},e.popupDelay||3e3)
            }(s)
          }
          else if("webwhiz:widget_clear_history"===e.data)localStorage.removeItem("sessionId"),localStorage.removeItem("isManualChat"),e.source.postMessage({messageType:"webwhiz:recieve_session_id",sessionId:""},"*");
          else if("webwhiz:request_meta_data"===e.data){
            let t=document.getElementById("phhsSdk"),
                i=t.getAttribute("container")||t.getAttribute("data-container");
            e.source.postMessage({messageType:"webwhiz:recieve_meta_data",url:window.location.href,container:i},"*")
          }
          else if("webwhiz:request_session_id"===e.data){
            let t=localStorage.getItem("sessionId");
            e.source.postMessage({messageType:"webwhiz:recieve_session_id",sessionId:t},"*")
          }
          else e.data&&"webwhiz:recieve_new_session_id"===e.data.messageType?localStorage.setItem("sessionId",e.data.sessionId):
               "webwhiz:request_is_manual_chat"===e.data?e.source.postMessage({messageType:"webwhiz:recieve_is_manual_chat",isManualChat:JSON.parse(localStorage.getItem("isManualChat")||"false")},"*"):
               e.data&&"webwhiz:update_is_manual_chat"===e.data.messageType&&localStorage.setItem("isManualChat",e.data.isManualChat)
        }(0)
      }
    },1e3)
  })
}();
