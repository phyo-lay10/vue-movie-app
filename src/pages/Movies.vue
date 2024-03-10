<template>
  <div class="container my-5" id="movies" style="min-height: 71vh">
    <h3 class="my-3 text-center fw-bold"><i>Movies</i></h3>
    <div class="mb-4 d-flex gap-3">
      <select
        v-model="category"
        @change="filterByCategory"
        class="form-control w-75"
      >
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Cartoon">Cartoon</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Advanture">Advanture</option>
        <option value="Biopic">Biopic</option>
      </select>
      <input
        type="text"
        placeholder="search "
        v-model="searchInput"
        class="form-control w-75"
        @input="filterByName"
      />
    </div>
    <div class="row g-5">
      <div class="col-md-4 h-75" v-for="movie in movieList" :key="movie.id">
        <img
          :src="movie.imageSrc"
          alt=""
          class="img-fluid w-100 object-fit-cover rounded pb-2"
        />
        <div
          class="d-flex justify-content-around align-items-center border border-danger mt-3 rounded"
        >
          <div class="fw-bold">
            <i>{{ movie.title }}</i>
          </div>
          <div class="d-flex">
            <svg
              v-for="star in movie.stars"
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
            <svg
              v-for="star in 5 - movie.stars"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star text-warning me-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
              />
            </svg>
          </div>
          <!-- <router-link
            :to="`/movies/${movie.id}`"
            class="btn btn-sm btn-primary mx-2"
            >Detail</router-link
          > -->
          <button
            @click="detailPage(movie.id)"
            title="detail"
            class="border-0 mx-2 fs-4 bg-transparent"
            style="color: #c12a21"
          >
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <!-- <router-link
            :to="{ name: 'movieArtists', params: { id: movie.id } }"
            class="btn btn-sm btn-primary"
            >Artists</router-link
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { inject } from "vue";
// const movies = inject("movies");
import { useRouter } from "vue-router";

import { useMovieStore } from "./../store/movie";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const movieStore = useMovieStore();
const { movies } = storeToRefs(movieStore);

const router = useRouter();
const detailPage = (id) => {
  // router.push(`/movies/${id}`);
  router.push({ path: `/movies/${id}` });
};

const category = ref("All");
const movieList = ref(movies.value);

// filter by category
const filterByCategory = () => {
  if (category.value === "All") {
    movieList.value = movies.value;
  } else {
    movieList.value = movies.value.filter((movie) => {
      return movie.category === category.value;
    });
  }
};

// filter by name
const searchInput = ref();
const filterByName = () => {
  movieList.value = movies.value.filter((movie) => {
    return movie.title.toLowerCase().includes(searchInput.value.toLowerCase());
  });
};
</script>

<style scoped>
.col-md-4 img {
  height: 500px;
  object-fit: cover;
}
</style>
