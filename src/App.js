import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <section className="profile">
        <h2 id="h2">Hassen Bouzidi</h2>
        <img
          className="avatar"
          src="https://thumbs.dreamstime.com/b/bald-man-avatar-icon-isolated-white-background-bald-man-avatar-icon-125451253.jpg"
          alt="Hassen Bouzidi"
          width={100}
          height={100}
        />
        <ul>
         <li>
            <b>Profession: </b>
            Digital Designer
          </li>
          <li>
            <b>BIO: </b> 
            Short professional bios can be just as effective <br/> as long ones that detail your accomplishments.
          </li>
        </ul>
      </section>
    </div>
  );
}
