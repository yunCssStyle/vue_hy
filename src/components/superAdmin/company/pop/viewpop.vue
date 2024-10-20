<template>
    <el-dialog
        title="상세정보"
        :visible.sync="viewPop"
        top="10px"
        width="1197px"
        :before-close="close">
        <div class="dialog_body">
            <el-row :gutter="30">
                <el-col :span="8">
                    <div class="title">회사정보</div>
                    <div class="box" style="padding: 14px 24px;">
                        <el-form :model="form" label-width="80px">
                            <el-form-item label="회사명" prop="val1" class="mb5">
                                <div style="width:230px;">{{ form.val1 }}</div>
                            </el-form-item>
                            <el-form-item label="주소" prop="val2" class="mb5">
                                <div style="width:230px;">{{ form.val2 }}</div>
                            </el-form-item>
                            <el-form-item label="전화번호" prop="val3" class="mb5">
                                <div style="width:230px;">{{ form.val3 }}</div>
                            </el-form-item>
                            <el-form-item label="관리자" prop="val4" class="mb5">
                                <div style="width:230px;">{{ form.val4 }}</div>
                            </el-form-item>
                            <el-form-item label="관리자 ID" prop="val5" class="mb0">
                                <div style="width:230px;">{{ form.val5 }}</div>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="title">최근 캠페인 현황</div>
                    <div class="box">
                        <h4>캠페인 현황</h4>
                        <campaign />
                        <hr class="line" />
                        <h4>캠페인 정보</h4>
                        <div class="infolist mt15">
                        <el-row>
                            <el-col :span="6">
                                <span>패키지명</span><br /><strong>v1.0 긴급패치</strong>
                            </el-col>
                            <el-col :span="6">
                                <span>버전</span><br /><strong>1.3.2</strong>
                            </el-col>
                            <el-col :span="6">
                                <span>시작날짜</span><br /><strong>2021.01.15</strong>
                            </el-col>
                            <el-col :span="6">
                                <span>패키지상태</span><br /><strong>진행중</strong>
                            </el-col>
                        </el-row>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="mt30">
                <el-col :span="12">
                    <el-select v-model="value" placeholder="Select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="12" align="right">
                    <span class="dib fz16 gtx mt10">전체 xx대</span>
                </el-col>
            </el-row>   
            <el-table :data="viewTableData" height="288" style="width: 100%" class="mt15">
                <el-table-column prop="시리얼번호" label="시리얼번호" align="center"></el-table-column>
                <el-table-column prop="모델번호" label="모델번호" align="center"></el-table-column>
                <el-table-column prop="모드" label="모드" align="center"></el-table-column>
                <el-table-column prop="배터리" label="배터리" align="center"></el-table-column>
            </el-table>
        </div>
        <div class="dialog_btn">
            <el-button type="primary" style="width:160px;" @click="close">확인</el-button>
        </div>
    </el-dialog>
</template>
<script>

import Campaign from "../chart/campaign";
export default {
    name: "default",
    components: {
        Campaign,
    },
    props: ['viewPop'],
    data() {
        return {
            viewTableData: [
                {
                    시리얼번호: 'A1234567',
                    모델번호: 'QA-01',
                    모드: 'Partial Sleep',
                    배터리: '80%'
                }, {
                    시리얼번호: 'A1234567',
                    모델번호: 'QA-01',
                    모드: 'Partial Sleep',
                    배터리: '80%'
                }, {
                    시리얼번호: 'A1234567',
                    모델번호: 'QA-01',
                    모드: 'Partial Sleep',
                    배터리: '80%'
                }, {
                    시리얼번호: 'A1234567',
                    모델번호: 'QA-01',
                    모드: 'Partial Sleep',
                    배터리: '80%'
                }, {
                    시리얼번호: 'A1234567',
                    모델번호: 'QA-01',
                    모드: 'Partial Sleep',
                    배터리: '80%'
                }
            ],
            form: {
                val1: '(주)Kickbility',
                val2: '서울시 구로구 구로 1동 **',
                val3: "02-***-4567",
                val4: "홍*동",
                val5: "ho*****"
            },
            options: [{
                value: 'Option1',
                label: 'Option1'
                }, {
                value: 'Option2',
                label: 'Option2'
                }, {
                value: 'Option3',
                label: 'Option3'
                }, {
                value: 'Option4',
                label: 'Option4'
                }, {
                value: 'Option5',
                label: 'Option5'
                }
            ],
            value: '그룹선택(전체)'
        };
    },
    methods: {
        close() {
            this.$emit("upview", false);
        }
    }
}
</script>