import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav"
export default class extends Controller {
  connect() {
    this.closed = true;
  }

  static targets = ["menu"]

  static values = {
    closed : Boolean
  }

  toggle(event){
    if(this.closed){
      this.openit()
    }else{
      this.closeit()
    }
  }

  openit(){
    this.closed = !this.closed
    this.menuTarget.classList.add("header__nav--opened")
    this.menuTarget.classList.remove("header__nav--closed")
  }

  closeit(){
    this.closed = !this.closed
    this.menuTarget.classList.remove("header__nav--opened")
    this.menuTarget.classList.add("header__nav--closed")
  }
}