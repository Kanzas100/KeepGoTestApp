import http from "./http"

export const getUsersList = () => http.get("?results=30")
