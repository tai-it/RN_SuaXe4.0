import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Icon, CheckBox } from 'react-native-elements'
import Loading from '../Loading'
import { connect } from 'react-redux'
import { changeServices, changeAmbulatory, fetchStations } from '../../redux/optionsRedux/actions'
import Navigator from '../../utils/Navigator'

class OptionsModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedServices: props.options.selectedServices,
    }
  }

  handleServicePressed = service => {
    const { selectedServices } = this.state
    const index = selectedServices.indexOf(service)
    if (index > -1) {
      selectedServices.splice(index, 1)
    } else {
      selectedServices.push(service)
    }
    this.setState({ selectedServices })
  }

  handleButtonSearchPressed = () => {
    this.props.onChangeSelectedServices(this.state.selectedServices)
    this.props.onFetchStations()
    Navigator.showModal('StationListModal')
  }

  handleCloseModal = () => {
    Navigator.dismissModal(this.props.componentId)
  }

  render() {
    const { options: { fetchingServices, services }, app: { backgroundColor, textColor } } = this.props
    const { selectedServices } = this.state
    return (
      <View>
        <View style={[styles.header, { backgroundColor: backgroundColor }]}>
          <Icon type="antdesign" name="left" color={textColor} onPress={this.handleCloseModal} />
          <Text style={{ fontSize: 20, color: textColor }}>CHỌN DỊCH VỤ</Text>
          <View />
        </View>
        {fetchingServices && <Loading style={{ justifyContent: "center", alignItems: "center", height: '90%' }} message="Đang tìm dịch vụ" /> ||
          <>
            <FlatList
              data={services}
              numColumns={2}
              renderItem={({ item }) =>
                <CheckBox
                  containerStyle={{ flex: 1, maxWidth: '44.5%' }}
                  title={item}
                  onPress={() => this.handleServicePressed(item)}
                  checked={selectedServices.indexOf(item) > -1 ? true : false}
                />
              }
              keyExtractor={item => item}
              ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
            />
            <TouchableOpacity
              style={{
                paddingVertical: 18,
                backgroundColor: backgroundColor,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={this.handleButtonSearchPressed}
            >
              <Text style={{ fontSize: 18, color: '#fff' }}>TÌM QUANH ĐÂY</Text>
            </TouchableOpacity>
          </>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9'
  }
})

const mapStateToProps = state => {
  return {
    app: state.app,
    auth: state.auth,
    options: state.options
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeSelectedServices: services => dispatch(changeServices(services)),
    onChangeAmbulatory: option => dispatch(changeAmbulatory(option)),
    onFetchStations: () => dispatch(fetchStations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsModal)