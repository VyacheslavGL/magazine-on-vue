<template>
    <div>
    <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            class="hidden-sm-and-down"
    >
        <v-carousel-item
                v-for="(slide, i) in picture"
                :key="i"
                :src="slide.image"
        >
            <v-row
                    class="fill-height white--text"
                    align="center"
                    justify="center"
            >
                <div class="display-3">{{ slides[i] }} Slide</div>
            </v-row>
            <!--<v-sheet
                    :color="colors[i]"
                    height="100%"
            >
                <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                >
                    <div class="display-3">{{ slide }} Slide</div>
                </v-row>
            </v-sheet>-->
        </v-carousel-item>
    </v-carousel>
    <v-container class="hidden-md-and-up">
        <div>
            <h1>Слайдер в мобильной версии не доступен</h1>
        </div>
    </v-container>
    </div>
</template>

<script>


export default {
  name: "home",
    data(){
      return{
          colors: [
              'indigo',
              'warning',
              'pink darken-2',
              'red lighten-1',
              'deep-purple accent-4',
          ],
          slides: [
              'First',
              'Second',
              'Third',
              'Fourth',
              'Fifth',
          ],
          picture: [
              {image: require('../img/14.jpg')},
              {image: require('../img/15.jpg')},
              {image: require('../img/16.jpg')},
          ]
      }
    },
  components: {

  }
};
</script>
