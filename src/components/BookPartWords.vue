<template>
    <v-container fluid>
        <!--можно удалить так как есть :hide-default-footer="true"
        :items-per-page.sync="itemsPerPage"
        :footer-props="{ itemsPerPageOptions }"
        если вообще ничего не указывать то будут значения по умолчанию-->
        <span class="display-1">Слова</span>
        <v-data-iterator
                :items="words"


        >
            <template v-slot:default="props">
                <v-row>
                    <v-col
                            v-for="item in props.items"
                            :key="item.name"
                            cols="12"
                            sm="6"
                            md="4"
                            lg="3"
                    >
                        <v-card>
                            <v-card-title>
                                <h4>{{ item.origWord }}</h4>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>{{item.transWord}}</v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="mx-2" fab dark small color="primary">
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>
    </v-container>
</template>

<script>
    export default {
        name: "BookPartWords",
        props: {
            "words": {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                itemsPerPageOptions: [4, 8, 12, 18],
                itemsPerPage: 4,
            }
        }
    }
</script>

<style scoped>

</style>