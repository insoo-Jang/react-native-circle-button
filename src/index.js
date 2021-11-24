import React from 'react'
import {
    Button,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
} from 'react-native'
import { fontSizeSet } from './size'
import { colorSet } from './colors'
import PropTypes from 'prop-types'
import {
    ToggleButtonContainer,
    ToggleButtonInner,
    ToggleButtonTitle,
    ToggleButtonWrap,
} from './style'
import { SvgUri } from 'react-native-svg'
import { Platform } from 'react-native'
import PowerOff from '../assets/powerOff.svg'

export default function CircleButton(props) {
    const {
        title,
        titleStyle,
        buttonStyle,
        shape = 'circle',
        disabled,
        color,
        onPress,
        width,
        height,
    } = props
    const [status, setStatus] = React.useState(false)

    return (
        <ToggleButtonWrap>
            <ToggleButtonContainer
                style={{
                    borderRadius: 100,
                    height: 100,
                    width: 100,
                    elevation: 5,
                }}
                onPress={() => {
                    setStatus(!status)
                }}
                disabled={disabled}
            >
                <ToggleButtonInner
                    style={{
                        width: 85,
                        height: 85,
                        borderRadius: 100,
                        borderColor: status ? '#ff8585' : '#87e3a6',
                        borderWidth: 1.5,
                        elevation: 5,
                        shadowColor: status ? '#ff3535' : '#1ACA5C',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colorSet.white,
                    }}
                >
                    <PowerOff
                        width={40}
                        height={40}
                        fill={status ? 'red' : '#1ACA5C'}
                    />
                </ToggleButtonInner>
            </ToggleButtonContainer>
            <ToggleButtonTitle>
                {status ? '작업중지' : '작업시작'}
            </ToggleButtonTitle>
        </ToggleButtonWrap>
    )
}

CircleButton.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    shape: PropTypes.oneOf(['circle' | 'square']),
    loading: PropTypes.bool,
    loadingStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    icon: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.node,
        PropTypes.string,
    ]),
    iconPosition: PropTypes.oneOf(['left' | 'right' | 'top' | 'bottom']),
    iconSize: PropTypes.number,
    iconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    disabled: PropTypes.bool,
    disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    disabledTitleStyle: PropTypes.string,
}
