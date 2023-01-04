// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Recipe = {
  id: string;
  title: string;
  description?: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  course: string;
  cuisuine: string;
  diet: string;
  servingSize: number;
  url: string;
  images?: string[];
  notes?: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type Ingredient = {
  id: string;
  name: string;
  amount?: string;
  unit?: string;
  note?: string;
};

type Instruction = {
  id: string;
  text: string;
  order: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Recipe | Recipe[]>
) {
  if (req.query.id) {
    const recipe = recipes.find((recipe) => recipe.id === req.query.id);

    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404);
    }
  } else {
    res.status(200).json(recipes);
  }
}

export const recipes: Recipe[] = [
  {
    id: "recipe-1",
    title: "Vegan Red Lentil Curry",
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    course: "Dinner",
    cuisuine: "Indian",
    diet: "Vegan",
    servingSize: 4,
    url: "https://rainbowplantlife.com/vegan-red-lentil-curry/",
    image:
      "https://rainbowplantlife.com/wp-content/uploads/2020/11/redlentilcurryangled-2020updated281of129.jpg",
    notes: [
      "If you can’t tolerate spicy food whatsoever, you can omit the chili peppers. If you can handle a little heat, use one Serrano pepper (remove the seeds) or one jalapeño pepper (with the seeds), and if you really like things on the spicy side, use two Serrano peppers (with seeds intact).",
    ],
    ingredients: [
      {
        id: "1",
        amount: "1",
        unit: "tablespoon",
        name: "refined or virgin coconut oil",
        note: "or a neutral-flavored oil",
      },
      {
        id: "2",
        amount: "4",
        unit: "cloves",
        name: "garlic",
        note: "minced",
      },
      {
        id: "3",
        amount: "2",
        unit: "inch",
        name: "piece of fresh ginger",
        note: "peeled and minced or grated",
      },
      {
        id: "4",
        amount: "1",
        unit: "tablespoon",
        name: "minced fresh turmeric",
        note: "or 1 teaspoon ground turmeric",
      },
      {
        id: "5",
        amount: "1-2",
        name: "serrano peppers",
        note: "(see recipe note below on spice level)",
      },
      { id: "6", amount: "1", unit: "teaspoon", name: "ground cumin" },
      { id: "7", amount: "1/2", unit: "teaspoon", name: "ground coriander" },
      {
        id: "8",
        amount: "1/2",
        unit: "teaspoon",
        name: "Indian red chili powder",
        note: "(if you only have regular chili powder, which is a blend, use 1 teaspoon)",
      },
      { id: "9", amount: "2", unit: "teaspoon", name: "curry powder" },
      { id: "10", amount: "1", unit: "teaspoon", name: "garam masala" },
      {
        id: "11",
        name: "Kosher salt or sea salt to taste",
        note: "(I use about 1 tsp kosher salt, and add more at the end)",
      },
      { id: "12", name: "Freshly cracked black pepper to taste" },
      {
        id: "13",
        amount: "1",
        unit: "cup",
        name: "red lentils",
        note: "or split red lentils (the split variety will cook a bit quicker)",
      },
      {
        id: "14",
        amount: "2",
        unit: "cup",
        name: "low-sodium vegetable broth",
      },
      {
        id: "15",
        amount: "1",
        unit: "(14-ounce / 400g)",
        name: "can crushed tomatoes",
        note: "(or half of a 28-ounce can)",
      },
      {
        id: "16",
        amount: "1",
        unit: "(13.5-ounce/400 mL)",
        name: "can full-fat coconut milk",
      },
      {
        id: "17",
        amount: "3",
        unit: "tablespoons",
        name: "unsweetened creamy almond butter",
      },
      { id: "18", amount: "1/2", name: "a small lemon", note: "juiced" },
      {
        id: "19",
        amount: "1/2",
        unit: "cup",
        name: "(~8g) fresh cilantro",
        note: "roughly chopped",
      },
      {
        id: "20",
        name: "For serving: Basmati or Jasmine rice and Indian flatbread such as roti, paratha, or naan",
      },
    ],
    instructions: [
      {
        id: "instrction-1",
        text: "Rinse the lentils in cold water until the water runs clear.",
        order: 1,
      },
      {
        id: "instrction-2",
        text: "Heat a large, deep skillet or large saucepan over medium-high heat and add the coconut oil. Once the oil is shimmering, add the garlic, ginger, fresh turmeric (if using), and Serrano pepper and cook for 2 minutes, stirring frequently to prevent garlic from burning.",
        order: 2,
      },
      {
        id: "instrction-3",
        text: "Add the cumin, coriander, chili powder, curry powder, garam masala, salt, and black pepper to taste, and cook for 30 to 60 seconds until fragrant, tossing frequently to prevent burning. If using ground turmeric instead of fresh turmeric, add the ground turmeric now, along the the rest of the spices.",
        order: 3,
      },
      {
        id: "instrction-4",
        text: "Pour in the vegetable broth, and use a wooden spoon or spatula to scrape up any browned bits on the bottom of the pot. Add in the lentils and the crushed tomatoes and mix well. Reduce the heat to low and cover the pan with a lid. Simmer for 20 to 25 minutes, or until the lentils are cooked through and have mostly softened. If you find that the lentils are not quite soft after 25 minutes, add a few spoons more of broth or water and cook for another 5 minutes.",
        order: 4,
      },
      {
        id: "instrction-5",
        text: "Remove the lid and stir in the coconut milk, almond butter, along with salt and pepper to taste Continue cooking on low heat, uncovered for 5 to 8 minutes, until the curry has thickened and is creamy.",
        order: 5,
      },
      {
        id: "instrction-6",
        text: "Finally, stir in the lemon juice and cilantro, and turn off the heat. If you want your lentils to even creamier and more on the puréed side, use an immersion blender to lightly purée the curry.",
        order: 6,
      },
      {
        id: "instrction-7",
        text: "Serve the curry with rice and/or Indian flatbread and garnish with additional cilantro. Store leftovers in the fridge for 3-4 days.",
        order: 7,
      },
    ],
  },
  {
    id: "recipe-2",
    title: "Vegan Red Lentil Curry",
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    course: "Dinner",
    cuisuine: "Indian",
    diet: "Vegan",
    servingSize: 4,
    url: "https://rainbowplantlife.com/vegan-red-lentil-curry/",
    image:
      "https://rainbowplantlife.com/wp-content/uploads/2020/11/redlentilcurryangled-2020updated281of129.jpg",
    notes: [
      "If you can’t tolerate spicy food whatsoever, you can omit the chili peppers. If you can handle a little heat, use one Serrano pepper (remove the seeds) or one jalapeño pepper (with the seeds), and if you really like things on the spicy side, use two Serrano peppers (with seeds intact).",
    ],
    ingredients: [
      {
        id: "1",
        amount: "1",
        unit: "tablespoon",
        name: "refined or virgin coconut oil",
        note: "or a neutral-flavored oil",
      },
      {
        id: "2",
        amount: "4",
        unit: "cloves",
        name: "garlic",
        note: "minced",
      },
      {
        id: "3",
        amount: "2",
        unit: "inch",
        name: "piece of fresh ginger",
        note: "peeled and minced or grated",
      },
      {
        id: "4",
        amount: "1",
        unit: "tablespoon",
        name: "minced fresh turmeric",
        note: "or 1 teaspoon ground turmeric",
      },
      {
        id: "5",
        amount: "1-2",
        name: "serrano peppers",
        note: "(see recipe note below on spice level)",
      },
      { id: "6", amount: "1", unit: "teaspoon", name: "ground cumin" },
      { id: "7", amount: "1/2", unit: "teaspoon", name: "ground coriander" },
      {
        id: "8",
        amount: "1/2",
        unit: "teaspoon",
        name: "Indian red chili powder",
        note: "(if you only have regular chili powder, which is a blend, use 1 teaspoon)",
      },
      { id: "9", amount: "2", unit: "teaspoon", name: "curry powder" },
      { id: "10", amount: "1", unit: "teaspoon", name: "garam masala" },
      {
        id: "11",
        name: "Kosher salt or sea salt to taste",
        note: "(I use about 1 tsp kosher salt, and add more at the end)",
      },
      { id: "12", name: "Freshly cracked black pepper to taste" },
      {
        id: "13",
        amount: "1",
        unit: "cup",
        name: "red lentils",
        note: "or split red lentils (the split variety will cook a bit quicker)",
      },
      {
        id: "14",
        amount: "2",
        unit: "cup",
        name: "low-sodium vegetable broth",
      },
      {
        id: "15",
        amount: "1",
        unit: "(14-ounce / 400g)",
        name: "can crushed tomatoes",
        note: "(or half of a 28-ounce can)",
      },
      {
        id: "16",
        amount: "1",
        unit: "(13.5-ounce/400 mL)",
        name: "can full-fat coconut milk",
      },
      {
        id: "17",
        amount: "3",
        unit: "tablespoons",
        name: "unsweetened creamy almond butter",
      },
      { id: "18", amount: "1/2", name: "a small lemon", note: "juiced" },
      {
        id: "19",
        amount: "1/2",
        unit: "cup",
        name: "(~8g) fresh cilantro",
        note: "roughly chopped",
      },
      {
        id: "20",
        name: "For serving: Basmati or Jasmine rice and Indian flatbread such as roti, paratha, or naan",
      },
    ],
    instructions: [
      {
        id: "instrction-1",
        text: "Rinse the lentils in cold water until the water runs clear.",
        order: 1,
      },
      {
        id: "instrction-2",
        text: "Heat a large, deep skillet or large saucepan over medium-high heat and add the coconut oil. Once the oil is shimmering, add the garlic, ginger, fresh turmeric (if using), and Serrano pepper and cook for 2 minutes, stirring frequently to prevent garlic from burning.",
        order: 2,
      },
      {
        id: "instrction-3",
        text: "Add the cumin, coriander, chili powder, curry powder, garam masala, salt, and black pepper to taste, and cook for 30 to 60 seconds until fragrant, tossing frequently to prevent burning. If using ground turmeric instead of fresh turmeric, add the ground turmeric now, along the the rest of the spices.",
        order: 3,
      },
      {
        id: "instrction-4",
        text: "Pour in the vegetable broth, and use a wooden spoon or spatula to scrape up any browned bits on the bottom of the pot. Add in the lentils and the crushed tomatoes and mix well. Reduce the heat to low and cover the pan with a lid. Simmer for 20 to 25 minutes, or until the lentils are cooked through and have mostly softened. If you find that the lentils are not quite soft after 25 minutes, add a few spoons more of broth or water and cook for another 5 minutes.",
        order: 4,
      },
      {
        id: "instrction-5",
        text: "Remove the lid and stir in the coconut milk, almond butter, along with salt and pepper to taste Continue cooking on low heat, uncovered for 5 to 8 minutes, until the curry has thickened and is creamy.",
        order: 5,
      },
      {
        id: "instrction-6",
        text: "Finally, stir in the lemon juice and cilantro, and turn off the heat. If you want your lentils to even creamier and more on the puréed side, use an immersion blender to lightly purée the curry.",
        order: 6,
      },
      {
        id: "instrction-7",
        text: "Serve the curry with rice and/or Indian flatbread and garnish with additional cilantro. Store leftovers in the fridge for 3-4 days.",
        order: 7,
      },
    ],
  },
  {
    id: "recipe-3",
    title: "Vegan Red Lentil Curry",
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    course: "Dinner",
    cuisuine: "Indian",
    diet: "Vegan",
    servingSize: 4,
    url: "https://rainbowplantlife.com/vegan-red-lentil-curry/",
    image:
      "https://rainbowplantlife.com/wp-content/uploads/2020/11/redlentilcurryangled-2020updated281of129.jpg",
    notes: [
      "If you can’t tolerate spicy food whatsoever, you can omit the chili peppers. If you can handle a little heat, use one Serrano pepper (remove the seeds) or one jalapeño pepper (with the seeds), and if you really like things on the spicy side, use two Serrano peppers (with seeds intact).",
    ],
    ingredients: [
      {
        id: "1",
        amount: "1",
        unit: "tablespoon",
        name: "refined or virgin coconut oil",
        note: "or a neutral-flavored oil",
      },
      {
        id: "2",
        amount: "4",
        unit: "cloves",
        name: "garlic",
        note: "minced",
      },
      {
        id: "3",
        amount: "2",
        unit: "inch",
        name: "piece of fresh ginger",
        note: "peeled and minced or grated",
      },
      {
        id: "4",
        amount: "1",
        unit: "tablespoon",
        name: "minced fresh turmeric",
        note: "or 1 teaspoon ground turmeric",
      },
      {
        id: "5",
        amount: "1-2",
        name: "serrano peppers",
        note: "(see recipe note below on spice level)",
      },
      { id: "6", amount: "1", unit: "teaspoon", name: "ground cumin" },
      { id: "7", amount: "1/2", unit: "teaspoon", name: "ground coriander" },
      {
        id: "8",
        amount: "1/2",
        unit: "teaspoon",
        name: "Indian red chili powder",
        note: "(if you only have regular chili powder, which is a blend, use 1 teaspoon)",
      },
      { id: "9", amount: "2", unit: "teaspoon", name: "curry powder" },
      { id: "10", amount: "1", unit: "teaspoon", name: "garam masala" },
      {
        id: "11",
        name: "Kosher salt or sea salt to taste",
        note: "(I use about 1 tsp kosher salt, and add more at the end)",
      },
      { id: "12", name: "Freshly cracked black pepper to taste" },
      {
        id: "13",
        amount: "1",
        unit: "cup",
        name: "red lentils",
        note: "or split red lentils (the split variety will cook a bit quicker)",
      },
      {
        id: "14",
        amount: "2",
        unit: "cup",
        name: "low-sodium vegetable broth",
      },
      {
        id: "15",
        amount: "1",
        unit: "(14-ounce / 400g)",
        name: "can crushed tomatoes",
        note: "(or half of a 28-ounce can)",
      },
      {
        id: "16",
        amount: "1",
        unit: "(13.5-ounce/400 mL)",
        name: "can full-fat coconut milk",
      },
      {
        id: "17",
        amount: "3",
        unit: "tablespoons",
        name: "unsweetened creamy almond butter",
      },
      { id: "18", amount: "1/2", name: "a small lemon", note: "juiced" },
      {
        id: "19",
        amount: "1/2",
        unit: "cup",
        name: "(~8g) fresh cilantro",
        note: "roughly chopped",
      },
      {
        id: "20",
        name: "For serving: Basmati or Jasmine rice and Indian flatbread such as roti, paratha, or naan",
      },
    ],
    instructions: [
      {
        id: "instrction-1",
        text: "Rinse the lentils in cold water until the water runs clear.",
        order: 1,
      },
      {
        id: "instrction-2",
        text: "Heat a large, deep skillet or large saucepan over medium-high heat and add the coconut oil. Once the oil is shimmering, add the garlic, ginger, fresh turmeric (if using), and Serrano pepper and cook for 2 minutes, stirring frequently to prevent garlic from burning.",
        order: 2,
      },
      {
        id: "instrction-3",
        text: "Add the cumin, coriander, chili powder, curry powder, garam masala, salt, and black pepper to taste, and cook for 30 to 60 seconds until fragrant, tossing frequently to prevent burning. If using ground turmeric instead of fresh turmeric, add the ground turmeric now, along the the rest of the spices.",
        order: 3,
      },
      {
        id: "instrction-4",
        text: "Pour in the vegetable broth, and use a wooden spoon or spatula to scrape up any browned bits on the bottom of the pot. Add in the lentils and the crushed tomatoes and mix well. Reduce the heat to low and cover the pan with a lid. Simmer for 20 to 25 minutes, or until the lentils are cooked through and have mostly softened. If you find that the lentils are not quite soft after 25 minutes, add a few spoons more of broth or water and cook for another 5 minutes.",
        order: 4,
      },
      {
        id: "instrction-5",
        text: "Remove the lid and stir in the coconut milk, almond butter, along with salt and pepper to taste Continue cooking on low heat, uncovered for 5 to 8 minutes, until the curry has thickened and is creamy.",
        order: 5,
      },
      {
        id: "instrction-6",
        text: "Finally, stir in the lemon juice and cilantro, and turn off the heat. If you want your lentils to even creamier and more on the puréed side, use an immersion blender to lightly purée the curry.",
        order: 6,
      },
      {
        id: "instrction-7",
        text: "Serve the curry with rice and/or Indian flatbread and garnish with additional cilantro. Store leftovers in the fridge for 3-4 days.",
        order: 7,
      },
    ],
  },
];
