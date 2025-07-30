<script setup>
import { ref } from 'vue'
import { useFirestore } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'

const nombre = ref('')
const telefono = ref('')
const email = ref('')
const mensaje = ref('')
const enviado = ref(false)
const db = useFirestore()

const enviarFormulario = async () => {
  await addDoc(collection(db, 'consultas'), {
    nombre: nombre.value,
    telefono: telefono.value,
    email: email.value,
    mensaje: mensaje.value,
    fecha: new Date()
  })
  enviado.value = true
  nombre.value = ''
  telefono.value = ''
  email.value = ''
  mensaje.value = ''
}
</script>

<template>
  <v-container class="py-10" style="background: var(--info); min-height: 100vh;">
    <v-row justify="center" align="stretch" class="gap-8">
      <v-col cols="12" md="6">
        <v-card elevation="0" class="pa-8 rounded-xl" style="background: #fff; border: none; box-shadow: none;">
          <h1 class="text-h4 font-weight-bold mb-6 text-center" style="color: var(--primary);">Contacto</h1>
          <v-form @submit.prevent="enviarFormulario">
            <v-text-field
              v-model="nombre"
              label="Nombre"
              prepend-inner-icon="mdi-account"
              class="mb-4"
              style="background: var(--info); border-radius: 8px; border: none;"
              required
            />
            <v-text-field
              v-model="telefono"
              label="Teléfono"
              prepend-inner-icon="mdi-phone"
              class="mb-4"
              style="background: var(--info); border-radius: 8px; border: none;"
              required
            />
            <v-text-field
              v-model="email"
              label="Correo electrónico"
              prepend-inner-icon="mdi-email"
              class="mb-4"
              type="email"
              style="background: var(--info); border-radius: 8px; border: none;"
              required
            />
            <v-textarea
              v-model="mensaje"
              label="Mensaje"
              prepend-inner-icon="mdi-message"
              class="mb-4"
              rows="4"
              style="background: var(--info); border-radius: 8px; border: none;"
              required
            />
            <v-btn style="background: var(--accent); color: #fff; border-radius: 8px; box-shadow: none;" type="submit" block size="large" variant="flat">Enviar</v-btn>
          </v-form>
          <v-alert
            v-if="enviado"
            type="success"
            class="mt-4"
            border="start"
            prominent
            text
            style="background: var(--info); color: var(--primary); border: none; box-shadow: none;"
          >
            ¡Gracias por contactarnos! Te responderemos a la brevedad.
          </v-alert>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card elevation="0" class="pa-8 rounded-xl d-flex flex-column justify-center align-center h-100" style="background: #fff; border: none; box-shadow: none;">
          <h2 class="text-h5 font-weight-bold mb-4 text-center" style="color: var(--primary);">Datos de contacto</h2>
          <v-list density="compact" class="bg-transparent">
            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-whatsapp</v-icon></v-list-item-icon>
              <v-list-item-title style="color: var(--primary);">+54 9 351 706-2293</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="primary">mdi-phone</v-icon></v-list-item-icon>
              <v-list-item-title style="color: var(--primary);">+54 9 351 706-2293</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="error">mdi-email</v-icon></v-list-item-icon>
              <v-list-item-title style="color: var(--primary);">info@bienesraices.com</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="secondary">mdi-map-marker</v-icon></v-list-item-icon>
              <v-list-item-title style="color: var(--primary);">San Martín 123, Córdoba, Córdoba</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider class="my-4" style="border-color: var(--info);" />
          <div class="text-center">
            <v-btn style="background: var(--accent); color: #fff; box-shadow: none;" icon size="large" href="https://wa.me/5493517062293" target="_blank">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <span class="ml-2" style="color: var(--primary);">¡Escríbenos por WhatsApp!</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  background: #fff;
}
.v-list-item-title {
  font-size: 1.1rem;
}
.v-list-item-icon {
  margin-right: 8px;
}
</style>