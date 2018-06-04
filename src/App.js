import React, { Component } from "react";
import "./App.css";
import "./TableItem/TableItem";
import TableItem from "./TableItem/TableItem";

class App extends Component {
  state = {
    tableData: [
      { id: "ad", title: "Germany" },
      { id: "ae", title: "Italy" },
      { id: "af", title: "Spain" },
      { id: "ag", title: "Portugal" },
      { id: "ah", title: "Austria" },
      { id: "ai", title: "Denmark" },
      { id: "au", title: "England" },
      { id: "ak", title: "Ireland" }
    ]
  };

  render() {
    let myData = (
      <tr>
        {this.state.tableData.map((data, index) => {
          return <TableItem key={data.id} title={data.title} />;
        })}
      </tr>
    );

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <td>
                <button>Create new data</button>
              </td>
            </tr>
          </thead>
          <tbody>
           { myData }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
