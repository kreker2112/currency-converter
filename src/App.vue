<template>
    <div class="app">
        <component :is="currentLayout">
            <router-view />
        </component>
    </div>
</template>

<script>
import defaultLayout from '@/layouts/defaultLayout.vue'
import currencyLayout from '@/layouts/currencyLayout.vue'
import { mapMutations } from 'vuex'
export default {
    name: 'App',
    components: {
        defaultLayout,
        currencyLayout,
    },
    computed: {
        currentLayout() {
            return `${this.$route.meta.layout}Layout`
        },
    },

    mounted() {
        this.initExchangeHistory()
        console.log(this.$route.path)
    },
    methods: {
        ...mapMutations(['setCurrenciesHistory']),
        initExchangeHistory() {
            const exchangeHistory = JSON.parse(
                localStorage.getItem('convertListItemsArray'),
            )
            const exchangeHistoryArray = exchangeHistory
            this.setCurrenciesHistory(exchangeHistoryArray)
        },
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Blinker', sans-serif;
    font-family: 'Roboto', sans-serif;
}
</style>
