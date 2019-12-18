import Dialog, {DialogContent} from 'react-native-popup-dialog';


{
    <TouchableOpacity style={Styles.applyButton}
    onPress={() => 
      this.setState({visible: true})
    }
  >
  <Dialog
      visible={this.state.visible}
      onTouchOutside={() => {
        this.setState({visible: false});
      }}>
      <DialogContent style={{width: 300, height: 200}}>
        <TouchableOpacity
          onPress={() => this.setState({visible: false})}
          style={{alignSelf: 'flex-end', right: -10, marginTop: 10}}>
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: '#999',
            }}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '80%',
          }}>
          <Text
            style={{
              fontSize: 22,
              alignSelf: 'center',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#a32a29',
            }}>
            Confirmation
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Leave request submitted successfully
          </Text>
        </View>
      </DialogContent>
    </Dialog>
    <Text style={{color: 'black', fontSize: 15}}>APPLY</Text>
  </TouchableOpacity>
}