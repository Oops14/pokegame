import { useEffect, useState } from 'react'

import s from './BerryGrid.module.scss'
import { getBerries } from '@/services/api'

interface BerryGridProps {
  rows: number
  cols: number
}

const BerryGrid = ({ rows, cols }: BerryGridProps) => {
  const [grid, setGrid] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false))
  )

  const [spriteUrl, setSpriteUrl] = useState('')

  // Generate random barberry cells
  useEffect(() => {
    const generateRandomCells = () => {
      const totalCells = rows * cols
      const randomIndices = new Set<number>()

      while (randomIndices.size < 3) {
        randomIndices.add(Math.floor(Math.random() * totalCells))
      }

      const newGrid = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(false))

      randomIndices.forEach((index) => {
        const row = Math.floor(index / cols)
        const col = index % cols
        newGrid[row][col] = true
      })

      setGrid(newGrid)
    }

    generateRandomCells()
  }, [rows, cols])

  useEffect(() => {
    const fetchBerryImage = async () => {
      try {
        const berryData = await getBerries()

        setSpriteUrl(berryData.sprites.default)
      } catch (error) {
        console.error('Error fetching berry image:', error)
      }
    }

    fetchBerryImage()
  }, [])

  return (
    <div className={s.grid_garden}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className={`${s.cell} ${cell ? 'barberry' : ''}`}>
            {cell && (
              <div className="barberry-icon">
                <div>{spriteUrl ? <img src={spriteUrl} alt={`Berry`} /> : <p>Loading...</p>}</div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default BerryGrid
