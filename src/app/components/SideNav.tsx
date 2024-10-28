import React from "react";
import Image from "next/image";
import { imageOptimizer } from "next/dist/server/image-optimizer";

interface SideNavProps {
  name: string
  image: string
}

const SideNav: React.FC<SideNavProps> = ({image, name}) => {
  return (
    <div>
      <article className="w-fit bg-[#FFE7DE] rounded-2xl p-2 shadow-2xl">
        <Image
          src={image}
          alt=""
          width={40}
          height={40}
          className="mx-auto"
        />
      </article>
      <p className="text-xs text-[#F54000] w-1/2">{name}</p>
    </div>
  );
};

export default SideNav;
