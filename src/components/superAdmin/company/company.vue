<template>
    <div class="section_connt">
        <page-head />
        <el-row class="pagetop">
            <el-col :span="12">
                <el-button
                    type="text"
                    class="iconminus"
                    @click="
                        Prompt(
                        '삭제',
                        `<i class=el-icon-question></i>선택한 회사 내 계정 및 디바이스가<br />
                        모두 삭제 됩니다. 그래도 삭제하겠습니까?<br />
                        삭제를 원하시면 <span class='redtx'>'회사삭제'</span>를 입력해 주세요.
                        `,
                        'warning',
                        '삭제되었습니다.',
                        'delete'
                        )
                    "
                    center
                    >
                    삭제
                </el-button>
                <el-button type="text" class="iconplus" @click=" enterPop = true ">등록</el-button>
                <span class="line">|</span>
                <el-button type="text" class="iconupload">Excel 업로드</el-button>
                <span class="line">|</span>
                <el-button type="text" 
                    class="icondownload"
                    @click="
                        confirm(
                        'Excel 양식 다운로드',
                        `<span class=label>파일위치</span>
                            <span class=input><input type=text><a class='el-link el-link--primary'>찾아보기</a></span>`,
                        '',
                        '다운로드 되었습니다.',
                        'filesave'
                        )"
                    >
                    Excel 양식 다운로드
                </el-button>
                <span class="line">|</span>
                <el-button type="text" 
                    class="icondownload"
                    @click="download(
                        'Excel 다운로드',
                        '선택한 회사를 Excel파일로<br />다운로드 하시겠습니까?',
                        'warning',
                        'filesave'
                    )"
                >
                    Excel 다운로드
                </el-button>
            </el-col>
            <el-col :span="12" class="total">전체 100개</el-col>
        </el-row>
        <div class="table_height">
            <el-table :data="tableData" style="width: 100%" max-height="100%" height="100%">
                <el-table-column type="selection" width="65"></el-table-column>
                <el-table-column label="회사명" min-width="250" class-name="pl20">
                    <template slot-scope="scope">
                        <el-link slot="reference" v-html="scope.row.company"></el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    property="전화번호"
                    label="전화번호"
                    min-width="150"></el-table-column>
                <el-table-column property="주소" label="주소" min-width="150"></el-table-column>
                <el-table-column property="관리자" label="관리자" min-width="150" align="center"></el-table-column>
                <el-table-column property="그룹" label="그룹(개)" width="150" align="center"></el-table-column>
                <el-table-column property="보유디바이스" label="보유 디바이스(개)" width="150" align="center"></el-table-column>
                <el-table-column label="상세정보" width="150" align="center">
                    <template slot-scope="scope">
                        <el-button class="icon more" @click="upview(true,scope.$index, scope.row)">
                            <i>더보기</i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination layout="prev, pager, next" :pager-count="5" :total="400"></el-pagination>
        <!-- 등록팝업 -->
        <enter :enterPop="enterPop" @update="update"/>
        <!-- 상세팝업 -->
        <viewpop :viewPop="viewPop" @upview="upview"/>
    </div>
</template>
<script>
    import PageHead from "./PageHead";
    import enter from "./pop/enter";
    import viewpop from "./pop/viewpop";
    import {alert_popup} from "@/mixins/alert_popup";
    export default {
        mixins: [alert_popup],
        name: "company",
        components: {
            PageHead,
            enter,
            viewpop
        },
        data() {
            return {
                tableData: [
                    {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }, {
                        company: '(주)Kickbility',
                        전화번호: '02-123-4567',
                        주소: '서울시 구로구 구로1동 **번지',
                        관리자: '홍*동',
                        그룹: '15',
                        보유디바이스: '1,254'
                    }
                ],
                enterPop: false,
                viewPop: false
            }
        },
        methods: {
            update(opencle, toastpop) {
                this.enterPop = opencle;
                if (toastpop) 
                    this.toast("등록 되었습니다.", "success");
            },
            upview(opencle) {
                this.viewPop = opencle;
            }
        }
    };
</script>