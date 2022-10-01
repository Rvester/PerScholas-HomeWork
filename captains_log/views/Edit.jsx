const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class New extends React.Component{
    render(){
        let {logs} = this.props;
        return (
            <DefaultLayout title = "Captain Logs" shipName= "">
                    <h1>Edit Logs</h1>
                <form action ={`/logs/${logs._id}?_method=PUT`}  method = "POST">
                    <label htmlFor ="title">Title:</label>
                    <input type = "text" id = "title" name = "title" defaultValue = {logs.title}></input>
                    
                    <label htmlFor = "entry">Entry:</label>
                    <input type = 'text' id ="entry" name="entry" defaultValue = {logs.entry}></input>

                    <label htmlFor = "shipIsBroken">Ship is Broken?</label>
                    <input type = "checkbox" id = "shipIsBroken" name = "shipIsBroken"></input>

                    <input type = "submit"/>

                </form>

            </DefaultLayout>
        )
    }
}


module.exports = New;