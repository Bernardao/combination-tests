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
import { getProductsQuery } from "~/graphql/getProductsQuery";

const variables = { first: 3 };
const { data } = await useAsyncQuery(getProductsQuery, variables);
const filteredData = data.value.products.edges;
</script>

<style></style>
