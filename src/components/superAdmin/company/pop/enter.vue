<template>
    <el-dialog
        title="회사등록"
        :visible.sync="enterPop"
        width="490px"
        :before-close="close">
        <div class="dialog_body">
            <el-form
                :model="form"
                ref="form"
                label-width="110px">
                <el-form-item label="회사명" prop="val1" :rules="[{required: true}]">
                    <el-input placeholder="회사명" v-model="form.val1" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="주소" prop="val2" :rules="[{required: true}]">
                    <el-input placeholder="주소" v-model="form.val2" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="전화번호" prop="val3" :rules="[{required: true}]">
                    <el-input placeholder="전화번호" v-model="form.val3" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="관리자" prop="val4" :rules="[{required: true}]">
                    <el-input placeholder="관리자" v-model="form.val4" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="관리자 ID" prop="val5" :rules="[{required: true}]">
                    <el-input placeholder="관리자 ID" v-model="form.val5" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="비밀번호" prop="val6" :rules="[{required: true}]">
                    <el-input placeholder="비밀번호" show-password v-model="form.val6" style="width:300px;"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="dialog_btn">
            <el-button type="primary" style="width:160px;" @click="$emit('update', false, true)">등록</el-button>
            <el-button type="info" style="width:160px;" @click="close">취소</el-button>
        </div>
    </el-dialog>
</template>
<script>
    export default {
      props: ['enterPop'],
        data() {
            return {
                form: {
                    val1: '',
                    val2: '',
                    val3: '',
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
    }
</script>