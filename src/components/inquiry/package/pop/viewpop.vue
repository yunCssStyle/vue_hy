<template>
  <el-dialog
    title="패키지편집"
    :visible.sync="viewPop"
    width="820px"
    :before-close="close"
  >
    <div class="dialog_body">
      <el-form
        :model="form"
        ref="form"
        label-width="120px"
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item label="패키지명" prop="val1">
          <div style="width:220px;">{{ form.val1 }}</div>
        </el-form-item>
        <el-form-item label="등록자" class="ml40">
          <div style="width:220px;">{{ form.val2 }}</div>
        </el-form-item>
        <el-form-item label="패키지버전" prop="val3">
          <div style="width:145px;">{{ form.val3 }}</div>
        </el-form-item>
        <el-form-item label="기본패키지버전" prop="val4">
          <div style="width:145px;">{{ form.val4 }}</div>
        </el-form-item>
        <el-form-item label="패키지 종류" prop="val5">
          {{ form.val5 }}
        </el-form-item>
        <el-form-item label="설명" prop="val6">
          <div style="width:605px;" v-html="form.val6"></div>
        </el-form-item>
        <el-form-item label="배포형식" prop="val7">
          <div class="dib" style="width:605px;">{{ form.val7 }}</div>
        </el-form-item>
        <el-form-item label="Tag" prop="val8" class="mb0">
          <div style="width:605px;">{{ form.val8 }}</div>
        </el-form-item>
      </el-form>
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
  props: ["viewPop"],
  data() {
    return {
      form: {
        val1: "v1.0에 대한 긴급패치 적용",
        val2: "홍길동",
        val3: "1.2",
        val4: "1.0",
        val5: "FW",
        val6:
          "Version 1.0 Bug 패치<br /><br />1. 버전 정보 송신 시 Null Point 발생 문제 수정<br />2. 버전 정보 처리 내에서 모든 String에 대한 Null Checking",
        val7: "Full",
        val8: "#1.2 #v1.0 긴급패치"
      }
    };
  },
  methods: {
    close() {
      this.$emit("upview", false);
    }
  }
};
</script>
