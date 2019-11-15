<template>
    <div>
        <v-card color="accent" class="white--text">
            <v-card-title primary-title class="headline">{{part.title}}</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="primary" v-if="isUserBookLoaded" :to="{name: 'bookPart', params: {bookId:bookId, partId:part.id}}">Открыть</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        props: {
            'part': {
                type: Object,
                required: true
            },
            "bookId": {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapGetters(['isUserAuthenticated', 'userData', 'getProcessing']),
            isUserBookLoaded(){
                return this.isUserAuthenticated && !this.getProcessing && !!this.userData.books[this.bookId]
            }
        },
        name: "BookPartListItem"
    }
</script>

<style scoped>

</style>