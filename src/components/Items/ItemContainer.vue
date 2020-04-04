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
            :src="`https://www.dofusbook.net/static/items/${item.default}.png`"
            class="img"
          />
        </v-avatar>
        <v-container style="width: 300px">
          <v-card
            v-if="hover && item.current"
            class="itemInfo"
          >
            <v-btn @click="test">
              test
            </v-btn>
            <v-card-title v-text="item" />
          </v-card>
        </v-container>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    ...mapActions({
      setItemType: 'build/setItemType'
    }),
    mounted() {
      console.log('item:', this.item)
    },
    test() {
      console.log('item:', this.item)
    }
  }
}
</script>

<style>
.img {
  filter: grayscale(1) brightness(1.3);
  opacity: 0.6;
}
.itemInfo {
  z-index: 2;
  top: -150px;
  width: 300;
  height: 200;
  margin-left: 30px;
  margin-top: -20px;
}
</style>
