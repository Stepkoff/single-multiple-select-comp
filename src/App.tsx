import {Select} from "./components/Select";
import s from './App.module.sass'
import {useState} from "react";
import {SelectOption} from "./components/Select/Select.tsx";

const options = [
  {label: 'One', value: 1},
  {label: 'Two', value: 2},
  {label: 'Three', value: 3},
  {label: 'Four', value: 4},
  {label: 'Five', value: 5},
]

export const App = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])


  return (
    <div className={s.App}>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
    </div>
  )
}

