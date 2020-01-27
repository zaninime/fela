import { createRenderer } from '@zaninime/fela'

import devPreset, { createDevPreset } from '../index'

describe('@zaninime/fela-preset-dev', () => {
  it('should work without config', () => {
    const renderer = createRenderer({
      plugins: [...devPreset],
    })
    const logger = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {})
    renderer.renderRule(() => ({ color: 'red' }))
    expect(logger).toHaveBeenCalled()
    logger.mockClear()
  })

  it('should allow per plugin configuration', () => {
    const configuredPreset = createDevPreset({
      validator: [
        {
          logInvalid: false,
        },
      ],
    })
    const logger = jest
      .spyOn(global.console, 'error')
      .mockImplementation(() => {})
    const renderer = createRenderer({
      plugins: [...configuredPreset],
    })
    renderer.renderRule(() => ({
      nested: {
        color: 'yellow',
      },
    }))
    expect(logger).not.toHaveBeenCalled()
    logger.mockClear()
  })
})
