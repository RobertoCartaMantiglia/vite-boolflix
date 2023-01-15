<script>
import CompHeader from './components/CompHeader.vue';
import { store } from './store';

export default {
  components: {
    CompHeader
  },
  data() {
    return {
      store,
    }
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
