import { LinkTypes } from "@/types/IfLinkInterface";
import Link from "next/link";
import Image from 'next/image';
import { render } from "storyblok-rich-text-react-renderer";

export const CTA = ({ blok }: any) => {
  return (
    <div className={`${blok.full_width ? "mt-10" : "h-full mx-auto relative"}`} style={{ background: `${blok.bg_color.color}` }}>
      {blok.opacity_color.color && (
        <div
          className="w-full h-full opacity-20"
          style={{ background: `${blok.opacity_color.color}` }}
        />
      )}
      <div
        className={`py-24 lg:py-32 w-full h-full flex justify-center items-center z-10 gap-5`}
        style={{
          color: `${blok.text_color.color ? blok.text_color.color : "primary"
            }`,
        }}
      >
        <div className="flex flex-col gap-5 text-center lg:max-w-[40%]">
          {blok.top_logo &&
            <Image src={blok.logo.filename} className="flex mx-auto items-center justify-center py-4" width={200} height={200} alt="Prospiro" />
          }
          <h2 className="leading-[64px]">{blok.sub_title}</h2>
          <span className="flex gap-2 flex-col render-text">{render(blok.title)}</span>
          <div className="pt-4 flex gap-2 justify-center items-center">
            {blok.buttons.map((item: LinkTypes) => (
              <button
                key={item._uid}
                className={`${item.secondary_color ? "secondary-button" : "primary-button"}`}
                style={{ color: "#fff" }}
              >
                <Link href={item.link.cached_url}  >{item.title}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};
