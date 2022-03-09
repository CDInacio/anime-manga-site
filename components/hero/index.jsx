import Image from "next/image";

import { topAnime } from "../../helpers/data-util";
import { useWindowSize } from "../../hooks/use-windowSize";

function limitString(string = "", limit) {
  let str = string.substring(0, limit);
  let finalString = str + "...";
  return finalString;
}

export default function Hero() {
  const { width } = useWindowSize();

  return (
    <section className="w-full h-[30rem] md:h-[45rem] relative ">
      <Image
        src={topAnime.image_url}
        layout="fill"
        objectFit="cover"
        alt="top anime image"
      />
      <div className=" absolute top-[7rem] left-[1rem] md:left-[7rem] lg:left-[9rem]">
        <h1
          style={{ textShadow: "0px 1px 2px #1B1B1B" }}
          className="text-2xl md:text-5xl font-semibold		text-white"
        >
          {topAnime.title}
        </h1>
        <p
          style={{ textShadow: "0px 1px 1px #000000" }}
          className=" md:block text-white w-2/4 mt-10"
        >
          {width <= 767
            ? limitString(topAnime.synopsis, 200)
            : topAnime.synopsis}
        </p>
      </div>
    </section>
  );
}
