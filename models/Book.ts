import mongoose, { Schema, Document, Model, Types } from 'mongoose';

interface IFormat {
  type: 'hardcover' | 'paperback' | 'ebook' | 'audiobook';
  price: number;
}

interface IFeature {
  icon: string; // storing SVG path or a named identifier for dynamic rendering
  title: string;
  description: string;
}

export interface IBook extends Document {
  title: string;
  slug: string;
  authorId?: Types.ObjectId;
  synopsis?: string;
  chapterPreview?: string;
  coverImageUrl?: string;
  formats: IFormat[];
  features?: IFeature[];
}

const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'Author' },
    synopsis: String,
    chapterPreview: String,
    coverImageUrl: String,
    formats: [
      {
        type: {
          type: String,
          enum: ['hardcover', 'paperback', 'ebook', 'audiobook'],
          required: true,
        },
        price: { type: Number, required: true },
      },
    ],
    features: [
      {
        icon: { type: String, required: true }, // Can be a keyword like "book", "shield", etc.
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Book: Model<IBook> = mongoose.models.Book || mongoose.model<IBook>('Book', BookSchema);
