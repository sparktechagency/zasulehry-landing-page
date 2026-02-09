// export const myFetch = async (endpoint: string, options: RequestInit = {}) => {
//   const baseUrl = process.env.BASE_URL;
//   const url = `${baseUrl}${
//     endpoint.startsWith("/") ? endpoint : `/${endpoint}`
//   }`;

//   const res = await fetch(url, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...options.headers,
//     },
//     // For SSR, we often want to ensure fresh data or use standard revalidation
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     const errorBody = await res.text();
//     throw new Error(
//       `Failed to fetch from ${url}: ${res.status} ${res.statusText} - ${errorBody}`,
//     );
//   }

//   return res.json();
// };

export const myFetch = async (
  endpoint: string,
  options: RequestInit & { cache?: RequestCache } = {},
) => {
  const baseUrl = process.env.BASE_URL!;
  const url = `${baseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: options.cache ?? "no-store",
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(
      `Failed to fetch from ${url}: ${res.status} ${res.statusText} - ${errorBody}`,
    );
  }

  return res.json();
};
