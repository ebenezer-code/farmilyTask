import Image from "next/image";
import {
  Hamburger,
  Logo,
  Search,
  Box,
  Facebook,
  Linkedin,
  Telegram,
  Twitter,
  Whatsapp,
  BackArrow,
} from "../icons";
import { SideNav, Product } from "../components";

const Market = () => {
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

      <section className="px-5">
        <p className="text-[#333D37] relative top-14 flex items-center gap-5">
          <BackArrow /> <span>Vegetables & fruits</span>
        </p>

        <article className="mt-20 flex">
          <SideNav />
          <Product />
        </article>
      </section>

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
};

export default Market;
