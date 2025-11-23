const host = "http://178.208.85.7:8000";

export async function getDashboard () {
    const link = host + "/api/v1/dashboard";
    const res = await fetch(link, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': 'http://178.208.85.7:8000',
      },
    });

    return res.json();
}