import Image from "next/image";
import { Recipe } from "../../pages/api/recipes";

type Props = {
  recipe: Recipe;
};

export function RecipeDetail({ recipe }: Props) {
  return (
    <div>
      <Image
        src={recipe.image || ""}
        alt="recipe-image"
        fill
        className="object-cover"
      />
    </div>
  );
}
