import { IMeta, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/user`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IUser, meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useUsersQuery } = userApi;
