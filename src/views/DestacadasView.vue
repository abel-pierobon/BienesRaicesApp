<script setup>
import { ref, computed } from 'vue'
import { usePropiedades } from '../composables/usePropiedades'
import PropiedadesDestacadas from '../components/PropiedadesDestacadas.vue'
import { price } from '../helpers/index.js'

const { propiedades } = usePropiedades()

const destacadas = computed(() =>
  propiedades.value.filter(p => p.destacada)
)
</script>

<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-6" style="color: var(--primary);">Propiedades Destacadas</h1>
    <v-row>
      <v-col cols="12" v-if="destacadas.length === 0">
        <v-alert type="info" border="left" color="primary">
          No hay propiedades destacadas en este momento.
        </v-alert>
      </v-col>
      <v-col cols="12" md="6" v-for="propiedad in destacadas" :key="propiedad.id">
        <PropiedadesDestacadas :propiedad="propiedad" :price="price" />
      </v-col>
    </v-row>
  </v-container>
</template> 