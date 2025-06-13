/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// For swiper
declare module 'swiper/css' {}
declare module 'swiper/css/grid' {}
declare module 'swiper/css/navigation' {}
declare module 'swiper/css/pagination' {}
declare module 'swiper/css/autoplay' {}
declare module 'swiper/css/effect-fade' {}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
