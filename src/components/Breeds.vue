<template>
  <div id="app">
    <div class="wrapper">
      <pagination :pageSize="pageSize" :currentPage="page" :totalRecords="totalRecords" route="/" />

      <div v-if="pageIsLoading">
        Fetching cat breeds...
      </div>
      <table class="table" v-if="!pageIsLoading && breeds.length > 0">
        <thead>
          <tr>
            <!-- <th></th> -->
            <th>Name</th>
            <th>Origin</th>
            <th>Natural</th>
            <th>Stranger friendly</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(breed, index) in breeds" :key="index">
            <!-- <td>{{(index + 1) * pageSize}}</td> -->
            <td>{{breed.name}}</td>
            <td>{{breed.origin}}</td>
            <td>{{breed.natural}}</td>
            <td>{{breed.stranger_friendly}}</td>
            <td>Details</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  name: "Breeds",
  components: {
    Pagination
  },
  data() {
    return {
      pageIsLoading: false,
      breeds: [],
      pageSize: 10,
      page: 1,
      order: "ASC",
      totalRecords: 0
    };
  },
  methods: {
    getCatBreeds() {
      this.pageIsLoading = true;
      fetch(
        `https://api.thecatapi.com/v1/breeds?limit=${this.pageSize}&page=${this.page-1}&order=${this.order}`
      )
        .then(response => {
          this.totalRecords = parseInt(
            response.headers.get("Pagination-Count")
          );
          return response.json();
        })
        .then(data => {
          this.breeds = data;
          this.pageIsLoading = false
        });
    }
  },
  created() {
    console.log(this.$route);
    this.page = parseInt(this.$route.query.page) || 1;
    this.getCatBreeds();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  width: 70%;
  margin: 0 auto;
}

table {
  width: 100%;
}

table tbody tr td,
table thead tr th {
  padding: 10px 2px;
  text-align: left;
}
</style>
