import { n as noop, c as create_ssr_component, g as getContext, s as setContext, b as add_attribute, e as escape, d as null_to_empty, v as validate_component, f as add_styles, a as subscribe, h as each, i as createEventDispatcher, j as set_store_value, k as assign, l as identity$1 } from "../../chunks/ssr.js";
import "pym.js";
import { w as writable, d as derived } from "../../chunks/index.js";
import parse from "parse-color";
import "html2canvas";
import { scaleLinear, scaleSqrt, scaleTime, scaleSymlog, scaleOrdinal } from "d3-scale";
import { rgb } from "d3-color";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const themes = {
  light: {
    text: "#222",
    muted: "#777",
    hinted: "#e2e2e3",
    pale: "#f0f0f0",
    background: "#fff"
  },
  dark: {
    text: "#fff",
    muted: "#bbb",
    hinted: "#444",
    pale: "#333",
    background: "#222",
    link: "#f5f5f6",
    "link-hover": "#f5f5f6"
  },
  lightblue: {
    text: "#206095",
    muted: "#707070",
    pale: "#f0f0f0",
    background: "rgb(233, 239, 244)"
  }
};
const Theme_svelte_svelte_type_style_lang = "";
const css$l = {
  code: ".theme-wrapper.svelte-zhquzc{position:relative;color:var(--text, #222);background:var(--background, none);--ons-color-text:var(--text, --ons-color-text);--ons-color-text-light:var(--muted, --ons-color-text-light);--ons-color-borders:var(--muted, --ons-color-borders)}.theme-wrapper.svelte-zhquzc a{color:var(--link, --ons-color-text-link)}.theme-wrapper.svelte-zhquzc a:hover{-webkit-text-decoration:underline solid var(--link-hover, --ons-color-text-link-hover) 2px;text-decoration:underline solid var(--link-hover, --ons-color-text-link-hover) 2px}.theme-wrapper.svelte-zhquzc a:hover{color:var(--link-hover, --ons-color-text-link-hover)}.theme-wrapper.svelte-zhquzc .form-label-bold{color:var(--text, #222)}.theme-wrapper.svelte-zhquzc .form-control{background:none;border-color:var(--text, #222);color:var(--text, #222)}",
  map: null
};
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let { id = null } = $$props;
  let { cls = null } = $$props;
  let { global = false } = $$props;
  let themeParent = global ? null : getContext("theme");
  let { theme = themeParent || null } = $$props;
  if (!themeParent)
    setContext("theme", theme);
  let { overrides = null } = $$props;
  let { background = overrides?.background || themes[theme]?.background || null } = $$props;
  function makeStyle(theme2, overrides2, background2) {
    if (theme2) {
      const _theme = themes[theme2] || themes.light;
      if (overrides2)
        Object.keys(overrides2).forEach((key) => _theme[key] = overrides2[key]);
      if (background2)
        _theme.background = background2;
      return Object.keys(_theme).map((key) => `--${key}: ${_theme[key]};`).join("");
    } else if (background2) {
      return `--background:${background2}`;
    }
    return null;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.cls === void 0 && $$bindings.cls && cls !== void 0)
    $$bindings.cls(cls);
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.overrides === void 0 && $$bindings.overrides && overrides !== void 0)
    $$bindings.overrides(overrides);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  $$result.css.add(css$l);
  style = makeStyle(theme, overrides, background);
  return `${$$result.head += `<!-- HEAD_svelte-1u68kmj_START -->${global && background ? `<!-- HTML_TAG_START -->${`<style>body{background:${background}}</style>`}<!-- HTML_TAG_END -->` : ``}<!-- HEAD_svelte-1u68kmj_END -->`, ""} ${style ? `<div${add_attribute("id", id, 0)} class="${escape(null_to_empty(cls ? `theme-wrapper ${cls}` : "theme-wrapper"), true) + " svelte-zhquzc"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Container_svelte_svelte_type_style_lang = "";
const css$k = {
  code: '.ons-page__container.svelte-1i9f2l{background:var(--background, "none");padding-top:0.05px;padding-bottom:0.05px}.ons-page__container--narrow.svelte-1i9f2l{max-width:608px;margin:0 auto 0 0}.ons-page__container--medium.svelte-1i9f2l{max-width:800px;margin:0 auto 0 0}.ons-page__container--wider.svelte-1i9f2l{max-width:1240px}.ons-page__container--full.svelte-1i9f2l{width:100%;max-width:100%;margin:0;padding:0}.ons-page__container--tall-height.svelte-1i9f2l{min-height:80vh;display:flex;align-items:center}.ons-page__container--full-height.svelte-1i9f2l{min-height:100vh;display:flex;align-items:center}.ons-page__container--vpadding.svelte-1i9f2l{padding-top:20px;padding-bottom:20px}',
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _id;
  let _cls;
  let { id = null } = $$props;
  let { cls = null } = $$props;
  let { width = "wide" } = $$props;
  let { height = "auto" } = $$props;
  let { marginTop = false } = $$props;
  let { marginBottom = false } = $$props;
  let { theme = null } = $$props;
  let { themeOverrides = null } = $$props;
  let { background = null } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.cls === void 0 && $$bindings.cls && cls !== void 0)
    $$bindings.cls(cls);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.marginTop === void 0 && $$bindings.marginTop && marginTop !== void 0)
    $$bindings.marginTop(marginTop);
  if ($$props.marginBottom === void 0 && $$bindings.marginBottom && marginBottom !== void 0)
    $$bindings.marginBottom(marginBottom);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.themeOverrides === void 0 && $$bindings.themeOverrides && themeOverrides !== void 0)
    $$bindings.themeOverrides(themeOverrides);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  $$result.css.add(css$k);
  _id = id && !(theme || background) ? id : null;
  _cls = cls && !(theme || background) ? cls : "";
  return `${["narrow", "medium"].includes(width) ? `${validate_component(Theme, "Theme").$$render(
    $$result,
    {
      id,
      cls,
      theme,
      background,
      overrides: themeOverrides
    },
    {},
    {
      default: () => {
        return `<div${add_attribute("id", _id, 0)} class="${[
          "ons-page__container ons-container " + escape(_cls, true) + " svelte-1i9f2l",
          (height === "tall" ? "ons-page__container--tall-height" : "") + " " + (height === "full" ? "ons-page__container--full-height" : "")
        ].join(" ").trim()}">${marginTop ? `<div class="ons-spacer"></div>` : ``} <div class="${[
          "svelte-1i9f2l",
          (width === "narrow" ? "ons-page__container--narrow" : "") + " " + (width === "medium" ? "ons-page__container--medium" : "")
        ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div> ${marginBottom ? `<div class="ons-spacer"></div>` : ``}</div>`;
      }
    }
  )}` : `${validate_component(Theme, "Theme").$$render(
    $$result,
    {
      id,
      cls,
      theme,
      background,
      overrides: themeOverrides
    },
    {},
    {
      default: () => {
        return `<div${add_attribute("id", _id, 0)} class="${[
          "ons-page__container ons-container " + escape(_cls, true) + " svelte-1i9f2l",
          (width === "wider" ? "ons-page__container--wider" : "") + " " + (width === "full" ? "ons-page__container--full" : "") + " " + (height === "tall" ? "ons-page__container--tall-height" : "") + " " + (height === "full" ? "ons-page__container--full-height" : "")
        ].join(" ").trim()}">${marginTop ? `<div class="ons-spacer"></div>` : ``} ${slots.default ? slots.default({}) : ``} ${marginBottom ? `<div class="ons-spacer"></div>` : ``}</div>`;
      }
    }
  )}`}`;
});
const Embed_svelte_svelte_type_style_lang = "";
const AnalyticsBanner_svelte_svelte_type_style_lang = "";
const Backlink_svelte_svelte_type_style_lang = "";
const Breadcrumb_svelte_svelte_type_style_lang = "";
const Grid_svelte_svelte_type_style_lang = "";
const css$j = {
  code: "figure.svelte-1og4gya,figcaption.svelte-1og4gya{display:block;margin:0;padding:0}.grid.svelte-1og4gya{display:grid;grid-template-columns:repeat(auto-fit, 100%);width:100%;margin:0}.grid-narrow.svelte-1og4gya{grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)) !important}.grid-medium.svelte-1og4gya{grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)) !important}.grid-wide.svelte-1og4gya{grid-template-columns:repeat(auto-fit, minmax(400px, 1fr)) !important}.grid > div{min-height:inherit}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columns;
  let { id = null } = $$props;
  let { cls = null } = $$props;
  let { width = "medium" } = $$props;
  let { title = "" } = $$props;
  let { hideTitle = false } = $$props;
  let { theme = null } = $$props;
  let { themeOverrides = null } = $$props;
  let { marginTop = false } = $$props;
  let { marginBottom = true } = $$props;
  let { colwidth = "medium" } = $$props;
  let { caption = "" } = $$props;
  let { height = 200 } = $$props;
  let { gap = 12 } = $$props;
  let gridClass = !colwidth || colwidth === "full" ? "" : `grid-${colwidth}`;
  let rowHeight = height === "full" ? "100vh" : !Number.isNaN(height) ? height + "px" : height;
  let gridGap = !Number.isNaN(gap) ? gap + "px" : gap;
  const defs = {
    narrow: { w: 180, c: 4 },
    medium: { w: 280, c: 3 },
    wide: { w: 400, c: 2 },
    full: { w: "100%", c: 1 }
  };
  const cols = writable(defs[colwidth].c);
  setContext("cols", cols);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.cls === void 0 && $$bindings.cls && cls !== void 0)
    $$bindings.cls(cls);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.hideTitle === void 0 && $$bindings.hideTitle && hideTitle !== void 0)
    $$bindings.hideTitle(hideTitle);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.themeOverrides === void 0 && $$bindings.themeOverrides && themeOverrides !== void 0)
    $$bindings.themeOverrides(themeOverrides);
  if ($$props.marginTop === void 0 && $$bindings.marginTop && marginTop !== void 0)
    $$bindings.marginTop(marginTop);
  if ($$props.marginBottom === void 0 && $$bindings.marginBottom && marginBottom !== void 0)
    $$bindings.marginBottom(marginBottom);
  if ($$props.colwidth === void 0 && $$bindings.colwidth && colwidth !== void 0)
    $$bindings.colwidth(colwidth);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  $$result.css.add(css$j);
  columns = colwidth == "full" ? 1 : defs[colwidth].c;
  {
    cols.set(columns);
  }
  return `<figure${add_attribute("aria-label", caption, 0)} class="svelte-1og4gya">${validate_component(Container, "Container").$$render(
    $$result,
    {
      id,
      cls,
      theme,
      themeOverrides,
      width,
      height: ["tall", "full"].includes(height) ? height : "auto",
      marginTop,
      marginBottom: !caption ? marginBottom : false
    },
    {},
    {
      default: () => {
        return `${title ? `<h2 class="${["section-title", hideTitle ? "ons-u-vh" : ""].join(" ").trim()}">${escape(title)}</h2>` : ``} <div class="${"grid " + escape(gridClass, true) + " svelte-1og4gya"}"${add_styles({
          "grid-gap": gridGap,
          "min-height": rowHeight
        })}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} ${caption ? `<figcaption class="svelte-1og4gya">${validate_component(Container, "Container").$$render(
    $$result,
    {
      cls,
      theme,
      themeOverrides,
      width: "narrow",
      marginBottom
    },
    {},
    {
      default: () => {
        return `<span class="ons-figure__caption"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></span>`;
      }
    }
  )}</figcaption>` : ``} </figure>`;
});
const Cards_svelte_svelte_type_style_lang = "";
const randomString = () => {
  return Math.random().toString(16).slice(2, 8);
};
const slugify = (str, suffix = false) => typeof str === "string" ? str.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").concat(suffix ? `-${randomString()}` : "") : randomString();
const validDate = (str) => {
  if (!str)
    return false;
  const date = new Date(str);
  return !isNaN(date);
};
const formatDate = (str, locale = "en-GB", opts = { year: "numeric", month: "long", day: "2-digit" }) => {
  const date = new Date(str);
  return date.toLocaleDateString(locale, opts);
};
const Card_svelte_svelte_type_style_lang = "";
const Footer_svelte_svelte_type_style_lang$1 = "";
const css$i = {
  code: ".ons-list__link.svelte-1eaiwge{margin:0}.footer.svelte-1eaiwge{color:var(--text, #222);background:var(--pale, rgb(245, 245, 246))}a.svelte-1eaiwge{color:var(--text, rgb(65, 64, 66)) !important;opacity:90%}a.svelte-1eaiwge:hover{color:var(--text, black);text-decoration-color:var(--link-hover, black);opacity:100%}.ons-footer__ogl-img.svelte-1eaiwge{color:var(--text, #222) !important;opacity:85%}.ons-svg-icon.svelte-1eaiwge{fill:var(--text, #222) !important;opacity:85%}",
  map: null
};
const Footer$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  const page = getContext("page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { compact = false } = $$props;
  let { theme = null } = $$props;
  let { themeOverrides = null } = $$props;
  let lang = "en";
  let mounted = false;
  function setPaths(mounted2, page2) {
    if (mounted2) {
      const url = page2?.url || document.location;
      lang = url.host.startsWith("cy") ? "cy" : "en";
      `//${url.host}`;
      url.pathname;
    }
  }
  const texts = {
    "Footer links": "",
    Help: "Cymorth",
    Accessibility: "Hygyrchedd",
    Cookies: "Cwcis",
    Privacy: "Preifatrwydd",
    "Terms and conditions": "Telerau ac amodau",
    "About ONS": "Ynglŷn ag SYG",
    "What we do": "Beth rydym yn ei wneud",
    Careers: "Gyrfaoedd",
    "Contact us": "Cysylltu â ni",
    News: "Newyddion",
    "Freedom of Information": "Rhyddid Gwybodaeth",
    "Connect with us": "Cysylltu â ni",
    Consultations: "Ymgynghoriadau",
    "Discussion forums": "Fforymau trafod",
    "Email alerts": "Rhybuddion ebost",
    "All content is available under the": "Mae'r holl gynnwys ar gael o dan delerau'r",
    "Open Government Licence v3.0": "Drwydded Llywodraeth Agored v3.0",
    "except where otherwise stated": "ac eithrio lle y nodir fel arall"
  };
  const i18n = (text) => lang == "cy" && texts[text] ? texts[text] : text;
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.themeOverrides === void 0 && $$bindings.themeOverrides && themeOverrides !== void 0)
    $$bindings.themeOverrides(themeOverrides);
  $$result.css.add(css$i);
  {
    setPaths(mounted, $page);
  }
  $$unsubscribe_page();
  return `${validate_component(Theme, "Theme").$$render(
    $$result,
    {
      theme,
      overrides: themeOverrides,
      background: "none"
    },
    {},
    {
      default: () => {
        return `<footer class="print--hide padding-top--13"><section>${slots.before ? slots.before({}) : ``} <h2 class="visuallyhidden">${escape(i18n("Footer links"))}</h2> <div class="footer svelte-1eaiwge"><div class="wrapper"><nav aria-label="Footer links">${compact ? `<ul class="ons-list ons-u-mt-m ons-footer--rows ons-list--bare ons-list--inline"><li class="ons-list__item"><a href="/help/accessibility" class="ons-list__link svelte-1eaiwge">${escape(i18n("Accessibility"))}</a></li> <li class="ons-list__item"><a href="/cookies" class="ons-list__link svelte-1eaiwge">${escape(i18n("Cookies"))}</a></li> <li class="ons-list__item"><a href="/help/privacynotice" class="ons-list__link svelte-1eaiwge">${escape(i18n("Privacy"))}</a></li> <li class="ons-list__item"><a href="/help/termsandconditions" class="ons-list__link svelte-1eaiwge">${escape(i18n("Terms and conditions"))}</a></li></ul>` : `<div class="footer-nav col-wrap"><div class="col col--lg-one-third col--md-one-third"><h2 class="footer-nav__heading">${escape(i18n("Help"))}</h2> <ul class="footer-nav__list"><li class="footer-nav__item"><a href="/help/accessibility" class="svelte-1eaiwge">${escape(i18n("Accessibility"))}</a></li> <li class="footer-nav__item"><a href="/cookies" class="svelte-1eaiwge">${escape(i18n("Cookies"))}</a></li> <li class="footer-nav__item"><a href="/help/privacynotice" class="svelte-1eaiwge">${escape(i18n("Privacy"))}</a></li> <li class="footer-nav__item"><a href="/help/termsandconditions" class="svelte-1eaiwge">${escape(i18n("Terms and conditions"))}</a></li></ul></div> <div class="col col--lg-one-third col--md-one-third"><h2 class="footer-nav__heading">${escape(i18n("About ONS"))}</h2> <ul class="footer-nav__list"><li class="footer-nav__item"><a href="/aboutus/whatwedo" class="svelte-1eaiwge">${escape(i18n("What we do"))}</a></li> <li class="footer-nav__item"><a href="/aboutus/careers" class="svelte-1eaiwge">${escape(i18n("Careers"))}</a></li> <li class="footer-nav__item"><a href="/aboutus/contactus" class="svelte-1eaiwge">${escape(i18n("Contact us"))}</a></li> <li class="footer-nav__item"><a href="/news" class="svelte-1eaiwge">${escape(i18n("News"))}</a></li> <li class="footer-nav__item"><a href="/aboutus/transparencyandgovernance/freedomofinformationfoi" class="svelte-1eaiwge">${escape(i18n("Freedom of Information"))}</a></li></ul></div> <div class="col col--lg-one-third col--md-one-third"><h2 class="footer-nav__heading">${escape(i18n("Connect with us"))}</h2> <ul class="footer-nav__list"><li class="footer-nav__item"><a href="https://twitter.com/ONS" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("Twitter"))}</a></li> <li class="footer-nav__item"><a href="https://www.instagram.com/officefornationalstatistics/" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("Instagram"))}</a></li> <li class="footer-nav__item"><a href="https://www.facebook.com/ONS" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("Facebook"))}</a></li> <li class="footer-nav__item"><a href="https://www.linkedin.com/company/office-for-national-statistics" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("LinkedIn"))}</a></li> <li class="footer-nav__item"><a href="https://consultations.ons.gov.uk/" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("Consultations"))}</a></li> <li class="footer-nav__item"><a href="https://www.statsusernet.org.uk/login" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("Discussion forums"))}</a></li> <li class="footer-nav__item"><a href="https://public.govdelivery.com/accounts/UKONS/subscribers/new" class="icon--hide svelte-1eaiwge" target="_blank">${escape(i18n("Email alerts"))}</a></li></ul></div></div> <hr class="ons-footer__hr">`}</nav></div> <div class="wrapper"><div class="footer-license"><svg class="ons-footer__ogl-img svelte-1eaiwge" xmlns="http://www.w3.org/2000/svg" width="60px" height="24px" viewBox="0 0 60 24" focusable="false" aria-hidden="true"><path d="M51.7,17.5V0l-6.2,4v19.8h13.8v-6.2H51.7z
								M36.7,16.3c-1,0.9-2.4,1.4-3.8,1.4c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8c2,0,3.9,1.1,4.9,2.7L43,5.6C40.9,2.2,37.1,0,32.9,0c-4.5,0-8.4,2.5-10.4,6.1C20.4,2.5,16.5,0,12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c4.5,0,8.4-2.5,10.4-6.1c2.1,3.6,6,6.1,10.4,6.1c3,0,5.8-1.1,7.9-3l2.4,2.7h0.4V13h-9.8L36.7,16.3zM12,17.8c-3.2,0-5.8-2.6-5.8-5.8S8.8,6.2,12,6.2s5.8,2.6,5.8,5.8S15.2,17.8,12,17.8" fill="currentColor"></path></svg> <p class="footer-license__text margin-left-sm--0">${escape(i18n("All content is available under the"))} <a class="ons-external-link svelte-1eaiwge" href="${"http://www.nationalarchives.gov.uk/doc/open-government-licence" + escape(lang === "cy" ? "-cymraeg" : "", true) + "/version/3/"}" target="_blank">${escape(i18n("Open Government Licence v3.0"))}<span class="ons-external-link__icon" data-svelte-h="svelte-15le0dr"><svg class="ons-svg-icon svelte-1eaiwge" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor"><path d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z" transform="translate(-2 -1.99)"></path><path d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z" transform="translate(-2 -1.99)"></path></svg></span></a> , ${escape(i18n("except where otherwise stated"))}</p></div></div></div></section> <div id="viewport-sm" class="js-viewport-size"></div> <div id="viewport-md" class="js-viewport-size"></div> <div id="viewport-lg" class="js-viewport-size"></div></footer>`;
      }
    }
  )}`;
});
const ONSLogo_svelte_svelte_type_style_lang = "";
const css$h = {
  code: "svg.svelte-vw23fa{overflow:visible}",
  map: null
};
const secondary = "#a8bd3a";
const ONSLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let primary;
  const theme = getContext("theme");
  let { compact = false } = $$props;
  let { className = "ons-svg-logo" } = $$props;
  let { width = "auto" } = $$props;
  let { height = "auto" } = $$props;
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$h);
  primary = theme === "dark" ? "white" : "#003c57";
  return `${!compact ? `<svg class="${escape(null_to_empty(className), true) + " svelte-vw23fa"}" xmlns="http://www.w3.org/2000/svg"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="33 2 552 60" aria-labelledby="ons-logo-en-alt"><title id="ons-logo-en-alt">Office for National Statistics logo</title><g class="ons-svg-logo__group ons-svg-logo__group--secondary"${add_attribute("fill", secondary, 0)}><path d="M0,34.6c.8-1.69,1.39-3,2.32-4.6A38.28,38.28,0,0,1,0,23.4V34.6M5,3S0,3,0,9.25v1A62.12,62.12,0,0,0,4.2,27a43.77,43.77,0,0,1,9.42-10.79C21.69,9.21,31.16,5.13,45.9,3Z"></path></g><g class="ons-svg-logo__group ons-svg-logo__group--primary"${add_attribute("fill", primary, 0)}><path d="M53.06,6.42C36.2,8,24.68,12.92,16.43,20.07A41.46,41.46,0,0,0,6.4,32.2C12.87,44.93,28.88,57,46.6,57H47s6.32.21,6.32-6.91V6.36a1.22,1.22,0,0,1-.26.06M9.72,42.67a44.25,44.25,0,0,1-5-7.42A80.59,80.59,0,0,0,0,46.38V56.91L31.06,57c-9.83-3-15.74-7.64-21.34-14.3"></path></g><g class="ons-svg-logo__group ons-svg-logo__group--text"${add_attribute("fill", primary, 0)}><path d="M82,47.49c-9.07,0-13.13-7.51-13.13-16.77S72.91,14,82,14s13.1,7.61,13.1,16.77S91.1,47.54,82,47.54m0-30.91c-6.69,0-9.07,7.33-9.07,14.05s2.16,13.9,9.07,13.9,9-7.28,9-13.9-2.34-14-9-14"></path><path d="M106.36,23.81V46.88h-3.67V23.81H98.93V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"></path><path d="M121.53,23.81V46.88h-3.67V23.81H114.1V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"></path><path d="M132.85,16.72a2.28,2.28,0,0,1-2.33-2.23v0a2.34,2.34,0,0,1,4.67,0,2.28,2.28,0,0,1-2.3,2.26h0M131,21.56h3.71V46.88H131Z"></path><path d="M150.53,47.49c-6,0-10.63-5.16-10.63-13.29S144.52,21,150.66,21a9.76,9.76,0,0,1,6.17,1.74l-1,2.25a7.53,7.53,0,0,0-4.4-1.36c-5.15,0-7.78,4.46-7.78,10.48,0,6.2,3,10.62,7.65,10.62a8,8,0,0,0,4.49-1.37l1,2.45a10.21,10.21,0,0,1-6.3,1.73"></path><path d="M162.84,35.75c.48,6,3.76,9,8.9,9a14.66,14.66,0,0,0,6.88-1.55l1.08,2.59a18,18,0,0,1-8.22,1.73c-7.12,0-12.18-4.23-12.18-13.34,0-8.69,4.67-13.2,11-13.2s10.37,3.95,10.37,12.4Zm7.35-12.41c-4.1,0-7.56,3.2-7.52,10.29l14.39-2c0-5.87-2.81-8.32-6.87-8.32"></path><path d="M198.57,23.81V46.88H194.9V23.81h-3.76V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.39,0,.87.05.87.05v2.35h-.44c-2.54,0-4.84,1.64-4.84,5.12v4.09h5.28v2.25Z"></path><path d="M217.28,47.49c-7.47,0-10.89-5.78-10.89-13.24S209.81,21,217.28,21s10.85,5.82,10.85,13.3-3.37,13.24-10.85,13.24m0-24c-5.53,0-7.13,5.59-7.13,10.81s1.73,10.56,7.13,10.56,7.13-5.35,7.13-10.56-1.6-10.81-7.13-10.81"></path><path d="M244.08,23.91c-2.34-.61-5.75-.52-7.35.47v22.5H233V22.69c2.67-1.13,5.36-1.74,10.11-1.74H245Z"></path><path d="M277.42,47.13,263.07,25a32.2,32.2,0,0,1-1.85-3.29h-.09s.13,1.88.13,3.85V47.13h-4.71V14.8h5.31l13.61,20.82A28.76,28.76,0,0,1,277.38,39h.08s-.17-1.84-.17-3.77V14.8H282V47.13Z"></path><path d="M297.52,47.79c-7.43,0-10.93-3-10.93-7.81,0-6.8,7.12-8.64,15.59-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L288.23,23a24,24,0,0,1,9.12-1.83c5.61,0,9.93,2.3,9.93,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.26.67-10.45,1.84-10.45,6.73,0,3.42,2.42,4.88,6.22,4.88a10.09,10.09,0,0,0,4.23-.84Z"></path><path d="M322,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.55V21.81h3.55V16.12l5.4-1.5v7.19H325v3.28h-5V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"></path><path d="M331.91,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"></path><path d="M350.88,47.79c-7.73,0-11.57-5.74-11.57-13.3s3.84-13.34,11.57-13.34,11.54,5.78,11.54,13.34-3.8,13.3-11.54,13.3m0-23.17c-4.66,0-6.05,4.89-6.05,9.82s1.47,9.63,6.05,9.63,6.05-4.7,6.05-9.63-1.38-9.82-6.05-9.82"></path><path d="M382.52,47.13V29c0-3.24-2.77-4.47-5.88-4.47a12.3,12.3,0,0,0-4.37.76v21.8h-5.39V23a26.81,26.81,0,0,1,10.06-1.83c6.61,0,11,2.25,11,7.8V47.13Z"></path><path d="M403.18,47.79c-7.43,0-10.94-3-10.94-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L393.89,23A24,24,0,0,1,403,21.15c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.43,4.88,6.23,4.88a10.09,10.09,0,0,0,4.23-.84Z"></path><polygon points="418.52 47.13 418.52 34.91 418.52 10.25 423.92 10.25 423.92 22.76 423.92 47.13 418.52 47.13"></polygon><path d="M445.39,47.79A19.11,19.11,0,0,1,436.58,46l1.51-4a13.48,13.48,0,0,0,6.22,1.55c3.76,0,6.44-2.21,6.44-5.41,0-7.09-13.44-4.36-13.44-14.42,0-5.13,4.15-9.59,10.72-9.59A15.82,15.82,0,0,1,455.8,16l-1.38,3.52a11.93,11.93,0,0,0-5.66-1.5c-3.5,0-5.79,2.11-5.79,5.12,0,7,13.74,3.94,13.74,14.65,0,5.74-4.71,10-11.32,10"></path><path d="M470.41,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.12,5.12,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"></path><path d="M487.27,47.79c-7.44,0-10.93-3-10.93-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.38-4.51-5.84-4.51a18,18,0,0,0-6.87,1.46L478,23a23.94,23.94,0,0,1,9.11-1.83c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83M492,33.16c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.42,4.88,6.22,4.88a10,10,0,0,0,4.24-.84Z"></path><path d="M511.73,47.69c-5.32,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"></path><path d="M521.66,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.45V47.13h-5.45Z"></path><path d="M536.19,47.79A15.9,15.9,0,0,1,528.54,46L530,42.48a10.53,10.53,0,0,0,5.52,1.5c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.86-7.42A13.56,13.56,0,0,1,545.34,23l-1.42,3.14a8.47,8.47,0,0,0-4.62-1.45c-2.81,0-4.54,1.69-4.54,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"></path><path d="M559.83,47.69c-5.31,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.93v3.28h-4.93V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.64,5.64,0,0,0,1.47-.23v3.33a7.72,7.72,0,0,1-3,.52"></path><path d="M569.77,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"></path><path d="M588.14,47.79c-6.23,0-11-5.08-11-13.35s4.88-13.29,11-13.29A10.51,10.51,0,0,1,594.66,23l-1.21,3a6.87,6.87,0,0,0-4-1.22c-4.4,0-6.69,3.81-6.69,9.49s2.63,9.59,6.61,9.59a6.74,6.74,0,0,0,4-1.28L594.7,46c-1.12.94-3.33,1.84-6.56,1.84"></path><path d="M605.1,47.79A15.9,15.9,0,0,1,597.45,46l1.42-3.47A10.54,10.54,0,0,0,604.4,44c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.85-7.42a13.49,13.49,0,0,1,7.1,1.83l-1.42,3.14a8.42,8.42,0,0,0-4.63-1.45c-2.8,0-4.53,1.69-4.53,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"></path></g></svg>` : `<svg class="${escape(null_to_empty(className), true) + " svelte-vw23fa"}" xmlns="http://www.w3.org/2000/svg"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 5 595 116" aria-labelledby="ons-logo-stacked-en-alt"><title id="ons-logo-stacked-en-alt">Office for National Statistics logo</title><g class="ons-svg-logo__group ons-svg-logo__group--secondary"${add_attribute("fill", secondary, 0)}><path d="M0,70.5c1.8-3.7,3.6-7.2,5.6-10.7A127.94,127.94,0,0,1,0,42.6V70.5M10.9,0S0,0,0,13.5v7.2A128.06,128.06,0,0,0,7.9,56.2a114.75,114.75,0,0,1,22.3-26C47.8,15.1,71.5,4.7,103.7.1Z"></path></g><g class="ons-svg-logo__group ons-svg-logo__group--primary"${add_attribute("fill", primary, 0)}><path d="M115.9,7.3c-36.8,3.5-62,14-80,29.4a108.15,108.15,0,0,0-23.6,29c14.1,27.4,41.1,47.6,86,50.5h4.4s13.8.5,13.8-14.9V7.2l-.6.1M21.2,85.4a92.68,92.68,0,0,1-11-16A173,173,0,0,0,0,93.4v22.7l73.6.1c-22.9-5.5-40.1-16.4-52.4-30.8"></path></g><g class="ons-svg-logo__group ons-svg-logo__group--text"${add_attribute("fill", primary, 0)}><path d="M161,51.9c-11.3,0-16.3-9.3-16.3-20.8s5-20.8,16.3-20.8,16.3,9.5,16.3,20.8c-.1,11.5-5.1,20.8-16.3,20.8m0-38.3c-8.3,0-11.3,9.1-11.3,17.4s2.7,17.3,11.3,17.3,11.2-9.1,11.2-17.3S169.3,13.6,161,13.6m30.2,8.9V51.2h-4.5V22.6H182V19.8h4.7V15.2c0-5.7,3.4-9.9,10-9.9a8,8,0,0,1,1.1.1V8.3h-.5c-3.2,0-6,2.1-6,6.4v5.1h6.6v2.8l-6.7-.1Zm18.9,0V51.2h-4.5V22.6h-4.7V19.8h4.7V15.2c0-5.7,3.4-9.9,10-9.9a8,8,0,0,1,1.1.1V8.3h-.5c-3.2,0-6,2.1-6,6.4v5.1h6.6v2.8l-6.7-.1Zm14-8.8a2.82,2.82,0,0,1-2.9-2.8,2.9,2.9,0,0,1,5.8,0,2.76,2.76,0,0,1-2.9,2.8m-2.3,6h4.6V51.2h-4.6Zm24.3,32.2c-7.4,0-13.2-6.4-13.2-16.5,0-10.3,5.8-16.5,13.4-16.5a12.36,12.36,0,0,1,7.7,2.2l-1.2,2.8a8.92,8.92,0,0,0-5.5-1.7c-6.4,0-9.7,5.5-9.7,13,0,7.7,3.7,13.2,9.5,13.2a9.8,9.8,0,0,0,5.6-1.7l1.2,3c-1.3,1.2-4,2.2-7.8,2.2m15.3-14.6c.6,7.4,4.7,11.1,11.1,11.1a18.36,18.36,0,0,0,8.5-1.9l1.3,3.2a22.58,22.58,0,0,1-10.2,2.1c-8.8,0-15.1-5.3-15.1-16.6,0-10.8,5.8-16.4,13.7-16.4s12.9,4.9,12.9,15.4l-22.2,3.1ZM270.5,22c-5.1,0-9.4,4-9.3,12.8l17.9-2.5C279,25,275.5,22,270.5,22m42.2.5V51.2h-4.5V22.6h-4.7V19.8h4.7V15.2c0-5.7,3.4-9.9,10-9.9a8,8,0,0,1,1.1.1V8.3h-.5c-3.2,0-6,2.1-6,6.4v5.1h6.6v2.8Zm23.2,29.4c-9.3,0-13.5-7.2-13.5-16.5s4.2-16.5,13.5-16.5,13.5,7.2,13.5,16.5-4.2,16.5-13.5,16.5m0-29.8c-6.9,0-8.8,7-8.8,13.4s2.1,13.1,8.8,13.1c6.9,0,8.9-6.6,8.9-13.1s-2-13.4-8.9-13.4m33.3.6c-2.9-.8-7.1-.6-9.1.6V51.2h-4.6V21.1c3.3-1.4,6.6-2.2,12.5-2.2h2.4c0,.1-1.2,3.8-1.2,3.8ZM171.3,114.8,153.5,87.3c-1.3-2.1-2.3-4.1-2.3-4.1h-.1s.2,2.3.2,4.8v26.8h-5.8V74.7h6.6L169,100.5a46.13,46.13,0,0,1,2.4,4.1h.1s-.2-2.3-.2-4.7V74.6h5.9v40.1l-5.9.1Zm25,.8c-9.2,0-13.6-3.7-13.6-9.7,0-8.5,8.8-10.7,19.4-11.7V92.4c0-4.3-2.9-5.6-7.2-5.6a22.34,22.34,0,0,0-8.5,1.8l-1.6-3.8a30.2,30.2,0,0,1,11.3-2.3c7,0,12.3,2.9,12.3,10.9v19.9c-2.7,1.4-6.9,2.3-12.1,2.3m5.8-18.2c-7.8.8-13,2.3-13,8.3,0,4.2,3,6.1,7.7,6.1a12.33,12.33,0,0,0,5.3-1.1Zm24.5,18.1c-6.6,0-9.1-4.3-9.1-8.5V87.5h-4.4V83.4h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2c0,2.5,1.4,4.4,4.3,4.4a5.66,5.66,0,0,0,1.8-.3v4.1a11.47,11.47,0,0,1-3.7.6M239,77.9a3.52,3.52,0,1,1,3.9-3.5,3.71,3.71,0,0,1-3.9,3.5m-3.4,5.5h6.8v31.4h-6.8Zm26.9,32.2c-9.6,0-14.4-7.1-14.4-16.5s4.8-16.6,14.4-16.6,14.3,7.2,14.3,16.6-4.7,16.5-14.3,16.5m0-28.7c-5.8,0-7.5,6.1-7.5,12.2s1.8,11.9,7.5,11.9,7.5-5.8,7.5-11.9-1.7-12.2-7.5-12.2m39.3,27.9V92.3c0-4-3.4-5.5-7.3-5.5a16,16,0,0,0-5.4.9v27.1h-6.7v-30a32.8,32.8,0,0,1,12.5-2.3c8.2,0,13.7,2.8,13.7,9.7v22.6Zm25.7.8c-9.2,0-13.6-3.7-13.6-9.7,0-8.5,8.9-10.7,19.4-11.7V92.4c0-4.3-2.9-5.6-7.2-5.6a22.34,22.34,0,0,0-8.5,1.8L316,84.8a30.2,30.2,0,0,1,11.3-2.3c7,0,12.3,2.9,12.3,10.9v19.9c-2.7,1.4-6.9,2.3-12.1,2.3m5.8-18.2c-7.8.8-13,2.3-13,8.3,0,4.2,3,6.1,7.7,6.1a12.33,12.33,0,0,0,5.3-1.1Zm13.2,17.4V69h6.7v45.8Zm38.6.8a23.94,23.94,0,0,1-10.9-2.3l1.9-4.9a17,17,0,0,0,7.7,1.9c4.7,0,8-2.7,8-6.7,0-8.8-16.7-5.4-16.7-17.9,0-6.4,5.2-11.9,13.3-11.9a20.22,20.22,0,0,1,9.7,2.3l-1.7,4.4a14.57,14.57,0,0,0-7-1.9c-4.3,0-7.2,2.6-7.2,6.4,0,8.6,17.1,4.9,17.1,18.2-.1,7.1-6,12.4-14.2,12.4m31.1-.1c-6.6,0-9.1-4.3-9.1-8.5V87.5h-4.4V83.4h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2a4.07,4.07,0,0,0,4.3,4.4,5.66,5.66,0,0,0,1.8-.3v4.1a12.06,12.06,0,0,1-3.7.6m20.9.1c-9.2,0-13.6-3.7-13.6-9.7,0-8.5,8.9-10.7,19.4-11.7V92.4c0-4.3-2.9-5.6-7.2-5.6a22.34,22.34,0,0,0-8.5,1.8l-1.6-3.8a30.2,30.2,0,0,1,11.3-2.3c7,0,12.3,2.9,12.3,10.9v19.9c-2.6,1.4-6.9,2.3-12.1,2.3m5.8-18.2c-7.8.8-13,2.3-13,8.3,0,4.2,3,6.1,7.7,6.1a12.33,12.33,0,0,0,5.3-1.1Zm24.6,18.1c-6.6,0-9.1-4.3-9.1-8.5V87.5H454V83.4h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2a4.07,4.07,0,0,0,4.3,4.4,5.66,5.66,0,0,0,1.8-.3v4.1a12.69,12.69,0,0,1-3.7.6m12.3-37.6a3.52,3.52,0,1,1,3.9-3.5,3.65,3.65,0,0,1-3.9,3.5m-3.4,5.5h6.8v31.4h-6.8Zm21.4,32.2a19.46,19.46,0,0,1-9.5-2.3l1.8-4.3a13.21,13.21,0,0,0,6.9,1.9c3.4,0,6.2-2.2,6.2-4.9,0-7.5-13.8-4-13.8-14.2,0-4.7,4.2-9.2,11-9.2a16.21,16.21,0,0,1,8.8,2.3l-1.8,3.9a10.31,10.31,0,0,0-5.7-1.8c-3.5,0-5.6,2.1-5.6,4.5,0,7,14,3.9,14,14.4,0,4.9-4.7,9.7-12.3,9.7m29.4-.1c-6.6,0-9.1-4.3-9.1-8.5V87.5h-4.4V83.4h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2c0,2.5,1.4,4.4,4.3,4.4a5.66,5.66,0,0,0,1.8-.3v4.1a12.06,12.06,0,0,1-3.7.6m12.3-37.6a3.52,3.52,0,1,1,3.9-3.5c.1,2-1.7,3.5-3.9,3.5m-3.3,5.5H543v31.4h-6.8Zm26.2,32.2c-7.7,0-13.6-6.3-13.6-16.6s6.1-16.5,13.7-16.5c3.9,0,6.6,1.1,8,2.3L569,88.6a8.61,8.61,0,0,0-4.9-1.5c-5.5,0-8.3,4.7-8.3,11.8s3.3,11.9,8.2,11.9a8.39,8.39,0,0,0,4.9-1.6l1.7,4.1c-1.5,1.2-4.2,2.3-8.2,2.3m20.6,0a19.46,19.46,0,0,1-9.5-2.3l1.8-4.3a13.21,13.21,0,0,0,6.9,1.9c3.4,0,6.2-2.2,6.2-4.9,0-7.5-13.8-4-13.8-14.2,0-4.7,4.2-9.2,11-9.2a16.85,16.85,0,0,1,8.9,2.3l-1.8,3.9A10.31,10.31,0,0,0,587,87c-3.5,0-5.6,2.1-5.6,4.5,0,7,14,3.9,14,14.4-.1,4.9-4.9,9.7-12.4,9.7"></path></g></svg>`}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$g = {
  code: ".ons-header__top.svelte-10g16h9{background:none}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  const page = getContext("page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { compact = false } = $$props;
  let { title = "" } = $$props;
  let { titleHref = "" } = $$props;
  let { theme = null } = $$props;
  let { themeOverrides = null } = $$props;
  let lang = "en";
  let baseurl = "//www.ons.gov.uk";
  let baseother = "//cy.ons.gov.uk";
  let path = "";
  let mounted = false;
  function setPaths(mounted2, page2) {
    if (mounted2) {
      const url = page2?.url || document.location;
      lang = url.host.startsWith("cy") ? "cy" : "en";
      baseurl = `//${url.host}`;
      baseother = lang === "en" ? `//cy.${url.host.replace("www.", "")}` : `//www.${url.host.replace("cy.", "")}`;
      path = url.pathname;
    }
  }
  let menuExpanded = false;
  let searchExpanded = false;
  let menu = [
    {
      label_en: "Business, industry and trade",
      label_cy: "Busnes, diwydiant a masnach",
      url: "/businessindustryandtrade",
      expanded: false,
      children: [
        {
          label_en: "Business",
          label_cy: "Busnes",
          url: "/businessindustryandtrade/business"
        },
        {
          label_en: "Changes to business",
          label_cy: "Newidiadau i fusnesau",
          url: "/businessindustryandtrade/changestobusiness"
        },
        {
          label_en: "Construction industry",
          label_cy: "Diwydiant adeiladu",
          url: "/businessindustryandtrade/constructionindustry"
        },
        {
          label_en: "IT and internet industry",
          label_cy: "Y diwydiant TG a'r rhyngrwyd",
          url: "/businessindustryandtrade"
        },
        {
          label_en: "International trade",
          label_cy: "Masnach ryngwladol",
          url: "/businessindustryandtrade/itandinternetindustry"
        },
        {
          label_en: "Manufacturing and production industry",
          label_cy: "Y diwydiant gweithgynhyrchu a chynhyrchu",
          url: "/businessindustryandtrade/manufacturingandproductionindustry"
        },
        {
          label_en: "Retail industry",
          label_cy: "Y diwydiant manwerthu",
          url: "/businessindustryandtrade/retailindustry"
        },
        {
          label_en: "Tourism industry",
          label_cy: "Y diwydiant twristiaeth",
          url: "/businessindustryandtrade/tourismindustry"
        }
      ]
    },
    {
      label_en: "Economy",
      label_cy: "Yr economi",
      url: "/economy",
      expanded: false,
      children: [
        {
          label_en: "Economic output and productivity",
          label_cy: "Allgynnyrch economaidd a chynhyrchiant",
          url: "/economy/economicoutputandproductivity"
        },
        {
          label_en: "Environmental accounts",
          label_cy: "Cyfrifon amgylcheddol",
          url: "/economy/environmentalaccounts"
        },
        {
          label_en: "Government, public sector and taxes",
          label_cy: "Llywodraeth, y sector cyhoeddus a threthi",
          url: "/economy/governmentpublicsectorandtaxes"
        },
        {
          label_en: "Gross Domestic Product (GDP)",
          label_cy: "Cynnyrch Domestig Gros (CDG)",
          url: "/economy/grossdomesticproductgdp"
        },
        {
          label_en: "Gross Value Added (GVA)",
          label_cy: "Gwerth Ychwanegol Gros",
          url: "/economy/grossvalueaddedgva"
        },
        {
          label_en: "Inflation and price indices",
          label_cy: "Mynegeion chwyddiant a phrisiau",
          url: "/economy/inflationandpriceindices"
        },
        {
          label_en: "Investments, pensions and trusts",
          label_cy: "Buddsoddiadau, pensiynau ac ymddiriedolaethau",
          url: "/economy/investmentspensionsandtrusts"
        },
        {
          label_en: "National accounts",
          label_cy: "Cyfrifon gwladol",
          url: "/economy/nationalaccounts"
        },
        {
          label_en: "Regional accounts",
          label_cy: "Cyfrifon rhanbarthol",
          url: "/economy/regionalaccounts"
        }
      ]
    },
    {
      label_en: "Employment and labour market",
      label_cy: "Cyflogaeth a'r farchnad lafur",
      url: "/employmentandlabourmarket",
      expanded: false,
      children: [
        {
          label_en: "People in work",
          label_cy: "Pobl mewn gwaith",
          url: "/employmentandlabourmarket/peopleinwork"
        },
        {
          label_en: "People not in work",
          label_cy: "Pobl nad ydynt mewn gwaith",
          url: "/employmentandlabourmarket/peoplenotinwork"
        }
      ]
    },
    {
      label_en: "People, population and community",
      label_cy: "Pobl, y boblogaeth a chymunedau",
      url: "/peoplepopulationandcommunity",
      expanded: false,
      children: [
        {
          label_en: "Births, deaths and marriages",
          label_cy: "Genedigaethau, marwolaethau a phriodasau",
          url: "/peoplepopulationandcommunity/birthsdeathsandmarriages"
        },
        {
          label_en: "Crime and justice",
          label_cy: "Troseddu a chyfiawnder",
          url: "/peoplepopulationandcommunity/crimeandjustice"
        },
        {
          label_en: "Cultural identity",
          label_cy: "Hunaniaeth ddiwylliannol",
          url: "/peoplepopulationandcommunity/culturalidentity"
        },
        {
          label_en: "Education and childcare",
          label_cy: "Addysg a gofal plant",
          url: "/peoplepopulationandcommunity/educationandchildcare"
        },
        {
          label_en: "Elections",
          label_cy: "Etholiadau",
          url: "/peoplepopulationandcommunity/elections"
        },
        {
          label_en: "Health and social care",
          label_cy: "Iechyd a gofal cymdeithasol",
          url: "/peoplepopulationandcommunity/healthandsocialcare"
        },
        {
          label_en: "Household characteristics",
          label_cy: "Nodweddion aelwydydd",
          url: "/peoplepopulationandcommunity/householdcharacteristics"
        },
        {
          label_en: "Housing",
          label_cy: "Tai",
          url: "/peoplepopulationandcommunity/housing"
        },
        {
          label_en: "Leisure and tourism",
          label_cy: "Hamdden a thwristiaeth",
          url: "/peoplepopulationandcommunity/leisureandtourism"
        },
        {
          label_en: "Personal and household finances",
          label_cy: "Cyllid personol a chyllid aelwydydd",
          url: "/peoplepopulationandcommunity/personalandhouseholdfinances"
        },
        {
          label_en: "Population and migration",
          label_cy: "Poblogaeth ac ymfudo",
          url: "/peoplepopulationandcommunity/populationandmigration"
        },
        {
          label_en: "Well-being",
          label_cy: "Lles",
          url: "/peoplepopulationandcommunity/wellbeing"
        }
      ]
    },
    {
      label_en: "Taking part in a survey?",
      label_cy: "Cymryd rhan mewn arolwg?",
      url: "/surveys"
    },
    {
      label_en: "Release calendar",
      label_cy: "Calendar datganiadau",
      url: "/releasecalendar",
      secondary: true
    },
    {
      label_en: "Methodology",
      label_cy: "Methodoleg",
      url: "/methodology",
      secondary: true
    },
    {
      label_en: "Media",
      label_cy: "Media",
      url: "/news",
      secondary: true
    },
    {
      label_en: "About",
      label_cy: "Amdanom ni",
      url: "/aboutus",
      secondary: true
    },
    {
      label_en: "Blog",
      label_cy: "Blog",
      url: "https://blog.ons.gov.uk/",
      secondary: true
    }
  ];
  const texts = {
    Home: "Hafan",
    Search: "Chwilio",
    Menu: "Dewislen",
    "Hide search": "Cuddio",
    "Office for National Statistics logo - Homepage": "Logo Swyddfa Ystadegau Gwladol - Hafan",
    "Search for a keyword(s) or time series ID": "Chwilio am allweddair neu ID cyfres amser"
  };
  const i18n = (text) => lang == "cy" && texts[text] ? texts[text] : text;
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleHref === void 0 && $$bindings.titleHref && titleHref !== void 0)
    $$bindings.titleHref(titleHref);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.themeOverrides === void 0 && $$bindings.themeOverrides && themeOverrides !== void 0)
    $$bindings.themeOverrides(themeOverrides);
  $$result.css.add(css$g);
  {
    setPaths(mounted, $page);
  }
  $$unsubscribe_page();
  return `${validate_component(Theme, "Theme").$$render($$result, { theme, overrides: themeOverrides }, {}, {
    default: () => {
      return `${lang ? `<header class="ons-header" role="banner"><a class="skiplink" href="#main" tabindex="0">${escape(i18n("Skip to main content"))}</a> <div id="pagePath" class="hide">${escape(path)}</div> ${slots.before ? slots.before({}) : ``} ${compact ? `<div class="ons-header__top svelte-10g16h9"${add_styles({
        "border-bottom": !title ? "1px solid var(--ons-color-borders)" : null
      })}><div class="ons-container"><div class="ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap"><div class="ons-grid__col ons-col-auto"><a class="ons-header__org-logo-link" href="#0"><div class="ons-header__org-logo ons-header__org-logo--large">${validate_component(ONSLogo, "ONSLogo").$$render($$result, { width: 197, height: 19 }, {}, {})}</div> <div class="ons-header__org-logo ons-header__org-logo--small">${validate_component(ONSLogo, "ONSLogo").$$render($$result, { width: 120, height: 27, compact: true }, {}, {})}</div></a></div></div></div></div>` : `<div class="wrapper"><div class="header col-wrap"><div class="col col--lg-one-third col--md-one-third"><a href="${escape(baseurl, true) + "/"}">${validate_component(ONSLogo, "ONSLogo").$$render(
        $$result,
        {
          className: "logo",
          height: 39,
          compact: true
        },
        {},
        {}
      )}</a></div> <div class="col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"><div class="language">${lang == "en" ? `<span data-svelte-h="svelte-f4p9mo">English (EN) |</span> <a href="${escape(baseother, true) + escape(path, true)}" class="language__link" lang="cy">Cymraeg (CY)</a>` : `<a href="${escape(baseother, true) + escape(path, true)}" class="language__link" lang="en">English (EN)</a> <span data-svelte-h="svelte-1i9wl6">| Cymraeg (EN)</span>`}</div></div> <div class="secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide"><ul class="secondary-nav__list js-nav-clone__list">${each(menu.filter((d) => d.secondary), (item) => {
        return `<li class="secondary-nav__item"><a class="secondary-nav__link js-nav-clone__link" href="${escape(baseurl, true) + escape(item.url, true)}">${escape(item["label_" + lang])}</a> </li>`;
      })}</ul></div></div></div> <div class="primary-nav print--hide"><nav aria-label="Header links"><ul class="nav--controls"><li class="${["nav--controls__item", ""].join(" ").trim()}"><a href="#nav-primary" id="menu-toggle" aria-controls="nav-primary"${add_attribute("aria-expanded", menuExpanded, 0)} class="nav--controls__menu"><span class="nav--controls__text">${escape(i18n("Menu"))}</span></a></li> <li class="${["nav--controls__item", ""].join(" ").trim()}"><a href="#nav-search" id="search-toggle" aria-controls="nav-search"${add_attribute("aria-expanded", searchExpanded, 0)} class="nav--controls__search"><span class="nav--controls__text">${escape(i18n("Search"))}</span></a></li></ul> <ul class="${["wrapper primary-nav__list", "nav-main--hidden"].join(" ").trim()}" id="nav-primary"${add_attribute("aria-expanded", menuExpanded, 0)}><li class="primary-nav__item js-nav"><a class="primary-nav__link col col--md-7 col--lg-9" href="${escape(baseurl, true) + "/"}" style="color: #e5e6e7">${escape(i18n("Home"))}</a></li> ${each(
        [
          ...menu.filter((d) => d.children).sort((a, b) => a["label_" + lang].localeCompare(b["label_" + lang])),
          ...menu.filter((d) => !d.children)
        ],
        (item, i) => {
          return `${item.children ? `<li class="${[
            "primary-nav__item js-nav js-expandable",
            item.expanded ? "js-expandable-active" : ""
          ].join(" ").trim()}"><a class="primary-nav__link col col--md-8 col--lg-10" href="${escape(baseurl, true) + escape(item.url, true)}" aria-expanded="false" aria-label="${escape(item["label_" + lang], true) + " sub menu"}"><span aria-hidden="true" class="expansion-indicator"></span> <span class="submenu-title">${escape(item["label_" + lang])} </span></a> <ul class="${[
            "primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content jsEnhance",
            !item.expanded ? "js-nav-hidden" : ""
          ].join(" ").trim()}"${add_attribute("aria-expanded", item.expanded, 0)} aria-label="submenu"><li class="primary-nav__child-item js-expandable__child hide--md"><a class="primary-nav__child-link" tabindex="-1" href="${escape(baseurl, true) + escape(item.url, true)}">${escape(item["label_" + lang])}</a></li> ${each([...item.children].sort((a, b) => a["label_" + lang].localeCompare(b["label_" + lang])), (child) => {
            return `<li class="primary-nav__child-item js-expandable__child"><a class="primary-nav__child-link" tabindex="-1" href="${escape(baseurl, true) + escape(child.url, true)}">${escape(child["label_" + lang])}</a> </li>`;
          })}</ul> </li>` : `<li class="${["primary-nav__item js-nav", item.secondary ? "hide--md" : ""].join(" ").trim()}"><a class="primary-nav__link col col--md-8 col--lg-10" href="${escape(baseurl, true) + escape(item.url, true)}">${escape(item["label_" + lang])}</a> </li>`}`;
        }
      )} <li class="hide--md primary-nav__language">${lang == "en" ? `<span data-svelte-h="svelte-f4p9mo">English (EN) |</span> <a href="${escape(baseother, true) + escape(path, true)}" class="language__link" lang="cy">Cymraeg (CY)</a>` : `<a href="${escape(baseother, true) + escape(path, true)}" class="language__link" lang="en">English (EN)</a> <span data-svelte-h="svelte-1i9wl6">| Cymraeg (EN)</span>`}</li></ul></nav></div> <div class="${["search print--hide", "nav-search--hidden"].join(" ").trim()}" id="searchBar"${add_attribute("aria-expanded", searchExpanded, 0)}><div class="wrapper" role="search"><form class="col-wrap search__form" action="${escape(baseurl, true) + "/search"}"><label class="search__label col col--md-23 col--lg-24" for="nav-search">${escape(i18n("Search for a keyword(s) or time series ID"))}</label> <input type="search" autocomplete="off" class="search__input col col--md-21 col--lg-32" id="nav-search" name="q" value=""> <button type="submit" class="search__button col--md-3 col--lg-3" id="nav-search-submit"><span class="hidden">${escape(i18n("Search"))}</span> <span class="icon-search--light" data-svelte-h="svelte-l6prk5"><svg class="ons-svg-icon ons-svg-icon--m" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"><path d="M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0
								0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z"></path></svg></span></button></form></div></div>`} ${title ? `<div class="ons-header__main"><div class="ons-container"><div class="ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap"><div class="ons-grid__col ons-col-auto ons-u-flex-shrink"><a class="ons-header__title-link"${add_attribute("href", titleHref, 0)}><div class="ons-header__title">${escape(title)}</div></a></div></div></div></div>` : ``}</header>` : ``}`;
    }
  })}`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".ons-hero__details.svelte-i91fpu{padding-left:0}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { cls = null } = $$props;
  let { width = "wide" } = $$props;
  let { height = "tall" } = $$props;
  let { title = "Page headline" } = $$props;
  let { lede = "" } = $$props;
  let { date = null } = $$props;
  let { theme = "dark" } = $$props;
  let { themeOverrides = null } = $$props;
  let { background = "rgb(32, 96, 149)" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.cls === void 0 && $$bindings.cls && cls !== void 0)
    $$bindings.cls(cls);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.lede === void 0 && $$bindings.lede && lede !== void 0)
    $$bindings.lede(lede);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.themeOverrides === void 0 && $$bindings.themeOverrides && themeOverrides !== void 0)
    $$bindings.themeOverrides(themeOverrides);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  $$result.css.add(css$f);
  return `${validate_component(Container, "Container").$$render(
    $$result,
    {
      id,
      cls,
      theme,
      themeOverrides,
      width,
      background,
      height
    },
    {},
    {
      default: () => {
        return `<div class="ons-hero__details ons-grid__col ons-col-8@m ons-col-10@s@m svelte-i91fpu">${title ? `<header><h1 class="ons-hero__title ons-u-fs-xxxl">${escape(title)}</h1></header>` : ``} ${lede ? `<p class="ons-hero__text ons-u-fs-l ons-font-weight__normal">${escape(lede)}</p>` : ``} ${validDate(date) ? `<p class="ons-hero__text">${escape(formatDate(date))}</p>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
const Highlight_svelte_svelte_type_style_lang = "";
const NavSections_svelte_svelte_type_style_lang = "";
const Notice_svelte_svelte_type_style_lang = "";
const PhaseBanner_svelte_svelte_type_style_lang = "";
const Scroller_svelte_svelte_type_style_lang = "";
const css$e = {
  code: 'svelte-scroller-outer.svelte-koluze.svelte-koluze{display:block;position:relative}svelte-scroller-background.svelte-koluze.svelte-koluze{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-koluze.svelte-koluze{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-koluze.svelte-koluze::after{content:" ";display:block;clear:both}svelte-scroller-background-container.svelte-koluze.svelte-koluze{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}svelte-scroller-background-container.svelte-koluze.svelte-koluze{pointer-events:all !important}[slot="foreground"] section{padding:70vh 0 100vh 0}[slot="foreground"] section + section{padding:0 0 100vh 0}[slot="foreground"] section:last-of-type{padding:0 0 70vh 0}[slot="foreground"] section > div{position:relative}[slot="foreground"] section > div:before{background-color:var(--background, white);opacity:80%}[slot="foreground"] section div p{margin:0}[slot="foreground"] section div p + p{margin-top:30px}[slot="foreground"] section div h2,[slot="foreground"] section div h3{margin:10px 0 20px 0}@media(min-width: 992px){.splitscreen.svelte-koluze svelte-scroller-background.svelte-koluze{width:calc(100% - 480px) !important;min-width:65%;margin:0 0 0 auto}.splitscreen [slot="foreground"] section div::before{opacity:0}.splitscreen [slot="foreground"] section{width:480px;max-width:35%;margin:0 auto 0 0;background-color:var(--background, white)}}',
  map: null
};
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let widthStyle;
  createEventDispatcher();
  let { id = null } = $$props;
  let { splitscreen = false } = $$props;
  let { marginBottom = true } = $$props;
  let { threshold = 0.7 } = $$props;
  let { count = 0 } = $$props;
  let { index = 0 } = $$props;
  let { sectionId = null } = $$props;
  let { offset = 0 } = $$props;
  let { progress = 0 } = $$props;
  let { visible = false } = $$props;
  let outer;
  let foreground;
  let background;
  let offset_top = 0;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.splitscreen === void 0 && $$bindings.splitscreen && splitscreen !== void 0)
    $$bindings.splitscreen(splitscreen);
  if ($$props.marginBottom === void 0 && $$bindings.marginBottom && marginBottom !== void 0)
    $$bindings.marginBottom(marginBottom);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.sectionId === void 0 && $$bindings.sectionId && sectionId !== void 0)
    $$bindings.sectionId(sectionId);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$e);
  style = `
		position: ${"absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${1};
	`;
  widthStyle = "";
  return ` <svelte-scroller-outer${add_attribute("id", id, 0)} class="${["svelte-koluze", splitscreen ? "splitscreen" : ""].join(" ").trim()}"${add_attribute("this", outer, 0)}><svelte-scroller-background-container class="background-container svelte-koluze" style="${escape(style, true) + escape(widthStyle, true)}"><svelte-scroller-background class="svelte-koluze"${add_attribute("this", background, 0)}>${slots.background ? slots.background({}) : ``}</svelte-scroller-background></svelte-scroller-background-container> <svelte-scroller-foreground class="svelte-koluze"${add_attribute("this", foreground, 0)}>${slots.foreground ? slots.foreground({}) : ``}</svelte-scroller-foreground></svelte-scroller-outer> ${marginBottom ? `<div class="ons-spacer"></div>` : ``}`;
});
const ScrollerSection_svelte_svelte_type_style_lang = "";
const css$d = {
  code: '.ons-scroller-section.svelte-oszuw0{position:relative}.ons-scroller-section.svelte-oszuw0::after{content:" ";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;margin:-1rem;background:var(--background, white);opacity:90%}',
  map: null
};
const ScrollerSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { theme = null } = $$props;
  let { title = "" } = $$props;
  let { hideTitle = false } = $$props;
  let section;
  let background;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.hideTitle === void 0 && $$bindings.hideTitle && hideTitle !== void 0)
    $$bindings.hideTitle(hideTitle);
  $$result.css.add(css$d);
  return `<section${add_attribute("data-id", id, 0)}${add_attribute("this", section, 0)}>${validate_component(Container, "Container").$$render(
    $$result,
    {
      theme,
      width: "narrow",
      background: "none"
    },
    {},
    {
      default: () => {
        return `<div class="ons-scroller-section svelte-oszuw0"${add_styles({ "--background": background })}>${title ? `<h2 class="${["section-title", hideTitle ? "ons-u-vh" : ""].join(" ").trim()}">${escape(title)}</h2>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} </section>`;
});
const Section_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".ons-feature__section > p:last-child{margin-bottom:0}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { cls = null } = $$props;
  let { width = "narrow" } = $$props;
  let { title = "" } = $$props;
  let { hideTitle = false } = $$props;
  let { theme = null } = $$props;
  let { themeOverrides = null } = $$props;
  let { background = null } = $$props;
  let { marginTop = false } = $$props;
  let { marginBottom = true } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.cls === void 0 && $$bindings.cls && cls !== void 0)
    $$bindings.cls(cls);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.hideTitle === void 0 && $$bindings.hideTitle && hideTitle !== void 0)
    $$bindings.hideTitle(hideTitle);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.themeOverrides === void 0 && $$bindings.themeOverrides && themeOverrides !== void 0)
    $$bindings.themeOverrides(themeOverrides);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.marginTop === void 0 && $$bindings.marginTop && marginTop !== void 0)
    $$bindings.marginTop(marginTop);
  if ($$props.marginBottom === void 0 && $$bindings.marginBottom && marginBottom !== void 0)
    $$bindings.marginBottom(marginBottom);
  $$result.css.add(css$c);
  return `${validate_component(Container, "Container").$$render(
    $$result,
    {
      id: id ? id : slugify(title),
      cls,
      theme,
      themeOverrides,
      width,
      marginTop,
      marginBottom,
      background
    },
    {},
    {
      default: () => {
        return `<section${add_attribute("aria-label", title, 0)} class="ons-feature__section">${title ? `<h2 class="${["section-title", hideTitle ? "ons-u-vh" : ""].join(" ").trim()}">${escape(title)}</h2>` : ``} ${slots.default ? slots.default({}) : ``}</section>`;
      }
    }
  )}`;
});
const ShareButtons_svelte_svelte_type_style_lang = "";
const Summary_svelte_svelte_type_style_lang = "";
const Tabs_svelte_svelte_type_style_lang = "";
const Titleblock_svelte_svelte_type_style_lang = "";
const Twisty_svelte_svelte_type_style_lang = "";
const Checkbox_svelte_svelte_type_style_lang = "";
const Dropdown_svelte_svelte_type_style_lang = "";
const ErrorPanel_svelte_svelte_type_style_lang = "";
const ErrorSummary_svelte_svelte_type_style_lang = "";
const Input_svelte_svelte_type_style_lang = "";
const Radio_svelte_svelte_type_style_lang = "";
const ChevronIcon_svelte_svelte_type_style_lang = "";
const ClearIcon_svelte_svelte_type_style_lang = "";
const LoadingIcon_svelte_svelte_type_style_lang = "";
const Select_svelte_svelte_type_style_lang$1 = "";
const Select_svelte_svelte_type_style_lang = "";
const Textarea_svelte_svelte_type_style_lang = "";
const Divider_svelte_svelte_type_style_lang = "";
const Em_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".em.svelte-usg3es{padding:1px 4px 1px 4px;font-weight:bold}.nowrap.svelte-usg3es{white-space:nowrap}",
  map: null
};
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text;
  let { color = "lightgrey" } = $$props;
  let { nowrap = true } = $$props;
  function textColor(color2) {
    const rgb2 = parse(color2).rgb;
    if (rgb2) {
      const brightness = (rgb2[0] * 299 + rgb2[1] * 587 + rgb2[2] * 114) / 1e3;
      return brightness > 125 ? "black" : "white";
    }
    return "black";
  }
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.nowrap === void 0 && $$bindings.nowrap && nowrap !== void 0)
    $$bindings.nowrap(nowrap);
  $$result.css.add(css$b);
  text = textColor(color);
  return `<mark class="${["em svelte-usg3es", nowrap ? "nowrap" : ""].join(" ").trim()}" role="presentation"${add_styles({ "background-color": color, "color": text })}>${slots.default ? slots.default({}) : ``} </mark>`;
});
const Table_svelte_svelte_type_style_lang = "";
function canBeZero(val) {
  if (val === 0) {
    return true;
  }
  return val;
}
function makeAccessor(acc) {
  if (!canBeZero(acc))
    return null;
  if (Array.isArray(acc)) {
    return (d) => acc.map((k) => {
      return typeof k !== "function" ? d[k] : k(d);
    });
  } else if (typeof acc !== "function") {
    return (d) => d[acc];
  }
  return acc;
}
function fromEntries(iter) {
  const obj = {};
  for (const pair of iter) {
    if (Object(pair) !== pair) {
      throw new TypeError("iterable for fromEntries should yield objects");
    }
    const { "0": key, "1": val } = pair;
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: val
    });
  }
  return obj;
}
function filterObject(obj, comparisonObj = {}) {
  return fromEntries(Object.entries(obj).filter(([key, value]) => {
    return value !== void 0 && comparisonObj[key] === void 0;
  }));
}
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function calcUniques(data, fields, { sort = false } = {}) {
  if (!Array.isArray(data)) {
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof data}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  }
  const uniques = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let acc;
  let val;
  let set;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    set = /* @__PURE__ */ new Set();
    s = keys[i];
    acc = fields[s];
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          set.add(val[k]);
        }
      } else {
        set.add(val);
      }
    }
    const results = Array.from(set);
    uniques[s] = sort === true ? results.sort() : results;
  }
  return uniques;
}
function calcExtents(data, fields) {
  if (!Array.isArray(data)) {
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof data}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  }
  const extents = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let min;
  let max;
  let acc;
  let val;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    s = keys[i];
    acc = fields[s];
    min = null;
    max = null;
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          if (val[k] !== false && val[k] !== void 0 && val[k] !== null && Number.isNaN(val[k]) === false) {
            if (min === null || val[k] < min) {
              min = val[k];
            }
            if (max === null || val[k] > max) {
              max = val[k];
            }
          }
        }
      } else if (val !== false && val !== void 0 && val !== null && Number.isNaN(val) === false) {
        if (min === null || val < min) {
          min = val;
        }
        if (max === null || val > max) {
          max = val;
        }
      }
    }
    extents[s] = [min, max];
  }
  return extents;
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  return arr1.every((k) => {
    return arr2.includes(k);
  });
}
function isOrdinalDomain(scale) {
  if (typeof scale.bandwidth === "function") {
    return true;
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return true;
  }
  return false;
}
function calcScaleExtents(flatData, getters, activeScales) {
  const scaleGroups = Object.keys(activeScales).reduce((groups, k) => {
    const domainType = isOrdinalDomain(activeScales[k]) === true ? "ordinal" : "other";
    if (!groups[domainType])
      groups[domainType] = {};
    groups[domainType][k] = getters[k];
    return groups;
  }, { ordinal: false, other: false });
  let extents = {};
  if (scaleGroups.ordinal) {
    extents = calcUniques(flatData, scaleGroups.ordinal);
  }
  if (scaleGroups.other) {
    extents = { ...extents, ...calcExtents(flatData, scaleGroups.other) };
  }
  return extents;
}
function partialDomain(domain = [], directive) {
  if (Array.isArray(directive) === true) {
    return directive.map((d, i) => {
      if (d === null) {
        return domain[i];
      }
      return d;
    });
  }
  return domain;
}
function calcDomain(s) {
  return function domainCalc([$extents, $domain]) {
    if (typeof $domain === "function") {
      $domain = $domain($extents[s]);
    }
    return $extents ? partialDomain($extents[s], $domain) : $domain;
  };
}
const defaultScales = {
  x: scaleLinear,
  y: scaleLinear,
  z: scaleLinear,
  r: scaleSqrt
};
function findScaleType(scale) {
  if (scale.constant) {
    return "symlog";
  }
  if (scale.base) {
    return "log";
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return "sqrt";
    }
    return "pow";
  }
  return "other";
}
function identity(d) {
  return d;
}
function log(sign) {
  return (x) => Math.log(sign * x);
}
function exp(sign) {
  return (x) => sign * Math.exp(x);
}
function symlog(c) {
  return (x) => Math.sign(x) * Math.log1p(Math.abs(x / c));
}
function symexp(c) {
  return (x) => Math.sign(x) * Math.expm1(Math.abs(x)) * c;
}
function pow(exponent) {
  return function powFn(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}
function getPadFunctions(scale) {
  const scaleType = findScaleType(scale);
  if (scaleType === "log") {
    const sign = Math.sign(scale.domain()[0]);
    return { lift: log(sign), ground: exp(sign), scaleType };
  }
  if (scaleType === "pow") {
    const exponent = 1;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "sqrt") {
    const exponent = 0.5;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "symlog") {
    const constant = 1;
    return { lift: symlog(constant), ground: symexp(constant), scaleType };
  }
  return { lift: identity, ground: identity, scaleType };
}
function toTitleCase(str) {
  return str.replace(/^\w/, (d) => d.toUpperCase());
}
function f(name, modifier = "") {
  return `scale${toTitleCase(modifier)}${toTitleCase(name)}`;
}
function findScaleName(scale) {
  if (typeof scale.bandwidth === "function") {
    if (typeof scale.paddingInner === "function") {
      return f("band");
    }
    return f("point");
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return f("ordinal");
  }
  let modifier = "";
  if (scale.interpolator) {
    if (scale.domain().length === 3) {
      modifier = "diverging";
    } else {
      modifier = "sequential";
    }
  }
  if (scale.quantiles) {
    return f("quantile", modifier);
  }
  if (scale.thresholds) {
    return f("quantize", modifier);
  }
  if (scale.constant) {
    return f("symlog", modifier);
  }
  if (scale.base) {
    return f("log", modifier);
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return f("sqrt", modifier);
    }
    return f("pow", modifier);
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "invertExtent", "unknown", "copy"])) {
    return f("threshold");
  }
  if (arraysEqual(Object.keys(scale), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"])) {
    return f("identity");
  }
  if (arraysEqual(Object.keys(scale), [
    "invert",
    "domain",
    "range",
    "rangeRound",
    "round",
    "clamp",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ])) {
    return f("radial");
  }
  if (modifier) {
    return f(modifier);
  }
  if (scale.domain()[0] instanceof Date) {
    const d = /* @__PURE__ */ new Date();
    let s;
    d.getDay = () => s = "time";
    d.getUTCDay = () => s = "utc";
    scale.tickFormat(0, "%a")(d);
    return f(s);
  }
  return f("linear");
}
const unpaddable = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function padScale(scale, padding) {
  if (typeof scale.range !== "function") {
    console.log(scale);
    throw new Error("Scale method `range` must be a function");
  }
  if (typeof scale.domain !== "function") {
    throw new Error("Scale method `domain` must be a function");
  }
  if (!Array.isArray(padding) || unpaddable.includes(findScaleName(scale))) {
    return scale.domain();
  }
  if (isOrdinalDomain(scale) === true) {
    return scale.domain();
  }
  const { lift, ground } = getPadFunctions(scale);
  const d0 = scale.domain()[0];
  const isTime = Object.prototype.toString.call(d0) === "[object Date]";
  const [d1, d2] = scale.domain().map((d) => {
    return isTime ? lift(d.getTime()) : lift(d);
  });
  const [r1, r2] = scale.range();
  const paddingLeft = padding[0] || 0;
  const paddingRight = padding[1] || 0;
  const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight);
  return [d1 - paddingLeft * step, paddingRight * step + d2].map((d) => {
    return isTime ? ground(new Date(d)) : ground(d);
  });
}
function calcBaseRange(s, width, height, reverse, percentRange) {
  let min;
  let max;
  if (percentRange === true) {
    min = 0;
    max = 100;
  } else {
    min = s === "r" ? 1 : 0;
    max = s === "y" ? height : s === "r" ? 25 : width;
  }
  return reverse === true ? [max, min] : [min, max];
}
function getDefaultRange(s, width, height, reverse, range, percentRange) {
  return !range ? calcBaseRange(s, width, height, reverse, percentRange) : typeof range === "function" ? range({ width, height }) : range;
}
function createScale(s) {
  return function scaleCreator([$scale, $extents, $domain, $padding, $nice, $reverse, $width, $height, $range, $percentScale]) {
    if ($extents === null) {
      return null;
    }
    const defaultRange = getDefaultRange(s, $width, $height, $reverse, $range, $percentScale);
    const scale = $scale === defaultScales[s] ? $scale() : $scale.copy();
    scale.domain($domain);
    if (!scale.interpolator || typeof scale.interpolator === "function" && scale.interpolator().name.startsWith("identity")) {
      scale.range(defaultRange);
    }
    if ($padding) {
      scale.domain(padScale(scale, $padding));
    }
    if ($nice === true || typeof $nice === "number") {
      if (typeof scale.nice === "function") {
        scale.nice(typeof $nice === "number" ? $nice : void 0);
      } else {
        console.error(`[Layer Cake] You set \`${s}Nice: true\` but the ${s}Scale does not have a \`.nice\` method. Ignoring...`);
      }
    }
    return scale;
  };
}
function createGetter([$acc, $scale]) {
  return (d) => {
    const val = $acc(d);
    if (Array.isArray(val)) {
      return val.map((v) => $scale(v));
    }
    return $scale(val);
  };
}
function getRange([$scale]) {
  if (typeof $scale === "function") {
    if (typeof $scale.range === "function") {
      return $scale.range();
    }
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const indent = "    ";
function getRgb(clr) {
  const { r, g, b, opacity: o } = rgb(clr);
  if (![r, g, b].every((c) => c >= 0 && c <= 255)) {
    return false;
  }
  return { r, g, b, o };
}
function contrast({ r, g, b }) {
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? "black" : "white";
}
function printDebug(obj) {
  console.log("/********* LayerCake Debug ************/");
  console.log("Bounding box:");
  printObject(obj.boundingBox);
  console.log("Scales:\n");
  Object.keys(obj.activeGetters).forEach((g) => {
    printScale(g, obj[`${g}Scale`], obj[g]);
  });
  console.log("/************ End LayerCake Debug ***************/\n");
}
function printObject(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${indent}${key}:`, value);
  });
}
function printScale(s, scale, acc) {
  const scaleName = findScaleName(scale);
  console.log(`${indent}${s}:`);
  console.log(`${indent}${indent}Accessor: "${acc.toString()}"`);
  console.log(`${indent}${indent}Type: ${scaleName}`);
  printValues(scale, "domain");
  printValues(scale, "range", " ");
}
function printValues(scale, method, extraSpace = "") {
  const values = scale[method]();
  const colorValues = colorizeArray(values);
  if (colorValues) {
    printColorArray(colorValues, method, values);
  } else {
    console.log(`${indent}${indent}${toTitleCase(method)}:${extraSpace}`, values);
  }
}
function printColorArray(colorValues, method, values) {
  console.log(
    `${indent}${indent}${toTitleCase(method)}:    %cArray%c(${values.length}) ` + colorValues[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...colorValues[1],
    "color: #1478e4"
  );
}
function colorizeArray(arr) {
  const colors = [];
  const a = arr.map((d, i) => {
    const rgbo = getRgb(d);
    if (rgbo !== false) {
      colors.push(rgbo);
      const space = i === arr.length - 1 ? " " : "";
      return `%c ${d}${space}`;
    }
    return d;
  });
  if (colors.length) {
    return [
      `%c[ ${a.join(", ")}`,
      colors.map(
        (d) => `background-color: rgba(${d.r}, ${d.g}, ${d.b}, ${d.o}); color:${contrast(d)};`
      )
    ];
  }
  return null;
}
const LayerCake_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".layercake-container.svelte-vhzpsp,.layercake-container.svelte-vhzpsp *{box-sizing:border-box}.layercake-container.svelte-vhzpsp{width:100%;height:100%}",
  map: null
};
const LayerCake = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yReverseValue;
  let context;
  let $rScale_d, $$unsubscribe_rScale_d;
  let $zScale_d, $$unsubscribe_zScale_d;
  let $yScale_d, $$unsubscribe_yScale_d;
  let $xScale_d, $$unsubscribe_xScale_d;
  let $activeGetters_d, $$unsubscribe_activeGetters_d;
  let $box_d, $$unsubscribe_box_d;
  let $_config, $$unsubscribe__config;
  let $_custom, $$unsubscribe__custom;
  let $_rScale, $$unsubscribe__rScale;
  let $_zScale, $$unsubscribe__zScale;
  let $_yScale, $$unsubscribe__yScale;
  let $_xScale, $$unsubscribe__xScale;
  let $_rRange, $$unsubscribe__rRange;
  let $_zRange, $$unsubscribe__zRange;
  let $_yRange, $$unsubscribe__yRange;
  let $_xRange, $$unsubscribe__xRange;
  let $_rPadding, $$unsubscribe__rPadding;
  let $_zPadding, $$unsubscribe__zPadding;
  let $_yPadding, $$unsubscribe__yPadding;
  let $_xPadding, $$unsubscribe__xPadding;
  let $_rReverse, $$unsubscribe__rReverse;
  let $_zReverse, $$unsubscribe__zReverse;
  let $_yReverse, $$unsubscribe__yReverse;
  let $_xReverse, $$unsubscribe__xReverse;
  let $_rNice, $$unsubscribe__rNice;
  let $_zNice, $$unsubscribe__zNice;
  let $_yNice, $$unsubscribe__yNice;
  let $_xNice, $$unsubscribe__xNice;
  let $_rDomain, $$unsubscribe__rDomain;
  let $_zDomain, $$unsubscribe__zDomain;
  let $_yDomain, $$unsubscribe__yDomain;
  let $_xDomain, $$unsubscribe__xDomain;
  let $_r, $$unsubscribe__r;
  let $_z, $$unsubscribe__z;
  let $_y, $$unsubscribe__y;
  let $_x, $$unsubscribe__x;
  let $_padding, $$unsubscribe__padding;
  let $_flatData, $$unsubscribe__flatData;
  let $_data, $$unsubscribe__data;
  let $_extents, $$unsubscribe__extents;
  let $_containerHeight, $$unsubscribe__containerHeight;
  let $_containerWidth, $$unsubscribe__containerWidth;
  let $_percentRange, $$unsubscribe__percentRange;
  let $width_d, $$unsubscribe_width_d;
  let $height_d, $$unsubscribe_height_d;
  let $aspectRatio_d, $$unsubscribe_aspectRatio_d;
  let $padding_d, $$unsubscribe_padding_d;
  let $extents_d, $$unsubscribe_extents_d;
  let $xDomain_d, $$unsubscribe_xDomain_d;
  let $yDomain_d, $$unsubscribe_yDomain_d;
  let $zDomain_d, $$unsubscribe_zDomain_d;
  let $rDomain_d, $$unsubscribe_rDomain_d;
  let $xRange_d, $$unsubscribe_xRange_d;
  let $yRange_d, $$unsubscribe_yRange_d;
  let $zRange_d, $$unsubscribe_zRange_d;
  let $rRange_d, $$unsubscribe_rRange_d;
  let $xGet_d, $$unsubscribe_xGet_d;
  let $yGet_d, $$unsubscribe_yGet_d;
  let $zGet_d, $$unsubscribe_zGet_d;
  let $rGet_d, $$unsubscribe_rGet_d;
  const printDebug_debounced = debounce(printDebug, 200);
  let { ssr = false } = $$props;
  let { pointerEvents = true } = $$props;
  let { position = "relative" } = $$props;
  let { percentRange = false } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { containerWidth = width || 100 } = $$props;
  let { containerHeight = height || 100 } = $$props;
  let { element = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { z = void 0 } = $$props;
  let { r = void 0 } = $$props;
  let { data = [] } = $$props;
  let { xDomain = void 0 } = $$props;
  let { yDomain = void 0 } = $$props;
  let { zDomain = void 0 } = $$props;
  let { rDomain = void 0 } = $$props;
  let { xNice = false } = $$props;
  let { yNice = false } = $$props;
  let { zNice = false } = $$props;
  let { rNice = false } = $$props;
  let { xPadding = void 0 } = $$props;
  let { yPadding = void 0 } = $$props;
  let { zPadding = void 0 } = $$props;
  let { rPadding = void 0 } = $$props;
  let { xScale = defaultScales.x } = $$props;
  let { yScale = defaultScales.y } = $$props;
  let { zScale = defaultScales.z } = $$props;
  let { rScale = defaultScales.r } = $$props;
  let { xRange = void 0 } = $$props;
  let { yRange = void 0 } = $$props;
  let { zRange = void 0 } = $$props;
  let { rRange = void 0 } = $$props;
  let { xReverse = false } = $$props;
  let { yReverse = void 0 } = $$props;
  let { zReverse = false } = $$props;
  let { rReverse = false } = $$props;
  let { padding = {} } = $$props;
  let { extents = {} } = $$props;
  let { flatData = void 0 } = $$props;
  let { custom = {} } = $$props;
  let { debug = false } = $$props;
  let isMounted = false;
  const config = {};
  const _percentRange = writable(percentRange);
  $$unsubscribe__percentRange = subscribe(_percentRange, (value) => $_percentRange = value);
  const _containerWidth = writable(containerWidth);
  $$unsubscribe__containerWidth = subscribe(_containerWidth, (value) => $_containerWidth = value);
  const _containerHeight = writable(containerHeight);
  $$unsubscribe__containerHeight = subscribe(_containerHeight, (value) => $_containerHeight = value);
  const _extents = writable(filterObject(extents));
  $$unsubscribe__extents = subscribe(_extents, (value) => $_extents = value);
  const _data = writable(data);
  $$unsubscribe__data = subscribe(_data, (value) => $_data = value);
  const _flatData = writable(flatData || data);
  $$unsubscribe__flatData = subscribe(_flatData, (value) => $_flatData = value);
  const _padding = writable(padding);
  $$unsubscribe__padding = subscribe(_padding, (value) => $_padding = value);
  const _x = writable(makeAccessor(x));
  $$unsubscribe__x = subscribe(_x, (value) => $_x = value);
  const _y = writable(makeAccessor(y));
  $$unsubscribe__y = subscribe(_y, (value) => $_y = value);
  const _z = writable(makeAccessor(z));
  $$unsubscribe__z = subscribe(_z, (value) => $_z = value);
  const _r = writable(makeAccessor(r));
  $$unsubscribe__r = subscribe(_r, (value) => $_r = value);
  const _xDomain = writable(xDomain);
  $$unsubscribe__xDomain = subscribe(_xDomain, (value) => $_xDomain = value);
  const _yDomain = writable(yDomain);
  $$unsubscribe__yDomain = subscribe(_yDomain, (value) => $_yDomain = value);
  const _zDomain = writable(zDomain);
  $$unsubscribe__zDomain = subscribe(_zDomain, (value) => $_zDomain = value);
  const _rDomain = writable(rDomain);
  $$unsubscribe__rDomain = subscribe(_rDomain, (value) => $_rDomain = value);
  const _xNice = writable(xNice);
  $$unsubscribe__xNice = subscribe(_xNice, (value) => $_xNice = value);
  const _yNice = writable(yNice);
  $$unsubscribe__yNice = subscribe(_yNice, (value) => $_yNice = value);
  const _zNice = writable(zNice);
  $$unsubscribe__zNice = subscribe(_zNice, (value) => $_zNice = value);
  const _rNice = writable(rNice);
  $$unsubscribe__rNice = subscribe(_rNice, (value) => $_rNice = value);
  const _xReverse = writable(xReverse);
  $$unsubscribe__xReverse = subscribe(_xReverse, (value) => $_xReverse = value);
  const _yReverse = writable(yReverseValue);
  $$unsubscribe__yReverse = subscribe(_yReverse, (value) => $_yReverse = value);
  const _zReverse = writable(zReverse);
  $$unsubscribe__zReverse = subscribe(_zReverse, (value) => $_zReverse = value);
  const _rReverse = writable(rReverse);
  $$unsubscribe__rReverse = subscribe(_rReverse, (value) => $_rReverse = value);
  const _xPadding = writable(xPadding);
  $$unsubscribe__xPadding = subscribe(_xPadding, (value) => $_xPadding = value);
  const _yPadding = writable(yPadding);
  $$unsubscribe__yPadding = subscribe(_yPadding, (value) => $_yPadding = value);
  const _zPadding = writable(zPadding);
  $$unsubscribe__zPadding = subscribe(_zPadding, (value) => $_zPadding = value);
  const _rPadding = writable(rPadding);
  $$unsubscribe__rPadding = subscribe(_rPadding, (value) => $_rPadding = value);
  const _xRange = writable(xRange);
  $$unsubscribe__xRange = subscribe(_xRange, (value) => $_xRange = value);
  const _yRange = writable(yRange);
  $$unsubscribe__yRange = subscribe(_yRange, (value) => $_yRange = value);
  const _zRange = writable(zRange);
  $$unsubscribe__zRange = subscribe(_zRange, (value) => $_zRange = value);
  const _rRange = writable(rRange);
  $$unsubscribe__rRange = subscribe(_rRange, (value) => $_rRange = value);
  const _xScale = writable(xScale);
  $$unsubscribe__xScale = subscribe(_xScale, (value) => $_xScale = value);
  const _yScale = writable(yScale);
  $$unsubscribe__yScale = subscribe(_yScale, (value) => $_yScale = value);
  const _zScale = writable(zScale);
  $$unsubscribe__zScale = subscribe(_zScale, (value) => $_zScale = value);
  const _rScale = writable(rScale);
  $$unsubscribe__rScale = subscribe(_rScale, (value) => $_rScale = value);
  const _config = writable(config);
  $$unsubscribe__config = subscribe(_config, (value) => $_config = value);
  const _custom = writable(custom);
  $$unsubscribe__custom = subscribe(_custom, (value) => $_custom = value);
  const activeGetters_d = derived([_x, _y, _z, _r], ([$x, $y, $z, $r]) => {
    const obj = {};
    if ($x) {
      obj.x = $x;
    }
    if ($y) {
      obj.y = $y;
    }
    if ($z) {
      obj.z = $z;
    }
    if ($r) {
      obj.r = $r;
    }
    return obj;
  });
  $$unsubscribe_activeGetters_d = subscribe(activeGetters_d, (value) => $activeGetters_d = value);
  const padding_d = derived([_padding, _containerWidth, _containerHeight], ([$padding]) => {
    const defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };
    return Object.assign(defaultPadding, $padding);
  });
  $$unsubscribe_padding_d = subscribe(padding_d, (value) => $padding_d = value);
  const box_d = derived([_containerWidth, _containerHeight, padding_d], ([$containerWidth, $containerHeight, $padding]) => {
    const b = {};
    b.top = $padding.top;
    b.right = $containerWidth - $padding.right;
    b.bottom = $containerHeight - $padding.bottom;
    b.left = $padding.left;
    b.width = b.right - b.left;
    b.height = b.bottom - b.top;
    if (b.width <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?");
    }
    if (b.height <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?");
    }
    return b;
  });
  $$unsubscribe_box_d = subscribe(box_d, (value) => $box_d = value);
  const width_d = derived([box_d], ([$box]) => {
    return $box.width;
  });
  $$unsubscribe_width_d = subscribe(width_d, (value) => $width_d = value);
  const height_d = derived([box_d], ([$box]) => {
    return $box.height;
  });
  $$unsubscribe_height_d = subscribe(height_d, (value) => $height_d = value);
  const extents_d = derived([_flatData, activeGetters_d, _extents, _xScale, _yScale, _rScale, _zScale], ([$flatData, $activeGetters, $extents, $_xScale2, $_yScale2, $_rScale2, $_zScale2]) => {
    const scaleLookup = {
      x: $_xScale2,
      y: $_yScale2,
      r: $_rScale2,
      z: $_zScale2
    };
    const getters = filterObject($activeGetters, $extents);
    const activeScales = Object.fromEntries(Object.keys(getters).map((k) => [k, scaleLookup[k]]));
    if (Object.keys(getters).length > 0) {
      const calculatedExtents = calcScaleExtents($flatData, getters, activeScales);
      return { ...calculatedExtents, ...$extents };
    } else {
      return {};
    }
  });
  $$unsubscribe_extents_d = subscribe(extents_d, (value) => $extents_d = value);
  const xDomain_d = derived([extents_d, _xDomain], calcDomain("x"));
  $$unsubscribe_xDomain_d = subscribe(xDomain_d, (value) => $xDomain_d = value);
  const yDomain_d = derived([extents_d, _yDomain], calcDomain("y"));
  $$unsubscribe_yDomain_d = subscribe(yDomain_d, (value) => $yDomain_d = value);
  const zDomain_d = derived([extents_d, _zDomain], calcDomain("z"));
  $$unsubscribe_zDomain_d = subscribe(zDomain_d, (value) => $zDomain_d = value);
  const rDomain_d = derived([extents_d, _rDomain], calcDomain("r"));
  $$unsubscribe_rDomain_d = subscribe(rDomain_d, (value) => $rDomain_d = value);
  const xScale_d = derived(
    [
      _xScale,
      extents_d,
      xDomain_d,
      _xPadding,
      _xNice,
      _xReverse,
      width_d,
      height_d,
      _xRange,
      _percentRange
    ],
    createScale("x")
  );
  $$unsubscribe_xScale_d = subscribe(xScale_d, (value) => $xScale_d = value);
  const xGet_d = derived([_x, xScale_d], createGetter);
  $$unsubscribe_xGet_d = subscribe(xGet_d, (value) => $xGet_d = value);
  const yScale_d = derived(
    [
      _yScale,
      extents_d,
      yDomain_d,
      _yPadding,
      _yNice,
      _yReverse,
      width_d,
      height_d,
      _yRange,
      _percentRange
    ],
    createScale("y")
  );
  $$unsubscribe_yScale_d = subscribe(yScale_d, (value) => $yScale_d = value);
  const yGet_d = derived([_y, yScale_d], createGetter);
  $$unsubscribe_yGet_d = subscribe(yGet_d, (value) => $yGet_d = value);
  const zScale_d = derived(
    [
      _zScale,
      extents_d,
      zDomain_d,
      _zPadding,
      _zNice,
      _zReverse,
      width_d,
      height_d,
      _zRange,
      _percentRange
    ],
    createScale("z")
  );
  $$unsubscribe_zScale_d = subscribe(zScale_d, (value) => $zScale_d = value);
  const zGet_d = derived([_z, zScale_d], createGetter);
  $$unsubscribe_zGet_d = subscribe(zGet_d, (value) => $zGet_d = value);
  const rScale_d = derived(
    [
      _rScale,
      extents_d,
      rDomain_d,
      _rPadding,
      _rNice,
      _rReverse,
      width_d,
      height_d,
      _rRange,
      _percentRange
    ],
    createScale("r")
  );
  $$unsubscribe_rScale_d = subscribe(rScale_d, (value) => $rScale_d = value);
  const rGet_d = derived([_r, rScale_d], createGetter);
  $$unsubscribe_rGet_d = subscribe(rGet_d, (value) => $rGet_d = value);
  const xRange_d = derived([xScale_d], getRange);
  $$unsubscribe_xRange_d = subscribe(xRange_d, (value) => $xRange_d = value);
  const yRange_d = derived([yScale_d], getRange);
  $$unsubscribe_yRange_d = subscribe(yRange_d, (value) => $yRange_d = value);
  const zRange_d = derived([zScale_d], getRange);
  $$unsubscribe_zRange_d = subscribe(zRange_d, (value) => $zRange_d = value);
  const rRange_d = derived([rScale_d], getRange);
  $$unsubscribe_rRange_d = subscribe(rRange_d, (value) => $rRange_d = value);
  const aspectRatio_d = derived([width_d, height_d], ([$width, $height]) => {
    return $width / $height;
  });
  $$unsubscribe_aspectRatio_d = subscribe(aspectRatio_d, (value) => $aspectRatio_d = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.percentRange === void 0 && $$bindings.percentRange && percentRange !== void 0)
    $$bindings.percentRange(percentRange);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0)
    $$bindings.containerWidth(containerWidth);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0)
    $$bindings.containerHeight(containerHeight);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.z === void 0 && $$bindings.z && z !== void 0)
    $$bindings.z(z);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xDomain === void 0 && $$bindings.xDomain && xDomain !== void 0)
    $$bindings.xDomain(xDomain);
  if ($$props.yDomain === void 0 && $$bindings.yDomain && yDomain !== void 0)
    $$bindings.yDomain(yDomain);
  if ($$props.zDomain === void 0 && $$bindings.zDomain && zDomain !== void 0)
    $$bindings.zDomain(zDomain);
  if ($$props.rDomain === void 0 && $$bindings.rDomain && rDomain !== void 0)
    $$bindings.rDomain(rDomain);
  if ($$props.xNice === void 0 && $$bindings.xNice && xNice !== void 0)
    $$bindings.xNice(xNice);
  if ($$props.yNice === void 0 && $$bindings.yNice && yNice !== void 0)
    $$bindings.yNice(yNice);
  if ($$props.zNice === void 0 && $$bindings.zNice && zNice !== void 0)
    $$bindings.zNice(zNice);
  if ($$props.rNice === void 0 && $$bindings.rNice && rNice !== void 0)
    $$bindings.rNice(rNice);
  if ($$props.xPadding === void 0 && $$bindings.xPadding && xPadding !== void 0)
    $$bindings.xPadding(xPadding);
  if ($$props.yPadding === void 0 && $$bindings.yPadding && yPadding !== void 0)
    $$bindings.yPadding(yPadding);
  if ($$props.zPadding === void 0 && $$bindings.zPadding && zPadding !== void 0)
    $$bindings.zPadding(zPadding);
  if ($$props.rPadding === void 0 && $$bindings.rPadding && rPadding !== void 0)
    $$bindings.rPadding(rPadding);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.zScale === void 0 && $$bindings.zScale && zScale !== void 0)
    $$bindings.zScale(zScale);
  if ($$props.rScale === void 0 && $$bindings.rScale && rScale !== void 0)
    $$bindings.rScale(rScale);
  if ($$props.xRange === void 0 && $$bindings.xRange && xRange !== void 0)
    $$bindings.xRange(xRange);
  if ($$props.yRange === void 0 && $$bindings.yRange && yRange !== void 0)
    $$bindings.yRange(yRange);
  if ($$props.zRange === void 0 && $$bindings.zRange && zRange !== void 0)
    $$bindings.zRange(zRange);
  if ($$props.rRange === void 0 && $$bindings.rRange && rRange !== void 0)
    $$bindings.rRange(rRange);
  if ($$props.xReverse === void 0 && $$bindings.xReverse && xReverse !== void 0)
    $$bindings.xReverse(xReverse);
  if ($$props.yReverse === void 0 && $$bindings.yReverse && yReverse !== void 0)
    $$bindings.yReverse(yReverse);
  if ($$props.zReverse === void 0 && $$bindings.zReverse && zReverse !== void 0)
    $$bindings.zReverse(zReverse);
  if ($$props.rReverse === void 0 && $$bindings.rReverse && rReverse !== void 0)
    $$bindings.rReverse(rReverse);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.extents === void 0 && $$bindings.extents && extents !== void 0)
    $$bindings.extents(extents);
  if ($$props.flatData === void 0 && $$bindings.flatData && flatData !== void 0)
    $$bindings.flatData(flatData);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  $$result.css.add(css$a);
  yReverseValue = typeof yReverse === "undefined" ? typeof yScale.bandwidth === "function" ? false : true : yReverse;
  {
    if (x)
      config.x = x;
  }
  {
    if (y)
      config.y = y;
  }
  {
    if (z)
      config.z = z;
  }
  {
    if (r)
      config.r = r;
  }
  {
    if (xDomain)
      config.xDomain = xDomain;
  }
  {
    if (yDomain)
      config.yDomain = yDomain;
  }
  {
    if (zDomain)
      config.zDomain = zDomain;
  }
  {
    if (rDomain)
      config.rDomain = rDomain;
  }
  {
    if (xRange)
      config.xRange = xRange;
  }
  {
    if (yRange)
      config.yRange = yRange;
  }
  {
    if (zRange)
      config.zRange = zRange;
  }
  {
    if (rRange)
      config.rRange = rRange;
  }
  set_store_value(_percentRange, $_percentRange = percentRange, $_percentRange);
  set_store_value(_containerWidth, $_containerWidth = containerWidth, $_containerWidth);
  set_store_value(_containerHeight, $_containerHeight = containerHeight, $_containerHeight);
  set_store_value(_extents, $_extents = filterObject(extents), $_extents);
  set_store_value(_data, $_data = data, $_data);
  set_store_value(_flatData, $_flatData = flatData || data, $_flatData);
  set_store_value(_padding, $_padding = padding, $_padding);
  set_store_value(_x, $_x = makeAccessor(x), $_x);
  set_store_value(_y, $_y = makeAccessor(y), $_y);
  set_store_value(_z, $_z = makeAccessor(z), $_z);
  set_store_value(_r, $_r = makeAccessor(r), $_r);
  set_store_value(_xDomain, $_xDomain = xDomain, $_xDomain);
  set_store_value(_yDomain, $_yDomain = yDomain, $_yDomain);
  set_store_value(_zDomain, $_zDomain = zDomain, $_zDomain);
  set_store_value(_rDomain, $_rDomain = rDomain, $_rDomain);
  set_store_value(_xNice, $_xNice = xNice, $_xNice);
  set_store_value(_yNice, $_yNice = yNice, $_yNice);
  set_store_value(_zNice, $_zNice = zNice, $_zNice);
  set_store_value(_rNice, $_rNice = rNice, $_rNice);
  set_store_value(_xReverse, $_xReverse = xReverse, $_xReverse);
  set_store_value(_yReverse, $_yReverse = yReverseValue, $_yReverse);
  set_store_value(_zReverse, $_zReverse = zReverse, $_zReverse);
  set_store_value(_rReverse, $_rReverse = rReverse, $_rReverse);
  set_store_value(_xPadding, $_xPadding = xPadding, $_xPadding);
  set_store_value(_yPadding, $_yPadding = yPadding, $_yPadding);
  set_store_value(_zPadding, $_zPadding = zPadding, $_zPadding);
  set_store_value(_rPadding, $_rPadding = rPadding, $_rPadding);
  set_store_value(_xRange, $_xRange = xRange, $_xRange);
  set_store_value(_yRange, $_yRange = yRange, $_yRange);
  set_store_value(_zRange, $_zRange = zRange, $_zRange);
  set_store_value(_rRange, $_rRange = rRange, $_rRange);
  set_store_value(_xScale, $_xScale = xScale, $_xScale);
  set_store_value(_yScale, $_yScale = yScale, $_yScale);
  set_store_value(_zScale, $_zScale = zScale, $_zScale);
  set_store_value(_rScale, $_rScale = rScale, $_rScale);
  set_store_value(_custom, $_custom = custom, $_custom);
  set_store_value(_config, $_config = config, $_config);
  context = {
    activeGetters: activeGetters_d,
    width: width_d,
    height: height_d,
    percentRange: _percentRange,
    aspectRatio: aspectRatio_d,
    containerWidth: _containerWidth,
    containerHeight: _containerHeight,
    x: _x,
    y: _y,
    z: _z,
    r: _r,
    custom: _custom,
    data: _data,
    xNice: _xNice,
    yNice: _yNice,
    zNice: _zNice,
    rNice: _rNice,
    xReverse: _xReverse,
    yReverse: _yReverse,
    zReverse: _zReverse,
    rReverse: _rReverse,
    xPadding: _xPadding,
    yPadding: _yPadding,
    zPadding: _zPadding,
    rPadding: _rPadding,
    padding: padding_d,
    flatData: _flatData,
    extents: extents_d,
    xDomain: xDomain_d,
    yDomain: yDomain_d,
    zDomain: zDomain_d,
    rDomain: rDomain_d,
    xRange: xRange_d,
    yRange: yRange_d,
    zRange: zRange_d,
    rRange: rRange_d,
    config: _config,
    xScale: xScale_d,
    xGet: xGet_d,
    yScale: yScale_d,
    yGet: yGet_d,
    zScale: zScale_d,
    zGet: zGet_d,
    rScale: rScale_d,
    rGet: rGet_d
  };
  {
    setContext("LayerCake", context);
  }
  {
    if ($box_d && debug === true && (ssr === true || typeof window !== "undefined")) {
      printDebug_debounced({
        boundingBox: $box_d,
        activeGetters: $activeGetters_d,
        x: config.x,
        y: config.y,
        z: config.z,
        r: config.r,
        xScale: $xScale_d,
        yScale: $yScale_d,
        zScale: $zScale_d,
        rScale: $rScale_d
      });
    }
  }
  $$unsubscribe_rScale_d();
  $$unsubscribe_zScale_d();
  $$unsubscribe_yScale_d();
  $$unsubscribe_xScale_d();
  $$unsubscribe_activeGetters_d();
  $$unsubscribe_box_d();
  $$unsubscribe__config();
  $$unsubscribe__custom();
  $$unsubscribe__rScale();
  $$unsubscribe__zScale();
  $$unsubscribe__yScale();
  $$unsubscribe__xScale();
  $$unsubscribe__rRange();
  $$unsubscribe__zRange();
  $$unsubscribe__yRange();
  $$unsubscribe__xRange();
  $$unsubscribe__rPadding();
  $$unsubscribe__zPadding();
  $$unsubscribe__yPadding();
  $$unsubscribe__xPadding();
  $$unsubscribe__rReverse();
  $$unsubscribe__zReverse();
  $$unsubscribe__yReverse();
  $$unsubscribe__xReverse();
  $$unsubscribe__rNice();
  $$unsubscribe__zNice();
  $$unsubscribe__yNice();
  $$unsubscribe__xNice();
  $$unsubscribe__rDomain();
  $$unsubscribe__zDomain();
  $$unsubscribe__yDomain();
  $$unsubscribe__xDomain();
  $$unsubscribe__r();
  $$unsubscribe__z();
  $$unsubscribe__y();
  $$unsubscribe__x();
  $$unsubscribe__padding();
  $$unsubscribe__flatData();
  $$unsubscribe__data();
  $$unsubscribe__extents();
  $$unsubscribe__containerHeight();
  $$unsubscribe__containerWidth();
  $$unsubscribe__percentRange();
  $$unsubscribe_width_d();
  $$unsubscribe_height_d();
  $$unsubscribe_aspectRatio_d();
  $$unsubscribe_padding_d();
  $$unsubscribe_extents_d();
  $$unsubscribe_xDomain_d();
  $$unsubscribe_yDomain_d();
  $$unsubscribe_zDomain_d();
  $$unsubscribe_rDomain_d();
  $$unsubscribe_xRange_d();
  $$unsubscribe_yRange_d();
  $$unsubscribe_zRange_d();
  $$unsubscribe_rRange_d();
  $$unsubscribe_xGet_d();
  $$unsubscribe_yGet_d();
  $$unsubscribe_zGet_d();
  $$unsubscribe_rGet_d();
  return `  ${ssr === true || typeof window !== "undefined" ? `<div class="layercake-container svelte-vhzpsp"${add_styles({
    position,
    "top": position === "absolute" ? "0" : null,
    "right": position === "absolute" ? "0" : null,
    "bottom": position === "absolute" ? "0" : null,
    "left": position === "absolute" ? "0" : null,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({
    element,
    width: $width_d,
    height: $height_d,
    aspectRatio: $aspectRatio_d,
    containerWidth: $_containerWidth,
    containerHeight: $_containerHeight,
    activeGetters: $activeGetters_d,
    percentRange: $_percentRange,
    x: $_x,
    y: $_y,
    z: $_z,
    r: $_r,
    custom: $_custom,
    data: $_data,
    xNice: $_xNice,
    yNice: $_yNice,
    zNice: $_zNice,
    rNice: $_rNice,
    xReverse: $_xReverse,
    yReverse: $_yReverse,
    zReverse: $_zReverse,
    rReverse: $_rReverse,
    xPadding: $_xPadding,
    yPadding: $_yPadding,
    zPadding: $_zPadding,
    rPadding: $_rPadding,
    padding: $padding_d,
    flatData: $_flatData,
    extents: $extents_d,
    xDomain: $xDomain_d,
    yDomain: $yDomain_d,
    zDomain: $zDomain_d,
    rDomain: $rDomain_d,
    xRange: $xRange_d,
    yRange: $yRange_d,
    zRange: $zRange_d,
    rRange: $rRange_d,
    config: $_config,
    xScale: $xScale_d,
    xGet: $xGet_d,
    yScale: $yScale_d,
    yGet: $yGet_d,
    zScale: $zScale_d,
    zGet: $zGet_d,
    rScale: $rScale_d,
    rGet: $rGet_d
  }) : ``}</div>` : ``}`;
});
const Html_svelte_svelte_type_style_lang = "";
const Svg_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "svg.svelte-u84d8d{position:absolute;top:0;left:0;overflow:visible}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $containerWidth, $$unsubscribe_containerWidth;
  let $containerHeight, $$unsubscribe_containerHeight;
  let $padding, $$unsubscribe_padding;
  let { element = void 0 } = $$props;
  let { innerElement = void 0 } = $$props;
  let { zIndex = void 0 } = $$props;
  let { pointerEvents = void 0 } = $$props;
  let { viewBox = void 0 } = $$props;
  let { label = void 0 } = $$props;
  let { labelledBy = void 0 } = $$props;
  let { describedBy = void 0 } = $$props;
  let { title = void 0 } = $$props;
  const { containerWidth, containerHeight, padding } = getContext("LayerCake");
  $$unsubscribe_containerWidth = subscribe(containerWidth, (value) => $containerWidth = value);
  $$unsubscribe_containerHeight = subscribe(containerHeight, (value) => $containerHeight = value);
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.innerElement === void 0 && $$bindings.innerElement && innerElement !== void 0)
    $$bindings.innerElement(innerElement);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0)
    $$bindings.labelledBy(labelledBy);
  if ($$props.describedBy === void 0 && $$bindings.describedBy && describedBy !== void 0)
    $$bindings.describedBy(describedBy);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$9);
  $$unsubscribe_containerWidth();
  $$unsubscribe_containerHeight();
  $$unsubscribe_padding();
  return `  <svg class="layercake-layout-svg svelte-u84d8d"${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", $containerWidth, 0)}${add_attribute("height", $containerHeight, 0)}${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledBy, 0)}${add_attribute("aria-describedby", describedBy, 0)}${add_styles({
    "z-index": zIndex,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}>${slots.title ? slots.title({}) : `${title ? `<title>${escape(title)}</title>` : ``}`}<defs>${slots.defs ? slots.defs({}) : ``}</defs><g class="layercake-layout-svg_g" transform="${"translate(" + escape($padding.left, true) + ", " + escape($padding.top, true) + ")"}"${add_attribute("this", innerElement, 0)}>${slots.default ? slots.default({ element }) : ``}</g></svg>`;
});
const ScaledSvg_svelte_svelte_type_style_lang = "";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity$1,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
function groupData(data, domain, key) {
  let groups = [];
  if (key) {
    domain.forEach((group) => {
      groups.push(data.filter((d) => d[key] == group));
    });
  } else {
    groups = [data];
  }
  return groups;
}
function stackData(data, domain, valKey, grpKey) {
  let groups = [];
  let base = JSON.parse(JSON.stringify(data.filter((d) => d[grpKey] == domain[0])));
  base.forEach((d) => d[valKey] = 0);
  domain.forEach((group) => {
    let clone = JSON.parse(JSON.stringify(data.filter((d) => d[grpKey] == group)));
    clone.forEach((d, i) => {
      d[valKey] += base[i][valKey];
      base[i][valKey] = d[valKey];
    });
    groups.push(clone);
  });
  return groups;
}
function commas(num) {
  const parts = String(num).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
const seed = 1;
const randomness1 = 5;
const randomness2 = 2;
class AccurateBeeswarm {
  constructor(items, radiusFun, xFun, padding, yOffset) {
    this.items = items;
    this.radiusFun = radiusFun;
    this.xFun = xFun;
    this.padding = padding;
    this.yOffset = yOffset;
    this.tieBreakFn = this._sfc32(2654435769, 608135816, 3084996962, seed);
    this.maxR = Math.max(...items.map((d) => radiusFun(d)));
    this.rng = this._sfc32(1, 2, 3, seed);
  }
  calculateYPositions() {
    let all = this.items.map((d, i) => ({
      datum: d,
      originalIndex: i,
      x: this.xFun(d),
      r: this.radiusFun(d) + this.padding,
      y: null,
      placed: false
    })).sort((a, b) => a.x - b.x);
    all.forEach(function(d, i) {
      d.index = i;
    });
    let tieBreakFn = this.tieBreakFn;
    all.forEach(function(d) {
      d.tieBreaker = tieBreakFn(d.x);
    });
    let allSortedByPriority = [...all].sort((a, b) => {
      let key_a = this.radiusFun(a.datum) + a.tieBreaker * randomness1;
      let key_b = this.radiusFun(b.datum) + b.tieBreaker * randomness1;
      if (key_a != key_b)
        return key_b - key_a;
      return a.x - b.x;
    });
    for (let item of allSortedByPriority) {
      item.placed = true;
      item.y = this._getBestYPosition(item, all);
    }
    all.sort((a, b) => a.originalIndex - b.originalIndex);
    return all.map((d) => ({
      x: d.x,
      y: d.y + this.yOffset,
      r: this.radiusFun(d.datum)
    }));
  }
  // Random number generator (for reproducibility)
  // https://stackoverflow.com/a/47593316
  _sfc32(a, b, c, d) {
    let rng = function() {
      a >>>= 0;
      b >>>= 0;
      c >>>= 0;
      d >>>= 0;
      var t = a + b | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = c << 21 | c >>> 11;
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    };
    for (let i = 0; i < 10; i++) {
      rng();
    }
    return rng;
  }
  _getBestYPosition(item, all) {
    let forbiddenIntervals = [];
    for (let step of [-1, 1]) {
      let xDist;
      let r = item.r;
      for (let i = item.index + step; i >= 0 && i < all.length && (xDist = Math.abs(item.x - all[i].x)) < r + this.maxR; i += step) {
        let other = all[i];
        if (!other.placed)
          continue;
        let sumOfRadii = r + other.r;
        if (xDist >= r + other.r)
          continue;
        let yDist = Math.sqrt(sumOfRadii * sumOfRadii - xDist * xDist);
        let forbiddenInterval = [other.y - yDist, other.y + yDist];
        forbiddenIntervals.push(forbiddenInterval);
      }
    }
    if (forbiddenIntervals.length == 0) {
      return item.r * (this.rng() - 0.5) * randomness2;
    }
    let candidatePositions = forbiddenIntervals.flat();
    candidatePositions.push(0);
    candidatePositions.sort((a, b) => {
      let abs_a = Math.abs(a);
      let abs_b = Math.abs(b);
      if (abs_a < abs_b)
        return -1;
      if (abs_a > abs_b)
        return 1;
      return a - b;
    });
    for (let i = 0; i < candidatePositions.length; i++) {
      let position = candidatePositions[i];
      if (forbiddenIntervals.every(
        (interval) => position <= interval[0] || position >= interval[1]
      )) {
        return position;
      }
    }
  }
}
const SetCoords = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yScale, $$unsubscribe_yScale;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $xGet, $$unsubscribe_xGet;
  let $rRange, $$unsubscribe_rRange;
  let $rGet, $$unsubscribe_rGet;
  let $yDomain, $$unsubscribe_yDomain;
  let $yGet, $$unsubscribe_yGet;
  let $xDomain, $$unsubscribe_xDomain;
  let $width, $$unsubscribe_width;
  let $r, $$unsubscribe_r;
  let $y, $$unsubscribe_y;
  let $x, $$unsubscribe_x;
  let $custom, $$unsubscribe_custom;
  let $data, $$unsubscribe_data;
  const { data, x, y, r, xGet, yGet, rGet, xScale, yScale, yRange, rRange, xDomain, yDomain, custom, width } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_x = subscribe(x, (value) => $x = value);
  $$unsubscribe_y = subscribe(y, (value) => $y = value);
  $$unsubscribe_r = subscribe(r, (value) => $r = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_rGet = subscribe(rGet, (value) => $rGet = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  $$unsubscribe_rRange = subscribe(rRange, (value) => $rRange = value);
  $$unsubscribe_xDomain = subscribe(xDomain, (value) => $xDomain = value);
  $$unsubscribe_yDomain = subscribe(yDomain, (value) => $yDomain = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  $$unsubscribe_width = subscribe(width, (value) => $width = value);
  let coords = $custom.coords;
  let type = $custom.type;
  let prevWidth = $width;
  function setCoords(data2, custom2, x2, y2, r2, width2) {
    let mode = custom2.mode;
    let padding = custom2.padding;
    let duration = custom2.animation && width2 == prevWidth ? custom2.duration : 0;
    prevWidth = width2;
    let newcoords;
    if (type == "bar") {
      let xpos = [];
      let xneg = [];
      newcoords = data2.map((d, i) => {
        return d.map((e, j) => {
          if (!xpos[j])
            xpos[j] = 0;
          if (!xneg[j])
            xneg[j] = 0;
          let x0 = mode == "default" || mode == "grouped" || mode == "comparison" && i == 0 ? $xDomain[0] : mode == "stacked" && x2(e) >= 0 ? xpos[j] : mode == "stacked" ? xneg[j] : x2(e);
          let x1 = mode == "default" || mode == "grouped" || mode == "comparison" && i == 0 ? x2(e) : mode == "stacked" && x2(e) >= 0 ? xpos[j] + x2(e) : mode == "stacked" ? xneg[j] + x2(e) : x2(e);
          if (x2(e) >= 0) {
            xpos[j] += x2(e);
          } else {
            xneg[j] += x2(e);
          }
          let y0 = mode == "grouped" ? $yGet(e) + i * ($yScale.bandwidth() / data2.length) : $yGet(e);
          let y1 = mode == "grouped" ? y0 + $yScale.bandwidth() / data2.length : y0 + $yScale.bandwidth();
          return { x0, x1, y0, y1 };
        });
      });
    } else if (type == "column") {
      let ypos = [];
      let yneg = [];
      newcoords = data2.map((d, i) => {
        return d.map((e, j) => {
          if (!ypos[j])
            ypos[j] = 0;
          if (!yneg[j])
            yneg[j] = 0;
          let x0 = mode == "grouped" && $xScale.bandwidth ? $xGet(e) + i * (1 / data2.length) * $xScale.bandwidth() : mode == "grouped" ? $xGet(e)[0] + i * (1 / data2.length) * Math.max(0, $xGet(e)[1] - $xGet(e)[0]) : $xScale.bandwidth ? $xGet(e) : $xGet(e)[0];
          let x1 = mode == "grouped" && $xScale.bandwidth ? x0 + $xScale.bandwidth() / data2.length : mode == "grouped" ? x0 + Math.max(0, $xGet(e)[1] - $xGet(e)[0]) / data2.length : $xScale.bandwidth ? x0 + $xScale.bandwidth() : x0 + Math.max(0, $xGet(e)[1] - $xGet(e)[0]);
          let y0 = mode == "default" || mode == "grouped" || mode == "comparison" && i == 0 ? $yDomain[0] : mode == "stacked" && y2(e) >= 0 ? ypos[j] : mode == "stacked" ? yneg[j] : y2(e);
          let y1 = mode == "default" || mode == "grouped" || mode == "comparison" && i == 0 ? y2(e) : mode == "stacked" && y2(e) >= 0 ? ypos[j] + y2(e) : mode == "stacked" ? yneg[j] + y2(e) : y2(e);
          if (y2(e) >= 0) {
            ypos[j] += y2(e);
          } else {
            yneg[j] += y2(e);
          }
          return { x0, x1, y0, y1 };
        });
      });
    } else if (type == "scatter") {
      let rVal = (d) => r2 ? $rGet(d) : $rRange[0];
      newcoords = y2 ? data2.map((d) => ({ x: x2(d), y: y2(d), r: rVal(d) })) : new AccurateBeeswarm(data2, (d) => rVal(d), (d) => $xGet(d), padding, $yRange[0] / 2).calculateYPositions().map((d) => ({
        x: $xScale.invert(d.x),
        y: $yScale.invert(d.y),
        r: d.r
      }));
    } else {
      newcoords = data2.map((d) => d.map((e) => {
        return { x: x2(e), y: y2(e) };
      }));
    }
    if (type == "dotplot") {
      console.log(newcoords);
    }
    coords.set(newcoords, { duration });
  }
  {
    setCoords($data, $custom, $x, $y, $r, $width);
  }
  $$unsubscribe_yScale();
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_xGet();
  $$unsubscribe_rRange();
  $$unsubscribe_rGet();
  $$unsubscribe_yDomain();
  $$unsubscribe_yGet();
  $$unsubscribe_xDomain();
  $$unsubscribe_width();
  $$unsubscribe_r();
  $$unsubscribe_y();
  $$unsubscribe_x();
  $$unsubscribe_custom();
  $$unsubscribe_data();
  return ``;
});
const Bar_svelte_svelte_type_style_lang = "";
const AxisX_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".tick.svelte-1b8cddl.svelte-1b8cddl{font-size:.8em}.tick.svelte-1b8cddl .tick-mark.svelte-1b8cddl,.tick.tick-0.svelte-1b8cddl line.svelte-1b8cddl{stroke-dasharray:0}.tick.svelte-1b8cddl line.svelte-1b8cddl{shape-rendering:crispEdges}.dashed.svelte-1b8cddl.svelte-1b8cddl{stroke-dasharray:2}.axis.snapTicks.svelte-1b8cddl .tick:last-child text.svelte-1b8cddl{transform:translateX(3px)}.axis.snapTicks.svelte-1b8cddl .tick.tick-0 text.svelte-1b8cddl{transform:translateX(-3px)}",
  map: null
};
const AxisX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $height, $$unsubscribe_height;
  const { width, height, xScale, yRange } = getContext("LayerCake");
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  let { gridlines = true } = $$props;
  let { tickDashed = false } = $$props;
  let { tickMarks = false } = $$props;
  let { tickColor = "#b3b3b3" } = $$props;
  let { textColor = "#707070" } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { snapTicks = false } = $$props;
  let { ticks = void 0 } = $$props;
  let { xTick = void 0 } = $$props;
  let { yTick = 16 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = tickMarks ? 8 : 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.tickDashed === void 0 && $$bindings.tickDashed && tickDashed !== void 0)
    $$bindings.tickDashed(tickDashed);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0)
    $$bindings.tickMarks(tickMarks);
  if ($$props.tickColor === void 0 && $$bindings.tickColor && tickColor !== void 0)
    $$bindings.tickColor(tickColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  $$result.css.add(css$8);
  isBandwidth = typeof $xScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $xScale.domain() : typeof ticks === "function" ? ticks($xScale.ticks()) : $xScale.ticks(ticks);
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_height();
  return `<g class="${["axis x-axis svelte-1b8cddl", snapTicks ? "snapTicks" : ""].join(" ").trim()}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick, true) + " svelte-1b8cddl"}" transform="${"translate(" + escape($xScale(tick), true) + "," + escape(Math.max(...$yRange), true) + ")"}">${gridlines !== false ? `<line class="${["gridline svelte-1b8cddl", tickDashed ? "dashed" : ""].join(" ").trim()}"${add_attribute("y1", $height * -1, 0)} y2="0" x1="0" x2="0"${add_styles({
      "stroke": tickColor,
      "stroke-width": tick === 0 ? 1.5 : 1,
      "filter": tick !== 0 ? `contrast(calc(1/3)) brightness(1.5)` : null
    })}></line>` : ``}${tickMarks === true ? `<line class="tick-mark svelte-1b8cddl"${add_attribute("y1", 0, 0)}${add_attribute("y2", dyTick, 0)}${add_attribute("x1", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("x2", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_styles({
      "stroke": tickColor,
      "stroke-width": tick === 0 ? 1.5 : 1,
      "filter": tick !== 0 ? `contrast(calc(1/3)) brightness(1.5)` : null
    })}></line>` : ``}<text${add_attribute("x", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("y", yTick, 0)}${add_attribute("dx", dxTick, 0)}${add_attribute("dy", dyTick, 0)}${add_attribute("text-anchor", textAnchor(i), 0)} class="svelte-1b8cddl"${add_styles({ "fill": textColor })}>${escape(i == tickVals.length - 1 ? prefix + formatTick(tick) + suffix : formatTick(tick))}</text></g>`;
  })}</g>`;
});
const AxisY_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".tick.svelte-f7wn4m.svelte-f7wn4m{font-size:.8em}.dashed.svelte-f7wn4m.svelte-f7wn4m{stroke-dasharray:2}.tick.tick-0.svelte-f7wn4m line.svelte-f7wn4m{stroke-dasharray:0}",
  map: null
};
const AxisY = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, yScale } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  $$unsubscribe_xRange = subscribe(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  let { ticks = 4 } = $$props;
  let { tickMarks = false } = $$props;
  let { gridlines = true } = $$props;
  let { tickDashed = false } = $$props;
  let { tickColor = "#b3b3b3" } = $$props;
  let { textColor = "#707070" } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = tickMarks ? 8 : 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0)
    $$bindings.tickMarks(tickMarks);
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.tickDashed === void 0 && $$bindings.tickDashed && tickDashed !== void 0)
    $$bindings.tickDashed(tickDashed);
  if ($$props.tickColor === void 0 && $$bindings.tickColor && tickColor !== void 0)
    $$bindings.tickColor(tickColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0)
    $$bindings.textAnchor(textAnchor);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  $$result.css.add(css$7);
  isBandwidth = typeof $yScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $yScale.domain() : typeof ticks === "function" ? ticks($yScale.ticks()) : $yScale.ticks(ticks);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `<g class="axis y-axis" transform="${"translate(" + escape(-$padding.left, true) + ", 0)"}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick, true) + " svelte-f7wn4m"}" transform="${"translate(" + escape($xRange[0] + (isBandwidth ? $padding.left : 0), true) + ", " + escape($yScale(tick), true) + ")"}">${gridlines !== false ? `<line class="${["gridline svelte-f7wn4m", tickDashed ? "dashed" : ""].join(" ").trim()}" x2="100%"${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_styles({
      "stroke": tickColor,
      "stroke-width": tick === 0 ? 1.5 : 1,
      "filter": tick !== 0 ? `contrast(calc(1/3)) brightness(1.5)` : null
    })}></line>` : ``}${tickMarks === true ? `<line class="tick-mark svelte-f7wn4m" x1="0"${add_attribute("x2", isBandwidth ? -6 : 6, 0)}${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_styles({
      "stroke": tickColor,
      "stroke-width": tick === 0 ? 1.5 : 1,
      "filter": tick !== 0 ? `contrast(calc(1/3)) brightness(1.5)` : null
    })}></line>` : ``}<text${add_attribute("x", xTick, 0)}${add_attribute("y", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("dx", isBandwidth ? -4 : dxTick, 0)}${add_attribute("dy", isBandwidth ? 4 : dyTick, 0)}${add_styles({
      "text-anchor": isBandwidth ? "end" : textAnchor,
      "fill": textColor
    })}>${escape(i == tickVals.length - 1 ? prefix + formatTick(tick) + suffix : formatTick(tick))}</text></g>`;
  })}</g>`;
});
const Legend_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "ul.legend.svelte-nqsavd.svelte-nqsavd.svelte-nqsavd{margin:0;padding:0}ul.legend.svelte-nqsavd li.svelte-nqsavd.svelte-nqsavd{display:inline;font-size:.8em}ul.legend.svelte-nqsavd li.svelte-nqsavd+li.svelte-nqsavd{margin-left:8px}.bullet.svelte-nqsavd.svelte-nqsavd.svelte-nqsavd{display:inline-block;vertical-align:middle;transform:translateY(-1px)}.round.svelte-nqsavd.svelte-nqsavd.svelte-nqsavd{border-radius:50%}",
  map: null
};
const Legend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _domain;
  let { domain = null } = $$props;
  let { colors = null } = $$props;
  let { line = false } = $$props;
  let { comparison = false } = $$props;
  let { confidence = false } = $$props;
  let { horizontal = true } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { markerLength = 13 } = $$props;
  let { round = false } = $$props;
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.confidence === void 0 && $$bindings.confidence && confidence !== void 0)
    $$bindings.confidence(confidence);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.markerLength === void 0 && $$bindings.markerLength && markerLength !== void 0)
    $$bindings.markerLength(markerLength);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$6);
  _domain = confidence ? ["Estimate", "Confidence interval"] : domain;
  return `${Array.isArray(_domain) && Array.isArray(colors) ? `<ul class="legend svelte-nqsavd" aria-hidden="true">${each(_domain, (label, i) => {
    return `<li class="svelte-nqsavd"><div class="${["bullet svelte-nqsavd", round ? "round" : ""].join(" ").trim()}"${add_styles({
      "background-color": confidence ? colors[0] : colors[i],
      "width": `${!horizontal && (line || comparison && i != 0 || confidence && i == 0) ? markerWidth : markerLength}px`,
      "height": `${horizontal && (line || comparison && i != 0 || confidence && i == 0) ? markerWidth : markerLength}px`,
      "opacity": confidence && i == 1 ? "0.3" : null
    })}></div> ${escape(label)} </li>`;
  })}</ul>` : ``}`;
});
const Title_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".chart-title.svelte-pvs6ms{font-size:1.1em;font-weight:bold;margin-bottom:10px}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<h3 class="chart-title svelte-pvs6ms">${slots.default ? slots.default({}) : ``} </h3>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".chart-footer.svelte-16332wo{font-size:.8em;color:grey;margin-top:5px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="chart-footer svelte-16332wo">${slots.default ? slots.default({}) : ``}</div>`;
});
const Export_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".chart-export.svelte-1no2d6c{margin-top:10px;font-size:.8em}button.svelte-1no2d6c{color:#206095;text-decoration:underline;text-underline-position:under;background:none;border:none;padding:0 0 1px}button.svelte-1no2d6c:hover{cursor:pointer;color:#003c57;text-decoration-thickness:2px}button.svelte-1no2d6c:focus{color:#222;background-color:#fbc900;text-decoration-thickness:3px}",
  map: null
};
const Export = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { el } = $$props;
  let { data } = $$props;
  let { keys = [] } = $$props;
  let { title = null } = $$props;
  let { output = {} } = $$props;
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0)
    $$bindings.keys(keys);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.output === void 0 && $$bindings.output && output !== void 0)
    $$bindings.output(output);
  $$result.css.add(css$3);
  return `<div class="chart-export svelte-1no2d6c">${output.csv ? `<button class="svelte-1no2d6c" data-svelte-h="svelte-1lwr3ph">Download data (CSV)</button>` : ``} ${output.csv && output.png ? `|` : ``} ${output.png ? `<button class="svelte-1no2d6c" data-svelte-h="svelte-l031an">Download image (PNG)</button>` : ``} </div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let { data } = $$props;
  let { key1 = null } = $$props;
  let { key2 = null } = $$props;
  let { key3 = null } = $$props;
  let { key4 = null } = $$props;
  function makeKeys(key12, key22, key32, key42) {
    let keys2 = [];
    if (key12)
      keys2.push(key12);
    if (key22)
      keys2.push(key22);
    if (key32)
      keys2.push(key32);
    if (key42)
      keys2.push(key42);
    return keys2;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.key1 === void 0 && $$bindings.key1 && key1 !== void 0)
    $$bindings.key1(key1);
  if ($$props.key2 === void 0 && $$bindings.key2 && key2 !== void 0)
    $$bindings.key2(key2);
  if ($$props.key3 === void 0 && $$bindings.key3 && key3 !== void 0)
    $$bindings.key3(key3);
  if ($$props.key4 === void 0 && $$bindings.key4 && key4 !== void 0)
    $$bindings.key4(key4);
  keys = makeKeys(key1, key2, key3, key4);
  return `${data && keys ? `<table><thead><tr>${each(keys, (key) => {
    return `<th>${escape(key)}</th>`;
  })}</tr></thead> <tbody>${each(data, (d) => {
    return `<tr>${each(keys, (key) => {
      return `<td>${escape(d[key])}</td>`;
    })} </tr>`;
  })}</tbody></table>` : ``}`;
});
const BarChart_svelte_svelte_type_style_lang = "";
const Column_svelte_svelte_type_style_lang = "";
const ColumnChart_svelte_svelte_type_style_lang = "";
const Line_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "path.svelte-rh3b33{fill:none;stroke-linejoin:round;stroke-linecap:round}.path-hover.svelte-rh3b33{stroke:rgba(255,255,255,0);stroke-width:7}.path-line.svelte-rh3b33,.path-overlay.svelte-rh3b33{pointer-events:none}",
  map: null
};
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yScale, $$unsubscribe_yScale;
  let $xScale, $$unsubscribe_xScale;
  let $custom, $$unsubscribe_custom;
  let $coords, $$unsubscribe_coords;
  let $data, $$unsubscribe_data;
  let $config, $$unsubscribe_config;
  let $zGet, $$unsubscribe_zGet;
  const { data, xScale, yScale, zGet, config, custom } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_zGet = subscribe(zGet, (value) => $zGet = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  createEventDispatcher();
  let { lineWidth = 2.5 } = $$props;
  let { hover = false } = $$props;
  let { hovered = null } = $$props;
  let { select = false } = $$props;
  let { selected = null } = $$props;
  let { highlighted = [] } = $$props;
  let coords = $custom.coords;
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  let idKey = $custom.idKey;
  let colorHover = $custom.colorHover ? $custom.colorHover : "orange";
  let colorSelect = $custom.colorSelect ? $custom.colorSelect : "#206095";
  let colorHighlight = $custom.colorHighlight ? $custom.colorHighlight : "#206095";
  const makePath = (group) => {
    let path = "M" + group.map((d) => {
      return $xScale(d.x) + "," + $yScale(d.y);
    }).join("L");
    return path;
  };
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  $$result.css.add(css$2);
  $$unsubscribe_yScale();
  $$unsubscribe_xScale();
  $$unsubscribe_custom();
  $$unsubscribe_coords();
  $$unsubscribe_data();
  $$unsubscribe_config();
  $$unsubscribe_zGet();
  return `${$coords ? `<g class="line-group">${each($coords, (group, i) => {
    return `  <path class="path-hover svelte-rh3b33"${add_attribute("d", makePath(group), 0)}${add_attribute("tabindex", hover || select ? 0 : -1, 0)}></path> <path class="path-line svelte-rh3b33"${add_attribute("d", makePath(group), 0)}${add_attribute("stroke", $config.z ? $zGet($data[i][0]) : $config.zRange[0], 0)}${add_attribute("stroke-width", lineWidth, 0)}></path>`;
  })}${idKey && (hover || selected || highlighted[0]) ? `${each($coords, (group, i) => {
    return `${[hovered, selected, ...highlighted].includes($data[i][0][idKey]) ? `<path class="path-overlay svelte-rh3b33"${add_attribute("d", makePath(group), 0)}${add_attribute(
      "stroke",
      $data[i][0][idKey] == hovered ? colorHover : $data[i][0][idKey] == selected ? colorSelect : colorHighlight,
      0
    )}${add_attribute("stroke-width", lineWidth + 1.5, 0)}></path>` : ``}`;
  })}` : ``}</g>` : ``}`;
});
const Area = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yScale, $$unsubscribe_yScale;
  let $xScale, $$unsubscribe_xScale;
  let $coords, $$unsubscribe_coords;
  let $custom, $$unsubscribe_custom;
  let $config, $$unsubscribe_config;
  let $zGet, $$unsubscribe_zGet;
  let $data, $$unsubscribe_data;
  let $zRange, $$unsubscribe_zRange;
  const { data, xScale, yScale, zGet, zRange, config, custom } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_zGet = subscribe(zGet, (value) => $zGet = value);
  $$unsubscribe_zRange = subscribe(zRange, (value) => $zRange = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  let { opacity = 1 } = $$props;
  let coords = $custom.coords;
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  $custom.idKey;
  const makeArea = (group, i) => {
    let yRange = $yScale.range();
    let path1 = "M" + group.map((d) => {
      return $xScale(d.x) + "," + $yScale(d.y);
    }).join("L");
    let path2 = i == 0 ? "L" + group.map((d) => {
      return $xScale(d.x) + "," + yRange[0];
    }).reverse().join("L") : "L" + [...$coords[i - 1]].reverse().map((d) => {
      return $xScale(d.x) + "," + $yScale(d.y);
    }).join("L");
    let area = path1 + path2 + "Z";
    return area;
  };
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  $$unsubscribe_yScale();
  $$unsubscribe_xScale();
  $$unsubscribe_coords();
  $$unsubscribe_custom();
  $$unsubscribe_config();
  $$unsubscribe_zGet();
  $$unsubscribe_data();
  $$unsubscribe_zRange();
  return `${$coords ? `<g class="area-group">${each($coords, (group, i) => {
    return `<path class="path-area"${add_attribute("d", makeArea(group, i), 0)}${add_attribute("fill", $config.z ? $zGet($data[i][0]) : $zRange[0], 0)}${add_attribute("opacity", opacity, 0)}></path>`;
  })}</g>` : ``}`;
});
const Labels_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".label.svelte-1ijkebl{font-size:0.8em}",
  map: null
};
const Labels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $custom, $$unsubscribe_custom;
  let $coords, $$unsubscribe_coords;
  let $data, $$unsubscribe_data;
  let $xScale, $$unsubscribe_xScale;
  let $yScale, $$unsubscribe_yScale;
  const { data, xScale, yScale, custom } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  let { hovered = null } = $$props;
  let { selected = null } = $$props;
  let { content = null } = $$props;
  let coords = $custom.coords;
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  let idKey = $custom.idKey;
  let labelKey = $custom.labelKey;
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$1);
  $$unsubscribe_custom();
  $$unsubscribe_coords();
  $$unsubscribe_data();
  $$unsubscribe_xScale();
  $$unsubscribe_yScale();
  return `${$coords ? `<defs><filter x="0" y="0" width="1" height="1" id="bgfill"><feFlood flood-color="rgba(255,255,255,0.8)" result="bg"></feFlood><feMerge><feMergeNode in="bg"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs> <g class="label-group">${$coords[0] && $coords[0].x ? `${each($coords, (d, i) => {
    return `${[hovered, selected].includes($data[i][idKey]) ? `<text class="label svelte-1ijkebl" transform="translate(5,-5)" filter="url(#bgfill)" fill="#333"${add_attribute("x", $xScale(d.x), 0)}${add_attribute("y", $yScale(d.y), 0)}>${escape(content ? content : $data[i][labelKey])}</text>` : ``}`;
  })}` : `${$coords[0] && $coords[0][0] && $coords[0][0].x ? `${each($coords, (d, i) => {
    return `${[hovered, selected].includes($data[i][0][idKey]) ? `<text class="label svelte-1ijkebl" transform="translate(2,3)" filter="url(#bgfill)" fill="#333"${add_attribute("x", $xScale(d[d.length - 1].x), 0)}${add_attribute("y", $yScale(d[d.length - 1].y), 0)}>${escape(content ? content : $data[i][0][labelKey])}</text>` : ``}`;
  })}` : ``}`}</g>` : ``}`;
});
const LineChart_svelte_svelte_type_style_lang = "";
const css = {
  code: ".chart-container.svelte-1fy6g2i{width:100%}.visuallyhidden.svelte-1fy6g2i{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}",
  map: null
};
const LineChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _zDomain;
  let groupedData;
  let $yDomain, $$unsubscribe_yDomain;
  let { data } = $$props;
  let { height = 200 } = $$props;
  let { ssr = false } = $$props;
  let { ssrWidth = 300 } = $$props;
  let { ssrHeight = typeof height == "number" ? height : 200 } = $$props;
  let { animation = true } = $$props;
  let { duration = 800 } = $$props;
  let { xKey = "x" } = $$props;
  let { yKey = "y" } = $$props;
  let { zKey = null } = $$props;
  let { idKey = zKey } = $$props;
  let { labelKey = idKey } = $$props;
  let { xScale } = $$props;
  let { yScale = "linear" } = $$props;
  let { yFormatTick = commas } = $$props;
  let { xFormatTick = (d) => d } = $$props;
  let { yMax = null } = $$props;
  let { yMin = 0 } = $$props;
  let { xAxis = true } = $$props;
  let { yAxis = true } = $$props;
  let { xTicks = 4 } = $$props;
  let { yTicks = 4 } = $$props;
  let { xTickMarks = true } = $$props;
  let { xGridlines = false } = $$props;
  let { zDomain = null } = $$props;
  let { title = null } = $$props;
  let { alt = null } = $$props;
  let { footer = null } = $$props;
  let { legend = false } = $$props;
  let { labels = false } = $$props;
  let { table = false } = $$props;
  let { snapTicks = true } = $$props;
  let { line = true } = $$props;
  let { area = true } = $$props;
  let { mode = "default" } = $$props;
  let { areaOpacity = 1 } = $$props;
  let { padding = { top: 0, bottom: 28, left: 35, right: 0 } } = $$props;
  let { color = null } = $$props;
  let { colors = color ? [color] : [
    "#206095",
    "#A8BD3A",
    "#003C57",
    "#27A0CC",
    "#118C7B",
    "#F66068",
    "#746CB1",
    "#22D0B6",
    "lightgrey"
  ] } = $$props;
  let { lineWidth = 2.5 } = $$props;
  let { interactive = true } = $$props;
  let { xPrefix = "" } = $$props;
  let { xSuffix = "" } = $$props;
  let { yPrefix = "" } = $$props;
  let { ySuffix = "" } = $$props;
  let { hover = false } = $$props;
  let { hovered = null } = $$props;
  let { colorHover = "orange" } = $$props;
  let { select = false } = $$props;
  let { selected = null } = $$props;
  let { colorSelect = "#206095" } = $$props;
  let { highlighted = [] } = $$props;
  let { colorHighlight = "#206095" } = $$props;
  let { output = null } = $$props;
  let el;
  const tweenOptions = { duration, easing: cubicInOut };
  const coords = tweened(void 0, tweenOptions);
  const distinct = (d, i, arr) => arr.indexOf(d) == i;
  function getTotals(data2, keys) {
    let arr = [];
    keys.forEach((key) => {
      let vals = data2.filter((d) => d[xKey] == key).map((d) => d[yKey]);
      let sum = vals.reduce((acc, curr) => acc + curr);
      arr.push(sum);
    });
    return arr;
  }
  const yDomSet = (data2, mode2, yKey2, yMax2) => yMax2 ? [yMin, yMax2] : mode2 == "stacked" && yKey2 ? [
    yMin,
    Math.max(...getTotals(data2, data2.map((d) => d[xKey]).filter(distinct)))
  ] : [yMin, Math.max(...data2.map((d) => d[yKey2]))];
  function yDomUpdate(data2, mode2, yKey2, yMax2) {
    let newYDom = yDomSet(data2, mode2, yKey2, yMax2);
    if (newYDom[0] != yDom[0] || newYDom[1] != yDom[1]) {
      yDomain.set(newYDom, { duration: animation ? duration : 0 });
      yDom = newYDom;
    }
  }
  let yDom = yDomSet(data, mode, yKey, yMax);
  const yDomain = tweened(yDom, tweenOptions);
  $$unsubscribe_yDomain = subscribe(yDomain, (value) => $yDomain = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.ssrWidth === void 0 && $$bindings.ssrWidth && ssrWidth !== void 0)
    $$bindings.ssrWidth(ssrWidth);
  if ($$props.ssrHeight === void 0 && $$bindings.ssrHeight && ssrHeight !== void 0)
    $$bindings.ssrHeight(ssrHeight);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.xKey === void 0 && $$bindings.xKey && xKey !== void 0)
    $$bindings.xKey(xKey);
  if ($$props.yKey === void 0 && $$bindings.yKey && yKey !== void 0)
    $$bindings.yKey(yKey);
  if ($$props.zKey === void 0 && $$bindings.zKey && zKey !== void 0)
    $$bindings.zKey(zKey);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.labelKey === void 0 && $$bindings.labelKey && labelKey !== void 0)
    $$bindings.labelKey(labelKey);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.yFormatTick === void 0 && $$bindings.yFormatTick && yFormatTick !== void 0)
    $$bindings.yFormatTick(yFormatTick);
  if ($$props.xFormatTick === void 0 && $$bindings.xFormatTick && xFormatTick !== void 0)
    $$bindings.xFormatTick(xFormatTick);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.xAxis === void 0 && $$bindings.xAxis && xAxis !== void 0)
    $$bindings.xAxis(xAxis);
  if ($$props.yAxis === void 0 && $$bindings.yAxis && yAxis !== void 0)
    $$bindings.yAxis(yAxis);
  if ($$props.xTicks === void 0 && $$bindings.xTicks && xTicks !== void 0)
    $$bindings.xTicks(xTicks);
  if ($$props.yTicks === void 0 && $$bindings.yTicks && yTicks !== void 0)
    $$bindings.yTicks(yTicks);
  if ($$props.xTickMarks === void 0 && $$bindings.xTickMarks && xTickMarks !== void 0)
    $$bindings.xTickMarks(xTickMarks);
  if ($$props.xGridlines === void 0 && $$bindings.xGridlines && xGridlines !== void 0)
    $$bindings.xGridlines(xGridlines);
  if ($$props.zDomain === void 0 && $$bindings.zDomain && zDomain !== void 0)
    $$bindings.zDomain(zDomain);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.footer === void 0 && $$bindings.footer && footer !== void 0)
    $$bindings.footer(footer);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0)
    $$bindings.table(table);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.area === void 0 && $$bindings.area && area !== void 0)
    $$bindings.area(area);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.areaOpacity === void 0 && $$bindings.areaOpacity && areaOpacity !== void 0)
    $$bindings.areaOpacity(areaOpacity);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.xPrefix === void 0 && $$bindings.xPrefix && xPrefix !== void 0)
    $$bindings.xPrefix(xPrefix);
  if ($$props.xSuffix === void 0 && $$bindings.xSuffix && xSuffix !== void 0)
    $$bindings.xSuffix(xSuffix);
  if ($$props.yPrefix === void 0 && $$bindings.yPrefix && yPrefix !== void 0)
    $$bindings.yPrefix(yPrefix);
  if ($$props.ySuffix === void 0 && $$bindings.ySuffix && ySuffix !== void 0)
    $$bindings.ySuffix(ySuffix);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.colorHover === void 0 && $$bindings.colorHover && colorHover !== void 0)
    $$bindings.colorHover(colorHover);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.colorSelect === void 0 && $$bindings.colorSelect && colorSelect !== void 0)
    $$bindings.colorSelect(colorSelect);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.colorHighlight === void 0 && $$bindings.colorHighlight && colorHighlight !== void 0)
    $$bindings.colorHighlight(colorHighlight);
  if ($$props.output === void 0 && $$bindings.output && output !== void 0)
    $$bindings.output(output);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      yDomUpdate(data, mode, yKey, yMax);
    }
    _zDomain = Array.isArray(zDomain) ? zDomain : zKey && typeof zDomain === "function" ? data.map((d) => d[zKey]).filter(distinct).sort(zDomain) : zKey ? data.map((d) => d[zKey]).filter(distinct) : null;
    groupedData = mode == "stacked" ? stackData(data, _zDomain, yKey, zKey) : groupData(data, _zDomain, zKey);
    $$rendered = `  <div${add_attribute("this", el, 0)}>${title ? `${validate_component(Title, "Title").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(title)}`;
      }
    })}` : ``} ${alt ? `<h5 class="visuallyhidden svelte-1fy6g2i">${escape(alt)}</h5>` : ``} ${slots.options ? slots.options({}) : ``} <div class="chart-container svelte-1fy6g2i" style="${"height: " + escape(typeof height == "number" ? height + "px" : height, true)}" aria-hidden="true">${validate_component(LayerCake, "LayerCake").$$render(
      $$result,
      {
        padding,
        ssr,
        height: ssr ? ssrHeight : null,
        width: ssr ? ssrWidth : null,
        x: xKey,
        y: yKey,
        z: zKey,
        yDomain: $yDomain,
        xScale: typeof xScale == "function" ? xScale() : xScale == "time" ? scaleTime() : scaleLinear(),
        yScale: typeof yScale == "function" ? yScale() : yScale == "log" ? scaleSymlog() : scaleLinear(),
        zScale: scaleOrdinal(),
        zDomain: _zDomain,
        zRange: colors,
        data: groupedData,
        flatData: data,
        custom: {
          type: "line",
          mode,
          idKey,
          labelKey,
          coords,
          colorSelect,
          colorHover,
          colorHighlight,
          animation,
          duration
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(SetCoords, "SetCoords").$$render($$result, {}, {}, {})} ${slots.back ? slots.back({}) : ``} ${validate_component(Svg, "Svg").$$render($$result, { pointerEvents: interactive }, {}, {
            default: () => {
              return `${xAxis ? `${validate_component(AxisX, "AxisX").$$render(
                $$result,
                {
                  ticks: xTicks,
                  formatTick: xFormatTick,
                  snapTicks,
                  prefix: xPrefix,
                  suffix: xSuffix,
                  gridlines: xGridlines,
                  tickMarks: xTickMarks
                },
                {},
                {}
              )}` : ``} ${yAxis ? `${validate_component(AxisY, "AxisY").$$render(
                $$result,
                {
                  ticks: yTicks,
                  formatTick: yFormatTick,
                  prefix: yPrefix,
                  suffix: ySuffix
                },
                {},
                {}
              )}` : ``} ${area ? `${validate_component(Area, "Area").$$render($$result, { mode, opacity: areaOpacity }, {}, {})}` : ``} ${line ? `${validate_component(Line, "Line").$$render(
                $$result,
                {
                  lineWidth,
                  select,
                  hover,
                  highlighted,
                  selected,
                  hovered
                },
                {
                  selected: ($$value) => {
                    selected = $$value;
                    $$settled = false;
                  },
                  hovered: ($$value) => {
                    hovered = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``} ${labels ? `${validate_component(Labels, "Labels").$$render($$result, { hovered, selected }, {}, {})}` : ``} ${slots.svg ? slots.svg({}) : ``}`;
            }
          })} ${slots.front ? slots.front({}) : ``}`;
        }
      }
    )}</div> ${table ? `<div class="visuallyhidden svelte-1fy6g2i">${validate_component(Table, "Table").$$render($$result, { data, key1: zKey, key2: xKey, key3: yKey }, {}, {})}</div>` : ``} ${slots.legend ? slots.legend({}) : ``} ${legend && _zDomain ? `${validate_component(Legend, "Legend").$$render(
      $$result,
      {
        domain: _zDomain,
        colors,
        line,
        markerWidth: lineWidth
      },
      {},
      {}
    )}` : ``} ${footer ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(footer)}`;
      }
    })}` : ``}</div> ${output ? `${validate_component(Export, "Export").$$render(
      $$result,
      {
        el,
        data,
        keys: [idKey, xKey, zKey, yKey],
        title,
        output
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_yDomain();
  return $$rendered;
});
const Voronoi_svelte_svelte_type_style_lang = "";
const ScatterChart_svelte_svelte_type_style_lang = "";
const DotPlotChart_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let linechartdata = data.places;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, { compact: true }, {}, {})} ${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "England and Wales population by household type",
      lede: "Understanding census data about different household types by age",
      date: "2023-10-13"
    },
    {},
    {}
  )}  ${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: "Introduction title",
      marginTop: true
    },
    {},
    {
      default: () => {
        return `<p data-svelte-h="svelte-jmr4ws">Inspired by this tweet</p> <blockquote class="twitter-tweet" data-svelte-h="svelte-1s1l2z9"><p lang="en" dir="ltr">UK Population by Single Year of Age &amp; Housing Tenure <a href="https://t.co/RcX4ZFremk">pic.twitter.com/RcX4ZFremk</a></p>— Neal Hudson (@resi_analyst) <a href="https://twitter.com/resi_analyst/status/1111582314377760768?ref_src=twsrc%5Etfw">March 29, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" data-svelte-h="svelte-s7rlcr"><\/script>  <p data-svelte-h="svelte-19aeefh">we are going to examine 2021 Census data from England and Wales step by step in a scrollytelling format.</p>`;
      }
    }
  )}  ${validate_component(Scroller, "Scroller").$$render($$result, { id: "scroller", splitscreen: true }, {}, {
    foreground: () => {
      return `<div slot="foreground">${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-1q0dlre">This is the population of England and Wales broken down into 8 main groups. We&#39;re going to examine them one by one.</p>`;
        }
      })} ${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p>The biggest section are people who live in a ${validate_component(Em, "Em").$$render($$result, { color: "#206095" }, {}, {
            default: () => {
              return `couple with dependent children`;
            }
          })} household. We see a peak on the left for the children and the adults who look after them on the right.</p>`;
        }
      })} ${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p>${validate_component(Em, "Em").$$render($$result, { color: "#A8BD3A" }, {}, {
            default: () => {
              return `Lone parent with dependent children`;
            }
          })} are the next segment. They often have older children and are less common then couples.</p>`;
        }
      })} ${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p>As children grow up ${validate_component(Em, "Em").$$render($$result, { color: "#003C57" }, {}, {
            default: () => {
              return `couples with no dependent children`;
            }
          })} are no longer living with their child and these are seen in the older age groups.</p>`;
        }
      })} ${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p>${validate_component(Em, "Em").$$render($$result, { color: "#F66068" }, {}, {
            default: () => {
              return `Lone parent households with no dependent children`;
            }
          })} are mostly focused around the early 20s and also 50s.</p>`;
        }
      })} ${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p>${validate_component(Em, "Em").$$render($$result, { color: "#118C7B" }, {}, {
            default: () => {
              return `One-person household`;
            }
          })} increase in the 20s and then peaks in the 50s.</p>`;
        }
      })} ${validate_component(ScrollerSection, "ScrollerSection").$$render($$result, {}, {}, {
        default: () => {
          return `<p>Lastly ${validate_component(Em, "Em").$$render($$result, { color: "#22D0B6" }, {}, {
            default: () => {
              return `All students households`;
            }
          })} are found around the student ages.</p>`;
        }
      })}</div>`;
    },
    background: () => {
      return `<div slot="background">${validate_component(Grid, "Grid").$$render($$result, { width: "full", height: "full" }, {}, {
        default: () => {
          return `<div class="placeholder-block">${validate_component(LineChart, "LineChart").$$render(
            $$result,
            {
              height: "75vh",
              data: linechartdata,
              xKey: "age",
              yKey: "obs",
              zKey: "hhtype",
              line: false,
              area: true,
              mode: "stacked",
              padding: {
                top: 250,
                left: 100,
                right: 50,
                bottom: 30
              },
              legend: true
            },
            {},
            {}
          )} </div>`;
        }
      })}</div>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, { title: "Outro" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-pnhxd8">And so concludes our tour of household type by age for England and Wales.</p> <p data-svelte-h="svelte-1uztzpl">Hope you liked it and hope to you soon.</p> <p data-svelte-h="svelte-nl6mqw">I should write some more interesting stuff</p> <p data-svelte-h="svelte-1ql4puk">But I don&#39;t know what else to say</p> <p data-svelte-h="svelte-19zxb8a">And this is just meant to be a demo</p>`;
    }
  })} ${validate_component(Footer$1, "Footer").$$render($$result, { compact: true }, {}, {})}`;
});
export {
  Page as default
};
