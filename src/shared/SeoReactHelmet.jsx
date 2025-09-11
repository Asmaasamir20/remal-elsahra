import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

// مكون لتحسين SEO باستخدام Helmet
const SeoReactHelmet = ({
  title,
  description,
  keywords,
  openGraph,
  twitter,
  canonical,
  noindex = false,
  jsonLd,
  alternates,
}) => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
        />
      )}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* hreflang alternates */}
      {Array.isArray(alternates) &&
        alternates.map((alt) =>
          alt?.href && alt?.hreflang ? (
            <link
              key={alt.hreflang}
              rel="alternate"
              href={alt.href}
              hrefLang={alt.hreflang}
            />
          ) : null
        )}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph meta tags */}
      {openGraph && (
        <>
          <meta property="og:type" content={openGraph.type || "website"} />
          <meta property="og:title" content={openGraph.title || title} />
          <meta
            property="og:description"
            content={openGraph.description || description}
          />
          {openGraph.image && (
            <meta property="og:image" content={openGraph.image} />
          )}
          {openGraph.imageAlt && (
            <meta property="og:image:alt" content={openGraph.imageAlt} />
          )}
          {openGraph.url && <meta property="og:url" content={openGraph.url} />}
          {openGraph.site_name && (
            <meta property="og:site_name" content={openGraph.site_name} />
          )}
          {openGraph.locale && (
            <meta property="og:locale" content={openGraph.locale} />
          )}
        </>
      )}

      {/* Twitter Card meta tags */}
      {twitter && (
        <>
          <meta
            name="twitter:card"
            content={twitter.cardType || "summary_large_image"}
          />
          <meta name="twitter:title" content={twitter.title || title} />
          <meta
            name="twitter:description"
            content={twitter.description || description}
          />
          {twitter.image && (
            <meta name="twitter:image" content={twitter.image} />
          )}
          {twitter.imageAlt && (
            <meta name="twitter:image:alt" content={twitter.imageAlt} />
          )}
          {twitter.site && <meta name="twitter:site" content={twitter.site} />}
          {twitter.creator && (
            <meta name="twitter:creator" content={twitter.creator} />
          )}
        </>
      )}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SeoReactHelmet;

SeoReactHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  openGraph: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    site_name: PropTypes.string,
    locale: PropTypes.string,
  }),
  twitter: PropTypes.shape({
    cardType: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    site: PropTypes.string,
    creator: PropTypes.string,
  }),
  canonical: PropTypes.string,
  noindex: PropTypes.bool,
  jsonLd: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  alternates: PropTypes.arrayOf(
    PropTypes.shape({ href: PropTypes.string, hreflang: PropTypes.string })
  ),
};
