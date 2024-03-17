<script lang="ts">
    import type { PropType } from 'vue'
    export default {
        props:{
            texto: {type: Object as PropType<String>, required: true}
        }
    }
</script>

<template>
    <a class="btn">{{ texto }}</a>
</template>

<style scoped>
    .btn{
        cursor: pointer;
        border-radius: 36px;
        background: var(--ocre);
        color: white;
        padding: 14px 64px;
        text-decoration: none;
        transition: all .4s ease;
    }

    .btn:hover{
        background: var(--coral);
    }
    
</style>