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
