import React from "react";
import Image from "next/image";

interface CategoryCompProps {
  image: string;
  category: string;
}

const CategoryComp: React.FC<CategoryCompProps> = ({ image, category }) => {
  return (
    <div className="w-full flex items-center justify-between border-b pb-4 pt-2">
      <Image src={image} alt="" width={100} height={100} />
      <p className="font-bold">{category}</p>
      <div></div>
    </div>
  );
};

export default CategoryComp;
