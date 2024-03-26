/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_AWKQuW1f.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$HeroSvg, l as links, c as $$LinkSection, s as seguros, a as $$Card, $ as $$Layout } from './_link__B53BImoT.mjs';
import { $ as $$IconPhone, a as $$IconWhatsapp, b as $$IconMail, c as $$IconFacebook, d as $$IconInstagram, e as $$SavingsSvg, f as $$IconPig, g as $$IconCheck } from './_seguro__d05fre_L.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DAFA - Asesores de Seguros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex justify-center w-full h-full py-6 px-24"> <div class="w-full max-w-[1440px] flex justify-between items-center"> <figure> <a href="/"> <h1 class="text-2xl font-semibold text-blue-800">
DAFA - Asesores de Seguros
</h1> </a> </figure> <nav class="text-lg"> <ul class="flex text-black/80 font-medium gap-10"> <li> <a href="/">Personas</a> </li> <li> <a href="/">Empresas y Profesionales</a> </li> <!-- <li>
            <a href="/">Oficinas</a>
          </li> --> <li> <a href="/">Transporte de Pasajeros</a> </li> <li> <a href="/">Institucional</a> </li> </ul> </nav> </div> </header> <main> <section class="flex justify-center w-full h-full p-24"> <div class="w-full max-w-[1440px] grid grid-cols-auto-hero items-center"> <header class="place-self-center"> <h2 class="text-6xl text-blue-900 mb-6 font-semibold">
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
  })} </footer> </div> </section> <section class="flex justify-center w-full h-full px-24 py-16"> <div class="w-full max-w-[1440px] flex flex-col justify-evenly items-center"> <header class="w-full"> <h3 class="text-start font-medium text-4xl mb-12 text-blue-900">
Servicio de Asistencia
</h3> </header> <footer class="w-full grid gap-10 justify-between grid-cols-auto-contact text-center text-2xl"> <div class="flex gap-6 flex-col p-8 h-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/60"> <div> <h4 class="mb-4 text-2xl text-start font-semibold text-blue-800">
Contactate con nosostros las 24hs, los 365 dias de año.
</h4> <a class="flex mb-3 gap-1 items-center text-xl" href="/">${renderComponent($$result2, "IconPhone", $$IconPhone, { "class": "w-8" })}- 0-810-999-3200</a> <a class="flex mb-3 gap-1 items-center text-xl" href="/">${renderComponent($$result2, "IconWhatsapp", $$IconWhatsapp, { "class": "w-8" })}- +54 9 11 3765-0687</a> <a class="flex gap-1 items-center text-xl" href="/">${renderComponent($$result2, "IconMail", $$IconMail, { "class": "w-8" })}
- info@segurosrivadavia.com</a> </div> <div> <h4 class="mb-4 text-2xl text-start font-semibold text-blue-800">
Seguinos en nuestras redes sociales para mantenerte informado.
</h4> <a class="flex mb-3 gap-1 items-center text-xl" href="/">${renderComponent($$result2, "IconFacebook", $$IconFacebook, { "class": "w-8" })}- Facebook</a> <a class="flex gap-1 items-center text-xl" href="/">${renderComponent($$result2, "IconInstagram", $$IconInstagram, { "class": "w-8" })}
- Instagram
</a> </div> </div> <div class="flex p-8 h-full flex-col rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/60"> <h4 class="mb-4 text-2xl text-start font-semibold text-blue-800">
Ubicación: Blvd. Olimpico Jose Benjamin Zubiaur 4385, Buenos Aires
</h4> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13124.673232220037!2d-58.4542305!3d-34.6757014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1bc837b8a7%3A0x327c7c69ca37fa13!2sEdificio%2020!5e0!3m2!1sen!2sar!4v1711128214642!5m2!1sen!2sar" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </footer> </div> </section> <section class="flex justify-center w-full h-full px-24 py-16"> <div class="w-full max-w-[1440px] flex flex-col justify-evenly items-center"> <header class="w-full"> <h3 class="text-start font-medium text-4xl mb-12 text-blue-900">
Metodos de Pago
</h3> </header> <footer class="w-full grid gap-10 py-12 justify-between grid-cols-auto-pagos text-center text-2xl"> <picture class="flex w-full justify-center"> ${renderComponent($$result2, "SavingsSvg", $$SavingsSvg, {})} </picture> <div class="flex h-full flex-col p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/60"> <header class="flex gap-2 justify-center"> ${renderComponent($$result2, "IconPig", $$IconPig, { "class": "w-12 h-12" })} <span class="text-3xl leading-normal text-blue-700 font-semibold">Ahorrá hasta un 30%</span> </header> <footer> <p class="mb-8">con tu nueva póliza y sumá más beneficios.</p> <div class="w-full text-start"> <p class="mb-2 font-medium">
Abona con tu metodo pago de preferencia.
</p> <ul> <li class="flex gap-2 mb-1"> ${renderComponent($$result2, "IconCheck", $$IconCheck, { "class": "w-7" })}Tarjetas (Credito | Debito)
</li> <li class="flex gap-2 mb-1"> ${renderComponent($$result2, "IconCheck", $$IconCheck, { "class": "w-7" })}Transferencias Bancarias
</li> <li class="flex gap-2 mb-1"> ${renderComponent($$result2, "IconCheck", $$IconCheck, { "class": "w-7" })}Mercado Pago
</li> <li class="flex gap-2 mb-1"> ${renderComponent($$result2, "IconCheck", $$IconCheck, { "class": "w-7" })}Efectivo
</li> </ul> </div> </footer> </div> </footer> </div> </section> <!-- <section class="flex justify-center w-full h-full px-24 py-16">
      <div
        class="w-full max-w-[1440px] flex flex-col justify-evenly items-center"
      >
        <header class="w-full">
          <h3 class="text-start text-blue-900 font-medium text-4xl mb-12">
            Beneficios
          </h3>
        </header>
        <footer
          class="w-full grid gap-10 justify-between grid-cols-auto-contact text-center text-2xl"
        >
          <div
            class="flex justify-center h-full p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/60"
          >
            <p class="flex flex-col items-center justify-center">
              <span class="text-3xl text-blue-700 font-semibold mr-2"
                >+25 Años</span
              >de experiencia en el rubro.
            </p>
          </div>

          <div
            class="flex h-full flex-col p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/60"
          >
          </div>
        </footer>
      </div>
    </section> --> <a href="/" class="w-12 h-12 fixed right-6 bottom-10"> ${renderComponent($$result2, "IconWhatsapp", $$IconWhatsapp, { "class": "w-12 h-12" })} </a> </main> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/pages/index.astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/web-seguros/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
