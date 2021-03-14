import { UserDocument } from '../../user/user.schema';
import { ProductDocument } from '../../products/product.schema';

export class AddToCartInfo {
    id: UserDocument;
    prodId: ProductDocument;
    quantity: number;
}