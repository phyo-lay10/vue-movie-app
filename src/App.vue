<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
    <div class="container-fluid">
      <!-- <RouterLink to="/" class="navbar-brand" href="#">VueFlix</RouterLink> -->
      <router-link
        class="navbar-brand text-white fw-bold"
        :to="{ name: 'home' }"
        >VueFlix</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            :to="{ name: 'movies' }"
            class="nav-link active text-white"
            aria-current="page"
            >Movies</router-link
          >
          <!-- <router-link to="/movies" class="nav-link active" aria-current="page"
            >Movies</router-link
          > -->
          <RouterLink
            to="/about"
            class="nav-link active text-white"
            aria-current="page"
            href="#"
            >About</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { provide, ref } from "vue";
const movies = ref([
  {
    id: 1,
    title: "IT Chapter2",
    imageSrc: "/images/it.jpg",
    year: 2017,
    isTop: true,
  },
  {
    id: 2,
    title: "IP Man",
    imageSrc: "/images/ipman.jpg",
    year: 2018,
    isTop: true,
  },
  {
    id: 3,
    title: "Iron Man",
    imageSrc: "/images/ironman.jpg",
    year: 2019,
    isTop: true,
  },
  {
    id: 4,
    title: "Turbo",
    imageSrc: "/images/turbo.jpg",
    year: 2023,
    isTop: false,
  },
  {
    id: 5,
    title: "Kunfu Panda",
    imageSrc: "/images/panda.jpg",
    year: 2020,
    isTop: false,
  },
  {
    id: 6,
    title: "Nowhere",
    imageSrc: "/images/Nowhere.jpg",
    year: 2015,
    isTop: false,
  },
  {
    id: 7,
    title: "Concussion",
    imageSrc: "/images/concussion.jpg",
    year: 2022,
    isTop: false,
  },
  {
    id: 8,
    title: "Pele",
    imageSrc: "/images/pele.jpg",
    year: 2010,
    isTop: false,
  },
  {
    id: 9,
    title: "Transformers",
    imageSrc: "/images/transformers.jpg",
    year: 2024,
    isTop: false,
  },
]);

provide("movies", movies);
</script>

<style scoped>
nav {
  /* background-color: #c12a21; */
  /* background-color: #c6361c; */
  background-color: #c73c1b;
}
h5 {
  color: firebrick;
}
header {
  height: 92vh;
}
header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
