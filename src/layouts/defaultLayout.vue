<template>
    <Navbar />
    <div class="default-layout">
        <slot></slot>
    </div>
    <FooterComponent />
</template>

<script setup>
import Navbar from '@/components/UI/NavBar.vue'
</script>

<style scoped>
.default-layout {
    position: absolute;
    top: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
}
</style>
