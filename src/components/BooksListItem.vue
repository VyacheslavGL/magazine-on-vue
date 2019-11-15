<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <v-layout row>
                <v-flex xs4 md3>
<!--                    <v-img src="../img/3.jpg" height="100px"></v-img>-->
                    <v-img :src="book.imageUrl" height="100px"></v-img>
                    <div class="text-sm-center">
                        <v-btn elevation="0" color="info">
                            <v-icon left>visibility</v-icon> Youtube
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
                        <!--<v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                        <div class="ml-1">
                            <span>{{book.rating}}</span>
                            &lt;!&ndash;                                      <span>({{book.ratingsCount}})</span>&ndash;&gt;
                        </div>-->
                        <v-spacer></v-spacer>
                        <v-btn class="primary" elevation="2" :to="{name: 'book', params:{id:book.id}}">Открыть</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

    import * as bookHelper from '../helpers/book'

    export default {
        props:{
            "book":{
                type:Object,
                required:true
            }
        },
        name: "BooksListItem",
        methods:{
            getBookLevel: bookHelper.getBookLevel
        }
    }
</script>

<style scoped>

</style>