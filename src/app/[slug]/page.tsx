import { getData } from "@/lib/actions/get-data";
import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { apiPlugin, storyblokInit, StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const data = await getData(pathname);

  return {
    title: data?.content?.metadata?.title || data?.name,
    description: data?.content?.metadata?.description || "Default description",
  };
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

type Params = Promise<{ slug: string }>;
const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  const settings = await getThemeSettings();

  return <StoryblokStory story={story} settings={settings} />;
};

export default Page;
