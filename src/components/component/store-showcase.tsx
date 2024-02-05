import { Card } from "../ui/card"
import { products } from "../../mocks/products"

export const categories = products.map(({ category }) => category).sort().filter((item, pos, ary) => !pos || item != ary[pos - 1])
const productsFiltered = categories.map((key) => ({ key, data: products.filter(({ category }) => category === key) }))

export function StoreShowcase() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid gap-6">
        {productsFiltered.map(({ key, data }) => 
          <div id={`#${key}`}>
            <h2 className="text-4xl font-bold mb-4">{key}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map(({ id, price, name, img, imgAlt }) => <Card id={id} price={price} name={name} img={img} imgAlt={imgAlt} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
