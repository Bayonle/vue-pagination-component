/* eslint-disable no-debugger */
<template>
  <div class="page-container">
    <div class="pagination-container">
      <div>
        <div>Showing {{startCount}} - {{endCount}} of {{totalRecords}}</div>
      </div>
      <div class="page-controls">
        <button @click="prevPage">
          <span>&lt;</span>
        </button>
        <div>
          <span>Page</span>
          <input
            class="page-number"
            min="1"
            type="number"
            style="width:30px"
            v-model="currentPageNumber"
            @change="goTo"
          />
          <span class="mr-4">of {{totalPages}}</span>
        </div>
        <button @click="nextPage">
          <span>&gt;</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPageNumber: parseInt(this.currentPage) || 0
    };
  },
  methods: {
    nextPage() {
      if (this.currentPageNumber < this.totalPages) {
        this.currentPageNumber++;
        console.log(this.currentPageNumber);
        if (this.route) {
          this.$router.push({
            path: this.route,
            query: { page: this.currentPageNumber }
          });
        }
      }
    },
    prevPage() {
      if (this.currentPageNumber > 1) {
        this.currentPageNumber--;
        console.log(this.currentPageNumber);
        if (this.route) {
          this.$router.push({
            path: this.route,
            query: { page: this.currentPageNumber }
          });
        }
      }
    },
    goTo() {
      if (
        this.currentPageNumber >= 1 &&
        this.currentPageNumber <= this.totalPages
      ) {
        if (this.route) {
          this.$router.push({
            path: this.route,
            query: { page: this.currentPageNumber }
          });
        }
      }
    }
  },
  computed: {
    endCount() {
      let upperCount = this.pageSize * this.currentPageNumber;
      if (this.totalRecords < upperCount) {
        return this.totalRecords;
      } else {
        return upperCount;
      }
    },
    startCount(){
        return ((this.pageSize  * this.currentPageNumber) - this.pageSize) + 1
    },
    totalPages() {
      if (this.totalRecords === 0) {
        return 0;
      }
      let totalPages = Math.ceil(this.totalRecords / this.pageSize);
      return totalPages;
    }
  },
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    route: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
<style scoped>
.page-container {
  margin: 10px auto;
}
.pagination-container {
  display: flex;
  justify-content: space-between;
}

.page-controls {
  display: flex;
}
.page-controls button {
  padding: 8px;
  outline: none;
  line-height: 8px;
  border-radius: 2px;
  margin: 0 1rem;
  cursor: pointer;
  background-color: purple;
  color: white;
  font-weight: bold;
}

.page-number {
  text-align: center;
  padding: 8px;
  line-height: 8px;
}
</style>