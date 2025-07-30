<script setup>
import usePropiedades from '@/composables/usePropiedades';
import { propertyPrice } from '@/helpers'
import { ref } from 'vue'
import { useFirestore, useCollection } from 'vuefire'
import { collection, deleteDoc, doc } from 'firebase/firestore'

const { propiedadesCollection, deleteItem } = usePropiedades()

const db = useFirestore()
const consultasCollection = useCollection(collection(db, 'consultas'))
const mostrarConsultas = ref(false)

const eliminarConsulta = async (id) => {
    if (confirm('¿Eliminar esta consulta?')) {
        await deleteDoc(doc(db, 'consultas', id))
    }
}
</script>

<template>
    <div style="background: var(--info); min-height: 100vh; padding: 32px 0;">
        <h2 class="text-center text-h3 my-5 font-weight-bold" style="color: var(--primary);">Admin Panel</h2>
        <div class="d-flex flex-wrap justify-center mb-6" style="gap: 16px;">
            <v-btn style="background: var(--accent); color: #fff; border-radius: 8px; box-shadow: none;" variant="flat" :to="{ name: 'nueva-propiedad' }">
                Nueva Propiedad
            </v-btn>
            <v-btn style="background: var(--secondary); color: var(--primary); border-radius: 8px; box-shadow: none;" variant="flat" class="ml-4" @click="mostrarConsultas = !mostrarConsultas">
                {{ mostrarConsultas ? 'Ver Propiedades' : 'Ver Consultas' }}
            </v-btn>
        </div>
        <v-card class="mx-auto mt-10" flat style="background: #fff; border-radius: 16px; box-shadow: none; max-width: 900px;" v-if="mostrarConsultas">
            <v-list>
                <v-list-item v-for="consulta in consultasCollection" :key="consulta.id">
                    <v-list-item-title style="color: var(--primary);">{{ consulta.nombre }} ({{ consulta.email }}) {{ consulta.telefono }}</v-list-item-title>
                    <v-list-item-subtitle style="color: black;">{{ consulta.mensaje }}</v-list-item-subtitle>
                    <v-list-item-subtitle style="color: black;">{{ consulta.fecha?.toDate ? consulta.fecha.toDate().toLocaleString() : '' }}</v-list-item-subtitle>
                    <template v-slot:append>
                        <v-btn style="background: var(--error); color: #fff; border-radius: 8px; box-shadow: none;" flat @click="eliminarConsulta(consulta.id)">Eliminar</v-btn>
                    </template>
                </v-list-item>
            </v-list>
        </v-card>
        
        <v-card v-if="!mostrarConsultas" class="mx-auto mt-10" flat style="background: #fff; border-radius: 16px; box-shadow: none; max-width: 900px;">
            <v-list>
                <v-list-item v-for="propiedad in propiedadesCollection" :key="propiedad.id">
                    <v-list-item-title style="color: var(--primary);">{{ propiedad.titulo }}</v-list-item-title>
                    <v-list-item-subtitle class="text-truncate" style="color: black;">
                        {{ propiedad.direccion }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="text-truncate" style="color: black;">
                        {{ propiedad.descripcion }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle style="color: black; font-weight: bold;">
                        <span v-if="propiedad.moneda === 'ARS'">AR$</span><span v-else>US$</span> {{ propertyPrice(propiedad.precio, propiedad.moneda || 'USD') }}
                    </v-list-item-subtitle>
                    <template v-slot:append>
                        <v-btn style="background: var(--accent);border: 1px solid gray; color: #fff; border-radius: 8px; box-shadow: none;" flat class="mr-3"
                            :to="{ name: 'propiedad', params: { id: propiedad.id } }">
                            <v-icon style="color: black;">mdi-eye</v-icon>
                        </v-btn>
                        <v-btn style="background: var(--accent); color: #fff; border-radius: 8px; box-shadow: none;" flat class="mr-3"
                            :to="{ name: 'editar-propiedad', params: { id: propiedad.id } }">
                            Editar
                        </v-btn>
                        <v-btn style="background: var(--error); color: #fff; border-radius: 8px; box-shadow: none;" flat
                            @click="deleteItem(propiedad.id, propiedad.imagen)">Eliminar</v-btn>
                    </template>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>
