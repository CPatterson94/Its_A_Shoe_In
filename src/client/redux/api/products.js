import { api } from "./api";
const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/api/products",
    }),
    getProduct: builder.query({
      query: (id) => "/api/products/" + id,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = postApi;