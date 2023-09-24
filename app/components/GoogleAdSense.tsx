'use client'

import React, { useEffect } from 'react';
import Head from 'next/head';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const GoogleAdSense: React.FC = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className=''>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-8236748191287452" />
      </Head>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8236748191287452"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8236748191287452"
        data-ad-slot="9281798576"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default GoogleAdSense;
