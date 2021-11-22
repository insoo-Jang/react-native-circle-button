import React from 'react'
import { Text, View, Button } from 'react-native'
import { fontSizeSet } from './size'
import { colorSet } from './colors'
import PropTypes, { bool, object } from 'prop-types'

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
        <View>
            <Button
                buttonStyle={{
                    height: 50,
                    fontSize: fontSizeSet.base,
                    marginBottom: 15,
                    backgroundColor: colorSet.primary,
                }}
                title={status ? '작업중지' : '작업시작'}
                onPress={() => {
                    setStatus(!status)
                }}
            />
        </View>
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
