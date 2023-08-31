<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            project: []
        }
    },
    created() {
        this.getSingleProjects()
    },
    methods: {
        getSingleProjects() {
            axios.get(`${this.store.basicUrl}/api/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.project = response.data.project
                }
                else {
                    this.$router.push({ name: 'not-found' })
                }

            })
        }
    },
}
</script>

<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h1>{{ project.titolo }}</h1>
                        </div>
                        <div class="card-body">
                            <div class="col-12 mb-3">
                                <p v-if="project.descrizione">{{ project.descrizione }}</p>
                                <p v-else>Descrizione non disponibile</p>
                            </div>
                            <div class="col-12 mb-3" v-if="project.img">
                                <img :src="`${store.baseUrl}/storage/${project.img}`" class="w-50">
                            </div>
                            <div v-else>
                                Immagine non disponibile
                            </div>
                            <div class="col-12" v-if="project.type">
                                <strong>Tipologia:</strong> {{ project.type }}
                            </div>
                            <div class="col-12" v-else>
                                Tipologia di progetto non disponibile
                            </div>
                            <div class="col-12 my-2" v-if="project.technologies">
                                <strong>Tecnologia:</strong> 
                                <span class="badge text-bg-primary mx-1" v-for="tech in project.technologies">
                                    {{ tech.technology_name }}
                                </span>
                            </div>
                            <div v-else>
                                Tecnologie non disponibili
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>



