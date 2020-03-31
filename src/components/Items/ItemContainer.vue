<template>
  <v-container class="mx-auto">
    <v-hover v-slot:default="{ hover }">
      <v-card
        style="border: 1px solid black"
        height="100"
        width="100"
        outlined
        :elevation="hover ? 16 : 2"
        @click="setItemType(type)"
      >
        <v-avatar size="75" class="ma-3">
          <v-img
            :src="`https://www.dofusbook.net/static/items/${icon}.png`"
            class="img"
          />
        </v-avatar>
        <v-container style="width: 300px">
          <v-card
            v-if="hover && free != null"
            class="itemInfo"
          >
            <v-card-title v-text="`Lorem ipsum placeholder text here`" />
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
    free: { type: Object || null, required: true },
    icon: { type: String, required: true },
    type: { type: String, required: true }
  },
  methods: {
    ...mapActions({
      setItemType: 'build/setItemType'
    })
  }
}
</script>

<style>
.img {
  filter: grayscale(0.8) brightness(1.1);
  opacity: 0.8;
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
