<template>
  <div class="barechart">
    <ul class="label">
      <li v-for="(item, index) in devicechart" :key="index">
        <i :style="{ background: item.color }" />{{ item.name }}
      </li>
    </ul>
    <ul class="barchart">
      <li
        v-for="(items, index) in datapercen"
        :key="index"
        :style="{ width: items.value + '%', background: items.color }"
      >
        <el-popover placement="top" width="230" trigger="hover">
          <div class="popover">
            <ul>
              <li v-for="(item, index) in devicechart" :key="index">
                <i :style="{ background: item.color }" />
                {{ item.name }}
                <span
                  >{{ item.value }}%
                  <em :style="{ color: item.color }">{{ item.nubm }}대</em>
                </span>
              </li>
            </ul>
          </div>
          <span slot="reference">{{ items.percent }}</span>
        </el-popover>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "campaign",
  data() {
    return {
      devicechart: [
        {
          name: "대기",
          value: "12",
          percent: "",
          color: "#FFC44D",
          nubm: "230"
        },
        {
          name: "진행",
          value: "47",
          percent: "",
          color: "#4EBE26",
          nubm: "701"
        },
        {
          name: "성공",
          value: "35",
          percent: "",
          color: "#2194FF",
          nubm: "115"
        },
        { name: "실패", value: "6", percent: "", color: "#FF5252", nubm: "658" }
      ]
    };
  },
  computed: {
    datapercen() {
      return this.devicechart.map(b => {
        b.percent = b.value;
        b.percent <= 10 ? (b.percent = null) : (b.percent = b.percent + "%");
        return b;
      });
    },
    dcvalue: function() {
      console.log(this.devicechart);
      return this.devicechart.map(function(item) {
        if (item.value < 10) {
          return (item.percent = "notext");
        } else {
          return (item.percent = "aaa");
        }
      });
    }
  }
};
</script>
