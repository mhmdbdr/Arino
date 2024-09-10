<template>
  <div class="FAQView">
    <base-hero class="baseHero" :imgUrl="imgUrl">
      <template #head>Frequently Asked Questions</template>
      <template #nav>FAQ</template>
    </base-hero>
    <div class="content mainPadding">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="category">
              <div class="head">
                <div class="title">FAQ Category</div>
              </div>
              <ul>
                <li>
                  <font-awesome-icon icon="fa-solid fa-layer-group" />
                  <span>Service related</span>
                </li>
                <li>
                  <font-awesome-icon icon="fa-solid fa-layer-group" />
                  <span>Pricing</span>
                </li>
                <li>
                  <font-awesome-icon icon="fa-solid fa-layer-group" />
                  <span>Project delivery</span>
                </li>
                <li>
                  <font-awesome-icon icon="fa-solid fa-layer-group" />
                  <span>Documentation</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1 col-12">
            <div class="questions">
              <div class="accordion accordion-flush" id="mainAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="true"
                      aria-controls="flush-collapseOne"
                    >
                      Do you design illustration website?
                    </button>
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#mainAccordion"
                  >
                    <div class="accordion-body">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesent voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Do you provide design source file after finish work?
                    </button>
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#mainAccordion"
                  >
                    <div class="accordion-body">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesent voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How to provide project details and payments?
                    </button>
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#mainAccordion"
                  >
                    <div class="accordion-body">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesent voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Can you tell me please how to contact for project?
                    </button>
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#mainAccordion"
                  >
                    <div class="accordion-body">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesent voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Do you makes custom logo, icon etc?
                    </button>
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#mainAccordion"
                  >
                    <div class="accordion-body">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesent voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui.
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
export default {
  data() {
    return {
      imgUrl: require("../../../imgs/pages/ourTeam/team_hero_bg.webp"),
    };
  },
  mounted() {
    const content = document.querySelector(".baseHero");
    const imgload = this.$imagesLoaded(content);
    imgload.on("done", () => {
      this.$store.dispatch("doneLoading", true);
    });
  },
};
</script>

<style lang="scss" scoped>
.FAQView {
  @media (max-width: 991px) {
    .content {
      .questions {
        margin-top: 40px;
      }
    }
  }
  .content {
    .category {
      background-color: black;
      border-radius: 15px;
      padding: 45px 35px;
      height: 100%;
      .title {
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 700;
      }
      ul {
        li {
          display: flex;
          margin-bottom: 20px;
          svg {
            color: var(--prim-color);
            font-size: 20px;
            margin-right: 15px;
          }
          span {
            display: block;
            font-size: 17px;
            font-weight: 500;
          }
        }
      }
    }
    .questions {
      .accordion {
        .accordion-button::after {
          display: none;
          background-image: none;
        }
        .accordion-item {
          background-color: transparent;
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 2px solid var(--prim-color);
          h2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 991px) {
              button {
                font-size: 19px !important;
              }
            }
            button {
              padding: 0;
              background-color: transparent;
              color: #fefefe;
              font-size: 23px;
              font-weight: 700;
              box-shadow: none;
              transition-duration: 0.3s;
              &:focus {
                box-shadow: none;
              }
              @media (min-width: 992px) {
                &[aria-expanded="false"]:hover {
                  color: var(--prim-color);
                }
              }
              &[aria-expanded="true"] {
                pointer-events: none;
                & ~ svg {
                  transform: rotate(180deg);
                }
              }
            }
            svg {
              font-size: 28px;
              color: var(--prim-color);
              margin-left: 10px;
              transition-duration: 0.3s;
            }
          }
          .accordion-body {
            padding: 20px 0 0 0;
            color: #fefefeb3;
            font-size: 17px;
          }
        }
      }
    }
  }
}
</style>
