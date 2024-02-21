// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CoffeeChaino {
    function getProductLength() public view returns (uint) {
        uint maxID = 0;
        for (uint i = 0; i < products.length; i++) {
            if (products[i].productID > maxID) {
                maxID = products[i].productID;
            }
        }
        return maxID + 1;
    }

    struct Product {
        uint productID;
        string title;
        uint price;
        uint weight;
        string description;
        address payable seller;
        string ipfsHash;
    }

    Product[] public products;
    uint counter = 0;
    uint weiValue = 10**18;

    function registerProduct(string memory _title, string memory _description, uint _price, uint _weight, string memory _ipfsHash) public {
        require(_price > 0, "Price should be greater than zero");
        require(_weight > 0, "Weight should be greater than zero");
        Product memory tempProduct;
        tempProduct.title = _title;
        tempProduct.description = _description;
        tempProduct.price = _price * weiValue;
        tempProduct.weight = _weight;
        tempProduct.seller = payable(msg.sender);
        tempProduct.productID = counter++;
        tempProduct.ipfsHash = _ipfsHash;

        products.push(tempProduct);
    } 

    function addWeight(uint _productID, uint _weight) public {
        require(_weight > 0, "weight should be greater than zero");
        products[_productID].weight += _weight;
    }
}