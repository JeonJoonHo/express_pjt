<template>
    <div>
        <ul class="list-group list-group-flush">
            <SkillSet
                    class="list-group-item"
                    v-for="technique in techniques"
                    :key="technique.id"
                    v-bind:title="technique.title"
                    v-bind:skills="technique.skills"
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
                techniques: {}
            }
        },
        methods: {
            getSkills () {
                this.$http.get('http://localhost:3000/api/skills')
                    .then((response) => {
                        console.log(response.data)
                        this.techniques = response.data.skills
                    })
                    .catch(e => {
                        console.log('error : ', e)
                    })
            }
        },
        mounted() {
            this.getSkills();
        }
    }
</script>

<style scoped>
</style>