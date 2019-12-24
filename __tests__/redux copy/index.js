import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions/MathAction';

class Home extends Component {

    _onPressReset() {
        this.props.actions.reset();
    }

    _onPressInc() {
        this.props.actions.increase();
    }

    _onPressDec() {
        this.props.actions.decrease();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.counter}>{this.props.result}</Text>
                <TouchableOpacity style={styles.reset} onPress={() => this._onPressReset()}>
                    <Text>归零</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.start} onPress={() => this._onPressInc()}>
                    <Text>加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stop} onPress={() => this._onPressDec()}>
                    <Text>减1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    counter: {
        fontSize: 50,
        marginBottom: 70
    },
    reset: {
        margin: 10,
        backgroundColor: 'yellow'
    },
    start: {
        margin: 10,
        backgroundColor: 'yellow'
    },
    stop: {
        margin: 10,
        backgroundColor: 'yellow'
    }
})

const mapStateToProps = state => ({
    result: state.MathReducer.count
})

const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);