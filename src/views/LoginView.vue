<script setup>
    import {useField,useForm} from 'vee-validate'
    import {loginSchema as validationSchema} from '../validation/loginschema'
    import {useAuthStore} from '../stores/auth'

    const {handleSubmit} =useForm({validationSchema})
    const auth=useAuthStore()

    const email = useField('email')
    const password = useField('password')

    const submit = handleSubmit((values) =>{
        auth.login(values)
    })




</script>

<template>
    <v-card flat max-width="600" class="mx-auto my-10" style="background: var(--info); border-radius: 18px; box-shadow: 0 2px 12px rgba(34,58,94,0.08);">
        <v-card-title class="text-h4 font-weight-bold" tag="h3" style="color: var(--primary);">
            Iniciar Sesión
        </v-card-title>
        <v-card-subtitle class="text-h5" style="color: var(--secondary);">
            Inicia Sesión con tu cuenta
        </v-card-subtitle>

        <v-alert
            v-if="auth.hasError"
            class="my-5"
            type="error"
            :title=auth.errorMsg
        ></v-alert>

        <v-form class="mt-5">
            <v-text-field 
                type="email"
                label="Email"
                bg-color="white"
                class="mb-3"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                style="--v-field-label-color: var(--primary);"
        />
            <v-text-field 
                type="password"
                label="Password"
                bg-color="white"
                class="mb-3"
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
                style="--v-field-label-color: var(--primary);"
            />
            <v-btn block  style="background: var(--accent); color: #fff; font-weight: bold; border-radius: 8px;" @click="submit" >
                Iniciar Sesión
            </v-btn>
        </v-form>
    </v-card>
</template>
