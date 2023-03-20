import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={272}
    height={506}
    viewBox="0 0 272 506"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="32" y="32" rx="0" ry="0" width="208" height="196" />
    <rect x="32" y="252" rx="0" ry="0" width="208" height="42" />
    <rect x="32" y="302" rx="0" ry="0" width="108" height="31" />
    <rect x="32" y="349" rx="0" ry="0" width="208" height="77" />
    <rect x="32" y="434" rx="0" ry="0" width="160" height="40" />
    <rect x="200" y="434" rx="0" ry="0" width="40" height="40" />
  </ContentLoader>
);
