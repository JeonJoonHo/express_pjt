<template>
    <p class="skill">
        <span>{{ title }}</span>
        <span>{{ level }}</span>
    </p>
</template>

<script>
    export default {
        name: "Skill",
        props: ['title', 'level']
    }
</script>

<style scoped>
    .skill {
        text-align: left;
    }
</style>