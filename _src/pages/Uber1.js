import React, { Component } from "react";

import DefaultPage from "./DefaultPage";
import styles from "../styles";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

export default class Uber extends Component {
  render() {
    return (
      <DefaultPage {...this.props}>
        <div style={containerStyle}>
          <div style={{ paddingRight: "30px" }}>
            <div style={styles.p}>
              Let's start by making the searchbar/header for the app. Let's make
              sure we smoothly morph from the single searchbar hovering over the
              map into the double searchbar that sits above the search results.
            </div>
            <div style={styles.p}>
              To get a really close look at the animation, you can download this
              video and try scrubbing through it frame-by-frame:{" "}
              <a
                href={
                  "https://dl.dropboxusercontent.com/u/24487100/uber-animation.mov"
                }
              >
                full res animation
              </a>. You can also look at the Uber app (although the animation is
              a bit different... and more clunky!).
            </div>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <img height={200} src={"uber-step-header-animation.png"} />
            </div>
            <div style={styles.p}>
              Start by rendering <code>LocationSearchHeader</code> into the{" "}
              <code>Main</code> container. It will probably be easiest to think
              of the search header as having two states: expanded and collapsed.
              You can then use <code>react-native-animatable</code> and the{" "}
              <code>transition</code> prop to animate each element in the header
              between those two states.
            </div>
            <div style={styles.p}>
              In collapsed state, the elements are:
            </div>
            <ul>
              <li>White box in the background</li>
              <li>Black square</li>
              <li>"Where to?" text</li>
            </ul>
            <div style={styles.p}>
              In expanded state, the elements are:
            </div>
            <ul>
              <li>White box in the background, now much larger</li>
              <li>Black square</li>
              <li>Grey vertical bar</li>
              <li>Grey dot</li>
              <li>Light grey background with "Work" text</li>
              <li>Darker grey background with "Where to?" text</li>
            </ul>
            <div style={styles.p}>
              For elements which exist in the expanded state but not the
              collapsed state, try animating the opacity between 0 and 1 so they
              smoothly appear and disappear.
            </div>
            <div style={styles.p}>
              For simplicity, you don't need to make the search fields{" "}
              <i>actually work</i> yet (i.e. accept user input). Just use View
              and Text and get it looking correct.
            </div>
            <div style={styles.h3}>Hints</div>
            <div style={styles.p}>
              It's probably easiest to build the entire header (including both
              transition states) in just this one component file. You'll want to
              set the style of each element you render to{" "}
              <code>{`{position: 'absolute'}`}</code>, and render in terms of
              absolute positions using{" "}
              <code>{`{top, right, bottom, left'}`}</code>, rather than using
              flexbox.
            </div>
            <div style={styles.p}>
              You'll also want to use <code>zIndex</code> to make sure elements
              overlap in the correct way.
            </div>
          </div>
        </div>
      </DefaultPage>
    );
  }
}
