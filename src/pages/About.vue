<template>
  <div class="container my-5">
    <!-- <h4 class="mb-3">About Page</h4> -->
    <div class="row">
      <div class="col-md-7 p-0 mb-4">
        <img
          src="/images/cinema.jpg"
          alt=""
          class="object-fit-cover rounded img-fluid"
        />
      </div>
      <div class="col-md-5">
        <div class="d-flex gap-3">
          <span class="fs-3 fw-bold">~</span>
          <p style="padding-top: 10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            tenetur! Quisquam, ipsa sit. Nam maiores fugiat accusantium et
            nulla, dolorum explicabo deleniti eius suscipit eos quis iure ullam
            vel. Beatae.
          </p>
        </div>
        <div class="d-flex gap-3 d-md-none d-lg-flex">
          <span class="fs-3 fw-bold">~</span>
          <p style="padding-top: 10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            tenetur! Quisquam, ipsa sit. Nam maiores fugiat accusantium et
            nulla, dolorum explicabo deleniti eius suscipit eos quis iure ullam
            vel. Beatae.
          </p>
        </div>

        <h6 class="my-3 fw-bold fs-5" style="margin-left: 37px; color: #c6361c">
          Ready to watch
        </h6>
        <form class="d-flex w-75" role="search" style="margin-left: 37px">
          <input
            style="border-color: #c6361c"
            class="form-control me-2"
            type="search"
            placeholder="Email address"
          />
          <button
            class="btn rounded text-white"
            type="submit"
            style="background-color: #c6361c"
          >
            <i class="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
