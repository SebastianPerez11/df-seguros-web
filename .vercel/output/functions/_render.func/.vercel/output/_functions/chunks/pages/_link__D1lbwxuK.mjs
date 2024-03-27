/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_AWKQuW1f.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class="bg-blue-50"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, title, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`view-transition-name: card-${id};`, "style")}${addAttribute(`/${id}/`, "href")} class="h-[240px] bg-white/60 text-2xl max-h-full flex flex-col gap-3 justify-center items-center rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"> <img${addAttribute(`../${icon}`, "src")}${addAttribute(title, "alt")}> <span>${title}</span> </a>`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkSection;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/links/${id}/`, "href")} class="text-[17px] inline-block mr-1 mb-12 py-[5px] px-5 tracking-wide rounded-full font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/60 text-blue-800">${title}</a>`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/components/LinkSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroSvg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroSvg;
  return renderTemplate`${maybeRenderHead()}<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 300" data-imageid="family-isometric-adcee"${addAttribute(Astro2.props.class, "class")}><defs><linearGradient id="linear-gradient" x1="294.06" y1="219.51" x2="323.12" y2="194.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity="0"></stop><stop offset="0.99" stop-color="#1a1a1a"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="186.51" y1="243.14" x2="218.61" y2="215.33" xlink:href="#linear-gradient"></linearGradient><linearGradient id="linear-gradient-3" x1="158.03" y1="165.83" x2="195.93" y2="132.98" xlink:href="#linear-gradient"></linearGradient><linearGradient id="linear-gradient-4" x1="83.56" y1="190.72" x2="121.46" y2="157.88" xlink:href="#linear-gradient"></linearGradient></defs><title>191-200</title><path d="M34.22,160.79,161.76,86.62a6,6,0,0,1,6,0L358.52,195.77a6,6,0,0,1,0,10.46l-122,70.42a19.69,19.69,0,0,1-19.69,0L34.24,171.23A6,6,0,0,1,34.22,160.79Z" fill="#4fbbbc"></path><polyline points="312.7 194.14 279.4 213.19 295.45 228.11 321.34 212.11 333.38 204.46 326.02 199.14" opacity="0.32" fill="url(#linear-gradient)"></polyline><polyline points="211.86 219.5 171.81 237.87 194.33 251.99 217.76 233.04 228.46 224.81 221.1 219.5" opacity="0.32" fill="url(#linear-gradient-2)"></polyline><polyline points="167.66 136.75 137.03 155.42 169.03 175.57 200.06 156.93 211.18 148.36 183.86 141.88" opacity="0.32" fill="url(#linear-gradient-3)"></polyline><polyline points="93.19 161.64 62.57 180.32 94.56 200.47 125.59 181.82 136.71 173.26 109.39 166.78" opacity="0.32" fill="url(#linear-gradient-4)"></polyline><text transform="translate(-638.92 280.61)" font-size="42" fill="#fff" font-family="TTNorms-Bold, TT Norms" font-weight="700">191_Health_isometric<tspan x="0" y="50.4">192_Health_isometric</tspan><tspan x="0" y="100.8">1</tspan><tspan x="16.8" y="100.8" letter-spacing="-0.02em">9</tspan><tspan x="41.77" y="100.8">3_Health_isometric</tspan><tspan x="0" y="151.2">1</tspan><tspan x="16.8" y="151.2" letter-spacing="-0.02em">9</tspan><tspan x="41.77" y="151.2">4_</tspan><tspan x="81.87" y="151.2" letter-spacing="-0.05em">F</tspan><tspan x="106.85" y="151.2">amily_isometric</tspan><tspan x="0" y="201.6">195_</tspan><tspan x="83.12" y="201.6" letter-spacing="-0.05em">F</tspan><tspan x="108.1" y="201.6">amily_isometric</tspan><tspan x="0" y="252">1</tspan><tspan x="16.8" y="252" letter-spacing="-0.02em">9</tspan><tspan x="41.77" y="252">6_</tspan><tspan x="82.07" y="252" letter-spacing="-0.05em">F</tspan><tspan x="107.05" y="252">amily_isometric</tspan><tspan x="0" y="302.4">1</tspan><tspan x="16.8" y="302.4" letter-spacing="-0.02em">9</tspan><tspan x="41.77" y="302.4">7_Adventure_isometric</tspan><tspan x="0" y="352.8">198_Adventure_isometric</tspan><tspan x="0" y="403.2">199_American </tspan><tspan x="279.4" y="403.2" letter-spacing="-0.05em">F</tspan><tspan x="304.38" y="403.2">ootball_isometric</tspan><tspan x="0" y="453.6">200_Baseball_isometric</tspan></text><polyline points="309.3 186.7 309.3 201.58 333.38 201.58 333.38 186.7" fill="#f7931e"></polyline><ellipse cx="321.34" cy="186.7" rx="12.04" ry="5.92" fill="#ad5802"></ellipse><ellipse cx="321.34" cy="202.16" rx="12.04" ry="5.92" fill="#f7931e"></ellipse><path d="M334.82,152.1c-2.54-1-6.06-4.5-9.13-4.39a36,36,0,0,0-1.86,9.13,82.89,82.89,0,0,0-.35,15.25q.11,1.7.28,3.39a2.7,2.7,0,0,0,.27,1q0,5.89,0,11.78a.37.37,0,0,0,.75,0q0-5.67,0-11.33a16.7,16.7,0,0,0,3.45-1.59,11.73,11.73,0,0,0,4.85-6.09c1.94-5.41.72-11.45,2.56-16.8C335.36,152.31,335.09,152.21,334.82,152.1Z" fill="#297600"></path><path d="M329.61,143.24a9.43,9.43,0,0,0-3.44,3.52,5.9,5.9,0,0,0-.54,1l-.1.23h0a15.74,15.74,0,0,0-.58,1.87,2.33,2.33,0,0,1,1.28-1,3.18,3.18,0,0,1,2-.18,8.42,8.42,0,0,1,1.84,1c.86.52,1.69,1.1,2.53,1.64,4,2.53,9.3,2.79,12.38-.9,0-.15.08-.29.1-.44C345.56,147.45,338.44,138.11,329.61,143.24Z" fill="#5fad00"></path><path d="M343.23,152l.5-.33a.34.34,0,0,0-.1-.29c-2.41-2.48-5-4.9-8.3-6.12a14.21,14.21,0,0,0-7.41-.73c-.27.31-.51.64-.75,1a12.87,12.87,0,0,1,8.52.71c2.91,1.24,5.23,3.47,7.41,5.71A.36.36,0,0,0,343.23,152Z" fill="#297600"></path><path d="M302.82,157.38a10.05,10.05,0,0,0-5.38,9.64c.28,7.1,12,.17,15.1-5.83s3.59,2.56,3.59,2.56" fill="#297600"></path><path d="M313.35,154.9a21.19,21.19,0,0,0-6.49.9,15.76,15.76,0,0,0-4,1.58,13,13,0,0,0,2.34,1.24,7.11,7.11,0,0,1,3.78,2.71,5.4,5.4,0,0,1,.45,1.07c.71,2.34.1,5.17,1.06,7.52s2.92,4.42,5.69,4.59c3.3.2,4.81-3,5.46-5.71s1.54-6.48.5-9.3C320.88,156.24,316.47,155.05,313.35,154.9Z" fill="#5fad00"></path><path d="M317.7,166c-1.38-4.49-4.32-8.72-8.61-10.7h-.16l-.2.06-.78.2c5,1.86,8.14,6.79,9.43,11.83,1.64,6.45,1.09,13.43,1.1,20a.35.35,0,0,0,.69,0C319.15,180.36,319.8,172.81,317.7,166Z" fill="#297600"></path><path d="M87.11,158.79s-4.93-3.27-6.38-2.52c-4.24,2.19-5.92,12.59-4.8,17.3s8.31,6.71,10.42,5.06c2.63-2.06-1.88-6.9-1.88-6.9" fill="#442827"></path><path d="M112.27,148.47c.67.89,7.54,25.95,7.76,29.94s-2.22,11.53-15.3,7.54-23.57-15.52-23.57-15.52-2.38-8.65,6-12.2l5.69,4.67s-5-8.88-3.25-16.87c0,0,22.2-1.77,30.4-7.32,0,0,17.51,18.18,19.95,26.61s-6.21,11.31-10.42,10.43S115.15,168,115.15,168" fill="#754c24"></path><polygon points="92.89 162.9 100.87 170.52 90.86 158.19 92.89 162.9" fill="#442827"></polygon><path d="M105.93,140.06c.65.08,4,7.38,4.37,7.86s3.72,3.92,5.41,4.64,9.58-.64,10.18,1-3.38,1.45-3.38,1.45,4.11,3.63,4.71,5.2-.78,5.22-1.42,5.33-6.81-2.31-8-3.27a34.48,34.48,0,0,1-3.63-4.24s-13.91-2.66-18.51-7.87S97,135.95,97,135.95A17.49,17.49,0,0,0,105.93,140.06Z" fill="#ffd0b0"></path><path d="M121,134.9s11.73,11.11,12.56,12.42,5.09,8.25,5.94,7.29-1-4.15-1-4.15,6.94,5.46,8.1,4.24.07-6.31-.75-7.75-6.19-3.57-6.81-4.11-13.21-15.69-13.21-15.69" fill="#ffd0b0"></path><path d="M99.25,108.59a29.47,29.47,0,0,1,14.57-2.06,11.83,11.83,0,0,1,6.55,2.83c2.36,2.19,3.31,5.51,4.59,8.36a125.85,125.85,0,0,0,6.48,12c2.14,3.68,4.07,7.51,6.74,10.84l-7.54,5.66-11.39-13.3-17,8.76,15.11,7.71c1.27,2.33-9.75,9.39-9.75,9.39S90.69,157.05,87.18,140C82.21,115.86,99.22,108.6,99.25,108.59Z" fill="#ff9a22"></path><line x1="156.28" y1="141.81" x2="154.83" y2="140.21" fill="#fff7f0"></line><path d="M119.73,126.77s.54,15.38-.36,17.07-17.09,8.73-17.09,8.73L92.11,140Z" fill="#ff9a22"></path><path d="M114,99.92s2.1,6.54.73,8.63-7.16-.15-7.16-.15" fill="#452729"></path><path d="M114.92,96.81s-1.34,12.6-6.68,13.34-7.29-6-7.29-6,0-8.62,1.87-10.2S112.62,92.92,114.92,96.81Z" fill="#fdc2b0"></path><path d="M117.08,95.65s-4.07,4.5-6.28,5.51-4.45,0-5.37,1.62.43,12-2.16,13.64-6.55-4.42-8.9-2-1.85,7.5-5.17,8.19-6.49-4.69-3-8.26,4-5.46,2.46-7c-2.37-2.25,1.18-9,4.38-10s4.86-7.78,10.53-8.82S116.38,91.61,117.08,95.65Z" fill="#452729"></path><path d="M118.46,121.9q.1,10.65-.24,21.29c0,.81,1.23.8,1.25,0q.34-10.64.24-21.29A.63.63,0,0,0,118.46,121.9Z" fill="#f26250"></path><path d="M117.13,149a28.56,28.56,0,0,1-16.27-19.77c-.18-.79-1.39-.44-1.21.34a29.73,29.73,0,0,0,16.85,20.52C117.24,150.39,117.87,149.3,117.13,149Z" fill="#f26250"></path><path d="M159.85,134.83s-4.93-3.27-6.38-2.52c-4.24,2.19-5.92,12.59-4.8,17.3s8.31,6.71,10.42,5.06c2.63-2.06-1.88-6.9-1.88-6.9" fill="#452729"></path><path d="M185,124.52c.67.89,7.54,25.95,7.76,29.94S190.55,166,177.47,162s-23.57-15.52-23.57-15.52-2.38-8.65,6-12.2l5.69,4.67s-5-8.88-3.25-16.87c0,0,22.2-1.77,30.4-7.32,0,0,17.51,18.18,19.95,26.61s-6.21,11.31-10.42,10.43S187.89,144,187.89,144" fill="#452729"></path><polygon points="165.64 138.94 173.61 146.56 163.59 134.23 165.64 138.94" fill="#452729"></polygon><path d="M201.37,91.39l3.26,4.7s13.38-5.06,14.59-6,3.26-6.75,4.46-7,0,5.18,0,5.18,5.43-3.38,7-3.62,4.1.51,4.46,1.52-2.77,5.71-4.1,6.44a51.5,51.5,0,0,1-6.39,2s-15.07,11-21.94,11.94S191.6,94.16,191.6,94.16Z" fill="#fdc2b0"></path><path d="M194.35,75.05s8.72,6.18,8.65,17c0,2.18-12.41,5.22-12.41,5.22L189.5,85.07" fill="#1e40af" class="target-color"></path><path d="M194.35,75.05s8.72,6.18,8.65,17c0,2.18-12.41,5.22-12.41,5.22L189.5,85.07" fill="#452729" opacity="0.21"></path><path d="M164.49,107.57s-4.72-.38-11.19-7.4c0,0,3.39-10.52,11.24-17S183.41,71.62,191.59,74s-1.34,28.89-1.17,31.06,3.39,14.48,3.39,14.48-19.62,7.8-31.71,5.93Z" fill="#1e40af" class="target-color"></path><path d="M164.89,106.12c.71.08-2.92,5.58-2.52,6.11s11.28,8,13.14,8.76,10.62-1.86,11.28,0-3.71,1.59-3.71,1.59,4.5,4,5.17,5.71-.86,5.72-1.56,5.85-7.47-2.53-8.8-3.59a37.82,37.82,0,0,1-4-4.65s-15.26-2.92-20.3-8.63,1.46-15.66,1.46-15.66A19.18,19.18,0,0,0,164.89,106.12Z" fill="#fdc2b0"></path><path d="M198.77,71.09s3.15.11,4.11-2.46-2.05-5-2.05-5,.75-4.32-5-6.89-9.17.68-9.17.68-4.09-.81-6.41,2-2.73,5.4-2,7.42a4.61,4.61,0,0,0-.3,4.22c1,2.4,2.89,7,7,7" fill="#452729"></path><path d="M199.64,68.46s-4.7,11.73-7.15,12.94c-4,2-8.26.92-9.26-3.31,0,0-3.95-4.58-1.89-6.79s3.95.95,3.95.95,2.37-7.42,8.36-7.26S199.64,68.46,199.64,68.46Z" fill="#fdc2b0"></path><path d="M199.51,68.46s0,.95-3.75-1.2-9.26,4.39-10.28,8.48c0,0-1.23-6.69.61-9.62s3.78-4.37,7.35-3.76S200.35,65.07,199.51,68.46Z" fill="#452729"></path><path d="M231.42,165.74l3.11-5.9s4.34-2,3.48-4-5.89-2.51-7.57-1.5-.69,4.79-.69,4.79c-4.5,3.74-9.22,13.33-9.22,13.33" fill="#eec8b5"></path><path d="M207.32,173.47a62.3,62.3,0,0,1,0-9.56s2.4-5.68,1.26-7.63a4.44,4.44,0,0,0-4.55-2.11c-1.46.16-3.73,2.76-3.9,4.87s1.79,4.19,1.79,4.19a19,19,0,0,0,.41,11.49q.25.64.56,1.28C206,182.26,207.32,173.47,207.32,173.47Z" fill="#eec8b5"></path><path d="M207.64,225.18a6,6,0,0,0,.6,3.61c.94,1.47,5.48,4.14,9.49,2.54s-2.14-5.48-4.55-7" fill="#2f352b"></path><path d="M223.66,219.27a6,6,0,0,0,1.58,3.3c1.31,1.15,6.42,2.46,9.82-.2s-3.58-4.67-6.3-5.41" fill="#2f352b"></path><path d="M207.17,206.6a75.88,75.88,0,0,1,.94,7.75c0,2.14-.47,10.83-.47,10.83s1.54.8,5.55-.8c0,0,2.74-6.42,2.5-9.36s-1.17-9.63-1.17-9.63" fill="#eec8b5"></path><path d="M218.13,201.52a75.88,75.88,0,0,1,3.06,7.19c.59,2.05,2.56,10.53,2.56,10.53s1.7.34,5.11-2.31c0,0-.72-10.75-1.76-13.51s-2.23-5.1-2.23-5.1" fill="#eec8b5"></path><path d="M207.61,192.65s-2.76,3.73-1.46,15.1c0,0,2.55,2.43,10.2,1v-4.06l1.49,4.53a30.68,30.68,0,0,0,9.72-4.41,17.85,17.85,0,0,0-3.22-8.89C221.19,191.11,207.61,192.65,207.61,192.65Z" fill="#2f352b"></path><path d="M224.17,173.47s5.49-5.81,6.77-2.34l-6.77,12.35" fill="#1e40af" class="target-color"></path><path d="M212,173.58s-3.19-3.17-4.69-5.12a31.56,31.56,0,0,0-5,6.27s.17,4,5,10" fill="#1e40af" class="target-color"></path><path d="M212,173.58a10,10,0,0,0-4.4,7.05,67.37,67.37,0,0,0,0,12s7.63,8.28,16.72,3.25c0,0,2.92-16.56-1-19.89S212,173.58,212,173.58Z" fill="#1e40af" class="target-color"></path><path d="M210,164.63s-3.61,8.09,6.1,11,4.61-11,4.61-11" fill="#2f352b"></path><path d="M227,163.14c-.07.84,1.48,15.79-6.23,14.32s-6.81-7.54-6.62-9.85,2.88-6.33,7-6.43S227,163.14,227,163.14Z" fill="#eec8b5"></path><path d="M214,168.85s8.15,5.12,19.1,0c0,0,4-1.4-5.36-6.06,0,0,.52-7.45-9.78-7.45-9.15,0-8.62,9.32-8.62,9.32Z" fill="#1e40af" class="target-color"></path><path d="M279.16,96.31a10.72,10.72,0,0,1,10.24,3.59c3.43,3.82,5,9,7.44,13.41,2,3.62,5.61,7.69,9.65,9l.37-20.34a7.91,7.91,0,0,1-6.76.53c-7.38-2.71-5.56-13.69-13-16-7.91-2.48-10.41,7.89-18,7.62a10.31,10.31,0,0,1-5.61-1.87l-.15,8.08C268.14,102.73,273.62,97.25,279.16,96.31Z" fill="#1e40af" class="target-color"></path><path d="M291.67,109.66c-1.61-3.35-3.3-7.83-6.77-9.7-5.22-2.81-9.8,1.5-14.35,3.36a9.68,9.68,0,0,1-7.21.32l0,2.53a3.64,3.64,0,0,0,2,3.32L302.46,128a2.75,2.75,0,0,0,4-2.41v-.16C299.91,123.7,294.56,115.68,291.67,109.66Z" fill="#1e40af" class="target-color"></path><path d="M269.17,91.07c3.75.14,5.46-2.79,7.88-5a11.19,11.19,0,0,1,9.66-2.84c4.43.82,7,3.92,8.73,7.89,1.56,3.61,2.11,6.88,6.25,8a6,6,0,0,0,5.24-.86l.3-16.4a3.64,3.64,0,0,0-2-3.31L268.42,59.84a3,3,0,0,0-4.32,2.6l-.47,25.91A7.63,7.63,0,0,0,269.17,91.07Z" fill="#1e40af" class="target-color"></path><path d="M287.14,86.45c7.4,2.32,5.58,13.3,13,16a7.91,7.91,0,0,0,6.76-.53l.07-3.65a6,6,0,0,1-5.24.86c-4.14-1.11-4.69-4.38-6.25-8-1.72-4-4.3-7.07-8.73-7.89A11.19,11.19,0,0,0,277,86.11c-2.42,2.17-4.13,5.09-7.88,5a7.63,7.63,0,0,1-5.54-2.72l-.07,3.85a10.31,10.31,0,0,0,5.61,1.87C276.74,94.34,279.23,84,287.14,86.45Z" fill="#fff"></path><path d="M296.84,113.32c-2.48-4.42-4-9.59-7.44-13.41a10.72,10.72,0,0,0-10.24-3.59c-5.54.93-11,6.42-15.76,4l-.06,3.36a9.68,9.68,0,0,0,7.21-.32c4.55-1.86,9.13-6.17,14.35-3.36,3.47,1.87,5.16,6.35,6.77,9.7,2.89,6,8.24,14,14.76,15.76l.06-3.16C302.46,121,298.88,116.93,296.84,113.32Z" fill="#fff"></path></svg>`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/svg/HeroSvg.astro", void 0);

const seguros = [
    {
        id: "automotores",
        title: "Automotores",
        icon: "../src/img/IconAuto.svg",
    },
    {
        id: "motos",
        title: "Motos",
        icon: "../src/img/IconMoto.svg",
    },
    {
        id: "bicicletas",
        title: "Bicicletas",
        icon: "../src/img/IconBicicleta.svg",
    },
    {
        id: "hogar",
        title: "Hogar",
        icon: "../src/img/IconHogar.svg",
    },
    {
        id: "accidentes",
        title: "Accidentes",
        icon: "../src/img/IconAccidente.svg",
    },
    {
        id: "vida",
        title: "Vida",
        icon: "../src/img/IconVida.svg",
    },
];

const links = [
    {
        id: "personas",
        title: "Personas",
    },
    {
        id: "profesionales",
        title: "Empresas y Profesionales",
    },
    {
        id: "transporte",
        title: "Transporte de Pasajeros",
    },
];

const $$Astro = createAstro();
const $$link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$link;
  const { link } = Astro2.params;
  const info = links.find((l) => l.id === link);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${info.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex justify-center w-full h-full py-6 px-24"> <div class="w-full max-w-[1440px] flex justify-between items-center"> <figure> <a href="/"> <h1 class="text-2xl font-semibold text-blue-800">
DAFA - Asesores de Seguros
</h1> </a> </figure> <nav class="text-lg"> <ul class="flex text-black/80 font-medium gap-10"> <li> <a href="/">Personas</a> </li> <li> <a href="/">Empresas y Profesionales</a> </li> <!-- <li>
                <a href="/">Oficinas</a>
              </li> --> <li> <a href="/">Transporte de Pasajeros</a> </li> <li> <a href="/">Institucional</a> </li> </ul> </nav> </div> </header> <section class="flex justify-center w-full h-full p-24"> <div class="w-full max-w-[1440px] grid grid-cols-auto-hero items-center"> <header class="place-self-center"> <h2 class="text-6xl text-blue-900 mb-6 font-semibold">
Elegí estar seguro
</h2> <p class="text-[21px] max-w-[60ch] w-full mb-6">
Somos <span class="font-semibold text-blue-800">Productores Asesores de Seguros</span> con mas de 25 años de experiencia en el rubro. Trabajamos con las mejores
              compañias aseguradoras del mercado.
</p> <a class="bg-blue-800 text-lg mr-1 font-medium tracking-wide rounded-md text-white px-10 py-[10px]" href="/">Contactanos</a> </header> <footer class="place-self-center"> <figure class="flex w-full justify-center"> ${renderComponent($$result2, "HeroSvg", $$HeroSvg, { "class": "w-[600px] xl:w-[500px]" })} </figure> </footer> </div> </section> <section class="flex justify-center w-full h-full px-24 py-16"> <div class="w-full max-w-[1440px] flex flex-col justify-evenly items-center"> <header class="w-full"> <h3 class="text-start font-medium text-4xl text-blue-900 mb-4">
Conoce nuestro Seguros
</h3> ${links.map(({ id, title }) => {
    return renderTemplate`${renderComponent($$result2, "LinkSection", $$LinkSection, { "id": id, "title": title })}`;
  })} </header> <footer class="w-full grid gap-10 justify-between grid-cols-auto-fit text-center text-2xl"> ${seguros.map(({ id, title, icon }) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "id": id, "title": title, "icon": icon })}`;
  })} </footer> </div> </section> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/pages/links/[link].astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/pages/links/[link].astro";
const $$url = "/links/[link]";

const _link_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$link,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _link_ as _, $$Card as a, $$HeroSvg as b, $$LinkSection as c, links as l, seguros as s };