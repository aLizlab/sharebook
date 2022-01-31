<template>
  <div class="layout-default">
    <NavHeader class="-isPc" />

    <div class="main -isPc">
      <Nuxt />
    </div>

    <div class="main -isSp">
      <ImgBase
        :width="160"
        :height="44"
        src="/img/ShareBook-logo.svg"
        alt="ShareBook"
      />
      <p>
        SP（画面幅が768px以下）では<br />
        ご利用いただけません。<br />
        お手数ですが、PCでご利用ください。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>

<style lang="scss" scoped>
.layout-default {
  $root: &;

  @include box-pd($header-height);

  > .NavHeader {
    @include box(null, $header-height);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 7200;
  }

  > .main {
    > .ImgBase {
      max-width: 160px;
      margin: 0 auto 40px;
    }
  }

  > .-isPc {
    @include mq(md) {
      display: none;
    }
  }

  > .-isSp {
    display: none;
    text-align: center;

    @include mq(md) {
      display: block;
    }
  }
}
</style>
