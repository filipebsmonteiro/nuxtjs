<template>
  <div class="flex-column border overflow-hidden rounded-pill">
    <h1 class="my-2 text-center">{{ timeLeft }}</h1>

    <div class="btn-group w-100" role="group">
      <button
        v-if="isCounting" @click="isCounting = !isCounting"
        class="btn btn-outline-secondary"
        style="flex-basis: 33%;"
      >
        <i class="fa fa-pause"/>
      </button>
      <button
        v-if="!isCounting"
        @click="() => {
              isCounting = !isCounting
              timeFuture = Date.now() + (secondsLeft * 1000)
          }"
        class="btn btn-outline-secondary"
        style="flex-basis: 33%;"
      >
        <i class="fa fa-play"/>
      </button>
      <button
        @click="countDown(true)"
        class="btn btn-outline-secondary"
        style="flex-basis: 33%;"
      >
        <i class="fas fa-redo"/>
      </button>

      <div class="btn-group" style="flex-basis: 33%;">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li
            v-for="(time, k) in times"
            :key="k"
            @click="() => {timeSelected = time.value; countDown()}"
          >
            <a class="dropdown-item" href="#">{{ time.label }}</a>
          </li>
        </ul>
      </div>

      <b-dropdown variant="outline-secondary">
        
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDownRounded",
  data() {
    return {
      isCounting: true,
      secondsLeft: 0,
      timeSelected: 300,
      timeFuture: 0,
      times: [
        {
          label: `10 segundos`,
          value: 10
        },
        {
          label: `30 segundos`,
          value: 30
        },
        {
          label: `1 minuto`,
          value: 60
        },
        {
          label: `2 minutos`,
          value: 120
        },
        {
          label: `5 minutos`,
          value: 300
        },
        {
          label: `10 minutos`,
          value: 600
        }
      ]
    }
  },
  computed: {
    timeLeft() {
      const minutes = Math.floor((this.secondsLeft % 3600) / 60)
      const seconds = this.secondsLeft % 60;
      const minString = minutes < 10 ? `0${minutes}` : `${minutes}`
      const secString = seconds < 10 ? `0${seconds}` : `${seconds}`

      return `${minString}:${secString}`;
    }
  },
  methods: {
    countDown(refresh = false) {
      if (refresh) {
        this.$emit('refresh')
        this.timeFuture = Date.now() + (this.secondsLeft * 1000)
      }
      clearInterval(this.intervalTimer)
      this.timeFuture = Date.now() + ((this.timeSelected + 1) * 1000)
      this.intervalTimer = setInterval(() => {
        if (this.isCounting) {
          this.secondsLeft = Math.round((this.timeFuture - Date.now()) / 1000)
          if (this.secondsLeft <= 0) {
            this.$emit('time-over')
            this.timeFuture = Date.now() + ((this.timeSelected + 1) * 1000)
            return
          }
        }
      }, 1000)
    }
  },
  mounted() {
    this.timeFuture = Date.now() + (this.secondsLeft * 1000)
    this.countDown()
  },
  beforeDestroy() {
    clearInterval(this.intervalTimer)
  }
}
</script>

<style lang="scss" scoped>
.mt--4{
  margin-top: -1.5rem !important;
}
.mb--4{
  margin-bottom: -1.5rem !important;
}
</style>
