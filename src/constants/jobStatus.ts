export const JOB_STATUS = {
  ALL: "All",
  ACTIVE: "Active",
  PAUSED: "Paused",
  ARCHIVE: "Archive",
  DRAFT: "Draft",
} as const;

export const JOB_STATUS_LIST = [
  JOB_STATUS.ALL,
  JOB_STATUS.ACTIVE,
  JOB_STATUS.PAUSED,
  JOB_STATUS.ARCHIVE,
  JOB_STATUS.DRAFT,
] as const;

export type JobStatusType = (typeof JOB_STATUS_LIST)[number];
