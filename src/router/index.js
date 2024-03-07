import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./../pages/Home.vue");
const About = () => import("./../pages/About.vue");
const Movie = () => import("./../pages/Movie.vue");
const Movies = () => import("./../pages/Movies.vue");
const Overview = () => import("./../pages/Overview.vue");
const Trailer = () => import("./../pages/Trailer.vue");
const Artists = () => import("./../pages/Artists.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies,
  },
  {
    path: "/movies/:id",
    name: "movie",
    component: Movie,
    redirect: { name: "movieOverview" },
    children: [
      {
        path: "overview",
        name: "movieOverview",
        component: Overview,
      },
      {
        path: "trailer",
        name: "movieTrailer",
        component: Trailer,
      },
      {
        path: "artists",
        name: "movieArtists",
        component: Artists,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
