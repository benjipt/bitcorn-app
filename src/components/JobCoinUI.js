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
                <div className="container-fluid">
                    <div className="row ps-3">
                        <div className="row col-4 me-3">
                            <BalanceCard 
                                balance={ this.props.balance } />
                            <SendCard 
                                address={ this.props.address }
                                getData={ this.props.getData } />
                        </div>
                        <div className="row col-8">
                            <ChartCard 
                                data={ this.props.data } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
