import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: '/product',
        method: 'POST',
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product${id}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),

    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comment'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCommentQuery,
  usePostCommentMutation,
  useSingleProductQuery,
  usePostBookMutation,
  useDeleteBookMutation,
} = productApi;
