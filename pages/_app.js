import React, { useEffect } from 'react';
import Head from 'next/head';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, DarkTheme, BaseProvider} from 'baseui';
import {styletron} from '../styletron.ts'
import '../styles/globals.css'

const THEME = {
  light: 'light',
  dark: 'dark',
};

export default function App({Component, pageProps}) {
  const [theme, setTheme] = React.useState(THEME.light);

  useEffect(() => {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme(THEME.dark) : setTheme(THEME.light);
  }, []);
  
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        event.matches ? setTheme(THEME.dark) : setTheme(THEME.light);
    });
  });

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <Head>
          <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}