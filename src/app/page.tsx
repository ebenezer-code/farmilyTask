import Image from "next/image";
import { Hamburger, Logo, Search, Box } from "./icons";

export default function Home() {
  return (
    <section className="">
      <nav className="relative top-10 flex items-center justify-between p-5 shadow-custom shadow-green-100">
        <Hamburger />

        <span className="relative left-[10%] md:left-[3%]">
          <Logo />
        </span>

        <div className="flex items-center gap-5">
          <Search />
          <Box />
          <div className="bg-green-500 rounded-full w-fit text-white p-1 px-2">
            N
          </div>
        </div>
      </nav>

      <div className="relative top-10 flex justify-center">
        <Image
          alt=""
          src="/images/marketplace.svg"
          width={300}
          height={300}
        ></Image>
      </div>
    </section>
  );
}
