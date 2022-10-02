const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')



class Index extends React.Component {
    render(){
        const {logs} = this.props
        
        return(
            <DefaultLayout title = {`Captain details`} shipName = "name">
                <h1>Captain's Database</h1>
                <ul>
                    {logs.map((logs, i) => {
                        return (
                            <li key={i}>
                              <a href = {`/logs/${logs._id}`}> {logs.title} </a> {logs.entry} 
                            </li>
                        )
                    })}
                </ul>
                    <nav>
                        <a href = '/logs/New'>Create a new Log</a>
                    </nav>

            </DefaultLayout> 
        )
    }
}


module.exports = Index;