<template>
  <b-container fluid class="d-flex flex-column">
    <Header />
    <b-row id="layout-row" class="flex-grow-1" align-v="center" align-h="center">
      <b-col lg="12" md="12" sm="6">
        <b-row align-h="center">
          <b-col md="12">
            <nuxt />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <Footer />
  </b-container>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
  }
}
</script>

<style lang="scss">
html {
    font-size: 1rem;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout,
.container-fluid {
    min-height: 100vh;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    font-family: "futura-pt", sans-serif;
}

html {
    body {
        #heading {
            font-weight: lighter;
            font-size: 2rem;
            margin-bottom: 0rem;
        }

        #heading,
        #description {
            padding-bottom: 1rem;
        }

        p {
            margin-bottom: 0rem;
        }

        a:not(.btn),
        .btn-link {
            display: inline-block;
            color: #626262;
            text-decoration: underline;
        }

        form {
            margin-bottom: 1rem;

            .form-group,
            .input-group {
                margin-bottom: 0rem;
                min-height: 4rem;

                .invalid-feedback.d-block {
                    text-align: left;
                    padding-left: 13px;
                    margin-top: 0px;
                }

                .input-group-append,
                .input-group-text {
                    border-top-right-radius: 0.25rem !important;
                    border-bottom-right-radius: 0.25rem !important;
                    height: 2.375rem;
                }
            }

            select.form-control.is-invalid,
            select.form-control.is-valid {
                background-position: right 30px center, right 10px center;
            }

            input[type="number"].form-control.is-invalid,
            input[type="number"].form-control.is-valid {
                padding-right: calc(1em + 0.75rem);
            }

            .error {
                padding-left: 0.85rem;
                color: #f57f6c;
                margin-bottom: 1rem;
                font-size: 0.9rem;
                text-align: left;
                padding-top: 3px;
                padding-bottom: 3px;

                &.form-error {
                    padding-left: 0rem;
                    margin-top: -0.5rem;
                    font-size: 1rem;
                }
            }
        }
    }

    .vbt-autcomplete-list {
        margin-top: -1.8rem;

        .list-group-item {
            border: 0px;
            text-decoration: none;
            padding: 0.5rem 0.8rem;

            &.active {
                background-color: #ffffff;
                color: #626262;
                text-decoration: underline;
            }
        }
    }

    .backarrow {
        padding-bottom: 15px;

        a {
            display: inline-block;
            text-decoration: none !important;
        }

        img {
            width: 10px;
            margin-top: -5px;
        }
    }
}
</style>
