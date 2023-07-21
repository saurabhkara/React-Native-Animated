import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import countries from '../helper/countries';

const DropDownTask = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    settingCurrentTime();
  }, [value]);

  const settingCurrentTime = () => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;

    const utc = localTime + localOffset;
    const offset = value; // UTC of Dubai is +04.00
    const dubai = utc + 3600000 * offset;
    const dubaiTimeNow = new Date(dubai).toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(dubaiTimeNow);
    console.log(dubaiTimeNow);
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Countries list
        </Text>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', marginTop: 25}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{time} </Text>
      </View>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countries}
          search
          maxHeight={300}
          labelField={'name'}
          valueField="timezone_offset"
          placeholder={!isFocus ? 'India' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.timezone_offset);
            setIsFocus(false);
          }}
          //   renderLeftIcon={() => <Text>S</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default DropDownTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
