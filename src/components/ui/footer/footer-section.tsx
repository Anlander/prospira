"use client";
import { Socials } from "../socials/socials";

export const FooterSection = ({ props }: any) => {
  return (
    <footer className="flex flex-col gap-5 justify-center items-center min-h-[30vh]" style={{ background: `${props.bg_footer?.color}` }}>
      <div
        className={`flex h-full justify-center mx-auto text-center lg:text-left pb-10 lg:pb-10  pt-4 relative ${props.footer_full_width ? "w-full" : "container-section"
          }`}
        style={{ background: `${props.bg_footer?.color}` }}
      >
        <div className="flex justify-center lg:justify-center items-center mt-10 lg:mt-0">
          <Socials props={props.fields} color={props.header_text_color} />
        </div>
      </div>
      <p className="text-center">Prospiro AB <br />
        orgnr: 559522-4964</p>
      <p>Copyrights Prospiro 2025 ©</p>
    </footer>
  );
};
