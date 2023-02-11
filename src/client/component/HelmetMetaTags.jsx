import { Helmet } from "react-helmet-async";

const HelmetMetaTags = ({ title, description, image }) => {
  return (
    <Helmet>
      {title ? (
        <>
          <title>{title}</title>
          <meta name="title" property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      ) : (
        ""
      )}

      {description ? (
        <>
          <meta
            name="description"
            property="og:description"
            content={description}
          />

          <meta name="twitter:description" content={title} />
        </>
      ) : (
        ""
      )}

      {image ? (
        <>
          <meta name="image" property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      ) : (
        ""
      )}

      {image && <>
         <link rel="shortcut icon" href={image} type="image/x-icon" />
      </>}
    </Helmet>
  );
};
export default HelmetMetaTags;
