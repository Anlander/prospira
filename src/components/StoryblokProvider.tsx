"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { HeroSection } from "./storyblok/hero-section";
import { ImageSection } from "./storyblok/image-section";
import { Space } from "./storyblok/space-section";
import { CTA } from "./storyblok/cta-section";
import { Columns } from "./storyblok/columns-section";
import { ContactForm } from "./ui/form/contact-form";
import { CardColumns } from "./storyblok/card-columns-section";
import { TableSection } from "./storyblok/table-section";
import { TableColumnSection } from "./storyblok/table-column-section";
import { TjansterGallery } from "./storyblok/tjanster-gallery";
import { GalleryLinkSection } from "./storyblok/gallery-link-section";
import { Filter } from "./storyblok/filter";
import { TeamSection } from "./storyblok/team-section";
import { RecoSection } from "./storyblok/reco-section";
import { InstagramField } from "./storyblok/instagram-field";
import { ApplicationForm } from "./application-form";

storyblokInit({
  components: {
    page: page,
    hero: HeroSection,
    image_text: ImageSection,
    space: Space,
    CTA: CTA,
    columns: Columns,
    form: ContactForm,
    card_columns: CardColumns,
    table: TableSection,
    table_columns: TableColumnSection,
    tjanster_gallery: TjansterGallery,
    gallery_link: GalleryLinkSection,
    filter: Filter,
    team: TeamSection,
    reco: RecoSection,
    instagram_block: InstagramField,
    application_form: ApplicationForm,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
