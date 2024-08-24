import React, { useState, useEffect } from 'react';
import { Picker, Button, Space, CalendarPicker } from 'antd-mobile';
import dayjs from 'dayjs';

export interface Props {
  show?: Boolean;
}

const defaultRange: [Date, Date] = [
  dayjs().toDate(),
  dayjs().add(2, 'day').toDate(),
]

const Search = (props: Props) => {
  const { show } = props;

  const [cities, setCities] = useState([[{ label: '北京', value: '10001' }, { label: '上海', value: '10002' }]])
  const [selectedCity, setSelectedCity] = useState([10001]);
  const [value, setValue] = useState<(string | null)[]>([])
  const [times, setTimes] = useState();
  const [dateShow, setDateShow] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const handleCityChange = (value) => {
    console.log(value);
  }

  const handleDate = () => {
    setDateShow(!dateShow)
  }

  useEffect(() => {
  }, [])

  return (
    <div className='search'>
      <div className='search-addr'>
        <Picker
          columns={cities}
          value={value}
          onConfirm={setValue}
          onSelect={(val, extend) => {
            console.log('onSelect', val, extend.items)
          }}
        >
          {(items, { open }) => {
            return (
              <Space align='center'>
                <Button onClick={open}>City</Button>
                {items.every(item => item === null)
                  ? '未选择'
                  : items.map(item => item?.label ?? '未选择').join(' - ')}
              </Space>
            )
          }}
        </Picker>
      </div>
      <div className='search-time' onClick={handleDate}>
        <p className='search-time_left'>rent time</p>
        <p className='search-time_right'>times</p>
      </div>
      <Button
        onClick={() => {
          setVisible2(true)
        }}>
        select date
        <CalendarPicker
          visible={visible2}
          defaultValue={defaultRange}
          selectionMode='range'
          onClose={() => setVisible2(false)}
          onMaskClick={() => setVisible2(false)}
          onChange={val => {
            console.log(val)
          }}
        />
      </Button>
    </div >
  )
}

export default Search;
