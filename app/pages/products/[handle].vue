<script setup lang="ts">
import { getProductQuery } from "../../graphql/getProductQuery.ts";
// import { getProductQuery } from "/graphql/getProductQuery.ts";
const route = useRoute();
console.log("Handle", route);
const { data: product } = await useAsyncQuery(getProductQuery, {
  handle: route.params.handle,
});

console.log("Product", product);
const price = computed(
  () =>
    `${product.value.productByHandle.priceRange.maxVariantPrice.amount} ${product.value.productByHandle.priceRange.maxVariantPrice.currencyCode}`
);

const { data: related } = await useAsyncQuery(getProductsQuery, {
  first: 3,
  query: `product_type:${product.value.productByHandle.productType}`,
});
console.log("Related", related);
// const mockedProduct = {
//   image:
//     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//   title: "My awesome product 1",
//   price: "10$",
//   description: "My awesome product 1",
// };

// const mockedProducts = [
//   {
//     id: 0,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//     title: "My awesome product 1",
//     price: "10$",
//     link: "#",
//     description: "My awesome product 1",
//   },
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//     title: "My awesome product 2",
//     price: "15$",
//     link: "#",
//     description: "My awesome product 2",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
//     title: "My awesome product 3",
//     price: "20$",
//     link: "#",
//     description: "My awesome product 3",
//   },
// ];
</script>

<template>
  <section>
    <div class="grid grid-cols-2 items-center px-20">
      <!-- :src="mockedProduct.image" -->
      <NuxtImg
        :src="product.productByHandle.images.edges[0].node.src"
        class="rounded-lg shadow-lg -rotate-6"
        alt="Product Image"
        format="webp"
      />
      <div class="rounded-lg shadow-lg p-12 backdrop-blur-2xl">
        <h2 class="text-4xl font-bold mb-6">
          <!-- {{ mockedProduct.title }} -->
          {{ product.productByHandle.title }}
        </h2>
        <p class="text-gray-500 mb-6">
          <!-- {{ mockedProduct.description }} -->
          {{ product.productByHandle.description }}
        </p>

        <button
          class="px-7 py-3 bg-green-600 text-white font-medium text-sm rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Pay
          <!-- {{ mockedProduct.price }}-->
          {{ price }}
        </button>
      </div>
    </div>
    <div class="related-products flex my-20">
      <ProductCard
        v-for="{ node } in related.products.edges"
        :key="node.id"
        :image="node.images.edges[0].node.src"
        :title="node.title"
        :price="`${node.priceRange.maxVariantPrice.amount} ${node.priceRange.maxVariantPrice.currencyCode}`"
        :link="`/products/${node.handle}`"
        :description="node.description"
      />
    </div>
  </section>
</template>
