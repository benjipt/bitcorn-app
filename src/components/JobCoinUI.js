import React, { Component } from 'react'
import AppBar from './AppBar'
import BalanceCard from './BalanceCard'
import SendCard from './SendCard'
import ChartCard from './ChartCard'

export default class JobCoinUI extends Component {
    render() {
        return (
            <div>
                <AppBar 
                    address={ this.props.address }
                    handleLogout={ this.props.handleLogout } />
                <BalanceCard 
                    balance={ this.props.balance } />
                <SendCard 
                    address={ this.props.address }
                    getData={ this.props.getData } />
                <ChartCard 
                    data={ this.props.data } />
            </div>
        )
    }
}
