<template>
  <div class="container my-4">
    <div class="row mt-5">
      <div class="col-md-6">
        <div class="position-relative">
          <img
            class="rounded"
            :src="movie.imageSrc"
            alt=""
            style="width: 100%; height: 80vh; object-fit: cover"
          />
          <div class="position-absolute" style="top: 0; right: 0">
            <!-- <router-link
              :to="`/movies/${movie.id}`"
              class="btn btn-sm btn-info my-3 mx-1"
              >Overview</router-link
            > -->
            <router-link
              @click="handleOtherButtonClick"
              style="background-color: #c12a21"
              :to="{ name: 'movieOverview', params: { id: movie.id } }"
              class="btn btn-sm text-white my-3"
              >Overview</router-link
            >
            <router-link
              @click="handleOtherButtonClick"
              style="background-color: #c12a21"
              :to="{ name: 'movieTrailer', params: { id: movie.id } }"
              class="btn btn-sm text-white my-3 mx-1"
              >Trailer</router-link
            >
            <router-link
              @click="handleOtherButtonClick"
              style="background-color: #c12a21"
              :to="{ name: 'movieArtists', params: { id: movie.id } }"
              class="btn btn-sm text-white my-3 me-1"
              >Artists</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-md-6 ps-5">
        <ul class="list-group list-group-flush mb-5">
          <li class="list-group-item fs-5 shadow-sm rounded mb-1">
            Title :
            <span class="ms-3 fw-bold fst-italic" style="color: #c12a21">{{
              movie.title
            }}</span>
          </li>
          <li class="list-group-item fs-5 shadow-sm rounded mb-1">
            Category :
            <span class="ms-3 fw-bold fst-italic" style="color: #c12a21">{{
              movie.category
            }}</span>
          </li>
          <li class="list-group-item fs-5 mb-1 shadow-sm rounded">
            Release year :
            <span class="ms-2 fw-bold fst-italic" style="color: #c12a21">{{
              movie.year
            }}</span>
          </li>
          <li class="list-group-item fs-5 shadow-sm rounded">
            <span class="ms-2 fw-bold fst-italic" style="color: #c12a21">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill text-warning me-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </span>
          </li>
        </ul>
        <!-- <span>ID : {{ movie.id }}</span> -->
        <router-view></router-view>

        <button
          title="back"
          class="btn btn-sm text-white mt-2 float-end"
          @click="goBack"
          style="background-color: #c6361c"
        >
          <i class="fa-solid fa-backward"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useMovieStore } from "./../store/movie";
import { storeToRefs } from "pinia";

const movieStore = useMovieStore();
const { movies } = storeToRefs(movieStore);

const route = useRoute();
const movieId = parseInt(route.params.id);
// const movies = inject("movies");
const router = useRouter();

const movie = computed(() => {
  return movies.value.find((movie) => {
    return movie.id == movieId;
  });
});

// const goBack = () => {
//   router.go(-1);
// };

let backSteps = 1;

const goBack = () => {
  router.go(-backSteps);
};

const handleOtherButtonClick = () => {
  backSteps++;
};
</script>

<style scoped></style>
