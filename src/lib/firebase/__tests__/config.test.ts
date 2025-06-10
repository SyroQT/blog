jest.mock('firebase/app', () => ({
  __esModule: true,
  initializeApp: jest.fn(),
  getApps: jest.fn(),
}))
jest.mock('firebase/firestore', () => ({ getFirestore: jest.fn() }))
jest.mock('firebase/storage', () => ({ getStorage: jest.fn() }))

describe('firebase config', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('initializes app when there are no apps', async () => {
    const { initializeApp, getApps } = jest.requireMock('firebase/app') as {
      initializeApp: jest.Mock
      getApps: jest.Mock
    }
    getApps.mockReturnValue([])
    await import('../config')
    expect(initializeApp).toHaveBeenCalled()
  })

  it('uses existing app when already initialized', async () => {
    const { initializeApp, getApps } = jest.requireMock('firebase/app') as {
      initializeApp: jest.Mock
      getApps: jest.Mock
    }
    const existing = { name: 'x' }
    getApps.mockReturnValue([existing])
    const configModule = await import('../config')
    expect(initializeApp).not.toHaveBeenCalled()
    expect(configModule.app).toBe(existing)
  })
})
