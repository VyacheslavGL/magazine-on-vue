<template>
    <!--<v-content fluid>
        <v-layout>
            <v-flex>
                <v-list-item>

                    <v-btn>
                        <v-icon>fingerprint</v-icon>
                    <v-list-item-title>Кнопка</v-list-item-title>
                    </v-btn>
                </v-list-item>

            </v-flex>
        </v-layout>
    </v-content>-->
<!--    <v-card
            class="mx-auto"
            color="white"
            width="200px"
    >
        <v-card-text>
            <label>Ваше имя: <input type="text"></label>
        </v-card-text>
    </v-card>-->

  <!--  <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
                <v-card-actions>
                    <v-select v-model="size" :items="items" label="Size"></v-select>
                    <v-spacer></v-spacer>
                </v-card-actions>
                <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                    <v-row>
                        <v-col
                                v-for="n in 9"
                                :key="n"
                                cols="4"
                        >
                            <v-card flat tile>
                                <v-img
                                        :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                        height="150px"
                                ></v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>-->
    <v-container>
        <v-row>
            <v-col cols="12"  >
                <v-row
                        align="start"
                        justify="start"
                        class="grey lighten-5 "
                        style="height: 300px;"

                        wrap
                >
<!--                    <v-card class="mx-auto ma-2" max-width="344" v-for="(item, i) in items" :key="i" >-->
                    <v-card class="mx-auto ma-2" max-width="310" v-for="(item, i) in items" :key="i" >

                        <v-img :src="item.image" height="200px" class="white--text">
                            <v-card-title class="align-end fill-height">Top 10 Australian girls'</v-card-title>
                        </v-img>
<!--                        <v-card-text>{{item.title}}</v-card-text>-->
                        <v-card-text>
                            <span>Number {{item.Number}}</span><br>
                            <span class="text--primary">
                            <span>Whitehaven Beach</span><br>
                            <span>Whitsunday Island, Whitsunday Islands</span><br>
                            <span>Count Likes: {{item.count.length}}</span>
                            </span>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                    text
                                    color="orange"
                            >
                                Добавить
                            </v-btn>
                            <v-btn
                                    text
                                    color="orange"
                            >
                                Купить
                            </v-btn>
                            <v-spacer></v-spacer>

                            <v-btn icon @click="countPush(item.count)">
                                <v-icon>favorite</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>bookmark</v-icon>
                            </v-btn>

                            <!--<v-btn icon>
                                <v-icon>share</v-icon>
                            </v-btn>-->
                        </v-card-actions>

                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AboutList",
        data () {
            return {
                show: false,
                size: 'sm',
                count: 0,
                items: [
                    { title: 'Extra small (2px)', value: 'xs', image: require('../img/1.jpg'), Number: '1', count:[]},
                    { title: 'Small (4px)', value: 'sm', image: require('../img/3.jpg'), Number: '2', count:[]},
                    { title: 'Medium (8px)', value: 'md', image: require('../img/2.jpg'), Number: '7', count:[]},
                    { title: 'Large (16px)', value: 'lg', image: require('../img/4.jpg'), Number: '3', count:[]},
                    { title: 'Extra large (24px)', value: 'xl', image: require('../img/5.jpg'), Number: '4', count:[]},
                    { title: 'Extra large (24px)', value: 'xl', image: require('../img/6.jpg'), Number: '5', count:[]},
                    { title: 'Extra large (24px)', value: 'xl', image: require('../img/7.jpg'), Number: '6', count:[]},
                    { title: 'Extra large (24px)', value: 'xl', image: require('../img/8.jpg'), Number: '9', count:[]},
                    { title: 'Extra large (24px)', value: 'xl', image: require('../img/9.jpg'), Number: '8', count:[]},
                    { title: 'Extra large (24px)', value: 'xl', image: require('../img/10.jpg'), Number: '10', count:[]},
                ],
            }
        },
        methods:{
            countPush(vol){
                let vm = this;
                vm.vol = vol.push(+1);
            }
        }
    }
</script>

<style scoped>

</style>