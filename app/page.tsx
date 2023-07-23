'use client'
import LoaderModal from '@/components/modal/LoaderModal'
import HomeSidebar from '@/components/sidebar/homeSidebar'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import MenuToggle from '../components/button/MenuToggle'

const Loaders = dynamic(() => import('@/components/loaders/loaders'), {
  ssr: false,
})

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const router = useRouter()
  const currentLoader = searchParams?.loader

  const [assessbility, setAssessbility] = useState(false)

  function removeParams() {
    router.push('/')
  }

  const ModalMemo = useMemo(
    () => (
      <LoaderModal
        current={currentLoader}
        router={router}
        onClose={removeParams}
      />
    ),
    [currentLoader, router],
  )

  return (
    <>
      <div className="main-body">
        <main className="main-container">
          <Loaders
            onClick={(item: any) => {
              router.push(`/?loader=${item.id}`)
            }}
          />
        </main>

        <AnimatePresence>{assessbility && <HomeSidebar />}</AnimatePresence>

        <MenuToggle
          toggle={() => setAssessbility(val => !val)}
          active={assessbility}
        />
      </div>

      <AnimatePresence>{currentLoader && ModalMemo}</AnimatePresence>
    </>
  )
}
