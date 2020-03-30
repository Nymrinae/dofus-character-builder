<template>
  <v-container class="pa-0 ma-0">
    <v-row no-gutters class="ml-12 mt-6 mb-n8">
      <v-col
        v-for="item in icons"
        :key="item.name"
        cols="4"
      >
        <v-btn
          icon
          @click="item.name != 'save' ? updateSex(item.name) : save()"
        >
          <v-icon
            :color="item.color"
            v-text="item.icon"
          />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    icons: [
      { color: 'blue', name: 'male', icon: 'mdi-gender-male' },
      { color: 'pink', name: 'female', icon: 'mdi-gender-female' },
      { color: 'gray', name: 'save', icon: 'mdi-content-save-all' }
    ]
  }),
  methods: {
    ...mapActions({
      updateSex: 'character/updateSex'
    }),
    save() {
      console.log('Save State into Firestore')
    }
  }
}
</script>

<style>

</style>
