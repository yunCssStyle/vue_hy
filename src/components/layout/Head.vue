<template>
  <el-header height="80">
    <div class="heads">
      <h2>LMM 단말기 FOTA</h2>
      <ul class="head_mu">
        <li class="time"><span>09:10</span></li>
        <li><el-button size="mini">세션 연장</el-button></li>
        <li @mouseover="hover = true" @mouseleave="hover = false" class="user">
          <span>관리자</span>
          <Profile
            :hover="hover"
            @updateDialogCompan="updateDialogCompan"
            @dialogMyCle="dialogMyCle"
          />
        </li>
      </ul>
    </div>
    <CompanyPop
      :dialogCompany="dialogCompany"
      @updateDialogCompan="updateDialogCompan"
      @updateCompany="updateCompany"
    />
    <MyInfoPop
      :dialogMyInfo="dialogMyInfo"
      @dialogMyCle="dialogMyCle"
      @updateMyInfo="updateMyInfo"
      @updatePw="updatePw"
    />
    <MyPwPop
      :dialogPw="dialogPw"
      @updatePw="updatePw"
      @updateMyPw="updateMyPw"
    />
  </el-header>
</template>
<script>
import Profile from "./Profile";
import CompanyPop from "@/components/popup/CompanyPop";
import MyInfoPop from "@/components/popup/MyInfoPop";
import MyPwPop from "@/components/popup/MyPwPop";
import { alert_popup } from "@/mixins/alert_popup";
export default {
  mixins: [alert_popup],
  name: "Head",
  components: {
    Profile,
    CompanyPop,
    MyInfoPop,
    MyPwPop
  },
  data() {
    return {
      hover: false,
      dialogCompany: false, //회사정보 팝업
      dialogMyInfo: false, //내정보 팝업
      dialogPw: false //내정보 팝업
    };
  },
  methods: {
    updateDialogCompan(opencle) {
      this.dialogCompany = opencle;
    },
    updateCompany(opencle, toastpop) {
      this.dialogCompany = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    },
    updateMyInfo(opencle, toastpop) {
      this.dialogMyInfo = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    },
    updateMyPw(opencle, toastpop) {
      this.dialogPw = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    },
    dialogMyCle(opencle) {
      this.dialogMyInfo = opencle;
    },
    updatePw(opencle) {
      this.dialogPw = opencle;
    }
  }
};
</script>
