<template>
  <v-img
    :src="require(`@@/assets/classes/characters/${sex}/${activeClass()}.png`)"
    width="250"
    height="400"
    style="margin: 0 auto;"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    sex: { type: String, default: 'male' },
    type: { type: String, required: true }
  },
  methods: {
    ...mapGetters({
      activeClass: 'character/getActiveClass'
    })
  }
}
</script>

<style>

</style>
