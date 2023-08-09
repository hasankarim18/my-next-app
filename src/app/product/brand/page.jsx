import Menu from "@/components/Menu";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="p-8">
      <Menu />
      <h1 className="text-3xl"> All Brand list page</h1>
      <h1 className="text-xl mt-4"> /produc/brand/page.jsx </h1>
      <div className="p-4">
        <ul className="flex flex-col gap-8 ">
          <li><Link className="inline-block underline text-blue-400 " href={"/product/brand/apple"}> Apple </Link></li>
          <li><Link className="inline-block line-through text-blue-400 " href={"/product/brand/samsung"}> Samsung </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
