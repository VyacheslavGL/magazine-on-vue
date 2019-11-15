<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <v-layout row>
                <v-flex xs4 md3>
                    <!--                    <v-img class="mx-2" src="../img/3.jpg" height="150px"></v-img>-->
                    <v-img class="mx-2" :src="book.imageUrl" height="150px"></v-img>
                    <div class="text-xs-center">
                        <v-btn elevation="0" color="info">
                            <v-icon left>visibility</v-icon>
                            Youtube
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex sx8 md9>
                    <v-card-title>
                        <div>
                            <div class="headline">{{book.title}}</div>
                            <div>{{book.description}}</div>
                            <v-divider class="white"></v-divider>
                            <div>Уровень: {{getBookLevel(book.level)}}, {{book.parts.length}} частей</div>
                            <!--                                      <div>Райтинг: {{book.rating}}</div>-->
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <!--  <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                          <div class="ml-1">
                              <span>{{book.rating}}</span>
                              &lt;!&ndash;                                      <span>({{book.ratingsCount}})</span>&ndash;&gt;
                          </div>-->
                        <v-spacer></v-spacer>
                        <v-btn class="primary" elevation="2" v-if="canLoadBook(book.id)" @click="loadBook(book.id)">Загрузить</v-btn>
                        <div v-if="getUserDataBook(book.id)">
                            <v-icon color="white">work_outline</v-icon>
                            Книга скачана {{getBookAddedDate(book.id) | formattedDate}}
                        </div>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

    import * as bookHelper from '../helpers/book'
    import {mapGetters} from 'vuex'

    export default {
        props: {
            'book': {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapGetters(['isUserAuthenticated', 'userData', 'getProcessing']),

        },
        name: "BookDetails",
        methods: {
            getBookLevel: bookHelper.getBookLevel,
            canLoadBook(bookId) {
                let book = this.getUserDataBook(bookId);
                return this.isUserAuthenticated && !this.getProcessing && !book
            },
            getUserDataBook(bookId) {
                return this.userData.books[bookId]
            },
            loadBook(bookId){
                this.$store.dispatch('ADD_USER_BOOK', bookId)
            },
            getBookAddedDate(bookId){
                let book = this.getUserDataBook(bookId);
                return book.addedDate
            }
        }
    }
</script>

<style scoped>

</style>