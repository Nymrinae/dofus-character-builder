<template>
  <v-card class="pa-2 mx-auto" outlined tile>
    <v-container class="mb-10">
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-img
            class="avatar"
            height="72"
            width="72"
            :src="getImage"
          />
        </v-col>
        <v-col cols="auto" class="mr-2">
          <h2 class="ml-2"> {{ username() }} </h2>
          <v-text-field
            v-model="currentLevel"
            :min="1"
            :max="200"
            class="pr-2"
            hide-details
            prefix="Level"
            prepend-icon="mdi-trophy-award"
            style="width: 125px"
            type="number"
            @input="levelLimits"
            @change="display"
          />
        </v-col>
        <UserActions />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserActions from './UserActions'

export default {
  components: {
    UserActions
  },
  data: () => ({
    currentLevel: null
  }),
  computed: {
    level() { return this.getLevel() },
    getImage() { return require(`@@/assets/classes/avatars/${this.activeClass()}.png`) }
  },
  mounted() {
    this.currentLevel = this.level
  },
  methods: {
    ...mapActions({
      updateLevel: 'character/updateLevel'
    }),
    ...mapGetters({
      activeClass: 'character/getActiveClass',
      getLevel: 'character/getLevel',
      username: 'auth/getUsername'
    }),
    levelLimits() {
      if (this.level < 0) { this.level = 1 }
      if (this.level > 200) { this.level = 200 }
    },
    display() {
      this.updateLevel(this.currentLevel)
    }
  }
}
</script>

<style>
.avatar {
  border-radius: 50%
}
</style>
