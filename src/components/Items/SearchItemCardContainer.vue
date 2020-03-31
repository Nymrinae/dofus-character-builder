<template>
  <NoItemSelectedCard v-if="!currentActiveItemType" />
  <SelectedItemCard
    v-else
    :type="currentActiveItemType"
  />
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
