import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
  userName: string;
  title?: string;
  quote: string;
  rating: number;
  book: mongoose.Types.ObjectId;
  isFeatured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>({
  userName: { type: String, required: true },
  title: { type: String },
  quote: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

export const Review: Model<IReview> = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);
