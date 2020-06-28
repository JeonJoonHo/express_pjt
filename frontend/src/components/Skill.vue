<template>
    <p class="skill">
        <span>{{ term }}</span>
        <span>{{ proficiency }}</span>
    </p>
</template>

<script>
    export default {
        name: "Skill",
        props: {
            term: String,
            proficiency: Number
        }
    }
</script>

<style scoped>
    .skill {
        text-align: left;
    }
</style>