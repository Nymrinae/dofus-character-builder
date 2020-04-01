<template>
  <v-container
    style="max-height: 525px"
    class="overflow-y-auto"
  >
    <v-row
      v-for="(item, i) in items"
      :key="`item#${i}`"
      justify="center"
      align="center"
    >
      <v-col cols="2">
        <v-avatar>
          <v-img :src="item.imgUrl" />
        </v-avatar>
      </v-col>
      <v-col cols="10">
        <v-subheader>
          {{ item.name }} (Lv. {{ item.level }})
        </v-subheader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true }
  },
  mounted() {
    console.log(this.items.slice(0, 5))
  }
}
</script>

<style>

</style>
