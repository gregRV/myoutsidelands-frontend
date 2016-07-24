import React, { Component, PropTypes } from 'react';
import Event from './Event';

export default class StageColumn extends Component {
  render() {
    const events = [
    {  
      tag:"recommended",
      name:"lcd soundsystem",
      stage:"Lands End",
      day:"2016-08-05",
      time:{  
        start:"2010",
        end:"2155"
      }
    },
    {  
      tag:"recommended",
      name:"skeelo",
      stage:"Lands End",
      day:"2016-08-05",
      time:{  
        start:"2010",
        end:"2155"
      }
    },
    {  
      tag:"recommended",
      name:"weezer",
      stage:"Lands End",
      day:"2016-08-05",
      time:{  
        start:"2010",
        end:"2155"
      }
    }
    ];
    const eventsToRender = events.map((ev) => {
      return <Event event={ev} />;
    });

    return <div>
      <p>Stage Column</p>
      {eventsToRender}
    </div>;
  }
}
