import type { uploadProps } from "./utils/types";

const host = "http://178.208.85.7:8000";

export async function getDashboard () {
    const link = host + "/api/v1/dashboard";
    const res = await fetch(link, {
      method: "GET",
    });

    return res.json();
}

export async function getAnalytics () {
  const link = host + "/api/v1/analytics";

  const res = await fetch(link, {
    method: "GET",
  });

  return res.json();
}

export async function getHistory(id: string) {
  const link = host + `/api/v1/pile/${id}/history`;

  const res = await fetch(link, {
    method: "GET",
  });

  return res.json();
}

export async function uploadFile({ file, dataType }: uploadProps) {
  const link = host + "/api/v1/data";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("data_type", dataType);

  const res = await fetch(link, {
    method: "POST",
    body: formData,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null; 
  }

  if (!res.ok) {
    const error: any = new Error("Ошибка при загрузке файла");
    error.status = res.status;
    error.data = data; 
    throw error;
  }

  return data;
}

