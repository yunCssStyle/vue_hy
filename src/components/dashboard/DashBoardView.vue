<template>
  <div class="section_connt">
    <div class="pagehead">
      <el-row>
        <el-col :span="24">
          <h2>{{ $route.meta.title }}</h2>
        </el-col>
      </el-row>
    </div>
    <div class="dashboard">
      <div class="mt25">
        <el-button
          size="mini"
          icon="el-icon-arrow-left"
          style="width:80px;"
          @click="$router.push({ path: '/dashboard' })"
          >이전</el-button
        >
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <h3 class="mt16">그룹 목록</h3>
          <div class="ovys grouplist">
            <ul>
              <li>서울강동A-1</li>
              <li class="on">서울강동A-1</li>
              <li v-for="(item, index) in grouplist" :key="index">
                {{ item.list }}
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="18">
          <el-row>
            <el-col :span="12">
              <h3 class="mt16">그룹 현황</h3>
            </el-col>
            <el-col :span="12" align="right">
              <div class="mt20 fw700">
                그룹 이동
                <div class="groupbtn">
                  <el-button size="mini" icon="el-icon-arrow-left"></el-button>
                  <el-button size="mini" icon="el-icon-arrow-right"></el-button>
                </div>
              </div>
            </el-col>
          </el-row>
          <div class="box">
            <h4>
              디바이스 현황
              <span>(단위 : 대)</span>
            </h4>
            <div class="preslist mt15">
              <el-row>
                <el-col :span="6">
                  <div class="camicon wai">
                    <span>대기</span><br />
                    <strong>363</strong>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="camicon go">
                    <span>진행</span><br />
                    <strong>1,012</strong>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="camicon suc">
                    <span>성공</span><br />
                    <strong>21</strong>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="camicon fail">
                    <span>실패</span><br />
                    <strong>521</strong>
                  </div>
                </el-col>
              </el-row>
            </div>
            <hr class="line" />
            <h4>캠페인 현황</h4>
            <campaign />
            <hr class="line" />
            <h4>디바이스 목록</h4>
            <el-table
              :data="tabledashboard"
              class="mt15"
              style="width: 100%"
              height="295px"
            >
              <el-table-column
                prop="시리얼번호"
                label="시리얼번호"
                min-width="180"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="모델번호"
                label="모델번호"
                min-width="180"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="패키지버전"
                label="패키지 버전"
                min-width="180"
                align="center"
              >
              </el-table-column>
              <el-table-column label="진행상태" min-width="150" align="center">
                <template slot-scope="scope">
                  <div slot="reference" :class="scope.row.typeclass">
                    {{ scope.row.type }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="모드"
                label="모드"
                min-width="180"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="배터리용량"
                label="배터리용량(%)"
                min-width="180"
                align="center"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Campaign from "./chart/campaign";
export default {
  name: "DashBoard",
  components: {
    Campaign
  },
  data() {
    return {
      grouplist: [
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        },
        {
          list: "서울강동A-1"
        }
      ],
      tabledashboard: [
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          패키지버전: "1.2.1",
          type: "진행",
          typeclass: "ing stateicon",
          모드: "Idle",
          배터리용량: "70"
        },
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          패키지버전: "1.2.1",
          type: "성공",
          typeclass: "succ stateicon",
          모드: "Idle",
          배터리용량: "70"
        },
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          패키지버전: "1.2.1",
          type: "실패",
          typeclass: "fail stateicon",
          모드: "Idle",
          배터리용량: "70"
        },
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          패키지버전: "1.2.1",
          type: "대기",
          typeclass: "waiting stateicon",
          모드: "Idle",
          배터리용량: "70"
        },
        {
          시리얼번호: "A1234567",
          모델번호: "QA-01",
          패키지버전: "1.2.1",
          type: "진행",
          typeclass: "ing stateicon",
          모드: "Idle",
          배터리용량: "70"
        }
      ]
    };
  }
};
</script>
