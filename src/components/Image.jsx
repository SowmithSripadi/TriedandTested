import React from "react";
import { IKImage } from "imagekitio-react";

function Image({ src, className, w, h, alt }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      // src="https://ik.imagekit.io/8nfs9/logo.png"

      className={className}
      width={w}
      height={h}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
}

export default Image;
