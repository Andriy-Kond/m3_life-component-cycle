import React, { PureComponent } from "react";

// у PureComponent вже вбудовано поверхневе порівняння наступного і поточного стейтів, тому shouldComponentUpdate не потрібен. Але порівняння поверхневе, тому важливо не мутувати масиви/об'єкти. Тобто треба створювати кожен раз новий масив/об'єкт. Інакше порівняння (по посиланню) поверне що вони однакові і перерендер не відбудеться.
class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // перерендер відбудеться лише за умови коли...
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log("Re-render :>>", Date.now(), new Date().toLocaleTimeString());

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => {
            return (
              <button
                type="button"
                key={item.label}
                onClick={() => {
                  this.setActiveTabIdx(idx);
                }}>
                {item.label}
              </button>
            );
          })}
        </div>

        <div>
          <h1>{activeTab.label}</h1>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
