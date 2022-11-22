import { useEffect, useState } from "react"

export const App = () => {
  const items = [
    {value: 'apple', viewValue: 'Яблоко'},
    {value: 'banana', viewValue: 'Банан'},
    {value: 'coconut', viewValue: 'Кокос'},
    {value: 'grape', viewValue: 'Виноград'}
  ]

  const [value, setValue] = useState('apple')

  useEffect(() => {
    const newOption = new Option('Груша', 'pear', true, true)
    document.forms.main.nameSelect.append(newOption)
  }, [])

  const onChange = event => {
    setValue(event.target.value)
    console.log(event.target.value)
  }

  return (
    <form name="main">
      <select name="nameSelect" value={value} onChange={onChange}>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.viewValue}
          </option>
        ))}
      </select>
    </form>
  )
}