import type { FunctionComponent, JSX } from "preact";

import { GitHub } from "../../svg";
import type { cardProps } from "../types";

const Card: FunctionComponent<cardProps> = ({
  title,
  img,
  description,
  source,
  url,
  social,
  socialIcon,
  socialLogo,
}): JSX.Element => (
  <section class="flex justify-center items-center flex-col w-[70%] lg:w-[33%] p-1 bg-gradient-to-br from-[#00A6FB] to-[#453F78] via-[#B388EB] mt-[40px] lg:m-5">
    <div class="flex justify-center items-center p-3 bg-white dark:bg-black transition-all ease-in-out duration-300 flex-col text-center w-full">
      {social ? (
        <div>{socialLogo}</div>
      ) : (
        <img class="w-full h-[200px]" src={img} alt={`${title}_img`} />
      )}

      <h1 class="mt-3 text-lg text-[#191308] dark:text-[#F7F7FF] font-medium transition-all ease-in-out duration-300 object-cover">
        {title}
      </h1>

      <p class="mt-3 text-[#191308] text-xs lg:text-base dark:text-[#F7F7FF] transition-all ease-in-out duration-300">
        {description}
      </p>

      <div class="mt-3 flex items-center justify-center">
        <a
          href={url}
          class={`flex justify-center items-center rounded-lg p-3 transition-all ease-in-out duration-300 hover:bg-[#00A6FB] text-[#191308] dark:text-[#F7F7FF] ${
            social ? "mx-auto" : "mr-3"
          } text-sm lg:text-base`}
          target="_blank"
        >
          {social && socialIcon}

          {social ? `Open ${title}` : "Project link"}
        </a>

        {source && (
          <a
            href={source}
            class="flex justify-center items-center rounded-lg p-3 transition-all ease-in-out duration-300 hover:bg-[#00A6FB] text-[#191308] dark:text-[#F7F7FF] text-sm lg:text-base"
            target="_blank"
          >
            <GitHub classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] mr-[10px]" />{" "}
            Source
          </a>
        )}
      </div>
    </div>
  </section>
);

export default Card;
