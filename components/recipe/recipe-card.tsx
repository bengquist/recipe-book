import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../../pages/api/recipes";
import { RecipeCardIngredients } from "./recipe-card-ingredients";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group relative h-96 max-w-sm rounded-xl overflow-hidden text-left"
    >
      <Image
        src={recipe.image || ""}
        alt={recipe.title}
        className="object-cover group-hover:scale-110 transition-all"
        fill
      />
      <span className="transition-all absolute bottom-0 inset-x-0 rounded-lg bg-white bg-opacity-90 p-4 m-4 h-14 group-hover:h-full group-hover:m-0 group-hover:overflow-auto">
        <p className="text-center font-semibold">{recipe.title}</p>
        <RecipeCardIngredients ingredients={recipe.ingredients} />
      </span>
    </Link>
  );
}
