import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";

@Injectable()
export class EnvironmentService<T> {
  private _env: T;

  constructor() {
    this.load();
  }

  load() {
    try{
      const result = dotenv.config();
      if (result.error) {
        throw result.error;
      }
      this._env = (Object.assign(result.parsed, process.env) as unknown) as T;
    } catch (ignored){
      this._env = process.env as unknown as T;
    }
  }

  get env() {
    return this._env;
  }
}
