<template>
  <div class="container-login">
    <v-card
      class="mx-auto card-login"
      outlined
      elevation="20"
    >
      <v-form v-model="validFormLogin">
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
          @keyup.enter="validFormLogin ? sendLogin() : null"
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
          @keyup.enter="validFormLogin ? sendLogin() : null"
        />
        <v-checkbox
          class="ma-0"
          v-model="obscuredPassword"
          label="Mostrar senha"
          color="var(--green-default)"
        ></v-checkbox>
        <div
          class="box-btn-login"
        >
          <v-btn 
            class="btn-login"
            color="var(--green-default)"
            large
            :dark="validFormLogin"
            :disabled="!validFormLogin"
            @click="sendLogin"
          >
            LOGIN
          </v-btn>
        </div>
        <br />
        <span>Não tem conta? <router-link to="/register" class="register-link">Registre-se aqui</router-link></span>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LoginDto } from '~/@types'

@Component({})
export default class LoginPage extends Vue {
  mailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])+)\])/

  obscuredPassword: boolean = false
  validFormLogin: boolean = false

  mail: string = ''
  password: string = ''

  sendLogin(){
    let payload: LoginDto = {
      mail: this.mail.trim().toLowerCase(),
      password: this.password
    }

    console.log(payload);
    
  }
}
</script>

<style>
.container-login {
  background-image: linear-gradient(to bottom right, var(--green-default), #4FBF1F);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

.card-login {
  width: min(90vw, 450px);
  padding: 3rem 2.5rem;
}

.box-btn-login {
  display: flex;
  justify-content: center;
}

.btn-login {
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