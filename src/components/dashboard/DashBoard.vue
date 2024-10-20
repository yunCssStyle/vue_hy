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
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="12">
              <h3>디바이스 현황 <span>(단위 : 대)</span></h3>
            </el-col>
            <el-col :span="12" align="right">
              <el-button
                size="mini"
                class="mt30"
                style="width:80px;"
                @click="$router.push({ path: '/dashboardview' })"
                >상세보기 <i class="el-icon-arrow-right"></i
              ></el-button>
            </el-col>
          </el-row>
          <div class="box preslist">
            <el-row>
              <el-col :span="6">
                <div class="camicon wai">
                  <span>대기</span><br /><strong>363</strong>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="camicon go">
                  <span>진행</span><br /><strong>1,012</strong>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="camicon suc">
                  <span>성공</span><br /><strong>21</strong>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="camicon fail">
                  <span>실패</span><br /><strong>521</strong>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <h3>패키지 현황</h3>
          <div class="box">
            <h4>버전별 디바이스 분포</h4>
            <device />
            <hr class="line" />
            <h4>패키지별 디바이스 현황</h4>
            <package />
          </div>
        </el-col>
        <el-col :span="12">
          <h3>최근 캠페인 현황 <span>(v1.0에 대한 긴급패치 적용)</span></h3>
          <div class="box">
            <h4>캠페인 현황</h4>
            <campaign />
            <hr class="line" />
            <h4>캠페인 정보</h4>
            <div class="infolist mt15">
              <el-row>
                <el-col :span="6">
                  <span>패키지명</span><br /><strong>v1.0 긴급패치</strong>
                </el-col>
                <el-col :span="6">
                  <span>버전</span><br /><strong>1.3.2</strong>
                </el-col>
                <el-col :span="6">
                  <span>시작날짜</span><br /><strong>2021.01.15</strong>
                </el-col>
                <el-col :span="6">
                  <span>패키지상태</span><br /><strong>진행중</strong>
                </el-col>
              </el-row>
            </div>
            <hr class="line" />
            <h4>이벤트</h4>
            <el-table
              :data="tabledashboard"
              class="mt15"
              style="width: 100%"
              height="272px"
            >
              <el-table-column
                prop="이벤트시간"
                label="이벤트시간"
                min-width="180"
              >
              </el-table-column>
              <el-table-column prop="이벤트명" label="이벤트명" min-width="180">
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Package from "./chart/package";
import Device from "./chart/device";
import Campaign from "./chart/campaign";
export default {
  name: "DashBoard",
  components: {
    Package,
    Device,
    Campaign
  },
  data() {
    return {
      tabledashboard: [
        {
          이벤트시간: "2021.01.14 13:35:40",
          이벤트명: "패키지 생성(v1.1.1 긴급패치)"
        },
        {
          이벤트시간: "2021.01.14 13:35:40",
          이벤트명: "패키지 생성(v1.1.1 긴급패치)"
        },
        {
          이벤트시간: "2021.01.14 13:35:40",
          이벤트명: "패키지 생성(v1.1.1 긴급패치)"
        },
        {
          이벤트시간: "2021.01.14 13:35:40",
          이벤트명: "패키지 생성(v1.1.1 긴급패치)"
        },
        {
          이벤트시간: "2021.01.14 13:35:40",
          이벤트명: "패키지 생성(v1.1.1 긴급패치)"
        },
        {
          이벤트시간: "2021.01.14 13:35:40",
          이벤트명: "패키지 생성(v1.1.1 긴급패치)"
        }
      ]
    };
  }
};
</script>
