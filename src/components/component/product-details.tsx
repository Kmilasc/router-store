import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { products } from "@/mocks/products"

export function ProductDetails({ description, img, imgAlt, otherImgs, name, price }: typeof products[0]) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid md:grid-cols-5 gap-3 items-start">
        <div className="md:col-span-4">
          <img
            alt={imgAlt}
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src={img}
            width={600}
          />
        </div>
        <div className="hidden md:flex flex-col gap-3 items-start">
          {otherImgs.map(({ srOnly, alt, src }) => (
             <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
             <img
               alt={alt}
               className="aspect-square object-cover"
               height={100}
               src={src}
               width={100}
             />
             <span className="sr-only">{srOnly}</span>
           </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{name}</h1>
          <div className="text-4xl font-bold ml-auto">R${price}</div>
          <div>
            <p>
              {description}
            </p>
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="quantity">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg">Add to cart</Button>
        </form>
      </div>
    </div>
  )
}
