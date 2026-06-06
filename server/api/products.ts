import { filterProducts } from "../../data/products";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { category, minPrice, maxPrice, colors, sizes } = query;

  const parsedColors =
    typeof colors === "string" ? [colors] : Array.isArray(colors) ? colors : [];
  const parsedSizes =
    typeof sizes === "string" ? [sizes] : Array.isArray(sizes) ? sizes : [];

  const filtered = filterProducts(
    category as string,
    minPrice ? Number(minPrice) : undefined,
    maxPrice ? Number(maxPrice) : undefined,
    parsedColors.length > 0 ? parsedColors : undefined,
    parsedSizes.length > 0 ? parsedSizes : undefined,
  );

  return filtered;
});
