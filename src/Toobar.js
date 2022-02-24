import React from 'react';
class Toobar extends React.Component{
    render(){
    const styles = {
        toolbar: {
            padding: 10,
            background: 'cyan'
        },
        dark: {
            background: 'purple',
            color: 'white',
        }      
    }
    return(
        <div style={styles.toolbar, styles.dark}>
          {this.props.children}
        </div>
      )
    }
  }

  export default Toobar