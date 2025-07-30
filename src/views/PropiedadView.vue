<script setup>
import { doc } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
import { useDocument, useFirestore } from 'vuefire';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import useLocationMap from '@/composables/useLocacionMap';
import { propertyPrice } from '../helpers'
import { watch } from 'vue';

const { zoom, center } = useLocationMap()

const route = useRoute()
const router = useRouter()
const db = useFirestore()
const docRef = doc(db, 'propiedades', route.params.id)
const propiedad = useDocument(docRef)

watch(propiedad, (propiedad) => {
    center.value = propiedad.ubicacion
})
</script>

<template>
    <v-card flat style="background: var(--info); border-radius: 18px; box-shadow: 0 2px 12px rgba(34,58,94,0.08);">
        <v-btn color="accent" variant="flat" class="ma-4" style="background: var(--accent); color: #fff; font-weight: bold; border-radius: 8px;" @click="router.back()">
            <v-icon start>mdi-arrow-left</v-icon>
            Atrás
        </v-btn>
        <v-card-title class="mt-5 text-h5 text-md-h4 text-center py-5 font-weight-bold" style="color: var(--primary);">
            {{ propiedad?.titulo }}
        </v-card-title>

        <!-- Carrusel de imágenes -->
        <v-carousel v-if="propiedad?.imagenes && propiedad.imagenes.length" height="450" hide-delimiter-background
            show-arrows cycle color="primary" class="rounded-xl mb-4" style="box-shadow: 0 2px 16px rgba(34,58,94,0.10);">
            <v-carousel-item v-for="(img, idx) in propiedad.imagenes" :key="idx">
                <v-img :src="img" class="rounded-lg" height="450" />
            </v-carousel-item>
        </v-carousel>
        <!-- Si no hay imágenes, muestra una sola imagen si existe -->
        <v-img v-else-if="propiedad?.imagen" :src="propiedad.imagen" height="550" class="rounded-xl mb-4" />

        <div class="d-flex flex-column flex-md-row align-center" style="background: #fff; border-radius: 12px; box-shadow: 0 1px 6px rgba(34,58,94,0.06); margin-bottom: 24px;">
            <v-card-text style="color: var(--primary);">
                Precio:
                <span class="font-weight-bold" style="color: var(--accent);">
                    <span v-if="propiedad?.moneda === 'ARS'">AR$</span><span v-else>US$</span> {{ propertyPrice(propiedad?.precio, propiedad?.moneda || 'USD') }}
                </span>
            </v-card-text>
            <v-card-text style="color: var(--primary);">
                Habitaciones:
                <span class="font-weight-bold" style="color: var(--secondary);"> {{ propiedad?.habitaciones }}</span>
            </v-card-text>
            <v-card-text style="color: var(--primary);">
                Baños:
                <span class="font-weight-bold" style="color: var(--secondary);"> {{ propiedad?.wc }}</span>
            </v-card-text>
            <v-card-text style="color: var(--primary);">
                Estacionamiento:
                <span class="font-weight-bold" style="color: var(--secondary);"> {{ propiedad?.estacionamiento }}</span>
            </v-card-text>
        </div>
        <v-row>
            <v-col cols="12" md="8">
                <div class="text-pre-wrap py-5 px-3" style="color: #444; background: #fff; border-radius: 12px; box-shadow: 0 1px 6px rgba(34,58,94,0.06);">
                    {{ propiedad?.descripcion }}
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="py-10 px-2" style="height: 400px; background: #fff; border-radius: 12px; box-shadow: 0 1px 6px rgba(34,58,94,0.06);">
                    <LMap ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                        <LMarker :lat-lng="center">
                            <LPopup>
                                {{ propiedad?.titulo }}
                            </LPopup>
                        </LMarker>
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                    </LMap>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>
<style>
.text-pre-wrap {
    white-space: pre-wrap;
}
</style>