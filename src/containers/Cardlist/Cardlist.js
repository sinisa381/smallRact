import React from 'react';
import Card from '../../components/Card/Card';

// class Cardlist extends Component {
//    render(){
//       const { robots } = this.props;
//       return (
//          <div className="flex flex-wrap justify-center">
//             {robots.map(robot => {
//              return  <Card name={robot.name} email={robot.email} key={robot.id} />
//             })}
//          </div>
//       )
//    }
// }

const Cardlist = ({ robots }) =>
      <div className="flex flex-wrap justify-center">
         {robots.map(robot => 
            <Card name={robot.name} email={robot.email} key={robot.id} />
         )}
      </div>


export default Cardlist;