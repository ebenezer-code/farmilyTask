"use client";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
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

interface Product {
  idMeal: Key | null | undefined;
  strCategory: string;
  strMeal: string;
  strMealThumb: string;
}

const Market = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [isLoading, setIsLLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLLoading(true);
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const json = await response.json();
        setProductsData(json.meals);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

        <article className="mt-20 flex gap-4">
          <div className="flex flex-col gap-3">
            {isLoading ? (
              <p>Loading</p>
            ) : (
              productsData.map((product) => (
                <SideNav
                  key={product.idMeal}
                  name={product.strMeal}
                  image={product.strMealThumb}
                />
              ))
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 w-[90%]">
            {isLoading ? (
              <p>Loading</p>
            ) : (
              productsData.map((product) => (
                <Product
                  category={product.strCategory}
                  name={product.strMeal}
                  image={product.strMealThumb}
                  width="72"
                />
              ))
            )}
          </div>
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
