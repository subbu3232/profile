import './App.css';
import styles from './App.module.css';
import Profilecard from './Profilecard';
import TypewriterEffectDemo from './components/ui/typewritereffect';
import TextGenerateEffectDemo from './components/ui/textgenerator';
import StickyScrollRevealDemo from './components/ui/stciky';
import Buttons from './Buttons';
import { FaCloudDownloadAlt } from "react-icons/fa";
function App() {
  return (
    <>
    <div className={styles.maindiv}>
    <div className={styles.type}><TypewriterEffectDemo/></div>
    <div className={styles.profile}><Profilecard /></div>
    </div>
<TextGenerateEffectDemo/>  
<div className={styles.buttonContainer}>
<a href="/resume.pdf" download="Sai Subrahmanyam Sunkara.pdf" className={styles.downloadButton}>
  <FaCloudDownloadAlt className={styles.icon} /> Download Resume
</a>

</div>


<div className={styles.sticky}>

<StickyScrollRevealDemo />
</div>
<Buttons/>

    </>
  );
}

export default App;
