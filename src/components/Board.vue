<template>
  <div class="grid grid-cols-5 gap-5">
    <h1 class="text-2xl">B</h1>
    <h1 class="text-2xl">I</h1>
    <h1 class="text-2xl">N</h1>
    <h1 class="text-2xl">G</h1>
    <h1 class="text-2xl">O</h1>

    <BoardCell
      v-for="(number, index) in this.tableNumbers"
      :key="index"
      :numbArray="number"
      :index="index"
    />
  </div>
</template>

<script>
import BoardCell from "./BoardCell.vue";
import { mapActions } from "vuex";
export default {
  name: "Board",
  components: {
    BoardCell,
  },
  data() {
    return {
      tableNumbers: [],
    };
  },
  created() {
    for (let i = 0; i < 25; i++) {
      if (i == 12) {
        this.tableNumbers.push({ number: "FREE", matched: true });
        continue;
      }
      let numb = Math.floor(Math.random() * 25) + 1;
      this.tableNumbers.push({ number: numb, matched: false });
      while (this.tableNumbers.includes(numb)) {
        numb = Math.floor(Math.random() * 25) + 1;
      }
    }
    const numbers = this.tableNumbers;
    this.UPDATE_PLAYER_NUMBERS({ numbers });
  },
  mounted() {},
  methods: {
    ...mapActions(["UPDATE_PLAYER_NUMBERS"]),
  },
};
</script>

<style></style>
