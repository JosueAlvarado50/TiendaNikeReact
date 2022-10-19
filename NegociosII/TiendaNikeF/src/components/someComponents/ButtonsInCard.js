import CardHome from "../UI/CardHome";
import HomeButton from "../UI/HomeButton";
const ButtonInCard = () => {
  return (
    <div>
      <ul>
        <li>
          <CardHome>
            <HomeButton>
              <h1>AIR</h1>
            </HomeButton>{" "}
          </CardHome>
          <CardHome>
            <HomeButton>
              <h1>Snickears</h1>
            </HomeButton>
          </CardHome>
        </li>
        <li>
          <CardHome>
            <HomeButton>
              <h1>Clothes</h1>
            </HomeButton>
          </CardHome>
          <CardHome>
            <HomeButton>
              <h1>accessories</h1>
            </HomeButton>
          </CardHome>
        </li>
      </ul>
    </div>
  );
};
export default ButtonInCard;
