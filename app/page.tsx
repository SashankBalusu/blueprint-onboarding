import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src="../assets/images/bp-logo.png"></img>
          <h1>blueprint &nbsp;</h1>
          <h1>blog</h1>
        </div>
        <div className={styles.post}>
          <div className={styles.headingInfo}>
            <ProfileIcon size={24} />
            <p>rbeggs</p>
            <p>September 19</p>
          </div>
          <p className={styles.descriptionText}>
            In response to the growing homelessness crisis in San Francisco, a
            local nonprofit organization, Code Tenderloin, has launched a
            comprehensive initiative aimed at providing long-term solutions for
            individuals experiencing homelessness. The organization, founded in
            2015, is dedicated to addressing both immediate needs and underlying
            causes of homelessness through a combination of shelter services,
            job training programs, and mental health support. Read more online:
            <a style={{ color: 'blue' }} href="https://www.codetenderloin.org">
              https://www.codetenderloin.org/
            </a>
          </p>
          <img
            style={{
              width: '-webkit-fill-available',
              borderRadius: '8px',
              marginTop: '2%',
            }}
            src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
          ></img>
          <div className={styles.postInteractions}>
            <HeartIcon size={24} />
            <p>256 Likes</p>
            <ShareIcon size={24} />
          </div>
        </div>

        <hr style={{ marginTop: '4%', marginBottom: '4%' }}></hr>
        <div>
          <div className={styles.headingInfo}>
            <ProfileIcon size={24} />
            <p>daviddd</p>
            <p>September 20</p>
          </div>
          <p className={styles.descriptionText + ' ' + styles.comment}>
            This organization is doing amazing work tackling the complex root
            causes of the issue.
          </p>
        </div>
        <div>
          <div className={styles.headingInfo}>
            <ProfileIcon size={24} />
            <p>vppraggie</p>
            <p>September 21</p>
          </div>

          <p className={styles.descriptionText + ' ' + styles.comment}>
            Thanks for sharing!
          </p>
        </div>
      </div>
    </main>
  );
}
