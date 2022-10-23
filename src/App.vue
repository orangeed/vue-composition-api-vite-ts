<template>
  <div id="app" class='page-bgColor'>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "App",
});
</script>
