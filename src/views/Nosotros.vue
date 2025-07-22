<script setup>
import { ref } from 'vue'

const mensaje = ref('Bienvenidos a Nosotros')
</script>

<template>
    <div class="nosotros" style="background: var(--info); min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <v-card class="pa-8" style="background: #fff; border-radius: 18px; box-shadow: 0 2px 12px rgba(34,58,94,0.08); max-width: 600px; width: 100%;">
            <h1 class="text-h4 font-weight-bold mb-4" style="color: var(--primary);">Sobre Nosotros</h1>
            <p class="text-h6 mb-2" style="color: var(--secondary);">Bienvenidos a Nosotros</p>
            <p style="color: #444;">Esta es la página de Nosotros.</p>
        </v-card>
    </div>
</template>

<style scoped>
.nosotros {
    padding: 2rem;
}
</style>