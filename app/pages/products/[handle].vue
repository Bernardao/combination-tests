<script setup lang="ts">
const mockedProduct = {
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
  title: "My awesome product 1",
  price: "10$",
  description: "My awesome product 1",
};

const mockedProducts = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "My awesome product 1",
    price: "10$",
    link: "#",
    description: "My awesome product 1",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "My awesome product 2",
    price: "15$",
    link: "#",
    description: "My awesome product 2",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "My awesome product 3",
    price: "20$",
    link: "#",
    description: "My awesome product 3",
  },
];
</script>

<template>
  <section>
    <div class="grid grid-cols-2 items-center px-20">
      <NuxtImg
        :src="mockedProduct.image"
        class="rounded-lg shadow-lg -rotate-6"
        alt="Product Image"
        format="webp"
      />
      <div class="rounded-lg shadow-lg p-12 backdrop-blur-2xl">
        <h2 class="text-4xl font-bold mb-6">{{ mockedProduct.title }}</h2>
        <p class="text-gray-500 mb-6">
          {{ mockedProduct.description }}
        </p>

        <button
          class="px-7 py-3 bg-green-600 text-white font-medium text-sm rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Pay {{ mockedProduct.price }}
        </button>
      </div>
    </div>
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
  </section>
</template>
