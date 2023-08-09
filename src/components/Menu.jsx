import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
      <div className=" border border-transparent border-b-blue-300">        
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link href={'/'} className="btn btn-ghost normal-case text-xl">Next Shop</Link>
            </div>
            <div className="flex-none">
              <ul className="menu w-full menu-horizontal px-1">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Products</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <Link href={"/product"}>Product</Link>
                      </li>
                      <li>
                        <Link href={"/product/brand"}>Brands</Link>
                        <details>
                          <summary> Brand Lists</summary>
                          <ul className="p-2 bg-base-100">
                            <li>
                              <Link href={"/product/brand/apple"}>Apple</Link>
                            </li>
                            <li>
                              <Link href={"/product/barad/samsung"}>
                                Samsung
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menu;