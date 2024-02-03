<template>
  <div class="container-fluid p-0">
    <header class="">
      <img src="/images/headerImg.jpg" alt="404" />
    </header>
  </div>
  <div class="container my-5" id="movies">
    <h3 class="my-3 text-center fw-bold"><i>Top Movies</i></h3>
    <div class="row g-5">
      <template v-for="movie in movies" :key="movie.id">
        <div class="col-md-4 h-75" v-if="movie.isTop">
          <img
            :src="movie.imageSrc"
            alt=""
            class="img-fluid w-100 object-fit-cover rounded pb-2"
          />
          <div
            class="d-flex justify-content-around align-items-center border border-danger rounded mt-3"
          >
            <div class="fw-bold">
              {{ movie.year }}
            </div>
            <div class="fw-bold">
              <i>{{ movie.title }}</i>
            </div>
            <div>
              <router-link
                style="color: #c12a21"
                :to="`/movies/${movie.id}`"
                class="fs-4"
                title="detail"
                ><i class="fa-solid fa-circle-info"></i
              ></router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const movies = inject("movies");
</script>

<style scoped>
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
.col-md-4 img {
  height: 500px;
  object-fit: cover;
}
</style>
