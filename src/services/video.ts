import * as React from "react";
import * as config from "./config";

export async function createVideo(data: any, uidToken: string) {
  let formData = new FormData();
  formData.append("video", data);
  return fetch(config.VIDEO_PATH, {
    method: "POST",
    body: formData,
    headers: new Headers({
      Authorization: "Bearer " + uidToken,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}

export async function getVideoUrl(uidToken: string) {
  return fetch(config.VIDEO_PATH, {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + uidToken,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}
