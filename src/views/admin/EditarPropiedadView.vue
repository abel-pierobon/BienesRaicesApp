<script setup>
import { doc, updateDoc } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
import { useDocument, useFirestore } from 'vuefire';

import { useField, useForm } from 'vee-validate'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import useImages from '@/composables/useImages'
import useLocacionMap from '@/composables/useLocacionMap'
import { validationSchema } from '@/validation/propiedadSchema'
import { watch } from 'vue';

const items = [1, 2, 3, 4, 5]

// Usar el composable modificado para múltiples imágenes
const { images, uploadImages, removeImage } = useImages()
const { zoom, center, pin } = useLocacionMap()

// const { handleSubmit } = useForm({ validationSchema });
const { handleSubmit } = useForm();
const titulo = useField('titulo')
const imagen = useField('imagen')
const precio = useField('precio')
const habitaciones = useField('habitaciones')
const wc = useField('wc')
const estacionamiento = useField('estacionamiento')
const descripcion = useField('descripcion')
const piscina = useField('piscina')
const destacada = useField('destacada', null, {
    initialValue: false
})
const moneda = useField('moneda', null, { initialValue: 'USD' })

const route = useRoute()
const router = useRouter()

const db = useFirestore()
const docRef = doc(db, 'propiedades', route.params.id)
const propiedad = useDocument(docRef)

// Para inicializar las imágenes actuales
watch(propiedad, (prop) => {
    if (!prop) return;
    titulo.value.value = prop.titulo
    precio.value.value = prop.precio
    habitaciones.value.value = prop.habitaciones
    wc.value.value = prop.wc
    estacionamiento.value.value = prop.estacionamiento
    descripcion.value.value = prop.descripcion
    piscina.value.value = prop.piscina
    center.value = prop.ubicacion
    destacada.value.value = prop.destacada || false
    moneda.value.value = prop.moneda || 'USD'
    // Inicializa las imágenes actuales en el composable
    if (Array.isArray(prop.imagenes)) {
        images.value = prop.imagenes.map(url => typeof url === 'string' ? { url, public_id: null } : url)
    } else if (prop.imagen) {
        images.value = [{ url: prop.imagen, public_id: null }]
    }
}, { immediate: true })

const submit = handleSubmit(async values => {
    console.log('Submit ejecutado', values)
    try {
        const { imagen, ...rest } = values
        const data = {
            ...rest,
            moneda: moneda.value.value,
            imagenes: images.value.map(img => img.url),
            ubicacion: center.value,
            destacada: destacada.value.value // guardar el campo destacada
        }
        console.log('Datos a guardar:', data)
        await updateDoc(docRef, data)
        router.push({ name: 'admin-propiedades' })
    } catch (error) {
        console.error('Error al guardar en Firestore:', error)
        alert('Hubo un error al guardar los cambios.')
    }
})
</script>

<template>
    <v-card max-width="800" flat class="mx-auto my-10" style="background: #fff; border-radius: 18px; box-shadow: none;">
        <v-card-title class="mt-5">
            <h1 class="text-h4 font-weight-bold" style="color: var(--primary);">Editar Propiedad</h1>
        </v-card-title>
        <v-card-subtitle>
            <p class="text-h5" style="color: var(--secondary);">Edita los detalles de la propiedad</p>
        </v-card-subtitle>

        <v-form class="mt-10" @submit.prevent="submit">
            <v-text-field v-model="titulo.value.value" :error-messages="titulo.errorMessage.value" label="Titulo"
                class="mb-5" style="background: var(--info); border-radius: 8px; border: none;" />

            <v-file-input v-model="imagen.value.value" :error-messages="imagen.errorMessage.value" accept="image/jpeg"
                prepend-icon="mdi-camera" label="Fotografías" class="mb-5" @change="uploadImages" multiple
                show-size style="background: var(--info); border-radius: 8px; border: none;" />

            <div class="my-5">
                <p class="font-weight-bold" style="color: var(--primary);">Imágenes actuales:</p>
                <v-row dense>
                    <v-col v-for="(img, idx) in images" :key="img.public_id || img.url" cols="4" class="d-flex align-center">
                        <div style="position:relative; width:100%;">
                            <v-img :src="img.url" height="100" cover class="rounded-lg" />
                            <v-btn icon color="error" size="x-small"
                                style="position:absolute;top:8px;right:8px;z-index:2; box-shadow: none;" @click.stop="removeImage(idx)">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <v-text-field v-model="precio.value.value" :error-messages="precio.errorMessage.value" label="Precio"
                class="mb-5" style="background: var(--info); border-radius: 8px; border: none;" />

            <v-row>
                <v-col cols="12" md="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items" v-model="habitaciones.value.value"
                        :error-messages="habitaciones.errorMessage.value" style="background: var(--info); border-radius: 8px; border: none;" />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="WC" class="mb-5" :items="items" v-model="wc.value.value"
                        :error-messages="wc.errorMessage.value" style="background: var(--info); border-radius: 8px; border: none;" />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="Lugares Estacionamiento" class="mb-5" :items="items"
                        v-model="estacionamiento.value.value" :error-messages="estacionamiento.errorMessage.value" style="background: var(--info); border-radius: 8px; border: none;" />
                </v-col>
            </v-row>

            <v-select label="Moneda" class="mb-5" :items="[{ text: 'Dólares (USD)', value: 'USD' }, { text: 'Pesos (ARS)', value: 'ARS' }]" item-title="text" item-value="value" v-model="moneda.value.value" :error-messages="moneda.errorMessage.value" style="background: var(--info); border-radius: 8px; border: none;" />

            <v-textarea v-model="descripcion.value.value" :error-messages="descripcion.errorMessage.value"
                label="Descripción" class="mb-5" style="background: var(--info); border-radius: 8px; border: none;"></v-textarea>

            <v-checkbox v-model="piscina.value.value" label="Piscina" style="margin-right: 16px;" />
            <v-checkbox v-model="destacada.value.value" label="Propiedad destacada" class="mb-5" style="margin-right: 16px;" />

            <h2 class="font-weight-bold text-center my-5" style="color: var(--primary);">Ubicación</h2>
            <div class="pb-10">
                <div style="height:600px">
                    <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                        <LMarker :lat-lng="center" draggable @moveend="pin" />
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                    </LMap>
                </div>
            </div>

            <v-btn style="background: var(--accent); color: #fff; border-radius: 8px; box-shadow: none;" block type="submit">
                Guardar Cambios
            </v-btn>
        </v-form>
    </v-card>
</template>