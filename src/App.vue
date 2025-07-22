<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
const auth = useAuthStore()
const drawer = ref(false)
</script>

<template>
  <v-card elevation="6" max-width="1300" class="mx-auto rounded-xl" style="background: var(--primary); color: #fff;">
    <v-layout>
      <v-app-bar :color="$vuetify.theme.current.colors.primary" flat height="80" class="rounded-b-xl" style="background: var(--primary);">
        <template v-slot:prepend>
          <v-btn :to="{ name: 'home' }" variant="text" class="d-flex align-center" style="color: var(--secondary);">
            <v-icon size="36" class="mr-2">mdi-home-city</v-icon>
            <span class="text-h5 font-weight-bold">VM</span>
            <span class="ml-2 text-subtitle-1 font-weight-light">Propiedades</span>
          </v-btn>
        </template>
        <v-spacer />
        <!-- Botón hamburguesa solo en mobile -->
        <v-btn icon class="d-md-none" @click="drawer = true" style="color: var(--secondary);">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <!-- Navegación normal solo en desktop -->
        <template v-slot:append>
          <div class="d-none d-md-flex">
            <div v-if="auth.isAuth">
              <v-btn :to="{ name: 'admin-propiedades' }" variant="text" style="color: var(--secondary);">Admin</v-btn>
              <v-btn :to="{ name: 'destacadas' }" variant="text" style="color: var(--secondary);">Propiedades Destacadas</v-btn>
              <v-btn @click="auth.logout" variant="text" style="color: var(--secondary);">Cerrar Sesión</v-btn>
            </div>
            <div v-else>
              <v-btn :to="{ name: 'home' }" variant="text" style="color: var(--secondary);">Inicio</v-btn>
              <v-btn :to="{ name: 'destacadas' }" variant="text" style="color: var(--secondary);">Propiedades Destacadas</v-btn>
              <v-btn :to="{name: 'contacto'}" variant="text" style="color: var(--secondary);">Contactanos</v-btn>
              <v-btn :to="{ name: 'login' }" variant="flat" style="background: var(--accent); color: #fff;">Iniciar Sesión</v-btn>
            </div>
          </div>
        </template>
      </v-app-bar>
      <!-- Drawer para mobile -->
      <v-navigation-drawer v-model="drawer" temporary location="right" class="d-md-none" style="background: #fff; color: var(--primary);">
        <v-list nav>
          <template v-if="auth.isAuth">
            <v-list-item @click="drawer = false" :to="{ name: 'admin-propiedades' }">
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item>
            <v-list-item @click="drawer = false" :to="{ name: 'destacadas' }">
              <v-list-item-title>Destacadas</v-list-item-title>
            </v-list-item>
            <v-list-item @click="auth.logout(); drawer = false">
              <v-list-item-title>Cerrar Sesión</v-list-item-title>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-item @click="drawer = false" :to="{ name: 'home' }">
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
            <v-list-item @click="drawer = false" :to="{ name: 'destacadas' }">
              <v-list-item-title>Destacadas</v-list-item-title>
            </v-list-item>
            <v-list-item @click="drawer = false" :to="{ name: 'contacto' }">
              <v-list-item-title>Contactanos</v-list-item-title>
            </v-list-item>
            <v-list-item @click="drawer = false" :to="{ name: 'login' }">
              <v-list-item-title>Iniciar Sesión</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-main style="background: var(--info); min-height: 100vh;">
        <v-container fluid class="pa-0">
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
    <footer style="background: #fff; color: var(--primary); border-radius: 0 0 18px 18px; box-shadow: 0 -1px 8px rgba(34,58,94,0.04); padding: 32px 0 16px 0; text-align: center; font-size: 1.1rem;">
      <div class="mb-2" style="font-weight: bold;">VMP Propiedades</div>
      <div class="mb-1">San Martín 123, Villa María, Córdoba</div>
      <div class="mb-1">Tel: +54 9 351 706-2293 | info@vmp-propiedades.com</div>
      <div style="font-size: 0.95rem; color: #888;">&copy; {{ new Date().getFullYear() }} VMP Propiedades. Todos los derechos reservados.</div>
    </footer>
  </v-card>
  <a
    href="https://wa.me/5493517062293" 
    target="_blank" 
    style="position: fixed; bottom: 32px; right: 32px; z-index: 9999;"
  >
    <v-btn style="background: var(--accent); color: #fff;" icon size="x-large">
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </a>
</template>

