import React, { Component } from "react";

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

export default class TodoList3 extends Component {
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
              The goal of this step is to render a list of items with working
              checkboxes and deletion. We'll also add redux actions to toggle
              item completion and remove individual items.
            </div>
            <div style={styles.h4}> Tasks </div>
            <ul>
              <li style={styles.li}>
                {" "}Add two new actions with actionCreators,{" "}
                <code>REMOVE_ITEM</code> and <code>TOGGLE_ITEM_COMPLETED</code>{" "}
              </li>
              <li style={styles.li}>
                {" "}Update the reducer to handle these two new actions and
                update the redux state accordingly{" "}
              </li>
              <li style={styles.li}>
                {" "}Complete the Checkbox component showing whether it's
                checked or not, with a callback triggered on toggle.{" "}
              </li>
              <li style={styles.li}>
                {" "}Complete the List component to render all items with
                checkbox and delete character in a list that scrolls{" "}
              </li>
              <li style={styles.li}>
                {" "}When item is checked/unchecked or deleted, dispatch the
                appropriate actions{" "}
              </li>
            </ul>
            <div style={styles.h4}> Hints </div>
            <ul>
              <li style={styles.li}>
                {" "}<code>[1, 2, 3, 4].filter((val) => val !== 2)</code> -->
                [1, 3, 4]{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <code>
                  [1, 2, 3, 4].map((val) => val === 2 ? 10 : val)
                </code>{" "}
                --> [1, 10, 3, 4]{" "}
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
