"use client"

import { useEffect } from "react"

export function ChatbaseWidget() {
  useEffect(() => {
    const chatbaseScript = document.getElementById("9pIzyyNSJ1VBc6J_w4KUZ")
    if (!chatbaseScript) {
      const script = document.createElement("script")
      script.innerHTML = `
        (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="9pIzyyNSJ1VBc6J_w4KUZ";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
      `
      document.body.appendChild(script)
    }
  }, [])

  return null
}

