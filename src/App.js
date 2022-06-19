import React, {useState} from "react";
import './App.css';

// class News extends React.Component {
//     state = {
//         date: new Date(),
//         score: 5
//     };
//
//     componentDidMount() {
//         let loading = true;
//         this.setState({score: 7}, () => {
//             loading = false;
//         });
//
//     }
//
//     render() {
//         const {header, intro} = this.props;
//         const {score} = this.state;
//         return (
//             <div className="News">
//                 <h2>{header}</h2>
//                 <p>{intro}</p>
//                 <p>{score}</p>
//             </div>
//         );
//     }
// }


function News({ header, intro }) {
    const [score, setScore] = useState(5);

    return (
        <div className="News">
            <h2>{header}</h2>
            <p>{intro}</p>
            <p>{score}</p>
        </div>
    );
}

const news = [
    {header: 'Nagłówek 1', intro: 'Intro 1'},
    {header: 'Nagłówek 2: Breaking news', intro: 'Intro 2'},
    {header: 'Nagłówek 3: Nie śpie bo coś tam', intro: 'Intro 3'}
];

function App() {
    return (
        <div>
            {news.map((elem, index) => (
                <News key={`news-${index}`} header={elem.header} intro={elem.intro} />
            ))}
        </div>
    )
}

export default App;
