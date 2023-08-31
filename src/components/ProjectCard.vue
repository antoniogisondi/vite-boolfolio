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
</template>
<style lang="">
    
</style>