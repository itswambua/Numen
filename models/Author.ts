// models/author.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
  bio: string;
  photoUrl: string;
  contactEmail: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
  };
  quoteHighlight?: string;           // 🟦 Featured quote (italic block)
  creativeProcess?: string;         // 🟦 Narrative section: "The Creative Process"
  latestWork?: string;
  upcomingProjects?: {
    title: string;
    status: 'in progress' | 'published' | 'draft';
  }[];
}

const AuthorSchema = new Schema<IAuthor>({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  photoUrl: String,
  contactEmail: String,
  socialLinks: {
    facebook: String,
    instagram: String,
    linkedin: String,
    x: String
  },
  quoteHighlight: {
    type: String,
    default: ''
  },
  creativeProcess: {
    type: String,
    default: ''
  },
  latestWork: String,
  upcomingProjects: [{
    title: { type: String, required: true },
    status: { type: String, enum: ['in progress', 'published', 'draft'], default: 'in progress' }
  }]
}, { timestamps: true });

export const Author: Model<IAuthor> = mongoose.models.Author || mongoose.model<IAuthor>('Author', AuthorSchema);
