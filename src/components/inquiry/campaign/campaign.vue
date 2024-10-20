<template>
  <div class="section_connt" :class="{ filteron: filterbox }">
    <page-head @child="parents" />
    <el-row class="pagetop">
      <el-col :span="12">
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
      <el-col :span="12" class="total">전체 100개</el-col>
    </el-row>
    <div class="table_height">
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="100%"
        height="100%"
      >
        <el-table-column type="selection" width="65"></el-table-column>
        <el-table-column label="캠페인명" min-width="150" class-name="pl20">
          <template slot-scope="scope">
            <el-link slot="reference" v-html="scope.row.campaign"></el-link>
          </template>
        </el-table-column>
        <el-table-column
          property="디바이스"
          label="디바이스(개)"
          min-width="120"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          property="패키지버전"
          label="패키지 버전"
          min-width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          label="배포형식"
          min-width="120"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <div slot="reference" :class="scope.row.typeclass">
              {{ scope.row.type }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          property="등록자"
          label="등록자"
          min-width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          property="등록일자"
          label="등록일자"
          min-width="120"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          property="배포일정"
          label="배포일정"
          min-width="220"
          align="center"
        ></el-table-column>
        <el-table-column
          label="진행상태"
          min-width="80"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <ul class="cam">
                <li class="camicon wai">
                  <em>대기</em>
                  <span :class="scope.row.wai">{{ scope.row.wai }}</span>
                </li>
                <li class="camicon go">
                  <em>진행</em>
                  <span :class="scope.row.wai">{{ scope.row.go }}</span>
                </li>
                <li class="camicon suc">
                  <em>성공</em>
                  <span :class="scope.row.wai">{{ scope.row.suc }}</span>
                </li>
                <li class="camicon fail">
                  <em>대기</em>
                  <span :class="scope.row.wai">{{ scope.row.fail }}</span>
                </li>
              </ul>
              <div
                slot="reference"
                class="name-wrapper"
                :class="scope.row.progressClass"
              >
                {{ scope.row.progress }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="상세정보" width="120" align="center">
          <template slot-scope="scope">
            <el-button
              class="icon more"
              @click="upview(true, scope.$index, scope.row)"
            >
              <i>더보기</i>
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
    <!-- 상세정보팝업 -->
    <viewpop :viewPop="viewPop" @upview="upview" />
  </div>
</template>

<script>
import PageHead from "./PageHead";
import Enter from "./pop/enter";
import viewpop from "./pop/viewpop";
import { alert_popup } from "@/mixins/alert_popup";
export default {
  mixins: [alert_popup],
  name: "campaign",
  components: {
    PageHead,
    Enter,
    viewpop
  },
  data() {
    return {
      tableData: [
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "대기",
          progressClass: "wai camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Diff",
          typeclass: "difficon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "정지",
          progressClass: "stop camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "진행",
          progressClass: "go camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Diff",
          typeclass: "difficon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "실패",
          progressClass: "fail camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Diff",
          typeclass: "difficon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "정지",
          progressClass: "stop camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Diff",
          typeclass: "difficon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "진행",
          progressClass: "go camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Diff",
          typeclass: "difficon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "실패",
          progressClass: "fail camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "정지",
          progressClass: "stop camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "진행",
          progressClass: "go camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "실패",
          progressClass: "fail camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "정지",
          progressClass: "stop camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "진행",
          progressClass: "go camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        },
        {
          campaign: "v1.0에 대한 긴급패치 적용",
          디바이스: "30",
          패키지버전: "3.14.15       ",
          type: "Full",
          typeclass: "fullicon",
          등록자: "관리자",
          등록일자: "2021.01.12",
          배포일정: "2021.01.01~2021.01.02",
          progress: "실패",
          progressClass: "fail camicon",
          wai: 200,
          go: 200,
          suc: 200,
          fail: 200
        }
      ],
      filterbox: false, //페이지 검색 필터 부분
      enterPop: false, //등록팝업
      viewPop: false //상세정보팝업
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
    upview(opencle, index, row) {
      this.viewPop = opencle;
    }
  }
};
</script>
