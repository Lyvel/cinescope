"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

//NO LONGER USED

/**
 * A component that renders an image with a fallback source.
 * @param {Object} props - The props object containing the image source, fallback source, and other props for the `Image` component.
 * @param {string} props.src - The source URL for the image.
 * @param {StaticImageData} props.fallbackSrc - The fallback source URL to be used in case the main source fails to load.
 * @param {Object} rest - Additional props to be spread on the `Image` component.
 * @returns {JSX.Element} JSX representing the image component.
 */
function ImageFallback(props: ImageProps & { fallbackSrc: StaticImageData }) {
  const { src, fallbackSrc, ...rest } = props;
  const [imageSrc, setimageSrc] = useState(src);
  return (
    <Image
      {...rest}
      src={imageSrc}
      onError={() => setimageSrc(fallbackSrc)}
      className="h-full m-auto"
      alt="Image"
      role="img"
      aria-label="Image"
    />
  );
}
