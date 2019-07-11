import { css } from 'docz-plugin-css';

// doczrc.js
export default {
  title: 'Jest Test',
  description: 'Docz documentation with TypeScript, Jest and Enzyme',
  src: './src',
  themeConfig: {
    colors: {
      primary: '#3c70ff',
    },
  },
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: false,
    }),
  ],
  codeSandbox: false,
  typescript: true,
};
