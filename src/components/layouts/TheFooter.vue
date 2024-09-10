<template>
  <footer>
    <div class="container">
      <div class="footer-main">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="logo">
              <img
                src="../../../imgs/homeAssets/footer_logo.svg"
                alt="footerLogo"
              />
            </div>
            <p>
              Welcome to arino sed ut perspiciae omunde omnis iste natus error
              sitort voluptatem accusantium.
            </p>
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
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <span class="head">Services</span>
            <ul class="links">
              <li>UI/UX design</li>
              <li>WP development</li>
              <li>Digital marketing</li>
              <li>React development</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <span class="head">Contact Us</span>
            <ul>
              <li>55/53 Jay Path Apt. 908</li>
              <li>+44 454 7800 112</li>
              <li>sbechtelar@example.net</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <span class="head">Subscribe</span>
            <div class="inputgroup mainSubmit">
              <input
                id="footeremail"
                type="email"
                placeholder="example@gmail.com"
              />
              <button class="mainBtn" id="footersend">Send</button>
            </div>
            <p>
              At vero eos et accusamus et iusto odio as part
              <br class="d-none d-lg-block" />
              dignissimos ducimus qui blandit.
            </p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyright">Copyright © 2023 Laralink.</div>
        <div class="terms-privacy">
          <span>Terms of Use </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@media (max-width: 991px) {
  footer {
    margin-top: 60px !important;
  }
}
footer {
  margin-top: 95px;
  color: #fefefeb3;
  @media (max-width: 991px) {
    .footer-main {
      padding-bottom: 15px !important;
    }
  }
  .footer-main {
    padding-bottom: 35px;
    .row {
      & > div {
        margin-bottom: 40px;
      }
      @media (max-width: 991px) {
        .logo ~ p {
          margin-top: 20px !important;
        }
      }
      .logo ~ p {
        margin: 30px 0 0;
        font-size: 17px;
      }
      @media (max-width: 991px) {
        .inputgroup ~ p {
          margin: 15px 0 0 !important;
        }
      }
      .inputgroup ~ p {
        margin-top: 25px;
        font-size: 17px;
      }
      @media (max-width: 991px) {
        .socials {
          margin-top: 15px !important;
        }
      }
      .socials {
        color: white;
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: start;
        .social {
          margin: 7px;
          &:first-child {
            margin-left: 0;
          }
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
          transition-duration: 0.4s;
          @media (min-width: 992px) {
            &:hover {
              border-color: var(--prim-color);
              transform: scale(1.1);
            }
          }
        }
      }
      @media (max-width: 991px) {
        .head {
          margin-bottom: 20px !important;
        }
      }
      .head {
        display: block;
        margin-bottom: 35px;
        color: white;
        font-size: 19px;
        font-weight: 700;
      }
      ul {
        &.links {
          li {
            color: #fefefeb3;
            transition-duration: 0.3s;
            width: fit-content;
            cursor: pointer;
            @media (min-width: 992px) {
              &:hover {
                color: var(--prim-color);
              }
            }
          }
        }
        li {
          @media (max-width: 991px) {
            &:not(:last-of-type) {
              margin-bottom: 10px !important;
            }
          }
          &:not(:last-of-type) {
            margin-bottom: 20px;
            font-size: 17px;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .footer-bottom {
      flex-direction: column;
      justify-content: center;
    }
  }
  .mainBtn {
    padding: 5px 24px;
  }
  .footer-bottom {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #4d4d4d;
    font-size: 17px;
    .terms-privacy {
      padding: 4px 0;
      span:first-of-type {
        margin-right: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 3px;
          right: -10px;
          height: 80%;
          width: 2px;
          background-color: #fefefeb3;
        }
      }
    }
  }
}
</style>
