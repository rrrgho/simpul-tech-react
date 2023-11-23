import { useMutation, useQuery } from "@tanstack/react-query";
import Client from "../lib/client";

type Props = {
  endpoint: string;
};

type PropsGetMethod = {
  query: object;
  queryKey: any;
  onSuccess: any;
  onError: any;
  enabled: boolean;
};

type PropsPostMethod = {
  onSuccess: any;
  onError: any;
};

const useClientRequest = ({ endpoint }: Props) => {
  // Query data in multiple row/datatable/array of object
  const queryingList = async ({ query = {} }) =>
    Client.get(endpoint, {
      params: {
        limit: 10,
        ...query,
      },
      method: "GET",
    });

  const queryingGet = async ({ query = {} }) =>
    Client.get(endpoint, {
      params: {
        ...query,
      },
      method: "GET",
    });

  const GetList = ({
    query = {},
    onSuccess,
    enabled,
    onError,
    queryKey,
  }: PropsGetMethod) =>
    useQuery({
      queryKey: [queryKey],
      queryFn: async () => queryingList({ query }),
      keepPreviousData: true,
      onSuccess,
      onError,
      enabled,
    });

  const RequestPost = ({ onSuccess, onError }: PropsPostMethod) =>
    useMutation({
      mutationFn: (payload: Object) =>
        Client(endpoint, { method: "POST", data: payload }),
      onSuccess,
      onError,
    });

  const RequestGet = ({
    query = {},
    onSuccess,
    enabled,
    queryKey,
  }: PropsGetMethod) =>
    useQuery({
      queryKey: [queryKey],
      queryFn: async () => queryingGet({ query }),
      keepPreviousData: true,
      onSuccess,
      enabled,
    });

  return {
    GetList,
    RequestPost,
    RequestGet,
  };
};

export default useClientRequest;
