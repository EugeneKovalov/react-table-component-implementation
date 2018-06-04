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
      { id: "ag", title: "Portugal" }
    ]
  };

  deleteItemHandler = itemIndex => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemIndex + " was deleted");
      }, 1000);
    });

    promise.then(
      result => {
        const items = [...this.state.tableData];
        items.splice(itemIndex, 1);

        this.setState({ tableData: items });
      },
      error => {
        console.log('delete error');  
      }
    );
  };

  render() {
    let myData = this.state.tableData.map((data, index) => {
          return <TableItem key={data.id} title={data.title} delete={() => this.deleteItemHandler(index) } />;
    });

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
