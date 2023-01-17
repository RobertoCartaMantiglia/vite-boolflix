
<script>
import { store } from '../store'
import FilmCard from './FilmCard.vue'

export default {
    name: 'CompMain',
    components: {
        FilmCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div>
                <h2>Movies</h2>
                <FilmCard v-for="film in store.filmList" :filmTitle="film.title" :originalTitle="film.original_title"
                    :filmRate="film.vote_average" :filmLang="film.original_language" />
            </div>

            <div>
                <h2>Series</h2>
                <FilmCard v-for="serie in store.seriesList" :serieTitle="serie.name"
                    :serieOriginalTitle="serie.original_name" :serieRate="serie.vote_average"
                    :filmLang="serie.original_language" />
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>

</style>