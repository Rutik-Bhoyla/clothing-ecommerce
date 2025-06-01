
// pages/HomePage.jsx
import HeroSection from './HeroSection'
import CollectionGrid from './CollectionGrid'
import QuoteSection from './QuoteSection'
import FeaturedProducts from './FeaturedProducts'
import CTASection from './CTASection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CollectionGrid />
      <QuoteSection />
      <FeaturedProducts />
      <CTASection />
    </div>
  )
}
