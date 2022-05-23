import React from 'react'

export default function Fruits({ fruits }) {

  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo, ...fruits];

  console.log(numbersCombined)

  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }

  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }

  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle, year: 2000 }

  // const { fruits } = props

  console.log(myUpdatedVehicle)

  return (
    <div>

      {/* {fruits.length > 5 ? "Fruits available" : "Fruits Not Available"} */}

      {fruits.length > 0 ?
        <>
          <h1>Fruits</h1>
          {fruits.map((fruit, i) => {
            return <p key={i}>{fruit} Price 150 PKR</p>
          })}
        </>
        : <>Fruits are not available.</>
      }

    </div>
  )
}
