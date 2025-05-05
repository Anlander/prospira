import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getData(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams);

  return data.data.story;
}
