import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { getTjanster } from "@/lib/actions/get-tjanster";
import { getTjansterSlug } from "@/lib/actions/get-tjanster-slug";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

type Params = Promise<{ slug: string }>;

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const data = await getTjansterSlug((await params).slug);

  return {
    title: data?.content?.metadata?.title || data?.name,
    description: data?.content?.metadata?.description || "Default description",
  };
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

const page = async ({ params }: { params: Params }) => {
  const data = await getTjansterSlug((await params).slug);
  const allPackages = await getTjanster();
  const settings = await getThemeSettings();

  const sizes = [
    "w-[400px] h-[400px] lg:w-[769px] lg:h-[370px]",
    "w-[400px] h-[400px] lg:w-[371.8px] lg:h-[370px]",
    "w-[400px] h-[400px] lg:w-[371.8px] lg:h-[370px]",
    "w-[400px] h-[400px] lg:w-[371.8px] lg:h-[370px]",
    "w-[400px] h-[400px] lg:w-[371.8px] lg:h-[370px]",
    "w-[400px] h-[400px] lg:w-[371.8px] lg:h-[370px]",
    "w-[400px] h-[400px] lg:w-[769px] lg:h-[370px]",
  ];

  return (
    <div>
      <div className="py-14 lg:py-24 max-w-[95%] lg:max-w-[70%] mx-auto my-14">
        <div className="flex flex-col">
          <div className="flex gap-[5px] my-2 items-center">
            <Link href={"/"}>Hem</Link>/<Link href={"/tjanster"}>Tjänster</Link>
            /<Link href="">{data.name}</Link>
          </div>
          <div className="relative h-[50vh] mb-20">
            <Image
              src={data.content.image?.filename || ""}
              fill
              alt={data.name}
              quality={100}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-14">
            <h1 className="-mt-4">{data.name}</h1>
            <span className="flex flex-col gap-5">
              {render(data?.content?.content)}
            </span>
          </div>
        </div>

        <Link href={"/tjanster"}>
          <ArrowLeft className="fixed bottom-5 left-5 text-4xl w-12 h-12 z-10  rounded-full bg-[white]" />
        </Link>
      </div>
      <div className="relative min-h-[60vh] w-full my-10">
        <Image
          src={settings?.content?.image_tjanster?.filename || ""}
          fill
          alt={"Image"}
          quality={100}
          className="object-cover object-bottom"
        />
        <div className="text-white absolute h-full w-full flex flex-col justify-center items-center text-center bg-black/50">
          <div className="mx-auto text-center flex flex-col gap-5 px-5 lg:px-0 lg:max-w-[40%]">
            <h2 className="lg:max-w-[55%] mx-auto text-[37px]">
              {settings.content.cta_title}
            </h2>
            <span className="hidden lg:block">
              {render(settings.content.cta_content)}
            </span>
            <div className="mt-5">
              <Link
                href={"/kontakt"}
                className="button-hover px-5 py-2 bg-[#f15a39] text-white rounded-full"
              >
                {settings.content.cta_title_link}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%]  mx-auto my-12 lg:my-40">
        <h4 className="text-[20px] uppercase mb-4 lg:mb-12 tracking-[4px] text-center ">
          {data.content.subtitle}
        </h4>
        <div className="flex flex-row justify-center  w-full flex-wrap gap-6">
          {data?.content?.image_block?.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative ${sizes[index % sizes.length]}`}
            >
              <Image
                src={item.image.filename}
                alt={item.image.filename}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-20">
        <h4 className="text-[20px] uppercase mb-4 lg:mb-12 tracking-[4px] text-center ">
          Andra tjänster
        </h4>

        <div className="lg:grid lg:grid-cols-4 w-[90%] lg:w-[80%] gap-5 mx-auto ">
          {allPackages
            .filter((item: any) =>
              item.content.category.some((cat: string) =>
                data.content.category.includes(cat)
              )
            )
            .slice(0, 4)
            .map((item: any) => (
              <div key={item.id} className="mb-4 lg:mb-0">
                <Link href={`/${item.full_slug}`}>
                  <div className="relative w-full h-[300px] lg:h-[300px]">
                    <Image
                      src={item.content.image.filename}
                      alt={item.content.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center pt-2">{item.name}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
