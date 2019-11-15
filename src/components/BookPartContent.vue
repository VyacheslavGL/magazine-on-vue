<template>
    <v-card class="pa-2">
        <div>
            <div class="display-1">{{part.bookTitle}}</div> <!--display-1 - показывает крупный текст-->
            <div class="headline">{{part.partTitle}}</div>  <!--headline - показывает крупный текст, но чуть поменьше-->
            <v-divider class="black"></v-divider>
        </div>
        <div class="text-md-center mt-2 mb-2">
            <youtube :video-id="part.youtube_id" :player-width="playerWidth"></youtube>
        </div>
        <div class="mt-2">
<!--            6 видео 38 минута-->
            <v-slider v-model="fontSize" :label="`Размер шрифта (${fontSize})`" step="1" max="30" min="10" tick-size="15"></v-slider>
            <v-tabs v-model="tabMode" color="primary" fixed-tabs slider-color="success">
                <!--fixed-tabs  - центрирует его по центру-->
                <!--                slider-color - цвет подчеркивания-->
                <v-tab :key="'german'" ripple>
                    Текст с подсказками
                </v-tab>
                <v-tab :key="'sidebyside'" ripple>
                    Параллельно
                </v-tab>
                <v-tab-item :key="'german'">
                    <div v-for="(paragraph, index) in part.content" :key="`par1${index}`">
                        <span>&nbsp;&nbsp;</span>
                        <span v-for="(sentence, y) in paragraph.sentences" :key="`part1${index}sen1${y}`" :style="textStyle">
                            <span>{{sentence.origText}}</span>
                            <v-icon :size="fontSize" @click.prevent="toggleVisibility(index,y)">help</v-icon>
                            <span v-if="getVisibilityFlag(index, y).value" class="success--text"
                                  style="font-weight: bold">
                                {{sentence.transText}}
                            </span>
                        </span>
                    </div>
                </v-tab-item>
                <v-tab-item :key="'sidebyside'">
<!--                    6 видео 32 минута-->
                    <v-container>
                        <v-layout row wrap v-for="(paragraph, index) in part.content" :key="`par2${index}`">
                            <v-flex xs6>
                                <span>&nbsp;&nbsp;</span>
                                <span v-for="(sentence, y) in paragraph.sentences" :key="`part2${index}sen2${y}_orig`" :style="textStyle">
                                    <span>
                                        {{sentence.origText}}
                                    </span>
                                </span>
                            </v-flex>
                            <v-flex xs6>
                                <span>&nbsp;&nbsp;</span>
                                <span v-for="(sentence, y) in paragraph.sentences" :key="`part2${index}sen2${y}_trans`" :style="textStyle">
                                    <span>
                                        {{sentence.transText}}
                                    </span>
                                </span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-tab-item>
            </v-tabs>
        </div>
    </v-card>
</template>

<script>
    // https://www.npmjs.com/package/vue-youtube-embed
    // npm i -S vue-youtube-embed   - для проигрования youtube video


    export default {
        props: {
            "part": {
                type: Object,
                required: true
            }
        },
        name: "BookPartContent",
        data() {
            return {
                tabMode: 'german',
                visibilityKeys: [],
                fontSize: 18,
            }
        },
        computed: {
            playerWidth() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return '335px';
                    case 'sm':
                        return '400px';
                    case 'md':
                        return '500px';
                    case 'lg':
                        return '600px';
                    case 'xl':
                        return '800px';
                }
            },
            textStyle(){
                return {fontSize: `${this.fontSize}px`}
            }
        },
        methods: {
            // 6 видео 28 минута
            getVisibilityFlag(index, y) {
                // console.log('getVisibilityFlag', `${index}${y}`);
                return this.visibilityKeys.find(k => k.key === `${index}${y}`)
            },
            toggleVisibility(index, y) {
                // console.log(index, y);
                let flag = this.getVisibilityFlag(index, y);
                // console.log('flag', flag);
                flag.value = !flag.value;
            }
        },
        created() {
            for (var i = 0; i < this.part.content.length; i++) {
                for (var y = 0; y < this.part.content[i].sentences.length; y++) {
                    this.visibilityKeys.push({
                        key: `${i}${y}`,
                        value: false
                    })
                }
            }
        }

    }
</script>

<style scoped>

</style>