<template>
  <div class="container-register">
    <v-card
      class="mx-auto card-register"
      outlined
      elevation="20"
    >
      <v-form v-model="validFormRegister">
        <v-text-field
          v-model="name"
          label="Nome completo"
          :rules="[
            v => !!v || 'Nome é obrigatório',
          ]"
          color="var(--green-default)"
          append-icon="mdi-account"
          outlined
          @keyup.enter="validFormRegister ? sendRegister() : null"
        />
        <v-text-field
          v-model="mail"
          label="E-mail"
          :rules="[
            v => !!v || 'E-mail é obrigatório',
            v => mailPattern.test(v) || 'Email não possui um formato válido'
          ]"
          color="var(--green-default)"
          append-icon="mdi-email"
          outlined
          @keyup.enter="validFormRegister ? sendRegister() : null"
        />
        <v-text-field
          v-model="password"
          label="Senha"
          :rules="[
            v => !!v || 'Senha é obrigatória',
            v => (!!v && v.length >= 8) || 'Senha com no min. 8 caracteres'
          ]"
          :type="!obscuredPassword ? 'password' : 'text'"
          color="var(--green-default)"
          append-icon="mdi-lock"
          outlined
          @keyup.enter="validFormRegister ? sendRegister() : null"
        />
        <v-checkbox
          class="ma-0"
          v-model="obscuredPassword"
          label="Mostrar senha"
          color="var(--green-default)"
        ></v-checkbox>
        <div
          class="box-btn-register"
        >
          <v-btn 
            class="btn-register"
            color="var(--green-default)"
            large
            :dark="validFormRegister"
            :disabled="!validFormRegister"
            @click="sendRegister"
          >
            Finalizar
          </v-btn>
        </div>
        <br />
        <span>Já tem uma conta? <router-link to="/login" class="register-link">Login</router-link></span>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LoginDto } from '~/@types'

@Component({})
export default class RegisterPage extends Vue {
  mailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])+)\])/

  obscuredPassword: boolean = false
  validFormRegister: boolean = false

  name: string = ''
  mail: string = ''
  password: string = ''

  sendRegister(){
    let payload = {
      name: this.name.toUpperCase(),
      mail: this.mail.trim().toLowerCase(),
      password: this.password
    }

    console.log(payload);
    
  }
}
</script>

<style>
.container-register {
  background-image: linear-gradient(to bottom right, var(--green-default), #4FBF1F);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

.card-register {
  width: min(90vw, 450px);
  padding: 1.5rem 2.5rem;
}

.box-btn-register {
  display: flex;
  justify-content: center;
}

.btn-register {
  width: min(50vw, 300px);
}

.v-application a {
  color: var(--green-default);
}

.register-link {
  opacity: 0.6;
  text-decoration: none;
}

.register-link:hover {
  opacity: 1;
  cursor: pointer;
}
</style>