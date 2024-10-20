<template>
  <el-dialog
    title="패키지등록"
    :visible.sync="enterPop"
    width="820px"
    :before-close="close"
  >
    <div class="dialog_body">
      <el-form
        :model="form"
        ref="form"
        label-width="110px"
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
            style="width:125px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="기본패키지버전" prop="val4">
          <el-select
            v-model="form.val4"
            placeholder="버전"
            style="width:125px;"
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
          <el-select
            v-model="form.val5"
            placeholder="버전"
            style="width:125px;"
          >
            <el-option
              v-for="item in voptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="설명" prop="val6">
          <el-input
            type="textarea"
            :rows="6"
            placeholder=""
            v-model="form.val6"
            style="width:615px;"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="배포형식" prop="val7">
          <el-select style="width:165px;">
            <el-option
              v-for="item in voptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="form.val7" class="ml5" style="width:446px;">
            <template slot="append">
              <el-link type="primary">찾아보기</el-link>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="Tag" prop="val8" class="mb0">
          <el-input v-model="form.val8" style="width:615px;"> </el-input>
        </el-form-item>
      </el-form>
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
      voptions: [
        {
          value: "Option1",
          label: "Option1"
        }
      ],
      form: {
        val1: "",
        val2: "홍길동",
        val3: "",
        val4: "",
        val5: "",
        val6: "",
        val7: "",
        val8: ""
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
