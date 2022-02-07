import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/stackoverflow-css/sum.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;


/* 
PostCSS处理css文件：
https://github.com/topaxi/postcss-selector-namespace
https://github.com/postcss/postcss-cli
*/
