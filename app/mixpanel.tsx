
//currently mixpanel is not integrated
"use client"

import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";

interface MixpanelProps {
  children: React.ReactNode;
}

const Mixpanel: React.FC<MixpanelProps> = ({ children }) => {


    useEffect(() => {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
        debug: true,
        ignore_dnt: true,
      });
      mixpanel.track("page_view")
    }, []);
    return <>{children}</>;
};


export default Mixpanel;
