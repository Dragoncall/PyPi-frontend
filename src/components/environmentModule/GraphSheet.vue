<template>
    <div>
      <v-sheet :class="color">
        <div class="pa-3">
          <p class="title white--text">{{title}}</p>
          <v-sparkline
            :labels="labels"
            :show-labels="labels.length > 0"
            :value="values"
            color="white"
            line-width="2"
            padding="16"
            :smooth="smooth"
            :gradient="gradient"
            :gradient-direction="gradientDirection"
            :auto-draw="autodraw"
            :fill="fill"
          ></v-sparkline>
        </div>
        <v-btn block>See graph</v-btn>
      </v-sheet>
    </div>
</template>

<script>
export default {
  name: 'GraphSheet',
  props: {
    'labels': Array,
    'values': Array,
    'gradient': Array,
    'smooth': {
      type: Number,
      default: 8
    },
    'title': String,
    'gradientDirection': {
      type: String,
      default: 'bottom'
    },
    autodraw: Boolean,
    fill: Boolean,
    color: String
  }
}
</script>

<style scoped>

</style>
