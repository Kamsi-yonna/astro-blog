/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_pAK8uUKj.mjs';
import { a as getCollection, A as ARTICLES_PER_PAGE, $ as $$MainLayout, f as formatDate, H as HOMEPAGE_ARTICLE_LIMIT } from './404_BIpy6-BX.mjs';
import { $ as $$ArticleCard } from './__Bix347bj.mjs';

const $$Astro$4 = createAstro();
const $$SearchForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SearchForm;
  return renderTemplate`${maybeRenderHead()}<form id="search-form" class="flex items-center" action="/articles/search"> <label for="search-input" class="sr-only">Search</label> <div class="relative w-full"> <input type="text" id="query" name="query" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Search articles..." required> </div> <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-indigo-700 rounded-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </form>`;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/components/SearchForm.astro", void 0);

const $$Astro$3 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(disablePrevious ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>
Previous
</a> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(disableNext ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>
Next
</a> </div>`;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/components/Pagination.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const totalPages = Math.ceil(
    allBlogArticles.length / ARTICLES_PER_PAGE
  );
  const articlesForPage = allBlogArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Astro Articles" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">All Articles</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})}  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div>  ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} ` })}`;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/articles/index.astro", void 0);

const $$file$1 = "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/articles/index.astro";
const $$url$1 = "/articles";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$RecentArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RecentArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-full sm:w-auto cursor-pointer rounded-2xl"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-2xl"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"> <div> <h2 class="text-2xl font-semibold sm:text-3xl"> ${article.data.title} </h2> <p class="text-xl mt-4">${formatDate(article.data.pubDate)}</p> <!-- Tags with rounded border --> <div class="flex mt-4 justify-center"> ${article.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 border text-white rounded-full text-xs mr-2"> ${tag} </span>`)} </div> </div> </div> </a> </div>`;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/components/RecentArticleCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const mostRecentArticle = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Astro" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div> <h1 class="text-5xl font-bold mt-4 mb-8 leading-tight xl:text-6xl">
Articles, Stories & Tutorials for Tech People
</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> <!-- Most Recent Article --> ${renderComponent($$result2, "RecentArticleCard", $$RecentArticleCard, { "article": mostRecentArticle })} </div>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/index.astro", void 0);

const $$file = "/home/kamsiyonna/Downloads/astro-test-v2/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SearchForm as $, index as a, index$1 as i };
