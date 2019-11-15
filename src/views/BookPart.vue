<template>
    <v-container grid-list-md v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 v-if="finishedDate">
                <v-card>
                    <v-responsive>
                        <v-img src="https://firebasestorage.googleapis.com/v0/b/information-portal-1524f.appspot.com/o/bigstock-Completed-41677744.jpg?alt=media&token=993e5337-157c-4c80-accd-7c1db5f56526" max-width="350px"></v-img>
                    </v-responsive>
                </v-card>
                <v-card-title property-title>
                    <div class="headline">
                        Я закончил читать эту часть {{finishedDate | formattedDate}}
                    </div>
                </v-card-title>
                <v-card-actions>
                    <span>Моя оценка</span>
                    <v-rating v-model="savedRating" color="success" readonly large half-increments></v-rating>
                </v-card-actions>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                <!--                Content-->
                <book-part-content :part="part"></book-part-content>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-words :words="part.words"></book-part-words>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1 class="text-sm-center">
                <v-dialog v-model="finishDialog" persistent max-width="600px">
                    <v-btn v-if="!finishedDate" slot="activator" color="success" dark @click="finishDialog = true">
                        <v-icon>check</v-icon>Я закончил читать эту часть!
                    </v-btn>
                    <v-card>
                        <v-responsive>
                            <v-img src="https://firebasestorage.googleapis.com/v0/b/information-portal-1524f.appspot.com/o/bigstock-Completed-41677744.jpg?alt=media&token=993e5337-157c-4c80-accd-7c1db5f56526" max-width="350px"></v-img>
                        </v-responsive>
                        <v-card-title property-title>
                            <div class="headline">
                                Я закончил читать эту часть!
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <span>Моя оценка</span>
                            <v-rating v-model="rating" color="success" half-increments large></v-rating>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" dark text @click.native="finishDialog = false">
                                <v-icon>close</v-icon>Закрыть
                            </v-btn>
                            <v-btn color="success" dark text @click.native="finishWork">
                                <v-icon>check</v-icon>Я закончил работу!
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import BookPartContent from "../components/BookPartContent";
    import BookPartWords from "../components/BookPartWords";

    export default {
        components: {
            BookPartContent,
            BookPartWords
        },
        props: {
            "bookId": {
                type: String,
                required: true
            },
            "partId": {
                type: String,
                required: true
            }
        },
        data() {
            return {
                part: null,
                finishDialog: false,
                rating:0
            }
        },
        computed: {
            finishedDate(){
                return this.$store.getters.userData.books[this.bookId].parts[this.partId].finishedDate
            },
            savedRating(){
                return this.$store.getters.userData.books[this.bookId].parts[this.partId].rating
            }
        },
        created() {
            Vue.$db.collection('BookParts')
                .where('bookId', '==', this.bookId)
                .where('bookPartId', '==', this.partId)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(s => {
                        this.part = s.data()
                    })

                })
                .then(() => {
                    this.$store.dispatch('UPDATE_USER_BOOK_PART_STATS', {bookId: this.bookId, partId: this.partId})
                })
                .catch(error => console.log(error))

        },
        methods:{
            finishWork(){
                this.$store.dispatch('FINISH_USER_BOOK_PART', {bookId: this.bookId, partId: this.partId, rating: this.rating});
                this.finishDialog = false;
            }
        },
        name: "BookPart"
    }
</script>

<style scoped>

</style>