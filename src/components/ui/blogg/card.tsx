import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { render } from "storyblok-rich-text-react-renderer";

interface CardProps {
  title: string;
  image?: string;
  link: string;
  uuid: any;
  content?: any;
}

export const Card = ({ title, link, image, uuid, content }: CardProps) => {
  return (
    <Link
      href={link}
      key={uuid}
      className="min-h-[520px] border flex flex-col gap-2 rounded-md relative transition-all duration-300 hover:shadow-md"
    >
      <div className="w-full h-[300px] relative">
        <Image
          src={image || ""}
          fill
          alt={title}
          className="object-cover "
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h4 className="font-bold">{title}</h4>
        {content && (
          <span className="line-clamp-2 render-blogg-content">
            {render(content)}
          </span>
        )}
      </div>
      <ArrowRight className="absolute right-5 bottom-5" />
    </Link>
  );
};
