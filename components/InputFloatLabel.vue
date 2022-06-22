<template>
  <div class="label-float border rounded d-flex">
    <input
      :id="inputName"
      :type="inputType"
      :name="inputName"
      placeholder=" "
      :disabled="disabled"
      :value="value"
      :class="{
        'form-control inputClass border-0': true,
        'border-left-danger': mandatory && (value === '' || value === 0),
        'border-left-success': mandatory && value !== '' && value !== null
      }"
      @input="evt => $emit('input', evt)"
      @change="evt => $emit('change', evt)"
      @keyup="evt => $emit('keyup', evt)"
    />
    <label :for="inputName">{{ label }}</label>
    <slot name="action-button">
      <div class="d-flex align-items-center pl-2 pr-2 bg-white" style="margin-left: -3px;">
        <i
          v-if="mandatory && (value === '' || value === 0)"
          class="fas fa-exclamation color-danger fa-2x"
        />
        <i
          v-if="(value !== '' && value !== null) && mandatory"
          class="fas fa-check color-success fa-2x"
        />
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'InputFloatLabel',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inputName: {
      type: String,
      default: null
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputClass: {
      type: String,
      default: ''
    },
    mandatory: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.label-float {
  position: relative;
  /*padding: 10px 0 0 0;*/
}
.label-float label {
  position: absolute;
  padding: 0.15rem 0.75rem;
  /*top: 15px;*/
  top: 6px;
  cursor: text;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.label-float label,
.label-float input {
  color: slategray;
  font-weight: 600;
  transition: all 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
.label-float input:focus + label,
.label-float input:not(:placeholder-shown) + label,
.label-float input:not(:empty) + label {
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  transform: scale(.95) translateY(-90%);
  -webkit-transform-origin-x: 0;
  background-color: white;
  padding: 0 0.375rem;
}
.label-float input:focus {
  outline: none 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  color: #6e707e;
}
.border-left-success {
  border-left: .25rem solid #1cc88a !important;
}
.border-left-danger {
  border-left: .25rem solid #e74a3b !important;
}
</style>
