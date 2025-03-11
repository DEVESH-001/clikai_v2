// "use client"

// import { useEffect, useRef } from "react"

// interface HubspotMeetingsProps {
//   url: string
//   className?: string
// }

// export default function HubspotMeetings({ url, className = "" }: HubspotMeetingsProps) {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     // Only load the script if it hasn't been loaded yet
//     if (!document.querySelector('script[src*="MeetingsEmbedCode.js"]')) {
//       const script = document.createElement("script")
//       script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
//       script.async = true
//       script.defer = true
//       document.body.appendChild(script)

//       // Clean up on unmount
//       return () => {
//         // We don't remove the script as it might be used elsewhere
//       }
//     }
//   }, [])

//   return (
//     <div ref={containerRef} className={`meetings-iframe-container ${className}`} data-src={`${url}?embed=true`}></div>
//   )
// }



"use client"

import { useEffect, useRef } from "react"

interface HubspotMeetingsProps {
  url: string
  className?: string
}

export default function HubspotMeetings({ url, className = "" }: HubspotMeetingsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    // Remove any existing iframe
    if (container) {
      container.innerHTML = ""
    }

    // Create a new script element
    const script = document.createElement("script")
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
    script.async = true
    script.defer = true
    container?.appendChild(script)

    // Clean up on unmount
    return () => {
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [url])

  return (
    <div ref={containerRef} className={`meetings-iframe-container ${className}`} data-src={`${url}?embed=true`}></div>
  )
}