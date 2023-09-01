<script>
export default {
    props: {
        project: Object
    },
    data() {
        return {

        }
    },

}
</script>
<template lang="">
    <div class="card mb-3">
        <div class="card-header">
            <h3>{{ project.titolo }}</h3>
        </div>
        <div class="card-body">
            <p>{{ project.descrizione }}</p>
            
        </div>
        <div class="card-footer">
            <router-link class="btn btn-sm btn-primary" :to=" { name: 'single_project', params: { titolo: project.titolo }}">Leggi l'articolo</router-link>
        </div>
    </div>
</template>
<style lang="">
    
</style>