import React, { useContext } from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';
import {
  GEL_SPACING_QUAD,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import { ServiceContext } from '#contexts/ServiceContext';
import ImageWithPlaceholder from '../ImageWithPlaceholder';

const paddingDir = ({ dir }) => `padding-${dir === 'rtl' ? 'left' : 'right'}`;

const ImageContainer = styled.div`
  padding: ${GEL_SPACING_QUAD} 0 ${GEL_SPACING_TRPL};
  ${paddingDir}: ${GEL_SPACING_DBL};
  @media (max-width: 22.4375rem) {
    display: none;
  }
`;

const getSrc = ({ imageUrl, size }) =>
  `https://${imageUrl.replace('$recipe', `${size}x${size}`)}`;

const getSrcSet = ({ imageUrl, sizes }) =>
  sizes.map(size => `${getSrc({ imageUrl, size })} ${size}w`).join(',');

const smallImageSize = 128;
const mediumImageSize = 240;
const largeImageSize = 480;

const OnDemandImage = ({ imageUrl, dir }) => {
  const { defaultImageAltText: alt } = useContext(ServiceContext);

  const src = getSrc({ imageUrl, size: smallImageSize });
  const srcset = getSrcSet({
    imageUrl,
    sizes: [smallImageSize, mediumImageSize, largeImageSize],
  });
  const sizes = '(min-width: 1008px) 228px, 30vw';

  return (
    <ImageContainer data-e2e="on-demand-image" dir={dir}>
      <ImageWithPlaceholder
        src={src}
        alt={alt}
        srcset={srcset}
        sizes={sizes}
        ratio={100}
        width={mediumImageSize}
        height={mediumImageSize}
      />
    </ImageContainer>
  );
};

OnDemandImage.propTypes = {
  imageUrl: string.isRequired,
  dir: string,
};

OnDemandImage.defaultProps = {
  dir: 'ltr',
};

export default OnDemandImage;
