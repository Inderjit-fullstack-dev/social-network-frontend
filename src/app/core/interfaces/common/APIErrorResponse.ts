export interface APIErrorResponse {
  isError: boolean;
  responseException: {
    exceptionMessage: string;
  };
}
