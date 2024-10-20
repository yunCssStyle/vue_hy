<template>
    <el-dialog
        title="디바이스 등록"
        :visible.sync="enterPop"
        width="490px"
        :before-close="close">
        <div class="dialog_body">
            <el-form
                :model="form"
                ref="form"
                label-width="110px">
                <el-form-item label="시리얼번호" prop="val1" :rules="[{required: true}]">
                    <el-input v-model="form.val1" style="width:300px;">
                        <template slot="append">
                            <el-link type="primary">중복확인</el-link>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="모델번호" prop="val2" :rules="[{required: true}]">
                    <el-input placeholder="모델번호" v-model="form.val2" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="그룹선택" prop="val3" :rules="[{required: true}]">
                    <el-select v-model="form.val3" style="width:300px;">
                        <el-option
                            v-for="item in voptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
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
                voptions: [
                    {
                        value: 'Option1',
                        label: 'Option1'
                    }
                ],
                form: {
                    val1: '',
                    val2: '',
                    val3: ''
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