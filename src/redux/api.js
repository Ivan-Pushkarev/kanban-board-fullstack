import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const cardApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/cards'}),
    tagTypes: ['Cards'],
    endpoints: (build) => ({
        getAllCards: build.query({
            query: () => '/',
            providesTags: ['Cards']
        }),
        getCardById: build.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET'
            })
        }),
        createCard: build.mutation({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Cards']
        }),
        updateCard: build.mutation({
            query: ({id, body}) => ({
                url: `/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Cards']
        }),
        deleteCard: build.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cards']
        })
    })
})

export const {
    useGetAllCardsQuery,
    useUpdateCardMutation,
    useCreateCardMutation,
    useDeleteCardMutation,
    useGetCardByIdQuery
} = cardApi