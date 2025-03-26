import mongoose, { Schema, Document, Model } from 'mongoose';

interface IFormat {
  type: 'hardcover' | 'paperback' | 'ebook' | 'audiobook';
  price: number;
}

export interface IBook extends Document {
  title: string;
  slug: string;
  author?: string;
  synopsis?: string;
  chapterPreview?: string;
  coverImageUrl?: string;
  formats: IFormat[];
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: String,
  synopsis: String,
  chapterPreview: String,
  coverImageUrl: String,
  formats: [{
    type: {
      type: String,
      enum: ['hardcover', 'paperback', 'ebook', 'audiobook'],
      required: true
    },
    price: { type: Number, required: true }
  }]
}, { timestamps: true });

export const Book: Model<IBook> = mongoose.models.Book || mongoose.model<IBook>('Book', BookSchema);
