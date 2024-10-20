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
        <el-button class="filter ml12" size="small" @click="filter_box"
          >필터</el-button
        >
      </el-col>
    </el-row>
    <el-row class="filters">
      <el-col :span="16">
        <div class="filter_box">
          <p>기간</p>
          <el-date-picker
            v-model="dayvalue1"
            type="date"
            placeholder="시작 날짜"
          ></el-date-picker>
          ~
          <el-date-picker
            v-model="dayvalue2"
            type="date"
            placeholder="종료 날짜"
          ></el-date-picker>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="filter_box">
          <p>배포형식</p>
          <el-select v-model="value" placeholder="선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
    },
    filter_box() {
      this.$emit("child");
    }
  }
};
</script>
