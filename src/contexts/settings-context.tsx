import { isEqual } from 'lodash'
import { type ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { SETTINGS_STORAGE_KEY } from 'constants/storageKey'

import { type Settings } from 'types/settings'

const restoreSettings = (): Settings | null => {
  let value: Settings | null = null

  try {
    const restored: string | null = window.localStorage.getItem(SETTINGS_STORAGE_KEY)

    if (restored) {
      value = JSON.parse(restored)
    }
  } catch (err) {
    console.error(err)
  }

  return value
}

const deleteSettings = () => {
  try {
    window.localStorage.removeItem(SETTINGS_STORAGE_KEY)
  } catch (err) {
    console.error(err)
  }
}

const storeSettings = (value: Record<string, any>) => {
  try {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(value))
  } catch (err) {
    console.error(err)
  }
}

export const initialSettings: Settings = {
  primaryColorPreset: 'blue',
  secondaryColorPreset: 'gray',
  contrast: 'normal',
  direction: 'ltr',
  layout: 'vertical',
  navColor: 'evident',
  paletteMode: 'light',
  responsiveFontSizes: true,
  stretch: false,
}

interface State extends Settings {
  openDrawer: boolean
  isInitialized: boolean
}

const initialState: State = {
  ...initialSettings,
  isInitialized: false,
  openDrawer: false,
}

export interface SettingsContextType extends State {
  handleDrawerClose: () => void
  handleDrawerOpen: () => void
  handleReset: () => void
  handleUpdate: (settings: Settings) => void
  isCustom: boolean
}

export const SettingsContext = createContext<SettingsContextType>({
  ...initialState,
  handleDrawerClose: () => {},
  handleDrawerOpen: () => {},
  handleReset: () => {},
  handleUpdate: () => {},
  isCustom: false,
})

interface SettingsProviderProps {
  children?: ReactNode
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [state, setState] = useState<State>(initialState)

  useEffect(() => {
    const restored = restoreSettings()

    if (restored) {
      setState((prevState) => ({
        ...prevState,
        ...restored,
        isInitialized: true,
      }))
    }
  }, [])

  const handleReset = useCallback(() => {
    deleteSettings()
    setState((prevState) => ({
      ...prevState,
      ...initialSettings,
    }))
  }, [])

  const handleUpdate = useCallback((settings: Settings) => {
    setState((prevState) => {
      storeSettings({
        primaryColorPreset: prevState.primaryColorPreset,
        secondaryColorPreset: prevState.secondaryColorPreset,
        contrast: prevState.contrast,
        direction: prevState.direction,
        layout: prevState.layout,
        navColor: prevState.navColor,
        paletteMode: prevState.paletteMode,
        responsiveFontSizes: prevState.responsiveFontSizes,
        stretch: prevState.stretch,
        ...settings,
      })

      return {
        ...prevState,
        ...settings,
      }
    })
  }, [])

  const handleDrawerOpen = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: true,
    }))
  }, [])

  const handleDrawerClose = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: false,
    }))
  }, [])

  const isCustom = useMemo(
    () =>
      !isEqual(initialSettings, {
        primaryColorPreset: state.primaryColorPreset,
        secondaryColorPreset: state.secondaryColorPreset,
        contrast: state.contrast,
        direction: state.direction,
        layout: state.layout,
        navColor: state.navColor,
        paletteMode: state.paletteMode,
        responsiveFontSizes: state.responsiveFontSizes,
        stretch: state.stretch,
      }),
    [state],
  )

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        handleDrawerClose,
        handleDrawerOpen,
        handleReset,
        handleUpdate,
        isCustom,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer
