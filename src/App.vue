<script>
import AppHeader from './components/AppHeader.vue';
import AboutUs from './pages/AboutUs.vue';
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectTypeList from './pages/ProjectTypeList.vue';
import TechnologyList from './pages/TechnologyList.vue';
export default {
  components: {
    AppHeader,
    AboutUs,
    HomePage,
    ProjectList,
    ProjectTypeList,
    TechnologyList
  }
}
</script>

<template>
  <AppHeader />
  <router-view>
    <AboutUs />
    <HomePage />
    <ProjectList />
    <ProjectTypeList />
    <TechnologyList />
  </router-view>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>
