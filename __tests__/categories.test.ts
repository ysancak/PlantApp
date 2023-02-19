import { getCategories } from "@app/services/api";
import { ICategory, ICategoryImage } from "@app/store/slices/categories";

test('getCategories should return categories', async () => {
  const categories = await getCategories();
  expect(Array.isArray(categories)).toBe(true);
  expect(categories.length).toBeGreaterThan(0);
});

test('getCategories should return categories with ICategory interface', async () => {
  const categories = await getCategories();
  categories.forEach((category: ICategory) => {
    expect(category).toMatchObject<ICategory>({
      id: expect.any(Number),
      name: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      publishedAt: expect.any(String),
      title: expect.any(String),
      rank: expect.any(Number),
      image: expect.objectContaining<ICategoryImage>({
        id: expect.any(Number),
        name: expect.any(String),
        alternativeText: null,
        caption: null,
        width: expect.any(Number),
        height: expect.any(Number),
        formats: null,
        hash: expect.any(String),
        ext: expect.any(String),
        mime: expect.any(String),
        size: expect.any(Number),
        url: expect.any(String),
        previewUrl: null,
        provider: expect.any(String),
        provider_metadata: null,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      }),
    });
  });
});