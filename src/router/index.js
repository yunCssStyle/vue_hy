import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/login/login";
import DashBoard from "@/components/dashboard/DashBoard";
import DashBoardView from "@/components/dashboard/DashBoardView";
import Campaign from "@/components/inquiry/campaign/campaign";
import Package from "@/components/inquiry/package/package";
import Company from "@/components/superAdmin/company/company";
import SuperDevice from "@/components/superAdmin/device/device";
import Account from "@/components/admin/account/account";
import Group from "@/components/admin/group/group";
import Device from "@/components/admin/device/device";
import Guide from "@/components/guide";
import AlertPage from "@/components/popup/ComPop";
import NotFound from "@/components/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
    meta: { gnb: "1", depth: "1", bodybg: "dashboard_bg", title: "대시보드" }
  },
  {
    path: "/dashboardview",
    name: "dashboardview",
    component: DashBoardView,
    meta: { gnb: "1", depth: "1", bodybg: "dashboard_bg", title: "대시보드" }
  },
  {
    path: "/campaign",
    name: "campaign",
    component: Campaign,
    meta: { gnb: "2", depth: "1", title: "캠페인조회" }
  },
  {
    path: "/package",
    name: "package",
    component: Package,
    meta: { gnb: "2", depth: "2", title: "패키지조회" }
  },
  {
    path: "/company",
    name: "company",
    component: Company,
    meta: { gnb: "3", depth: "1", title: "회사관리" }
  },
  {
    path: "/superdevice",
    name: "superdevice",
    component: SuperDevice,
    meta: { gnb: "3", depth: "2", title: "디바이스 관리" }
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: { gnb: "3", depth: "3", title: "계정 관리" }
  },
  {
    path: "/group",
    name: "group",
    component: Group,
    meta: { gnb: "3", depth: "4", title: "그룹 관리" }
  },
  {
    path: "/device",
    name: "device",
    component: Device,
    meta: { gnb: "3", depth: "5", title: "디바이스 관리" }
  },
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { layout: "LoginLayout" }
  },
  {
    path: "/guide",
    name: "guide",
    component: Guide,
    meta: { layout: "LoginLayout" }
  },
  {
    path: "/alert",
    name: "alert",
    component: AlertPage
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: { layout: "NotLayout" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
