"use client";

import { useState } from "react";
import Logo from "../../assets/Logo.webp";
import Img from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Menu = ({ menus }: { menus: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  return (
    <>
      <header className="bg-fuchsia-800">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-2 lg:py-1">
          <div>
            <Link href="/">
              <Img className="w-16 cursor-pointer" src={Logo} alt="..." />
            </Link>
          </div>
          <div
            className={`z-20 bg-fuchsia-800 nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen ? "top-[7%] block" : "-top-[-100%] hidden"
            } md:w-auto w-full flex items-center px-5 `}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              {menus &&
                menus.edges.map((edge: any) => {
                  const { edges } = edge.node.menuItems;
                  return edges.map((item: any) => {
                    const { path, id, label, order, uri, childItems } =
                      item.node;
                    return (
                      <li className="menu" key={id}>
                        <Link
                          key={id}
                          className={`lg:p-4 py-3 px-0 block border-b-2 border-transparent text-white ${
                            pathname + "/" === path
                              ? "active border-b-2 border-red-500"
                              : ""
                          }`}
                          href={uri}
                        >
                          {label}
                        </Link>
                        <ul className="child-menu">
                          {childItems.edges.length
                            ? childItems.edges.map((item: any) => {
                                const { path, id, label, order, uri } =
                                  item.node;
                                return (
                                  <li key={id}>
                                    <Link
                                      className="lg:p-4 py-3 px-0 block bg-red-500 border-b-2 border-transparent hover:border-indigo-400"
                                      href="#"
                                    >
                                      {label}
                                    </Link>
                                  </li>
                                );
                              })
                            : null}
                        </ul>
                      </li>
                    );
                  });
                })}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <label
              onClick={toggleMenu}
              // name={isMenuOpen ? "close" : "menu"}
              className="pointer-cursor lg:hidden block pt-2"
            >
              <svg
                onClick={toggleMenu}
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Menu;