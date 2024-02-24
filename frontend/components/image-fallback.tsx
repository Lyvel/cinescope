"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageFallback(props: any) {
  const { src, fallbackSrc, ...rest } = props;
  const [imageSrc, setimageSrc] = useState(src);
  return (
    <Image
      alt="Movie Poster"
      {...rest}
      src={imageSrc}
      onError={() => setimageSrc(fallbackSrc)}
      className="h-full m-auto"
    />
  );
}
