<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
        </div>

        <SkillSet></SkillSet>
        <Career></Career>
        <Project></Project>
    </main>
</template>

<script>
    import SkillSet from "./SkillSet";
    import Career from "./Career";
    import Project from "./Project";

    export default {
        name: "Main",
        components: {
            SkillSet,
            Career,
            Project
        }
    }
</script>

<style scoped>

</style>