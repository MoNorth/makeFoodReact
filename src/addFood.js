var Page = React.createClass({
	render : function(){
	return(	
		<div className="page">
			<h2 className="title">{this.props.title}</h2>
			<img src={this.props.img} />
			<div className="message" dangerouslySetInnerHTML={{__html : this.props.message}}/>
		</div>);
	}
});

var getData = function(name,that)
{
	$.ajax({
		url:"http://food.northk.wang/",
		type : "GET",
		dataType : "jsonp",
		data : {		
			name : name
		},
		success : function(data)
		{
			// document.write(data.statu);
			that.setState({data : data});
		},
		error : function()
		{
			alert("server Error");
			that.setState({data : {statu : 0}});
		}
	});
}


var Box = React.createClass({
	getInitialState : function(){
		return {data : {}};
	},
	title : "小鸡炖蘑菇",
	componentDidMount : function(){
		var data = getData("小鸡炖蘑菇",this);
		this.setState({data : data});
		var but = document.getElementById('ok');
		var name = document.getElementById('searchText');
		var that = this;
		but.onclick = function(e){
			var data = getData(name.value,that);
			that.title = name.value;
			// that.setState({data : data});

		}
	},
	render : function(){
		var data = this.state.data;
		var that = this;
		if(!data || !data.statu)
			return (<Page title={that.title} img={"error"} message={"error"} />);
		var page = data.result.map(function(item){
			// alert(item.message)
			return (
				<Page title={that.title} img={item.img} message={item.message} />
			);
		});
		return (
			<div>
			{page}
			</div>
		);
	}
});

ReactDOM.render(
	<Box />,
	document.getElementById('content')
);