import api from "./api";
import * as SecureStore from "expo-secure-store";

export const loginWithVmcCredentials = async (
  vmcId: string,
  password: string
) => {
  const res = await api.post("/auth/login", { vmcId, password });

  const { token, role } = res.data;

  await SecureStore.setItemAsync("token", token);
  await SecureStore.setItemAsync("role", role);

  return role as "SURVEYOR" | "WARD";
};
