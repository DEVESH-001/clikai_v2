"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  getCookiePreferences,
  type CookiePreferences,
} from "@/actions/cookies";
import Image from "next/image";

export function Scripts() {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(
    {
      analytics: false,
      marketing: false,
    }
  );

  useEffect(() => {
    const loadPreferences = async () => {
      const preferences = await getCookiePreferences();
      setCookiePreferences(preferences);
    };
    loadPreferences();
  }, []);

  if (!cookiePreferences.analytics && !cookiePreferences.marketing) {
    return null;
  }

  return (
    <>
      {/* Base Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .w-dropdown-list {
              box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
              transition: all 0.3s, opacity 0.1s, transform 0.2s;
            }
            .w-dropdown-link:hover {
              color: #0082f3;
            }
            @media screen and (max-width: 991px) {
              .w-dropdown-list {
                box-shadow: none;
              }
            }
          `,
        }}
      />

      {cookiePreferences.analytics && (
        <>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-104886160-1"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-104886160-1');
            `}
          </Script>

          {/* Hotjar */}
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1885698,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>

          {/* Google Tag Manager */}
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W2238Q3');
            `}
          </Script>
        </>
      )}

      {cookiePreferences.marketing && (
        <>
          {/* Retention Rb2b.com */}
          <Script id="rb2b" strategy="afterInteractive">
            {`
              !function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/reb2b.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("8XOE9GHMRLOM");}();
            `}
          </Script>

          {/* LinkedIn Tracking */}
          <Script id="linkedin" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "102232";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `}
          </Script>

          {/* HubSpot */}
          <Script
            id="hubspot"
            src="//js.hs-scripts.com/4401613.js"
            strategy="afterInteractive"
          />

          {/* HubSpot Form with Google Meeting Link */}
          <script
            src="https://js.hsforms.net/forms/embed/4401613.js"
            defer
          ></script>
          <div
            className="hs-form-frame" 
            data-region="na1"
            data-form-id="7767aa9d-2f10-45f8-865c-13ea7263fd5e"
            data-portal-id="4401613"
          ></div>
        </>
      )}

      {/* No-Script Fallbacks */}
      <noscript>
        <iframe
          src="//www.googletagmanager.com/ns.html?id=GTM-W2238Q3"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
        <Image
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=102232&fmt=gif"
        />
      </noscript>
    </>
  );
}