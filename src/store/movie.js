import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const movies = ref([
    {
      id: 1,
      title: "IT Chapter2",
      category: "Action",
      imageSrc: "/images/it.jpg",
      year: 2017,
      isTop: true,
      stars: 2,
    },
    {
      id: 2,
      title: "IP Man",
      category: "Action",
      imageSrc: "/images/ipman.jpg",
      year: 2018,
      isTop: true,
      stars: 5,
    },
    {
      id: 3,
      title: "Iron Man",
      category: "Action",
      imageSrc: "/images/ironman.jpg",
      year: 2019,
      isTop: true,
      stars: 4,
    },
    {
      id: 4,
      title: "Turbo",
      category: "Cartoon",
      imageSrc: "/images/turbo.jpg",
      year: 2023,
      isTop: false,
      stars: 3,
    },
    {
      id: 5,
      title: "Kunfu Panda",
      category: "Cartoon",
      imageSrc: "/images/panda.jpg",
      year: 2020,
      isTop: false,
      stars: 5,
    },
    {
      id: 6,
      title: "Nowhere",
      category: "Advanture",
      imageSrc: "/images/Nowhere.jpg",
      year: 2015,
      isTop: false,
      stars: 3,
    },
    {
      id: 7,
      title: "Concussion",
      category: "Fantasy",
      imageSrc: "/images/concussion.jpg",
      year: 2022,
      isTop: false,
      stars: 3,
    },
    {
      id: 8,
      title: "Pele",
      category: "Biopic",
      imageSrc: "/images/pele.jpg",
      year: 2010,
      isTop: false,
      stars: 5,
    },
    {
      id: 9,
      title: "Transformers",
      category: "Action",
      imageSrc: "/images/transformers.jpg",
      year: 2024,
      isTop: false,
      stars: 5,
    },
  ]);

  return { movies };
});
