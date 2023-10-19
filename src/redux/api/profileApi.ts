import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROFILE_URL = "/profile";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get single user by id
    profile: build.query({
      query: (id) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useProfileQuery } = userApi;
