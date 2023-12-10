import { Component } from "react";
import { getRandomColor } from "../helpers/getRandomColor";
import Image from "./Image";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomColors: {
        backgroundColor: getRandomColor(),
        color: getRandomColor(),
      },
    };
  }
  changeColors = () => {
    this.setState({
      randomColors: {
        backgroundColor: getRandomColor(),
        color: getRandomColor(),
      },
    });
  };
  render() {
    const { randomColors } = this.state;

    return (
      <>
        <section
          id="hobbies"
          style={{
            backgroundColor: randomColors.backgroundColor,
            color: randomColors.color,
            cursor: "pointer",
          }}
          onClick={this.changeColors}
        >
          <h3>Хобі</h3>
          <ul>
            <li>Танці</li>
            <li>Читання</li>
            <li>Подорожі</li>
          </ul>
        </section>

        <section id="fav-movies">
          <h3>Улюблені фільми</h3>
          <ol>
            <li>Голодні ігри</li>
            <li>Аватар</li>
            <li>Ла Ла Ленд</li>
          </ol>
        </section>

        <section id="fav-city">
          <h3 id="element12">Улюблене місто, де побувала - Барселона</h3>
          <p>
            Барселона — це приморське місто і порт з чудовою культурною та
            історичною спадщиною, унікальною атмосферою і чарівною архітектурою.
            Центр Каталонії приваблює своїм м’яким кліматом і розслабленим
            способом життя, сюрреалістичними будівлями — шедеврами Гауді,
            пляжами та морем, смачною їжею та розвагами на будь-який смак.
          </p>
          <Image />
        </section>
      </>
    );
  }
}

export default Content;
