<template>
  <v-container class="pa-0 ma-0">
    <v-row no-gutters class="mt-6 mb-n8">
      <v-col
        v-for="item in icons"
        :key="item.name"
        cols="2"
        class="pl-1 mx-1"
      >
        <v-btn
          icon
          @click="getAction(item.name)"
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
import { mapActions, mapMutations, mapState } from 'vuex'
import { db } from '@/api/firebase'

export default {
  data: () => ({
    icons: [
      { color: 'blue', name: 'male', icon: 'mdi-gender-male' },
      { color: 'pink', name: 'female', icon: 'mdi-gender-female' },
      { color: 'gray', name: 'reset', icon: 'mdi-autorenew' },
      { color: 'gray', name: 'load', icon: 'mdi-progress-download' },
      { color: 'gray', name: 'save', icon: 'mdi-content-save-all' }
    ]
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('build', ['build'])
  },
  methods: {
    ...mapActions('build', [
      'resetBuild',
      'setBuild'
    ]),
    ...mapMutations('character', ['UPDATE_SEX']),
    getAction(itemName) {
      switch (itemName) {
        case 'male':
        case 'female':
          this.UPDATE_SEX(itemName)
          break
        case 'reset':
          this.resetBuild()
          break
        case 'load':
          this.load()
          break
        case 'save':
          this.save()
          break
      }
    },
    async load() {
      const docRef = db.collection('users').doc(this.user.uid)
      const doc = await docRef.get()

      if (doc) {
        this.setBuild(doc.data())
      }
    },
    save() {
      db.collection('users').doc(this.user.uid).set({
        build: this.build
      })
    }
  }
}
</script>

<style>

</style>
