
<script>
import { store } from '../store'

export default {
    name: "CompHeader",
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-7 pt-3">
                    <label for=""></label>
                    <input type="text" placeholder="Scrivi il nome di un film" v-model="store.searchTitle">
                    <button @click="$emit('search', store.searchTitle)">cerca</button>
                </div>
            </div>
        </div>

    </section>
</template>
<style lang="scss">

</style>