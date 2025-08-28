import { PayPalEnvironment } from 'ngx-paypal';
export const environment = {
  production: true,
  apiURL: 'https://mathapi.allgifted.com/api',
//  apiURL: 'localhost:8000',
  webAuth: {
    clientID: 'x0AAlKqaQ8Zw6YF4kdMzTE08oAXjIhGJ',
    domain: 'pamelalim.auth0.com',
    audience: 'https://pamelalim.auth0.com/userinfo',
    redirectUri: 'https://math.allgifted.com/home',
    theme: {
      logo: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.allgifted.com/wp-content/uploads/2020/06/ags-trans.png"
    }
  },
  payPal: {
    payPalEnvironment: PayPalEnvironment.Production,
    productionKey: "AcWwalMgPfGKd-sT_fHGPOf6hAnLc_i8LfhuWlGSl29pd4tR3FWi66FGJt_dI6LPcPvby0yQ1JP4UTK0",
    sandboxKey: "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
    postEnrollmentUrl: 'http://mathapi.pamelalim.me/enrolments'
  }
};
