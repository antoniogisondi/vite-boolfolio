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
            <h6>{{ project.slug }}</h6>
        </div>
        <div class="card-body">
            <p>{{ project.descrizione }}</p>
            
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-sm btn-primary">Dettaglio progetto</a>
        </div>
    </div>
</template>
<style lang="">
    
</style>