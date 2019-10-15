<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-ts
      </h1>
      <h2 class="subtitle">
        {{ $vxm.users.fullname }}'s swell Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Logo from '~/components/atoms/Logo.vue'

@Component({
  components: { Logo }
})
export default class extends Vue {
  @Prop()
  test!: {
    hoge: string
  }

  async mounted() {
    await this.$vxm.users.doAnotherAsyncStuff(4)
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;

  /* Caution: `min-height: 100vh` does not work in IE 11 */
  height: 100vh;
  display: grid;

  /* Caution: `1fr` has different results in IE 11 */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  text-align: center;
}

.container > div {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.title {
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
