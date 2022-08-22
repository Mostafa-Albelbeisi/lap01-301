import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
       <HornedBeast title = "Dog" img = 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80' descr = "Puppy Dog Pictures"></HornedBeast>
       <HornedBeast title = "Dog" img = 'https://www.purina.co.nz/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0000_afghan_hound_0.jpg?itok=vkb8L2gC' descr = "Purina New Zealand Dog Breeds"></HornedBeast>
      </div>
    );
  }
}
export default Main;
