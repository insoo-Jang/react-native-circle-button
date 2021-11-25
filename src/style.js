import styled, { css } from 'styled-components/native'
import { fontSizeSet } from './size'
import { colorSet } from './colors'
import { Platform } from 'react-native'

export const ToggleButtonContainer = styled.TouchableOpacity`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizeSet.base}px;
    background: ${colorSet.disableBg};
    border: 2px solid ${colorSet.white};
    border-radius: ${(props) =>
        props.shape === 'circle' ? `${props.width}px` : 0};
    ${Platform.select({
        ios: css`
            box-shadow: 0 0 5px #ccc;
        `,
        android: css`
            elevation: 5;
        `,
    })}
`
ToggleButtonContainer.displayName = 'ToggleButtonContainer'

export const ToggleButtonInner = styled.View.attrs((props) => ({
    borderRadius: props.shape === 'circle' ? 100 : 0,
    height: props.height - 15,
    width: props.width - 15,
    borderWidth: 1.5,
    borderColor: props.isOn ? '#ff8585' : '#87e3a6',
    shadowColor: props.isOn ? 'red' : '#1ACA5C',
    ...Platform.select({
        android: {
            elevation: 5,
        },
    }),
}))`
    align-items: center;
    justify-content: center;
    background: ${colorSet.white};
`
ToggleButtonInner.displayName = 'ToggleButtonInner'

export const ToggleButtonTitle = styled.Text`
    margin-top: 10px;
    font-size: ${fontSizeSet.base}px;
    color: ${colorSet.normalTextColor};
`
ToggleButtonTitle.displayName = 'ToggleButtonTitle'
