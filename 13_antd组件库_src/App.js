/*
 * @Date: 2023-03-20 11:10:27
 */
import React, { Component } from 'react'
import { Button, Calendar, theme } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
export default class App extends Component {
  onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
  render() {
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    }
    return (
      <div>
        <Button type="primary" icon={<DownloadOutlined/>}/>
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>
      </div>
    )
  }
}
