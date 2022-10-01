const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class New extends React.Component{
    render(){
        let {logs} = this.props;
        return (
            <DefaultLayout title = "Captain Logs" shipName= "">
                    <h1>New Logs</h1>
                <form action = "/logs" method = "POST">
                    <label htmlFor ="title">Title:</label>
                    <input type = "text" id = "title" name = "title"></input>
                    
                    <label htmlFor = "entry">Entry:</label>
                    <input type = 'text' id ="entry" name="entry"></input>

                    <label htmlFor = "shipIsBroken">Ship is Broken?</label>
                    <input type = "checkbox" id = "shipIsBroken" name = "shipIsBroken"></input>

                    <input type = "submit"></input>

                </form>

            </DefaultLayout>
        )
    }
}


module.exports = New;