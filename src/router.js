import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./views/users/LoginPage.vue";
import ItemsList from "./views/inventory/ItemsList.vue";
import ItemDetails from "./views/inventory/ItemDetails.vue";
import ItemRequests from "./views/transactions/ItemRequestsList.vue";
import ItemReturns from "./views/transactions/ItemReturnsList.vue";

import Shipment from "./views/shipment/Shipment.vue";
import WayBill from "./views/shipment/WayBill.vue";
import Delivery from "./views/shipment/Delivery.vue";

import UsersList from "./views/users/UsersList.vue";
import UserDetails from "./views/users/UserDetails.vue";
import AddNewUser from "./views/users/AddNewUser.vue";
import Dashboard from "./views/dashboard/Dashboard.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
      meta: {
        hideNavbar: true,
      },
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/shipment",
      component: Shipment,
      children: [
        { path: "/waybill", component: WayBill },
        { path: "/delivery", component: Delivery },
      ],
    },
    {
      path: "/users",
      component: UsersList,
      children: [
        {
          path: "/create-user",
          component: AddNewUser,
        },
        {
          path: "/user-profile",
          component: null,
        },
      ],
    },
    {
      path: "/users/:id",

      component: UserDetails,
      children: [
        { path: "edit-user-role", component: null },
        { path: "disable-user", component: null },
      ],
    },
    {
      path: "/login",
      component: LoginPage,
    },

    {
      path: "/items",
      component: ItemsList,
    },
    {
      path: "/items/:id",
      component: ItemDetails,
    },
    // {
    //   path: "/user-profile",
    //   component: null,
    // },
    {
      path: "/reports",
      component: null,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;