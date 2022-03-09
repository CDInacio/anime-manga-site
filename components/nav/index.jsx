import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import SideNav from "./side-nav";

export default function Navbar() {
  const { data: session } = useSession();

  const [width, setWidth] = useState("0");

  const handleOpenSideNav = () => {
    setWidth("w-6/12");
  };

  return (
    <>
      <div className="absolute z-10 left-5 top-5 md:hidden">
        <AiOutlineMenu color="#fff" size={40} />
      </div>
      <nav className="hidden w-screen  bg-dark md:block text-grey-100">
        <div className="w-10/12 mx-auto flex  items-center justify-between p-5">
          <ul className="hidden md:flex ">
            <li className="px-10">Anime</li>
            <li>Mangá</li>
          </ul>

          <div className="hidden md:flex">
            <div className="mr-9">
              <FaSearch />
            </div>
            <div className="flex">
              <Link href="/auth/signin" passHref>
                <p className="cursor-pointer">Entrar</p>
              </Link>{" "}
              /
              <Link href="/auth/signup" passHref>
                <p className="cursor-pointer">Cadastrar</p>
              </Link>
            </div>

            {session && (
              <div>
                <FaUserAlt />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
