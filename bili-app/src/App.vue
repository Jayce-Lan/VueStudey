<template>
  <div id="app">
      <div style="width: 250px;">
          <TitleMenu :is-active="select" @active="select = !select">
              <template v-slot:font>
                  <!-- 给具名插槽传递数据 -->
                  发现频道
              </template>
              <template v-slot:icon>
                  >
              </template>
          </TitleMenu>
      </div>
  </div>
</template>

<script>
import TitleMenu from "./component/TitleMenu";

export default {
    data() {
        return {
            select: false,
        }
    },
    components: {
        TitleMenu,
    },
}
</script>
