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
            axios.get(`${this.store.basicUrl}/api/projects/${this.$route.params.titolo}`).then((response) => {
                if (response.data.success) {
                    this.project = response.data.project
                }
                else {
                    this.$router.push({ name: 'not-found' })
                }
                console.log(this.project)
            })
        }
    },
}
</script>

<template lang="">
    <div>
        <div class="container d-flex justify-content-center mt-4">
            <div class="row">
                <div class="col-10">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="text-center">{{ project.titolo }}</h1>
                        </div>
                        <div class="card-body">
                            <div class="col-10 mb-3">
                                <p v-if="project.descrizione">{{ this.project.descrizione }}</p>
                                <p v-else>Descrizione non disponibile</p>
                            </div>
                            <div class="col-10 mb-3" v-if="project.img">
                                <img :src="`${store.basicUrl}/storage/${project.img}`" class="w-50">
                            </div>
                            <div v-else>
                                Immagine non disponibile
                            </div>
                            <div class="col-10" v-if="project.type">
                                <strong>Tipologia:</strong> {{ project.type.name }}
                            </div>
                            <div class="col-10" v-else>
                                Tipologia di progetto non disponibile
                            </div>
                            <div class="col-10 my-2" v-if="project.technologies">
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



