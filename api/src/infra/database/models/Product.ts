import mongoose from 'mongoose';
import slugify from 'slugify';

interface ProductDocument extends mongoose.Document {
  name: string;
  description: string;
  amount: number;
  slug: string;
}
interface ProductAttrs {
  name: string;
  description: string;
  amount: number;
}
interface ProductModel extends mongoose.Model<ProductDocument> {
  build(attrs: ProductAttrs): ProductDocument;
}

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = doc._id;

        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

ProductSchema.pre('save', function (done) {
  if (this.isModified('name')) {
    this.set('slug', slugify(this.get('name')));
  }

  done();
});

ProductSchema.statics.build = (attrs: Omit<ProductAttrs, 'slug'>) =>
  new Model(attrs);

const Model = mongoose.model<ProductDocument, ProductModel>(
  'Product',
  ProductSchema,
);

export default Model;
