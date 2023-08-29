<script>
import axios from 'axios';
export default {
    data() {
        return {
            basicUrl: 'http://localhost:8000',
            projects: [],
        }
    },
    created() {
        this.getProjects()
    },
    methods: {
        getProjects() {
            axios.get(`${this.basicUrl}/api/projects`).then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.projects = response.data.results
                }

            })
        }
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">

                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss"></style>