<template>
  <v-container class="pa-0 mb-0">
    <v-img
      :src="require(`@@/assets/classes/characters/${sex()}/${activeClass()}.png`)"
      width="250"
      height="400"
      style="margin: 0 auto;"
    />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    ...mapGetters({
      activeClass: 'character/getActiveClass',
      sex: 'character/getSex'
    })
  }
}
</script>

<style>

</style>
