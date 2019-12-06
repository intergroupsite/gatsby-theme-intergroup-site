import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({
  description,
  lang,
  meta,
  name,
  title,
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | ${name}`}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: name,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ].concat(meta)}
  />
);

SEO.displayName = 'SEO';

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SEO;
