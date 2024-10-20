<template>
  <el-dialog
    title="상세정보"
    :visible.sync="viewPop"
    width="1042px"
    top="10px"
    :before-close="close"
  >
    <div class="dialog_body">
      <div class="title fz28">
        보안패치 v1.0(진행중)
        <div class="right">
          <el-button type="info" size="small" style="width:90px;"
            >시작</el-button
          >
          <el-button type="primary" size="small" style="width:90px;"
            >정지</el-button
          >
          <el-button class="download" size="small" style="width:150px;"
            >Excel 다운로드</el-button
          >
        </div>
        <div>
          <el-tag>#1.2</el-tag>
          <el-tag>#긴급패치</el-tag>
        </div>
      </div>
      <div class="title mt30 line12">업데이트 현황</div>
      <div class="box preslist">
        <el-row>
          <el-col :span="6">
            <span class="camicon wai">대기</span><br /><strong>21</strong>
          </el-col>
          <el-col :span="6">
            <span class="camicon go">진행</span><br /><strong>21</strong>
          </el-col>
          <el-col :span="6">
            <span class="camicon suc">성공</span><br /><strong>21</strong>
          </el-col>
          <el-col :span="6">
            <span class="camicon fail">실패</span><br /><strong>21</strong>
          </el-col>
        </el-row>
      </div>
      <div class="title mt30 line12">캠페인 정보</div>
      <div class="box preslist">
        <el-row>
          <el-col :span="8">
            <p>등록 정보</p>
            <ul>
              <li>
                <strong>등록자</strong>
                <span>관*자</span>
              </li>
              <li>
                <strong>등록날짜</strong>
                <span>2021.01.12</span>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <p>패키지 정보</p>
            <ul>
              <li>
                <strong>패키지명</strong>
                <span>v1.0긴급패치</span>
              </li>
              <li>
                <strong>패키지 종류</strong>
                <span>v1.0긴급패치</span>
              </li>
              <li>
                <strong>패키지 버전</strong>
                <span>3.14.15</span>
              </li>
              <li>
                <strong>기본 패키지 버전</strong>
                <span>1.0</span>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <p>업데이트 정보</p>
            <ul>
              <li>
                <strong>배포일정</strong>
                <span>2021.01.12~<br />2021.01.12</span>
              </li>
              <li>
                <strong>배포형식</strong>
                <span>Full</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <div class="title mt30 line12">
        디바이스 목록
      </div>
      <div class="box preslist">
        <el-row>
          <el-col :span="12">
            <el-select
              v-model="value"
              placeholder="그룹선택(전체)"
              style="width:170px;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="value"
              placeholder="진행상태(전체)"
              class="ml5"
              style="width:170px;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="12" align="right">
            <el-button type="primary" size="small" style="width:90px;"
              >재등록</el-button
            >
          </el-col>
        </el-row>
        <el-table
          :data="viewTableData"
          height="197"
          style="width: 100%"
          class="mt10"
        >
          <el-table-column
            type="selection"
            width="60"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="시리얼번호"
            label="시리얼번호"
            width=""
            align="center"
          ></el-table-column>
          <el-table-column
            prop="모델번호"
            label="모델번호"
            width="120"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="그룹명"
            label="그룹명"
            width="180"
            align="center"
          ></el-table-column>
          <el-table-column
            label="진행상태"
            min-width="80"
            width="120"
            align="center"
          >
            <template slot-scope="scope">
              <div
                slot="reference"
                class="name-wrapper"
                :class="scope.row.progressClass"
              >
                {{ scope.row.progress }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="배터리잔량"
            label="배터리 잔량"
            width="120"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="실패원인"
            label="실패원인"
            width="120"
            align="center"
          ></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="dialog_btn">
      <el-button type="primary" style="width:160px;" @click="close"
        >확인</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: ["viewPop"],
  data() {
    return {
      options: [
        {
          value: "선택1",
          label: "선택2"
        }
      ],
      viewTableData: [
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          그룹명: "서울강동A-1",
          progress: "성공",
          progressClass: "suc camicon",
          배터리잔량: "80%",
          실패원인: "-"
        },
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          그룹명: "서울강동A-1",
          progress: "성공",
          progressClass: "suc camicon",
          배터리잔량: "80%",
          실패원인: "-"
        },
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          그룹명: "서울강동A-1",
          progress: "실패",
          progressClass: "fail camicon",
          배터리잔량: "80%",
          실패원인: "-"
        }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("upview", false, false);
    }
  }
};
</script>
