<template>
    <div>
        <h2 class="text-muted">Skill Set</h2>
        <div class="table-responsive">
            <ul>
                <Skill
                        v-for="skill in skills"
                        :key="skill.id"
                        v-bind:title="skill.title"
                        v-bind:description="skill.description"
                ></Skill>
            </ul>
        </div>
    </div>
</template>

<script>
    import Skill from "./Skill";

    export default {
        name: "SkillSet",
        components: {
            Skill
        },
        props: {
            title: String,
            description: String
        },
        data() {
            return {
                newTodoText: '',
                skills: [
                    {
                        id: 1,
                        title: 'Do the dishes',
                        description: 'Test1'
                    },
                    {
                        id: 2,
                        title: 'Take out the trash',
                        description: 'Test2'
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn',
                        description: 'Test3'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>