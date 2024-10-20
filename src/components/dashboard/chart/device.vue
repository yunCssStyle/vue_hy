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
  name: "device",
  data() {
    return {
      devicevisible: false,
      devicechart: [
        {
          name: "v1.2.1",
          value: "12",
          percent: "",
          color: "#120136",
          nubm: "230"
        },
        {
          name: "v1.2.2",
          value: "47",
          percent: "",
          color: "#4978F1",
          nubm: "701"
        },
        {
          name: "v1.2.3",
          value: "6",
          percent: "",
          color: "#40BAD5",
          nubm: "115"
        },
        {
          name: "v1.2.4",
          value: "35",
          percent: "",
          color: "#8D33FF",
          nubm: "680"
        }
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
