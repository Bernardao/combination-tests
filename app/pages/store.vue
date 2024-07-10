<template>
  <div class="container">
    <h1 class="text-xl text-green-500">Hello Nuxt STORE with TailwindCSS</h1>
    <HeroBanner />
    <div class="flex my-20">
      <ProductCard
        v-for="{ node } in filteredData"
        :key="node.id"
        :image="node.images.edges[0].node.src"
        :title="node.title"
        :price="`${node.priceRange.maxVariantPrice.amount} ${node.priceRange.maxVariantPrice.currencyCode}`"
        :link="`products/${node.handle}`"
        :description="node.description"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProductsQuery } from "../graphql/getProductsQuery";

const variables = { first: 3 };
const { data } = await useAsyncQuery(getProductsQuery, variables);
const filteredData = data.value.products.edges;

if (import.meta.server) {
  // if (import.meta.client) {
  console.log("SERVER Store Index", filteredData);
}
if (import.meta.client) {
  console.log("CLIENT Store Index", filteredData);
}
// const mockedProducts = [
//   {
//     id: 0,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//     title: "My awesome product 1",
//     price: "10$",
//     link: "products/1",
//     description: "My awesome product 1",
//   },
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//     title: "My awesome product 2",
//     price: "15$",
//     link: "products/2",
//     description: "My awesome product 2",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//     title: "My awesome product 3",
//     price: "20$",
//     link: "products/3",
//     description: "My awesome product 3",
//   },
// ];
</script>

<style></style>
