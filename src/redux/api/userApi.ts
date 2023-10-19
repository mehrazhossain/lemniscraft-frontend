import { IMeta, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get ALl Users
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
    // get single user by id
    user: build.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // update single user by id
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),

      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUsersQuery, useUserQuery, useUpdateUserMutation } = userApi;
