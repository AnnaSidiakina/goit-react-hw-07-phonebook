import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://637c986b72f3ce38eaa75e68.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: contactName => `contacts/${contactName}`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
