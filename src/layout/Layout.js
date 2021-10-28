import './Layout.css';
import styles from './../assets/css/modules/my-style.module.css';

function Layout() {
    return (
      <div className="layout">
        <h3>Layout</h3>

        <div className={styles.bigblue}>
          <h4>Bigblue</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit mi leo, non volutpat turpis accumsan at. Sed aliquet
            euismod mollis. Morbi euismod commodo arcu, a consectetur est
            bibendum imperdiet. Sed non euismod enim. Donec blandit scelerisque
            lacinia. Praesent venenatis nunc porttitor placerat tincidunt. Duis
            in commodo felis. Aenean a sem cursus, finibus nulla ut, lobortis
            dolor. Duis maximus dui ac odio consectetur hendrerit. Fusce varius,
            eros sit amet volutpat dignissim, orci lectus sollicitudin nulla,
            non luctus odio tellus et orci. Duis in tortor augue. In hac
            habitasse platea dictumst. Aenean fermentum mauris id lacus
            porttitor facilisis. Maecenas sed tincidunt velit.
          </p>
          <p>
            Nunc gravida quam sed nisi tristique tincidunt. Aenean sed posuere
            sapien. Aenean maximus tellus sed justo malesuada, ac pretium augue
            consequat. Praesent volutpat diam arcu, lacinia semper tortor
            finibus eu. Sed porttitor ante id nibh condimentum dapibus at et
            risus. Aliquam erat volutpat. Donec lacinia velit ligula, a maximus
            nunc cursus eget. Donec sed mi aliquam, dignissim lectus sed,
            molestie felis. Ut sem augue, vulputate et pulvinar ac, lacinia
            auctor libero. Suspendisse eleifend varius urna, varius rhoncus
            nulla eleifend nec. Phasellus interdum tellus quis tristique
            pharetra.
          </p>
        </div>
      </div>
    );
}
export default Layout;