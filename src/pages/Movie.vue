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
          <li class="list-group-item fs-5 shadow-sm rounded">
            Release year :
            <span class="ms-2 fw-bold fst-italic" style="color: #c12a21">{{
              movie.year
            }}</span>
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

const route = useRoute();
const movieId = parseInt(route.params.id);
const movies = inject("movies");
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
