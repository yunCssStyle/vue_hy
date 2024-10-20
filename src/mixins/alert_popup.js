export const alert_popup = {
  methods: {
    toast(message, type) {
      this.$message({
        message: message,
        type: type
      });
    },
    alert(title, text) {
      this.$alert(text, title, {
        confirmButtonText: "확인",
        dangerouslyUseHTMLString: true,
        customClass: "alertpop"
      });
    },
    confirm(title, text, type, succmessage, poptype) {
      this.$confirm(text, title, {
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        dangerouslyUseHTMLString: true,
        type: type,
        customClass: poptype
      }).then(() => {
        this.$message({
          type: "success",
          message: succmessage
        });
      });
    },
    Prompt(title, text, type, succmessage, poptype) {
      this.$prompt(text, title, {
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        center: true,
        dangerouslyUseHTMLString: true,
        customClass: poptype
      }).then(() => {
        this.$message({
          type: type,
          message: succmessage
        });
      });
    },
    download(title, text, type, poptype) {
      this.$confirm(text, title, {
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        dangerouslyUseHTMLString: true,
        type: type,
        customClass: poptype
      }).then(() => {
        this.confirm(
          title,
          `<span class=label>파일위치</span>
                        <span class=input><input type=text><a class='el-link el-link--primary'>찾아보기</a></span>`,
          "",
          "다운로드 되었습니다.",
          "filesave"
        );
      });
    }
  }
};
