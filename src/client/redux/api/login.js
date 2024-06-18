import { api } from "./api";
const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLogin: builder.query({
      query: () => "/auth/login",
    }),
  }),
});

export const { useGetLoginQuery } = postApi;
