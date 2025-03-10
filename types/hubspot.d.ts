interface HBSPTFormsCreateOptions {
  portalId: string;
  formId: string;
  target: string | HTMLElement;
  region?: string;
  [key: string]: any;
}

interface HBSPTForms {
  create: (options: HBSPTFormsCreateOptions) => void;
}

interface HBSPT {
  forms: HBSPTForms;
}

declare global {
  interface Window {
    hbspt?: HBSPT;
  }
}

export {};
