const router = [
  {
    path: "home",
    name: "home",
    component: "home",
    loaded: false
  },
  {
    path: "product-s1",
    name: "product-s1",
    component: "product-s1",
    loaded: false
  },
  {
    path: "product-s5",
    name: "product-s5",
    component: "product-s5",
    loaded: false
  },
  {
    path: "product-s10",
    name: "product-s10",
    component: "product-s10",
    loaded: false
  },
  {
    path: "store",
    name: "store",
    component: "store",
    loaded: false
  },
  {
    path: "about",
    name: "about",
    component: "about",
    loaded: false
  },
  {
    path: "join",
    name: "join",
    component: "join",
    loaded: false
  }
];

const hash = location.hash.substr(1) || "home";

hashchange(hash);

function animate(ref) {
  if (!ref.animate) return;
  ref.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 222,
    easing: "linear"
  });
}

function hashchange(hash = "home") {
  for (let index = 0; index < router.length; index++) {
    const { component } = router[index];
    const ref = document.querySelector(`[route-id="${component}"]`);
    const link = document.querySelector(`[route-link="${component}"]`);
    if (!ref) continue;
    ref.style.display = "none";
    link && link.classList.remove("action");
  }

  const route = router.find((r) => r.path === hash);
  if (!route) return;
  const ref = document.querySelector(`[route-id="${route.component}"]`);
  const link = document.querySelector(`[route-link="${route.component}"]`);
  link && link.classList.add("action");
  if (ref.nodeName === "TEMPLATE") {
    const clon = ref.content.cloneNode(true);
    ref.parentNode.insertBefore(clon, ref);
    route.loaded = true;
    ref.parentNode.removeChild(ref);
    const _ref = document.querySelector(`[route-id="${route.component}"]`);
    animate(_ref);
  } else {
    ref.style.display = "";
    animate(ref);
  }
}

window.addEventListener("hashchange", () => {
  hashchange(location.hash.substr(1) || "home");
  window.scrollTo({ top: 0 }); // behavior: "smooth"
});

window.onload = () => {
  const _router = router.filter((r) => !r.loaded);
  for (let index = 0; index < _router.length; index++) {
    const route = _router[index];
    const ref = document.querySelector(`[route-id="${route.component}"]`);
    if (ref.nodeName === "TEMPLATE") {
      const clon = ref.content.cloneNode(true);
      ref.parentNode.insertBefore(clon, ref);
      route.loaded = true;
      ref.parentNode.removeChild(ref);
      const _ref = document.querySelector(`[route-id="${route.component}"]`);
      _ref.style.display = "none";
    }
  }
};

new Vue({
  el: document.querySelector(`#header`),
  data() {
    return {
      menu: false
    };
  },
  created() {},
  methods: {
    show() {
      this.menu = !this.menu;
    }
  },
  ready() {}
});

import "./home";
