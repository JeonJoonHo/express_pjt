<template>
    <div>
        <ul class="list-group list-group-flush">
            <SkillSet
                    class="list-group-item"
                    v-for="skillSet in skillSets"
                    :key="skillSet.id"
                    v-bind:title="skillSet.title"
            ></SkillSet>
        </ul>
    </div>
</template>

<script>
    import SkillSet from "./SkillSet";

    export default {
        name: "Technique",
        components: {
            SkillSet
        },
        props: {
            title: String
        },
        data() {
            return {
                newTodoText: '',
                skillSets: [
                    {
                        id: 1,
                        title: 'Backend'
                    },
                    {
                        id: 2,
                        title: 'Frontend'
                    },
                    {
                        id: 3,
                        title: 'Etc'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>