/* import favicon from './extensions/favicon.png' */

const config = {
  locales: ['pt'],
  translations: {
    pt: {
      'app.components.LeftMenu.navbrand.title': 'DanteStamp',
      'app.components.LeftMenu.navbrand.workplace': 'Administração',
    }
  },
  theme: {
    colors: {
      primary500: '#CA4017',
      primary600: '#CA4017',
      buttonPrimary500: '#CA4017',
      buttonPrimary600: '#CA4017',
    }
  }
}

const bootstrap = (_app) => {}

export default {
  config,
  bootstrap,
}
