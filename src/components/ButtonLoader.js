import React, { useState } from "react";
const covidTravelDataURL = 'https://open-countries.herokuapp.com/travels'

function ButtonLoader() {
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        fetch(covidTravelDataURL)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 12000);
    };

    return (
        <div style={{ marginTop: "60px" }}>
        <button className="loading-button" onClick={fetchData} disabled={loading}>
        {loading && (
            <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
            />
        )}
            {loading && <span>Loading Data from Server</span>}
            {!loading && <span>Fetch Map Data from Heroku Server</span>}
        </button>
    </div>
    );
}

export default ButtonLoader;

// import React, { Component } from "react";

// export default class ButtonLoader extends Component {
//     state = {
//         loading: false
//     };

//     fetchData = () => {
//         fetch('https://open-countries.herokuapp.com/travels')
//         this.setState({ loading: true });

//         setTimeout(() => {
//             this.setState({ loading: false });
//         }, 12000);

//     };

//     render() {
//         const { loading } = this.state;

//         return (
//             <div style={{ marginTop: "60px" }}>
//             <button className="loading-button" onClick={this.fetchData} disabled={loading}>
//             {loading && (
//                 <i
//                     className="fa fa-refresh fa-spin"
//                     style={{ marginRight: "5px" }}
//                 />
//             )}
//                 {loading && <span>Loading Data from Server</span>}
//                 {!loading && <span>Fetch Map Data from Heroku Server</span>}
//             </button>
//         </div>
//         );
//     }
// }