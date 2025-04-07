import { connectToDB } from "@/lib/db";
import { Book } from "@/models/Book";
import { Review } from "@/models/Review";

export async function loadBookData() {
  await connectToDB();

  const book = await Book.findOne({ slug: "the-numen-of-banda" }).lean();
  if (!book) throw new Error("Book not found.");

  const reviews = await Review.find({ isFeatured: true, book: book._id }).limit(3).lean();

  return {
    book: JSON.parse(JSON.stringify(book)),
    reviews: JSON.parse(JSON.stringify(reviews))
  };
}
