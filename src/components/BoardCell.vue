<template>
  <div
    class="border rounded h-20 flex justify-center items-center text-lg select-none"
    :class="numbArray.matched ? 'bg-red-400 text-white' : 'cursor-pointer'"
  >
    {{ numbArray.number }}
    {{ index }}
  </div>
</template>

<script>
export default {
  name: "BoardCell",
  props: {
    numbArray: Object,
    index: Number,
  },
};
</script>

<style></style>
