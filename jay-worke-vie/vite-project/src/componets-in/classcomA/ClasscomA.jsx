import React from "react";
// import '../classcomA/componets'
class ComponetClassA extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"jay",
            age:"25"
        }
    }
    componentDidMount(){
        this.setState({name:"Taiger"});
    }
    render() {
        return(
            <div>
        
                {/* <h1>{this.props.name}</h1> */}
           
            </div>
        )
    }
}
export default ComponetClassA;