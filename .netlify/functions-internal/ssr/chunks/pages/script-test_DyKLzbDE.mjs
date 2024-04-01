/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_pAK8uUKj.mjs';
import { $ as $$MainLayout } from './404_BIpy6-BX.mjs';

const $$Astro = createAstro();
const $$ScriptTest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ScriptTest;
  const codeFence = "fence btn";
  const users = [
    { name: "Kamsy", age: 26 },
    { name: "Jolene", age: 36 },
    { name: "Brad", age: 56 }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex mt-4 justify-center"> <button class="px-8 bg-black py-2 border text-white rounded-full text-xs mr-2">${codeFence}</button> <button id="templateScriptBtn" class="px-8 bg-black py-2 border text-white rounded-full text-xs mr-2">template script</button> </div> <ul class="p-4"> ${users.map((user) => renderTemplate`<li>${user.name}</li>`)} </ul> ` })} `;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/script-test.astro", void 0);

const $$file = "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/script-test.astro";
const $$url = "/script-test";

export { $$ScriptTest as default, $$file as file, $$url as url };
