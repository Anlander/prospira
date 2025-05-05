import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getTjansterSlug(slug: string) {
  let sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/tjanster/${slug}`, sbParams);

  return data.data.story;
}
