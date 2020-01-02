import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

// --magic-bezier: cubic-bezier(.25, .8, .25, 1);

// // MONOKAI theme
// --color-dark: #1d1e19;
// --color-light: #f6f7ee;
// --color-r: #f7005e;
// --color-g: #96e309;
// --color-b: #53d1ed;
// --color-o: #fd8500;
// --color-p: #9d60ff;
// --color-y: #e0d75a;
// --color-gray: #625f4b;

export default {
  ...chronoblogTheme,
  initialColorMode: 'dark',
  colors: {
    ...chronoblogTheme.color,
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#FCFCFA',
        background: '#2D2A2E',
        link: '#FFD866',
        secondary: '#78DCE8',
        primary: '#FF6188',
        muted: '#727072'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 0,
    button: 0,
    search: 0,
    code: 0,
    img: 0,
    authorBanner: 0
  },
  fonts: {
    ...chronoblogTheme.fonts
  }
};
