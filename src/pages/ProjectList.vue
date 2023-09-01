<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getProjects(1)
    },
    methods: {
        getProjects(num_page) {
            axios.get(`${this.store.basicUrl}/api/projects`, { params: { page: num_page } }).then((response) => {
                if (response.data.success) {
                    this.store.projects = response.data.results.data
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
        <div class="container mt-4">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <h1>Boolfolio - Projects</h1>
                </div>
                <div class="col-6 mt-3" v-for="project in this.store.projects" :key="project.id">
                    <ProjectCard :project="project" />
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