<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Section v-bind:section-title="'전 준호'" id="about">
            <About></About>
        </Section>

        <Section v-bind:section-title="'Skill'" id="skill">
            <Technique></Technique>
        </Section>

        <hr>
        <Section v-bind:section-title="'Career'" id="career">
            <Career></Career>
        </Section>

        <hr>
        <Section v-bind:section-title="'Project'" id="project">
            <Project></Project>
        </Section>
    </main>
</template>

<script>
    import Career from "./Career";
    import Project from "./Project";
    import Technique from "./Technique";
    import Section from "./Section";
    import About from "./About";

    export default {
        name: "Main",
        components: {
            Career,
            Project,
            Technique,
            Section,
            About
        }
    }
</script>

<style>
    span, p {
        font-family: SCDream5,serif;
    }
</style>