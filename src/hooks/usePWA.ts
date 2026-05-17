import { useEffect, useState } from 'react'
import { registerSW } from 'virtual:pwa-register'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function usePWA() {
  const [needRefresh, setNeedRefresh] = useState(false)
  const [updateSW, setUpdateSW] = useState<(() => Promise<void>) | null>(null)
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)

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

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
    }
    window.addEventListener('beforeinstallprompt', handler)

    const installedHandler = () => setIsInstallable(false)
    window.addEventListener('appinstalled', installedHandler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('appinstalled', installedHandler)
    }
  }, [])

  const applyUpdate = () => {
    updateSW?.()
    setNeedRefresh(false)
  }

  const dismissUpdate = () => setNeedRefresh(false)

  const install = async () => {
    if (!installPrompt) return
    const { outcome } = await installPrompt.prompt()
    if (outcome === 'accepted') {
      setIsInstallable(false)
      setInstallPrompt(null)
    }
  }

  const dismissInstall = () => setIsInstallable(false)

  return { needRefresh, applyUpdate, dismissUpdate, isInstallable, install, dismissInstall }
}
