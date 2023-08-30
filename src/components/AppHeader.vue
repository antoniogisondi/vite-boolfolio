<script>
export default {
    components: {

    },
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    route_name: 'homepage'
                },
                {
                    label: 'Progetti',
                    route_name: 'projects'
                },
                {
                    label: 'Tipologie di progetti',
                    route_name: 'projects_type'
                },
                {
                    label: 'Tecnologie',
                    route_name: 'technology'
                },
                {
                    label: 'Chi siamo',
                    route_name: 'about_us'
                },
            ],
        }
    },
}
</script>

<template>
    <header>
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Boolfolio</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                                        <router-link class="nav-link" :to="{ name: item.route_name }">
                                            {{ item.label }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss"></style>