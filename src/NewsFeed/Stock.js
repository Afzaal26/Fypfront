import React from 'react'
import Plot from 'react-plotly.js';

class Stock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }
    componentDidMount(){
        this.fetchStock();
    }
    fetchStock(){
        const PointerToThis = this;
        console.log(PointerToThis); 
        const API_KEY = '1LGFS2SRC9P18G43';
        let StockSymbol = 'IBM';
        let API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo';
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];


    fetch(API_Call)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);


                for(var key in data['Time Series(Daily)']){
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series(Daily)']
                    [key]['1. open']);
                }
                //console.log(stockChartXValuesFunction);
                PointerToThis.setState({
                    stockChartXValues: stockChartXValuesFunction,
                    stockChartYValues: stockChartYValuesFunction
                });
            }
        )
    }
    render(){
        return( 
            <div>
                <h1>Stock</h1>
                <Plot
        data={[
          {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
      />
               
               
               {/* <p>x-values: {this.state.stockChartXValues}</p>
                <p>y-values: {this.state.stockChartYValues}</p>*/}
            </div>
        )
    }
}


export default Stock