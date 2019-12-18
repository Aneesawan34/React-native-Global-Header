import DatePicker from "react-native-datepicker";
// https://www.npmjs.com/package/react-native-datepicker
{
    <DatePicker
    style={{ width: "90%" }}
    date={this.state.date}
    mode="date"
    placeholder="Select date"
    format="HH:mm"
    //  is24Hour={false}
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    // minuteInterval={10}
    iconComponent={
      <FontAwesome5
        size={20}
        color={theme.blue}
        name="calendar-alt"
        style={{ position: "absolute", left: 15 }}
      />
    }
    customStyles={{
      dateIcon: {
        position: "absolute",
        left: 0,
        top: 8,
        marginLeft: 12,

        width: 25,
        height: 25
      },

      dateInput: {
        marginLeft: 45,
        borderWidth: 0,
        alignItems: "flex-start"
      },
      placeholderText: {
        fontSize: 14,
        borderWidth: 0,

        color: FontColor.gray
      },
      dateText: {
        fontSize: 14,
        color: FontColor.black
      }
      // ... You can check the source to find the other keys.
    }}
    onDateChange={date => {
      this.setState({ date: date });
    }}
  />
}