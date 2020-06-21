<template>
    <div>
        <div class="table-responsive">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

        <div class="social-icons">
            <a class="social-icon" href="https://github.com/JeonJoonHo">
                <font-awesome-icon :icon="faGithub"></font-awesome-icon>
            </a>
            <a class="social-icon" href="https://www.linkedin.com/in/joonho-jeon-921273154">
                <font-awesome-icon :icon="faLinkedin"></font-awesome-icon>
            </a>
            <a class="social-icon" href="mailto:jeon9435@gmail.com">
                <font-awesome-icon :icon="faEnvelope"></font-awesome-icon>
            </a>
        </div>
    </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "About",
        components: {
            FontAwesomeIcon
        },
        data() {
            return {
                faGithub,
                faLinkedin,
                faEnvelope
            }
        }
    }
</script>

<style scoped>
    .social-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 3.5rem;
        width: 3.5rem;
        background-color: #495057;
        color: #fff;
        border-radius: 100%;
        font-size: 1.5rem;
        margin-right: 1.5rem;
    }
    .social-icon img {
        width: 100%;
        height: 100%;
    }
</style>