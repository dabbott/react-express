import React, { Component } from "react";
import { Link } from "react-router";

import { PageHeader } from "../components";
import Page from "./Page";
import styles from "../styles";

const containerStyle = {
  display: "flex",
  flexDirection: "row"
};

const contentStyle = {
  paddingRight: "30px",
  marginTop: "-15px"
};

export default class TodoList2 extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <PageHeader
              title={this.props.title}
              author={"Gabe G'Sell"}
              authorURL={"http://gabegsell.com/"}
            />
            <div style={styles.p}>
              The goal of this step is to get Input working with local component
              state. Then, using that input, we'll build the functionality to
              add an item to the todo list.
            </div>
            <div style={styles.h4}> Tasks </div>
            <ul>
              <li style={styles.li}>
                {" "}Complete the Input.js component to render our TextInput and
                manage its value in local state. Use that component in App.js's{
                  " "
                }
                <code>render</code>{" "}
              </li>
              <li style={styles.li}>
                {" "}Add a new action <code>ADD_ITEM</code> and actionCreator{" "}
                <code>addItem</code> to prepend a new item to the todo list{" "}
              </li>
              <li style={styles.li}>
                {" "}Write a reducer to handle <code>ADD_ITEM</code> and update
                the items in the redux state accordingly{" "}
              </li>
              <li style={styles.li}>
                {" "}When a user submits text from Input, add that new item to
                the list by dispatching our new action.{" "}
              </li>
            </ul>
            <div style={styles.h4}> Hints </div>
            <ul>
              <li style={styles.li}>
                {" "}You can find a similar Input component here:{" "}
                <Link to={"react_redux"}>React Redux</Link>{" "}
              </li>
            </ul>
          </div>
          <div style={{ border: "1px solid black" }}>
            <img width={280} src={"todo-screenshot.png"} />
          </div>
        </div>
      </Page>
    );
  }
}
