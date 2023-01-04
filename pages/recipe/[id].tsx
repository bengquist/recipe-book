import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../util/fetcher";
import { Recipe } from "../api/recipes";

export default function RecipeDetail() {
  const router = useRouter();
  console.log(router.query.id);
  const { data: recipe } = useSWR<Recipe>(
    `/api/recipes?id=${router.query.id}`,
    fetcher
  );

  console.log(recipe);

  if (!recipe) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{recipe.title || "Recipe Book"}</title>
        <meta name="description" content={recipe?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="flex flex-col w-full max-w-sm">
          <Image
            src={recipe.image || ""}
            alt={recipe.title || ""}
            className="object-cover rounded-lg mb-10"
            width={450}
            height={900}
          />
          <h3 className="text-3xl font-semibold mb-6">Ingredients</h3>
          {recipe.ingredients.map((ingredient) => (
            <div key={ingredient.id} className="flex justify-between mb-4">
              <div>
                <div className="font-medium">{ingredient.name}</div>
                <div className="text-xs text-gray-600">{ingredient.note}</div>
              </div>
              <span className="whitespace-nowrap ml-8">
                <span className="font-medium">{ingredient.amount}</span>{" "}
                {ingredient.unit}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full pl-20 pt-20">
          <h1 className="text-5xl font-bold">{recipe.title}</h1>
          <div className="my-4">
            <span>
              total: <span className="font-bold">{recipe.totalTime} mins</span>
            </span>
            <span className="ml-4">
              prep: <span className="font-bold">{recipe.prepTime} mins</span>
            </span>
            <span className="ml-4">
              cook: <span className="font-bold">{recipe.cookTime} mins</span>
            </span>
          </div>
          <div className="my-4">
            <span className="py-1 px-3 border border-tan rounded-full text-sm">
              {recipe.diet}
            </span>
            <span className="ml-2 py-1 px-3 border border-tan rounded-full text-sm">
              {recipe.cuisuine}
            </span>
            <span className="ml-2 py-1 px-3 border border-tan rounded-full text-sm">
              {recipe.course}
            </span>
          </div>
          <div className="mt-10">
            <h3 className="text-3xl font-semibold mb-6">Instructions</h3>
            {recipe.instructions.map((instruction) => (
              <div key={instruction.id} className="flex items-start mb-6">
                <div className="bg-tan rounded-full px-5 py-3">
                  {instruction.order}
                </div>
                <div className="ml-4">{instruction.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
