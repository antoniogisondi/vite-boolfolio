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
        this.getProjectTypes()
    },
    methods: {
        getProjectTypes() {
            axios.get(`${this.store.basicUrl}/api/types`).then((response) => {
                if (response.data.success) {
                    this.store.types = response.data.results
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
                <h1>Boolfolio - Tipologie di progetti</h1>
            </div>
            <div class="col-12">
                <div class="card mb-3" v-for="type in store.types" :key="type.id">
                    <div class="card-body">
                        <h3>{{ type.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>