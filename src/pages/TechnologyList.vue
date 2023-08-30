<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    created() {
        this.getTechnologies()
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.basicUrl}/api/technologies`).then((response) => {
                if (response.data.success) {
                    this.store.technologies = response.data.results
                }
            })
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Boolfolio - Tecnologie</h1>
            </div>
            <div class="col-12">
                <div class="card mb-3" v-for="tech in store.technologies" :key="tech.id">
                    <div class="card-body">
                        <h3>{{ tech.technology_name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>