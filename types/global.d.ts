
interface HubSpotForms {
  create: (options: {
    region: string
    portalId: string
    formId: string
    target: string
    onFormReady?: () => void
  }) => void
}

interface Window {
  hbspt?: {
    forms: HubSpotForms
  }
}

//tdk we are using it