import React,{Component} from "react"
//import PubSub from "pubsub-js"
import TodoHeader from "../TodoHeader/TodoHeader"
import TodoMain from "../TodoMain/TodoMain"
import TodoFooter from "../TodoFooter/TodoFooter"
import "./App.css"



class App extends Component{
    constructor(props){
        super(props)
        //设置初始状态
        this.state={
            todos:[{isDone:false,title:"吃饭"},{isDone:false,title:"睡觉"}], //isDone表示是否选中，title表示输入的内容
            isAllCheck:false
        }
    }
    //componentDidMount(){
   //订阅消息（删除todo）
       // PubSub.subscribe("delete",(index)=>{
         //   this.deleteTodo(index)
       // })
   // }
    addTodo=(todo) => {
        const todos = this.state.todos
        //添加在首位
        todos.unshift(todo)
        //更新状态
        this.setState({
            todos,
            isAllCheck:false
        })
    }
    //得到所有未选中的todo数组
    getUnchecked=() => {
        return this.state.todos.filter(todo=>!todo.isDone)
    }
    //更新指定todo的isDone
    updateCheck=() => {
        const todos=this.state.todos
        this.setState({
            todos,
            //有todo并且没有选中的个数是0
            isAllCheck:this.getUnchecked().length===0&&todos.length>0
        })
    }
    //删除指定下标的todo
    deleteTodo=(index) => {
        const todos=this.state.todos
        //删除
        todos.splice(index,1)
        //更新
        this.setState({
            todos,
            isAllCheck:this.getUnchecked().length===0&&todos.length>0
        })
    }
    //删除所有选中的todos
    deleteDoneTodos=() => {
        //得到所有没有勾选的todo
        const todos=this. getUnchecked()
        this.setState({
            todos,
            isAllCheck:false
        })
    }
    //设置所有todos的选中状态
    changeAllChecked=(isAllCheck) => {
        const todos=this.state.todos
        todos.forEach(todo=>{
            todo.isDone=isAllCheck
        })
        this.setState({
            isAllCheck,
            todos
        })

    }

    render(){
        //定义main标签的props
        const mainProps={
            todos:this.state.todos,
            updateCheck:this.updateCheck,
            deleteTodo:this.deleteTodo
        }
        const footerProps={
            totalCount:this.state.todos.length,
            doneCount:this.state.todos.filter(todo => todo.isDone).length,  //得到选中的todos数组的长度
            //var doneTodos=this.state.todos.filter(function(todo){
            // return todo.isDone})
            //doneTodos.length
            deleteDoneTodos:this.deleteDoneTodos,
            isAllCheck:this.state.isAllCheck,
            changeAllChecked:this.changeAllChecked
        }



        return(
            <div className="todoContainer">
                <div className="todo-wrap">
                    <TodoHeader addTodo={this.addTodo}/>
                    <TodoMain {...mainProps}/>
                    <TodoFooter {...footerProps}/>
                </div>
            </div>

        )
    }
}
export default App
