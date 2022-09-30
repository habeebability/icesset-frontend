<template>
  <div class="py-5 px-3 lg:ml-0 lg:px-10">
    <div class="w-full md:w-1/2 mx-5">
      <!-- <form>
        <div class="flex space-x-4">
          <input
            @keyup="handleSearchQuery"
            type="search"
            v-model="searchQuery"
            placeholder="search by name or category"
            class="w-full border px-3 py-2 rounded-md"
          />
          <button
            class="bg-transparent hover:bg-purple-500 text-primary font-semibold focus:border-purple-500 hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          >Search</button>
        </div>
      </form>-->

      <form>
        <div class="flex">
          <label for="item-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Your Item</label>
          <!-- <button
            id="dropdown-button-2"
            data-dropdown-toggle="dropdown-search-city"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            <svg
              aria-hidden="true"
              class="mr-2 h-3"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="14" height="12" rx="2" fill="white" />
              <mask
                id="mask0_12694_49953"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="15"
                height="12"
              >
                <rect x="0.5" width="14" height="12" rx="2" fill="white" />
              </mask>
              <g mask="url(#mask0_12694_49953)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                  fill="#D02F44"
                />
                <rect x="0.5" width="6" height="5.6" fill="#46467F" />
                <g filter="url(#filter0_d_12694_49953)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z"
                    fill="url(#paint0_linear_12694_49953)"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_12694_49953"
                  x="1.1665"
                  y="0.800049"
                  width="4.6665"
                  height="5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_12694_49953"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_12694_49953"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_12694_49953"
                  x1="1.1665"
                  y1="0.800049"
                  x2="1.1665"
                  y2="4.80005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#F0F0F0" />
                </linearGradient>
              </defs>
            </svg>
            USA
            <svg
              aria-hidden="true"
              class="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>-->
          <div
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            data-popper-reference-hidden
            data-popper-escaped
            data-popper-placement="bottom"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
          >
            <!-- <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button-2"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 rounded-full mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd">
                        <g stroke-width="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    United States
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 rounded-full mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    Germany
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 rounded-full mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                      </g>
                    </svg>
                    Italy
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 rounded-full mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                    >
                      <defs>
                        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                      </defs>
                      <path fill="#de2910" d="M0 0h512v512H0z" />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        xlink:href="#a"
                      />
                    </svg>
                    China
                  </div>
                </button>
              </li>
            </ul>-->
          </div>
          <div class="relative w-full">
            <input
              type="search"
              @keyup="handleSearchQuery"
              v-model="searchQuery"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-bg-primary focus:border-purple-500"
              placeholder="Search for "
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary rounded-r-lg border border-purple-700 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="loader flex justify-center">
      <TheLoader v-if="isLoading" />
    </div>
    <div v-if="!selectItemsOption" class>
      <div>
        <div class="heading-div flex justify-between items-center">
          <h1
            @click="selectItems"
            class="font-medium text-sm ml-5 my-5 cursor-pointer flex items-center bg-primary text-white rounded-lg px-3 py-2"
          >
            <span class="mx-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8573 9.64428C29.9992 9.35483 30.0363 9.03633 29.9639 8.72906C29.8915 8.4218 29.7128 8.13959 29.4504 7.91813L20.0755 0L17.4243 2.23925L23.5986 7.45412H0.000217222V10.6214H28.1248C28.4956 10.6215 28.8581 10.5287 29.1665 10.3547C29.4749 10.1808 29.7153 9.93358 29.8573 9.64428ZM0.142716 14.7657C0.00077111 15.0552 -0.0363369 15.3737 0.0360877 15.6809C0.108512 15.9882 0.287215 16.2704 0.549585 16.4919L9.92445 24.41L12.5757 22.1708L6.40137 16.9559H29.9998V13.7886H1.87519C1.50433 13.7883 1.14171 13.881 0.833291 14.055C0.52487 14.2289 0.284526 14.4763 0.142716 14.7657Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Transfer</span>
          </h1>
          <router-link
            to="/items/add-new-item"
            class="inline-flex justify-center items-center py-2 px-3 lg:mr-6 lg:text-xl font-medium rounded-lg hover:text-primary hover:border-primary hover:border-2"
          >+ Add New</router-link>
        </div>
        <div class="ml-4 mr-6 w-[30rem] md:w-50rem lg:w-auto h-auto px-3 py-6">
          <div class="overflow-x-auto relative shadow-md bg-white">
            <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
              <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
                <tr class="bg-tertiary">
                  <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">SN</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Name</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Category</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Location</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Quantity</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Status</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Availability</th>
                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Asigned to</th>

                  <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <div
                  class="flex justify-center items-center text-center"
                  v-if="filteredItems.length < 1 && !isLoading"
                >
                  <div class="mx-auto p-5 text-center w-50">
                    <h1>No match found</h1>
                  </div>
                </div>
                <tr
                  v-for="(item, index) in filteredItems"
                  :key="item.qyt_loc_id"
                  class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
                >
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{index + 1}}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.item_name }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.category }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.store_name }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.quantity }}</td>
                  <td
                    class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                    :class=" ['text-black', item.item_status == 'Consumed' || item.quantity <= 0  ?  'text-orange font-bold ' : item.item_status == 'In transit' ? 'text-purple-700 font-bold' : 'text-black' ]"
                  >{{ item.item_status }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.availability }}</td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >{{ item.user_name }}</td>

                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button
                      class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
                      @click="getItem(item.item_id)"
                    >Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectItemsOption" class="flex p-5 gap-5">
      <div>
        <div class="heading-div flex justify-between items-center">
          <h1 class="font-medium text-2xl my-3 cursor-pointer">
            <span @click="selectItemsFalse">
              <i class="fa-solid fa-x text-red-700 mr-3"></i>
            </span>
            <span class="text-primary">{{ 0 || checkedItems.length}}</span>
            <span class="ml-2 text-primary">Selected</span>
          </h1>
          <button
            @click="clearAllSelected"
            class="inline-flex justify-center items-center py-2 px-3 lg:mr-6 lg:text-xl font-medium rounded-lg hover:border-primary hover:border-2"
          >Clear all</button>
        </div>
        <div class="overflow-x-auto relative shadow-md bg-white">
          <table class="table-auto text-center lg:text-left text-gray-50 dark:text-gray-400">
            <thead class="border-b border-purple-200 bg-[#F1F3F8] text-left">
              <tr class="bg-tertiary">
                <!-- <th scope="col" class="lg:py-3 lg:px-6"></th> -->
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">SN</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Name</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Category</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Location</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Quantity</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Status</th>
                <th scope="col" class="text-sm font-bold text-gray-900 px-2 py-4">Assigned to</th>

                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item) in filteredItems"
                :key="item.qyt_loc_id"
                class="bg-gray-100 dark:bg-gray-900 text-xs lg:text-xl dark:border-gray-700"
              >
                <td
                  class="text-center text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >
                  <!-- :value="{...item, selectedQuantity: item.quantity}" -->
                  <input
                    :value="item"
                    :disabled="item.item_status == 'In transit' || item.item_status == 'Consumed' || item.item_status =='Pending Consumption' || item.quantity <= 0"
                    @change="onItemChecked(item)"
                    type="checkbox"
                    class="appearance-none h-5 w-5 border-[3px] border-purple-600 rounded-sm bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 cursor-pointer"
                    v-model="checkedItems"
                  />
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.item_name }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.category }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.store_name }}</td>
                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.quantity }}</td>
                <td
                  class="text-sm text-gray-900 px-2 py-4 whitespace-nowrap"
                  :class=" ['text-black', item.item_status == 'Consumed' || item.quantity <= 0  ?  'text-orange font-bold ' : item.item_status == 'In transit' ? 'text-purple-700 font-bold' : 'text-black' ]"
                >{{ item.item_status }}</td>

                <td
                  class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap"
                >{{ item.user_name }}</td>

                <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                  <button
                    class="font-medium hover:bg-purple-400 bg-secondary text-tertiary rounded-lg focus:outline-none py-2 px-3"
                    @click="getItem(item.item_id)"
                  >Review</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="overflow-x-auto lg:w-1/2 sticky top-10 py-5">
        <h1 class="text-right">
          <span>{{ 0 || checkedItems.length}}</span>
          <span class="ml-2">in Batch</span>
        </h1>

        <table class="table-auto mt-5 mb-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in checkedItems" :key="item.qyt_loc_id">
              <td>{{item.item_name}}</td>
              <td>{{item.store_name}}</td>
              <td class="text-center">
                <input
                  v-model="item.selectedQuantity"
                  class="min-w-10 h-5 px-3 border border-primary mx-auto cursor-pointer"
                  type="number"
                  min="1"
                  :max="item.quantity"
                  @keydown="onKeydown"
                />

                <i
                  @click="removeChecked(index)"
                  class="fa fa-trash mx-2 cursor-pointer text-red-700"
                  aria-hidden="true"
                ></i>
              </td>
              <!-- <td>
                  <i class="fa fa-trash" aria-hidden="true"></i>
              </td>-->
            </tr>
          </tbody>
        </table>

        <!-- class="bg-primary text-white py-2 px-20 my-5 w-full" -->
        <!-- :disabled="!readyToSubmit" -->
        <button
          @click.prevent="handleAddItemToBatch"
          class="w-full px-6 py-2 rounded-md bg-primary cursor-pointer text-white transition hover:bg-[#c281ea] focus:bg-[#aa22ff] active:bg-primary disabled:bg-gray-200"
        >Next</button>
      </div>
    </div>

    <div class="paginate mt-4 flex justify-center items-center">
      <vue-awesome-paginate
        :total-items="itemCount"
        :items-per-page="limit"
        :max-pages-shown="5"
        :current-page="offset"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

import { useStore } from "vuex";

import "vue-awesome-paginate/dist/style.css";

import { useRouter } from "vue-router";
import axios from "axios";
import Modal from "../../components/ui/Modal.vue";
import TheLoader from "../../components/ui/TheLoader.vue";

export default {
  components: {
    Modal,
    TheLoader,
  },
  setup() {
    const username = ref("");
    const itemName = ref("");
    const condition = ref("");
    const submitted_by = ref("");
    const image = ref("");
    const acquired = ref("");
    const location = ref("");
    const quantity = ref(0);

    const offset = ref(1);
    const limit = ref(10);

    const itemCount = ref(0);

    const disabled = ref(false);

    const selectedQuantity = ref("");

    const description = ref("");
    const category = ref("");
    const maker = ref("");
    const itemId = ref("");

    const searchQuery = ref("");

    const searchedItemList = ref([]);

    const allItemsList = ref([]);

    const allItemsSearchList = ref([]);

    const checkedItems = ref([]);

    const router = useRouter();

    const isLoading = ref(false);

    const success = ref("");
    const err = ref("");

    const store = useStore();

    const modalActive = ref(false);
    const selectItemsOption = ref(false);

    const clearAllSelected = () => {
      checkedItems.value = [];
    };

    const removeChecked = (index) => {
      checkedItems.value.splice(index, 1);
    };

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const selectItems = () => {
      selectItemsOption.value = true;
    };
    const selectItemsFalse = () => {
      selectItemsOption.value = false;
    };

    const onItemChecked = (item) => {
      // if (item.item_status == "Consumed" || "Pending Consumption") {
      //   alert("You cannot select this item");
      // }
      if (item) {
        item.selectedQuantity = item.quantity;
      }
    };

    const onKeydown = (event) => {
      const char = String.fromCharCode(event.keyCode);
      // if (item.initialQuantity < item.quantity) {
      //   alert("item can not be more than " + item.initialQuantity);
      // }

      // if (!/[0-9\b]/.test(char)) {
      // }
      event.preventDefault();

      // if (!allCheckItemsQuantity) {
      //   // alert("item too big");
      //   return;
      // }

      console.log(allCheckItemsQuantity);
    };

    const checkQuantity = (selected) => {
      let item = checkedItems.value.find((el) => el.id == selected.id);

      // console.log(checkedItems.value);

      if (item.selectedQuantity > item.quantity) {
        alert("item quantity greater than item");
        return;
      }
    };

    const handleAddItemToBatch = () => {
      try {
        // let itemQuantity = checkedItems.value.map((el) => el.quantity);
        // let selectedQuantity = checkedItems.value.map(
        //   (el) => el.selectedQuantity
        // );
        // checkQuantity(item);

        // let itemsQuantity = checkedItems.map(item.quantity);

        // console.log(itemsQuantity);

        // const allCheckItemsQuantity = checkedItems.value.map(
        //   (item) =>
        //     item.selectedQuantity <= item.quantity &&
        //     item.selectedQuantity != ""
        // );
        if (checkedItems.value.length > 0) {
          store.commit("createBatch", checkedItems.value);

          router.push("/create-batch");

          //   // console.log("batch", checkedItems.value);
        } else {
          alert("Input the correct quantity");
          return;
        }
      } catch (error) {}
    };

    const getItem = async (id) => {
      router.push(`/item-review/${id}`);
    };

    const filteredItems = computed(() => {
      const items = searchQuery.value
        ? allItemsList.value.filter((item) =>
            item.item_name.includes(searchQuery.value)
          )
        : allItemsList.value;

      return items.filter((item) =>
        item.item_name
          .toLowerCase()
          .includes(searchQuery.value.toLocaleLowerCase())
      );
    });

    const getAllItems = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(
          `/api/v1/inventory?offSet=${offset.value}&limit=${limit.value}`
        );
        const allItems = response.data.data;

        const count = response.data.total_items;

        itemCount.value = count;
        // console.log(itemCount.value);

        allItemsList.value = allItems;

        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
      }
    };

    const getAllSearchItemList = async () => {
      try {
        const response = await axios.get(`/api/v1/search/${searchQuery.value}`);

        let allSearchItem = response.data.data;

        allItemsSearchList.value = allSearchItem;
      } catch (error) {}
    };

    // const getStoreItems = () => {
    //   const allItemsInStore = allItemsList.value.filter((item) => {
    //     item.status == "In store";
    //   });
    // };

    const checkItemInBatch = () => {};

    const handleAddItem = async () => {
      try {
        isLoading.value = true;

        await store.dispatch("createItem", {
          name: itemName.value,
          category: category.value,
          description: description.value,
          location: location.value,
          maker: maker.value,
          quantity: quantity.value,
          item_condition: condition.value,
          submitted_by: submitted_by.value,
          image: image.value,
          acquired: acquired.value,

          // location: locations.value,
        });
        (itemName.value = ""),
          (category.value = ""),
          (description.value = ""),
          (location.value = ""),
          (maker.value = ""),
          (success.value = "item added successfully");

        setTimeout(() => {
          success.value = null;
        }, 3000);
      } catch (error) {
        isLoading.value = false;
        console.log(error);
        err.value =
          error.response?.data?.details?.body[0].message ??
          "Cannot Add Item to Location";
        setTimeout(() => {
          err.value = null;
        }, 4000);
        // err.value = error.response?.data?.message ?? "Item can not be added";

        // setTimeout(() => {
        //   err.value = null;
        // }, 3000);
      }

      getAllItems();
      toggleModal();
    };

    const onClickHandler = (page) => {
      offset.value = page;

      getAllItems();

      // console.log(page);

      // console.log(itemCount.value);
    };

    return {
      disabled,
      modalActive,
      getAllItems,
      getItem,
      getAllSearchItemList,
      handleAddItem,
      handleAddItemToBatch,

      allItemsSearchList,

      onClickHandler,
      filteredItems,

      itemCount,
      offset,
      limit,

      checkQuantity,

      onKeydown,

      // handleSearchQuery,
      selectedQuantity,
      selectItems,
      selectItemsOption,
      selectItemsFalse,

      removeChecked,

      onItemChecked,

      clearAllSelected,
      searchedItemList,
      // getUser,
      allItemsList,
      isLoading,

      searchQuery,
      // selectedItems
      checkedItems,
      toggleModal,

      condition,
      location,
      quantity,
      description,
      category,
      maker,
      itemId,
      itemName,
      acquired,
      submitted_by,
      success,
      err,
    };
  },

  computed: {
    filteredItems() {
      return this.allItemsList.filter((item) =>
        item.item_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    // quantityValid() {
    //   const itemQuantity = this.checkedItems.map((item) => {
    //     item.quantity;
    //   });
    // },

    // console.log(itemQuantity);
    // if (itemQuantity) {
    //   return true;
    // } else return false;
  },

  // readyToSubmit() {
  //   return this.quantityValid;
  // },
  // },

  watch: {
    searchQuery() {},
  },

  mounted() {
    // this.getItem();
    this.getAllItems();
  },
};
</script>

