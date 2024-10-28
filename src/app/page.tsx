import Image from "next/image";
import Link from "next/link";
import { categories } from "./data/data";
import { CategoryComp } from "./components";
import {
  Hamburger,
  Logo,
  Search,
  Box,
  Category,
  Facebook,
  Linkedin,
  Telegram,
  Twitter,
  Whatsapp,
} from "./icons";

export default function Home() {
  return (
    <section className="pb-52">
      <nav className="relative top-10 flex items-center justify-between p-5 shadow-custom shadow-green-100 w-full">
        <Hamburger />

        <span className="relative left-[10%] md:left-[3%]">
          <Logo width="72" height="21" />
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
          <Link href="/markets">
            <CategoryComp image={category.image} category={category.category} />
          </Link>
        ))}
      </article>

      <footer className="relative top-48">
        <div className="flex justify-center">
          <Logo width="200" height="40" />
        </div>

        <p className="text-center opacity-50 mt-10">Connect with us on</p>
        <hr />

        <div className="flex items-center justify-center gap-10 my-5">
          <Facebook />
          <Twitter />
          <Linkedin />
          <Telegram />
          <Whatsapp />
        </div>

        <div className="flex items-center justify-center gap-1">
          <Logo width="72" height="21" />
          <span className="opacity-50">All rights reserved</span>
        </div>
      </footer>
    </section>
  );
}
