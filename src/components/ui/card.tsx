import Link from "next/link";
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";

interface Props {
    id: number;
    price: number;
    name: string;
    img: StaticImageData;
    imgAlt: string;
}

export function Card({ id, price, name, img, imgAlt }: Props) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <Image
                alt={imgAlt}
                className="w-full h-48 object-cover"
                height="200"
                src={img}
                style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                }}
                width="200"
            />
            <div className="p-4">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-500">R${price}</p>
            <Link href={`/products/${id}`}>
                <Button className="mt-2">Ver detalhes</Button>
            </Link>
            </div>
        </div>
    )
}