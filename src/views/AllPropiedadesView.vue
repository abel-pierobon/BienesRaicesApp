<script setup>
import usePropiedades from '@/composables/usePropiedades'
import Propiedad from '../components/Propiedad.vue'
import { propertyPrice } from '../helpers'
import { ref } from 'vue'

const {
  propiedadesCollection,
  filteredItem,
  piscina,
  cochera,
  habitacionesMin,
  tipo,
  operacion,
  expensas,
  DeleteFilter
} = usePropiedades()

const tipos = [
  { text: 'Todos', value: '' },
  { text: 'Casa', value: 'casa' },
  { text: 'Departamento', value: 'departamento' },
  { text: 'Terreno', value: 'terreno' }
]
const operaciones = [
  { text: 'Todas', value: '' },
  { text: 'Venta', value: 'venta' },
  { text: 'Alquiler', value: 'alquiler' }
]
const showFilters = ref(false)
</script>

<template>
  <main style="background: var(--info); min-height: 100vh;">
    <h1 class="text-center text-h3 font-weight-bold my-5" style="color: var(--primary);">Todas las Propiedades</h1>
    <div class="d-flex flex-wrap justify-end mb-4" style="max-width: 1100px; margin: 0 auto;">
      <v-btn variant="flat" style="background: var(--accent); color: #fff; border-radius: 8px; font-weight: bold; min-width: 120px;" @click="showFilters = !showFilters">
        {{ showFilters ? 'Ocultar filtros' : 'Filtrar' }}
      </v-btn>
    </div>
    <transition name="fade">
      <v-card v-if="showFilters" flat class="py-6 px-2 mb-8" style="background: #fff; border-radius: 18px; box-shadow: none; max-width: 1100px; margin: 0 auto;">
        <v-row class="align-center" style="gap: 16px;">
          <v-select
            v-model="tipo"
            :items="tipos"
            item-title="text"
            item-value="value"
            label="Tipo"
            style="background: var(--info); border-radius: 8px; border: none; min-width: 160px;"
            hide-details
            density="comfortable"
          />
          <v-select
            v-model="operacion"
            :items="operaciones"
            item-title="text"
            item-value="value"
            label="Operación"
            style="background: var(--info); border-radius: 8px; border: none; min-width: 160px;"
            hide-details
            density="comfortable"
          />
          <v-text-field
            v-model.number="habitacionesMin"
            type="number"
            min="0"
            label="Habitaciones mín."
            style="background: var(--info); border-radius: 8px; border: none; max-width: 140px;"
            hide-details
            density="comfortable"
          />
          <v-checkbox
            v-model="piscina"
            label="Piscina"
            hide-details
            density="comfortable"
            style="margin-right: 8px;"
          />
          <v-checkbox
            v-model="cochera"
            label="Cochera"
            hide-details
            density="comfortable"
            style="margin-right: 8px;"
          />
          <v-checkbox
            v-model="expensas"
            label="Expensas"
            hide-details
            density="comfortable"
          />
          <v-btn variant="text" style="color: var(--error); font-weight: bold; margin-left: 16px;" @click="DeleteFilter">Limpiar</v-btn>
        </v-row>
      </v-card>
    </transition>
    <v-card flat class="py-10 px-2" style="background: var(--info); box-shadow: 0 2px 12px rgba(34,58,94,0.08); border-radius: 18px;">
      <v-row>
        <Propiedad v-for="propiedad in filteredItem" :key="propiedad.id" :propiedad="propiedad" :price="(precio, moneda) => propertyPrice(precio, propiedad.moneda || 'USD')" />
      </v-row>
    </v-card>
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 