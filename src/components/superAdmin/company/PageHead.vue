<template>
  <div class="pagehead">
    <el-row>
      <el-col :span="12">
        <h2>{{ $route.meta.title }}</h2>
      </el-col>
      <el-col :span="12" align="right">
        <div class="search_from">
          <div class="searchtx" :class="{ on: search_click }">
            <el-input
              placeholder="검색어를 입력하세요."
              ref="search_text"
              v-model="search_text"
              v-on:blur="handleBlur"
              clearable="clearable"
            ></el-input>
          </div>
          <el-button class="icon search" @click="search_from">
            <i>검색</i>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search_text: "",
      dayvalue1: "",
      dayvalue2: "",
      options: [
        {
          value: "전체",
          label: "전체"
        }
      ],
      value: "",
      search_click: false
    };
  },
  methods: {
    search_from() {
      this.search_click = true;
      this.$refs.search_text.focus();
    },
    handleBlur(e) {
      this.search_click = false;
    }
  }
};
</script>
