<template>
  <v-card class="pa-2 mx-auto" outlined tile>
    <v-container class="mb-10">
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-img
            class="avatar"
            height="72"
            width="72"
            :src="activeClass"
          />
        </v-col>
        <v-col cols="auto" class="mr-2">
          <h2 class="ml-2"> {{ username }} </h2>
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
            @change="updateLevel(currentLevel)"
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
    ...mapState('character', {
      activeClass: state => require(`@@/assets/classes/avatars/${state.activeClass}.png`),
      level: state => state.level
    }),
    ...mapState('auth', {
      username: state => state.user.username
    })
  },
  mounted() {
    this.currentLevel = this.level
  },
  methods: {
    ...mapActions({
      updateLevel: 'character/updateLevel'
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
