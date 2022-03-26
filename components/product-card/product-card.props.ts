// @TODO: Make API so we can use camelCase instead of snake_case
// interface Product {
//   id: string,
//   brand: string,
//   primaryName: string,
//   secondaryName: string,
//   price: string,
//   imageUrl: string
// }

interface Product {
  id: string,
  brand: string,
  primary_name: string,
  secondary_name: string,
  price: string,
  image_url: string
}

export interface ProductCardProps {
  product: Product
}