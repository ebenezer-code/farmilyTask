import Image from "next/image";
import { categories } from "./data/data";
import { CategoryComp } from "./components";
import { Hamburger, Logo, Search, Box, Category } from "./icons";

export default function Home() {
  return (
    <section className="">
      <nav className="relative top-10 flex items-center justify-between p-5 shadow-custom shadow-green-100 w-full">
        <Hamburger />

        <span className="relative left-[10%] md:left-[3%]">
          <Logo />
        </span>

        <div className="flex items-center gap-5">
          <Search />
          <Box />
          <div className="bg-[#346D4D] rounded-full w-fit text-white p-1 px-2">
            N
          </div>
        </div>
      </nav>

      <div className="relative top-10 flex justify-center">
        <Image alt="" src="/images/marketplace.svg" width={300} height={300} />
      </div>

      <article className="flex justify-center relative top-20">
        <div className="flex justify-between border rounded-md p-3 px-4 w-96 bg-[#FFE7DE]">
          <input
            type="text"
            placeholder="Search products in Farmily"
            className="border-none outline-none bg-transparent px-2 w-full"
          />
          <Search />
        </div>
      </article>

      <article className=" relative top-32 px-5">
        <div className="flex items-center justify-between mb-10">
          <p>Categories</p>
          <Category />
        </div>

        {categories.map((category) => (
          <CategoryComp image={category.image} category={category.category} />
        ))}
      </article>
    </section>
  );
}
