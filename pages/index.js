import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function Home() {
  const router = useRouter();

  const handleRequestDemo = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'request_demo_clicked',
    });
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX"
      />

      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Demo Page</h1>
        <button
          onClick={handleRequestDemo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Request Demo
        </button>
      </main>
    </>
  );
}
