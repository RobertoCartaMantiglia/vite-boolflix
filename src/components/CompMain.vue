
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
                <FilmCard v-for="film in store.filmList" :filmTitle="film.title" :originalTitle="film.original_title"
                    :filmRate="film.vote_average" :filmLang="film.original_language" />
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>

</style>