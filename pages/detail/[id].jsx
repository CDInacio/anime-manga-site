import { useRouter } from "next/router";
import { getAnimeById } from "../../helpers/api-util";

export default function Detail() {
  const router = useRouter();
  const animeId = router.query.id;
  return <p>oa</p>;
}

export async function getStaticProps(context) {
  const animeId = context.params.id;

  const document = await getAnimeById(animeId);

  return {
    props: {
      anime: document,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
