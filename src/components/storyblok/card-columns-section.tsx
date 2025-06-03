"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const CardColumns = ({ blok }: any) => {
  return (
    <div className="container-section my-5 lg:my-20 mx-auto">
      <div
        className={`grid xl:max-w-[100%] mx-auto gap-4 py-6 ${blok.columns === "4"
          ? "lg:grid-cols-4"
          : blok.columns === "3"
            ? "lg:grid-cols-3"
            : blok.columns === "2"
              ? "lg:grid-cols-2"
              : "lg:grid-cols-1"
          }`}
      >
        {blok.fields.map((item: any) => (
          <div
            key={item._uid}
            className={`${blok.columns === "1"
              ? "flex flex-col gap-2 lg:gap-0 lg:flex-row-reverse items-center"
              : "flex flex-col gap-2"
              }  lg:p-0 transition-all duration-300 `}
          >
            <div className="w-full h-[300px] lg:h-[500px] relative">
              <Image
                src={item.image.filename || ""}
                fill
                alt={item.title}
                className="object-cover"
              />

              <div className="h-full w-full absolute top-0 bg-[#214e44] opacity-70" />

              <div className="flex z-10 text-center flex-col justify-center items-center  text-white gap-2 absolute w-full h-full">
                <h3 className="font-normal text-[32px]">{item.title}</h3>
              </div>

              <div className="my-4 absolute z-10  bottom-0 right-4 text-center">
                <Link href={item.link.cached_url} className="text-[18px] flex gap-2 items-center" style={{ color: "#fff" }}>
                  Läs mer <IoIosArrowForward fontSize={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
