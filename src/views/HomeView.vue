<script setup>
import usePropiedades from '@/composables/usePropiedades'
import Propiedad from '../components/Propiedad.vue'
import PropiedadesDestacadas from '../components/PropiedadesDestacadas.vue'
import { propertyPrice } from '../helpers'
import { computed } from 'vue'

const { propiedadesCollection } = usePropiedades()

const destacadas = computed(() =>
  propiedadesCollection.value.filter(p => p.destacada === true)
)
</script>

<template>
  <main style="background: var(--info); min-height: 100vh;">
    <h1 class="text-center text-h3 font-weight-bold my-5" style="color: var(--primary);">Propiedades Destacadas</h1>
    <v-carousel
      v-if="destacadas.length > 0"
      height="600"
      hide-delimiter-background
      show-arrows
      cycle
      color="primary"
      class="mb-10 rounded-xl"
      style="box-shadow: 0 2px 16px rgba(34,58,94,0.10);"
    >
      <v-carousel-item
        v-for="(propiedad, idx) in destacadas"
        :key="propiedad.id"
      >
        <PropiedadesDestacadas :propiedad="propiedad" :price="propertyPrice" />
      </v-carousel-item>
    </v-carousel>
    <div v-else class="text-center py-10">
      <h2 style="color: var(--primary);">No hay propiedades destacadas por el momento.</h2>
    </div>
  </main>
</template>
