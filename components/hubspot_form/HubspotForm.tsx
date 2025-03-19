"use client"

import { useEffect, useRef } from "react"

interface HubspotFormProps {
  region?: string
  portalId: string
  formId: string
  formUrl?: string
  className?: string
  onFormSubmitted?: () => void
}

export default function HubspotForm({
  region = "na1",
  portalId,
  formId,
  formUrl,
  className = "",
  onFormSubmitted,
}: HubspotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If a direct form URL is provided, use an iframe approach
    if (formUrl) {
      if (formRef.current) {
        formRef.current.innerHTML = `
          <iframe 
            src="${formUrl}" 
            width="100%" 
            height="350%" 
            style="border: none;" 
            title="HubSpot Form"
          ></iframe>
        `
      }
      return
    }

    // Function to initialize the form using the HubSpot API
    const initializeForm = () => {
      if (formRef.current && window.hbspt) {
        // Clear any existing content
        formRef.current.innerHTML = ""

        // Create the form
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: formRef.current,
          onFormSubmitted: onFormSubmitted,
        })
      }
    }

    // Load the HubSpot script if it hasn't been loaded yet
    if (!document.querySelector(`script[src*="hsforms.net/forms/embed/${portalId}.js"]`)) {
      const script = document.createElement("script")
      script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`
      script.defer = true
      script.async = true

      // Initialize the form once the script is loaded
      script.onload = initializeForm

      document.body.appendChild(script)
    } else {
      // If the script is already loaded, initialize the form directly
      initializeForm()
    }

    // Cleanup function
    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = ""
      }
    }
  }, [region, portalId, formId, formUrl, onFormSubmitted])

  return <div ref={formRef} className={`hubspot-form-container ${className}`}></div>
}






// 2

// "use client";

// import { useEffect, useRef } from "react";

// interface HubspotFormProps {
//   region?: string;
//   portalId: string;
//   formId: string;
//   className?: string;
// }

// export default function HubspotForm({
//   region = "na1",
//   portalId,
//   formId,
//   className = "",
// }: HubspotFormProps) {
//   const formRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Only load the script if it hasn't been loaded yet
//     if (
//       !document.querySelector(
//         `script[src*="hsforms.net/forms/embed/${portalId}.js"]`
//       )
//     ) {
//       const script = document.createElement("script");
//       script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
//       script.defer = true;
//       script.async = true;
//       document.body.appendChild(script);

//       // Add event listener to adjust iframe height after form loads
//       script.onload = () => {
//         // Wait for the form to be fully rendered
//         setTimeout(() => {
//           const iframe = formRef.current?.querySelector("iframe");
//           if (iframe) {
//             iframe.style.overflow = "visible";
//             iframe.style.height = "auto";
//             iframe.style.minHeight = "400px";
//           }
//         }, 1000);
//       };
//     }

//     // Add a mutation observer to detect when the iframe is added to the DOM
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.addedNodes.length) {
//           const iframe = formRef.current?.querySelector("iframe");
//           if (iframe) {
//             iframe.style.overflow = "visible";
//             iframe.style.height = "auto";
//             iframe.style.minHeight = "400px";

//             // Try to access the iframe content to adjust its body overflow
//             try {
//               const iframeDoc =
//                 iframe.contentDocument || iframe.contentWindow?.document;
//               if (iframeDoc?.body) {
//                 iframeDoc.body.style.overflow = "visible";
//               }
//             } catch (error) {

//               console.log("Could not access iframe content");
//             }
//           }
//         }
//       });
//     });

//     if (formRef.current) {
//       observer.observe(formRef.current, { childList: true, subtree: true });
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [portalId]);

//   return (
//     <div
//       ref={formRef}
//       className={`hs-form-frame overflow-visible ${className}`}
//       data-region={region}
//       data-form-id={formId}
//       data-portal-id={portalId}
//       style={{ overflow: "visible", height: "auto", minHeight: "400px" }}
//     ></div>
//   );}

