<template>
    <section class="resume-section">
        <div class="section-div">
            <h1 class="section-title pb-3">{{ sectionTitle }}</h1>
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Section",
        props: ['sectionTitle']
    }
</script>

<style>
    @media (min-width: 992px) {
        section.resume-section {
            padding: 5rem 3rem;
        }
    }
    @media (min-width: 768px) {
        section.resume-section {
            min-height: 100vh;
        }
    }
    section.resume-section {
        display: flex;
        align-items: center;
        padding: 5rem 1rem;
        max-width: 75rem;
    }
    .section-div {
        width: 100%;
    }
    .section-title {
        text-align: left;
        font-size: xxx-large;
        font-family: SCDream6,serif;
    }
</style>