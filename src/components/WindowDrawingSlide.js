import React from "react";
import anime from "animejs";

import styles from "./WindowDrawingSlide.module.css";

export default class WindowDrawingSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      anime({
        targets: `.${styles.window} path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutCubic",
        duration: (el, i) => {
          if (i > 50) return 1000;
          return 100;
        },
        delay: (el, i, t) => {
          if (i <= 51) return anime.stagger(50).apply(null, [el, i, 52]);
          if (i <= 68)
            return anime
              .stagger(200, { start: 1500 })
              .apply(null, [el, i - 52, t]);
          return anime
            .stagger(50, { start: 3000 })
            .apply(null, [el, i - 68, t]);
        },
      });
    }
  }

  render() {
    return (
      <div className={styles.window}>
        <svg
          viewBox="0 0 630 424"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <rect width="630" height="424" fill="white" />
            <path d="M16 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M36 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M56 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M76 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M96 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M116 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M136 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M156 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M176 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M196 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M216 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M236 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M256 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M276 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M296 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M316 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M336 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M356 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M376 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M396 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M416 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M436 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M456 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M476 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M496 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M516 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M536 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M556 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M576 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M596 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M616 1V424" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 21L630 21" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 41L630 41" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 61L630 61" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 81L630 81" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 101L630 101" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 121L630 121" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 141L630 141" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 161L630 161" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 181L630 181" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 201L630 201" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 221L630 221" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 241L630 241" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 261L630 261" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 281L630 281" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 301L630 301" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 321L630 321" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 341L630 341" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 361L630 361" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 381L630 381" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M0 401L630 401" stroke="#D0D0D0" strokeWidth="2" />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="630"
              height="67"
            >
              <rect width="630" height="67" rx="22.5" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M-0.0101318 22.5225H630.01"
                stroke="#F2F2F2"
                strokeWidth="45"
              />
            </g>
            <path
              d="M35.5 26C35.5 28.4853 33.4853 30.5 31 30.5C28.5147 30.5 26.5 28.4853 26.5 26C26.5 23.5147 28.5147 21.5 31 21.5C33.4853 21.5 35.5 23.5147 35.5 26Z"
              stroke="#FF4A60"
              strokeWidth="9"
            />
            <path
              d="M62.5 26C62.5 28.4853 60.4853 30.5 58 30.5C55.5147 30.5 53.5 28.4853 53.5 26C53.5 23.5147 55.5147 21.5 58 21.5C60.4853 21.5 62.5 23.5147 62.5 26Z"
              stroke="#FFDA04"
              strokeWidth="9"
            />
            <path
              d="M89.5 26C89.5 28.4853 87.4853 30.5 85 30.5C82.5147 30.5 80.5 28.4853 80.5 26C80.5 23.5147 82.5147 21.5 85 21.5C87.4853 21.5 89.5 23.5147 89.5 26Z"
              stroke="#7CDA96"
              strokeWidth="9"
            />
            <path d="M78 230H293" stroke="white" strokeWidth="254" />
            <path
              d="M76 359.5V101H296V359.5H76Z"
              stroke="black"
              strokeWidth="3"
            />
            <path d="M96 220V200H274V220H96Z" stroke="black" strokeWidth="3" />
            <path d="M96 260V240H274V260H96Z" stroke="black" strokeWidth="3" />
            <path
              d="M97 316V273H196V316H97Z"
              stroke="#6028FF"
              strokeWidth="3"
            />
            <path d="M97 294.5H195" stroke="#6028FF" strokeWidth="41" />
            <path d="M96 189H156" stroke="#CACACA" strokeWidth="7" />
            <path d="M96 230H140" stroke="#CACACA" strokeWidth="7" />
            <path
              d="M103.526 161.34L107.332 150.799L111.137 161.34L111.376 162H112.078H116.404H117.164L117.367 161.268L123.205 140.268L123.558 139H122.242H116.656H115.873L115.685 139.76L113.476 148.689L110.074 139.648L109.83 139H109.138H105.19H104.482L104.247 139.667L101.115 148.535L98.9364 139.759L98.748 139H97.9659H92.4219H91.1085L91.4579 140.266L97.2539 161.266L97.4565 162H98.2179H102.586H103.288L103.526 161.34ZM137.05 154.215L136.233 153.648L135.661 154.461C135.283 154.998 135.012 155.294 134.659 155.491C134.307 155.687 133.761 155.842 132.741 155.842C131.519 155.842 130.88 155.433 130.489 154.864C130.164 154.39 129.951 153.717 129.853 152.844H140.763H141.763V151.844V149.45C141.763 146.139 141.059 143.405 139.417 141.491C137.75 139.547 135.269 138.622 132.111 138.622C129.197 138.622 126.736 139.444 125.013 141.259C123.297 143.066 122.459 145.703 122.459 149.03V151.886C122.459 154.773 123.266 157.41 125.019 159.337C126.787 161.279 129.407 162.378 132.783 162.378C134.752 162.378 136.463 162.117 137.905 161.465C139.37 160.802 140.502 159.761 141.337 158.306L141.793 157.51L141.04 156.987L137.05 154.215ZM152.957 162H153.957V161V156.38V155.38H152.957C151.953 155.38 151.583 155.147 151.407 154.934C151.19 154.672 151.017 154.15 151.017 153.062V132.02V131.02H150.017H144.641H143.641V132.02V154.28C143.641 157.061 144.346 159.119 146.074 160.41C147.723 161.642 150.093 162 152.957 162ZM169.452 154.215L168.574 153.605L168.024 154.522C167.732 155.009 167.392 155.321 167 155.52C166.599 155.725 166.082 155.842 165.396 155.842C163.944 155.842 163.251 155.379 162.854 154.779C162.398 154.089 162.196 153.017 162.196 151.55V149.366C162.196 147.768 162.482 146.732 162.957 146.108C163.388 145.542 164.1 145.158 165.396 145.158C166.702 145.158 167.467 145.714 168.024 146.5L168.598 147.31L169.412 146.742L173.444 143.928L174.23 143.38L173.715 142.571C172.011 139.894 168.992 138.622 165.522 138.622C162.227 138.622 159.526 139.486 157.648 141.309C155.766 143.137 154.862 145.783 154.862 149.03V151.886C154.862 154.935 155.761 157.579 157.571 159.466C159.386 161.36 162.009 162.378 165.228 162.378C167.206 162.378 168.907 162.093 170.337 161.429C171.785 160.757 172.9 159.72 173.732 158.318L174.206 157.518L173.442 156.987L169.452 154.215ZM218.764 161V162H219.764H225.14H226.14V161V147.854C226.14 144.973 225.431 142.64 223.965 141.02C222.485 139.384 220.368 138.622 217.874 138.622C215.396 138.622 213.36 139.548 211.871 140.93C210.371 139.394 208.303 138.622 205.946 138.622C204.459 138.622 203.241 138.994 202.284 139.554V139H201.284H196.034H195.034V140V161V162H196.034H201.41H202.41V161V148.652C202.41 147.302 202.725 146.45 203.123 145.956C203.499 145.489 204.028 145.242 204.728 145.242C205.473 145.242 205.94 145.448 206.255 145.838C206.608 146.272 206.92 147.113 206.92 148.694V161V162H207.92H213.254H214.254V161V148.652C214.254 147.295 214.561 146.442 214.951 145.949C215.317 145.487 215.832 145.242 216.53 145.242C217.384 145.242 217.85 145.489 218.151 145.888C218.498 146.349 218.764 147.199 218.764 148.694V161ZM242.255 154.215L241.439 153.648L240.866 154.461C240.488 154.998 240.217 155.294 239.864 155.491C239.512 155.687 238.966 155.842 237.946 155.842C236.724 155.842 236.085 155.433 235.694 154.864C235.369 154.39 235.156 153.717 235.059 152.844H245.968H246.968V151.844V149.45C246.968 146.139 246.264 143.405 244.622 141.491C242.955 139.547 240.474 138.622 237.316 138.622C234.402 138.622 231.941 139.444 230.218 141.259C228.502 143.066 227.664 145.703 227.664 149.03V151.886C227.664 154.773 228.471 157.41 230.224 159.337C231.992 161.279 234.612 162.378 237.988 162.378C239.957 162.378 241.668 162.117 243.11 161.465C244.575 160.802 245.707 159.761 246.542 158.306L246.998 157.51L246.245 156.987L242.255 154.215ZM132.153 145.158C132.968 145.158 133.427 145.379 133.723 145.721C133.947 145.979 134.147 146.388 134.271 147.022H129.967C130.102 146.498 130.293 146.105 130.522 145.826C130.853 145.423 131.339 145.158 132.153 145.158ZM193.463 149.198C193.463 145.887 192.612 143.208 190.838 141.356C189.058 139.496 186.494 138.622 183.391 138.622C180.326 138.622 177.765 139.498 175.977 141.353C174.194 143.203 173.319 145.881 173.319 149.198V151.718C173.319 154.815 174.104 157.5 175.826 159.421C177.565 161.359 180.131 162.378 183.391 162.378C186.775 162.378 189.349 161.328 191.059 159.362C192.748 157.421 193.463 154.736 193.463 151.718V149.198ZM183.391 155.842C182.205 155.842 181.622 155.423 181.263 154.819C180.844 154.115 180.653 153.02 180.653 151.55V149.366C180.653 147.76 180.92 146.701 181.355 146.067C181.738 145.506 182.333 145.158 183.391 145.158C184.448 145.158 185.043 145.506 185.427 146.067C185.861 146.701 186.129 147.76 186.129 149.366V151.55C186.129 153.013 185.928 154.11 185.505 154.816C185.138 155.426 184.55 155.842 183.391 155.842ZM237.358 145.158C238.173 145.158 238.633 145.379 238.928 145.721C239.152 145.979 239.352 146.388 239.476 147.022H235.172C235.307 146.498 235.499 146.105 235.727 145.826C236.058 145.423 236.544 145.158 237.358 145.158Z"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M296 343V120H576V343H296Z"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M316 182V141H556V182H316Z"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M542 168H331V155H542V168Z"
              stroke="white"
              strokeWidth="22"
            />
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="322"
              y="147"
              width="30"
              height="30"
            >
              <circle cx="337" cy="162" r="15" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask1)">
              <path d="M322 161H352" stroke="#C6BEFF" strokeWidth="34" />
            </g>
            <path
              d="M351 162C351 169.732 344.732 176 337 176C329.268 176 323 169.732 323 162C323 154.268 329.268 148 337 148C344.732 148 351 154.268 351 162Z"
              stroke="black"
              strokeWidth="2"
            />
            <path d="M361.5 161H400" stroke="#ABABAB" strokeWidth="7" />
            <path d="M404 161H436" stroke="#ABABAB" strokeWidth="7" />
            <path d="M439 161H499" stroke="#ABABAB" strokeWidth="7" />
            <path d="M503 161H517" stroke="#ABABAB" strokeWidth="7" />
            <path d="M520 161H544" stroke="#ABABAB" strokeWidth="7" />
            <path
              d="M316 242V201H556V242H316Z"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M539.5 226.5H333.5V216.5H539.5V226.5Z"
              stroke="white"
              strokeWidth="27"
            />
            <mask
              id="mask2"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="322"
              y="207"
              width="30"
              height="30"
            >
              <circle cx="337" cy="222" r="15" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask2)">
              <path d="M322 221H352" stroke="#FF4A60" strokeWidth="34" />
            </g>
            <path
              d="M351 222C351 229.732 344.732 236 337 236C329.268 236 323 229.732 323 222C323 214.268 329.268 208 337 208C344.732 208 351 214.268 351 222Z"
              stroke="black"
              strokeWidth="2"
            />
            <path d="M422 221H460.5" stroke="#ABABAB" strokeWidth="7" />
            <path d="M359 221H419" stroke="#ABABAB" strokeWidth="7" />
            <path d="M484 221H516" stroke="#ABABAB" strokeWidth="7" />
            <path d="M465 221H479" stroke="#ABABAB" strokeWidth="7" />
            <path
              d="M315 340V261H555V340H315Z"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M526 313H344V290H526V313Z"
              stroke="white"
              strokeWidth="54"
            />
            <path
              d="M356 313V269H546V313H356Z"
              stroke="black"
              strokeWidth="2"
            />
            <mask
              id="mask3"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="322"
              y="268"
              width="30"
              height="30"
            >
              <circle cx="337" cy="283" r="15" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask3)">
              <path d="M322 282H352" stroke="#D8EBC1" strokeWidth="34" />
            </g>
            <path
              d="M351 283C351 290.732 344.732 297 337 297C329.268 297 323 290.732 323 283C323 275.268 329.268 269 337 269C344.732 269 351 275.268 351 283Z"
              stroke="black"
              strokeWidth="2"
            />
            <path d="M356 322H394.5" stroke="#ABABAB" strokeWidth="7" />
            <path d="M400 322H460" stroke="#ABABAB" strokeWidth="7" />
            <path d="M484 322H516" stroke="#ABABAB" strokeWidth="7" />
            <path d="M465 322H479" stroke="#ABABAB" strokeWidth="7" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="630" height="424" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
}
