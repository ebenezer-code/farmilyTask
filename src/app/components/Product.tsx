import React from "react";
import Image from "next/image";
import { Like, AddButton, Facebook } from "../icons";

const Product = () => {
  return (
    <div className="w-80 rounded-2xl border-2 -opacity-50 p-5">
      <Image
        src="/images/products/tomato.png"
        alt=""
        width={200}
        height={200}
        className="mx-auto"
      />
      <article className="mt-5">
        <p className="text-xl">Tomatoes</p>
        <small>Little leaf farms</small>
      </article>

      <article className="flex justify-between mt-5">
        <div>
          <p className="font-extrabold text-xl">N3000</p>
          <small className="opacity-50 line-through">N10000</small>
          <article className="opacity-50 flex items-center gap-3">
            <Like />
            <p>87% (1.2K)</p>
          </article>
        </div>
        <AddButton />
      </article>
    </div>
  );
};

export default Product;
