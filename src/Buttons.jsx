import styles from './Buttons.module.css';
const Buttons=()=>{
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/sai-subrahmanyam-sunkara-22465424b/", "_blank", "noopener noreferrer");
      };
      const handleGitHubClick=()=>{
        window.open("https://github.com/subbu3232", "_blank", "noopener noreferrer");

      }
      const handleInstagramClick=()=>{
       
        window.open(" https://www.instagram.com/young_wolf3/", "_blank", "noopener noreferrer");

      }
      const handleWhatsappClick=()=>{
        window.open("https://wa.me/9640618225", "_blank", "noopener noreferrer");

      }
    return(
        <div className={styles.container}>
<div className={styles.icons} onClick={handleLinkedInClick}>LinkedIn</div>
<div className={styles.icons} onClick={handleGitHubClick}>GitHub</div>
<div className={styles.icons} onClick={handleInstagramClick}>Instagram</div>
<div className={styles.icons} onClick={handleWhatsappClick}>WhatsApp</div>
        </div>
    )
}
export default Buttons;