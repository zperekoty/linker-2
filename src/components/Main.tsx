import type { FunctionComponent, JSX } from "preact";

import { Card } from "./";
import { TG, VK, IG } from "../../svg";
import { images } from "../assets";
import type { cardProps } from "../types";

const Main: FunctionComponent = (): JSX.Element => {
  const cards: cardProps[] = [
    {
      img: images.card_details,
      title: "Card Details",
      description: "Card Details page from Frontend Mentor",
      source: "https://github.com/zperekoty/card-details",
      url: "https://card-details-three.vercel.app/",
    },
    {
      img: images.kalina,
      title: "Kalina",
      description: "Website for pizzeria and sushi bar",
      source: "https://github.com/zperekoty/sushinyaki-frontend",
      url: "https://kalina-kan.vercel.app/",
    },
    {
      img: images.kantimber,
      title: "KanTimber",
      description: "Lumber website ver 2.0",
      source: "https://github.com/zperekoty/kantimber",
      url: "https://kantimber.vercel.app/",
    },
    {
      img: images.kanforest,
      title: "KanForest",
      description: "Lumber website",
      source: "https://github.com/zperekoty/kanforest",
      url: "https://kanforest.vercel.app/",
    },
    {
      img: images.password_storage,
      title: "Password Storage",
      description: "Password Storage project",
      source: "https://github.com/zperekoty/password-storage",
      url: "https://pst-zperekoty.vercel.app/signin",
    },
  ];

  const cardsSocials: cardProps[] = [
    {
      title: "Telegram",
      description: "Message me in Telegram",
      url: "https://t.me/zperekoty",
      socialLogo: (
        <TG classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] w-full h-[200px]" />
      ),
      socialIcon: (
        <TG classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] mr-[10px]" />
      ),
      social: true,
    },
    {
      title: "Instagram",
      description: "DM me in Telegram",
      url: "https://instagram.com/z.perekoty",
      socialLogo: (
        <IG classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] w-full h-[200px]" />
      ),
      socialIcon: (
        <IG classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] mr-[10px]" />
      ),
      social: true,
    },
    {
      title: "VKontakte",
      description: "Message me in VKontakte",
      url: "https://vk.com/z.perekoty",
      socialLogo: (
        <VK classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] w-full h-[200px]" />
      ),
      socialIcon: (
        <VK classes="transition-all ease-in-out duration-300 fill-[#191308] dark:fill-[#F7F7FF] mr-[10px]" />
      ),
      social: true,
    },
  ];

  return (
    <main class="flex justify-center items-center py-6 px-[30px] md:px-[200px] w-full flex-col lg:flex-row flex-nowrap lg:flex-wrap">
      <div class="flex justify-center items-center w-full after:w-full after:h-[4px] after:bg-gradient-to-r from-[#00A6FB] via-[#B388EB] to-[#453F78] uppercase text-xl text-[#191308] dark:text-[#F7F7FF] text-center flex-col">
        <h1>projects</h1>
      </div>

      {cards.map((card) => (
        <Card
          img={card.img}
          title={card.title}
          description={card.description}
          source={card.source}
          url={card.url}
        />
      ))}

      <div class="flex justify-center items-center w-full after:w-full after:h-[4px] after:bg-gradient-to-r from-[#00A6FB] via-[#B388EB] to-[#453F78] uppercase text-xl text-[#191308] dark:text-[#F7F7FF] text-center flex-col">
        <h1>socials</h1>
      </div>

      {cardsSocials.map((social) => (
        <Card
          social={social.social}
          title={social.title}
          description={social.description}
          url={social.url}
          socialIcon={social.socialIcon}
          socialLogo={social.socialLogo}
        />
      ))}
    </main>
  );
};

export default Main;
