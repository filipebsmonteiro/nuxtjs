<template>
  <div class="d-flex flex-column justify-content-around">
    <div class="h3 font-weight-bold fit text-center">
      {{ timeLeft }}
    </div>

    <slot name="buttons" class="flex items-center mt-2 mb-2">
      <b-btn v-if="isCounting" :variant="btnColor" rounded icon="pause" @click="isCounting = !isCounting" />
      <b-btn
        v-if="!isCounting"
        color="primary"
        class="mr-3"
        rounded
        icon="play_arrow"
        @click="() => {
          isCounting = !isCounting
          timeFuture = Date.now() + (secondsLeft * 1000)
        }"
      />

      <q-btn :color="btnColor" icon="replay" rounded @click="countDown(true)" />

      <b-dropdown :color="btnColor" :label="timeSelected.label" rounded>
        <!-- <q-list> -->
        <b-dropdown-item
          v-for="(time, k) in times"
          :key="k"
          v-close-popup
          clickable
          @click="() => {timeSelected = time; countDown()}"
        >
          <!-- <q-item-section> -->
          <!-- <q-item-label>{{ time.label }}</q-item-label> -->
          {{ time.label }}
          <!-- </q-item-section> -->
        </b-dropdown-item>
        <!-- </q-list> -->
      </b-dropdown>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  props: {
    btnColor: {
      type: String,
      default: 'primary'
    },
    continueOnEnd: {
      type: Boolean,
      default: false
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isCounting: true,
      secondsLeft: 0,
      timeSelected: {
        label: '30 minutos',
        value: 1800
      },
      timeFuture: 0,
      times: [
        {
          label: '10 segundos',
          value: 10
        },
        {
          label: '30 segundos',
          value: 30
        },
        {
          label: '1 minuto',
          value: 60
        },
        {
          label: '2 minutos',
          value: 120
        },
        {
          label: '5 minutos',
          value: 300
        },
        {
          label: '10 minutos',
          value: 600
        },
        {
          label: '30 minutos',
          value: 1800
        }
      ]
    }
  },
  computed: {
    timeLeft () {
      const minutes = Math.floor((this.secondsLeft % 3600) / 60)
      const seconds = this.secondsLeft % 60
      const minString = minutes < 10 ? `0${minutes}` : `${minutes}`
      const secString = seconds < 10 ? `0${seconds}` : `${seconds}`

      return `${minString}:${secString}`
    }
  },
  mounted () {
    this.timeFuture = Date.now() + (this.secondsLeft * 1000)
    if (this.autoStart) {
      this.countDown()
    }
  },
  methods: {
    countDown (refresh = false) {
      if (refresh) {
        this.$emit('refresh')
        this.timeFuture = Date.now() + (this.secondsLeft * 1000)
      }
      clearInterval(this.intervalTimer)
      this.timeFuture = Date.now() + ((this.timeSelected.value + 1) * 1000)
      this.intervalTimer = setInterval(() => {
        if (this.isCounting) {
          this.secondsLeft = Math.round((this.timeFuture - Date.now()) / 1000)
          if (this.secondsLeft <= 0) {
            this.$emit('time-over')
            if (this.continueOnEnd) {
              this.timeFuture = Date.now() + ((this.timeSelected.value + 1) * 1000)
            }
          }
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
