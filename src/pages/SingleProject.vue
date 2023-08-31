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