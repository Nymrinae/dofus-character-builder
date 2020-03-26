<template>
  <v-card class="pa-2 mx-auto" outlined tile>
    <v-container class="mb-10 pb-9">
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-img
            class="avatar"
            height="72"
            width="72"
            :src="getImage"
          />
        </v-col>
        <v-col cols="auto">
          <h2> {{ username() }} </h2>
          <v-text-field
            v-model="level"
            type="number"
            :min="1"
            :max="200"
            hide-details
            prefix="Niveau"
            @input="levelLimits"
          />
        </v-col>
        <!-- INSERT SAVE POSSIBILITIES AND SUCH HERE -->
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    level() { return this.getCurrentLevel() },
    getImage() { return require(`@@/assets/classes/avatars/${this.activeClass()}.png`) }
  },
  methods: {
    ...mapGetters({
      activeClass: 'character/getActiveClass',
      getCurrentLevel: 'character/getCurrentLevel',
      username: 'auth/getUsername'
    }),
    levelLimits() {
      if (this.level < 0) { this.level = 1 }
      if (this.level > 200) { this.level = 200 }
    }
  }
}
</script>

<style>
.avatar {
  border-radius: 50%
}
</style>
