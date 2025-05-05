"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export const Socials = ({ props, color }: any) => {
  return (
    <div className="flex  gap-2">
      {props.map((item: any) => {
        const Icons = (size: any) => {
          switch (item.icons) {
            case "fb":
              return <FaFacebookF fontSize={size.size} color={color.color} />;
            case "ig":
              return <FaInstagram fontSize={size.size} color={color.color} />;
            case "ld":
              return <FaLinkedin fontSize={size.size} color={color.color} />;
            case "yt":
              return <FaYoutube fontSize={size.size} color={color.color} />;
            case "email":
              return <MdOutlineMailOutline fontSize={size.size} color={color.color} />;
            default:
              "";
          }
        };
        return (
          <Link
            href={`${item.link}`}
            key={item._uid}
            className="bg-[#214e44] p-4 w-fit h-fit rounded-[50%] hover:border-[#f15a39] social-links"
          >
            <Icons size="16" />
          </Link>
        );
      })}
    </div>
  );
};
