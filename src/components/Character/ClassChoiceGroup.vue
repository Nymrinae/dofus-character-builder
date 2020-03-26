<template>
  <v-container class="mt-10">
    <v-slide-group show-arrows>
      <v-slide-item v-for="n in classes()" :key="n">
        <v-card
          class="mx-2"
          style="border-radius: 50%"
          height="100"
          width="100"
          tile
          flat
          outlined
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
.avatar {
  border-radius: 50%
}
</style>
