<template>
    <v-app id="app">

        <app-main></app-main>

        <v-content>
                    <router-view></router-view>
<!--            <app-login></app-login>-->
        </v-content>

        <app-footer></app-footer>
    </v-app>
</template>

<script>

    import Main from './components/Main.vue'
    import AppFooter from './components/AppFooter'
    // import Login from './views/Login'


    export default {
        name: "App",
        components: {
            AppFooter,
            AppMain: Main,
            // AppLogin: Login
        },

    }
</script>

<style>

</style>
