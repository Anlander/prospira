import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

export const Filter = ({ blok }: any) => {
  const [filterItem, setFilterItem] = useState(blok.filter_fields[0]._uid);

  const handleFilter = (id: any) => {
    setFilterItem(id);
  };
  return (
    <main className="container-section pt-5 pb-10  lg:pb-20 lg:pt-20">
      <div className="text-center">
        <h3 className="text-[20px] uppercase mb-4 lg:mb-8 tracking-[4px]">
          {blok.title}
        </h3>
        <div className="w-[100%] lg:w-[55%] mx-auto">
          {render(blok.content)}
        </div>
      </div>
      <ul className="grid grid-cols-2 lg:flex lg:gap-6 justify-center mt-10 lg:border-b-[1px] border-[#e6e6e6] lg:w-fit mx-auto mb-10 lg:mb-20">
        {blok.filter_fields.map((item: any) => (
          <li
            className={`font-semibold text-[#282828] cursor-pointer pb-4 lg:p-4 transition-all hover:text-[#3f4347cb] text-center lg:text-start mb-6 lg:mb-0 ${
              filterItem === item._uid
                ? "border-b-4 border-[#f15a39]"
                : "border-b-2  border-[#e6e6e6] lg:border-transparent"
            }`}
            onClick={() => handleFilter(item._uid)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        {blok.filter_fields.map(
          (item: any) =>
            filterItem === item._uid && (
              <div
                key={item._uid}
                className="lg:grid grid-cols-2 text-center lg:text-start lg:w-[70%] mx-auto gap-10"
              >
                <div className=" flex flex-col items-center lg:items-start justify-center w-[100%] lg:w-[90%]">
                  <h4 className="text-[22px] font-bold lg:!text-[34px] mb-6">
                    {item.title}
                  </h4>
                  <div className="mb-10">{render(item.content)}</div>
                  <Link href={item.button.cached_url} className="cta-button ">
                    {item.button_title}
                  </Link>
                </div>
                <div className="relative w-[100%] h-[300px] lg:h-[500px] mt-10 lg:mt-0">
                  <Image
                    src={item.image.filename}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </main>
  );
};
