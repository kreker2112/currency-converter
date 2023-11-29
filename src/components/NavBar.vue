<template>
    <div class="navbar">
        <div class="navbar_title" @click="$router.push('/')">
            Личный кабинет предпринимателя
        </div>
        <div class="navbar__btns">
            <ButtonComponent
                class="button"
                :buttonStyles="buttonStyles"
                v-for="button in navButtons"
                :key="button.id"
                @click="$router.push(button.link)"
                >{{ button.name }}</ButtonComponent
            >
        </div>
    </div>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            navButtons: [
                { id: uuidv4(), name: 'Конвертер валют', link: '/converter' },
                { id: uuidv4(), name: 'Поступления', link: '/#' },
                { id: uuidv4(), name: 'Налоговые обязанности', link: '/#' },
                { id: uuidv4(), name: 'Уплата налогов', link: '/#' },
                { id: uuidv4(), name: 'О сайте', link: '/#' },
            ],
            buttonStyles: {
                backgroundColor: '#06998d',
                border: 'none',
                borderRadius: '5px',
                color: '#fff',
                padding: '10px 15px',
                fontSize: '1rem',
                fontFamily:
                    'LucidaSans, LucidaSansRegular, LucidaGrande, LucidaSansUnicode, Geneva, Verdana, sansSerif',
                cursor: 'pointer',
                boxShadow: '2px 2px 2px #a79e84bd',
                transition: 'all 0.9s',
            },
        };
    },
});
</script>

<style scoped>
.navbar {
    position: absolute;
    width: 100%;
    height: 80px;
    background-color: #12c0b2;
    box-shadow: 2px 2px 4px #a79e84bd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 0 15px;
    cursor: pointer;
}
.navbar_title {
    font-size: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #fff;
    padding: 15px;
    height: 80px;
}

.navbar__btns {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    padding-right: 20px;
}
.button:hover {
    background-color: #fff !important;
    color: #12c0b2 !important;
    box-shadow: 2px 2px 2px #18aa66;
    transform: scale(1.01);
    transition: all 0.9s;
}
</style>
