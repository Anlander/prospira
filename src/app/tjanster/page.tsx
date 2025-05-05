import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { getTjanster } from "@/lib/actions/get-tjanster";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";


storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

const page = async () => {
  const data = await getTjanster();
  const settings = await getThemeSettings();
  return (
    <div className="mb-20">
      <div className="relative h-[50vh]">
        <Image
          src={settings.content.image_tjanster.filename}
          fill
          alt="title"
          className="object-cover"
        />
      </div>
      <div className="my-10 lg:my-20 text-center flex flex-col gap-4">
        <h1 className="text-black text-4xl font-bold">
          {settings.content.title_tjanster}
        </h1>
        <span className="max-w-[95%] lg:max-w-[40%] mx-auto">
          {render(settings.content.content_tjanster)}
        </span>
      </div>
      <div
        id="ourservices"
        className="container-section mx-auto justify-center text-center flex flex-col lg:flex-row my-5 lg:my-14 gap-20 px-10"
      >
        <div className="tjanster-container">
          <h2>Privat</h2>
          <div className="flex flex-col gap-3">
            {data.map((item: any) => {
              if (item.content.category.includes("privat"))
                return (
                  <div key={item.id}>
                    <Link href={item.full_slug}>{item.name}</Link>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="tjanster-container">
          <h2>BRF</h2>
          <div className="flex flex-col gap-3">
            {data.map((item: any) => {
              if (item.content.category.includes("brf"))
                return (
                  <div key={item.id}>
                    <Link href={item.full_slug}>{item.name}</Link>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="tjanster-container">
          <h2>Företag</h2>
          <div className="flex flex-col gap-3">
            {data.map((item: any) => {
              if (item.content.category.includes("foretag"))
                return (
                  <div key={item.id}>
                    <Link href={item.full_slug}>{item.name}</Link>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
