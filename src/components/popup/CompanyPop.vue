<template>
  <el-dialog
    title="회사정보"
    :visible.sync="dialogCompany"
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
        <el-form-item label="회사명" prop="val1">
          <el-input
            placeholder="회사명"
            v-model="form.val1"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="주소" prop="val2">
          <el-input
            placeholder="주소"
            v-model="form.val2"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="전화번호" prop="val3">
          <el-input
            placeholder="전화번호"
            v-model="form.val3"
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
  name: "CompanyPop",
  props: ["dialogCompany"],
  data() {
    return {
      form: {
        val1: "(주)회사명",
        val2: "경기도 수원시 권선동 1234-45",
        val3: "031-123-4567"
      }
    };
  },
  methods: {
    handleClose() {
      this.$emit("updateDialogCompan", false);
    },
    updateCompany() {
      this.$emit("updateCompany", false, true);
    }
  }
};
</script>
