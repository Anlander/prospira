import type { Metadata } from "next";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Header } from "@/components/ui/header/header";
import "./globals.scss";
import "./theme.scss";
import "./fonts.css";
import { Footer } from "@/components/ui/footer/footer";
import { getData } from "@/lib/actions/get-data";
import Script from "next/script";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const data = await getData(slugName);

  return {
    title: data?.content?.metadata?.title || data?.name,
    description: data?.content?.metadata?.description || "Default description",
  };
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="sv">

        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider >
  );
}
