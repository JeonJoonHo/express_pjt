<template>
    <li>
        <h3 class="skill-set-title pb-4 pt-4">{{ title }}</h3>
        <div class="container">
            <div class="row">
                <Skill
                        class="col-4"
                        v-for="skill in skills"
                        :key="skill.id"
                        v-bind:term="skill.term"
                        v-bind:proficiency="skill.proficiency"
                ></Skill>
            </div>
        </div>
    </li>
</template>

<script>
    import Skill from "./Skill";

    export default {
        name: "SkillSet",
        components: { Skill },
        props: {
            title: String,
            proficiency: Number,
            skills: Array
        },
        data() {
            return {
                newTodoText: ''
            }
        }
    }
</script>

<style scoped>
    .skill-set-title {
        font-family: SCDream5,serif;
        text-align: left;
    }
</style>