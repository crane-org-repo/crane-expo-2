import * as React from "react";
import * as config from "./config";

interface ResumeProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  whatsapp: string;
  skills: SkillProps[];
  languages: LangProps[];
  nationality: string;
  currentLocation: string;
  interestedCountry: string;
}

interface WorkProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface SkillProps {
  name: string;
  level: number;
}

interface LangProps {
  name: string;
  level: number;
}

export async function createResume(data: any, uidToken: string) {
  return fetch(config.RESUME_PATH, {
    method: "POST",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + uidToken,
      "Content-Type": "application/json",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.url;
    }
  });
}

export async function updateResume(data: any, uidToken: string, id: string) {
  return fetch(config.RESUME_PATCH_PATH + "/" + id, {
    method: "PATCH",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + uidToken,
      "Content-Type": "application/json",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.url;
    }
  });
}

export async function deleteResume(uidToken: string) {
  return fetch(config.STORAGE_FIREBASE_PATH + "/resume", {
    method: "DELETE",
    headers: new Headers({
      Authorization: "Bearer " + uidToken,
      "Content-Type": "application/json",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.url;
    }
  });
}

export async function getResume(uidToken: string) {
  return fetch(config.RESUME_PATH, {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + uidToken,
      "Content-Type": "application/json",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}

export async function getResumePdf(uidToken: string) {
  return fetch(config.RESUME_PDF_PATH, {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + uidToken,
      "Content-Type": "application/json",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}

export async function getDownloadUrl(uidToken: string) {
  return fetch(config.DOWNLOAD_FIREBASE_STORAGE_PATH + "/resume", {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + uidToken,
      "Content-Type": "application/json",
    }),
  }).then((res: any) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return { error: "Error" };
    }
  });
}
