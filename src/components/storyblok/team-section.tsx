"use client";

import { storyblokEditable } from "@storyblok/react";

export const TeamSection = ({ blok }: any) => {
  return (
    <div {...storyblokEditable} className="md:max-w-[85%] lg:max-w-[60%] mx-auto p-4">
      <h2 className="text-[20px] text-center uppercase mt-10 mb-14 tracking-[4px]">{blok.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blok.fields.map((item: any) => (
          <div className="text-center">
            <div>
              <img src={item.image.filename} alt={item.image.alt} />
            </div>
            <div className="my-4">
              <h2 className="text-[30px]">{item.name}</h2>
              <p className="text-[16px]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
