"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Hamburger, Logo, Search, Box } from "@/app/icons";
import useStore from "../../../store";
import { Product } from "../components";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

const Cart: React.FC = () => {
  const { removeFromCart, clearCart } = useStore();
  const [cart, setCart] = useState<Product[]>([]);

  const getCartFromLocalStorage = (): Product[] => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  };

  useEffect(() => {
    const initialCart = getCartFromLocalStorage();
    setCart(initialCart);
  }, []);

  return (
    <div className="cart">
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

      <article className="relative top-14 p-5">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <ul className="grid md:grid-cols-5 gap-4">
              {cart.map((item, index) => (
                <Link href={`/markets/${item.id}`} key={index}>
                  <Product
                    category={item.category}
                    name={item.name}
                    image={item.image}
                    width="72"
                  />
                  <button
                    className="border px-4 py-3 bg-[#346D4D] text-white rounded-2xl mt-1"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </Link>
              ))}
            </ul>
            <button
              className="mt-10 border px-4 py-3 bg-red-500 text-white rounded-2xl"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </>
        )}
      </article>
    </div>
  );
};

export default Cart;
