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
    <v-col cols="12" md="4">
        <v-card class="pa-2" elevation="4" style="background: var(--info); border-radius: 18px; border: 1.5px solid var(--primary); transition: box-shadow 0.2s;">
            <!-- Carrusel de imágenes si hay varias -->
            <v-carousel
                v-if="Array.isArray(propiedad.imagenes) && propiedad.imagenes.length > 0"
                height="250"
                hide-delimiter-background
                show-arrows
                cycle
                color="primary"
                class="rounded-lg mb-2"
            >
                <v-carousel-item
                    v-for="(img, idx) in propiedad.imagenes"
                    :key="idx"
                >
                    <v-img :src="img" height="250" cover class="rounded-lg" />
                </v-carousel-item>
            </v-carousel>
            <!-- Imagen única si no hay array de imágenes -->
            <v-img
                v-else
                :src="propiedad.imagen"
                height="250"
                cover
                class="rounded-lg mb-2"
            />
            <v-chip class="ml-2"  style="color:var(--primary); font-weight: 500;font-size: bold;" variant="outlined" size="small">{{ propiedad.operacion }}</v-chip>

            <v-card-title class="font-weight-bold text-h6" style="color: var(--primary);">
                {{ propiedad.titulo }} 
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
    </v-col>
</template>