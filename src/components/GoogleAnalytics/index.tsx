import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;
