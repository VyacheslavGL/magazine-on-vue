<template>
    <div>
        <app-bookslist></app-bookslist>
    </div>
</template>

<script>
    import BooksList from "../components/BooksList";

    export default {
        name: "Books",
        components:{
            AppBookslist: BooksList
        }
    }
</script>

<style scoped>

</style>