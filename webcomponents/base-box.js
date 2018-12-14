export default class BaseBox extends HTMLElement {
  static get template() {
    return `
      <style>
      @keyframes drift {
        100% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes shadow {
        100% {
          transform: scale(0.9,0.9);
        }
      }

      :host {
        margin: 50px;
      }

      .item-box {
        width: 300px;
        height: 300px;
        position: relative;
      }

      .item-box:hover ::slotted(img) {
        transform: scale(0.9,0.9);
        filter: drop-shadow(3px 3px 3px rgba(0,0,0,0));
      }

      ::slotted(img) {
        z-index: 1;
        width: 295px;
        height: 295px;
        border-radius: 155px;
        transition: all 300ms 0s ease-in;
        filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.4));
      }

      .wave {
        z-index: -5;
        position: absolute;
        width: 270px;
        height: 270px;
        transform-origin: center;
        border-radius: 43%;
      }

      .wave-box {
        z-index: -5;
        margin-top: -301px;
        margin-left: -2px;
        width: 270px;
        height: 270px;
        position: absolute;
        top: 105%;
        left: 5%;
      }
    
      /* ---- hover時の背景の波の色を指定 ----------- */
      .wave.one {
        animation: drift 10000ms infinite linear;
        background-color: rgba(243, 153, 34, 0.2);
      }
      
      .wave.two {
        animation: drift 12000ms infinite linear;
        background-color: rgba(246, 156, 37, 0.8);
      }
      
      .wave.three {
        animation: drift 15000ms infinite linear;
        background-color: rgba(243, 153, 34, 0.5);
      }
      /* ---------------------------------------- */

      </style>

    <section class="item-box">
      <slot></slot>
      <div class='wave-box'>
        <div class='wave one'></div>
        <div class='wave two'></div>
        <div class='wave three'></div>
      </div>
    </section>
    `
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = BaseBox.template;
  }
}