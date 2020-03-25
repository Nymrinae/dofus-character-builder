<template>
  <v-card class="pa-2 mx-auto" outlined tile>
    <v-container>
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-img
            class="avatar"
            height="72"
            width="72"
            :src="getImage"
          />
        </v-col>
        <v-col cols="auto">
          <h2> Nymrinae </h2>
        </v-col>
        <v-col cols="auto">
          <v-select
            v-model="activeClass"
            :items="classes"
            filled
            label="Change your class here"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  data: () => ({
    activeClass: 'unknown',
    classes: [
      'Cra', 'Ecaflip', 'Eliotrope', 'Eniripsa', 'Enutrof', 'Feca', 'Huppermage', 'Iop', 'Osamodas',
      'Ouginak', 'Pandawa', 'Roublard', 'Sacrieur', 'Sadida', 'Sram', 'Steamer', 'Xelor', 'Zobal'
    ]
  }),
  computed: {
    getImage() { return require(`@@/assets/icons/classes/${this.activeClass.toLowerCase()}.png`) }
  }
}
</script>

<style>
.avatar {
  border-radius: 50%
}
</style>
