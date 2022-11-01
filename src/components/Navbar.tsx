import type { FunctionalComponent, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";

import { GitHub, Moon, Sun } from "../../svg";

const Navbar: FunctionalComponent = (): JSX.Element => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");

      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");

      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.theme = theme === "light" ? "dark" : "light";
  };

  return (
    <nav class="sticky top-[1px] flex justify-center items-center py-6 px-[30px] md:px-[200px] w-full">
      <div class="flex justify-between items-center rounded-full bg-gradient-to-r from-[#00A6FB] to-[#453F78] via-[#B388EB] w-full p-4 shadow-lg shadow-black">
        <a
          href="https://github.com/zperekoty"
          target="_blank"
          class="flex justify-center items-center rounded-lg p-3 transition-all ease-in-out duration-300 hover:bg-white dark:hover:bg-black shadow-none hover:shadow-md hover:shadow-black"
        >
          <h1 class="flex justify-center items-center text-sm md:text-base lg:text-lg 2xl:text-2xl text-[#453F78] dark:text-[#453F78] font-medium flex-row">
            <GitHub classes="mr-[10px] transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF]" />{" "}
            <p class="text-sm md:text-base lg:text-lg 2xl:text-2xl text-[#191308] dark:text-[#F7F7FF] transition-all ease-in-out duration-300">
              zperekoty
            </p>
          </h1>
        </a>

        <div class="flex justify-center items-center">
          <button
            class="flex justify-center items-center rounded-[50%] p-3 transition-all ease-in-out duration-300 hover:bg-white dark:hover:bg-black shadow-none hover:shadow-md hover:shadow-black mr-0 md:mr-[10px]"
            onClick={changeTheme}
          >
            {theme === "light" ? (
              <Moon classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF]" />
            ) : (
              <Sun classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF]" />
            )}
          </button>

          <a
            href="https://github.com/zperekoty/linker-2"
            target="_blank"
            class="flex justify-center items-center rounded-lg p-3 transition-all ease-in-out duration-300 hover:bg-white dark:hover:bg-black shadow-none hover:shadow-md hover:shadow-black"
          >
            <GitHub classes="mr-[10px] transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF]" />{" "}
            <p class="uppercase text-sm md:text-base lg:text-lg 2xl:text-2xl text-[#191308] dark:text-[#F7F7FF] transition-all ease-in-out duration-300">
              source
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
