import styled from 'styled-components/native'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from 'react-native-responsive-dimensions'
import { fontSizeSet } from './size'
import { colorSet } from './colors'

export const ToggleButtonWrap = styled.View`
    border: 1px solid red;
`
ToggleButtonWrap.displayName = 'ToggleButtonWrap'

export const ToggleButtonContainer = styled.View`
    border: 1px solid blue;
    align-items: center;
    width: 100px;
`
ToggleButtonContainer.displayName = 'ToggleButtonContainer'
