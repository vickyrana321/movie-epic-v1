import axios from "axios";

// export default axios.create({
//     baseURL:"https://localhost:8081",
//     // headers: {"ngrok-skip-browser-warning": "true"}
// });
export default axios.create({
    baseURL:"http://localhost:8081",
    // headers: {"Content-type":"applicaton/json"}
});
// const base_url="http://localhost:8081";
// export default base_url; Invalid character found in method name