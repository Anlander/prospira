"use client";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { LinkTypes } from "@/types/IfLinkInterface";

interface HeroProps {
  blok: {
    title: string;
    sub_text: string;
    text_center: boolean;
    content: string;
    text_color: {
      color: string;
    };
    overlay: {
      color: string;
    };
    buttons: LinkTypes[];
    bg_image: {
      filename: string;
    };
    logo_image: {
      filename: string
    }
    frame: boolean;
    video: boolean;
    small_hero: boolean;
  };
}

export const HeroSection = ({ blok }: HeroProps) => {
  return (
    <div
      {...storyblokEditable}
      className={`h-full w-full flex flex-col justify-center mx-auto`}
    >
      <div
        className={`relative ${blok?.video
          ? "h-full"
          : blok.small_hero
            ? "h-[50vh] lg:min-h-[55vh]"
            : "h-[60vh] lg:min-h-[90vh]"
          } justify-center flex items-center  ${blok.frame && "container-section mt-20"
          }`}
      >
        <div
          className="absolute h-full w-full opacity-30 z-10"
          style={{ background: `${blok.overlay.color}` }}
        />

        {blok.logo_image.filename && (
          <Image className="z-10 object-cover absolute right-10 -bottom-14 w-[200px] lg:w-auto flex justify-center" src={blok.logo_image.filename} width={300} height={50} alt="" />
        )}
        <div
          className="z-20 absolute flex flex-col gap-8 container-section mx-auto"
          style={{
            alignItems: `${blok.text_center ? "center" : "start"}`,
            textAlign: `${blok.text_center ? "center" : "start"}`,
          }}
        >
          <div
            style={{ color: `${blok.text_color.color}` }}
            className="gap-5 flex flex-col"
          >
            <h3 className="uppercase">{blok.sub_text}</h3>


            <h1
              className={`${blok.text_center ? "lg:max-w-[80%] mx-auto" : "lg:max-w-[50%]"
                } `}
            >
              {blok.title}
            </h1>
            {blok.content && (
              <span className="hidden lg:block text-[22px] lg:max-w-[50%]">
                {blok.content}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {blok.buttons.map((item: LinkTypes) => (
              <button
                key={item._uid}
                className={`${item.secondary_color ? "secondary-button" : "primary-button"}`}
              >
                <Link className="text-white" href={item.link.cached_url}>{item.title}</Link>
              </button>
            ))}
          </div>
        </div>
        {blok.video ? (
          <video
            autoPlay
            muted
            loop
            className="h-[80vh] lg:max-h-[80vh] object-cover w-full"
          >
            <source src={blok.bg_image.filename || ""} />
          </video>
        ) : (
          <Image
            className="z-0 object-cover"
            src={blok.bg_image.filename || ""}
            fill
            alt={blok.title}
          />
        )}
      </div>
    </div>
  );
};
