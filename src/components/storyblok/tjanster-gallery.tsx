"use client";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export const TjansterGallery = ({ blok }: any) => {
  return <div {...storyblokEditable} className="mb-14 container-section mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      {blok.fields.map((item: any, i: number) => (
        <Link href={item.link.cached_url} key={i}>
          <div className="relative flex flex-col justify-center w-full h-[400px]">
            <Image src={item.image.filename} className="object-cover" alt={item.image.alt} fill />
          </div>
          <div className="flex justify-center my-8">
            <button className="min-w-[150px] px-5 py-2 bg-[#f15a39] text-white rounded-full">{item.title}</button>
          </div>
        </Link>
      ))}
    </div>
  </div>
}
