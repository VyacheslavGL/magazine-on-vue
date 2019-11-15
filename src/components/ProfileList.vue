<template>
    <div>

        <!-- <h1>Это информация из ProfileList</h1>
         &lt;!&ndash; Sizes your content based upon application components &ndash;&gt;
         <v-content>

             &lt;!&ndash; Provides the application the proper gutter &ndash;&gt;
             <v-container fluid>
                 <h2>Текст в контейнере</h2>
                 &lt;!&ndash; If using vue-router &ndash;&gt;
                 <router-view></router-view>
             </v-container>
         </v-content>

         <div class="mx-4">
             <v-badge>
                 <template v-slot:badge>5</template>
                 <v-icon>mail</v-icon>
             </v-badge>
         </div>

         <template v-if="$vuetify.breakpoint.smAndUp">
             <v-btn icon>
                 <v-icon>mdi-export-variant</v-icon>
             </v-btn>
             <v-btn icon>
                 <v-icon>mdi-delete-circle</v-icon>
             </v-btn>
             <v-btn icon>
                 <v-icon>mdi-plus-circle</v-icon>
             </v-btn>
         </template>

         <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>-->

        <!--<v-card
                class="mx-auto"
                color="#F9F9F9"
                max-width="400"
        >
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">San Francisco</v-list-item-title>
                    <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-card-text>
                <v-row align="center">
                    <v-col class="display-3" cols="6">
                        23&deg;C
                    </v-col>
                    <v-col cols="6">
                        <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                                alt="Sunny image"
                                width="92"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-send</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-cloud-download</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>

            <v-slider
                    v-model="time"
                    :max="6"
                    :tick-labels="labels"
                    class="mx-4"
                    ticks
            ></v-slider>

            <v-list class="transparent">
                <v-list-item
                        v-for="item in forecast"
                        :key="item.day"
                >
                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-subtitle class="text-right">
                        {{ item.temp }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn text>Full Report</v-btn>
            </v-card-actions>
        </v-card>-->

        <!--        Акардион начало-->

        <!--        <v-row justify="center" style="width: 300px">
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                                v-for="(item,i) in 5"
                                :key="i"
                        >
                            <v-expansion-panel-header>Заявка в отдел ИТ</v-expansion-panel-header>
                            <v-expansion-panel-content>

                                <v-row no-gutters class="column">
                                    <v-col>
                                        <v-btn
                                                text
                                                color="orange"
                                                style="width: 100%"
                                        >
                                            Создать новую карту
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-btn
                                                text
                                                color="orange"
                                                style="width: 100%"
                                        >
                                            Автобрелок
                                        </v-btn>
                                        &lt;!&ndash;<v-card-actions>
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

                                            &lt;!&ndash;<v-btn icon>
                                                <v-icon>share</v-icon>
                                            </v-btn>&ndash;&gt;
                                        </v-card-actions>&ndash;&gt;

                                    </v-col>
                                </v-row>


                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>-->

        <!--        Акардион конец-->

        <v-container fluid>
            <v-row no-gutters wrap>
                <v-col
                        cols="sm"

                >
                    <h1>Первая колонка</h1>
                    <!--<v-card
                            class="pa-2"
                            outlined
                            tile
                    >
                        One of three columns
                    </v-card>-->
                </v-col>
                <v-col

                >
                    <!--                    <h1>Первая колонка второй ряд</h1>-->
                    <v-card
                            class="pa-2"
                            outlined
                            tile
                            app
                    >

                        <v-card-title>
                            One of three columns
                        </v-card-title>
                        <v-card-text>Проверяем работу v-card-text</v-card-text>
                        <v-card-actions>
                            <v-btn text>Click</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12" sm="6" class="py-2">
                    <h1>Вторая колонка</h1>
                    <!--<v-card
                            class="pa-2"
                            outlined
                            tile
                    >
                        One of three columns
                    </v-card>-->

                    <p>Exclusive</p>
                    <v-btn-toggle v-model="toggle_exclusive">
                        <v-btn text>
                            <v-icon>format_align_left</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        </v-container>

        <!--        ///////////////-->

        <v-card>
            <v-card-text>
                <v-text-field v-model="mask" label="Mask"></v-text-field>
            </v-card-text>
            <v-card-text>
                <!--                <v-text-field v-model="value" v-mask="['###-#', '####-#', '#####-#', '######-#']" label="Value"></v-text-field>-->

                <v-text-field v-model="value" v-mask="mask" label="Value"
                              tokens="{pattern: /[а-ЯА-Я]/, transform: v => v.toLocaleLowerCase()}"></v-text-field>

            </v-card-text>
        </v-card>

        <!--        ////////////// https://vuetifyjs.com/en/components/lists для проекта списки-->


        <v-card
                class="mx-4 my-4"
                width="300"
        >
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                        prepend-icon="account_circle"
                        value="true"
                >
                    <template v-slot:activator>
                        <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group
                            no-action
                            sub-group
                            value="true"

                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Admin</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                                v-for="(admin, i) in admins"
                                :key="i"
                                link
                                v-ripple="{ center: true }"
                                :to="admin[2]"
                        >
                            <v-list-item-title v-text="admin[0]" ></v-list-item-title>
<!--                            <v-list-item-action v-text="admin[0]" :to="admin[2]"></v-list-item-action>-->
                            <v-list-item-icon>
                                <v-icon v-text="admin[1]"></v-icon>
                            </v-list-item-icon>

                        </v-list-item>
                    </v-list-group>

                    <v-list-group
                            sub-group
                            no-action
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Actions</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="(crud, i) in cruds"
                                :key="i"
                                @click=""
                                :to="crud[2]"
                        >
                            <v-list-item-title v-text="crud[0]"></v-list-item-title>
                            <v-list-item-action>
                                <v-icon v-text="crud[1]"></v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-card>

        <v-card>

            <v-btn>
                <v-icon class="mdi-rotate-45">mdi-electron-framework</v-icon>
                Bob lives in a <span class="mdi mdi-electron-framework"></span>.
                <!--                <span class="mdi mdi-electron-framework"></span>-->

                Проверка
            </v-btn>
        </v-card>
        <v-container>
            <v-card>
                <span class="mdi mdi-name"></span>
            </v-card>
        </v-container>


        <v-card class="mx-4 my-4"
                width="500"


        >

            <dl style="border: 1px solid black">
                <dt style="border: 1px solid black">37</dt>
                <dd>Left</dd>
                <dt>38</dt>
                <dd style="border: 1px solid black">Right</dd>
                <dt>39</dt>
                <dd>Up</dd>
                <dt>40</dt>
                <dd>Down</dd>
            </dl>

            <dl>
                <dt style="text-align: left">GIF</dt>
                <dd style="text-align: right">Формат графических файлов, широко применяемый при создании сайтов.
                    GIF использует 8-битовый цвет и эффективно сжимает сплошные цветные области,
                    при этом сохраняя детали изображения.
                </dd>
                <dt>JPEG</dt>
                <dd>Популярный формат графических файлов, широко применямый при создании
                    сайтов и хранения изображений. JPEG поддерживает 24-битовый цвет и сохраняет
                    яркость и оттенки цветов в фотографиях. Данный формат называют сжатием с потерями,
                    поскольку алгоритм JPEG выборочно отвергает данные. Метод сжатия может исказить
                    деталь в рисунке, особенно содержащий текст или изображение с четкими краями.
                    Формат JPEG не поддерживает прозрачность, когда вы сохраняете фотографию в формате
                    JPEG, прозрачные пиксели заполняются определенным цветом.
                </dd>
            </dl>

        </v-card>

        <figure id="l4">
            <figcaption>Listing 4. The primary core interface API declaration.</figcaption>
            <pre><code>interface PrimaryCore {
                      boolean verifyDataLine();
                      void sendData(in sequence&lt;byte> data);
                      void initSelfDestruct();
            }
            </code></pre>
        </figure>

        <blockquote>
           <h1>I very very cleve men</h1>
        </blockquote>

        <v-container fluid>
            <v-row no-gutters wrap style="border: 1px solid black">
                <v-col
                        cols="sm"
                        style="border: 1px solid red"
                >
                    <h1>I very very cleve men</h1>
                </v-col>
                <v-col
                        cols="md"
                        style="border: 1px solid red"
                >
                    <h1>I very very cleve men 2</h1>
                </v-col>
            </v-row>
            <v-layout>
                <h1>v-layout</h1>
            </v-layout>
        </v-container>

<!--        //////////////-->


        <v-container fluid  grid-list-xl style="border: 1px solid black" text-xs-center>v-container
            <v-layout  my-2 wrap justify-center style="border: 1px solid red" >v-layout
                <v-flex   xs4 my-4 style="border: 1px solid green" >v-flex

                    <v-card  xs1 dark  color="cyan" class="pa-3 overflow-hidden" style="border: 1px solid yellow; text-align: center">v-card
                        <v-icon>check</v-icon>
                     Lorem ipsum dolor sit amet.
                    </v-card>

                    <v-card  xs2 dark color="primary">
                        <v-card-text class="font-weight-light text-sm-center" style="font-size: 28px">Lorem ipsum dolor sit amet</v-card-text>
                        <v-card-text overflow-y-hidden class="font-weight-light font-weight-regular display-1">Заявка на вьезд в БЦ</v-card-text>
                    </v-card>


                </v-flex>

                <v-flex xs2>
                    <v-card dark color="primary">
                        <v-card-text>two</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>


            <v-layout row justify-center style="border: 1px solid red">v-layout
                <v-flex xs4 style="border: 1px solid green">v-flex
                    <v-card dark  class="pa-3" style="border: 1px solid yellow">v-card
                        <v-icon>check</v-icon>
                        one
                        <!--                        <v-card-text>one</v-card-text>-->
                    </v-card>
                </v-flex>
                <v-flex xs2>
                    <v-card dark color="primary">
                        <v-card-text>two</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>


            <v-layout row justify-space-around wrap>v-layout
                <v-flex xs4 style="border: 1px solid green" my-4>v-flex
                    <v-card dark color="primary" class="pa-3" style="border: 1px solid yellow">v-card
                        <v-icon>check</v-icon>
                        one
                        <!--                        <v-card-text>one</v-card-text>-->
                    </v-card>
                </v-flex>
                <v-flex xs6 style="border: 1px solid green" my-4>v-flex
                    <v-card dark color="primary" class="pa-3" style="border: 1px solid yellow">v-card
                        <v-icon>check</v-icon>
                        one
                        <!--                        <v-card-text>one</v-card-text>-->
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>

        <div>
<!--            https://vuetifyjs.com/en/styles/display  - d-none d-sm-flex -меняет свойство блока в зависимости от размера -->
<!--            https://vuetifyjs.com/en/styles/float  - float-md-right   - расположение текста в зависимости от размера экрана-->
            <div class="d-inline pa-2 deep-purple accent-4 white--text d-none d-sm-flex float-md-right">d-inline</div>
            <div class="d-inline pa-2 black white--text">d-inline</div>
            <strong class="red--text text--lighten-1">inciderint</strong>
        </div>

        <template>
            <h1 style="border: 1px solid black; background-color: green" class="pa-4 my-4 white--text">Проверка template</h1>
            <blockquote class="blockquote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</blockquote>
        </template>
        <h1 style="border: 1px solid black; background-color: green" class="pa-4 my-4 white--text">Проверка template</h1>

        <template>
            <div>
<!--                https://vuetifyjs.com/en/styles/spacing - показывает наложение-->
                <v-card
                        class="my-n12 mx-auto"
                        elevation="4"
                        height="100"
                        max-width="150"
                >
                    <v-card-title>Our tile</v-card-title>
                </v-card>
                <v-card
                        class="mx-auto"
                        height="200"
                        max-width="500"
                        outlined
                >
                    <v-card-title>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eaque eius ex in itaque minima non numquam perferendis quidem, ullam.
                    </v-card-title>
                </v-card>

            </div>
        </template>

    </div>
</template>

<script>
    // https://www.npmjs.com/package/vue-the-mask
    // npm install --save @mdi/js  - необходимо для возможности добавлять значки отсюда
    // https://materialdesignicons.com/
    // https://dev.materialdesignicons.com/getting-started/webfont

    // npm i stylus stylus-loader style-loader css-loader --save-dev
    // npm install --save vuetify/src/stylus/app.styl

    import {mask} from 'vue-the-mask'

    export default {
        name: "ProfileList",
        directives: {
            mask,

        },
        components: {},
        data() {
            return {
                admins: [
                    ['Management', 'people_outline', 'books'],
                    ['Settings', 'settings', 'about'],
                ],
                cruds: [
                    ['Create', 'add', 'books'],
                    ['Read', 'insert_drive_file', 'about'],
                    ['Update', 'update', 'books'],
                    ['Delete', 'delete', 'about'],
                ],
                // mask: '####-####-####-####',
                // mask: '+7-###-###-##-##',
                mask: 'a-###-aa-###-RUS',
                value: 'a-999-aa-99-RUS',


                toggle_exclusive: 2,
                labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
                time: 0,
                forecast: [
                    {day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0'},
                    {day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0'},
                    {day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0'},
                ],

                items: [
                    {
                        text: 'Сиськи',
                        disabled: false,
                        href: '/about',
                    },
                    {
                        text: 'Link 1',
                        disabled: false,
                        href: 'breadcrumbs_link_1',
                    },
                    {
                        text: 'Link 2',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    dd {
        font-style: italic; /* Курсивное начертание текста */
    }

    dt {
        margin-top: 1em; /* Отступ сверху */
    }

</style>