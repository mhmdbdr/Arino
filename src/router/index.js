import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index.js";
const HomeView = () => import("../views/HomeView.vue");
const AboutView = () => import("../views/AboutView.vue");
const ServicesView = () => import("../views/ServicesView.vue");
const PortfolioView = () => import("../views/PortfolioView.vue");
const PortfolioDetailsView = () => import("../views/PortfolioDetailsView.vue");
const BlogView = () => import("../views/BlogView.vue");
const BlogDetailsView = () => import("../views/BlogDetailsView.vue");
const ShopView = () => import("../views/ShopView.vue");
const shopDetails = () => import("../views/ShopDetailsView.vue");
const CartView = () => import("../views/CartView.vue");
const CheckoutView = () => import("../views/CheckoutView.vue");
const SuccessOrderView = () => import("../views/SuccessOrderView.vue");
const WishlistView = () => import("../views/WishlistView.vue");
const ContactView = () => import("../views/pages/ContactView.vue");
const OueTeamView = () => import("../views/pages/OurTeamView.vue");
const TeamDetailsView = () => import("../views/pages/TeamDetailsView.vue");
const CaseStudyDetailsView = () =>
  import("../views/pages/CaseStudyDetailsView.vue");

const FAQView = () => import("../views/pages/FAQView.vue");
const notFound = () => import("../views/NotFoundView.vue");
const reqCheckout = (to, from, next) => {
  if (from.name === "checkout") {
    next();
  } else {
    next("/shop?page=1");
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/portfolioDetails/:projectId",
    name: "portfolioDetails",
    component: PortfolioDetailsView,
    props: true,
  },
  {
    path: "/blog",
    name: "BlogView",
    component: BlogView,
    props: true,
  },
  {
    path: "/blogDetails/:blogId",
    name: "blogDetails",
    component: BlogDetailsView,
    props: true,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
    props: true,
  },
  {
    path: "/shopDetails/:productId",
    name: "shopDetails",
    component: shopDetails,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    meta: { reqcartData: true },
  },
  {
    path: "/successOrder",
    name: "successOrder",
    component: SuccessOrderView,
    beforeEnter: reqCheckout,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishlistView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/team",
    name: "team",
    component: OueTeamView,
  },
  {
    path: "/teamDetails/:memberId",
    name: "teamDetails",
    component: TeamDetailsView,
    props: true,
  },
  {
    path: "/case-study",
    name: "caseStudyDetails",
    component: CaseStudyDetailsView,
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQView,
  },
  {
    path: "/:notFound(.*)*",
    name: "notFound",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, from, next) {
  if (!to.meta.reqcartData) {
    next();
  } else if (to.meta.reqcartData && store.getters["cart/myCart"].length !== 0) {
    next();
  } else {
    next("/shop?page=1");
  }
  store.dispatch("doneLoading", false);
});

router.afterEach(function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  // reset mdLinks-start

  const mdlinks = document.querySelector(".mdlinks");
  const mdbars = document.querySelector(".mdbars");
  mdlinks.classList.remove("show");
  mdbars.classList.remove("activebars");
  mdbars.setAttribute("aria-expanded", false);
  const openlinks = document.querySelectorAll(".openlinks");
  const shoplinks = document.querySelector("#shoplinks");
  const pageslinks = document.querySelector("#pageslinks");

  openlinks.forEach((link) => {
    link.setAttribute("aria-expanded", false);
    link.classList.add("collapsed");
  });
  shoplinks.classList.remove("show");
  pageslinks.classList.remove("show");

  // reset mdLinks-end
});

export default router;
