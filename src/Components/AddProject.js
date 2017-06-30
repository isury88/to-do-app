import React, { Component } from 'react';
import uuid from 'uuid';


class AddProject extends Component {

	constructor() {
		super();
		this.state = {
			newProject:{}
		}
	}

	static defaultProps = {
		categories: [ "Presentation App", "Multimedia App ", "Interactive App "]
	}

	handleSubmit(e) {
		if(this.refs.title.value === ''){
			alert("Title is required!");
		}else{
			this.setState({newProject:{
				id: uuid.v4(),
				title:this.refs.title.value,
				category: this.refs.category.value
			}}, function() {
				//console.log(this.state);
				this.props.AddProject(this.state.newProject);
			});
		}
		e.preventDefault();
	}
	
  render() {

  	let categoryOption = this.props.categories.map(category => {
  		return <option key={category} value={category}>{category}</option>
  	});

    return (
      <div>
       <h3 className="btn-success text-center">Add Project</h3>

       <form onSubmit={this.handleSubmit.bind(this)} >
       	<div>
       		<label className="mr-sm-2">Title</label><br />
       		<input className="form-control form-control-lg" type="text" ref="title" />
       	</div>
       	<br />
       	<div>
       		<label className="mr-sm-2">Category</label><br />
       		<select className="form-control form-control-lg" ref="category"> 
			{categoryOption}
       		</select>
       	</div><br />
       	<button type="submit" value="submit" className="btn btn-primary" >Submit</button>
       </form>


      </div>
    );
  }
}

export default AddProject;