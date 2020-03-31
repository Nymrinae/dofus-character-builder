<template>
  <NoItemSelectedCard v-if="!currentActiveItemType" />
  <!-- insert SelectItemCard here instead -->
  <v-card v-else class="mt-6" width="400" height="765" outlined>
    <v-subheader v-text="currentActiveItemType" />
  </v-card>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import NoItemSelectedCard from './NoItemSelectedCard'
import SelectedItemCard from './SelectedItemCard'

export default {
  components: {
    NoItemSelectedCard,
    SelectedItemCard
  },
  computed: mapState('build', [
    'currentActiveItemType',
    'currentItems'
  ])
}
</script>

<style>

</style>
