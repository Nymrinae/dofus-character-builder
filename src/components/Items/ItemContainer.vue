<template>
  <v-container class="mx-auto">
    <v-hover v-slot:default="{ hover }">
      <v-card
        style="border: 1px solid black"
        height="100"
        width="100"
        outlined
        :elevation="hover ? 16 : 2"
        @click="setItemType(item.type)"
      >
        <v-avatar size="75" class="ma-3">
          <v-img
            :src="getIcon()"
            :class="{ img: !item.current }"
          />
        </v-avatar>
        <v-container
          class="pa-0 ma-0"
          style="height: 200px; width: 300px"
        >
          <ItemPopUpCard
            v-if="hover && item.current"
            :item="item.current"
          />
        </v-container>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import ItemPopUpCard from './ItemPopUpCard'

export default {
  components: {
    ItemPopUpCard
  },
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    ...mapActions({
      setItemType: 'build/setItemType'
    }),
    getIcon() {
      if (this.item.current) {
        try {
          return require(`@@/assets/items/${this.item.current.icon}`)
        } catch (e) {
          return require('@@/assets/logo.png')
        }
      } else {
        return `https://www.dofusbook.net/static/items/${this.item.default}.png`
      }
    }
  }
}
</script>

<style>
.img {
  filter: grayscale(1) brightness(1.3);
  opacity: 0.6;
}

.btn {
  position: absolute;
  z-index: 2;
  margin-left: 190px;
  margin-top: -30px;
}
</style>
