import React from "react";
import Image from "next/image";

const SideNav = () => {
  return (
    <div>
      <article className="w-fit bg-[#FFE7DE] rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/products/tomato.png"
          alt=""
          width={40}
          height={40}
          className="mx-auto"
        />
      </article>
      <p className="text-xs text-[#F54000] w-1/2">Fresh Vegetables</p>
    </div>
  );
};

export default SideNav;
