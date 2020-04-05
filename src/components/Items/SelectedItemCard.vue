<template>
  <v-card class="mt-6" width="400" height="735" outlined>
    <v-container>
      <v-card-text
        class="headline font-weight-black"
        v-text="getTypeName(type)"
      />
      <v-card-text>
        <v-autocomplete
          v-model="item"
          :items="currentItems"
          color="white"
          :placeholder="`Cherche un item...`"
          prepend-icon="mdi-magnify"
          item-text="name"
          clearable
          return-object
          class="mt-n3"
        />
      </v-card-text>
      <ItemInfoCard
        v-if="item"
        :item="item"
      />
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import ItemInfoCard from './ItemInfoCard'

export default {
  components: {
    ItemInfoCard
  },
  props: {
    type: { type: String, required: true }
  },
  data: () => ({
    item: null
  }),
  computed: {
    ...mapState('build', [
      'currentItems',
      'currentActiveItemType'
    ])
  },
  watch: {
    currentActiveItemType(newValue, oldValue) {
      if (newValue) {
        this.item = null
      }
    }
  },
  methods: {
    getTypeName: (type) => {
      switch (type) {
        case 'dd':
          return 'Familiers & Montures'
        case 'dofus':
          return 'Dofus & Trophées'
        default:
          return type
      }
    }
  }
}
</script>

<style>

</style>
