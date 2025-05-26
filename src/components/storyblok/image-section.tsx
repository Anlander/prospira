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
        <div className="lg:min-h-[550px] grid gap-2 grid-cols-1 py-10 lg:py-10 lg:grid-cols-2 items-center">
          <div
            className={`w-full h-full lg:h-[550px] relative ${blok.image_right && "order-1"}`}
          >
            <Image
              src={blok.image.filename || ""}
              alt={blok.title}
              fill
              className={`object-contain  ${blok.image_right ? "p-0 lg:p-2 pr-0" : "p-0 lg:p-2 pl-0"}`}
            />
          </div>
          <div
            className={`flex flex-col gap-5 lg:max-w-[95%] xl:max-w-[85%] justify-center mt-10 ${blok.text_white && "text-white"
              }`}
          >
            {blok.sub_title && <h3>{blok.sub_title}</h3>}
            {blok.title && <h2>{blok.title}</h2>}
            {blok.content && <span className="flex gap-2 flex-col">{render(blok.content)}</span>}
            <div>
              {blok.buttons.map((item: LinkTypes) => (
                <Button
                  key={item._uid}
                  style={{ color: "white" }}
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
