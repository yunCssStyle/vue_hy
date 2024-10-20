<template>
  <el-dialog
    title="계정등록"
    :visible.sync="viewPop"
    :before-close="close"
    width="540px"
  >
    <div class="dialog_body">
      <el-form
        :model="form"
        ref="form"
        label-width="120px"
        class="demo-form-inline"
      >
        <el-form-item
          label="사용자명"
          prop="val1"
          :rules="[{ required: true }]"
        >
          <el-input
            placeholder="사용자명"
            v-model="form.val1"
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="사용자ID" prop="val2">
          {{ form.val2 }}
        </el-form-item>
        <el-form-item label="비밀번호" :rules="[{ required: true }]">
          <el-button size="small" @click="$emit('uppw', true, false)"
            >변경</el-button
          >
        </el-form-item>
        <el-form-item label="부서명" prop="val5">
          <el-input
            placeholder="부서명"
            v-model="form.val3"
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="직급" prop="val6">
          <el-input
            placeholder="직급"
            v-model="form.val4"
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="이메일" prop="val7">
          <el-input
            placeholder="이메일"
            v-model="form.val5"
            style="width:340px;"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="dialog_btn">
      <el-button
        type="primary"
        style="width:160px;"
        @click="$emit('upview', false, true)"
        >등록</el-button
      >
      <el-button type="info" style="width:160px;" @click="close"
        >취소</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "dialogPopAcc",
  props: ["viewPop"],
  data() {
    return {
      form: {
        val1: "홍길동",
        val2: "hong123",
        val3: "개발1팀",
        val4: "사원",
        val5: "user@abc.kr"
      }
    };
  },
  methods: {
    close() {
      this.$emit("upview", false, false);
    }
  }
};
</script>
