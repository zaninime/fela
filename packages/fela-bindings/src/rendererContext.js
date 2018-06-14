/* @flow */
import RendererProviderFactory from './RendererProviderFactory'
import ComponentFactory from './ComponentFactory'
import ConnectFactory from './ConnectFactory'

export default function rendererContext(
  createElement: Function,
  BaseComponent: any,
  createContext: Function,
  Theme: any
) {
  const { Provider, Consumer } = createContext()

  return {
    RendererProvider: RendererProviderFactory(
      createElement,
      BaseComponent,
      Provider
    ),
    FelaComponent: ComponentFactory(createElement, Consumer, Theme),
    FelaConnect: ConnectFactory(createElement, Consumer, Theme),
  }
}
