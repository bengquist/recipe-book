export const formatMeasurementUnit = (unit: string) => {
  switch (unit) {
    case "tablespoon":
      return "tbsp";
    case "tablespoons":
      return "tbsps";
    case "teaspoon":
      return "tsp";
    case "teaspoons":
      return "tsps";
    default:
      return unit;
  }
};
