<template>
  <el-dialog
    title="내정보"
    :visible.sync="dialogPw"
    :before-close="handleClose"
    width="540px"
  >
    <div class="dialog_body">
      <el-form
        :model="form"
        ref="form"
        :rules="rules"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="기존 비밀번호" prop="val1">
          <el-input
            show-password
            placeholder="기존 비밀번호"
            v-model="form.val1"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="새 비밀번호" prop="val2">
          <el-input
            show-password
            placeholder="새 비밀번호"
            v-model="form.val2"
            style="width:360px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="비밀번호 확인" prop="val3">
          <el-input
            show-password
            placeholder="비밀번호 확인"
            v-model="form.val3"
            style="width:360px;"
            :rules="rules"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="dialog_btn">
      <el-button type="primary" style="width:160px;" @click="submitForm('form')"
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
  name: "MyPwPop",
  props: ["dialogPw"],
  data() {
    let new_val;
    var before = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("기존 비밀번호 입력하세요."));
      } else {
        callback();
      }
    };
    var after = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("새 비밀번호 입력하세요."));
      } else {
        new_val = value;
        callback();
      }
    };
    var compare = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("비밀번호 확인을 입력하세요."));
      }
      setTimeout(() => {
        if (new_val !== value) {
          return callback(new Error("비밀번호가 일치 하지 않습니다."));
        } else {
          callback();
        }
      }, 10);
    };
    return {
      form: {
        val1: "",
        val2: "",
        val3: ""
      },
      rules: {
        val1: [{ validator: before, trigger: "blur" }],
        val2: [{ validator: after, trigger: "blur" }],
        val3: [{ validator: compare, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("updateMyPw", false, true);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClose() {
      this.$emit("updatePw", false);
    }
  }
};
</script>
