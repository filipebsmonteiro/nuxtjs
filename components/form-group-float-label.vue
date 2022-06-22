<template>
  <div class="label-float ">
    <input
      :id="inputName"
      :type="inputType"
      :name="inputName"
      placeholder=" "
      class="form-control"
    />
    <label :for="inputName">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "form-group-float-label",
  props: {
    inputName: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
.label-float{
  position: relative;
}
.label-float input{
  width:100%;
  padding-left: 10px;
  
}
.label-float input:focus + label,
.label-float input:not(:placeholder-shown) + label{
  opacity:1;
  transform: scale(.9) translateY(-55%);
  -webkit-transform-origin-x: 0;
  border-radius: 5px;
  padding: 0rem 0.5rem;
}
.label-float input:focus{
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
.label-float label{
  position: absolute;
  padding: 0.375rem 0.75rem;
  top: 0;
  cursor: text;
  opacity:0.5;
}
.label-float label,
.label-float input{
  transition: all 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  color: #212529 !important;
  background-color: #fff !important;
}

.label-float input:-webkit-autofill,
.label-float input:-webkit-autofill:hover,
.label-float input:-webkit-autofill:focus,
.label-float input:-webkit-autofill:active {
  color: #212529 !important;
  background-color: #fff !important;
}
</style>