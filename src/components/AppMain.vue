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
                    <div class="card mb-3" v-for="project in projects" :key="project.id">
                        <div class="card-header">
                            <h3>{{ project.titolo }}</h3>
                        </div>
                        <div class="card-body">
                            <p>{{ project.descrizione }}</p>
                            <ul>
                                <li><strong>Data inizio:</strong> {{ project.inizio_progetto }}</li>
                                <li><strong>Data consegna:</strong> {{ project.consegna_progetto }}</li>
                                <li v-if="project.approvato == 1">
                                    Il progetto è stato approvato
                                </li>
                                <li v-else-if="project.non_approvato == 1">
                                    Il progetto non è stato approvato
                                </li>
                                <li v-else>
                                    Il progetto è scaduto
                                </li>
                                <li><strong>Tipologia di progetto:</strong> {{ project.type.name }}</li>
                                <li v-for="technology in project.technologies" :key="technology.id">
                                    <span class="badge text-bg-primary">{{ technology.technology_name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss"></style>