<template>
  <el-dialog
    title="계정등록"
    :visible.sync="enterPop"
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
        <el-form-item
          label="사용자ID"
          prop="val2"
          :rules="[{ required: true }]"
        >
          <el-input v-model="form.val2" style="width:340px;">
            <template slot="append">
              <el-link type="primary">중복확인</el-link>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="비밀번호"
          prop="val3"
          :rules="[{ required: true }]"
        >
          <el-input
            placeholder="비밀번호"
            v-model="form.val3"
            show-password
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="비밀번호 확인"
          prop="val4"
          :rules="[{ required: true }]"
        >
          <el-input
            placeholder="비밀번호 확인"
            v-model="form.val4"
            show-password
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="부서명" prop="val5">
          <el-input
            placeholder="부서명"
            v-model="form.val5"
            show-password
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="직급" prop="val6">
          <el-input
            placeholder="직급"
            v-model="form.val6"
            show-password
            style="width:340px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="이메일" prop="val7">
          <el-input
            placeholder="이메일"
            v-model="form.val7"
            show-password
            style="width:340px;"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="dialog_btn">
      <el-button
        type="primary"
        style="width:160px;"
        @click="$emit('update', false, true)"
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
  props: ["enterPop"],
  data() {
    return {
      form: {
        val1: "",
        val2: "",
        val3: "",
        val4: "",
        val5: "",
        val6: "",
        val7: ""
      }
    };
  },
  methods: {
    close() {
      this.$emit("update", false, false);
    }
  }
};
</script>
