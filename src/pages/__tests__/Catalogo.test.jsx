import { render, screen, fireEvent } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Catalogo from '../Catalogo'

describe('Catalogo', () => {
  const renderCatalogo = () =>
    render(
      <HelmetProvider>
        <Catalogo />
      </HelmetProvider>
    )

  it('muestra el título y productos iniciales', () => {
    renderCatalogo()
    expect(screen.getByRole('heading', { name: /catálogo de productos/i })).toBeInTheDocument()
    expect(screen.getByText(/Combo Shine/i)).toBeInTheDocument()
  })

  it('filtra productos por término de búsqueda', () => {
    renderCatalogo()
    const input = screen.getByPlaceholderText(/buscar productos/i)
    fireEvent.change(input, { target: { value: 'Zen Interior' } })

    expect(screen.getByText(/Combo Zen Interior/i)).toBeInTheDocument()
    expect(screen.queryByText(/Combo Shine/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Combo Pink/i)).not.toBeInTheDocument()
  })
})
