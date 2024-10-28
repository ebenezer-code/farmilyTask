import Image from "next/image";
import { Hamburger, Logo, Search, Box, Share, More } from "@/app/icons";
import { Product } from "@/app/components";

const SingleMarket = () => {
  return (
    <div>
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

      <section className="relative top-20 p-5">
        <article className="bg-[#F5FFF71A] p-5">
          <div className="flex justify-end items-center gap-4">
            <Share />
            <More />
          </div>
          <div className="w-fit mx-auto bg-white p-5 py-16">
            <Image
              src="/images/products/tomato.png"
              alt=""
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <div>
            <p className="text-2xl">Tomatoes</p>
            <p className="text-[#6B7F73]">Little Leaf Farms</p>
          </div>
        </article>

        <article className="text-center flex flex-col gap-4 mt-5">
          <p className="text-3xl">Little Leaf Farms</p>
          <p className="text-2xl text-[#6B7F73]">
            Little leaf farm is a farm at the outskirt of Ota with verities of
            fresh farm produce ranging from fruits to livestock produce{" "}
          </p>
          <p className="text-xl">
            These carrots are planted with organic manure, and groomed under
            conducive environment{" "}
          </p>
          <p className="text-2xl">Starting price: N1000 (4pcs)</p>
        </article>

        <article className="mt-10">
          <p>
            Special Request <span className="opacity-50">(Optional)</span>
          </p>
          <textarea
            name="special"
            id="special"
            className="w-full p-4 mt-1 outline-none border border-[#ECEEED] bg-[#ECEEED] rounded-2xl"
            placeholder="e.g. skip on some ingredients"
          ></textarea>
        </article>

        <article className="flex justify-center text-xl mt-7">
          <div className="flex items-center gap-5">
            <button className="w-24 flex gap-3 items-center justify-between text-[#F54000] bg-[#FFE7DE] rounded-3xl p-3 px-5">
              <span>-</span>
              <span>0</span>
              <span>+</span>
            </button>
            <button className="bg-[#346D4D] text-white rounded-3xl w-full py-3 px-8">
              Add to cart
            </button>
          </div>
        </article>

        <article className="mt-14">
            <p className="text-xl font-[1200]">More Products</p>
            <div className="grid md:grid-cols-5 place-items-center gap-4 element mt-2">
                <Product width="72" />
                <Product width="72" />
                <Product width="72" />
            </div>
        </article>
      </section>
    </div>
  );
};

export default SingleMarket;
