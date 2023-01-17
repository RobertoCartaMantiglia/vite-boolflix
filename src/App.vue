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
      apiUrl: 'https://api.themoviedb.org/3/search/',
      apiKey: '98ee13024efa35418c861d49be88100b',
      // apiSeriesUrl: 'https://api.themoviedb.org/3/search/'
    }
  },
  methods: {
    searchFilmOrSeries(apiType, searchTitle) {
      axios.get(this.apiUrl, {
        params: {
          query: searchTitle,
          key: this.apiKey,
          api_Type: apiType
        }
      })
        .then((response) => {
          console.log(response.data.results);
          if (apiType === 'movie') {
            this.store.filmList = response.data.results;
          } else {
            this.store.seriesList = response.data.results;
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    },
    getMoviesOrSeries(searchTitle) {
      this.searchFilmOrSeries('movie', searchTitle);
      this.searchFilmOrSeries('tv', searchTitle);

    }    // getSeries() {
    //   axios.get(this.apiSeriesUrl, {
    //     params: {
    //       query: store.searchSeries
    //     }
    //   })
    //     .then((response) => {
    //       console.log(response.data.results);
    //       store.seriesList = response.data.results;
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //     .finally(function () {
    //     });
    // },
  },
  created() {
    this.getMoviesOrSeries();
    // this.getSeries()
  },

}
</script>

<template>

  <CompHeader @search="getMoviesOrSeries" />
  <CompMain />

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use '../node_modules/bootstrap/scss/bootstrap.scss' as *;
</style>
