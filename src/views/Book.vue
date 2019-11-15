<template>
    <v-container grid-list-md v-if="book">
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>

                <book-details :book="book"></book-details>

            </v-flex>
            <v-flex v-for="part in book.parts" :key="part.id" xs12 sm10 md8 offset-sm1 offset-md2>

            <book-part-list-item :part="part" :bookId="book.id"></book-part-list-item>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import BookDetails from '../components/BookDetails'
    import BookPartListItem from '../components/BookPartListItem'

    export default {
        components: {BookDetails, BookPartListItem},
        props: {
            'id': {
                type: String,
                required: true
            }
        },
        name: "Book",
        computed: {
            book() {
                // console.log(this.$store);
                return this.$store.getters.getBooks.find(b => b.id === this.id)
            }
        }
    }
</script>

<style scoped>

</style>