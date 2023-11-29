<template>
    <div class="result-page">
        <div class="container result__container">
            <h1 class="result__container-header">Результат</h1>
            <span>{{ getResult }} {{ getOptionInput }}</span>
        </div>
        <div class="buttons buttons__contaier">
            <ButtonComponent
                class="button"
                :buttonStyles="buttonStyles"
                @click="cancelOperation"
            >
                Вернуться в начало
            </ButtonComponent>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
    name: 'ResultPage',
    data(): {
        buttonStyles: Record<string, string>;
    } {
        return {
            buttonStyles: {
                fontSize: '1rem',
                width: '20em',
                height: '65px',
                border: '2px solid #18aa66',
                backgroundColor: '#18aa66',
                boxShadow: '2px 2px 2px #6ac054',
                padding: '10px 15px',
                fontFamily:
                    'LucidaSans, LucidaSansRegular, LucidaGrande, LucidaSansUnicode, Geneva, Verdana, sansSerif',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '10px',
                transition: 'all 0.9s',
                marginTop: '20px',
            },
        };
    },
    computed: {
        ...mapGetters(['getResult', 'getOptionInput']),
    },

    methods: {
        cancelOperation() {
            this.$router.push('/converter');
        },
    },
});
</script>

<style scoped>
.result-page {
    margin: 0 auto;
    height: 100%;
}
.container.result__container {
    margin: 0 auto;
    width: 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #12c0b2;
    border-radius: 5px;
    padding: 20px;
}
.result__container-header {
    margin-bottom: 20px;
    font-size: 2em;
}

span {
    font-size: 1.5em;
    font-weight: 700;
}

.buttons.buttons__contaier {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}
</style>
