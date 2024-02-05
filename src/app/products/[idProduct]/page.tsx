import { ProductDetails } from "@/components/component/product-details";
import { products } from "@/mocks/products";
import { redirect } from "next/navigation";

export default function Product({ params: { idProduct } }: { params: { idProduct: string } }) {
  const product = products.find(({ id }) => id === Number(idProduct))

  if (!product) redirect('/')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductDetails {...product} />
    </main>
  );
}
