import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import gsap from "gsap";
import axios from "axios";
import imagesLoaded from "imagesloaded";
import ScrollTrigger from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper } from "swiper";
import { Navigation, Pagination, Controller, Thumbs } from "swiper/modules";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faPhone,
  faEnvelope,
  faLocationDot,
  faXmark,
  faArrowUp,
  faArrowRightLong,
  faArrowLeftLong,
  faPlus,
  faPlay,
  faStar,
  faQuoteLeft,
  faArrowUpRightFromSquare,
  faMagnifyingGlass,
  faAnglesRight,
  faChevronRight,
  faChevronLeft,
  faLayerGroup,
  faEye,
  faHeart as faHeartSolid,
  faCartShopping,
  faUser,
  faCartPlus,
  faCaretUp,
  faCaretDown,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleRight,
  faHeart as faHeartRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// ui_components_start

import BaseHero from "./components/ui/BaseHero.vue";
import BaseMeeting from "./components/ui/BaseMeeting.vue";
import BaseAlert from "./components/ui/BaseAlert.vue";
import ErrorAlert from "./components/ui/ErrorAlert.vue";
import BaseBlogNav from "./components/ui/BaseBlogNav.vue";
import LoadingSpinner from "./components/ui/LoadingSpinner.vue";

// ui_components_end

// gsap-start

gsap.registerPlugin(ScrollTrigger);

// gsap-end

library.add(
  faAngleDown,
  faPhone,
  faEnvelope,
  faLocationDot,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
  faGithub,
  faXmark,
  faArrowUp,
  faArrowRightLong,
  faPlus,
  faArrowLeftLong,
  faPlay,
  faStar,
  faQuoteLeft,
  faArrowUpRightFromSquare,
  faCircleRight,
  faMagnifyingGlass,
  faAnglesRight,
  faChevronRight,
  faChevronLeft,
  faLayerGroup,
  faEye,
  faHeartSolid,
  faHeartRegular,
  faCartShopping,
  faUser,
  faCartPlus,
  faCaretUp,
  faCaretDown,
  faCartArrowDown
);

const app = createApp(App);

app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
app.config.globalProperties.$imagesLoaded = imagesLoaded;
app.config.globalProperties.$VanillaTilt = VanillaTilt;
app.config.globalProperties.$noUiSlider = noUiSlider;
app.config.globalProperties.$Swiper = Swiper;
app.config.globalProperties.$Navigation = Navigation;
app.config.globalProperties.$Pagination = Pagination;
app.config.globalProperties.$Controller = Controller;
app.config.globalProperties.$Thumbs = Thumbs;
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-hero", BaseHero);
app.component("base-meeting", BaseMeeting);
app.component("base-blogNav", BaseBlogNav);
app.component("base-alert", BaseAlert);
app.component("error-alert", ErrorAlert);
app.component("loading-spinner", LoadingSpinner);

app.use(store);
app.use(router);
app.mount("#app");
