<template>
  <v-container class="pa-0 mb-0">
    <v-img
      :src="require(`@@/assets/classes/characters/${sex}/${activeClass}.png`)"
      width="250"
      height="400"
      style="margin: 0 auto;"
    />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('character', [
    'activeClass',
    'sex'
  ])
}
</script>

<style>

</style>
