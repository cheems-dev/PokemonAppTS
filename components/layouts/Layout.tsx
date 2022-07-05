import { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element;
  title?: string;
}
export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='Author' content='Luis Ccalluchi Lopez' />
        <meta name='description' content={`Más informacion sobre ${title}`} />
        <meta name='keywords' content={`${title}, pokedex, pokemon `} />
      </Head>
      <Navbar />

      <main>{children}</main>
    </>
  );
};
