import "./card.css";

const Card = ({ title, intro, GithubLink }) => {
   return (
      <a href={GithubLink}>
         <div className="card">
            <h4>{title}</h4>
            <p>
               {intro} <br />
               <br />
               <span className="small">*click to go to Github Repo</span>
            </p>
         </div>
      </a>
   );
};

export default Card;
