<template>
  <v-container class="mx-auto">
    <v-card
      style="border: 1px solid black"
      height="100"
      width="100"
      outlined
    >
      <v-avatar size="75" class="ma-3">
        <v-img
          :src="`https://www.dofusbook.net/static/items/${icon}.png`"
          class="img"
        />
      </v-avatar>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true }
  }
}
</script>

<style>
.img {
  filter: grayscale(0.8) brightness(1.1);
  opacity: 0.8;
}
</style>
