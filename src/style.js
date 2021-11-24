import styled from 'styled-components/native'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from 'react-native-responsive-dimensions'
import { fontSizeSet } from './size'
import { colorSet } from './colors'

export const ToggleButtonWrap = styled.View`
    align-items: center;
`
ToggleButtonWrap.displayName = 'ToggleButtonWrap'

export const ToggleButtonContainer = styled.TouchableOpacity`
    font-size: ${fontSizeSet.base}px;
    background: ${colorSet.disableBg};
    align-items: center;
    justify-content: center;
    border: 2px solid ${colorSet.white};
`
ToggleButtonContainer.displayName = 'ToggleButtonContainer'

export const ToggleButtonInner = styled.Text``
ToggleButtonInner.displayName = 'ToggleButtonInner'

export const ToggleButtonTitle = styled.Text`
    margin-top: 10px;
    font-size: ${fontSizeSet.base}px;
    color: ${colorSet.normalTextColor};
`
ToggleButtonTitle.displayName = 'ToggleButtonTitle'
