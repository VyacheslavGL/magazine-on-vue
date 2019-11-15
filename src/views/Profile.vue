<template>
    <div>
        <app-profile-list></app-profile-list>
    </div>
</template>

<script>

    import ProfileList from "../components/ProfileList";

    export default {
        name: "Profile",
        components:{
            AppProfileList: ProfileList,
        }
    }
</script>

<style scoped>

</style>