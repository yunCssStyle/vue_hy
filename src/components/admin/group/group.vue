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
        <el-table-column label="그룹명" min-width="250" align="center">
          <template slot-scope="scope">
            <el-link slot="reference" v-html="scope.row.group"></el-link>
          </template>
        </el-table-column>
        <el-table-column
          property="디바이스"
          label="디바이스(개)"
          min-width="250"
          align="center"
        ></el-table-column>
        <el-table-column
          property="등록날짜"
          label="등록날짜"
          min-width="250"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :pager-count="5"
      :total="400"
    ></el-pagination>
    <!-- 등록팝업 -->
    <enter :enterPop="enterPop" @update="update" />
  </div>
</template>
<script>
import PageHead from "./PageHead";
import Enter from "./pop/enter";
import { alert_popup } from "@/mixins/alert_popup";
export default {
  mixins: [alert_popup],
  name: "group",
  components: {
    PageHead,
    Enter
  },
  data() {
    return {
      tableData: [
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        },
        {
          group: "groupgroupgroupgroup",
          디바이스: "15",
          등록날짜: "2021.01.12"
        }
      ],
      filterbox: false, //페이지 검색 필터 부분
      enterPop: false //등록팝업
    };
  },
  methods: {
    parents() {
      this.filterbox = !this.filterbox;
    },
    update(opencle, toastpop) {
      this.enterPop = opencle;
      if (toastpop) this.toast("등록 되었습니다.", "success");
    }
  }
};
</script>
