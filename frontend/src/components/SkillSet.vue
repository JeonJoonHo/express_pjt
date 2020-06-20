<template>
    <li>
        <h3 class="skill-set-title pb-4 pt-4">{{ title }}</h3>
        <div class="container">
            <div class="row">
                <Skill
                        class="col-4"
                        v-for="skill in skills"
                        :key="skill.id"
                        v-bind:title="skill.title"
                        v-bind:level="skill.level"
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
            level: Number
        },
        data() {
            return {
                newTodoText: '',
                skills: [
                    {
                        id: 1,
                        title: 'Do the dishes',
                        level: 1
                    },
                    {
                        id: 2,
                        title: 'Take out the trash',
                        level: 1
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn',
                        level: 1
                    },
                    {
                        id: 4,
                        title: 'Mow the lawn',
                        level: 1
                    },
                    {
                        id: 5,
                        title: 'Mow the lawn',
                        level: 1
                    },
                    {
                        id: 6,
                        title: 'Mow the lawn',
                        level: 1
                    }
                ]
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