/* @flow */
import { render, rehydrate } from 'fela-dom'

function hasDOM(renderer) {
  return (
    renderer &&
    !renderer.isNativeRenderer &&
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

export default function ProviderFactory(
  createElement: Function,
  BaseComponent: any,
  Provider: any
): any {
  return class RendererProvider extends BaseComponent {
    constructor(props: Object, context: Object) {
      super(props, context)

      if (props.rehydrate && hasDOM(props.renderer)) {
        rehydrate(props.renderer)
      }
    }

    componentWillMount(): void {
      if (this.props.renderToDOM && hasDOM(this.props.renderer)) {
        render(this.props.renderer)
      }
    }

    render(): Object {
      return createElement(
        Provider,
        {
          value: this.props.renderer,
        },
        this.props.children
      )
    }
  }
}
