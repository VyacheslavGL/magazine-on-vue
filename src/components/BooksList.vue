<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-content fluid>
                    <v-layout row>
                        <v-flex xs7 md8>
                            <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
                        </v-flex>
                        <v-flex xs5 md4>
                            <v-select label="Уровень" :items="levels" v-model="level" multiple></v-select>
                        </v-flex>
                    </v-layout>
                </v-content>
            </v-flex>
<!--            Отвечает за поиск-->
            <v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>

                <app-books-list-item :book="book"></app-books-list-item>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import BooksListItem from "./BooksListItem";

    export default {
        name: "BooksList",
        data(){
            return{
                src: 'img',
                searchTerm: null,
                level: [],
                levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
            }
        },
        computed:{
            books(){
                return this.$store.getters.getBooks
            },
            filteredBooks(){
                // Отвечает за поиск
                let books = this.books;
                if(this.searchTerm)
                    books = books.filter(b =>
                        b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0
                    || b.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);

                if(this.level.length)
                    books = books.filter(b => this.level.filter(val => b.level.indexOf(val) !== -1).length >0);

                return books
            }
        },
        components:{
            AppBooksListItem: BooksListItem
        }
    }
</script>

<style scoped>

</style>