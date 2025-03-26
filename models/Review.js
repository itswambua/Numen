import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  userName: { type: String, required: true }, // if you don’t have auth, otherwise `ref: User`
  content: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
}, { timestamps: true });

export const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);
