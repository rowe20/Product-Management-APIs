# Product-Management-APIs
## _Product Management APIs ( Using EXPRESS)_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
## Emphasis

*The Aim of this app is to show how data is being passed via "Postman" using POST request*  

_It is an Assignment given by **VNSGU** ._

__It's a simple App ,without MongoDB__

### Requirements

* Nodejs 16.13.0 LTS and above
* Visual Studio Code or Other Editors

## SCHEMA:
_PRODUCT_
- product id : String
- title : String
- price : String
- category : Array of String
- company id : String
- seller id : Array of String

_COMPANY_
- company id : String
- name : String
- product ids : Array of String

_SELLER_
- seller id : String
- name : String
- product ids : Array of String

## POST REQUESTS:

_ADD_
- add new company
- add new seller
- add new product

_RETRIEVE_
- fetch company details based on product name
- fetch seller details based on product name
- fetch all products of a company
- fetch all products of a seller

_UPDATE_
- update company (add/remove products)
- update seller (add/remove products)
- update product (add/remove category)

_DELETE_
- delete company
- delete seller
- delete product

## Want to see the coding?
- [CLick Here](https://replit.com/@RoshanDavid/OnePiece#index.js) to play it !
- Total memory of the system
