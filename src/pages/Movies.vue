<template>
  <div class="container my-5" id="movies">
    <h3 class="my-3 text-center fw-bold"><i>Movies</i></h3>
    <div class="row g-5">
      <div class="col-md-4 h-75" v-for="movie in movies" :key="movie.id">
        <img
          :src="movie.imageSrc"
          alt=""
          class="img-fluid w-100 object-fit-cover rounded pb-2"
        />
        <div
          class="d-flex justify-content-around align-items-center border border-danger mt-3 rounded"
        >
          <div class="fw-bold">{{ movie.year }}</div>
          <div class="fw-bold">
            <i>{{ movie.title }}</i>
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
import { inject } from "vue";
import { useRouter } from "vue-router";

const movies = inject("movies");
const router = useRouter();
const detailPage = (id) => {
  // router.push(`/movies/${id}`);
  router.push({ path: `/movies/${id}` });
};
</script>

<style scoped>
.col-md-4 img {
  height: 500px;
  object-fit: cover;
}
</style>
