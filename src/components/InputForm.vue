<template>
    <div>
        <div class="input-form">
            <h4>Конвертер валют</h4>
            <CurrencyInput v-model="amount" @input="addAmountToState" />
            <ButtonComponent
                class="button"
                :buttonStyles="buttonStyles"
                @click.prevent="accept"
                >Выберите валюту</ButtonComponent
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Notiflix from 'notiflix';
import { mapMutations } from 'vuex';
import { Amount } from '@/interfaces/currency';

export default defineComponent({
    name: 'InputForm',
    data(): {
        amount: Amount;
        buttonStyles: Record<string, string>;
    } {
        return {
            amount: '',
            buttonStyles: {
                fontSize: '1.5rem',
                width: '100%',
                height: '65px',
                border: '2px solid #18aa66',
                backgroundColor: '#18aa66',
                boxShadow: '2px 2px 2px #6ac054',
                padding: '15px',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '10px 5px 10px 5px',
            },
        };
    },

    methods: {
        ...mapMutations({ setAmount: 'setAmount' }),

        accept(): void {
            !this.amount
                ? Notiflix.Notify.failure('Введите сумму!')
                : this.convert();
        },
        convert(): void {
            this.setAmount(this.amount);
            this.$router.push({
                name: 'currenciesList',
            });
        },
        addAmountToState(): void {
            this.setAmount(this.amount);
        },
    },
});
</script>

<style scoped>
.input-form {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 15px;
    width: 30vw;
    border: 2px solid #18aa66;
    box-shadow: -2px 2px 2px #a79e84bd;
    border-radius: 10px;
}

.input-form h4 {
    margin: 0;
    font-size: 20px;
    font-weight: 900;
    color: #070707;
}
.button:hover {
    background-color: #6ac054;
    box-shadow: 2px 2px 2px #18aa66;
    transform: scale(1.01);
    transition: all 0.9s;
}
</style>
