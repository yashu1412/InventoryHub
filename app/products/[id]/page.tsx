import { ProductDetailsPage } from '@/components/pages/product-details-page'

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  return <ProductDetailsPage productId={id} />
}
