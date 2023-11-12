import { MainContent } from '@/components/page-content'
import { MainFooter } from '@/components/page-footer'
import { MainHeader } from '@/components/page-header'

export default function Home() {
  return (
    <main className="">
      <MainHeader />
      <MainContent />
      <MainFooter />
    </main>
  )
}
