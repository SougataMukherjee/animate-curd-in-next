"use server";

import AnimeCard, { AnimeProp } from "../components/AnimCard";

export const fetchAnim = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&linit=8&order=popularity`
  );
  const data = await response.json();
  console.log(data);
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
