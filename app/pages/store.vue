<template>
  <div class="container">
    <h1 class="text-xl text-green-500">Hello Nuxt STORE with TailwindCSS</h1>
    <HeroBanner />
    <div class="flex my-20">
      <ProductCard
        v-for="{ id, image, title, price, link, description } in mockedProducts"
        :key="id"
        :image="image"
        :title="title"
        :price="price"
        :link="link"
        :description="description"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const mockedProducts = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "My awesome product 1",
    price: "10$",
    link: "products/1",
    description: "My awesome product 1",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "My awesome product 2",
    price: "15$",
    link: "products/2",
    description: "My awesome product 2",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "My awesome product 3",
    price: "20$",
    link: "products/3",
    description: "My awesome product 3",
  },
];
</script>

<style></style>
