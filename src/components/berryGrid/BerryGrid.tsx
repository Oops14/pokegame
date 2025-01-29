import { memo, useEffect, useState } from 'react'

import { getBerries } from '@/services/api'

import s from './BerryGrid.module.scss'

interface BerryGridProps {
  rows: number
  cols: number
  berryCells: { row: number; col: number }[]
}

const generateSpecificCells = (
  totalRows: number,
  totalCols: number,
  activeRows: number,
  activeCols: number,
  berryCells: { row: number; col: number }[]
) => {
  const newGrid = Array(totalRows)
    .fill(null)
    .map((_, rowIndex) =>
      Array(totalCols)
        .fill(null)
        .map((_, colIndex) => ({
          isActive: rowIndex < activeRows && colIndex < activeCols,
          hasBerry: false,
        }))
    )

  berryCells.forEach(({ row, col }) => {
    if (row < activeRows && col < activeCols) {
      newGrid[row][col].hasBerry = true
    }
  })

  return newGrid
}

const BerryGrid = memo(({ rows, cols, berryCells }: BerryGridProps) => {
  const [activeArea, setActiveArea] = useState({ rows: 5, cols: 5 })
  const [grid, setGrid] = useState(() =>
    generateSpecificCells(rows, cols, activeArea.rows, activeArea.cols, berryCells)
  )
  const [spriteUrl, setSpriteUrl] = useState('')

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
    <div
      className={s.grid_garden}
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '4px',
      }}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className={`${s.cell} ${cell.isActive ? s.active : s.inactive}`}>
            {cell.isActive && cell.hasBerry && (
              <div className={s.barberry_icon}>
                {spriteUrl ? <img src={spriteUrl} alt="Berry" /> : <p>Loading...</p>}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
})

export default BerryGrid
