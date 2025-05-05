import { getStoryblokApi } from "@storyblok/react";

export async function getTjanster() {
  let sbParams = {
    version: "draft" as const,
    starts_with: "tjanster",
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}
