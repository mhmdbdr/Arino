<template>
  <div class="homePage">
    <div class="hero">
      <div class="container">
        <div class="content">
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
          <h1 class="head">
            Creativity In <br />
            Our Blood Line
          </h1>
          <div class="getaQuote">
            <div class="getaq-btn">
              <router-link to="/contact">
                <div class="cont goToBtn">
                  <span class="hoveranim">Get a Quote</span>
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
              </router-link>
            </div>
            <p>
              We deliver best problem solving solution for our client and
              provide finest finishing product in present and upcoming future.
            </p>
          </div>
          <div class="scrollDown"></div>
        </div>
      </div>
      <div class="follow-us">
        <span>follow us</span>
        <span>behance</span>
        <span>twitter</span>
      </div>
    </div>
    <div class="ourFunFact">
      <div class="container">
        <div class="statusBorder">
          <img
            src="../../imgs/homeAssets/funfact_shape_bg.svg"
            alt="ourFunfact Svg"
          />
          <div class="status">
            <div class="info">
              <h1>Our fun fact</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>
            <div class="nums row gy-3">
              <div class="num col-md-6 col-12">
                <div class="odo">
                  <span data-numm="40" class="odometer">40</span>
                  <span class="kword">K</span>
                </div>
                <div class="title">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  <span>Global Happy Clients</span>
                </div>
              </div>
              <div class="num col-md-6 col-12">
                <div class="odo">
                  <span data-numm="50" class="odometer">50</span>
                  <span class="kword">K</span>
                </div>
                <div class="title">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  <span>Project Completed</span>
                </div>
              </div>
              <div class="num col-md-6 col-12">
                <span data-numm="245" class="odometer">245</span>
                <div class="title">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  <span>Team Members</span>
                </div>
              </div>
              <div class="num col-md-6 col-12">
                <span data-numm="550" class="odometer">550</span>
                <div class="title">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  <span>Digital products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services" id="#services">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-xl-4 col-12 info">
              <span class="homeheadsec">What Can We Do</span>
              <p class="mainTitle">Services we can help you with</p>
              <router-link aria-label="services" to="/services">
                <div class="servicesbtn goToBtn">
                  <div class="hoveranim">See All Services</div>
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
              </router-link>
            </div>
            <div class="col-xl-8 col-12 row projects">
              <div class="box col-lg-3 col-sm-6 col-12 d-none d-lg-block"></div>
              <div class="box box-tilt col-lg-3 col-sm-6 col-12">
                <div class="box-container">
                  <img
                    loading="lazy"
                    src="../../imgs/homeAssets/service_1.webp"
                    alt="UI/UX design"
                  />
                  <span class="title">UI/UX design</span>
                </div>
              </div>
              <div class="box col-lg-3 col-sm-6 col-12 d-none d-lg-block"></div>
              <div class="box box-tilt col-lg-3 col-sm-6 col-12">
                <div class="box-container">
                  <img
                    loading="lazy"
                    src="../../imgs/homeAssets/service_2.webp"
                    alt="Vue.js Development"
                  />
                  <span class="title">Vue.js Development</span>
                </div>
              </div>
              <div class="box box-tilt col-lg-3 col-sm-6 col-12">
                <div class="box-container">
                  <img
                    loading="lazy"
                    src="../../imgs/homeAssets/service_3.webp"
                    alt="Digital Marketing"
                  />
                  <span class="title">Digital Marketing</span>
                </div>
              </div>
              <div class="box col-lg-3 col-sm-6 col-12 d-none d-lg-block"></div>
              <div class="box box-tilt col-lg-3 col-sm-6 col-12">
                <div class="box-container">
                  <img
                    loading="lazy"
                    src="../../imgs/homeAssets/service_4.webp"
                    alt="Technology"
                  />
                  <span class="title">Technology</span>
                </div>
              </div>
              <div class="box col-lg-3 col-sm-6 col-12 d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="content">
        <div class="head">
          <div class="homeheadsec">Latest Projects</div>
          <h1>Portfolio to explore</h1>
        </div>
        <transition name="dataFadein">
          <div
            v-show="PortfolioDataLoaded"
            class="swiper-container"
            ref="portSwiper"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(post, index) in getProjectsData"
                :key="index"
              >
                <div class="slide">
                  <div class="img">
                    <router-link
                      aria-label="portfolio"
                      :to="'/portfolioDetails/' + post.id"
                    >
                      <img :src="post.imgUrl" alt="Colorful Art Work" />
                      <div class="artWork">
                        <span>Colorful Art Work</span>
                        <span>See Details</span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </transition>
        <loading-spinner v-show="!PortfolioDataLoaded"></loading-spinner>
      </div>
    </div>
    <div class="ourAwards">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-xl-5 col-12 head-col">
              <span class="homeheadsec slideOurAwards">Our Awards</span>
              <p class="mainTitle">We get multiple awards</p>
              <div class="myCustomNav">
                <button
                  aria-label="prevbtn"
                  class="prevbtn"
                  @click="prevSwiper('awardsSwiper')"
                >
                  <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                </button>
                <button
                  aria-label="nextbtn"
                  class="nextbtn"
                  @click="nextSwiper('awardsSwiper')"
                >
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </button>
              </div>
            </div>
            <div class="col-xl-7 col-12 carousel-col">
              <div class="swiper-container" ref="awardsSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="awardscont">
                      <div class="award">
                        <div class="date">2019</div>
                        <div class="awardname">google awards</div>
                        <div class="pAward">
                          <span>Website of the day</span>
                          <span>Mobile exelence</span>
                        </div>
                      </div>
                      <div class="award">
                        <div class="date">2021</div>
                        <div class="awardname">css awards design</div>
                        <div class="pAward">
                          <span>Honorable mention</span>
                          <span>Desktop exelence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="awardscont">
                      <div class="award">
                        <div class="date">2020</div>
                        <div class="awardname">new technology innovation</div>
                        <div class="pAward">
                          <span>Honorable mention</span>
                          <span>Desktop exelence</span>
                        </div>
                      </div>
                      <div class="award">
                        <div class="date">2022</div>
                        <div class="awardname">ui/ux design of the month</div>
                        <div class="pAward">
                          <span>Website of the day</span>
                          <span>Mobile exelence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="awardscont">
                      <div class="award">
                        <div class="date">2019</div>
                        <div class="awardname">google awards</div>
                        <div class="pAward">
                          <span>Website of the day</span>
                          <span>Mobile exelence</span>
                        </div>
                      </div>
                      <div class="award">
                        <div class="date">2021</div>
                        <div class="awardname">css awards design</div>
                        <div class="pAward">
                          <span>Honorable mention</span>
                          <span>Desktop exelence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="awardscont">
                      <div class="award">
                        <div class="date">2020</div>
                        <div class="awardname">new technology innovation</div>
                        <div class="pAward">
                          <span>Honorable mention</span>
                          <span>Desktop exelence</span>
                        </div>
                      </div>
                      <div class="award">
                        <div class="date">2022</div>
                        <div class="awardname">ui/ux design of the month</div>
                        <div class="pAward">
                          <span>Website of the day</span>
                          <span>Mobile exelence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arrowShape d-none d-lg-block"></div>
    </div>
    <div class="agile">
      <div class="container">
        <div class="content">
          <p>
            Our agile process is ability to adapt and respond to change. Agile
            organizations view change as an opportunity, not a threat.
          </p>
          <div class="yVid">
            <div @click="toggleYTIframe(true)" class="playBtn">
              <font-awesome-icon icon="fa-solid fa-play" />
            </div>
          </div>
        </div>
      </div>
      <transition name="YTIframe">
        <div v-if="YTIframeVal" class="YTContent">
          <button
            aria-label="closingBtn"
            @click="toggleYTIframe(false)"
            class="closingBtn"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
          <iframe
            class="YTiframe"
            src="https://www.youtube.com/embed/VcaAVWtP48A"
          >
          </iframe>
        </div>
      </transition>
      <div
        v-if="YTIframeVal"
        @click="toggleYTIframe(false)"
        class="shadow"
      ></div>
    </div>
    <div class="ourTeam">
      <div class="container">
        <div class="content">
          <div class="controls">
            <div class="head">
              <div class="homeheadsec slidOurTeam">Our Team</div>
              <div class="mainTitle">
                Awesome team <br class="d-block d-xl-none" />
                members
              </div>
            </div>
            <div class="myCustomNav d-block d-xl-none">
              <button
                aria-label="prevbtn"
                class="prevbtn"
                @click="prevSwiper('teamSwiper')"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
              </button>
              <button
                aria-label="nextbtn"
                class="nextbtn"
                @click="nextSwiper('teamSwiper')"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>
          </div>
          <transition name="dataFadein">
            <div
              v-show="teamDataLoaded"
              class="swiper-container"
              ref="teamSwiper"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(member, index) in getTeamMembersData"
                  :key="index"
                >
                  <div class="memberCard">
                    <router-link
                      aria-label="teamMember"
                      :to="'/teamDetails/' + member.id"
                    >
                      <div class="img-container">
                        <img
                          :src="member.imgUrl"
                          alt="team member"
                          loading="lazy"
                        />
                      </div>
                      <div class="title">
                        <div class="name">{{ member.name }}</div>
                        <div class="rule">{{ member.job }}</div>
                      </div>
                      <div class="socials">
                        <div class="social">
                          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        </div>
                        <div class="social">
                          <font-awesome-icon icon="fa-brands fa-x-twitter" />
                        </div>
                        <div class="social">
                          <font-awesome-icon icon="fa-brands fa-youtube" />
                        </div>
                        <div class="social">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </transition>
          <loading-spinner v-show="!teamDataLoaded"></loading-spinner>
        </div>
      </div>
    </div>
    <div class="comments">
      <img
        class="commentsSvg d-none d-lg-block"
        src="../../imgs/homeAssets/9c900a56-7712-4f59-b42e-99af2d226e5b.svg"
        alt="commentsSvg"
      />
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-12 ppcol">
              <div class="swiper-container" ref="pplSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="img-container">
                      <img
                        loading="lazy"
                        src="../../imgs/homeAssets/testimonial_1.webp"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="img-container">
                      <img
                        loading="lazy"
                        src="../../imgs/homeAssets/testimonial_2.webp"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="img-container">
                      <img
                        loading="lazy"
                        src="../../imgs/homeAssets/testimonial_3.webp"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="img-container">
                      <img
                        loading="lazy"
                        src="../../imgs/homeAssets/testimonial_1.webp"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="img-container">
                      <img
                        loading="lazy"
                        src="../../imgs/homeAssets/testimonial_2.webp"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="img-container">
                      <img
                        loading="lazy"
                        src="../../imgs/homeAssets/testimonial_3.webp"
                        alt="client"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-7 col-12 cmmtcol">
              <div class="swiper-container" ref="commentsSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="commentContainer">
                      <p>
                        I wish I would have thought of it first. Creative agency
                        is the most tech valuable business resource we have ever
                        purchased. Dude your stuff is the bomb! eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt to the explicabo.
                      </p>
                      <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon
                          icon="fa-solid fa-star"
                          class="deactive"
                        />
                      </div>
                      <div class="pplInfo">
                        <div class="name">Jasmine Rivera</div>
                        <div class="rule">Marketing Analyst</div>
                      </div>
                      <font-awesome-icon icon="fa-solid fa-quote-left" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="commentContainer">
                      <p>
                        I really wish I had come up with that idea initially.
                        Investing in creative agency has proven to be the most
                        invaluable tech resource we've ever acquired. Your work
                        is absolutely fantastic! It's like the words of praise
                        that come straight from the creator himself, unveiling
                        the truth and beauty of life.
                      </p>
                      <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon
                          icon="fa-solid fa-star"
                          class="deactive"
                        />
                        <font-awesome-icon
                          icon="fa-solid fa-star"
                          class="deactive"
                        />
                      </div>
                      <div class="pplInfo">
                        <div class="name">Ethan Carter</div>
                        <div class="rule">Software Engineer</div>
                      </div>
                      <font-awesome-icon icon="fa-solid fa-quote-left" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="commentContainer">
                      <p>
                        I'm kicking myself for not thinking of that brilliant
                        idea sooner. Our investment in creative agency has
                        turned out to be the ultimate tech asset we've ever
                        secured. Your work is simply mind-blowing! It's as if
                        every word you craft unveils the secrets of existence
                        itself, spoken by the architect of life.
                      </p>
                      <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                      </div>
                      <div class="pplInfo">
                        <div class="name">Olivia Bennett</div>
                        <div class="rule">Financial Planner</div>
                      </div>
                      <font-awesome-icon icon="fa-solid fa-quote-left" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="commentContainer">
                      <p>
                        I wish I would have thought of it first. Creative agency
                        is the most tech valuable business resource we have ever
                        purchased. Dude your stuff is the bomb! eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt to the explicabo.
                      </p>
                      <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon
                          icon="fa-solid fa-star"
                          class="deactive"
                        />
                      </div>
                      <div class="pplInfo">
                        <div class="name">Jasmine Rivera</div>
                        <div class="rule">Marketing Analyst</div>
                      </div>
                      <font-awesome-icon icon="fa-solid fa-quote-left" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="commentContainer">
                      <p>
                        I really wish I had come up with that idea initially.
                        Investing in creative agency has proven to be the most
                        invaluable tech resource we've ever acquired. Your work
                        is absolutely fantastic! It's like the words of praise
                        that come straight from the creator himself, unveiling
                        the truth and beauty of life.
                      </p>
                      <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon
                          icon="fa-solid fa-star"
                          class="deactive"
                        />
                        <font-awesome-icon
                          icon="fa-solid fa-star"
                          class="deactive"
                        />
                      </div>
                      <div class="pplInfo">
                        <div class="name">Ethan Carter</div>
                        <div class="rule">Software Engineer</div>
                      </div>
                      <font-awesome-icon icon="fa-solid fa-quote-left" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="commentContainer">
                      <p>
                        I'm kicking myself for not thinking of that brilliant
                        idea sooner. Our investment in creative agency has
                        turned out to be the ultimate tech asset we've ever
                        secured. Your work is simply mind-blowing! It's as if
                        every word you craft unveils the secrets of existence
                        itself, spoken by the architect of life.
                      </p>
                      <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                      </div>
                      <div class="pplInfo">
                        <div class="name">Olivia Bennett</div>
                        <div class="rule">Financial Planner</div>
                      </div>
                      <font-awesome-icon icon="fa-solid fa-quote-left" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="myCustomNav">
                <button
                  aria-label="prevbtn"
                  class="prevbtn"
                  @click="prevSwiper('commentsSwiper')"
                >
                  <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                </button>
                <button
                  aria-label="nextbtn"
                  class="nextbtn"
                  @click="nextSwiper('commentsSwiper')"
                >
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ourBlog">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="info col-xl-5 col-12">
              <div class="head">
                <div class="homeheadsec">Our Blog</div>
                <div class="mainTitle">
                  Explore recent <br class="d-none d-xl-block" />
                  publication
                </div>
                <router-link aria-label="blog" to="/blog?page=1">
                  <div class="ourBolgbtn goToBtn">
                    <div class="hoveranim">View More Blog</div>
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                  </div>
                </router-link>
              </div>
            </div>
            <transition name="dataFadein">
              <div v-show="blogDataLoaded" class="col-xl-7 col-12 blogPosts">
                <div class="swiper-container" ref="blogSwiper">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(post, index) in getBlogData"
                      :key="index"
                    >
                      <div class="blogCrd">
                        <router-link
                          aria-label="post"
                          :to="'/blogDetails/' + post.id"
                        >
                          <img :src="post.imgUrl" alt="post" loading="lazy" />
                          <div class="blogInfo">
                            <div class="post-date">{{ post.date }}</div>
                            <div class="blogCardTitle">
                              <a aria-label="postTitle" href="">{{
                                post.title
                              }}</a>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </transition>
            <loading-spinner
              v-show="!blogDataLoaded"
              class="col-xl-7 col-12"
            ></loading-spinner>
          </div>
        </div>
      </div>
    </div>
    <div class="partners">
      <div class="scroller">
        <div class="scroller_inner">
          Our reputed world wide partners Our reputed world wide partners
        </div>
      </div>
      <div class="container">
        <div class="content">
          <div class="brand-logo">
            <img src="../../imgs/homeAssets/partner_1.svg" alt="partner_1" />
          </div>
          <div class="brand-logo">
            <img src="../../imgs/homeAssets/partner_2.svg" alt="partner_2" />
          </div>
          <div class="brand-logo">
            <img src="../../imgs/homeAssets/partner_3.svg" alt="partner_3" />
          </div>
          <div class="brand-logo">
            <img src="../../imgs/homeAssets/partner_4.svg" alt="partner_4" />
          </div>
          <div class="brand-logo">
            <img src="../../imgs/homeAssets/partner_5.svg" alt="partner_5" />
          </div>
        </div>
      </div>
    </div>
    <base-meeting :btn="true">
      <template #default>
        Let’s disscuse make <br />
        something cool together
      </template>
    </base-meeting>
  </div>
</template>

<script>
import odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

export default {
  data() {
    return {
      YTIframeVal: false,
      blogDataLoaded: false,
      teamDataLoaded: false,
      PortfolioDataLoaded: false,
    };
  },
  methods: {
    doneLoading() {
      const content = document.querySelector(".homePage");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.$nextTick(() => {
          this.$store.dispatch("doneLoading", true);
          this.initSwipers();
        });
      });
    },
    initSwiperPort() {
      this.$nextTick(() => {
        // portfolio-swiper-start
        // eslint-disable-next-line no-unused-vars
        const portSwiper = new this.$Swiper(this.$refs.portSwiper, {
          modules: [this.$Pagination],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          centeredSlides: true,
          slidesPerGroup: 1,
          breakpoints: {
            1200: {
              slidesPerView: 2.2,
            },
            576: {
              slidesPerView: 1.4,
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
        this.$ScrollTrigger.refresh();
        // portfolio-swiper-end
      });
    },
    initSwiperTeam() {
      this.$nextTick(() => {
        // team-swiper-start
        // eslint-disable-next-line no-unused-vars
        const teamSwiper = new this.$Swiper(this.$refs.teamSwiper, {
          modules: [this.$Pagination],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          slidesPerGroup: 1,
          grabCursor: true,
          allowTouchMove: true,
          breakpoints: {
            1200: {
              slidesPerView: 4,
              allowTouchMove: false,
              loop: false,
            },
            991: {
              slidesPerView: 3,
              loop: true,
              allowTouchMove: true,
              pagination: {
                enabled: false,
              },
            },
            767: {
              slidesPerView: 2,
              allowTouchMove: true,
              loop: true,
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            enabled: true,
          },
        });
        this.$ScrollTrigger.refresh();
        // team-swiper-end
      });
    },
    initSwiperBlog() {
      this.$nextTick(() => {
        // blog-swiper-start
        // eslint-disable-next-line no-unused-vars
        const blogSwiper = new this.$Swiper(this.$refs.blogSwiper, {
          modules: [this.$Pagination],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          slidesPerGroup: 1,
          grabCursor: true,
          breakpoints: {
            1200: {
              slidesPerView: 2.2,
              pagination: {
                enabled: false,
              },
            },
            991: {
              slidesPerView: 2.4,
              pagination: {
                enabled: false,
              },
            },
            767: {
              slidesPerView: 2,
              pagination: {
                enabled: false,
              },
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            enabled: true,
          },
        });
        this.$ScrollTrigger.refresh();
        // blog-swiper-end
      });
    },
    initSwipers() {
      this.$nextTick(() => {
        // awards-swiper-start
        // eslint-disable-next-line no-unused-vars
        const awardSwiper = new this.$Swiper(this.$refs.awardsSwiper, {
          modules: [this.$Pagination],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          slidesPerGroup: 1,
          grabCursor: true,
          breakpoints: {
            576: {
              slidesPerView: 2,
              pagination: {
                enabled: false,
              },
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            enabled: true,
          },
        });
        // awards-swiper-end
        // comments-swiper-start
        // eslint-disable-next-line no-unused-vars
        const pplSwiper = new this.$Swiper(this.$refs.pplSwiper, {
          modules: [this.$Controller],
          slidesPerView: "auto",
          centeredSlides: true,
          grabCursor: true,
          slideToClickedSlide: true,
        });
        // eslint-disable-next-line no-unused-vars
        const commentsSwiper = new this.$Swiper(this.$refs.commentsSwiper, {
          modules: [this.$Controller],
          spaceBetween: 15,
          grabCursor: true,
        });
        commentsSwiper.controller.control = pplSwiper;
        pplSwiper.controller.control = commentsSwiper;
        this.$ScrollTrigger.refresh();
        // comments-swiper-end
      });
    },
    gsapAnimation() {
      // ScrollTrigger Config
      const scrollTriggerConfig = (trigger) => ({
        trigger,
        start: "+100 bottom",
        end: "center center",
        scrub: false,
        markers: false,
        toggleActions: "play none none reverse",
      });

      // Helper function
      const fadeIn = (target, x = 0, y = 0, duration = 1) => {
        this.$gsap.from(target, {
          x,
          y,
          duration,
          opacity: 0,
          scrollTrigger: scrollTriggerConfig(target),
        });
      };

      // Hero Animation
      this.$gsap.from(".hero .head", {
        x: 100,
        duration: 1,
      });

      // Services Button Animation
      fadeIn(".servicesbtn", 50);

      // Portfolio Animation
      fadeIn(".portfolio .head h1", 0, 50, 0.5);

      // Our Awards Animation
      fadeIn(".slideOurAwards", 50);

      // Our Team Animation
      fadeIn(".slidOurTeam", 50);

      // Agile Paragraph Animation
      fadeIn(".agile p", 0, 50, 0.5);

      // Comments Animation
      this.$gsap
        .timeline({
          scrollTrigger: {
            trigger: ".comments",
            start: "top bottom",
            end: "bottom center",
            scrub: 1.5,
            markers: false,
          },
        })
        .to(".commentsSvg", {
          y: 50,
        });

      // Our Blog Button
      fadeIn(".ourBolgbtn", 50);

      // Our Blog Background
      this.$gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ourBlog",
            start: "52% bottom",
            end: "bottom center",
            scrub: 0.1,
            markers: false,
          },
        })
        .to(".ourBlog", {
          "--smlShapeTop": "20%",
        })
        .to(
          ".ourBlog",
          {
            "--bgShapeLeft": "20%",
          },
          0
        );
    },
    nextSwiper(swiperRef) {
      const activeSwiperRefRef = this.$refs[swiperRef];
      activeSwiperRefRef.swiper.slideNext();
    },
    prevSwiper(carouselRef) {
      const activeCarouselRef = this.$refs[carouselRef];
      activeCarouselRef.swiper.slidePrev();
    },
    toggleYTIframe(val) {
      this.YTIframeVal = val;
    },
    async teamLoadData() {
      const data = this.$store.getters["teamMembers/teamData"];
      if (data.length !== 4) {
        await this.$store.dispatch("teamMembers/fetchTeammembersData");
      }
      const content = document.querySelector(".ourTeam");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.teamDataLoaded = true;
        this.initSwiperTeam();
      });
    },
    async blogLoadData() {
      const data = this.$store.getters["blog/HomeBlogsData"];
      if (data.length === 0) {
        await this.$store.dispatch("blog/fetchHomeBlogsData", "5");
      }
      const content = document.querySelector(".blogPosts");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.blogDataLoaded = true;
        this.initSwiperBlog();
      });
    },
    async getPortfolioData() {
      const data = this.$store.getters["portfolio/projectsData"];
      if (data.length === 0) {
        await this.$store.dispatch("portfolio/homePortfoliosData", "5");
      }
      const content = document.querySelector(".portfolio");
      const imgload = this.$imagesLoaded(content);
      imgload.on("done", () => {
        this.PortfolioDataLoaded = true;
        this.initSwiperPort();
      });
    },
    odometerInit() {
      const els = document.querySelectorAll(".odometer");
      els.forEach((ele) => {
        new odometer({
          el: ele,
          value: 0,
        });

        this.$ScrollTrigger.create({
          trigger: ele,
          start: "bottom 98%",
          onToggle: () => {
            ele.innerHTML = ele.dataset.numm;
          },
        });
      });
    },
    tiltInit() {
      const elements = document.querySelectorAll(".box-tilt");
      const baseQuery = "(min-width: 992px)";

      const bQMatch = window.matchMedia(baseQuery);

      // initialize VanillaTilt
      if (bQMatch.matches) {
        elements.forEach((ele) => {
          this.$VanillaTilt.init(ele);
        });
      }
    },
  },
  computed: {
    getTeamMembersData() {
      return this.$store.getters["teamMembers/teamData"];
    },
    getBlogData() {
      const data = this.$store.getters["blog/HomeBlogsData"];
      return data;
    },
    getProjectsData() {
      return this.$store.getters["portfolio/projectsData"];
    },
  },
  async mounted() {
    this.gsapAnimation();
    this.odometerInit();
    this.doneLoading();
    this.teamLoadData();
    this.blogLoadData();
    this.getPortfolioData();

    this.tiltInit();
  },
  beforeRouteUpdate() {
    this.gsapAnimation();
  },
};
</script>

<style lang="scss" scoped>
.homePage {
  position: relative;
  @media (max-width: 1540px) {
    .hero {
      padding-top: 220px !important;
      min-height: 960px !important;
    }
  }
  @media (max-width: 1150px) and (min-width: 758px) {
    .hero {
      height: initial !important;
    }
  }
  @media (max-width: 1400px) {
    .hero {
      padding-top: 200px !important;
      min-height: 880px !important;
    }
  }
  @media (max-width: 1200px) {
    .hero {
      padding-top: 200px !important;
      padding-bottom: 350px !important;
    }
  }
  @media (max-width: 767px) {
    .hero {
      padding-top: 60px !important;
      padding-bottom: 260px !important;
      min-height: 680px !important;
      display: flex;
      align-items: center;
    }
  }
  .hero {
    background-image: url("../../imgs/homeAssets/hero_bg.webp");
    height: calc(100dvh + 180px);
    padding: 220px 0 170px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    .content {
      @media (max-width: 1400px) {
        h1 {
          font-size: 100px !important;
        }
      }
      @media (max-width: 1199px) {
        h1 {
          font-size: 80px !important;
        }
      }
      @media (max-width: 991px) {
        h1 {
          font-size: 56px !important;
          margin-bottom: 20px !important;
        }
      }
      @media (max-width: 575px) {
        h1 {
          font-size: 42px !important;
        }
      }
      h1 {
        font-size: 120px;
        font-weight: 700;
        margin-bottom: 60px;
        position: relative;
        width: fit-content;
        height: auto;
        @media (max-width: 575px) {
          br {
            display: none;
          }
        }
      }
      @media (max-width: 991px) {
        .getaQuote {
          flex-direction: column-reverse;
          align-items: start !important;
          .getaq-btn {
            width: fit-content !important;
          }
          p {
            width: 100% !important;
            max-width: 500px !important;
          }
        }
      }
      .getaQuote {
        display: flex;
        align-items: center;
        .getaq-btn {
          .cont {
            width: fit-content;
            display: flex;
            align-items: center;
            @media (min-width: 992px) {
              &:hover {
                color: var(--prim-color);
                cursor: pointer;
                span {
                  &::before {
                    width: 100%;
                  }
                }
              }
            }
          }
          width: 50%;
          font-size: 17px;
          font-weight: 500;
          display: flex;
          align-items: center;
          transition: color 0.4s;
          svg {
            margin-left: 15px;
          }
          span {
            display: block;
          }
        }
        @media (max-width: 991px) {
          p {
            margin-bottom: 24px !important;
          }
        }
        p {
          width: 50%;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.9rem;
          margin: 0;
        }
      }
      @media (max-width: 1199px) {
        .scrollDown {
          bottom: 220px !important;
        }
      }
      .scrollDown {
        content: "";
        position: absolute;
        height: 35px;
        width: 20px;
        border-radius: 10px;
        border: 2px solid white;
        left: 50%;
        transform: translate(-50%);
        bottom: 25%;
        &::before {
          content: "";
          position: absolute;
          height: 5px;
          width: 5px;
          border-radius: 50%;
          background-color: white;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-name: scrolldown;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      }
    }
    @media (max-width: 1200px) {
      .follow-us {
        display: none;
      }
    }
    .follow-us {
      position: absolute;
      top: 50%;
      right: 45px;
      transform: translateY(-85%) rotate(180deg);
      writing-mode: vertical-lr;
      span {
        color: #fefefe;
        display: inline;
        text-transform: capitalize;
        font-size: 17px;
        font-weight: 500;
        position: relative;
        &:not(:last-of-type) {
          padding-bottom: 35px;
        }
        &:nth-child(1) {
          &::after {
            content: "";
            position: absolute;
            right: 50%;
            transform: translate(-50%);
            bottom: 10px;
            height: 15px;
            width: 2px;
            background-color: #fefefe;
          }
        }
        &:nth-child(2) {
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          @media (min-width: 992px) {
            &:hover {
              color: var(--prim-color);
            }
          }
          &::after {
            content: "";
            position: absolute;
            left: 0px;
            bottom: 10px;
            height: 2px;
            width: 15px;
            background-color: #fefefe;
          }
        }
        &:nth-child(3) {
          padding-top: 10px;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          @media (min-width: 992px) {
            &:hover {
              color: var(--prim-color);
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .ourFunFact {
      margin-bottom: 80px !important;
    }
  }
  .ourFunFact {
    margin-bottom: 150px;
    @media (max-width: 1399px) {
      .statusBorder {
        padding: 60px 50px !important;
      }
    }
    @media (max-width: 575px) {
      .statusBorder {
        padding: 40px 30px !important;
      }
    }
    .statusBorder {
      position: relative;
      padding: 60px 80px;
      background: linear-gradient(267.18deg, #161616 0%, #080808 100%);
      border-radius: 15px;
      margin-top: -130px;
      z-index: 1;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        right: -20%;
        width: 100%;
        height: 100%;
      }
      @media (max-width: 1199px) {
        .status {
          flex-direction: column;
          .info {
            width: 100% !important;
            margin-bottom: 50px !important;
          }
          .nums {
            width: 100% !important;
            padding-left: 0px !important;
          }
        }
      }
      .status {
        display: flex;
        position: relative;
        @media (max-width: 1400px) {
          .info {
            h1 {
              margin-bottom: 10px !important;
              font-size: 42px !important;
            }
          }
        }
        @media (max-width: 991px) {
          .info {
            margin-bottom: 30px !important;
          }
        }
        .info {
          width: 40%;
          h1 {
            font-size: 50px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          p {
            margin: 0;
            color: #fefefeb3;
            line-height: 1.75em;
            font-size: 17px;
          }
        }
        @media (max-width: 1400px) {
          .nums {
            padding-left: 50px !important;
          }
        }
        @media (max-width: 1199px) {
          .nums {
            padding-left: 0px !important;
          }
        }
        .nums {
          width: 60%;
          padding-left: 80px;
          .num {
            display: flex;
            align-items: center;
            @media (max-width: 1400px) {
              .odometer,
              .kword {
                font-size: 42px !important;
              }
            }
            .odo {
              display: flex;
              align-items: center;
              .kword {
                font-size: 50px;
                font-weight: 700;
              }
            }
            .odometer {
              font-size: 50px;
              padding-top: 5px;
              font-weight: 700;
            }
            .title {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: start;
              margin-left: 13px;
              svg {
                color: var(--prim-color);
                font-size: 13px;
              }
              span {
                color: #fefefeb3;
                font-size: 17px;
              }
            }
          }
        }
      }
    }
  }
  .services {
    .content {
      @media (max-width: 1199px) {
        .info {
          margin-bottom: 90px !important;
        }
      }
      @media (max-width: 991px) {
        .info {
          margin-bottom: 45px !important;
        }
      }
      .projects {
        margin: 0;
        @media (max-width: 991px) {
          .box {
            margin-bottom: 30px !important;
          }
        }
        .box {
          .box-container {
            position: relative;
            display: block;
            overflow: hidden;
            border-radius: 10px;
            text-decoration: none;
            color: white;
            font-size: 24px;
            font-weight: 500;
            transition-duration: 0.5s;
            @media (min-width: 992px) {
              &:hover {
                filter: drop-shadow(0px 0px 30px rgba(255, 74, 23, 0.5));
              }
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.486);
            }
            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            img {
              width: 100%;
              height: 100%;
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .portfolio {
      margin-top: 50px !important;
    }
  }
  .portfolio {
    margin-top: 150px;
    @media (max-width: 991px) {
      .head {
        margin-bottom: 45px !important;
      }
    }
    .content {
      .head {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 90px;
        @media (max-width: 1380px) {
          h1 {
            font-size: 42px !important;
          }
        }
        @media (max-width: 991px) {
          h1 {
            font-size: 36px !important;
          }
        }
        h1 {
          font-size: 50px;
          margin: 0;
        }
      }
      @media (max-width: 991px) {
        .slide {
          height: 380px !important;
        }
      }
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            &:not(.swiper-slide-active) {
              .slide {
                .artWork {
                  animation: leaveportSlidesAnimation 0.6s forwards;
                  span:nth-child(1) {
                    animation: leavespanPortSlidesAnimation 0.5s 0.1s forwards;
                  }
                  span:nth-child(2) {
                    animation: leavespanPortSlidesAnimation 0.5s 0.2s forwards;
                  }
                }
              }
            }
            &.swiper-slide-active {
              .slide {
                .artWork {
                  animation: enterportSlidesAnimation 0.6s forwards;
                  span:nth-child(1) {
                    animation: enterspanPortSlidesAnimation 0.5s 0.1s forwards;
                  }
                  span:nth-child(2) {
                    animation: enterspanPortSlidesAnimation 0.5s 0.2s forwards;
                  }
                }
                @media (min-width: 992px) {
                  .img {
                    height: 100% !important;
                  }
                }
              }
            }
            .slide {
              height: 450px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              @media (min-width: 992px) {
                .img {
                  height: 80% !important;
                  transition: height 0.5s ease;
                }
              }
              .img {
                position: relative;
                overflow: hidden;
                border-radius: 20px;
                width: 100%;
                max-width: 100%;
                height: 100%;
                transition: height 0.5s ease;
                object-fit: cover;
                cursor: pointer;
                margin: 0 10px;
                a {
                  color: white;
                  position: relative;
                  display: block;
                  z-index: 2;
                  width: 100%;
                  height: 100%;
                  @media (min-width: 992px) {
                    &:hover {
                      &:after {
                        background-color: rgba(22, 22, 22, 0.4) !important;
                      }
                    }
                  }
                  &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index: 2;
                    background-color: transparent;
                    transition-duration: 0.4s;
                  }
                  img {
                    max-width: 100%;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                  }
                  .artWork {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    padding: 105px 20px 80px 65px;
                    border-radius: 50%;
                    background-color: var(--prim-color);
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    @media (max-width: 1380px) {
                      span:nth-child(1) {
                        font-size: 20px !important;
                      }
                    }
                    span {
                      position: relative;
                      display: block;
                      text-align: start;
                      &:nth-child(1) {
                        font-size: 22px;
                        margin-bottom: 5px;
                        font-weight: 700;
                      }
                      &:nth-child(2) {
                        color: #fefefeb3;
                        font-weight: 500;
                        width: fit-content;
                        &::after {
                          content: "";
                          position: absolute;
                          bottom: 8px;
                          right: -30px;
                          width: 20px;
                          height: 1px;
                          background-color: #fefefeb3;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .ourAwards {
      padding-top: 80px !important;
      padding-bottom: 70px !important;
    }
  }
  .ourAwards {
    padding-top: 150px;
    padding-bottom: 130px;
    position: relative;
    overflow: hidden;
    .arrowShape {
      width: 320px;
      height: 320px;
      position: absolute;
      top: 50%;
      right: -210px;
      transform: translateY(-50%) rotate(45deg);
      background-color: black;
      z-index: 1;
      animation: arrowShapeAnimation 10s infinite ease-in-out;
    }
    .content {
      position: relative;
      z-index: 2;
      @media (max-width: 1199px) {
        .head-col {
          margin-bottom: 90px;
        }
      }
      @media (max-width: 991px) {
        .head-col {
          margin-bottom: 45px;
        }
      }
      .head-col {
        .myCustomNav {
          .prevbtn {
            margin-left: 0 !important;
          }
        }
      }
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            .awardscont {
              @media (max-width: 991px) {
                .award:first-of-type {
                  margin-bottom: 30px !important;
                }
              }
              .award {
                &:first-of-type {
                  margin-bottom: 40px;
                }
                text-align: start;
                .date {
                  font-size: 30px;
                  margin-bottom: 15px;
                  color: var(--prim-color);
                  font-weight: 500;
                }
                .awardname {
                  font-size: 21px;
                  margin-bottom: 10px;
                  color: #fefefe;
                  text-transform: capitalize;
                  font-weight: 600;
                }
                .pAward {
                  span {
                    display: block;
                    color: #fefefeb3;
                    font-weight: 500;
                    &:first-of-type {
                      margin-bottom: 7px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .agile {
      margin-bottom: 80px !important;
    }
  }
  .agile {
    margin-bottom: 145px;
    @media (max-width: 1380px) {
      p {
        font-size: 42px !important;
      }
    }
    @media (max-width: 991px) {
      p {
        font-size: 36px !important;
      }
    }
    p {
      font-size: 50px;
      text-align: center;
      font-weight: 600;
      margin-bottom: 70px;
      line-height: 1.4em;
    }
    @media (max-width: 1550px) {
      .yVid {
        height: 650px !important;
      }
    }
    @media (max-width: 575px) {
      .yVid {
        height: 380px !important;
      }
    }
    @media (max-width: 991px) {
      .yVid {
        height: 400px !important;
      }
    }
    .yVid {
      background-image: url("../../imgs/homeAssets/video_bg.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 725px;
      border-radius: 20px;
      position: relative;
      @media (min-width: 992px) {
        &:hover {
          &::after {
            background-color: rgba(22, 22, 22, 0.4);
          }
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 3;
        background-color: transparent;
        transition-duration: 0.4s;
      }
      cursor: pointer;
      @media (max-width: 575px) {
        .playBtn {
          width: 70px;
          height: 70px;
        }
      }
      .playBtn {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 100px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4;
        svg {
          position: relative;
          z-index: 2;
          color: var(--prim-color);
          font-size: 30px;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          border-radius: 50%;
          z-index: 1;
          animation: playBtnAnimation 1.8s ease infinite;
        }
      }
    }
    @media (max-width: 575px) {
      .YTContent {
        display: flex;
        align-items: center;
        .YTiframe {
          height: 50% !important;
        }
        .closingBtn {
          top: calc((100% - (253px)) / 2) !important;
        }
      }
    }
    .YTContent {
      position: fixed;
      top: 0px;
      left: 0px;
      margin: 30px;
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      z-index: 1500;
      .closingBtn {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 40px;
        height: 40px;
        background-color: red;
        z-index: 1501;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          color: white;
          font-size: 18px;
        }
      }
      .YTiframe {
        width: 100%;
        height: 100%;
      }
    }
    .shadow {
      background-color: rgba(0, 0, 0, 0.179);
    }
  }
  @media (max-width: 991px) {
    .ourTeam {
      margin-bottom: 80px !important;
    }
  }
  .ourTeam {
    margin-bottom: 150px;
    a {
      color: #fefefe;
    }
    @media (max-width: 991px) {
      .controls {
        margin-bottom: 45px !important;
        align-items: start !important;
        flex-direction: column;
        .myCustomNav {
          margin-top: 15px !important;
        }
      }
    }
    .controls {
      margin-bottom: 85px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .myCustomNav {
        .prevbtn {
          margin-left: 0 !important;
        }
      }
      .mainTitle {
        margin-bottom: 0 !important;
      }
    }
    @media (max-width: 767px) {
      .memberCard {
        margin: 0 !important;
      }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          .memberCard {
            width: 100%;
            position: relative;
            cursor: pointer;
            @media (min-width: 992px) {
              &:hover {
                .img-container {
                  img {
                    transform: scale(1.1);
                  }
                }
                .social {
                  transform: rotate(0deg) scale(1) !important;
                }
              }
            }
            .img-container {
              border-radius: 15px;
              overflow: hidden;
              z-index: 1;
              img {
                width: 100%;
                max-width: 100%;
                transition-duration: 1s;
              }
            }
            .title {
              position: absolute;
              bottom: 30px;
              left: 25px;
              z-index: 2;
              text-align: start;
              @media (max-width: 1380px) {
                .name {
                  font-size: 20px !important;
                }
              }
              .name {
                font-size: 23px;
                font-weight: 700;
                text-transform: capitalize;
              }
              .rule {
                color: #fefefeb3;
              }
            }
            .socials {
              position: absolute;
              left: 25px;
              top: 15px;
              z-index: 2;
              .social {
                margin: 20px 20px 20px 0;
                font-size: 18px;
                transition-duration: 0.5s;
                transform: rotate(45deg) scale(0);
                @media (min-width: 992px) {
                  &:hover {
                    color: var(--prim-color);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .comments {
      padding: 80px 0 !important;
    }
  }
  .comments {
    padding: 130px 0;
    background: linear-gradient(267.18deg, #161616 0%, #080808 100%);
    position: relative;
    .ppcol {
      display: flex;
      align-items: center;
      @media (max-width: 576px) {
        .swiper-container {
          padding: 40px 0 !important;
        }
      }
      @media (max-width: 991px) and (min-width: 577px) {
        .swiper-container {
          padding: 55px 0 !important;
        }
      }
      .swiper-container {
        padding: 80px 0;
        .swiper-wrapper {
          position: relative;
          .swiper-slide {
            width: calc(100% / 3);
            height: 100%;
            opacity: 0.5;
            transition-duration: 0.7s;
            .img-container {
              cursor: pointer;
              position: relative;
              width: 100%;
              height: 100%;
              z-index: 3;
              img {
                aspect-ratio: 1 / 1;
                max-width: 100%;
                width: 100%;
                clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
              }
            }
            @media (max-width: 991px) {
              &.swiper-slide-active {
                transform: scale(1.4) !important;
              }
            }
            &.swiper-slide-active {
              z-index: 2;
              transform: scale(1.8);
              opacity: 1;
            }
          }
        }
      }
    }
    .cmmtcol {
      position: relative;
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            @media (max-width: 991px) {
              .commentContainer {
                padding: 60px 0 0 20px !important;
              }
            }
            .commentContainer {
              padding: 70px 0 0 70px;
              position: relative;
              text-align: start;
              & > svg {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 50px;
              }
              @media (max-width: 1380px) {
                p {
                  font-size: 20px !important;
                }
              }
              p {
                font-size: 22px;
                font-weight: 600;
                line-height: 1.5em;
                color: #fefefe;
              }
              .stars {
                margin-top: 24px;
                svg {
                  color: var(--prim-color);
                  margin: 0 2px;
                  font-size: 19px;
                  &.deactive {
                    color: #ff491727;
                  }
                }
              }
              @media (max-width: 991px) {
                .pplInfo {
                  margin-top: 30px !important;
                }
              }
              .pplInfo {
                margin-top: 70px;
                @media (max-width: 991px) {
                  .name {
                    font-size: 20px !important;
                  }
                }
                .name {
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 1.3em;
                }
                .rule {
                  margin-top: 10px;
                  text-transform: uppercase;
                  color: #fefefeb3;
                  margin-left: 40px;
                  position: relative;
                  &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: -40px;
                    transform: translateY(-50%);
                    height: 2px;
                    width: 20px;
                    background-color: #fefefeb3;
                  }
                }
              }
            }
          }
        }
      }
      .myCustomNav {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
      }
    }
    & > img {
      position: absolute;
      top: -50px;
      right: 0;
      margin-right: 20px;
    }
  }
  @media (max-width: 991px) {
    .ourBlog {
      padding: 80px 0 70px !important;
    }
  }
  .ourBlog {
    padding: 150px 0 125px;
    position: relative;
    --smlShapeTop: 52%;
    --bgShapeLeft: 10%;
    @media (max-width: 991px) {
      &::before,
      &::after {
        display: none;
      }
    }
    .content {
      position: relative;
      z-index: 3;
    }
    &::before {
      content: "";
      position: absolute;
      left: -3%;
      top: var(--smlShapeTop);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: black;
      transition-duration: 0.3s;
      transition-timing-function: linear;
    }
    @media (max-width: 1380px) {
      &::after {
        width: 200px !important;
        height: 200px !important;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 286px;
      height: 286px;
      left: var(--bgShapeLeft);
      top: 58%;
      border-radius: 50%;
      background-color: black;
      transition-duration: 0.3s;
      transition-timing-function: linear;
    }
    @media (max-width: 991px) {
      .info {
        padding-bottom: 45px !important;
      }
    }
    .info {
      padding-bottom: 90px;
      .head {
        a {
          display: block;
          width: fit-content;
        }
      }
    }
    .blogPosts {
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            display: flex;
            justify-content: center;
            .blogCrd {
              overflow: hidden;
              border-radius: 20px;
              position: relative;
              height: 424px;
              max-width: 360px;
              cursor: pointer;
              & > a {
                display: block;
                height: 100%;
                width: 100%;
                position: relative;
                img {
                  width: 100%;
                  max-width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                .blogInfo {
                  position: absolute;
                  padding: 35px 25px;
                  bottom: 0px;
                  left: 0px;
                  text-align: start;
                  z-index: 3;
                  .post-date {
                    color: #fefefeb3;
                    font-size: 15px;
                    margin-bottom: 10px;
                  }
                  .blogCardTitle {
                    a {
                      display: block;
                      text-decoration: none;
                      color: #fefefe;
                      line-height: 1.45em;
                      font-size: 20px;
                      font-weight: 700;
                      letter-spacing: 1.1px;
                      transition-duration: 0.5s;
                      @media (min-width: 992px) {
                        &:hover {
                          color: var(--prim-color);
                        }
                      }
                    }
                  }
                }
                &::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                    360deg,
                    #000000 0%,
                    rgba(77, 77, 77, 0) 100%
                  );
                  z-index: 2;
                }
              }
            }
          }
        }
      }
    }
  }
  .partners {
    @media (max-width: 1380px) {
      .scroller {
        font-size: 100px !important;
      }
    }
    @media (max-width: 1199px) {
      .scroller {
        font-size: 80px !important;
      }
    }
    @media (max-width: 575px) {
      .scroller {
        font-size: 56px !important;
      }
    }
    .scroller {
      font-size: 120px;
      font-weight: 700;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-color: var(--prim-color);
      -webkit-text-stroke-width: 2px;
      white-space: nowrap;
      overflow-x: hidden;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      mask: linear-gradient(
        90deg,
        transparent,
        white 10%,
        white 90%,
        transparent
      );
      .scroller_inner {
        animation: scrollerAnimation 20s linear infinite;
      }
    }
    @media (max-width: 991px) {
      .content {
        margin: 70px 0 0 0 !important;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 100px 0 0 0;
      @media (max-width: 575px) {
        .brand-logo {
          padding: 10px !important;
        }
      }
      .brand-logo {
        &:nth-of-type(1) {
          padding-left: 0;
        }
        &:nth-of-type(5) {
          padding-right: 0;
        }
        transition-duration: 0.5s;
        cursor: pointer;
        @media (min-width: 992px) {
          &:hover {
            transform: scale(1.1);
          }
        }
        padding: 20px;
        img {
          max-width: 100%;
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .meeting {
    @media (max-width: 991px) {
      .content {
        padding: 70px 30px !important;
      }
    }
    @media (max-width: 575px) {
      .content {
        padding: 70px 20px !important;
      }
    }
    .content {
      position: relative;
      background: linear-gradient(267.18deg, #161616 0%, #080808 100%);
      padding: 90px 30px;
      border-radius: 15px;
      text-align: center;
      overflow: hidden;
      .shape {
        z-index: 2 !important;
      }
      .mainTitle {
        position: relative;
        z-index: 3;
      }
      .statusSvg {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      @media (max-width: 575px) {
        .mainTitle {
          font-size: 28px !important;
        }
      }
      @media (max-width: 991px) {
        .meetingBtn {
          margin: 30px auto 0 !important;
        }
      }
      .meetingBtn {
        position: relative;
        margin: 70px auto 0;
        z-index: 3;
      }
    }
  }
}

@keyframes scrolldown {
  0% {
    top: 30%;
    opacity: 1;
    width: 5px;
    height: 5px;
  }
  50% {
    top: 70%;
    opacity: 0.5;
    width: 4px;
    height: 4px;
  }
  100% {
    top: 30%;
    opacity: 1;
    width: 5px;
    height: 5px;
  }
}
@keyframes arrowShapeAnimation {
  0% {
    transform: translate(0, -50%) rotate(45deg);
  }
  50% {
    transform: translate(60px, -50%) rotate(45deg);
  }
  100% {
    transform: translate(0, -50%) rotate(45deg);
  }
}
@keyframes playBtnAnimation {
  0% {
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes scrollerAnimation {
  to {
    transform: translate(calc(-50% - 12px));
  }
}
@keyframes enterportSlidesAnimation {
  from {
    bottom: -200px;
    left: -100px;
    opacity: 0;
  }
  to {
    bottom: -60px;
    left: -40px;
    opacity: 1;
  }
}
@keyframes enterspanPortSlidesAnimation {
  from {
    left: 50px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
@keyframes leaveportSlidesAnimation {
  from {
    bottom: -60px;
    left: -40px;
    opacity: 1;
  }
  to {
    bottom: -200px;
    left: -100px;
    opacity: 0;
  }
}
@keyframes leavespanPortSlidesAnimation {
  from {
    left: 0;
    opacity: 1;
  }
  to {
    left: 50px;
    opacity: 0;
  }
}
.YTIframe-enter-active,
.YTIframe-leave-active {
  transition-duration: 0.5s;
}

.YTIframe-enter-from,
.YTIframe-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.YTIframe-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.dataFadein-enter-active,
.dataFadein-leave-active {
  transition-duration: 1s;
}

.dataFadein-enter-from,
.dataFadein-leave-to {
  opacity: 0;
}
.dataFadein-enter-to {
  opacity: 1;
}
</style>
