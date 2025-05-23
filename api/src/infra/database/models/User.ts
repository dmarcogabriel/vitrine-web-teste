import {Password} from '@app/common/helpers/Password';
import mongoose from 'mongoose';

interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}
interface UserAttrs {
  name: string;
  email: string;
  password: string;
}
interface UserModelInterface extends mongoose.Model<UserDocument> {
  build(attrs: UserAttrs): UserDocument;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
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

UserSchema.pre('save', function (done) {
  if (this.isModified('password')) {
    this.set('password', Password.toHash(this.get('password')));
  }

  done();
});

UserSchema.statics.build = (attrs: UserAttrs) => new UserModel(attrs);

const UserModel = mongoose.model<UserDocument, UserModelInterface>(
  'User',
  UserSchema,
);

export {UserModel, UserModelInterface};
