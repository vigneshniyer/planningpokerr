import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { updateTest } from '../../store/actions/projectActions'

class Dashboard extends Component {
    state = {
        test:''
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]:e.target.value
        })
        this.props.updateTest(e.target.value)
    }
    render() {
        const { projects, auth, notifications, testCollection } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />

        return(
            <div className="dashboard container">
                <input type="text" id="test" value={testCollection && testCollection[0].test || ''} onChange={this.handleChange}/>
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth,
        testCollection: state.firestore.ordered.testCollection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTest: (test) => dispatch(updateTest(test))
    }
  }

export default compose(
        // higher order components
        connect(mapStateToProps, mapDispatchToProps),
        firestoreConnect(
            [ 
                { collection: 'projects', orderBy:["createdAt", "desc"] },
                { collection: 'notifications', limit: 3, orderBy:["time", "desc"]},
                {
                    collection: 'testCollection', limit: 1
                }
            ]
        )
    )(Dashboard);