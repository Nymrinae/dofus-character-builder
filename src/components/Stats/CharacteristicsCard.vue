<template>
  <v-card class="mt-6" outlined tile>
    <v-container>
      <v-subheader class="subtitle-2 font-weight-black">
        STATISTIQUES
      </v-subheader>
      <v-row no-gutters>
        <v-col cols="4" />
        <v-col cols="4" align="center" class="ml-8">
          <v-subheader class="font-weight-black"> Base </v-subheader>
        </v-col>
        <v-col cols="2" align="center">
          <v-subheader class="font-weight-black"> Parcho </v-subheader>
        </v-col>
      </v-row>
      <v-row
        v-for="stat in statistics"
        :key="stat"
        justify="center"
        no-gutters
      >
        <v-col cols="4">
          <v-list-item-icon>
            <v-img
              :src="require(`@@/assets/icons/${stat.name}.png`)"
              width="33"
              height="33"
            />
          </v-list-item-icon>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="stat.value"
            type="number"
            hide-details
            class="mr-8"
            outlined
          />
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            class="pl-8"
          />
        </v-col>
      </v-row>
      <p
        class="subtitle font-weight-medium mt-4"
        :style="{ color: !points || points >= 0 ? 'black' : 'red'}"
      >
        {{ points ? points : 995 }} points restants
      </p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    statistics: [
      { name: 'hp', value: 0 },
      { name: 'sagesse', value: 0 },
      { name: 'force', value: 0 },
      { name: 'int', value: 0 },
      { name: 'chance', value: 0 },
      { name: 'agi', value: 0 }
    ]
  }),
  computed: {
    points() {
      return 995 - this.statistics.reduce((a, b) => a + parseInt(b.value), 0)
    }
  }
}
</script>

<style>
</style>
