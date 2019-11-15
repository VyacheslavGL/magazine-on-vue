<template>
    <div>
        <app-aboutlist></app-aboutlist>
    </div>
</template>

<script>

    import AboutList from "../components/AboutList";

    export default {
        name: "About",
        components:{
            AppAboutlist: AboutList
        }
    }
</script>

<style scoped>

</style>