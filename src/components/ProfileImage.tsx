import Image from "next/image";
import React from "react";

type ProfileImageProps = {
  src?: String | null;
  className?: String;
};

const ProfileImage = ({ src, className = "" }: ProfileImageProps) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? null : (
        //@ts-ignore
        <Image src={src} alt="Profile Image" quality={100} fill />
      )}
    </div>
  );
};

export default ProfileImage;
