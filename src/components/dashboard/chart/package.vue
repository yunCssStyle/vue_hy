<template>
  <div class="echarts">
    <IEcharts :option="bar" @ready="onReady" />
  </div>
</template>
<script>
import IEcharts from "vue-echarts-v3";
export default {
  name: "package",
  components: {
    IEcharts
  },
  data() {
    // const that = this
    return {
      ins: null,
      echarts: null,
      bar: {}
    };
  },
  methods: {
    onReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;
      that.bar = {
        title: {
          subtext: "디바이스(개)",
          left: "5%"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            "v1.0 긴급패치",
            "v1.1 긴급패치",
            "v1.2 긴급패치",
            "v1.3 긴급패치",
            "v1.4 긴급패치"
          ],
          right: "10%",
          top: 20
        },
        xAxis: {
          type: "category",
          data: [
            "2019.04",
            "2019.07",
            "2019.10",
            "2020.01",
            "2020.04",
            "2020.07",
            "2020.10",
            "2021.01"
          ],
          axisLabel: {
            textStyle: {
              fontWeight: "bolder",
              color: "#000",
              fontSize: 12
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              fontWeight: "bolder",
              color: "#000",
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: "v1.0 긴급패치",
            type: "line",
            data: [500, 200, 306, 100, 100, 200]
          },
          {
            name: "v1.1 긴급패치",
            type: "line",
            data: [250, 210, 388, 150, 381, 842, 200, 306]
          },
          {
            name: "v1.2 긴급패치",
            type: "line",
            data: [100, 860, 600, 888, 950, 100, 645, 951]
          },
          {
            name: "v1.3 긴급패치",
            type: "line",
            data: [265, 333, 645, 951, 152, 365, 381, 842]
          },
          {
            name: "v1.4 긴급패치",
            type: "line",
            data: [265, 112, 652, 789, 953, 165, 112, 652]
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 115%;
  height: 429px;
  margin: 0 auto -10px;
  position: relative;
  left: -5%;
  & > div {
    width: 100% !important;
    div {
      width: 100% !important;
      canvas {
        width: 100% !important;
      }
    }
  }
}
</style>
