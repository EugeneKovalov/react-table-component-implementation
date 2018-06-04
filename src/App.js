import React, { Component } from "react";
import "./App.css";
import "./TableItem/TableItem";
import TableItem from "./TableItem/TableItem";

class App extends Component {
  state = {
    tableData: [
      { id: 1, title: "Germany" },
      { id: 2, title: "Italy" },
      { id: 3, title: "Spain" },
      { id: 4, title: "Portugal" }
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
        console.log("delete error");
      }
    );
  };

  changeTitleHandler = id => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id + " title was changed");
      }, 1000);
    });

    promise.then(
      result => {
        const itemIndex = this.state.tableData.findIndex(i => {
          return i.id === id;
        });

        const item = {
          ...this.state.tableData[itemIndex]
        };

        let changeInputElements = document.querySelectorAll(".changeTitle");

        item.title = changeInputElements[itemIndex].value;

        for (let element of changeInputElements.values()) {
          element.value = '';
        }

        const items = [...this.state.tableData];
        items[itemIndex] = item;

        this.setState({ tableData: items });
      },

      error => {
        console.log("error");
      }
    );
  };

  createNewData = () => {
      let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("New item was created");
      }, 1000);
    });

    promise.then(
      result => {
        let newTitleElement = document.querySelector('#newElementTitle');

        if (newTitleElement.value) {
          const items = [...this.state.tableData];
          items.push(
            {
              id: '_' + Math.random().toString(36).substr(2, 9), 
              title: newTitleElement.value 
            }
          );

          newTitleElement.value = '';
          this.setState({ tableData: items });
          console.log(this.state.tableData);
        }
      },
      
      error => {
        console.log("create error");
      }
    );
  }

  render() {
    let myData = this.state.tableData.map((data, index) => {
      return (
        <TableItem
          key={data.id}
          title={data.title}
          delete={() => this.deleteItemHandler(index)}
          changeTitle={() => this.changeTitleHandler(data.id)}
        />
      );
    });

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <td>
                <input type="text" id="newElementTitle" placeholder="Title of new element" />
                <button onClick={() => this.createNewData()}>Create new data</button>
              </td>
            </tr>
          </thead>
          <tbody>{myData}</tbody>
        </table>
      </div>
    );
  }
}

export default App;