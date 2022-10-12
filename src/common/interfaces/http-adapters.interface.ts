export interface HttpAdaptersInterface {
  get<T>(url: string): Promise<T>;
}
