import React, { Component } from 'react'
import {Lq1ny} from "./LQ1NY";
import {Lq1nn} from "./LQ1NN";
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
export  class Lq1n extends Component {
    constructor()
    {
        super();
        this.state={
          ansNoStatus:false,
          ansYesStatus:false,
        }
    }
    ansYes=()=>
    {
          this.setState({
            ansYesStatus:true,
            ansNoStatus:false
          });
    }
    ansNo=()=>
    {
          this.setState({
            ansNoStatus:true,
            ansYesStatus:false,
          });
    }
  render() {
    return (
      <div>
          <Panel>
         <strong>Does it work after connecting the cable?</strong>
         <br/><br/><Button label="Yes, it works" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is still not working" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </Panel>
          {this.state.ansYesStatus ? <Lq1ny></Lq1ny> :  null     }
           {this.state.ansNoStatus ? <Lq1nn></Lq1nn> :  null     }
      </div>
    )
  }
}
