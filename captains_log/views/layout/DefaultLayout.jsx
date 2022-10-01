const React = require('react')

class DefaultLayout extends React.Component {
    render() {
   const  {title, shipName} = this.props
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel= "stylesheet" href = "/styles.css"/>
                
                </head>
                <body>
                <div className="bg"/>
                <div className="star-field"/>
                <div className="layer"/>
                <div className="layer"/>
                <div className="layer"/> 
                
                    <nav>
                    
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;