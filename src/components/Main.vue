<template>
    <div>
<!--        <v-system-bar>v-system-bar</v-system-bar>-->

        <v-app-bar app
                   color="indigo"
                   dark
                   clipped-left
                   class="my-0"
                   >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>  <!--гамбургер-->

                <v-toolbar-title>
                    <router-link to="/" tag="span" style="cursor: pointer">Information Portal</router-link>
                </v-toolbar-title>



            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text v-for="(file, index) in menuItems" :to="file.router" :key="index">
                    <v-icon left v-html="file.icon"></v-icon>
                    {{file.title}}
                </v-btn>
                <v-btn text @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-icon left>exit_to_app</v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>

            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>


            <v-navigation-drawer temporary app v-model="drawer" class="hidden-md-and-up">

                <v-list>
                    <v-list-item v-for="(file, index) in menuItems" :key="index" text :to="file.router">

                        <v-list-item-action>
                            <v-icon left>{{file.icon}}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                                <v-list-item-title>{{file.title}}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>

                </v-list>


                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn block>Login</v-btn>
                    </div>
                    <div class="pa-2">
                        <v-btn block>Logout</v-btn>
                    </div>
                </template>

            </v-navigation-drawer>



     <!--   <v-content>v-content</v-content>
        <v-footer>v-footer</v-footer>
        <v-bottom-navigation>v-bottom-navigation</v-bottom-navigation>-->
    </div>
</template>

<script>

    // npm install vuetify-confirm

    export default {
        name: "main.vue",
        data() {
            return {
                drawer: false,
                button: false,
                /*files: [
                    {
                        icon: 'record_voice_over',
                        title: 'О нас',
                        router: '/about'
                    },
                    {
                        icon: 'call_made',
                        title: 'Реклама',
                        router: '/advertising'
                    },
                    {
                        icon: 'account_circle',
                        title: 'Личный кабинет',
                        router: '/profile'
                    },
                    {
                        icon: 'exit_to_app',
                        title: 'Выйти',
                        router: '/logout'
                    },
                    {
                        icon: 'input',
                        title: 'Войти',
                        router: '/login'
                    },
                    {
                        icon: 'lock_open',
                        title: 'Зарегистрироваться',
                        router: '/signup'
                    }
                ]*/
            }
        },
        computed:{
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated;
            },
            menuItems(){
                return this.isUserAuthenticated
                    ? [
                    {
                        icon: 'record_voice_over',
                        title: 'О нас',
                        router: '/about'
                    },
                    {
                        icon: 'visibility',
                        title: 'Книги',
                        router: '/books'
                    },
                    {
                        icon: 'account_circle',
                        title: 'Личный кабинет',
                        router: '/profile'
                    }/*,
                    {
                        icon: 'exit_to_app',
                        title: 'Выйти',
                        router: '/logout'
                    }*/
                ] : [

                            {
                                icon: 'record_voice_over',
                                title: 'О нас',
                                router: '/about'
                            },
                            {
                                icon: 'visibility',
                                title: 'Книги',
                                router: '/books'
                            },
                            {
                                icon: 'input',
                                title: 'Войти',
                                router: '/login'
                            },
                            {
                                icon: 'lock_open',
                                title: 'Зарегистрироваться',
                                router: '/signup'
                            }

                    ]
            }
        },
        created() {
            // console.log(this.$vuetify.application.top);

        },
        methods:{
            signout(){
                this.$confirm('Вы действительно хотите выйте?').then(res => {
                    if(res)
                        this.$store.dispatch('SIGNOUT')
                })

            }
        }
    }
</script>

<style scoped>

</style>