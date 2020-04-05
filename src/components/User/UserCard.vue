<template>
  <v-card class="pa-2 mx-auto" style="position: relative" outlined tile>
    <v-container class="mb-10">
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-img
            class="avatar"
            height="72"
            width="72"
            :src="require(`@@/assets/classes/avatars/${activeClass}.png`)"
          />
        </v-col>
        <v-col cols="auto" class="mr-2">
          <h2 class="ml-2"> {{ user.username }} </h2>
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
            @change="updateLevelAndHP()"
          />
        </v-col>
        <UserActions />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserActions from './UserActions'

export default {
  components: {
    UserActions
  },
  data: () => ({
    currentLevel: null
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('character', [
      'activeClass',
      'level'
    ])
  },
  mounted() {
    this.currentLevel = this.level
  },
  methods: {
    ...mapActions('character', ['updateLevel']),
    ...mapActions('stats', ['updateStats']),
    levelLimits() {
      if (this.level < 0) { this.level = 1 }
      if (this.level > 200) { this.level = 200 }
    },
    updateLevelAndHP() {
      this.updateStats({ hp: this.currentLevel * 5 - 5 })
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
