<template>
  <div class="user_aly" v-show="hover">
    <div class="pl">
      <ul>
        <li>
          <strong>이 름</strong>
          <span
            >홍길동 (개발자)
            <el-link @click="openMyInfo">내정보</el-link>
          </span>
        </li>
        <li>
          <strong>ID</strong>
          <span>hgd2580</span>
        </li>
        <li>
          <strong>부 서</strong>
          <span>ITD</span>
        </li>
        <li>
          <strong>전화번호</strong>
          <span>010-1111-2722</span>
        </li>
        <li>
          <strong>이메일</strong>
          <span>abc@hyundai.com</span>
        </li>
      </ul>
      <div class="tac pop_defbtn">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-button size="mini" type="info" @click="openCompan"
              >회사정보</el-button
            >
          </el-col>
          <el-col :span="12">
            <router-link to="/">
              <el-button size="mini" type="primary">로그아웃</el-button>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <div class="tac pop_defbtn">
        <el-row>
          <el-col>
            <router-link to="/">
              <el-button size="mini" type="primary">로그아웃</el-button>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  props: ["hover"],
  data() {
    return {};
  },
  methods: {
    openCompan() {
      this.$emit("updateDialogCompan", true);
    },
    openMyInfo() {
      this.$emit("dialogMyCle", true);
    }
  }
};
</script>
