import Head from "next/head";
import useSWR from "swr";
import { RecipeCard } from "../components/recipe/recipe-card";
import { fetcher } from "../util/fetcher";
import { Recipe } from "./api/recipes";

export default function Home() {
  const { data: recipes, error } = useSWR<Recipe[]>("/api/recipes", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!recipes) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Recipe Book</title>
        <meta name="description" content="Save your recipes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
