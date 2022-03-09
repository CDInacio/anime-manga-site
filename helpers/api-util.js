export async function getAnimeById(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const { data } = await response.json();

  return data;
}

export async function getAnimeInfo(query) {
  const response = await fetch(`${process.env.BASE_URL}/anime?${query}`);
  const { data } = await response.json();

  return data;
}
