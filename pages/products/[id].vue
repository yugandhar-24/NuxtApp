<template>
    <Head>
        <Title>Nuct Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description"></Meta>
    </Head>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params

const url = 'https://fakestoreapi.com/products/' + id
const { data: product } = await useFetch(url, { key: id })
definePageMeta({
    layout: 'products'
})

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not Found', fatal: true })
}


</script>

<style lang="scss" scoped></style>