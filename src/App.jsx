import './App.css';
import styles from './App.module.css';
import Profilecard from './Profilecard';
import TypewriterEffectDemo from './components/ui/typewritereffect';
import TextGenerateEffectDemo from './components/ui/textgenerator';
import StickyScrollRevealDemo from './components/ui/stciky';
import Buttons from './Buttons'
function App() {
  return (
    <>
    <div className={styles.maindiv}>
    <div className={styles.type}><TypewriterEffectDemo/></div>
    <div className={styles.profile}><Profilecard /></div>
    </div>
<TextGenerateEffectDemo/>  
<div className={styles.sticky}>

<StickyScrollRevealDemo />
</div>
<Buttons/>

    </>
  );
}

export default App;
