/* eslint-disable prettier/prettier */
export interface JsonResponse {
  statusCode: number;
  timestamp: Date;
  message: string;
  data: any[] | Record<string, unknown>
}
