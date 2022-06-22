<template>
  <div class="phone">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.phone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: black 5px solid;
  border-radius: 40px;
  overflow: hidden;
  aspect-ratio: 9/16;

  &::before {
    content: "";
    display: block;
    top: 0;
    width: 50%;
    height: 2vh;
    margin: 0 auto;
    background-color: #111;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 40%;
    height: 1vh;
    margin: 0 auto;
    background-color: #111;
    border-radius: 20px;
  }
}
</style>
