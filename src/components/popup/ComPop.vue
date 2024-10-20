<template>
  <el-main>
    <el-button
      @click="alert('최근 접속 정보', '최근접속 : 2021-01-25 오후 1:35<br />IP : 111.222.***.444')"
      center="true"
    >
      알럿 팝업
    </el-button>
    <el-button
      @click="
        confirm(
          '캠페인 삭제',
          '60분 후에 로그인할 수 있습니다.',
          'warning',
          '삭제되었습니다.'
        )">
      캠페인 삭제
    </el-button>
    <el-button
      @click="
        confirm(
          '디바이스 편집',
          '선택한 회사 내 계정 및 디바이스가 모두 삭제됩니다.<br />그래도 삭제하시겠습니까?',
          'warning',
          '편집되었습니다.'
        )">
      디바이스 편집
    </el-button>
    <el-button
      @click="
        confirm(
          'Excel 다운로드',
          `<span class=label>파일위치</span>
            <span class=input><input type=text><a class='el-link el-link--primary'>찾아보기</a></span>`,
          '',
          '다운로드 되었습니다.',
          'filesave'
        )">
      Excel 다운로드
    </el-button>
   <el-button
      @click="
        Prompt(
          'Excel 다운로드',
          '<span class=prompt>파일위치</span>',
          'success',
          '다운로드 되었습니다.',
          'filesave'
        )
      "
      center
    >
      Prompt 팝업
    </el-button>
  </el-main>
</template>
<script>
import { alert_popup } from "@/mixins/alert_popup";
export default {
  mixins: [alert_popup]
};
</script>