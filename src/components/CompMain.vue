
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
    <div class="row">
        <div class="col-12">
            <div>
                <ul v-for="film in store.filmList">
                    <li>
                        {{ film.title }}
                    </li>

                </ul>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>

</style>