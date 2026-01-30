type Role = "SURVEYOR" | "WARD";

const USERS = [
  {
    vmcId: "SURV001",
    password: "1234",
    role: "SURVEYOR" as Role,
  },
  {
    vmcId: "WARD001",
    password: "1234",
    role: "WARD" as Role,
  },
];

export const loginMock = async (
  vmcId: string,
  password: string
): Promise<Role> => {
  // simulate API delay
  await new Promise((res) => setTimeout(res, 800));

  const user = USERS.find(
    (u) => u.vmcId === vmcId && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return user.role;
};
