<template>
  <div class="bg-custom">
    <div class="container d-flex flex-column">
      <router-link class="link" to="/">
        Home
      </router-link>

      <h1 class="mt-5">Countdown Append</h1>
      <button class="btn btn-primary" @click="showCountDownTop = !showCountDownTop">
        Mostrar / Esconder
      </button>
      <div
        v-if="showCountDownTop"
        :class="{'bg-grey-2 shadow-1 ml-5 mr-5':true}"
        style="border-bottom-left-radius: 20em; border-bottom-right-radius: 20em; z-index: 100;"
        @mouseover="() => {openTimer=true}"
        @mouseout="() => {openTimer=false}"
      >
        <CountDown ref="certCountDown" :auto-start="false">
          <!-- para resetar this.$refs.certCountDown.countDown(true) -->
          <template #buttons>
            <div v-show="openTimer" class="d-flex justify-content-center mt-2 mb-2">
              <button  v-show="openTimer" class="btn btn-outline-primary rounded-pill">
                Click
              </button>
            </div>
          </template>
        </CountDown>
      </div>

      <h1 class="mt-5">Animações</h1>
      <div class="mt-5 mb-5 d-flex justify-content-between">
        <button class="btn btn-success rounded-pill bounce" rounded>
          Bouncing
        </button>
        <button class="btn btn-warning rounded-pill pulsate-warning">
          Pulsating
        </button>
        <button class="btn btn-primary rounded-pill bounce">
          Bouncing
        </button>
        <button class="btn btn-info rounded-pill bounce pulsate-info">
          Pulsating
        </button>
        <button class="btn btn-danger rounded-pill bounce">
          Bouncing
        </button>
      </div>
      <hr>

      <h1 class="mt-5">Input de Pesquisa</h1>
      <div class="mt-5 mb-5">
        <div class="rounded border bg-white d-flex">
          <div class="dropdown align-self-center">
            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nome
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Nome</a>
            <a class="dropdown-item" href="#">Empresa</a>
            <a class="dropdown-item" href="#">Integração Origem</a>
            <a class="dropdown-item" href="#">Integração Destino</a>
            </div>
          </div>
          <input class="border-0 bg-transparent flex-fill" />
          <button class="btn btn-primary text-white rounded-pill align-self-center">
            <i class="fas fa-search"/>
          </button>
        </div>
      </div>
      <hr>

      <h1>Input Float label</h1>
      <div class="mt-5 mb-5">
        <form-group-float-label label="Name" input-name="name" class="mt-3 mb-3" />
        <form-group-float-label label="Surname" input-name="surname" class="mt-3 mb-3" />
      </div>
      <hr>

      <h1>Contador</h1>
      <div class="mt-5 mb-5">
        <CountDownRounded />
      </div>
      <hr>

      <h1>Input Float Label</h1>
      <div class="mt-5 mb-5">
        <InputFloatLabel
          v-model="modelo"
          label="Label"
          input-name="nameinput"
          mandatory
        />
      </div>
      <hr>

      <h1>Phone</h1>
      <div class="mt-5 mb-5">
        <Phone style="height:400px" />
      </div>
      <hr>

      <h1>Shadows Inside</h1>
      <div class="mt-5 mb-5 d-inline-flex justify-content-around bg-white p-4 rounded">
        <div
          style="
            height: 50px;
            width: 50px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
          "
        />
        <div
          style="
            height: 50px;
            width: 50px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
          "
        />
        <div
          style="
            height: 50px;
            width: 50px;
            box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
          "
        />
        <div
          style="
            height: 50px;
            width: 50px;
            box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
          "
        />
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
import CountDownRounded from '@/components/CountDownRounded'
import FormGroupFloatLabel from '@/components/form-group-float-label'
import InputFloatLabel from '@/components/InputFloatLabel'
import Phone from '~/components/Phone.vue'

export default {
  name: 'Index',
  components: { FormGroupFloatLabel, CountDown, CountDownRounded, InputFloatLabel, Phone },
  data () {
    return {
      modelo: null,
      openTimer: false,
      showCountDownTop: false
    }
  }
}
</script>

<style scoped>
.bounce {
  animation: bounce 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  -webkit-animation-name: bounce;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-direction: alternate;
  -webkit-animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  -webkit-animation-iteration-count: infinite;
}

@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 3px, 0);
  }
}

@-webkit-keyframes bounce {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 3px, 0);
    transform: translate3d(0, 3px, 0);
  }
}

.pulsate-warning {
  -webkit-animation: pulsate-warning 1s infinite alternate;
  -moz-animation: pulsate-warning 1s infinite alternate;
  animation: pulsate-warning 1s infinite alternate;
}

.pulsate-info {
  -webkit-animation: pulsate-info 1s infinite alternate;
  -moz-animation: pulsate-info 1s infinite alternate;
  animation: pulsate-info 1s infinite alternate;
}

@keyframes pulsate-warning {
  0% {
    box-shadow: 0 0 0 0 #ffbc34;
  }
  100% {
    box-shadow: 0 0 4px 4px #ffbc34;
  }
}

@keyframes pulsate-info {
  0% {
    box-shadow: 0 0 0 0 #4fc3f7;
  }
  100% {
    box-shadow: 0 0 4px 4px #4fc3f7;
  }
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.w-50 {
    width: 50% !important;
}

.bg-grey-2 {
    background: #f5f5f5 !important;
    color: black;
}

.shadow-1 {
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
}
</style>
