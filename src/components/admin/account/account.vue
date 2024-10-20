<template>
  <div class="section_connt" :class="{ filteron: filterbox }">
    <page-head @child="parents" />
    <el-row class="pagetop">
      <el-col :span="18">
        <el-button type="text" @click="delePop = true">계정삭제내역</el-button>
        <el-button
          type="text"
          class="iconminus"
          @click="
            confirm(
              '삭제',
              '선택한 데이터를 삭제하시겠습니까?',
              'warning',
              '삭제되었습니다.'
            )
          "
        >
          삭제</el-button
        >
        <el-button type="text" class="iconplus" @click="enterPop = true"
          >등록</el-button
        >
        <span class="line">|</span>
        <el-button type="text" class="icondownload">Excel 업로드</el-button>
        <span class="line">|</span>
        <el-button
          type="text"
          class="icondownload"
          @click="
            confirm(
              'Excel 양식 다운로드',
              `<span class=label>파일위치</span>
                            <span class=input><input type=text><a class='el-link el-link--primary'>찾아보기</a></span>`,
              '',
              '다운로드 되었습니다.',
              'filesave'
            )
          "
        >
          Excel 양식 다운로드
        </el-button>
        <span class="line">|</span>
        <el-button
          type="text"
          class="icondownload"
          @click="
            download(
              'Excel 다운로드',
              '선택한 회사를 Excel파일로<br />다운로드 하시겠습니까?',
              'warning',
              'filesave'
            )
          "
        >
          Excel 다운로드
        </el-button>
      </el-col>
      <el-col :span="6" class="total">전체 100개</el-col>
    </el-row>
    <div class="table_height">
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="100%"
        height="100%"
      >
        <el-table-column type="selection" width="65"></el-table-column>
        <el-table-column
          label="사용자명"
          min-width="120"
          align="center"
          class-name="pl20"
        >
          <template slot-scope="scope">
            <el-link
              slot="reference"
              v-html="scope.row.user"
              @click="upview(true, false, scope.$index, scope.row)"
            ></el-link>
          </template>
        </el-table-column>
        <el-table-column
          property="부서명"
          label="부서명"
          min-width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          property="직급"
          label="직급"
          min-width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          property="이메일"
          label="이메일"
          min-width="200"
        ></el-table-column>
        <el-table-column
          property="최근접속날짜"
          label="최근접속날짜"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          property="잠금상태"
          label="잠금상태"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column label="잠금해제" width="200" align="center">
          <template slot-scope="scope">
            <el-button class="icon lock">
              <i>잠금해제</i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :pager-count="5"
      :total="400"
    ></el-pagination>
    <!-- 등록팝업 -->
    <enter :enterPop="enterPop" @update="update" />
    <!-- 상세팝업 -->
    <viewpop :viewPop="viewPop" @upview="upview" @uppw="uppw" />
    <!-- 비번팝업 -->
    <pwpop :pwPop="pwPop" @uppw="uppw" />
    <!-- 계정삭제 내역 -->
    <deletepop :delePop="delePop" @updele="updele" />
  </div>
</template>
<script>
import PageHead from "./PageHead";
import enter from "./pop/enter";
import viewpop from "./pop/viewpop";
import pwpop from "./pop/pwpop";
import deletepop from "./pop/delete";
import { alert_popup } from "@/mixins/alert_popup";
export default {
  mixins: [alert_popup],
  name: "account",
  components: {
    PageHead,
    enter,
    viewpop,
    pwpop,
    deletepop
  },
  data() {
    return {
      tableData: [
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        },
        {
          user: "김*민",
          부서명: "영업1팀",
          직급: "사원",
          이메일: "ab***@def.com",
          최근접속날짜: "2021.01.14",
          잠금상태: "잠금"
        }
      ],
      filterbox: false, //페이지 검색 필터 부분
      enterPop: false, //등록 팝업
      viewPop: false, //상세정보팝업
      pwPop: false, //상세정보팝업
      delePop: false //계정삭제 내역 팝업
    };
  },
  methods: {
    parents() {
      this.filterbox = !this.filterbox;
    },
    update(opencle, toastpop) {
      this.enterPop = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    },
    upview(opencle, toastpop) {
      this.viewPop = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    },
    uppw(opencle, toastpop) {
      this.pwPop = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    },
    updele(opencle) {
      this.delePop = opencle;
    }
  }
};
</script>
