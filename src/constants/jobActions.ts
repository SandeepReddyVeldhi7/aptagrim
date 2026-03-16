export const JOB_ACTION_TYPES = [
  "email",
  "share",
  "link",
  "qrcode",
  "upload",
] as const;

export type JobActionType = (typeof JOB_ACTION_TYPES)[number];
