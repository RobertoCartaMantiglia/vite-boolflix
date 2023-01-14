<script>
import CompHeader from './components/CompHeader.vue';

export default {
  components: {
    CompHeader
  }
}
</script>

<template>

  <CompHeader />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use '../node_modules/bootstrap/scss/bootstrap.scss' as *;
</style>
