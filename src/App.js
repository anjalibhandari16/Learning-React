// import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
// import ClassComponentGreet from './Components/ClassComponentGreet';
// import Message from './Components/StateClassComponent';
// import Count from './Components/Count';
// import EventHandingClick from './Components/EventHandingClick';
// import EventHandingClickComponent from './Components/EventHandingClickComponent';
import GetList from './HTTPandReact/getList';
import GetEmail from './HTTPandReact/getEmail';

import ClassComponent from './NewComponents/1-ClassComponent';
import IncrementFunction from './NewComponents/2-IncrementClassComponent';
import IncrementFunctionComponent from './NewComponents/3-IncrementFunctionalComponent';
import EventBind from './NewComponents/4-EventBind';
import ParentComponent from './NewComponents/5-ParentComponent';
import ConditionalRendering from './NewComponents/7-Greet_ComponentRendering';
import ListRendering from './NewComponents/8-ListRendering';
import StyleSheet from './NewComponents/9-StyleSheet';
import FormComponent from './NewComponents/10-FormComponent';
import LifeCycleComponent from './NewComponents/11-LifeCycleComponent';
import Fragments from './NewComponents/12-Fragments';
import Portals from './NewComponents/13-Portals';
import ClickComponent from './NewComponents/14-ClickComponent';
import HoverComponent from './NewComponents/15-HoverComponent';
import ClickCount from './NewComponents/17-ClickCount';
import HoverCounter from './NewComponents/18-HoverCounter';
import KeyboardCounter from './NewComponents/19-KeyboardCounter';
import User from './NewComponents/20-User';
import RenderProps from './NewComponents/21-Render';
import ComponentA from './ContextComponent/1-ComponentA';
import {UserProvider} from './ContextComponent/useContext';

function App() {
  return (
    <div className="App">

      {/* <Greet name='my Name is Will Smith '>
        <p>this is Childern Component</p>
      </Greet> */}
      {/* <ClassComponentGreet /> */}
      {/* <Message /> */}
      {/* <Count /> */}
      {/* <EventHandingClick/> */}
      {/* <EventHandingClickComponent/> */}

      {/* ----------------- */}


      {/* <ClassComponent name='hello i am sweetu'>
        <p>See you next year</p>
      </ClassComponent> */}
      {/* <IncrementFunction/> */}
      {/* <IncrementFunctionComponent /> */}
      {/* <EventBind/> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <StyleSheet /> */}
      {/* <FormComponent /> */}
      {/* <LifeCycleComponent /> */}
      {/* <Fragments /> */}
      {/* <Portals /> */}
      {/* <ClickComponent name={'Hello Lady '}/> */}
      {/* <HoverComponent /> */}

      {/* <ClickCount />
      <HoverCounter />
      <KeyboardCounter /> */}
      {/* <User name="hello World" /> */}
      {/* <User name={(isLogged)=> isLogged ? 'Hello World' : 'Hello Guest'}/>
      <RenderProps render={(count,clickHandle) => <ClickCount count={count} clickHandle={clickHandle} />}/>
      <RenderProps render={(count,clickHandle)=><HoverCounter count={count} clickHandle={clickHandle}/>} /> */}

      {/* <UserProvider value="Babie">
          <ComponentA />
      </UserProvider> */}

      {/* <GetList /> */}
      <GetEmail />

    </div>
  );
}

export default App;
