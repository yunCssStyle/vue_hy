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
        <el-table-column label="시리얼번호" min-width="200" class-name="pl20">
          <template slot-scope="scope">
            <el-link
              slot="reference"
              v-html="scope.row.serial"
              @click="upedit(true, false, scope.$index, scope.row)"
            ></el-link>
          </template>
        </el-table-column>
        <el-table-column
          property="모델번호"
          label="모델번호"
          min-width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          property="그룹명"
          label="그룹명"
          min-width="250"
          align="center"
        ></el-table-column>
        <el-table-column
          property="패키지버전"
          label="패키지버전"
          min-width="250"
          align="center"
        ></el-table-column>
        <el-table-column
          property="모드"
          label="모드"
          min-width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          property="배터리용량"
          label="배터리용량"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column width="200" align="center" class-name="devicetx">
          <template slot="header">
            Lock <em>|</em> <span>Unlock</span>
          </template>
          <template slot-scope="scope">
            <div slot="reference">
              <el-switch v-model="scope.row.lockclass" width="54px"></el-switch>
            </div>
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
    <!-- 편집팝업 -->
    <edit :editPop="editPop" @upedit="upedit" />
  </div>
</template>
<script>
import PageHead from "./PageHead";
import enter from "./pop/enter";
import edit from "./pop/edit";
import { alert_popup } from "@/mixins/alert_popup";
export default {
  mixins: [alert_popup],
  name: "device",
  components: {
    PageHead,
    enter,
    edit
  },
  data() {
    return {
      tableData: [
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: true
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: true
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: true
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: true
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: true
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: true
        },
        {
          serial: "A1234567",
          모델번호: "QA-01",
          그룹명: "그룹명",
          패키지버전: "1.0.0",
          모드: "Deep Sleep",
          배터리용량: "70%",
          lockclass: false
        }
      ],
      filterbox: false, //페이지 검색 필터 부분
      enterPop: false,
      editPop: false
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
    upedit(opencle, toastpop) {
      this.editPop = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    }
  }
};
</script>
