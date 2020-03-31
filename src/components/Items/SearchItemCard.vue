<template>
  <v-card class="mt-6" width="400" height="765" outlined>
    {{ currentActiveItemType }}
    {{ currentItems ? currentItems : 'items' }}
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({ test: 'initial test' }),
  computed: mapState('build', ['currentActiveItemType', 'currentItems']),
  methods: {

    /* unsubscribe() {
      this.$store.subscribe(async (mutation, state) => {
        const res = await axios.get('https://fr.dofus.dofapi.fr/equipments')

        console.log(res.data.filter(e => e.type === mutation.payload))
      })
    } */
  }
}
</script>

<style>

</style>
