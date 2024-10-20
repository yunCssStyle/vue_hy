<template>
  <el-dialog
    title="내정보"
    :visible.sync="dialogMyInfo"
    :before-close="handleClose"
    width="540px"
  >
    <div class="dialog_body">
      <el-form
        :model="form"
        ref="form"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="사용자명" prop="val1">
          <el-input
            placeholder="사용자명"
            v-model="form.val1"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="사용자ID"
          prop="val2"
          :rules="[{ required: true }]"
        >
          <el-input
            placeholder="ID"
            v-model="form.val2"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="비밀번호" :rules="[{ required: true }]">
          <el-button size="small" @click="updatePw">변경</el-button>
        </el-form-item>
        <el-form-item label="부서명" prop="val3">
          <el-input
            placeholder="부서명"
            v-model="form.val3"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="직급" prop="val4">
          <el-input
            placeholder="직급"
            v-model="form.val4"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="이메일" prop="val5">
          <el-input
            placeholder="이메일"
            v-model="form.val5"
            style="width:360px;"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="dialog_btn">
      <el-button type="primary" style="width:160px;" @click="updateCompany"
        >등록</el-button
      >
      <el-button type="info" style="width:160px;" @click="handleClose"
        >취소</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "MyInfoPop",
  props: ["dialogMyInfo"],
  data() {
    return {
      form: {
        val1: "홍길동",
        val2: "casca5s4c56",
        val3: "개발1팀",
        val4: "사원",
        val5: "acasc!@cccc.com"
      }
    };
  },
  methods: {
    handleClose() {
      this.$emit("dialogMyCle", false);
    },
    updateCompany() {
      this.$emit("updateMyInfo", false, true);
    },
    updatePw() {
      this.$emit("updatePw", true);
    }
  }
};
</script>
