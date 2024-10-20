<template>
  <el-dialog
    title="패키지편집"
    :visible.sync="editPop"
    width="820px"
    :before-close="close"
  >
    <div class="dialog_body">
      <el-form
        :model="form"
        ref="form"
        label-width="120px"
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item
          label="패키지명"
          prop="val1"
          :rules="[{ required: true }]"
        >
          <el-input
            placeholder="패키지명"
            v-model="form.val1"
            style="width:220px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="등록자" class="ml40">
          <div style="width:220px;">{{ form.val2 }}</div>
        </el-form-item>
        <el-form-item
          label="패키지버전"
          prop="val3"
          :rules="[{ required: true }]"
        >
          <el-input
            placeholder="패키지버전"
            v-model="form.val3"
            style="width:145px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="기본패키지버전" prop="val4">
          <el-select
            v-model="form.val4"
            placeholder="버전"
            style="width:145px;"
          >
            <el-option
              v-for="item in voptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="패키지 종류" prop="val5">
          {{ form.val5 }}
        </el-form-item>
        <el-form-item label="설명" prop="val6">
          <el-input
            type="textarea"
            :rows="6"
            placeholder=""
            v-model="form.val6"
            style="width:605px;"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="배포형식" prop="val7">
          <div class="dib" style="width:165px;">{{ form.val7 }}</div>
          <el-input class="ml5" style="width:436px;">
            <template slot="append">
              <el-link type="primary">찾아보기</el-link>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="Tag" prop="val8" class="mb0">
          <el-input v-model="form.val8" style="width:605px;"> </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="dialog_btn">
      <el-button
        type="primary"
        style="width:160px;"
        @click="$emit('upedit', false, true)"
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
  props: ["editPop"],
  data() {
    return {
      voptions: [
        {
          value: "Option1",
          label: "Option1"
        }
      ],
      form: {
        val1: "v1.0에 대한 긴급패치 적용",
        val2: "홍길동",
        val3: "1.2",
        val4: "1.0",
        val5: "FW",
        val6:
          "Version 1.0 Bug 패치\n\n1. 버전 정보 송신 시 Null Point 발생 문제 수정\n2. 버전 정보 처리 내에서 모든 String에 대한 Null Checking",
        val7: "Full",
        val8: "#1.2 #v1.0 긴급패치"
      }
    };
  },
  methods: {
    close() {
      this.$emit("upedit", false, false);
    }
  }
};
</script>
