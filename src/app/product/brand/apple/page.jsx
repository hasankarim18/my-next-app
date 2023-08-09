import Menu from "@/components/Menu";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <Menu />
      <h1 className="text-3xl">All apple page</h1>
      <h1 className="text-xl mt-4"> /produc/brand/apple/page.jsx </h1>
      <ul className="flex flex-col gap-8 ">
        <li>
          <Link
            className="inline-block underline text-blue-400 "
            href={"/product/brand/apple/iphot"}
          >           
            Iphone 
          </Link>
        </li>
        <li>
          <Link
            className="inline-block line-through text-blue-400 "
            href={"/product/brand/apple/macbook"}
          >
            Macbook
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
