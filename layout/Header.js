import Head from "next/head";
import App from "../components/app.js";
import { Provider } from "react-redux";
import Store from "../reducers/store.js";
import Turn from "../components/turn.js";

export default () => (
  <html>
    <body>
      <div>
        <Provider store={Store}>
          <Turn />
          <App />
        </Provider>
        <style jsx global>{`
          .board {
            justify-self: center;
            margin-right: auto;
            border: 1px solid black;
          }
          .board td {
            text-align: center;
            width: 100px;
            height: 100px;
            border: 1px solid black;
          }
          .scoreSheet {
            float: left;
            border: 1px solid black;
            text-align: center;
            margin-left: 100px;
            margin-right: 200px;
          }
          .scoreSheet td {
            height: 80px;
            width: 100px;
            border: 1px solid black;
          }
        `}</style>
      </div>
    </body>
  </html>
);
