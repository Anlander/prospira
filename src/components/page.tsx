import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const page = ({ blok, settings }: any) => (
  <div {...storyblokEditable(blok)}>
    {blok &&
      Array.isArray(blok.body) &&
      blok.body.map((nestedBlok: any, index: number) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          settings={settings}
        />
      ))}
  </div>
);

export default page;
