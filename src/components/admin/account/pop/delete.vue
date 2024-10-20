<template>
  <el-dialog
    title="계정삭제 내역"
    :visible.sync="delePop"
    width="960px"
    top="50px"
    :before-close="close"
  >
    <div class="dialog_body">
      <el-row>
        <el-col :span="16" class="accsch">
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
        </el-col>
        <el-col :span="8" align="right">
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
      <el-table
        :data="tabledel"
        class="mt15"
        style="width: 100%"
        height="480px"
      >
        <el-table-column
          prop="사용자명"
          label="사용자명"
          min-width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="사용자 ID"
          min-width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="삭제날짜"
          label="삭제 날짜"
          min-width="180"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog_btn">
      <el-button type="primary" style="width:160px;" @click="close"
        >확인</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: ["delePop"],
  data() {
    return {
      search_text: "",
      dayvalue1: "",
      dayvalue2: "",
      search_click: false,
      tabledel: [
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        },
        {
          사용자명: "김*민",
          id: "ki*****",
          삭제날짜: "2021.01.15"
        }
      ]
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
    close() {
      this.$emit("updele", false);
    }
  }
};
</script>
