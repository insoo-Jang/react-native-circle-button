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
import { ToggleButtonContainer, ToggleButtonWrap } from './style'
import { Platform } from 'react-native'

export default function CircleButton(props) {
    const {
        title,
        titleStyle,
        buttonStyle,
        type = 'solid',
        loading = false,
        loadingStyle,
        containerStyle,
        icon,
        iconPosition = 'top',
        iconSize = 20,
        iconContainerStyle,
        disabled,
        disabledStyle,
        disabledTitleStyle,
    } = props
    const [status, setStatus] = React.useState(false)

    return (
        <ToggleButtonWrap>
            <ToggleButtonContainer>
                <TouchableOpacity
                    style={{
                        borderRadius: 100,
                        fontSize: fontSizeSet.base,
                        height: 100,
                        width: 100,
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 5,
                        borderColor: colorSet.white,
                        borderWidth: 2,
                    }}
                    onPress={() => {
                        setStatus(!status)
                    }}
                >
                    <View
                        style={{
                            width: 85,
                            height: 85,
                            borderRadius: 100,
                            borderColor: status ? 'red' : '#1ACA5C',
                            borderWidth: 1.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: colorSet.white,
                        }}
                    ></View>
                </TouchableOpacity>
                <Text style={{ marginTop: 10, fontSize: fontSizeSet.base }}>
                    {status ? '작업중지' : '작업시작'}
                </Text>
            </ToggleButtonContainer>
        </ToggleButtonWrap>
    )
}

CircleButton.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    type: PropTypes.oneOf(['solid' | 'clear' | 'outline']),
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
