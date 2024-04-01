/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_pAK8uUKj.mjs';
import { a as getCollection, $ as $$MainLayout } from './404_BIpy6-BX.mjs';
import { $ as $$ArticleCard } from './__Bix347bj.mjs';
import { $ as $$SearchForm } from './index_Cbla4xq9.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Result" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-5 hover:bg-indigo-500 hover:text-white">All Articles</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <h1 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/articles/search.astro", void 0);

const $$file = "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/articles/search.astro";
const $$url = "/articles/search";

export { $$Search as default, $$file as file, $$url as url };
