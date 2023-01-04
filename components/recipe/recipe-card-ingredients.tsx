import { Ingredient } from "../../pages/api/recipes";
import { formatMeasurementUnit } from "../ingredient/util";

type Props = {
  ingredients: Ingredient[];
};

export function RecipeCardIngredients({ ingredients }: Props) {
  return (
    <div className="mt-4 text-sm bg-black bg-opacity-20 p-4 rounded-lg">
      {ingredients.map(({ id, name, amount, unit }) => (
        <div key={id} className="flex justify-between my-2">
          <span className="font-semibold">{name}</span>
          {
            <span className="whitespace-nowrap ml-2">
              {amount} {unit ? formatMeasurementUnit(unit) : ""}
            </span>
          }
        </div>
      ))}
    </div>
  );
}
