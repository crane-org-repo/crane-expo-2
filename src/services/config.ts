export const BASE_PATH = "https://crane-server-g54b4uymqq-as.a.run.app";
//export const BASE_PATH = "http://localhost:3000";

// ----------------------------------------------------------------Applicant Paths---------------------------------------------------------------//
export const AUTH_PATH = BASE_PATH + "/login";
export const AUTH_FIREBASE_PATH = AUTH_PATH + "/firebase";

// ----------------------------------------------------------------Applicant Paths---------------------------------------------------------------//
export const USERS_PATH = BASE_PATH + "/users";
export const APPLICANTS_PATH = BASE_PATH + "/applicant";

// ----------------------------------------------------------------Jobs Paths---------------------------------------------------------------//
export const JOBS_PATH = BASE_PATH + "/jobs";
export const JOBS_BATCH_PATH = JOBS_PATH + "/batch";
export const JOBS_CLOSED_PATH = JOBS_PATH + "/closed";
export const JOBS_COMPANY_PATH = JOBS_PATH + "/company/";

// ----------------------------------------------------------------Company Paths---------------------------------------------------------------//
export const COMPANY_PATH = BASE_PATH + "/company";

export const COMPAN_NAME_PATH = COMPANY_PATH + "/name/";

// ----------------------------------------------------------------Resume Paths---------------------------------------------------------------//
export const RESUME_PATH = BASE_PATH + "/resume";
export const RESUME_PDF_PATH = RESUME_PATH + "/pdf";
export const RESUME_PATCH_PATH = RESUME_PATH + "/id";

// ----------------------------------------------------------------Resume Paths---------------------------------------------------------------//
export const VIDEO_PATH = BASE_PATH + "/videos";

// ----------------------------------------------------------------Storage Paths---------------------------------------------------------------//
export const STORAGE_PATH = BASE_PATH + "/storage";
export const STORAGE_FIREBASE_PATH = STORAGE_PATH + "/firebase";

export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsOTZ6N2R5YTAwMDBnNjQzOHNrM2xmcHMiLCJpYXQiOjE2NjY0NjEyOTAsImV4cCI6MTY2NjQ5NzI5MH0.VZ3mZqLsLhqNJLejZ_z8hX73ZzWjc6rCu3PPjtN3XI4";

export const DOWNLOAD_FIREBASE_STORAGE_PATH = STORAGE_PATH + "/firebase";
