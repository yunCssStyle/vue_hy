<template>
  <el-dialog
    title="캠페인등록"
    :visible.sync="enterPop"
    width="1162px"
    top="20px"
    :before-close="close"
  >
    <div class="dialog_body">
      <div class="title">
        캠페인정보
        <div class="right">
          <el-button type="info" size="small">캠페인 삭제</el-button>
        </div>
      </div>
      <div class="box">
        <el-form
          :model="form"
          ref="form"
          label-width="100px"
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item
            label="캠페인명"
            prop="val1"
            :rules="[{ required: true }]"
          >
            <el-input
              placeholder="캠페인명"
              v-model="form.val1"
              style="width:230px;"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="배포일정"
            class="ml40"
            :rules="[{ required: true }]"
          >
            <el-select
              v-model="form.val2"
              placeholder="설정"
              style="width:530px;"
            >
              <el-option
                v-for="item in voptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="등록자" prop="val3">
            <el-input
              placeholder="관리자"
              v-model="form.val3"
              style="width:230px;"
            ></el-input>
          </el-form-item>
          <el-form-item class="ml140">
            <el-date-picker
              v-model="form.val4"
              type="date"
              placeholder=""
              style="width:124px;"
            ></el-date-picker>
            <el-select
              v-model="value"
              placeholder="00"
              style="width:63px;"
              class="ml3"
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
              placeholder="00"
              style="width:63px;"
              class="ml3"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <strong class="fz18 fw700 dib ml5 mr5">~</strong>
            <el-date-picker
              v-model="form.val4"
              type="date"
              placeholder=""
              style="width:124px;"
            ></el-date-picker>
            <el-select
              v-model="value"
              placeholder="00"
              style="width:63px;"
              class="ml3"
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
              placeholder="00"
              style="width:63px;"
              class="ml3"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Tag" prop="val6" class="">
            <el-input
              placeholder=""
              v-model="form.val6"
              style="width:230px;"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="배터리 잔여조건"
            class="ml40"
            label-width="140px"
            :rules="[{ required: true }]"
          >
            <span class="fz16 dib" style="width:440px">
              <el-input
                placeholder=""
                v-model="form.val7"
                style="width:68px;"
              ></el-input>
              이상(%)</span
            >
          </el-form-item>
          <div class="camfrom">
            <p><span>FW</span></p>
            <el-form-item label="패키지명" :rules="[{ required: true }]">
              <el-select
                v-model="form.val2"
                placeholder="v1.0 전체패치"
                style="width:230px;"
              >
                <el-option
                  v-for="item in voptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="배포형식" class="ml40 mb0">
              <span class="fz16 dib" style="width:60px">Full</span>
            </el-form-item>
            <el-form-item label="패키지버전" class="ml40">
              <span class="fz16 dib" style="width:60px">1.2</span>
            </el-form-item>
            <el-form-item
              label="기본 패키지 버전"
              class="ml40"
              label-width="120px"
            >
              <span class="fz16 dib" style="width:80px">1.2</span>
            </el-form-item>
          </div>
          <div class="camfrom">
            <p><span>APP</span></p>
            <el-form-item label="패키지명" :rules="[{ required: true }]">
              <el-select
                v-model="form.val2"
                placeholder="v1.0 전체패치"
                style="width:230px;"
              >
                <el-option
                  v-for="item in voptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="배포형식" class="ml40 mb0">
              <span class="fz16 dib" style="width:60px">Full</span>
            </el-form-item>
            <el-form-item label="패키지버전" class="ml40">
              <span class="fz16 dib" style="width:60px">1.2</span>
            </el-form-item>
            <el-form-item
              label="기본 패키지 버전"
              class="ml40"
              label-width="120px"
            >
              <span class="fz16 dib" style="width:80px">1.2</span>
            </el-form-item>
          </div>
          <div class="camfrom">
            <p><span>CFG</span></p>
            <el-form-item label="패키지명" :rules="[{ required: true }]">
              <el-select
                v-model="form.val2"
                placeholder="v1.0 전체패치"
                style="width:230px;"
              >
                <el-option
                  v-for="item in voptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="배포형식" class="ml40 mb0">
              <span class="fz16 dib" style="width:60px">Full</span>
            </el-form-item>
            <el-form-item label="패키지버전" class="ml40">
              <span class="fz16 dib" style="width:60px">1.2</span>
            </el-form-item>
            <el-form-item
              label="기본 패키지 버전"
              class="ml40"
              label-width="120px"
            >
              <span class="fz16 dib" style="width:80px">1.2</span>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="title mt40">
        디바이스 등록
        <div class="right">
          <el-button size="small">삭제</el-button>
        </div>
      </div>
      <el-row>
        <el-col :span="11">
          <div class="box ovys" style="height:200px;">
            <el-tree
              :data="data"
              show-checkbox="show-checkbox"
              node-key="id"
              :default-expanded-keys="[1, 3]"
              :default-checked-keys="[5]"
            >
              <span class="custom-tree-node" slot-scope="{ node }">
                <span
                  >{{ node.data.label }}
                  <em>{{ node.data.text }}</em>
                </span>
              </span>
            </el-tree>
          </div>
        </el-col>
        <el-col :span="1" align="center">
          <i class="el-icon-arrow-right popreg_icon"></i>
        </el-col>
        <el-col :span="12">
          <el-table :data="popTableData" height="250" style="width: 100%">
            <el-table-column
              type="selection"
              width="60"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="시리얼번호"
              label="시리얼번호"
              width="120"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="그룹명"
              label="그룹명"
              width="120"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="패키지버전"
              label="패키지버전"
              align="center"
            ></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
    <div class="dialog_btn">
      <el-button
        type="primary"
        style="width:160px;"
        @click="$emit('update', false, true)"
        >등록</el-button
      >
      <el-button type="info" style="width:160px;" @click="close"
        >취소</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: ["enterPop"],
  data() {
    return {
      popTableData: [
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        },
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        },
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        },
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        },
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        },
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        },
        {
          시리얼번호: "A1234567",
          그룹명: "서울강동A-1",
          패키지버전: "1.0"
        }
      ],
      voptions: [
        {
          value: "Option1",
          label: "Option1"
        }
      ],
      form: {
        val1: "v1.0 긴급패치",
        val2: "설정",
        val3: "관리자",
        val4: "",
        val5: "",
        val6: "#1.2 #v1.0 긴급패치",
        val7: "50"
      },
      data: [
        {
          id: 1,
          label: "서울강동A-1",
          text: "",
          children: [
            {
              id: 4,
              label: "A1234567",
              disabled: "disabled",
              text: "(v1.0 긴급패치 진행중)",
              children: [
                {
                  id: 12,
                  label: "A1234567",
                  disabled: "disabled",
                  text: "(v1.0 긴급패치 진행중)"
                },
                {
                  id: 15,
                  label: "B1234567",
                  text: ""
                }
              ]
            },
            {
              id: 5,
              label: "B1234567",
              text: ""
            },
            {
              id: 6,
              label: "C1234567",
              text: ""
            },
            {
              id: 7,
              label: "D1234567",
              text: "(Lock)"
            }
          ]
        },
        {
          id: 2,
          label: "서울강남A-1",
          text: "",
          children: [
            {
              id: 8,
              label: "A1234567",
              disabled: "disabled",
              text: ""
            },
            {
              id: 9,
              label: "B1234567",
              text: ""
            },
            {
              id: 10,
              label: "C1234567",
              text: ""
            },
            {
              id: 11,
              label: "D1234567",
              text: ""
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
        disabled: "disabled"
      }
    };
  },
  methods: {
    close() {
      this.$emit("update", false, false);
    }
  }
};
</script>
