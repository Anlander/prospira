import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { LinkTypes } from "@/types/IfLinkInterface";
import Link from "next/link";
import { Button } from "../ui/button";

export const ImageSection = ({ blok }: any) => {
  return (
    <div className="w-full "
      {...storyblokEditable}
      style={{ background: `${blok.bg_color?.color || ""}` }}
    >

      <div
        className={`container-section  ${blok.bg_color?.color && "px-0 pt-5 lg:p-14"}`}
        style={{ background: `${blok.bg_color?.color || ""}` }}
      >
        <div className="lg:h-[500px] grid gap-14 grid-cols-1 lg:grid-cols-2">
          <div
            className={`w-full h-[350px] lg:h-full relative ${blok.image_right && "order-1"}`}
          >
            <Image
              src={blok.image.filename || ""}
              alt={blok.title}
              fill
              className={`object-cover ${blok.image_right ? "p-0 lg:p-10 pr-0" : "p-0 lg:p-10 pl-0"}`}
            />
          </div>
          <div
            className={`flex flex-col gap-5 lg:max-w-[95%] xl:max-w-[85%] justify-center ${blok.text_white && "text-white"
              }`}
          >
            {blok.sub_title && <h3>{blok.sub_title}</h3>}
            {blok.title && <h2>{blok.title}</h2>}
            {blok.content && <span>{render(blok.content)}</span>}
            <div>
              {blok.buttons.map((item: LinkTypes) => (
                <Button
                  key={item._uid}
                  variant={`${item.secondary_color ? "secondary" : "default"}`}
                >
                  <Link className="button" href={item.link.cached_url}>
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
