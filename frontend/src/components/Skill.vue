<template>
    <li>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </li>
</template>

<script>
    export default {
        name: "Skill",
        props: ['title', 'description']
    }
</script>

<style scoped>

</style>