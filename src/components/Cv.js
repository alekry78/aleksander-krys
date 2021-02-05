import React from 'react';
import Navbar from "./Navbar";
import { Bar } from 'react-chartjs-2';
import {CSSTransition} from 'react-transition-group';
class CV extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    };
    render() {
        return (
            <div className="Cv__homepage">
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                <div className="Cv__container">
                    <Bar
                        className="chart"
                         data={{
                             labels:['HTML5','CSS3','SASS','GIT','JS ES6','REACT','REDUX'],
                             datasets:[{
                                 label: 'Experience',
                                 data:[3,3,2,1,2,1,0,4],
                                 barPercentage:0.5,
                                 backgroundColor:['#2EC4B6','#2EC4B6','#2EC4B6','#2EC4B6','#2EC4B6','#2EC4B6','#2EC4B6'],
                             }]
                         }}
                         height={300}
                         width={300}
                         options={{
                             chart:{
                                 defaultFontFamily:"'Roboto Mono', monospace",
                                 defaultFontColor:'#FFFFF3'
                             },
                             legend:{
                               labels:{
                                   fontFamily:"'Roboto Mono', monospace",
                                   fontColor:'#FFFFF3'
                               }
                             },
                             scales:{
                                 yAxes:[{
                                     ticks:{
                                         callback: function(label){
                                             switch (label){
                                                 case 0:
                                                     return 'Noob';
                                                 case 1:
                                                     return 'Beginner';
                                                 case 2:
                                                     return 'Average';
                                                 case 3:
                                                     return 'Advanced';
                                                 case 4:
                                                     return 'Expert';
                                             }
                                         }
                                     }
                                 }]
                             },
                             maintainAspectRatio:false,
                         }}
                    />
                </div>
                </CSSTransition>
            </div>

        )
    }
}
export default CV;