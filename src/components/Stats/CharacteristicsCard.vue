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
              :src="require(`@@/assets/icons/${stat}.png`)"
              width="33"
              height="33"
            />
          </v-list-item-icon>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="level"
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
      <p class="subtitle font-weight-medium mt-4">
        {{ points }} points restants
      </p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    level: 0,
    points: 995,
    statistics: ['hp', 'sagesse', 'force', 'int', 'chance', 'agi']
  })
}
</script>

<style>

</style>
