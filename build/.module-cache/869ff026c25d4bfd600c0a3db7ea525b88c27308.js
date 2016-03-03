var Page = React.createClass({displayName: "Page",
	render : function(){
	return(	
		React.createElement("div", {className: "page"}, 
			React.createElement("h2", {className: "title"}, this.props.title), 
			React.createElement("img", {src: this.props.img}), 
			React.createElement("div", {className: "message"}, 
				this.props.message
			)
		));
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


var Box = React.createClass({displayName: "Box",
	getInitialState : function(){
		return {data : {}};
	},
	// title : "小鸡炖蘑菇",
	componentDidMount : function(){
		var data = getData(this.props.title,this);
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
			return (React.createElement(Page, {title: that.props.title, img: "error", message: "error"}));
		var page = data.result.map(function(item){
			return (
				React.createElement(Page, {title: that.props.title, img: item.img, message: item.message})
			);
		});
		return (
			React.createElement("div", null, 
			page
			)
		);
	}
});

ReactDOM.render(
	React.createElement(Box, {title: "小鸡炖蘑菇"}),
	document.getElementById('content')
);