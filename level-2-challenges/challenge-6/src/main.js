// complete the challenge here 👇

// 1. Prevent Hyperlink to Black Hole
const blackHoleLink = document.querySelector('#blackHoleLink');
blackHoleLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Black Hole avoided!');
});

// 2. Block Unauthorized Communications
const communicationForm = document.querySelector('#communicationForm');
communicationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Unauthorized communication blocked!');
});

// 3. Activate Rescue Beacon
const rescueBeaconButton = document.querySelector('#rescueBeaconButton');
rescueBeaconButton.addEventListener('click', (event) => {
  console.log('Rescue beacon activated!');
  event.stopPropagation();
});
document.addEventListener('click', () => {
  console.log('Rescue beacon deactivated!');
});

// 4. Retrieve Space Supplies
class SuppliesContainer {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  onClick(event) {
    event.stopPropagation();
    let supply = event.target;

    if (supply.tagName.toLowerCase() !== 'span') {
      // not a supply
      return;
    }

    console.log(supply.textContent);
  }

  _currentStock() {
    return this._elem.children.length;
  }

  addNewSupply() {
    let stockCount = this._currentStock();
    const newSupply = document.createElement('span');
    newSupply.textContent = `Supply ${++stockCount}`;
    this._elem.append(newSupply);
  }
}
const suppliesContainerInstance = new SuppliesContainer(suppliesContainer);

const addSupplyButton = document.querySelector('#addSupplyButton');
addSupplyButton.addEventListener('click', (event) => {
  suppliesContainerInstance.addNewSupply();
});
