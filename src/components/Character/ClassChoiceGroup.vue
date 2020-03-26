<template>
  <v-container class="mt-10">
    <v-slide-group
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in classes()"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          class="mx-2"
          style="border-radius: 50%; border: 1px solid black"
          height="100"
          width="100"
          outlined
          @click="toggle"
        >
          <v-img
            :src="require(`@@/assets/classes/avatars/${n.toLowerCase()}.png`)"
            @click="updateClass(n)"
          />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions({
      updateClass: 'character/updateClass'
    }),
    ...mapGetters({
      classes: 'character/getClasses'
    })
  }
}
</script>

<style>
</style>
