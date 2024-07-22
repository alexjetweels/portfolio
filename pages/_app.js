import { AnimatePresence } from 'framer-motion';
import Chakra from '../components/Chakra/chakra';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../styles/global.css';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} key={router.route} />
      <Analytics />
      <SpeedInsights />
    </Chakra>
  );
}

export default MyApp;
