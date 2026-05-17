import { useEffect, useState } from 'react'
import { registerSW } from 'virtual:pwa-register'

export function usePWA() {
  const [needRefresh, setNeedRefresh] = useState(false)
  const [updateSW, setUpdateSW] = useState<(() => Promise<void>) | null>(null)

  useEffect(() => {
    const update = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true)
      },
      onOfflineReady() {
        console.log('[PWA] App pronto para uso offline')
      },
    })
    setUpdateSW(() => update)
  }, [])

  const applyUpdate = () => {
    updateSW?.()
    setNeedRefresh(false)
  }

  const dismissUpdate = () => setNeedRefresh(false)

  return { needRefresh, applyUpdate, dismissUpdate }
}
