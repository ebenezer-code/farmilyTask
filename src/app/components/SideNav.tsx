import React from "react";
import Image from "next/image";

const SideNav = () => {
  return (
    <div>
      <article className="w-24 bg-[#FFE7DE] rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/products/tomato.png"
          alt=""
          width={100}
          height={100}
          className="mx-auto"
        />
      </article>
      <p className="text-[#F54000]">Fresh Vegetables</p>
    </div>
  );
};

export default SideNav;
