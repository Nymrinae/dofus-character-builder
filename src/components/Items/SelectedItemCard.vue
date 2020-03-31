<template>
  <v-card class="mt-6" width="400" height="765" outlined>
    <v-container>
      <v-card-text
        class="headline font-weight-black pa-6"
        v-text="type"
      />
      <v-card-text>
        <v-autocomplete
          :items="itemNames"
          color="white"
          :placeholder="`Cherche ton ${type} ici !`"
          prepend-icon="mdi-magnify"
        />
      </v-card-text>
      <v-card-text> test </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    type: { type: String, required: true }
  },
  computed: {
    ...mapState('build', ['currentItems']),
    itemNames() { return this.currentItems.map(e => e.name) }
  },
  mounted() {
    console.log(this.itemNames)
  }
}
</script>

<style>

</style>
