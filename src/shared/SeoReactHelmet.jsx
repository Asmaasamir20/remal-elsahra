import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

// مكون لتحسين SEO باستخدام Helmet
const SeoReactHelmet = ({
  title,
  description,
  keywords,
  openGraph,
  twitter,
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic meta tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
        />

        {/* Open Graph meta tags */}
        {openGraph && (
          <>
            <meta property="og:type" content={openGraph.type || "website"} />
            <meta property="og:title" content={openGraph.title || title} />
            <meta
              property="og:description"
              content={openGraph.description || description}
            />
            <meta property="og:image" content={openGraph.image} />
            <meta property="og:url" content={openGraph.url} />
            <meta
              property="og:site_name"
              content={openGraph.site_name || title}
            />
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
            <meta name="twitter:image" content={twitter.image} />
            <meta name="twitter:site" content={twitter.site} />
            <meta name="twitter:creator" content={twitter.creator} />
          </>
        )}
      </Helmet>
    </HelmetProvider>
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
  }),
  twitter: PropTypes.shape({
    cardType: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    site: PropTypes.string,
    creator: PropTypes.string,
  }),
};
