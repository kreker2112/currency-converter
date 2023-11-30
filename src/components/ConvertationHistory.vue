<template>
    <div class="container convertation-history__container">
        <h1 class="convertation-history__header">История конвертаций:</h1>
        <ButtonComponent button-style="cleanup-history" @click="clearHistory"
            >Очистить историю</ButtonComponent
        >
        <transition-group name="convertation-history__list"
            ><div
                v-for="item in getCurrenciesHistory"
                :key="item"
                class="container list-item"
            >
                {{ item }}
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
    name: 'ConvertationHistory',

    computed: {
        ...mapGetters(['getCurrenciesHistory']),
    },

    mounted() {
        const historyInLocalStorage: string | null = localStorage.getItem(
            'convertListItemsArray',
        );
        if (historyInLocalStorage) {
            const convertListItemsArray: string[] = JSON.parse(
                historyInLocalStorage,
            );
            this.addConvertListItemToHistoryArray(convertListItemsArray);
        }
    },

    methods: {
        ...mapMutations([
            'cleanCurrenciesHistory',
            'addConvertListItemToHistoryArray',
        ]),

        clearHistory(): void {
            localStorage.removeItem('convertListItemsArray');
            this.cleanCurrenciesHistory();
        },
    },
});
</script>

<style scoped>
.container.convertation-history__container {
    top: 80px;
    right: 0;
    padding: 15px;
    width: 350px;
    height: calc(100vh - 156px);
    border-left: 4px solid #12c0b2;
    overflow-y: scroll;
}
.convertation-history__header {
    margin-bottom: 15px;
    font-size: 24px;
    text-align: center;
}

.convertation-history__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
}
.container.list-item {
    margin-bottom: 15px;
    padding: 15px;
    width: 100%;
}
.list-item {
    text-align: center;
    padding: 5px;
    width: 100%;
    border: 2px solid #12c0b2;
    border-radius: 5px;
}
.list-item:not(:last-of-type) {
    margin-bottom: 10px;
}
.convertation-history__list-enter-active,
.convertation-history__list-leave-active {
    transition: all 1s;
}
.convertation-history__list-enter-from,
.convertation-history__list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
