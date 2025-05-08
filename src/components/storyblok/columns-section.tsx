"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const Columns = ({ blok }: any) => {
  return (
    <div style={{ backgroundColor: blok.bg_color.color }}>
      <div className="container-section py-24" >
        <h2 className="text-left lg:text-center lg:pb-10 text-white">{blok.title}</h2>
        <div
          className={`grid gap-5 lg:gap-10 py-6 ${blok.columns === "4"
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
              className={`flex flex-col gap-2 text-white  ${blok?.text_center && "text-center "
                }`}
              key={item._uid}
            >
              {item.title_karla_font && (
                <h2 style={{ color: "#fff" }} className="text-[20px] uppercase mb-8 text-white">
                  {item.title_karla_font}
                </h2>
              )}

              {item.title && (
                <h2
                  className={`${item.title_karla_font
                    ? "text-[30px] lg:text-[40px] mb-5 text-white"
                    : "text-[20px] uppercase"
                    }`}
                >
                  {item.title}
                </h2>
              )}
              <span
                className={`flex flex-col gap-5 text-white ${blok.half_width && "lg:max-w-[50%]"
                  } ${blok?.text_center && "mx-auto"}`}
              >
                {render(item.content)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
