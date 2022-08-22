import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "./views/layouts/MainLayout.vue";
import LoginPage from "./views/staffs/LoginPage.vue";
import Shipment from "./views/shipment/Shipment.vue";
import Staffs from "./views/staffs/Staffs.vue";
import Dashboard from "./views/dashboard/Dashboard.vue";
import Inventory from "./views/inventory/Inventory.vue";
import Transaction from "./views/transactions/Transaction.vue";

import Stores from "./views/stores/Stores.vue";
import StoreDetails from "./views/stores/StoreDetails.vue";
import Items from "./views/items/Items.vue";
import ItemReview from "./views/items/ItemReview.vue";
import AddNewItem from "./views/items/AddNewItem.vue";
import CreateBatch from "./views/items/CreateBatch.vue";

import ItemsWrapper from "./views/items/ItemsWrapper.vue";

import ForgotPassword from "./views/staffs/ForgotPassword.vue";

import Profile from "./views/staffs/StaffDetails.vue";
import Report from "./views/reports/Report.vue";
import NotFound from "./views/NotFound.vue";

// import ItemsList from "./views/inventory/ItemsList.vue";
// import ItemDetails from "./views/inventory/ItemDetails.vue";
import ItemRequests from "./views/transactions/ItemRequestsList.vue";
import ItemReturns from "./views/transactions/ItemReturnsList.vue";

// import WayBill from "./views/shipment/WayBill.vue";
// import Delivery from "./views/shipment/Delivery.vue";
// import StaffsList from "./views/staffs/StaffsList.vue";
// import StaffDetails from "./views/staffs/StaffDetails.vue";
// import AddNewStaff from "./views/staffs/AddNewStaff.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
      // meta: {
      //   hideNavbar: true,
      // },
    },
    {
      path: "/login",
      component: LoginPage,
    },

    {
      path: "/main",
      redirect: "/dashboard",
      component: MainLayout,
      children: [
        { path: "/dashboard", component: Dashboard },
        { path: "/staffs", component: Staffs },
        { path: "/shipment", component: Shipment },
        { path: "/inventory", component: Inventory },
        {
          path: "/items",
          component: ItemsWrapper,
          children: [

            // { path: "", component: Items },
            // { path: "/item-review", component: ItemReview },
            {
              path: "",
              component: Items,
              meta: {
                hideNavbar: true,
              },
            },
            { path: "/item-review", component: ItemReview },
            { path: "add-new-item", component: AddNewItem },
            { path: "/create-batch", component: CreateBatch },
          ],
        },
        // { path: "/create-batch", component: CreateBatch },
        {
          path: "/create-batch",
          component: CreateBatch,
          meta: {
            hideNavbar: true,
          },
        },
        { path: "/stores", component: Stores },
        { path: "/store", component: StoreDetails },
        {
          path: "/transactions",
          component: Transaction,
          // redirect: "/requests",
          // children: [
          //   { path: "/requests", component: ItemRequests },
          //   { path: "/returns", component: ItemReturns },
          // ],
        },
        { path: "/profile", component: Profile },
        { path: "/report", component: Report },
      ],
    },
    { path: "/:notFound(.*)", component: NotFound },

    {
      path: "/forgot-password",
      component: ForgotPassword,
    },

    // {
    //   path: "/home",
    //   component: Home,
    //   children: [
    //     {
    //       path: "/shipment",
    //       // component: Shipment,
    //       component: () =>
    //         import(
    //           /* webpackChunkName: "shipment" */ "./views/shipment/Shipment.vue"
    //         ),

    //       children: [
    //         { path: "/waybill", component: WayBill },
    //         { path: "/delivery", component: WayBill },
    //       ],
    //     },
    //     {
    //       path: "/staffs",
    //       component: StaffsList,
    //       children: [
    //         {
    //           path: "/create-staff",
    //           component: AddNewStaff,
    //         },
    //         {
    //           path: "/staff-profile",
    //           component: null,
    //         },
    //       ],
    //     },
    //     {
    //       path: "/staffs/:id",

    //       component: StaffDetails,
    //       children: [
    //         { path: "edit-user-role", component: null },
    //         { path: "disable-user", component: null },
    //       ],
    //     },

    //     {
    //       path: "/items",
    //       component: ItemsList,
    //     },
    //     {
    //       path: "/items/:id",
    //       component: ItemDetails,
    //     },
    //     {
    //       path: "/user-profile",
    //       component: null,
    //     },
    //     {
    //       path: "/reports",
    //       component: null,
    //     },
    //     {
    //       path: "/:notFound(.*)",
    //       component: NotFound,
    //     },
    //   ],
    // },
  ],
});

export default router;
