export default () => (
  <>
    <button class="btn-53">
  <div class="original">Button</div>
  <div class="letters">
    <span>B</span>
    <span>U</span>
    <span>T</span>
    <span>T</span>
    <span>O</span>
    <span>N</span>
  </div>
</button>

    <style jsx>{`
      .btn-53 {
        all: unset;
        text-align: center;
        curosr: default;
        font-family: sans-serif;
        font-weight: 900;
        box-sizing: border-box;
        padding: 25px 50px;
        width: auto !important;
        height: auto !important;
      }
      .btn-53 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  font-weight: 900;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-53 .original {
  position: absolute;
  inset: 0;

  display: grid;
  place-content: center;

  background: #fff;
  color: #000;

  transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
}

.btn-53:hover .original {
  transform: translateY(100%);
}
.btn-53 .letters {
  display: inline-flex;
}
.btn-53 span {
  opacity: 0;
  transform: translateY(-15px);
  transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
}
.btn-53 span:nth-child(even) {
  transform: translateY(15px);
}
.btn-53:hover span {
  opacity: 1;
  transform: translateY(0px);
}
.btn-53:hover span:nth-child(2) {
  transition-delay: 0.1s;
}
.btn-53:hover span:nth-child(3) {
  transition-delay: 0.2s;
}
.btn-53:hover span:nth-child(4) {
  transition-delay: 0.3s;
}
.btn-53:hover span:nth-child(5) {
  transition-delay: 0.4s;
}
.btn-53:hover span:nth-child(6) {
  transition-delay: 0.5s;
}

    `}</style>
  </>
)