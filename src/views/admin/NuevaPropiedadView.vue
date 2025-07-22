<script setup>
import { useField, useForm } from 'vee-validate';
// import {} from '../../validation/propiedadSchema'  EL @ APUNTA A src
import { validationSchema, imageSchema } from '@/validation/propiedadSchema'
import { collection, addDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { useRouter } from 'vue-router';
import useImages from '../../composables/useImages'
import useLocationMap from '../../composables/useLocacionMap'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { ref, onMounted } from 'vue'

const router = useRouter()
const items = [1, 2, 3, 4, 5]
const itemsOpercacion = [
    { text: 'Venta', value: 'venta' },
    { text: 'Alquiler', value: 'alquiler' }
]
const itemsTipo = [
    { text: 'Casa', value: 'casa' },
    { text: 'Departamento', value: 'departamento' },
    { text: 'Terreno', value: 'terreno' }
]
const { images, uploadImages, removeImage } = useImages()
const { zoom, center, pin } = useLocationMap()

const db = useFirestore()

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        ...validationSchema,
        ...imageSchema
    }
})
const titulo = useField('titulo')
const imagen = useField('imagen')
const precio = useField('precio')
const habitaciones = useField('habitaciones')
const wc = useField('wc')
const estacionamiento = useField('estacionamiento')
const descripcion = useField('descripcion')
const piscina = useField('piscina', null, {
    initialValue: false
})
const destacada = useField('destacada', null, {
    initialValue: false
})
const calle = useField('calle')
const operacion = useField('operacion')
const tipo = useField('tipo')
const expensas = useField('expensas', null, {
    initialValue: false
})
const cochera = useField('cochera', null, {
    initialValue: false
})
const barrios = ref([])
const barrio = useField('barrio')
const moneda = useField('moneda', null, { initialValue: 'USD' })


const submit = handleSubmit(async (values) => {
    try {
        const { imagen, ...propiedad } = values;
        const data = {
            ...propiedad,
            precio: Number(propiedad.precio),
            moneda: moneda.value.value,
            imagenes: images.value.map(img => img.url),
            ubicacion: center.value,
            destacada: destacada.value.value
        };
        console.log('Datos a guardar:', data);
        const docRef = await addDoc(collection(db, "propiedades"), data);
        if (docRef.id) {
            handleReset();        // Limpia los campos del formulario
            images.value = [];
            router.push({ name: 'admin-propiedades' });
        }
    } catch (error) {
        console.error("Error al guardar la propiedad:", error.code, error.message, error);
    }
});

const cancelar = () => {
    handleReset()
    images.value = []
    router.push({ name: 'admin-propiedades' })
}
</script>

<template>
    <v-card max-width="800" flat class="mx-auto my-10" style="background: #fff; border-radius: 18px; box-shadow: none;">
        <v-card-title class="text-h4 font-weight-bold" tag="h3" style="color: var(--primary);">
            Nueva Propiedad
        </v-card-title>
        <v-card-subtitle class="text-h5 py-5" style="color: var(--secondary);">
            Crea una nueva propiedad completando el siguiente formulario
        </v-card-subtitle>

        <v-form class="mt-10" @submit.prevent="submit">
            <v-text-field class="mb-5" label="Titulo Propiedad" v-model="titulo.value.value"
                :error-messages="titulo.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;" />

            <v-text-field class="mb-5" label="calle" v-model="calle.value.value"
                :error-messages="calle.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;" />
            <v-text-field class="mb-5" label="Barrio" v-model="barrio.value.value"
                :error-messages="barrio.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;" />
            <v-select label="Operación" class="mb-5" :items="itemsOpercacion" item-title="text" item-value="value"
                v-model="operacion.value.value" :error-messages="operacion.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;" />

            <v-select label="Tipo de Propiedad" class="mb-5" :items="itemsTipo" item-title="text" item-value="value"
                v-model="tipo.value.value" :error-messages="tipo.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;" />
            <v-file-input accept="image/jpeg" label="Fotografías" prepend-icon="mdi-camera" class="mb-5"
                v-model="imagen.value.value" :error-messages="imagen.errorMessage.value" @change="uploadImages" multiple
                show-size style="background: var(--info); border-radius: 8px; border: none;" />
            <div v-if="images.length" class="my-5">
                <p class="font-weight-bold" style="color: var(--primary);">Imágenes de la Propiedad</p>
                <div class="d-flex flex-wrap">
                    <div v-for="(img, idx) in images" :key="img.public_id" class="mr-4 mb-4">
                        <img :src="img.url" alt="imagen de propiedad"
                            style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid var(--info);" />
                        <v-btn icon color="error" size="x-small" @click="removeImage(idx)" style="box-shadow: none;">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
            <v-text-field class="mb-5" label="Precio" v-model="precio.value.value"
                :error-messages="precio.errorMessage.value"
                type="number"
                style="background: var(--info); border-radius: 8px; border: none;" />
                <v-select label="Moneda" class="mb-5"
                :items="[{ text: 'Dólares (USD)', value: 'USD' }, { text: 'Pesos (ARS)', value: 'ARS' }]"
                item-title="text" item-value="value" v-model="moneda.value.value"
                :error-messages="moneda.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;" />
            <v-row class="justify-center mx-10">
                <v-checkbox label="Cochera" v-model="cochera.value.value" :error-messages="cochera.errorMessage.value"
                    style="margin-right: 16px;" />
                <v-checkbox label="Piscina" v-model="piscina.value.value" :error-messages="piscina.errorMessage.value"
                    style="margin-right: 16px;" />
                <v-checkbox label="Propiedad destacada" v-model="destacada.value.value" class="mb-5"
                    style="margin-right: 16px;" />
                <v-checkbox label="Expensas" v-model="expensas.value.value"
                    :error-messages="expensas.errorMessage.value" />
            </v-row>
            <v-row class="justify-center">
                <v-col cols="12" md="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items" v-model="habitaciones.value.value"
                        :error-messages="habitaciones.errorMessage.value"
                        style="background: var(--info); border-radius: 8px; border: none;" />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="Baños" class="mb-5" :items="items" v-model="wc.value.value"
                        :error-messages="wc.errorMessage.value"
                        style="background: var(--info); border-radius: 8px; border: none;" />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="Lugares Estacionamiento" class="mb-5" :items="items"
                        v-model="estacionamiento.value.value" :error-messages="estacionamiento.errorMessage.value"
                        style="background: var(--info); border-radius: 8px; border: none;" />
                </v-col>
            </v-row>
            <v-textarea class="mb-5" label="Descripción" v-model="descripcion.value.value"
                :error-messages="descripcion.errorMessage.value"
                style="background: var(--info); border-radius: 8px; border: none;"></v-textarea>
            <h2 class=" font-weight-bold text-center my-5" style="color: var(--primary);">Ubicación</h2>
            <div class="pb-10">
                <div style="height:600px">
                    <LMap ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                        <LMarker :lat-lng="center" draggable @moveend="pin" />
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                    </LMap>
                </div>
            </div>

            <v-btn style="background: var(--accent); color: #fff; border-radius: 8px; box-shadow: none;" type="submit"
                class="mx-auto d-block">
                Agregar Propiedad
            </v-btn>
            <v-btn
                style="background: var(--error); color: #fff; border-radius: 8px; box-shadow: none; margin-top: 12px;"
                class="mx-auto d-block" @click="cancelar">
                Cancelar
            </v-btn>
        </v-form>
    </v-card>
</template>