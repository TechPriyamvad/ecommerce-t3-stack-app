import { faker } from "@faker-js/faker";

interface Category {
  name: string;
}

export function generateFakeCategories(count: number): Category[] {
  try {
    const uniqueCategories = new Set<string>();
    const categories: Category[] = [];

    for (let i = 0; i < count; i++) {
      uniqueCategories.add(faker.commerce.department());
    }

    for (const category of uniqueCategories) {
      categories.push({ name: category });
    }

    return categories;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
}
