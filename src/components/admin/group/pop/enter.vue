<template>
  <el-dialog
    title="그룹등록"
    :visible.sync="enterPop"
    width="1042px"
    top="120px"
    :before-close="close"
  >
    <div class="dialog_body">
      <div class="title">
        그룹정보
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
            label="그룹명"
            prop="val1"
            :rules="[{ required: true }]"
            class="mb0"
          >
            <el-input
              placeholder="그룹명"
              v-model="form.val1"
              style="width:230px;"
            ></el-input>
          </el-form-item>
          <el-form-item label="디바이스" class="ml40 mb0">
            <div style="width:130px;">{{ form.val2 }}</div>
          </el-form-item>
          <el-form-item label="등록날짜" class="ml40 mb0">
            <div style="width:130px;">{{ form.val3 }}</div>
          </el-form-item>
        </el-form>
      </div>
      <div class="title mt35">
        그룹정보
        <div class="right">
          <el-button size="small" style="width:90px;">삭제</el-button>
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
      form: {
        val1: "서울종로A-1",
        val2: "100개",
        val3: "2021.01.14"
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
