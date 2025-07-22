<script setup>
defineProps({
    propiedad: {
        type: Object,
    },
    price: {
        type: Function,
    },
});
</script>

<template>
    <v-card style="width: 100%; max-width: 600px; margin: 0 auto; background: var(--info); border-radius: 20px; border: 2px solid var(--primary);" elevation="6">
        <!-- Carrusel de imágenes si hay varias -->
        <v-carousel
            v-if="Array.isArray(propiedad.imagenes) && propiedad.imagenes.length > 0"
            height="300"
            hide-delimiter-background
            cycle
            color="primary"
            :show-arrows="false"
            class="rounded-lg mb-2"
        >
            <v-carousel-item
                v-for="(img, idx) in propiedad.imagenes"
                :key="idx"
            >
                <v-img :src="img" height="300" width="100%" class="rounded-lg" cover />
            </v-carousel-item>
        </v-carousel>
        <!-- Imagen única si no hay array de imágenes -->
        <v-img
            v-else
            :src="propiedad.imagen"
            height="300"
            width="100%"
            cover
            class="rounded-lg mb-2"
        />
        <v-card-title class="font-weight-bold d-flex align-center text-h5" style="color: var(--primary);">
            {{ propiedad.titulo }}
            <v-chip v-if="propiedad.destacada" style="background: var(--secondary); color: var(--primary); font-weight: bold; margin-left: 12px;">
                Destacada
            </v-chip>
        </v-card-title>
        <v-card-text class="text-truncate" style="color: #444;">
            {{ propiedad.descripcion }}
        </v-card-text>
        <v-card-subtitle class="text-truncate" style="color: var(--secondary); font-weight: 500;">
            {{ propiedad.direccion }}
        </v-card-subtitle>
        <v-card-text class="text-h5 font-weight-bold" style="color: var(--accent);">
            Precio: <span v-if="propiedad.moneda === 'ARS'">AR$</span><span v-else>US$</span> {{ price(propiedad.precio, propiedad.moneda || 'USD') }}
        </v-card-text>
        <template v-slot:actions>
            <v-btn
                block
                style="background: var(--accent); color: #fff; font-weight: bold; border-radius: 8px;"
                variant="flat"
                :to="{ name: 'propiedad', params: { id: propiedad.id } }"
            >
                Ver información
            </v-btn>
        </template>
    </v-card>
</template>