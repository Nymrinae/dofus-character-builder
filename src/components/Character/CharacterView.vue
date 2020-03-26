<template>
  <v-img
    :src="require(`@@/assets/classes/characters/${sex}/${type}.png`)"
    width="250"
    height="400"
    style="margin: 0 auto;"
  />
</template>

<script>
export default {
  props: {
    sex: { type: String, default: 'male' },
    type: { type: String, required: true }
  }
}
</script>

<style>

</style>
