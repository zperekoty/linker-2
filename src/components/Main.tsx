import type { FunctionComponent, JSX } from "preact";

import { Card } from "./";
import { images } from "../assets";
import type { cardProps } from "../types";

const Main: FunctionComponent = (): JSX.Element => {
  const cards: cardProps[] = [
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

  return (
    <main class="flex justify-center items-center py-6 px-[30px] md:px-[200px] w-full flex-col lg:flex-row flex-nowrap lg:flex-wrap">
      {cards.map((card) => (
        <Card
          img={card.img}
          title={card.title}
          description={card.description}
          source={card.source}
          url={card.url}
        />
      ))}
    </main>
  );
};

export default Main;
