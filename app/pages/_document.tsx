import Document, { Html, Head,  NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager (Head) */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-104886160-1"
          ></Script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-104886160-1');
              `,
            }}
          ></script>

          {/* Hotjar Tracking Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1885698,hjsv:6};a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          ></script>

          {/* LinkedIn Insight */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "102232";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `,
            }}
          ></script>

          {/* HubSpot Embed Code */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/4401613.js"
          ></script>
        </Head>

        <body>
          {/* Google Tag Manager (Body) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W2238Q3"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {/* Retention Rb2b.com script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;
                reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){
                  return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};
                };for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}
                reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";
                script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/reb2b.js.gz";
                var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};
                reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("8XOE9GHMRLOM");
              `,
            }}
          ></script>

          {/* Other Footer Scripts */}
          {/* Add any other footer-related scripts here if needed */}
          {/* If you need to include any custom style, you can also add it in <style> tag */}
        </body>

        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
