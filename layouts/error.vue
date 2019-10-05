<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class extends Vue {
  layout = 'empty'
  pageNotFound = '404 Not Found'
  otherError = 'An error occurred'

  @Prop({ default: null })
  error!: { statusCode: number }

  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
