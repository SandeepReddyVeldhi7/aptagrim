export const generateUUID = (): string => {
  return crypto.randomUUID();
};

export const generateJobId = (): string => {
  const prefix = "FLUO";
  const randomPart = Math.random().toString(36).substring(2, 13).toUpperCase();
  return prefix + randomPart;
};
