import { IMeta, IService } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create new service
    createService: build.mutation({
      query: (serviceData) => ({
        url: `${SERVICE_URL}/`,
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    // Get ALl Service
    services: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${SERVICE_URL}/`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IService, meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    // get single service by id
    service: build.query({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),

    // update single service by id
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),

      invalidatesTags: [tagTypes.service],
    }),

    // delete single service by id
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useServicesQuery,
  useServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
