import { Redirect, Route, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Register from './Pages/Auth/Register';
import { UserState } from './Redux/User/Interface';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/Store';
import Login from './Pages/Auth/Login';
import Container from './Pages/Home/Container/Container';
import ProfileContainer from './Pages/Profile/ProfileContainer';
import Search from './Pages/Search/Search';
import { Meeting } from './Pages/Meeting/Meeting';
import { Call } from './Pages/Meeting/Call';
import MeetingContainerComponent from './Pages/Meetings/MeetingContainerComponent';


const RootRouter: React.FC = () => {
    const UserReducer: UserState = useSelector((state: RootState) => state.user)
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                {UserReducer.user.current === null ? <Switch>
                    <Route path="/auth/register">
                        <Register />
                    </Route>
                    <Route path="/auth/login">
                        <Login />
                    </Route>
                    <Redirect to="/auth/login" />
                </Switch> :
                    <Switch>
                        <Route path="/home/:id">
                            <Container />
                        </Route>
                        <Route path="/profile/:id">
                            <ProfileContainer />
                        </Route>
                        <Route path="/search/:type">
                            <Search />
                        </Route>
                        <Route exact path="/meetings/:meeting_id">
                            <MeetingContainerComponent />
                        </Route>
                        <Route path="/meetings/test">
                            <Call />
                        </Route>
                        <Redirect to="/home/all" />
                    </Switch>}
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default RootRouter