import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const InstagramField = ({ blok }: any) => {
  return (
    <div className="lg:w-[70%] mx-auto py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        {blok.image_field.map((item: any) => (
          <div
            className="relative w-[90%] mx-auto h-[430px] lg:w-[250px] lg:h-[250px]"
            key={item._uid}
          >
            <Image
              src={item.image.filename}
              alt={item.image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 ">
        <Button variant={"default"}>
          <Link href={"https://www.instagram.com/byggsakert/"}>Följ oss</Link>
        </Button>
      </div>
    </div>
  );
};
