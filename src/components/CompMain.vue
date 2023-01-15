
<script>
import { store } from '../store'

export default {
    name: 'CompMain',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <ul>
            <li v-for="film in store.filmsList">{{ film.results[0].title }}</li>
        </ul>
    </div>
</template>
<style lang="scss">

</style>