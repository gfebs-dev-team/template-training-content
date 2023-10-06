<script setup>
import AppButton from './AppButton.vue'
import AppPopover from './AppPopover.vue'
import { watch } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { current } = storeToRefs(slides)
const { total, toggleSidebar } = slides
let progress = `width: ${(current.value + 1 / total) * 100}%`

const buttonStyle = {
  size: 'medium',
  color: 'darkMode',
  variant: 'outline'
}

watch(current, () => {
  progress = `width: ${((current.value + 1) / total) * 100}%`
  document.getElementById('progress')?.setAttribute('style', `${progress}`)
})

function windowClose() {
  window.close()
}
</script>

<template>
  <nav>
    <div class="heading">
      <img id="heading-shield" src="/shield-01.png" />
      <div class="heading-text">
        <h1 id="heading-title">
          <span class="title">Financial</span>
          <span class="title">Management School</span>
        </h1>
        <h2 id="heading-subtitle" class="title">
          <slot></slot>
        </h2>
      </div>
    </div>
    <div class="tracker">
      <div class="progress-bar">
        <div id="progress" :style="progress"></div>
      </div>
      <div class="buttons">
        <AppPopover id="heading-index" :buttonStyle="buttonStyle">
          <template #button-name
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75 12.8335V3.8335C2.75 2.72893 3.64543 1.8335 4.75 1.8335H14.0833C14.4515 1.8335 14.75 2.13198 14.75 2.50016V14.5002C14.75 14.8684 14.4515 15.1668 14.0833 15.1668H5.08333C3.79467 15.1668 2.75 14.1222 2.75 12.8335ZM13.4167 13.8335V11.8335H5.08333C4.53105 11.8335 4.08333 12.2812 4.08333 12.8335C4.08333 13.3858 4.53105 13.8335 5.08333 13.8335H13.4167ZM7.41667 3.16683H4.75C4.38181 3.16683 4.08333 3.46531 4.08333 3.8335V10.7247C4.38642 10.5807 4.72547 10.5002 5.08333 10.5002H13.4167V3.16683H12.0833V8.50016L9.75 7.16683L7.41667 8.50016V3.16683Z"
                fill="#91A0BE"
              />
            </svg>
            Resources
          </template>

          <template #menu>
            <div class="resource-menu">
              <ul>
                <li>Glossary</li>
                <!--Set Glossary Popup and bind to click-->
                <li><a href="/">GFEBS Production PSW</a></li>
              </ul>
            </div>
          </template>
        </AppPopover>
        <AppButton id="heading-exit" v-bind="buttonStyle" @click="windowClose()">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25004 5.16671L10.9167 0.5L12.25 1.83333L7.58336 6.50004L12.25 11.1667L10.9167 12.5L6.25004 7.83336L1.58333 12.5L0.25 11.1667L4.91671 6.50004L0.25 1.83333L1.58333 0.5L6.25004 5.16671Z"
              fill="#F4BC3A"
            />
          </svg>
          Exit
        </AppButton>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
  }
  .heading {
    display: flex;
    align-items: center;
    gap: var(--p3);
    width: fit-content;

    @media only screen and (max-width: 1000px) {
      justify-content: space-between;
      width: 100%;
    }
    #heading-shield {
      width: 6rem;
      height: 6rem;
    }

    .heading-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;

      #heading-title {
        display: flex;
        flex-direction: column;
        span {
          font-size: var(--m1);
        }

        @media only screen and (max-width: 1000px) {
          flex-direction: row;
          gap: 0.7rem;
        }
      }
      #heading-subtitle {
        font-size: var(--m-1);
        color: var(--color-accent);
        @media only screen and (max-width: 1000px) {
          align-self: flex-end;
        }
      }
    }
  }

  .tracker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 1.5rem;
    align-self: stretch;
    width: 25rem;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
    .progress-bar {
      width: 100%;
      height: 1.5rem;
      background-color: var(--color-accent-light);
      border-radius: 1rem;
      #progress {
        background-color: var(--color-accent);
        border-radius: 1rem;
        transition: ease 1.5s;
        height: 100%;
      }
    }
    .buttons {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      .resource-menu {
        background-color: var(--oxford-blue);
        width: fit-content;
        border-radius: 0.5rem;
        ul {
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          list-style: none;
          justify-content: center;
          li {
            padding: 0.5rem;
            border-radius: 0.25rem;
            font-size: var(--m-2);
            font-weight: 700;
            a {
              font-size: var(--m-2);
              font-weight: 700;
              text-decoration: none;
              &:visited {
                color: inherit;
              }
            }
            &:hover {
              background-color: var(--mas-blue);
            }
          }
        }
      }

      #heading-exit {
        color: var(--color-accent);
      }
    }
  }
}
</style>
