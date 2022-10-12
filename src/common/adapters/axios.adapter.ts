import { Injectable } from "@nestjs/common";

import { HttpAdaptersInterface } from "../interfaces/http-adapters.interface";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class AxiosAdapter implements HttpAdaptersInterface {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }
}