/* eslint-disable @typescript-eslint/ban-types */

import axios, { AxiosError } from "axios"
import Toast from "react-native-toast-message"
import { STATUS_CODE } from "./apiProblem"

class HTTPService {
  constructor() {
    axios.defaults.headers.common.Accept = "application/json"
    axios.defaults.baseURL = "https://randomuser.me/api/"
  }

  async get(url: string, config?) {
    console.log("get", url, config)
    return axios
      .get(url, config)
      .then((res) => this.handleSuccess(res))
      .catch((res) => this.handleResponseError(res))
  }

  async post(url: string, config?) {
    console.log("post", url, config)
    return axios
      .post(url, config)
      .then((res) => this.handleSuccess(res))
      .catch((res) => this.handleResponseError(res))
  }

  async put(url: string, data?: any) {
    console.log("put", url, data)
    return axios
      .put(url, data)
      .then((res) => this.handleSuccess(res))
      .catch((res) => this.handleResponseError(res))
  }

  async patch(url: string, data?: any) {
    return axios
      .patch(url, data)
      .then((res) => this.handleSuccess(res))
      .catch((res) => this.handleResponseError(res))
  }

  async delete(url: string, config?) {
    return axios
      .delete(url, config)
      .then((res) => this.handleSuccess(res))
      .catch((res) => this.handleResponseError(res))
  }

  handleSuccess(response) {
    return response.data
  }

  async handleResponseError({ response }: AxiosError) {
    console.log(response)
    Toast.show({
      type: "error",
      text1: "Oops, something went wrong, please try again later :(",
      text2: response.statusText,
    })

    return response.data
  }
}

export default new HTTPService()
