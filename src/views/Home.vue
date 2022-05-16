<template>
  <div class="w-full h-screen">
    <div class="w-full h-full flex justify-center">
      <div class="w-1/3 p-5">
        <button
          @click="startDraw"
          class="p-2 m-2 bg-indigo-300 rounded text-white"
        >
          Start Draw
        </button>

        <Board />
      </div>
    </div>
  </div>
</template>

<script>
import Board from "@/components/Board.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      letters: ["B", "I", "N", "G", "O"],
    };
  },
  components: {
    Board,
  },
  computed: {
    ...mapGetters(["GET_DRAW_NUMBERS"]),
  },
  methods: {
    startDraw() {
      let rowIndex = Math.floor(Math.random() * 4);

      let number = Math.floor(Math.random() * 76) + 1;

      let ball = this.letters[rowIndex] + number;
      while (this.GET_DRAW_NUMBERS.includes(ball)) {
        number = Math.floor(Math.random() * 76) + 1;
        ball = this.letters[rowIndex] + number;
      }

      this.UPDATE_DRAW_NUMBERS({ ball });
      let flag = true;
      this.UPDATE_DRAW_PHASE({ flag });
    },
    ...mapActions(["UPDATE_DRAW_NUMBERS", "UPDATE_DRAW_PHASE"]),
  },
};
</script>
