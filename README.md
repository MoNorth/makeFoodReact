# 用React写的食谱的小Demo
刚开始接触Reactjs，不熟。写起来还比较费劲。这里只说两个问题。

1. 如果将html代码作为字符串直接传入，reactjs是不会直接解析的，方法是：

   ```javascript
   <div className="message" dangerouslySetInnerHTML={{__html : this.props.message}}/>
   ```

2. 由于ajax是异步执行，想要获取返回的json数据，跟不上节奏，所以需要直接在ajax中使用setState(),或者传入callback。