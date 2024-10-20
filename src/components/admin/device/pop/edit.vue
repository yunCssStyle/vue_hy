<template>
    <el-dialog
        title="디바이스 편집"
        :visible.sync="editPop"
        width="490px"
        :before-close="close">
        <div class="dialog_body">
            <el-form
                :model="form"
                ref="form"
                label-width="110px">
                <el-form-item label="시리얼번호" prop="val1">
                    <div style="width:300px;">
                        {{ form.val1 }}
                    </div>
                </el-form-item>
                <el-form-item label="모델번호" prop="val2">
                    {{ form.val2 }}
                </el-form-item>
                <el-form-item label="회사선택" prop="val3" :rules="[{required: true}]">
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
            <el-button type="primary" style="width:160px;" @click="$emit('upedit', false, true)">등록</el-button>
            <el-button type="info" style="width:160px;" @click="close">취소</el-button>
        </div>
    </el-dialog>
</template>
<script>
    export default {
      props: ['editPop'],
        data() {
            return {
                form: {
                    val1: 'P1234567',
                    val2: 'QE-01',
                    val3: '(주)Kickbility'
                }
            };
        },
        methods: {
            close() {
                this.$emit("upedit", false, false);
            }
        }
    }
</script>