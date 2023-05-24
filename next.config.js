/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-GB", "fr", "fr-CH", "de-CH"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-GB",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: "netlify-se-test.com",
        defaultLocale: "en-GB",
      },
      {
        domain: "fr.netlify-se-test.com",
        defaultLocale: "fr",
      },
      {
        domain: "fr-ch.netlify-se-test.com",
        defaultLocale: "en-GB",
      },
      {
        domain: "ch.netlify-se-test.com",
        defaultLocale: "en-GB",
      },
    ],
  },
};

module.exports = nextConfig;
