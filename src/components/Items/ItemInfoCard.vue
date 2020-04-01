<template>
  <v-img :src="item.imgUrl" />
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  }
}
</script>

<style>

</style>
