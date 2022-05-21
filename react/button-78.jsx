export default () => (
  <>
    <button class="btn-78"><span>Button</span></button>

    <style jsx>{`
      .btn-78 {
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
      .btn-78 {
  --height: 80px;

  display: block;
  width: 100%;
  height: var(--height);
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;

  text-transform: uppercase;
}

.btn-78 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-78:before {
  pointer-events: none;

  content: "";
  height: calc(var(--height) / 1.4);
  width: calc(var(--height) / 1.4);

  border-radius: 20px;
  position: absolute;
  left: calc(-1 * var(--height));
  top: 50%;
  transform: translateY(-50%);
  background: white;
  transition: 0.2s;
}
.btn-78:hover:before {
  width: 100%;
  left: 0;
}

    `}</style>
  </>
)