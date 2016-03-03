var Page = React.creatClass({
	render : function(){
		React.createElement("div", {className: "page"}, 
			React.createElement("h2", {className: "title"}, this.props.title), 
			React.createElement("img", {src: this.props.img}), 
			React.createElement("div", {className: "message"}, 
				this.props.message
			)
		)
	}
});

var getData = function(name)
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
			return data;
		},
		error : function()
		{
			alert("server Error");
			return {statu:0};
		}
	});
}


var Box = React.creatClass({
	getInitialState : function(){
		return {data : {}};
	},

})