<template>
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list dense disabled flat>
      <v-subheader>BASIC STATS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in basicStats"
          :key="i"
        >
          <v-list-item-icon>
            <v-img :src="require(`../../../assets/icons/${item.icon}.png`)"></v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title v-text="item.baseValue"></v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>

      <v-subheader>PRIMARY STATS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in primaryStats"
          :key="i"
        >
          <v-list-item-icon>
            <v-img :src="require(`../../../assets/icons/${item.icon}.png`)"></v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title v-text="item.baseValue"></v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>

      <v-subheader>SECONDARY STATS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in secondaryStats"
          :key="i"
        >
          <v-list-item-icon>
            <v-img :src="require(`../../../assets/icons/${item.icon}.png`)"></v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title v-text="item.baseValue"></v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    image: require('../../../assets/icons/pa.png'),
    basicStats: [
      { text: 'Vitalité', icon: 'hp', baseValue: '400' },
      { text: 'PA', icon: 'pa', baseValue: '7' },
      { text: 'PM', icon: 'pm', baseValue: '3' },
      { text: 'Initiative', icon: 'ini', baseValue: '0' },
      { text: 'Prospection', icon: 'pp', baseValue: '130' },
      { text: 'Portée', icon: 'po', baseValue: '2' },
      { text: 'Invocation', icon: 'invoc', baseValue: '2' }
    ],
    primaryStats: [
      { text: 'Sagesse', icon: 'sagesse', baseValue: '40' },
      { text: 'Force', icon: 'force', baseValue: '0' },
      { text: 'Intelligence', icon: 'int', baseValue: '0' },
      { text: 'Chance', icon: 'chance', baseValue: '0' },
      { text: 'Agilité', icon: 'agi', baseValue: '0' }
    ],
    secondaryStats: [
      { text: 'Critique', icon: 'crit', baseValue: '5' },
      { text: 'Soin', icon: 'heal', baseValue: '10' },
      { text: 'Dommages', icon: 'dmg', baseValue: '15' },
      { text: 'Puissance', icon: 'pui', baseValue: '30' },
      { text: 'Renvoi de dommage', icon: 'rdmg', baseValue: '0' },
      { text: 'Dommages aux pièges', icon: 'piegedmg', baseValue: '0' },
      { text: 'Puissance aux pièges', icon: 'piegepui', baseValue: '0' }
    ],
    resistances: [
      { text: 'Neutre', icon: 'mdi-clock' },
      { text: 'Terre', icon: 'mdi-account' },
      { text: 'Feu', icon: 'mdi-flag' },
      { text: 'Eau', icon: 'mdi-flag' },
      { text: 'Air', icon: 'mdi-flag' },
      { text: 'Air', icon: 'mdi-flag' }
    ]
  })
}
</script>
