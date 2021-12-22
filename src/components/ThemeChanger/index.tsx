import React, {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import Switcher from 'react-switch'

import * as TS from './styles'


type props = {
  toogleTheme: () => void
}

const ThemeChanger = ({toogleTheme}: props) => {

  const {colors, title, background} = useContext(ThemeContext);

  return (
    <TS.Container>
      <Switcher
        onChange={toogleTheme}
        checked={title === "Dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={14}
        handleDiameter={22}
        offColor={colors.primary}
        onColor={colors.secundary}
        offHandleColor={background.primary}
        onHandleColor={colors.primary}
        activeBoxShadow="0 0 3px #DDD"
          
      />
    </TS.Container>
  )
}
export default ThemeChanger