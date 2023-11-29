<template>
    <button class="button" :style="buttonStyles">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name: 'ButtonComponent',
    props: {
        buttonStyles: {
            type: Object as PropType<Record<string, string>>,
            default: () => ({}),
            required: true,
        },
    },
});
</script>

<style scoped></style>
