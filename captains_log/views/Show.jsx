const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')





class Show extends React.Component {
    render (){
        const {logs} = this.props 
        return(
            <DefaultLayout title = {`${logs.title} details`} shipName ="name">
                    <h1>Logs</h1>
                <p>
                 {logs.title} was {logs.entry}
                </p>
                <p>
                  {logs.shipIsBroken? 'The Ship is operable' : 'The ship has been destroyed...lost'} 
                </p>
                <button>
                    <a href = {`/logs/${logs._id}/edit`}>Edit</a>
                </button>
            
                <form action ={`/logs/${logs._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value = "Delete"/>
                </form>
                <nav>
                    <a href ="/logs">Back</a>
                </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Show;