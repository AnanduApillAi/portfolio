export const devtoProfileUrl = "https://dev.to/ananduapillai";

export type Post = {
  id: number;
  title: string;
  url: string;
  publishedAt: string;
};

type DevtoArticle = {
  id: number;
  title: string;
  url: string;
  published_at: string;
};

// Latest published dev.to posts, refreshed hourly. Returns [] on any failure
// so the Writing section can hide itself instead of breaking the page.
export async function getPosts(limit = 5): Promise<Post[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=ananduapillai&per_page=${limit}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const data: unknown = await res.json();
    if (!Array.isArray(data)) return [];
    return (data as DevtoArticle[]).map((a) => ({
      id: a.id,
      title: a.title,
      url: a.url,
      publishedAt: a.published_at,
    }));
  } catch {
    return [];
  }
}
