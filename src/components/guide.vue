<template>
  <div class="guide">
    <h1>Color</h1>
    <div class="boxs mt20">
      <div class="box">
        <h2>Black</h2>
        <ul class="color_list mt10">
          <li class="colr_g4">$colr_g4 <span>7B7B7B</span></li>
          <li class="colr_g3">$colr_g3 <span>C9C9C9</span></li>
          <li class="colr_g2">$colr_g2 <span>DBDBDB</span></li>
          <li class="colr_g1">$colr_g1 <span>E9E9E9</span></li>
          <li class="colr_g1">$colr_g5 <span>DBDBDB</span></li>
          <li class="colr_w">$colr_w <span>FFFFFF</span></li>
        </ul>
      </div>
      <div class="box">
        <h2>Primary / Point</h2>
        <ul class="color_list mt10">
          <li class="colr_pont1">$colr_pont1 <span>101010</span></li>
          <li class="colr_pont2">$colr_pont2 <span>4978F1</span></li>
        </ul>
      </div>
      <div class="box">
        <h2>Status</h2>
        <ul class="color_list mt10">
          <li class="colr_sta1">$colr_sta1 <span>2194FF</span></li>
          <li class="colr_sta2">$colr_sta2 <span>FF5252</span></li>
          <li class="colr_sta3">$colr_sta3 <span>FFC44D</span></li>
          <li class="colr_sta4">$colr_sta4 <span>4EBE26</span></li>
        </ul>
      </div>
    </div>
    <hr class="mt40" />
    <h1 class="mt40">Button</h1>
    <div class="boxs mt20">
      <div class="box">
        <h2>Primary Button</h2>
        <ul class="btn_list mt10">
          <li>
            Normal
            <span><el-button type="primary">Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button type="primary">버튼명&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span><el-button type="primary" disabled>Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button type="primary" disabled>버튼명&lt;/el-button>
        </div>
      </div>
      <div class="box">
        <h2>Outline Button</h2>
        <ul class="btn_list mt10">
          <li>
            Normal
            <span><el-button>Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">&lt;el-button>버튼명&lt;/el-button></div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span><el-button disabled>Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">&lt;el-button disabled>버튼명&lt;/el-button></div>
      </div>
      <div class="box">
        <h2>Button Size</h2>
        <ul class="btn_list mt10">
          <li>
            Medium
            <span><el-button size="medium">Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button size="medium">버튼명&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            Small
            <span><el-button size="small">Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button size="small">버튼명&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            Mini
            <span><el-button size="mini">Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button size="mini">버튼명&lt;/el-button>
        </div>
      </div>
    </div>
    <div class="boxs mt40">
      <div class="box">
        <h2>Icon+Text</h2>
        <ul class="btn_list mt10">
          <li>
            삭제
            <span
              ><el-button type="text" class="iconminus">삭제</el-button></span
            >
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button type="text" class="iconminus">삭제&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            등록
            <span
              ><el-button type="text" class="iconplus">등록</el-button></span
            >
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button type="text" class="iconplus">등록&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span
              ><el-button type="text" class="icondownload"
                >Excel 다운로드</el-button
              ></span
            >
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button type="text" class="icondownload">Excel
          다운로드&lt;/el-button>
        </div>
      </div>
      <div class="box">
        <h2>With Icon</h2>
        <ul class="btn_list mt10">
          <li>
            Normal
            <span><el-button class="filter">Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button class="filter">버튼명&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span><el-button class="filter" disabled>Button</el-button></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button class="filter" disabled>버튼명&lt;/el-button>
        </div>
      </div>
      <div class="box">
        <h2>Icon</h2>
        <ul class="btn_list mt10">
          <li>
            더보기 버튼
            <span
              ><el-button class="icon more"><i>더보기</i></el-button></span
            >
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button class="icon more">&lt;i>더보기&lt;/i>&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            더보기 버튼 비활성
            <span
              ><el-button class="icon more" disabled
                ><i>더보기</i></el-button
              ></span
            >
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button class="icon more"
          disabled>&lt;i>더보기&lt;/i>&lt;/el-button>
        </div>
        <ul class="btn_list mt10">
          <li>
            검색 버튼
            <span
              ><el-button class="icon search"><i>검색</i></el-button></span
            >
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-button class="icon search">&lt;i>검색&lt;/i>&lt;/el-button>
        </div>
      </div>
    </div>
    <hr class="mt40" />
    <h1 class="mt40">Check-box</h1>
    <div class="boxs mt20">
      <div class="box">
        <h2>Primary Button</h2>
        <ul class="btn_list mt10">
          <li>
            Normal
            <span><el-checkbox v-model="checked"></el-checkbox></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-checkbox v-model="checked">&lt;/el-checkbox>
        </div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span><el-checkbox v-model="checked" disabled></el-checkbox></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-checkbox v-model="checked" disabled>&lt;/el-checkbox>
        </div>
      </div>
    </div>
    <hr class="mt40" />
    <h1 class="mt40">Input</h1>
    <div class="boxs mt20">
      <div class="box">
        <h2>Input</h2>
        <ul class="btn_list mt10">
          <li>
            Normal
            <span
              ><el-input placeholder="Input text" v-model="input"></el-input
            ></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-input placeholder="Input text" v-model="input">&lt;/el-input>
        </div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span
              ><el-input
                placeholder="Input text"
                v-model="input"
                :disabled="true"
              ></el-input
            ></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-input placeholder="Input text" v-model="input"
          :disabled="true">&lt;/el-input>
        </div>
      </div>
    </div>
    <hr class="mt40" />
    <h1 class="mt40">Drop Down</h1>
    <div class="boxs mt20">
      <div class="box">
        <h2>Default</h2>
        <ul class="btn_list mt10">
          <li>
            Normal
            <span
              ><el-select v-model="value" placeholder="Select"
                ><el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option></el-select
            ></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-select v-model="value" placeholder="Select"">&lt;el-option
          v-for="item in options" :key="item.value" :label="item.label"
          :value="item.value">&lt;/el-option>&lt;/el-select>
        </div>
        <ul class="btn_list mt10">
          <li>
            Disabled
            <span
              ><el-select v-model="value" disabled placeholder="Select"
                ><el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option></el-select
            ></span>
          </li>
        </ul>
        <div class="code mt5">
          &lt;el-select v-model="value" disabled
          placeholder="Select"">&lt;el-option v-for="item in options"
          :key="item.value" :label="item.label"
          :value="item.value">&lt;/el-option>&lt;/el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: ""
    };
  }
};
</script>
<style scoped lang="scss">
/*컬러*/
$colr_w: #fff;
$colr_g1: #e9e9e9;
$colr_g2: #dbdbdb;
$colr_g3: #c9c9c9;
$colr_g4: #7b7b7b;
$colr_g5: #dbdbdb;
$colr_pont1: #101010;
$colr_pont2: #4978f1;
$colr_sta1: #2194ff;
$colr_sta2: #ff5252;
$colr_sta3: #ffc44d;
$colr_sta4: #4ebe26;

/*guide*/
.guide {
  padding: 50px;
  background: $colr_g1;
  h1 {
    font-size: 30px;
    font-weight: 800;
  }
  h2 {
    font-size: 20px;
    font-weight: 800;
  }
  .boxs {
    display: table;
    table-layout: fixed;
    width: 100%;
    .box {
      display: table-cell;
      vertical-align: top;
    }
  }
  .color_list {
    li {
      height: 60px;
      line-height: 60px;
      max-width: 400px;
      position: relative;
      padding-left: 20px;
      font-weight: 700;
      color: $colr_w;
      span {
        display: inline-block;
        position: absolute;
        right: 20px;
        top: 0;
      }
      &.colr_g4 {
        background: $colr_g4;
      }
      &.colr_g3 {
        background: $colr_g3;
      }
      &.colr_g2 {
        background: $colr_g2;
        color: $colr_pont1;
      }
      &.colr_g1 {
        background: $colr_g1;
        color: $colr_pont1;
      }
      &.colr_w {
        background: $colr_w;
        color: $colr_pont1;
      }
      &.colr_pont1 {
        background: $colr_pont1;
      }
      &.colr_pont2 {
        background: $colr_pont2;
      }
      &.colr_sta1 {
        background: $colr_sta1;
      }
      &.colr_sta2 {
        background: $colr_sta2;
      }
      &.colr_sta3 {
        background: $colr_sta3;
      }
      &.colr_sta4 {
        background: $colr_sta4;
      }
    }
  }
  .btn_list li {
    position: relative;
    height: 60px;
    line-height: 60px;
    max-width: 400px;
    position: relative;
    color: $colr_g4;
    font-size: 24px;
    span {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0;
    }
  }
  .code {
    background: $colr_pont1;
    color: $colr_w;
    font-size: 14px !important;
    height: auto !important;
    line-height: 1.2 !important;
    padding: 15px;
    max-width: 370px;
  }
}
</style>
