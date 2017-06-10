import React, { Component } from "react";

import Page from "./Page";
import styles from "../styles";
import { PageHeader } from "../components";

const containerStyle = {
  display: "flex",
  flexDirection: "row"
};

const contentStyle = {
  paddingRight: "30px",
  marginTop: "-15px"
};

const hotResp = `{
  data: {
    children: [{
      title,
      subreddit,
      preview: {
        images: [{
          source: {url}
        }
      ]
    }
  }, ... ],
  kind: "t3",
  }
}`;

const commentResp = `[{
  data: {
    children: [{
      title,
      subreddit,
      preview: {
        images: [{
          source: {url}
        }
      ]
    }
  }, ... ],
  kind: "t3",
}, {
  data: {
    children: [{
      body,
      subreddit,
      author,
    }, ... ],
    kind: "t1",
}]`;

export default class Reddit4 extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <PageHeader
              title={this.props.title}
              author={"@AnonSequitur"}
              authorURL={"https://twitter.com/AnonSequitur"}
            />
            <div style={styles.p}>
              Now that we have the token, we can move on to fetching the posts
              and displaying them in a list.
              <br />
              <br />
              <a href="https://www.reddit.com/dev/api/#GET_hot">
                API Documentation
              </a>
            </div>
            <div style={styles.h4}> Tasks </div>
            <ul>
              <li style={styles.li}>
                Navigate from the <code>Login.js</code> screen to{" "}
                <code>Posts.js</code>
              </li>
              <li style={styles.li}>
                Implement <code>postsRedux.js</code>, we'll be fetching the
                "hot" subreddit which is located on <code>/hot</code>.
                The response should look as follows: <br />
                <code>{hotResp}</code>
                <br />
                We will also be fetching posts from the{" "}
                <code>
                  /random
                </code>{" "}
                endpoint. Write your actions and reducers so that we can load
                the posts
                from <code>/hot</code> into the Posts tab and the posts from{" "}
                <code>/random</code> into the Random tab. Be aware, the response
                from random is
                a little different. It looks like this: <br />
                <code>{commentResp}</code>
                <ul>
                  <li style={styles.li}>
                    Write actions to set in redux state that a post fetch is
                    pending.
                  </li>
                  <li style={styles.li}>
                    Write actions to set the posts on success or an error on
                    failure.
                  </li>
                  <li style={styles.li}>Write reducers for these cases.</li>
                </ul>
              </li>
              <li style={styles.li}>
                In the <code>Posts.js</code> fetch the "hot" posts on mount, and
                then render the posts into a ScrollView
              </li>
              <li style={styles.li}>
                In the <code>Random.js</code> fetch the "random" posts on mount,
                and then render the posts into a ListView
              </li>
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}
