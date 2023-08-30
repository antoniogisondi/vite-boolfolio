<script>
import axios from 'axios';
export default {
    data() {
        return {
            basicUrl: 'http://localhost:8000',
            projects: [],
            currentPage: 1,
            lastPage: null

        }
    },
    created() {
        this.getProjects(1)
    },
    methods: {
        getProjects(num_page) {
            axios.get(`${this.basicUrl}/api/projects`, { params: { page: num_page } }).then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.projects = response.data.results.data
                    this.currentPage = response.data.results.current_page
                    this.lastPage = response.data.results.last_page
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
                                <li v-if="project.type.name != ''">
                                    <strong>Tipologia di progetto:</strong> {{ project.type.name }}
                                </li>
                                <li v-else>
                                    Tipologia di progetto non definita
                                </li>
                                <li v-for="technology in project.technologies" :key="technology.id">
                                    <span class="badge text-bg-primary" v-if="technology.technology_name != ''">
                                        {{ technology.technology_name }}
                                    </span>
                                    <span v-else>Tecnologia non definita</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <nav>
                        <ul class="pagination">
                            <li :class="currentPage === 1 ? 'disabled' : ''">
                                <button class="page-link" @click="getProjects(currentPage - 1)">Precedente</button>
                            </li>
                            <li :class="currentPage === lastPage ? 'disabled' : ''">
                                <button class="page-link" @click="getProjects(currentPage + 1)">Successivo</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss"></style>