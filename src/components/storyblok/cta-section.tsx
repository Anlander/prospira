import { LinkTypes } from "@/types/IfLinkInterface";
import Link from "next/link";

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
        className={`py-44 w-full h-full flex justify-center items-center z-10 gap-5`}
        style={{
          color: `${blok.text_color.color ? blok.text_color.color : "primary"
            }`,
        }}
      >
        <div className="flex flex-col gap-5 text-center lg:max-w-[40%]">
          <h2 className="leading-[64px]">{blok.sub_title}</h2>
          <p>{blok.title}</p>
          <div className="pt-4">
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
