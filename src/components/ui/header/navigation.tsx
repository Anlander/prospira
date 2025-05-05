"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { useParams, usePathname } from "next/navigation";
import { IoMailOutline } from "react-icons/io5";

interface HeaderProps {
  props: {
    header_bg_color: {
      color: string;
    };
    header_text_color: {
      color: string;
    };
    site_title: string;
    footer_menu: LinkTypes[];
    meny: LinkTypes[];
    logo: {
      filename: string;
    };
    transparent: boolean;
    fields: any;
  };
}

export const Navigation = ({ props }: HeaderProps) => {
  const [open, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!open);
  };

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  }

  const router = useParams();
  const path = usePathname();
  return (
    <nav
      className={`fixed w-full items-center ${isScrolled && "bg-[#bccece]"} flex justify-between top-0 px-5 transition-all duration-300 ${isScrolled ? "lg:py-4" : "lg:px-14"} py-8 z-30`}
    >
      <Link href="/">
        <Image
          src={props.logo.filename}
          alt={props.site_title}
          width={isScrolled ? 120 : 250}
          height={50}
          className="z-50"
        />
      </Link>

      <div className={`hidden lg:flex`}>
        <div className="flex gap-2 items-center">
          {props.meny.map((item: LinkTypes) => {
            return (
              <Link
                key={item._uid}
                href={item.link.cached_url}
                style={{
                  color:
                    path === `/${item.link.cached_url}`
                      ? props.header_text_color.color
                      : item.bg_active
                        ? ""
                        : props.header_text_color.color ? isScrolled ? "#000" : props.header_text_color.color : "#fff",
                }}

                className={`${router.slug === item.link.cached_url && "active"
                  } uppercase  px-5 py-2 flex gap-2 items-center ${item.secondary_color && "primary-button"} ${item.bg_active ? "button-hover" : props.header_text_color.color}`}

              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="block lg:hidden z-50">
        <Hamburger toggled={open} toggle={setMenuOpen} color="white" />
      </div>
      <div
        className={`gap-2 bg-[#214e44] fixed top-0 h-full w-full lg:mt-20 px-10 py-14 left-0 flex-col flex text-[32px] z-20 transition-all duration-300 right-0 ${!open ? "translate-x-full" : "translate-x-0"
          }`}
      >
        {props.meny.map((item: LinkTypes) => (
          <Link
            onClick={handleOpenMenu}
            key={item._uid}
            href={item.link.url}
            style={{ color: props.header_text_color.color }}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Link href="/kontakt" className="hidden primary-button lg:flex items-center gap-2" style={{ color: "#fff" }}><IoMailOutline />Kontakt</Link>
    </nav>
  );
};
