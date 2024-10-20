<template>
  <div class="login_cell">
    <div class="bgtx">LFCD<br />FOTA<br />Platform</div>
    <div class="login_box">
      <p class="login_ti">현대자동차<br />LMM 단말기 FOTA</p>
      <div class="box">
        <div class="ti">
          <p>LOGIN</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="id" label="아이디">
            <el-input
              placeholder="ID"
              v-model="loginForm.id"
              class="id"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pw" label="비밀번호">
            <el-input
              placeholder="PASSWORD"
              v-model="loginForm.pw"
              show-password
              class="pw"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitLoing('loginForm')"
              >로그인</el-button
            >
            <div class="el-form-item__error mt20 errortx">
              사용자로 등록되지 않은 아이디거나<br />아이디 또는 비밀번호를 잘못
              입력하였습니다.
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="login_fot">
        <img :src="require(`@/assets/images/login_logo.svg`)" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        id: "",
        pw: ""
      },
      rules: {
        id: [
          {
            required: true,
            message: "* 아이디를 입력해 주세요."
          }
        ],
        pw: [
          {
            required: true,
            message: "* 패스워드를 입력해 주세요."
          }
        ]
      }
    };
  },
  methods: {
    submitLoing(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/dashboard");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
