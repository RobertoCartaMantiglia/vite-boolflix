<script>
import CompHeader from './components/CompHeader.vue';
import CompMain from './components/CompMain.vue';
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    CompHeader,
    CompMain
  },
  data() {
    return {
      store,
      apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=98ee13024efa35418c861d49be88100b&query=ritorno+al+futuro',
      apiKey: '',
    }
  },
  methods: {
    getFilm() {
      axios.get(this.apiUrl, {
        params: {
          query: store.searchTitle
        }
      })
        .then((response) => {
          console.log(response.data.results);
          store.filmList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    },
  },
  created() {
    this.getFilm()
  },
}
</script>

<template>

  <CompHeader @search="getFilm" />
  <CompMain />

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use '../node_modules/bootstrap/scss/bootstrap.scss' as *;
</style>
