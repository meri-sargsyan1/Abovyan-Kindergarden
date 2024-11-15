import AppHeader from "../appHeader/AppHeader";
import AppHeaderForm from "../appHeaderForm/AppHeaderForm";
import AppSlider from "../appSlider/AppSlider";
import AppInfo from "../appInfo/AppInfo";
import AppFooterForm from "../appFooterForm/AppFooterForm";
import AppFooter from "../appFooter/AppFooter";

const App = () => {
    return (
        <>
            <AppHeader/>
            <AppHeaderForm/>
            <div className="title"><p>Մենք հասկանում ենք,թե որքան կարևոր են կայուն սեցիալական կապերը երեխայի համար</p></div>
            <AppSlider/>
            <div className="title"><p>Մեր մանկապարտոզում ձեր երեխաների կյանքը դառնում է ավելի ապահով</p></div>
            <AppInfo/>
            <div className="title"><p>🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞🦋🐝🐞</p></div>
            <AppFooterForm/>
            <AppFooter/>
        </>
    )
}

export default App;